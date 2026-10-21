/**
 * Publishes the current guides as an over-the-air content update.
 *
 *   npx tsx scripts/build-content.ts            # uses CONTENT_VERSION from src/data/version.ts
 *
 * Writes docs/content/manifest.json and docs/content/content-<version>.json. Push to main and
 * GitHub Pages serves them; phones with an older content version download the update.
 * Bump CONTENT_VERSION (YYYYMMDDnn) and CONTENT_DATE every time you publish.
 */
import './devglobals';
import { mkdirSync, readdirSync, unlinkSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { validPack } from '../src/contentPack';
import { directory } from '../src/data/directory';
import { rules } from '../src/data/eligibility';
import { guides } from '../src/data/guides';
import { CONTENT_DATE, CONTENT_VERSION } from '../src/data/version';

const MIN_APP = '1.3.0'; // first app version that understands this format

const pack = { version: CONTENT_VERSION, date: CONTENT_DATE, minApp: MIN_APP, guides, directory, rules };
if (!validPack(pack)) throw new Error('Content failed validation — not publishing.');

const dir = join(__dirname, '..', 'docs', 'content');
mkdirSync(dir, { recursive: true });
for (const f of readdirSync(dir)) if (f.startsWith('content-') && f.endsWith('.json')) unlinkSync(join(dir, f));
const file = `content-${CONTENT_VERSION}.json`;
writeFileSync(join(dir, file), JSON.stringify(pack));
writeFileSync(join(dir, 'manifest.json'), JSON.stringify({ version: CONTENT_VERSION, date: CONTENT_DATE, minApp: MIN_APP, file, guides: guides.length }, null, 2) + '\n');
console.log(`Published ${guides.length} guides, ${directory.length} directory entries, ${rules.length} rules → docs/content/${file}`);
