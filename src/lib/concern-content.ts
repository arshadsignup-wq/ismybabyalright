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

interface CrossContentLink {
  label: string;
  href: string;
  description: string;
  type: 'milestone' | 'triage' | 'guide' | 'tool' | 'illness';
}

/**
 * Generates cross-content-type links for a concern page.
 * Links to milestones, triage trees, guides, tools, and illness pages.
 */
export function generateCrossContentLinks(concern: ConcernPage): CrossContentLink[] {
  const links: CrossContentLink[] = [];
  const seen = new Set<string>();
  const text = [concern.slug, concern.title, ...concern.searchTerms].join(' ').toLowerCase();

  function add(link: CrossContentLink) {
    if (!seen.has(link.href) && links.length < 6) {
      seen.add(link.href);
      links.push(link);
    }
  }

  // Milestone links based on relatedMilestones
  if (concern.relatedMilestones.length > 0) {
    add({
      label: 'Milestone Checklists by Age',
      href: '/milestones',
      description: 'Track your baby\'s developmental milestones from birth to 5 years with age-specific checklists.',
      type: 'milestone',
    });
  }

  // Triage links based on keyword matching
  const triageMap: Record<string, { label: string; slug: string; desc: string }> = {
    fever: { label: 'Fever Decision Tree', slug: 'fever', desc: 'Step-by-step guidance for evaluating your baby\'s fever by age and temperature.' },
    rash: { label: 'Rash Decision Tree', slug: 'rash', desc: 'Identify common rashes and determine when to seek care.' },
    vomit: { label: 'Vomiting Decision Tree', slug: 'vomiting', desc: 'Evaluate vomiting severity and decide when to call the doctor.' },
    breathing: { label: 'Breathing Difficulty Triage', slug: 'breathing-difficulty', desc: 'Assess breathing concerns and know when to seek emergency care.' },
    diarrhea: { label: 'Diarrhea Decision Tree', slug: 'diarrhea', desc: 'Evaluate diarrhea severity, dehydration risk, and when to act.' },
    cry: { label: 'Excessive Crying Triage', slug: 'excessive-crying', desc: 'Determine whether crying patterns need medical attention.' },
    jaundice: { label: 'Jaundice Decision Tree', slug: 'jaundice', desc: 'Assess jaundice severity in newborns and when to call the doctor.' },
  };

  for (const [keyword, info] of Object.entries(triageMap)) {
    if (text.includes(keyword)) {
      add({
        label: info.label,
        href: `/triage/${info.slug}`,
        description: info.desc,
        type: 'triage',
      });
    }
  }

  // Category-specific guide links
  const guideMap: Partial<Record<string, CrossContentLink>> = {
    feeding: { label: 'Feeding & Nutrition Guide', href: '/feeding', description: 'Complete guide to breastfeeding, formula feeding, and solid food introduction.', type: 'guide' },
    sleep: { label: 'Baby Sleep Guide', href: '/sleep', description: 'Age-by-age sleep needs, schedules, and evidence-based sleep strategies.', type: 'guide' },
    skin: { label: 'Baby Skin Conditions Guide', href: '/skin-guide', description: 'Visual guide to common baby skin conditions, rashes, and when to see a doctor.', type: 'guide' },
    digestive: { label: 'Poop Color & Texture Guide', href: '/poop-guide', description: 'What your baby\'s poop color and consistency mean, and when to worry.', type: 'guide' },
    maternal: { label: 'Postpartum Recovery Guide', href: '/postpartum', description: 'Week-by-week postpartum recovery timeline and warning signs.', type: 'guide' },
  };

  const catGuide = guideMap[concern.category];
  if (catGuide) {
    add(catGuide);
  }

  // Tool links based on keywords
  if (text.includes('growth') || text.includes('weight') || text.includes('height') || text.includes('percentile')) {
    add({ label: 'Growth Percentile Calculator', href: '/tools/growth', description: 'Plot your baby\'s weight, length, and head circumference on WHO/CDC growth charts.', type: 'tool' });
  }
  if (text.includes('vaccine') || text.includes('immuniz')) {
    add({ label: 'Vaccine Schedule Tracker', href: '/vaccines', description: 'Track vaccinations, see what\'s due, and understand each vaccine.', type: 'tool' });
  }
  if (text.includes('medicine') || text.includes('tylenol') || text.includes('dosage')) {
    add({ label: 'Medicine Dosage Calculator', href: '/tools/medicine-dosage', description: 'Calculate correct Tylenol and Motrin doses by your baby\'s weight.', type: 'tool' });
  }

  // Development month links for age-specific concerns
  if (concern.byAge.length >= 3) {
    add({ label: 'Month-by-Month Development', href: '/development', description: 'Detailed monthly development guides from birth through 24 months.', type: 'milestone' });
  }

  // When to call doctor — always relevant
  if (concern.whenToActNow.length > 0) {
    add({ label: 'When to Call the Doctor', href: '/when-to-call-the-doctor', description: 'General guide on when to call the pediatrician, visit urgent care, or go to the ER.', type: 'guide' });
  }

  return links;
}

/**
 * Generates "What You Can Do at Home" tips from concern data.
 */
export function generateHomeManagement(concern: ConcernPage): string[] {
  const topic = concern.title.toLowerCase().replace(/^my baby('s)?\s+/i, '').replace(/\?$/, '');
  const tips: string[] = [];

  // Monitoring tip
  tips.push(`Keep track of when you notice ${topic} — noting the time of day, duration, and any triggers can help your pediatrician.`);

  // Based on whenNormal — reassurance-based tip
  if (concern.whenNormal.length > 0) {
    tips.push(`Remember that ${concern.whenNormal[0].charAt(0).toLowerCase()}${concern.whenNormal[0].slice(1).replace(/\.$/, '')} — this is generally within the range of normal.`);
  }

  // Age-based tip
  if (concern.byAge.length > 1) {
    const currentAge = concern.byAge[0];
    tips.push(`At ${currentAge.ageRange}, focus on observation rather than intervention unless your pediatrician advises otherwise.`);
  }

  // Category-specific practical tips
  const categoryTips: Partial<Record<string, string>> = {
    feeding: 'Offer feeding in a calm, distraction-free environment. Avoid forcing or pressuring your baby to eat.',
    sleep: 'Maintain a consistent bedtime routine. Keep the sleep environment cool, dark, and quiet.',
    skin: 'Use fragrance-free, hypoallergenic products on your baby\'s skin. Avoid over-bathing — 2-3 baths per week is usually sufficient.',
    digestive: 'Keep your baby upright for 20-30 minutes after feeding. Note any patterns between feeds and symptoms.',
    physical: 'Provide plenty of supervised floor time and tummy time to support your baby\'s physical development.',
    communication: 'Talk, read, and sing to your baby frequently. Narrate daily activities to build language exposure.',
    behavior: 'Respond consistently and calmly to your baby\'s behavior. Maintain predictable daily routines.',
    medical: 'Follow any care instructions from your pediatrician. Keep a written log of symptoms to bring to appointments.',
    maternal: 'Prioritize your own rest and nutrition. Accept help when offered, and do not hesitate to reach out to your healthcare provider.',
  };

  const catTip = categoryTips[concern.category];
  if (catTip) {
    tips.push(catTip);
  }

  // When to escalate
  if (concern.whenToActNow.length > 0) {
    tips.push(`While monitoring at home, seek immediate care if ${concern.whenToActNow[0].charAt(0).toLowerCase()}${concern.whenToActNow[0].slice(1).replace(/\.$/, '')}.`);
  }

  return tips;
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
