import { Guide } from '../types';
import { deep } from './deep';
import { deepA1 } from './deep-a1';
import { deepA2 } from './deep-a2';
import { deepB } from './deep-b';

/** Every full A-to-Z walkthrough, keyed by guide id. Add new batch files here. */
export const walkthroughs: Record<string, Partial<Guide>> = { ...deep, ...deepA1, ...deepA2, ...deepB };
