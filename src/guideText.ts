import { ui } from './i18n';
import { Guide, Lang } from './types';

/**
 * Plain-text versions of a guide, used for reading aloud and sharing.
 * Kept free of markdown so WhatsApp and text-to-speech both handle it well.
 */
export function guideSections(g: Guide, lang: Lang): string[] {
  const t = (x: { en: string; te: string }) => x[lang];
  const stepWord = lang === 'te' ? 'దశ' : 'Step';
  return [
    `${t(g.title)}. ${t(g.summary)}`,
    `${t(ui.whoCanApply)}. ${g.whoCanApply.map(t).join('. ')}`,
    `${t(ui.documents)}. ${g.documents.map(t).join('. ')}`,
    `${t(ui.fees)}. ${g.fees.map((f) => `${t(f.item)}: ${t(f.amount)}`).join('. ')}`,
    `${t(ui.steps)}. ${g.steps.map((s, i) => `${stepWord} ${i + 1}. ${t(s)}`).join(' ')}`,
    `${t(ui.whereToApply)}. ${g.whereToApply.map(t).join('. ')}`,
    `${t(ui.timeline)}. ${t(g.timeline)}`,
    `${t(ui.tips)}. ${g.tips.map(t).join('. ')}`,
  ];
}

export function guideShareText(g: Guide, lang: Lang): string {
  const t = (x: { en: string; te: string }) => x[lang];
  const lines: string[] = [];
  lines.push(`*${t(g.title)}*`, '', t(g.summary), '');
  lines.push(`✅ *${t(ui.whoCanApply)}*`, ...g.whoCanApply.map((x) => `• ${t(x)}`), '');
  lines.push(`📄 *${t(ui.documents)}*`, ...g.documents.map((x) => `☐ ${t(x)}`), '');
  lines.push(`💰 *${t(ui.fees)}*`, ...g.fees.map((f) => `• ${t(f.item)}: ${t(f.amount)}`), '');
  lines.push(`👣 *${t(ui.steps)}*`, ...g.steps.map((s, i) => `${i + 1}. ${t(s)}`), '');
  lines.push(`📍 *${t(ui.whereToApply)}*`, ...g.whereToApply.map((x) => `• ${t(x)}`), '');
  lines.push(`⏱️ ${t(ui.timeline)}: ${t(g.timeline)}`, '');
  if (g.helpline) lines.push(`📞 ${t(g.helpline.label)}: ${g.helpline.number}`);
  for (const l of g.links) lines.push(`🔗 ${l.label}: ${l.url}`);
  lines.push('', `⚠️ ${t(ui.disclaimer)} (${t(ui.lastChecked)}: ${g.lastChecked})`);
  lines.push(`— ${t(ui.sharedFrom)}`);
  return lines.join('\n');
}
