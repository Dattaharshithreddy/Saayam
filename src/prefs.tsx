import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const KEY = 'saayam.prefs.v1';

type Stored = {
  saved: string[];
  /** guideId -> indexes of documents the user has ticked. */
  ticks: Record<string, number[]>;
  bigText: boolean;
};

const EMPTY: Stored = { saved: [], ticks: {}, bigText: false };

type Ctx = Stored & {
  isSaved: (id: string) => boolean;
  toggleSaved: (id: string) => void;
  isTicked: (id: string, i: number) => boolean;
  toggleTick: (id: string, i: number) => void;
  clearTicks: (id: string) => void;
  setBigText: (v: boolean) => void;
  /** Multiplier for reading text: 1 or 1.2. */
  scale: number;
};

const PrefsContext = createContext<Ctx | null>(null);

export function PrefsProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<Stored>(EMPTY);

  useEffect(() => {
    AsyncStorage.getItem(KEY)
      .then((raw) => {
        if (!raw) return;
        const v = JSON.parse(raw) as Partial<Stored>;
        setState({ saved: v.saved ?? [], ticks: v.ticks ?? {}, bigText: !!v.bigText });
      })
      .catch(() => {});
  }, []);

  const update = useCallback((fn: (s: Stored) => Stored) => {
    setState((prev) => {
      const next = fn(prev);
      AsyncStorage.setItem(KEY, JSON.stringify(next)).catch(() => {});
      return next;
    });
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      ...state,
      scale: state.bigText ? 1.2 : 1,
      isSaved: (id) => state.saved.includes(id),
      toggleSaved: (id) =>
        update((s) => ({
          ...s,
          saved: s.saved.includes(id) ? s.saved.filter((x) => x !== id) : [id, ...s.saved],
        })),
      isTicked: (id, i) => (state.ticks[id] ?? []).includes(i),
      toggleTick: (id, i) =>
        update((s) => {
          const cur = s.ticks[id] ?? [];
          const next = cur.includes(i) ? cur.filter((x) => x !== i) : [...cur, i];
          return { ...s, ticks: { ...s.ticks, [id]: next } };
        }),
      clearTicks: (id) =>
        update((s) => {
          const { [id]: _drop, ...rest } = s.ticks;
          return { ...s, ticks: rest };
        }),
      setBigText: (v) => update((s) => ({ ...s, bigText: v })),
    }),
    [state, update],
  );

  return <PrefsContext.Provider value={value}>{children}</PrefsContext.Provider>;
}

export function usePrefs(): Ctx {
  const ctx = useContext(PrefsContext);
  if (!ctx) throw new Error('usePrefs must be used inside PrefsProvider');
  return ctx;
}
