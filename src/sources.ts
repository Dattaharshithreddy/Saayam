import { guides } from './data/guides';

export type Source = { host: string; url: string; label: string };

/** Links that are not information sources (WhatsApp chat, our own site). */
const NOT_SOURCES = ['wa.me', 'github.io'];

/** host keeps 'www.' when the link uses it — some sites (incometax, tdscpc) do not open without it. */
/** Every official website the guides link to — one entry per site, A–Z. Shown in the app and the store listing. */
export function allSources(): Source[] {
  const seen = new Map<string, Source>();
  for (const g of guides)
    for (const l of g.links) {
      const m = /^https?:\/\/([^/?#]+)/.exec(l.url);
      if (!m) continue;
      const host = m[1].replace(/^www\./, '').toLowerCase();
      if (NOT_SOURCES.some((x) => host === x || host.endsWith('.' + x))) continue;
      if (!seen.has(host)) seen.set(host, { host: m[1].toLowerCase(), url: `https://${m[1]}`, label: l.label });
    }
  return [...seen.values()].sort((a, b) => a.host.replace(/^www\./, '').localeCompare(b.host.replace(/^www\./, '')));
}
