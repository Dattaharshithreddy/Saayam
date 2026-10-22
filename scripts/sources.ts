// Prints every official website the guides link to, for the Play Store description.
// Run: npx tsx scripts/sources.ts
import './devglobals';
import { allSources } from '../src/sources';

const s = allSources();
console.log(`${s.length} sources\n`);
console.log(s.map((x) => x.host).join(' · '));
