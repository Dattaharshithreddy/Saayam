import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Platform } from 'react-native';
import { router } from 'expo-router';
import { ReminderTemplate, reminderTemplates } from './data/reminders';
import { Lang } from './types';

/** Reminders live only on the phone. Alerts are local notifications — nothing goes online. */

export type Reminder = { id: string; tpl: string; name?: string; date?: string; notifIds: string[] };

const KEY = 'saayam.reminders.v1';
const CHANNEL = 'reminders';
const HOUR = 9;

const isNative = Platform.OS === 'android' || Platform.OS === 'ios';

export const tplById = (id: string): ReminderTemplate | undefined => reminderTemplates.find((t) => t.id === id);

// ───────────────────────────────────────── dates

export function parseISO(d: string): Date | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(d);
  if (!m) return null;
  const x = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  return x.getMonth() === Number(m[2]) - 1 ? x : null;
}

export function toISO(d: Date): string {
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function startOfToday(): Date {
  const n = new Date();
  return new Date(n.getFullYear(), n.getMonth(), n.getDate());
}

/** Next date this reminder is about (the expiry, or the next yearly date). */
export function nextDate(r: Reminder): Date | null {
  const t = tplById(r.tpl);
  if (!t) return null;
  if (t.kind === 'date') return r.date ? parseISO(r.date) : null;
  const today = startOfToday();
  const cands = t.dates.flatMap(({ m, d }) => [new Date(today.getFullYear(), m - 1, d), new Date(today.getFullYear() + 1, m - 1, d)]);
  return cands.filter((x) => x >= today).sort((a, b) => a.getTime() - b.getTime())[0] ?? null;
}

export function daysUntil(d: Date): number {
  return Math.round((d.getTime() - startOfToday().getTime()) / 86400000);
}

// ───────────────────────────────────────── notifications

async function notif() {
  return isNative ? await import('expo-notifications') : null;
}

let setupDone = false;
async function setup() {
  const N = await notif();
  if (!N || setupDone) return N;
  setupDone = true;
  N.setNotificationHandler({
    handleNotification: async () => ({ shouldShowBanner: true, shouldShowList: true, shouldPlaySound: true, shouldSetBadge: false }),
  });
  if (Platform.OS === 'android') {
    await N.setNotificationChannelAsync(CHANNEL, { name: 'Reminders', importance: N.AndroidImportance.HIGH }).catch(() => {});
  }
  return N;
}

/** Ask once for permission; returns whether alerts can be shown. */
export async function ensurePermission(): Promise<boolean> {
  const N = await setup();
  if (!N) return false;
  try {
    const cur = await N.getPermissionsAsync();
    if (cur.granted) return true;
    if (!cur.canAskAgain) return false;
    return (await N.requestPermissionsAsync()).granted;
  } catch {
    return false;
  }
}

const fmt = (d: Date, lang: Lang) =>
  d.toLocaleDateString(lang === 'te' ? 'te-IN' : 'en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

async function schedule(r: Reminder, lang: Lang): Promise<string[]> {
  const N = await setup();
  const t = tplById(r.tpl);
  if (!N || !t) return [];
  const title = '⏰ ' + (r.name || t.title[lang]);
  const ids: string[] = [];
  try {
    if (t.kind === 'date') {
      const due = r.date ? parseISO(r.date) : null;
      if (!due) return [];
      for (const before of t.daysBefore) {
        const at = new Date(due.getFullYear(), due.getMonth(), due.getDate() - before, HOUR, 0);
        if (at.getTime() <= Date.now()) continue;
        const body =
          before === 0
            ? lang === 'te' ? `ఈరోజే గడువు (${fmt(due, lang)}). ${t.note.te}` : `Due today (${fmt(due, lang)}). ${t.note.en}`
            : lang === 'te' ? `${before} రోజుల్లో గడువు — ${fmt(due, lang)}. ${t.note.te}` : `${before} days left — due ${fmt(due, lang)}. ${t.note.en}`;
        ids.push(
          await N.scheduleNotificationAsync({
            content: { title, body, data: { guideId: t.guideId ?? null } },
            trigger: { type: N.SchedulableTriggerInputTypes.DATE, date: at, channelId: CHANNEL },
          }),
        );
      }
    } else {
      for (const { m, d } of t.dates) {
        ids.push(
          await N.scheduleNotificationAsync({
            content: { title, body: t.note[lang], data: { guideId: t.guideId ?? null } },
            trigger: { type: N.SchedulableTriggerInputTypes.YEARLY, month: m - 1, day: d, hour: HOUR, minute: 0, channelId: CHANNEL },
          }),
        );
      }
    }
  } catch {
    // Scheduling can fail without permission; the reminder still shows in the list.
  }
  return ids;
}

async function cancel(ids: string[]) {
  const N = await notif();
  if (!N) return;
  for (const id of ids) await N.cancelScheduledNotificationAsync(id).catch(() => {});
}

// ───────────────────────────────────────── React

type Ctx = {
  reminders: Reminder[];
  add: (tpl: string, opts: { name?: string; date?: string }, lang: Lang) => Promise<{ alerts: boolean }>;
  remove: (id: string) => Promise<void>;
};

const RemCtx = createContext<Ctx>({ reminders: [], add: async () => ({ alerts: false }), remove: async () => {} });

export function RemindersProvider({ children }: { children: ReactNode }) {
  const [list, setList] = useState<Reminder[]>([]);

  useEffect(() => {
    AsyncStorage.getItem(KEY)
      .then((raw) => raw && setList(JSON.parse(raw)))
      .catch(() => {});
    let sub: { remove: () => void } | undefined;
    if (isNative)
      setup()
        .then((N) => {
          // Tapping a reminder opens its guide.
          sub = N?.addNotificationResponseReceivedListener((resp) => {
            const gid = (resp.notification.request.content.data as { guideId?: string | null } | undefined)?.guideId;
            if (gid) router.push({ pathname: '/guide/[id]', params: { id: gid } });
          });
        })
        .catch(() => {});
    return () => sub?.remove();
  }, []);

  const persist = (next: Reminder[]) => {
    setList(next);
    AsyncStorage.setItem(KEY, JSON.stringify(next)).catch(() => {});
  };

  const add = useCallback<Ctx['add']>(
    async (tpl, opts, lang) => {
      const alerts = await ensurePermission();
      const r: Reminder = { id: `${tpl}-${Date.now()}`, tpl, name: opts.name?.trim() || undefined, date: opts.date, notifIds: [] };
      r.notifIds = alerts ? await schedule(r, lang) : [];
      persist([...list, r]);
      return { alerts };
    },
    [list],
  );

  const remove = useCallback<Ctx['remove']>(
    async (id) => {
      const r = list.find((x) => x.id === id);
      if (r) await cancel(r.notifIds);
      persist(list.filter((x) => x.id !== id));
    },
    [list],
  );

  const value = useMemo(() => ({ reminders: list, add, remove }), [list, add, remove]);
  return <RemCtx.Provider value={value}>{children}</RemCtx.Provider>;
}

export const useReminders = () => useContext(RemCtx);
