import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-colic-drops-effectiveness',
  title: 'Colic Remedy Drops Effectiveness',
  category: 'digestive',
  searchTerms: [
    'colic drops baby',
    'colic remedy effectiveness',
    'baby colic treatment drops',
    'colic calm baby',
    'do colic drops work',
    'baby colic medicine',
    'colic relief drops evidence',
    'infant colic drops options',
    'natural colic remedies baby',
    'what helps baby colic',
  ],
  quickAnswer:
    'Most over-the-counter colic drops and remedies have limited scientific evidence supporting their effectiveness. Simethicone has some safety data but mixed efficacy evidence. Lactobacillus reuteri probiotics have the strongest evidence for breastfed babies with colic. The most important thing to know is that colic resolves on its own by 3 to 4 months regardless of treatment.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'This is the peak age for colic. Evidence-based options include: Lactobacillus reuteri probiotics for breastfed infants, simethicone drops (safe but unproven), and comfort measures like swaddling, white noise, and motion. Avoid products containing alcohol, herbs with unknown safety profiles, or homeopathic remedies with no evidence base.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Colic typically resolves by 3 to 4 months. If excessive crying persists beyond 4 months, it may not be colic and deserves evaluation for other causes like reflux, food allergy, or other medical conditions. Do not continue using colic drops beyond when they are needed.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Colic should be resolved by this age. If your baby continues to be excessively fussy, discuss with your pediatrician. Persistent crying beyond the colic period is not normal and warrants investigation.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Colic drops are not appropriate for toddlers. If your toddler has abdominal discomfort, the cause should be identified rather than treated with over-the-counter drops.',
    },
  ],
  whenNormal: [
    'Trying safe, evidence-based approaches like probiotics or simethicone under your pediatrician\'s guidance',
    'Colic resolving on its own by 3 to 4 months regardless of treatment',
  ],
  whenToMention: [
    'You want to discuss which colic remedies have the best evidence',
    'Your baby has colic and you need support and guidance',
    'Nothing seems to help your baby\'s crying and you are struggling',
  ],
  whenToActNow: [
    'Your baby\'s crying is accompanied by fever, vomiting, blood in stool, or other concerning symptoms',
    'You are feeling overwhelmed or at risk of harming your baby due to the crying',
    'Your baby had a reaction to a colic remedy product',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Colic. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/Colic.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Probiotics for Infantile Colic: A Systematic Review. Pediatrics.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/29084829/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Managing Colic. Pediatrics in Review.',
      url: 'https://publications.aap.org/pediatricsinreview/article/doi/10.1542/pir.2017-0074/35158/',
    },
  ],
  relatedConcernSlugs: ['baby-gas-drops-simethicone', 'baby-gripe-water-safety', 'baby-probiotics-benefits-evidence', 'baby-gas-pain-vs-colic'],
};
