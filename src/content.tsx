import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Platform } from 'react-native';
import { rebuildIndex } from './bot/engine';
import { APP_VERSION, CONTENT_URL } from './config';
import { directory } from './data/directory';
import { rules } from './data/eligibility';
import { guides } from './data/guides';
import { CONTENT_DATE, CONTENT_VERSION } from './data/version';
import { APP_VERSION_FALLBACK, ContentPack, newerApp, validPack } from './contentPack';

/**
 * Guide content can be updated without a new app release.
 *
 * The app ships with the guides built in (works fully offline). When online, at most every
 * 12 hours it reads a small manifest from GitHub Pages; if a newer content version is there,
 * it downloads it once, checks it, saves it on the phone and switches to it. Nothing about the
 * user is sent — it is a plain file download.
 */


type Manifest = { version: number; date: string; file: string; minApp?: string };

APP_VERSION_FALLBACK.value = APP_VERSION;

const FILE_NAME = 'saayam-content.json';
const LAST_CHECK = 'saayam.content.lastCheck';
const CHECK_EVERY_MS = 6 * 60 * 60 * 1000;

// ───────────────────────────────────────── storage (file on phone, localStorage on web)

async function readStored(): Promise<string | null> {
  try {
    if (Platform.OS === 'web') return globalThis.localStorage?.getItem(FILE_NAME) ?? null;
    const { File, Paths } = await import('expo-file-system');
    const f = new File(Paths.document, FILE_NAME);
    return f.exists ? await f.text() : null;
  } catch {
    return null;
  }
}

async function writeStored(text: string): Promise<void> {
  try {
    if (Platform.OS === 'web') {
      globalThis.localStorage?.setItem(FILE_NAME, text);
      return;
    }
    const { File, Paths } = await import('expo-file-system');
    const f = new File(Paths.document, FILE_NAME);
    if (!f.exists) f.create();
    await f.write(text);
  } catch {
    // Storage full or unavailable: keep using what is in memory.
  }
}

// ───────────────────────────────────────── checks

// ───────────────────────────────────────── apply

let current = { version: CONTENT_VERSION, date: CONTENT_DATE };

function apply(p: ContentPack) {
  guides.splice(0, guides.length, ...p.guides);
  directory.splice(0, directory.length, ...p.directory);
  rules.splice(0, rules.length, ...p.rules);
  rebuildIndex();
  current = { version: p.version, date: p.date };
}

async function loadSaved(): Promise<boolean> {
  const raw = await readStored();
  if (!raw) return false;
  try {
    const p = JSON.parse(raw);
    if (validPack(p) && p.version > current.version) {
      apply(p);
      return true;
    }
  } catch {}
  return false;
}

async function fetchJson(url: string, ms: number): Promise<any> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), ms);
  try {
    const res = await fetch(url, { signal: ctrl.signal, cache: 'no-store' as RequestCache });
    if (!res.ok) throw new Error(String(res.status));
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}

export type CheckResult = 'updated' | 'latest' | 'offline';

/** Look for newer guides online. Returns what happened. */
async function checkOnline(): Promise<CheckResult> {
  try {
    AsyncStorage.setItem(LAST_CHECK, String(Date.now())).catch(() => {});
    const m = (await fetchJson(CONTENT_URL, 10000)) as Manifest;
    if (!m || typeof m.version !== 'number' || m.version <= current.version || newerApp(m.minApp)) return 'latest';
    const url = /^https?:/.test(m.file) ? m.file : CONTENT_URL.replace(/[^/]*$/, '') + m.file;
    const p = await fetchJson(url, 60000);
    if (!validPack(p) || p.version <= current.version) return 'latest';
    await writeStored(JSON.stringify(p));
    apply(p);
    return 'updated';
  } catch {
    return 'offline';
  }
}

// ───────────────────────────────────────── React

type Ctx = { version: number; date: string; checking: boolean; checkNow: () => Promise<CheckResult> };
const ContentContext = createContext<Ctx>({ version: CONTENT_VERSION, date: CONTENT_DATE, checking: false, checkNow: async () => 'latest' });

export function ContentProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState(current);
  const [checking, setChecking] = useState(false);

  const checkNow = useCallback(async () => {
    setChecking(true);
    const r = await checkOnline();
    setChecking(false);
    setState({ ...current });
    return r;
  }, []);

  useEffect(() => {
    let alive = true;
    (async () => {
      if (await loadSaved()) alive && setState({ ...current });
      const last = Number((await AsyncStorage.getItem(LAST_CHECK).catch(() => null)) ?? 0);
      if (Date.now() - last > CHECK_EVERY_MS && (await checkOnline()) === 'updated') alive && setState({ ...current });
    })();
    return () => {
      alive = false;
    };
  }, []);

  const value = useMemo(() => ({ ...state, checking, checkNow }), [state, checking, checkNow]);
  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

/** Subscribe a screen to content updates (re-renders when new guides arrive). */
export function useContent() {
  return useContext(ContentContext);
}
