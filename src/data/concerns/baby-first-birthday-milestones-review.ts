import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-first-birthday-milestones-review',
  title: 'First Birthday Milestone Checklist',
  category: 'physical',
  searchTerms: [
    'baby first birthday milestones',
    '12 month milestone check',
    'what should baby do at 1 year',
    '12 month development checklist',
    'one year old milestones',
    '1 year old behind on milestones',
    'first birthday developmental goals',
    '12 month well child visit milestones',
    'what to expect at 12 months',
    'baby development 1 year old',
  ],
  quickAnswer:
    'By their first birthday, most babies can pull to stand, may take a few independent steps (though walking up to 18 months is normal), say 1-3 words, respond to their name, use gestures like pointing and waving, pick up small objects with a pincer grasp, and show clear attachment preferences. Every baby develops at their own pace, and there is a wide range of normal. The 12-month well-child visit is an important developmental checkpoint with your pediatrician.',
  byAge: [
    {
      ageRange: '10-12 months',
      context:
        'As your baby approaches their first birthday, key developmental areas to observe include: Gross motor - can they pull to stand, cruise along furniture, and possibly take independent steps? Fine motor - can they pick up small objects with thumb and finger (pincer grasp) and bang objects together? Language - do they babble with consonant sounds, say any words (mama, dada with meaning), respond to their name, and understand simple words like "no"? Social - do they wave, point, play simple games like peekaboo, and show preference for familiar caregivers?',
    },
    {
      ageRange: '12-15 months',
      context:
        'The CDC milestones at 12 months include: pulling to stand, standing alone briefly, possibly walking, using 1-3 words, following simple directions (like "give me the ball"), pointing to show you things, looking where you point, and having a few favorite things or people. If your baby is not yet walking by 12 months, this is completely normal - the range for walking is 9-18 months. However, if your baby is not pulling to stand, not babbling, not using gestures, or is not responding to their name, these are concerns to discuss at the well-child visit.',
    },
    {
      ageRange: '15-18 months',
      context:
        'If any 12-month milestones were not yet achieved, the 15-18 month period is an important time for follow-up. By 15 months, most babies are walking (or very close), using at least 3-5 words, and pointing to show you things. The 15-month and 18-month well-child visits include developmental screening. If your child is not walking by 18 months, not using any words by 16 months, or is showing regression in any skills, your pediatrician should evaluate and may refer to early intervention services.',
    },
  ],
  whenNormal: [
    'Your baby is doing most 12-month milestones but has not started walking yet - independent walking anytime up to 18 months is normal.',
    'Your baby says 1-2 words clearly and babbles expressively with varied consonant sounds.',
    'Your baby uses gestures like pointing, waving, and raising arms to be picked up.',
    'Your baby shows clear attachment to you and may have some stranger or separation anxiety.',
  ],
  whenToMention: [
    'Your baby is not pulling to stand by 12 months.',
    'Your baby is not babbling with consonants (ba, da, ma) or using any words by 12 months.',
    'Your baby is not using gestures like pointing or waving by 12 months.',
    'Your baby does not respond consistently to their name.',
  ],
  whenToActNow: [
    'Your baby has lost skills they previously had - such as words they used to say or motor abilities they demonstrated.',
    'Your baby shows no social engagement - no eye contact, no shared enjoyment, no interest in interaction.',
    'Your baby has not made any developmental progress across multiple areas in several months.',
  ],
  relatedMilestones: [
    'gross-motor-standing',
    'gross-motor-walking',
    'fine-motor-pincer-grasp',
    'communication-first-words',
    'social-emotional-attachment',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'not-standing',
    'not-saying-mama-dada',
    'not-clapping',
    'baby-fine-motor-delay-signs',
  ],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By 12 Months.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-12mo.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Developmental Milestones: 12 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Developmental-Milestones-12-Months.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Developmental Surveillance and Screening. Pediatrics, 2020.',
      url: 'https://publications.aap.org/pediatrics/article/145/1/e20193449/36971',
    },
  ],
};
