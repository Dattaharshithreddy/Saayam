import { Guide } from '../types';
import { XDir } from './extra-helpers';
import { lawGuides, lawDir } from './extra-law';
import { transportGuides, transportDir } from './extra-transport';
import { moneyGuides, moneyDir } from './extra-money';
import { lifeGuides, lifeDir } from './extra-life';
import { moreExtraGuides, moreExtraDir } from './extra-more';

/** Guides added in the second content expansion, with their A–Z directory lines. */
export const extraGuides: Guide[] = [...lawGuides, ...transportGuides, ...moneyGuides, ...lifeGuides, ...moreExtraGuides];
export const extraDir: XDir[] = [...lawDir, ...transportDir, ...moneyDir, ...lifeDir, ...moreExtraDir];
