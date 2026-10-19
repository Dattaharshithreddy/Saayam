// Saayam assistant proxy.
// Holds the Anthropic API key so the mobile app never ships it.
// POST /ask  { messages: [{role, content}], lang: 'en'|'te', context?: string }
//   -> { answer: string, sources: [{title, url}] }

import Anthropic from '@anthropic-ai/sdk';
import fs from 'node:fs';
import http from 'node:http';

const PORT = Number(process.env.PORT || 8787);
const MODEL = process.env.SAAYAM_MODEL || 'claude-sonnet-5-5';
const client = new Anthropic(); // reads ANTHROPIC_API_KEY
const FEEDBACK_FILE = process.env.SAAYAM_FEEDBACK_FILE || 'feedback.jsonl';

const SYSTEM = `You are Saayam, a patient helper for ordinary people in Andhra Pradesh, India.
You explain Andhra Pradesh state government and Government of India schemes, certificates, registrations,
land and property processes, subsidies and welfare benefits to people who may have little education
and no legal knowledge.

How to answer:
- Reply ONLY in {LANG}. Use simple everyday words. If you use an official term (Mutation, 1B, EC, SRO, DISCOM), explain it in brackets once.
- Start with one line saying what the process is called and whether it is AP Government, Central Government, or both.
- Then give, as short sections: Who can apply, Documents to carry, Fees (exact rupee amounts when known), Steps (numbered), Where to go (office or official website), How long it takes.
- Prefer official sources: *.ap.gov.in, *.gov.in, MeeSeva, Village/Ward Secretariat, Mana Mitra WhatsApp (9552300009). Search the web when fees, amounts, dates or rules may have changed. Today's date is {TODAY}.
- Never invent fees, phone numbers, websites or deadlines. If you are not sure, say so plainly and tell them exactly which office to ask.
- Warn against paying middlemen for things that are free, and remind them to ask for a receipt.
- If the question needs a lawyer (disputes, court cases, inheritance fights), say so and suggest the free District Legal Services Authority.
- Do not ask for or store Aadhaar numbers, bank details or OTPs.
- Keep it under about 250 words unless they ask for more.`;

async function answer({ messages, lang, context }) {
  const langName = lang === 'en' ? 'English' : 'Telugu (తెలుగు script)';
  const system =
    SYSTEM.replace('{LANG}', langName).replace('{TODAY}', new Date().toISOString().slice(0, 10)) +
    (context ? `\n\nThe user is reading this verified guide inside the app. Stay consistent with it unless a newer official source says otherwise:\n${context}` : '');

  const res = await client.messages.create({
    model: MODEL,
    max_tokens: 1500,
    system,
    messages,
    tools: [
      {
        type: 'web_search_20250305',
        name: 'web_search',
        max_uses: 3,
        user_location: { type: 'approximate', region: 'Andhra Pradesh', country: 'IN', timezone: 'Asia/Kolkata' },
      },
    ],
  });

  let text = '';
  const sources = new Map();
  for (const block of res.content) {
    if (block.type !== 'text') continue;
    text += block.text;
    for (const c of block.citations ?? []) {
      if (c.url && !sources.has(c.url)) sources.set(c.url, { title: c.title ?? '', url: c.url });
    }
  }
  return { answer: text.trim(), sources: [...sources.values()].slice(0, 5) };
}

// Tiny per-IP rate limit so a public URL can't drain the key.
const hits = new Map();
function limited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 10;
}
// Forget IPs after a minute so nothing about callers is kept (matches the privacy policy).
setInterval(() => {
  const now = Date.now();
  for (const [ip, times] of hits) if (times.every((t) => now - t >= 60_000)) hits.delete(ip);
}, 60_000).unref();

function valid(body) {
  if (!body || !Array.isArray(body.messages) || body.messages.length === 0 || body.messages.length > 20) return false;
  return body.messages.every(
    (m) => (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string' && m.content.length <= 4000,
  );
}

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  if (req.method === 'OPTIONS') return res.writeHead(204).end();
  if (req.method === 'GET' && req.url === '/health') return res.writeHead(200).end('ok');
  if (req.method !== 'POST' || (req.url !== '/ask' && req.url !== '/feedback')) return res.writeHead(404).end();

  const ip = req.headers['x-forwarded-for']?.toString().split(',')[0] || req.socket.remoteAddress || '';
  if (limited(ip)) return res.writeHead(429).end();

  let raw = '';
  for await (const chunk of req) {
    raw += chunk;
    if (raw.length > 100_000) return res.writeHead(413).end();
  }
  let body;
  try {
    body = JSON.parse(raw);
  } catch {
    return res.writeHead(400).end();
  }
  if (req.url === '/feedback') {
    // "Wrong information" reports from guide pages, stored one JSON per line for review.
    const ok =
      body && typeof body.guideId === 'string' && body.guideId.length <= 100 &&
      typeof body.message === 'string' && body.message.trim().length > 0 && body.message.length <= 2000;
    if (!ok) return res.writeHead(400).end();
    const row = { at: new Date().toISOString(), guideId: body.guideId, lang: body.lang === 'en' ? 'en' : 'te', message: body.message.trim() };
    // Also log it: free hosts wipe the disk on restart, but their log viewer keeps this line.
    console.log('FEEDBACK ' + JSON.stringify(row));
    fs.appendFile(FEEDBACK_FILE, JSON.stringify(row) + '\n', (err) => {
      if (err) console.error(err);
    });
    return res.writeHead(204).end();
  }

  if (!valid(body)) return res.writeHead(400).end();

  try {
    const out = await answer({
      messages: body.messages,
      lang: body.lang === 'en' ? 'en' : 'te',
      context: typeof body.context === 'string' ? body.context.slice(0, 8000) : undefined,
    });
    res.writeHead(200, { 'Content-Type': 'application/json' }).end(JSON.stringify(out));
  } catch (e) {
    console.error(e);
    res.writeHead(502).end();
  }
});

server.listen(PORT, () => console.log(`Saayam assistant on :${PORT} (model ${MODEL})`));
