import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'baby-rib-flaring', title: 'My Baby\'s Ribs Stick Out', category: 'physical',
  searchTerms: ['baby ribs sticking out', 'baby rib flaring', 'baby ribs prominent', 'baby lower ribs protrude', 'baby flared ribs', 'rib flaring baby normal', 'baby ribs visible', 'baby ribcage sticks out', 'baby rib flare concern', 'toddler ribs protrude'],
  quickAnswer: 'Mild rib flaring (lower ribs that protrude slightly) is common in babies and toddlers, especially when lying down or with their arms up. It is often a normal anatomical variation, particularly in lean babies. However, significant rib flaring can sometimes indicate rickets (vitamin D deficiency) or core muscle weakness.',
  byAge: [
    { ageRange: '0-6 months', context: 'Baby ribcages are naturally flexible and soft. Some prominence of the lower ribs is common, especially in lean babies. Mention it at your next well visit for reassurance.' },
    { ageRange: '6-12 months', context: 'If rib flaring is accompanied by delayed motor milestones, it may indicate core weakness. If it is present alongside bowed legs or other bone changes, rickets should be evaluated with a blood test.' },
    { ageRange: '12-24 months', context: 'Rib flaring that worsens or is accompanied by bowing of the legs, swollen wrists, or delayed walking may indicate nutritional rickets. A vitamin D level and X-rays can diagnose this treatable condition.' },
    { ageRange: '2-4 years', context: 'Mild rib flaring in an otherwise healthy, active child is usually a cosmetic concern only. Severe or worsening flaring should be evaluated.' },
  ],
  whenNormal: ['Mild rib prominence in a lean, healthy baby.', 'Ribs are symmetric.', 'Your baby is meeting motor milestones.', 'No other bone or growth concerns.'],
  whenToMention: ['Rib flaring is pronounced or worsening.', 'Rib flaring with bowed legs or swollen wrists.', 'Rib flaring with motor delays.'],
  whenToActNow: ['Rib flaring with breathing difficulty.', 'Rapid worsening of ribcage shape.'],
  relatedMilestones: ['growth-weight', 'gross-motor-sitting'], showSelfReferral: false,
  relatedConcernSlugs: ['bowlegged-baby', 'poor-trunk-control'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Rickets', url: 'https://www.healthychildren.org/English/health-issues/conditions/Glands-Growth-Disorders/Pages/default.aspx' },
    { org: 'NIH', citation: 'Misra M, et al. Vitamin D Deficiency in Children. Pediatrics. 2008;122(2)', url: 'https://pubmed.ncbi.nlm.nih.gov/18676559/' },
    { org: 'CDC', citation: 'CDC - Nutrition: Vitamin D', url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/vitamins-minerals/vitamin-d.html' },
  ],
};
