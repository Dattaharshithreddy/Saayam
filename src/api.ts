import { Guide, Lang } from './types';

export type ChatMessage = { role: 'user' | 'assistant'; content: string };
export type AskResult = { answer: string; sources: { title: string; url: string }[] };

/**
 * The app never holds the Anthropic API key. It talks to the small proxy in
 * /server, whose URL is set at build time with EXPO_PUBLIC_API_URL.
 */
export const API_URL = process.env.EXPO_PUBLIC_API_URL ?? '';

export class NotConfiguredError extends Error {}

/** Plain-text version of a guide, sent along so answers stay consistent with it. */
export function guideAsContext(g: Guide): string {
  const list = (items: { en: string }[]) => items.map((i) => `- ${i.en}`).join('\n');
  return [
    `Guide: ${g.title.en} (checked ${g.lastChecked})`,
    g.summary.en,
    `Who can apply:\n${list(g.whoCanApply)}`,
    `Documents:\n${list(g.documents)}`,
    `Fees:\n${g.fees.map((f) => `- ${f.item.en}: ${f.amount.en}`).join('\n')}`,
    `Steps:\n${list(g.steps)}`,
    `Where:\n${list(g.whereToApply)}`,
    `Timeline: ${g.timeline.en}`,
    `Links: ${g.links.map((l) => l.url).join(', ')}`,
  ].join('\n\n');
}

export async function ask(messages: ChatMessage[], lang: Lang, context?: string): Promise<AskResult> {
  if (!API_URL) throw new NotConfiguredError();
  const res = await fetch(`${API_URL.replace(/\/$/, '')}/ask`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages, lang, context }),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return (await res.json()) as AskResult;
}

/** Sends a "wrong information" report to the server, which keeps them for review. */
export async function sendFeedback(guideId: string, lang: Lang, message: string): Promise<void> {
  if (!API_URL) throw new NotConfiguredError();
  const res = await fetch(`${API_URL.replace(/\/$/, '')}/feedback`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ guideId, lang, message }),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
}
