import { concern as notRollingOver } from './not-rolling-over';
import { concern as notCrawling } from './not-crawling';
import { concern as notWalking } from './not-walking';
import { concern as notTalking } from './not-talking';
import { concern as notRespondingToName } from './not-responding-to-name';
import { concern as notPointing } from './not-pointing';
import { concern as notWaving } from './not-waving';
import { concern as babyLosingWords } from './baby-losing-words';
import { concern as flatHead } from './flat-head';
import { concern as notMakingEyeContact } from './not-making-eye-contact';
import { concern as lowMuscleTone } from './low-muscle-tone';
import { concern as notSittingUp } from './not-sitting-up';
import { concern as babyNotBabbling } from './baby-not-babbling';
import { concern as greenPoop } from './green-poop';
import { concern as softSpotConcerns } from './soft-spot-concerns';
import type { ConcernPage } from './types';

export const allConcerns: ConcernPage[] = [
  notRollingOver,
  notCrawling,
  notWalking,
  notTalking,
  notRespondingToName,
  notPointing,
  notWaving,
  babyLosingWords,
  flatHead,
  notMakingEyeContact,
  lowMuscleTone,
  notSittingUp,
  babyNotBabbling,
  greenPoop,
  softSpotConcerns,
];

export function getConcernBySlug(slug: string): ConcernPage | undefined {
  return allConcerns.find(c => c.slug === slug);
}

export { type ConcernPage } from './types';
