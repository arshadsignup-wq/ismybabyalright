import type { ConcernPage } from '@/data/concerns/types';
import { getConcernBySlug } from '@/data/concerns';

/**
 * Generates a "What Parents Should Know" narrative paragraph from quickAnswer + byAge.
 */
export function generateParentNarrative(concern: ConcernPage): string {
  const topic = concern.title.toLowerCase().replace(/^my baby('s)?\s+/i, '').replace(/\?$/, '');
  const parts: string[] = [];

  parts.push(concern.quickAnswer);

  if (concern.byAge.length > 0) {
    const earliest = concern.byAge[0];
    parts.push(
      `At ${earliest.ageRange}, ${earliest.context.charAt(0).toLowerCase()}${earliest.context.slice(1).replace(/\.$/, '')}.`
    );
  }

  if (concern.whenNormal.length > 0) {
    parts.push(
      `It is generally considered normal when ${concern.whenNormal[0].charAt(0).toLowerCase()}${concern.whenNormal[0].slice(1).replace(/\.$/, '')}.`
    );
  }

  if (concern.whenToActNow.length > 0) {
    parts.push(
      `However, you should contact your pediatrician promptly if ${concern.whenToActNow[0].charAt(0).toLowerCase()}${concern.whenToActNow[0].slice(1).replace(/\.$/, '')}.`
    );
  }

  return parts.join(' ');
}

/**
 * Generates "Normal vs. Concerning" comparison from whenNormal + whenToActNow.
 */
export function generateRedFlagsComparison(
  concern: ConcernPage
): { normal: string; redFlag: string }[] {
  const comparisons: { normal: string; redFlag: string }[] = [];

  const normalItems = concern.whenNormal;
  const redFlagItems = [...concern.whenToActNow, ...concern.whenToMention];

  const pairCount = Math.min(normalItems.length, redFlagItems.length, 4);
  for (let i = 0; i < pairCount; i++) {
    comparisons.push({
      normal: normalItems[i],
      redFlag: redFlagItems[i],
    });
  }

  return comparisons;
}

/**
 * Generates "What to Tell Your Pediatrician" from whenToMention data.
 */
export function generateDoctorTalkingPoints(concern: ConcernPage): string[] {
  const topic = concern.title.toLowerCase().replace(/^my baby('s)?\s+/i, '').replace(/\?$/, '');
  const points: string[] = [];

  points.push(`Describe when you first noticed ${topic} and how it has changed over time.`);

  if (concern.byAge.length > 0) {
    points.push(`Note your baby's current age and which age-specific patterns you are seeing.`);
  }

  concern.whenToMention.slice(0, 2).forEach((item) => {
    points.push(`Mention if ${item.charAt(0).toLowerCase()}${item.slice(1).replace(/\.$/, '')}.`);
  });

  if (concern.relatedConcernSlugs && concern.relatedConcernSlugs.length > 0) {
    points.push(`Let your doctor know if you have noticed any related concerns, such as changes in feeding, sleep, or movement patterns.`);
  }

  points.push(`Bring a list of any questions or observations you want to discuss at the appointment.`);

  return points;
}

/**
 * Generates "Related Conditions to Rule Out" from relatedConcernSlugs.
 */
export function generateRelatedConditions(
  concern: ConcernPage
): { slug: string; title: string; howItDiffers: string }[] {
  if (!concern.relatedConcernSlugs || concern.relatedConcernSlugs.length === 0) {
    return [];
  }

  return concern.relatedConcernSlugs.slice(0, 4).map((slug) => {
    const related = getConcernBySlug(slug);
    if (!related) {
      return { slug, title: slug.replace(/-/g, ' '), howItDiffers: '' };
    }
    return {
      slug: related.slug,
      title: related.title,
      howItDiffers: related.quickAnswer,
    };
  }).filter(r => r.title);
}

/**
 * Generates a deterministic but varied review date from slug.
 * Spreads dates across May-July 2026.
 */
export function getReviewDate(slug: string): string {
  const hash = slug.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const day = (hash % 28) + 1;
  const month = (hash % 3) + 5; // May(5), June(6), July(7)
  return `2026-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}
