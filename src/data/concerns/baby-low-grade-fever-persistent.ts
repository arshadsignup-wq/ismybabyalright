import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-low-grade-fever-persistent',
  title: 'My Baby Has Had a Low-Grade Fever for Days',
  category: 'medical',
  searchTerms: [
    'baby low grade fever won\'t go away',
    'persistent mild fever baby',
    'baby fever 99 to 100 for days',
    'low fever baby lasting',
    'baby slight fever several days',
    'baby temperature 99 degrees',
    'lingering low fever baby',
    'baby mild fever no symptoms',
    'chronic low fever baby',
    'baby temperature slightly elevated',
  ],
  quickAnswer:
    'A low-grade fever (99-100.3°F or 37.2-38°C) that persists for several days is often the tail end of a viral illness and usually resolves on its own. Normal body temperature varies throughout the day and can be slightly elevated after activity, feeding, or being bundled warmly. However, a truly persistent low-grade fever lasting more than a week should be evaluated by your pediatrician.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In very young babies, even a low-grade fever near the threshold of 100.4°F should be taken seriously. Temperature regulation is still developing, so mild elevations can be from over-bundling. If the temperature stays elevated after removing a layer and rechecking in 15-20 minutes, contact your pediatrician. A consistently elevated temperature in this age group warrants evaluation.',
    },
    {
      ageRange: '3-6 months',
      context:
        'A low-grade fever following a known viral illness may linger for a few days as the immune system finishes fighting the infection. Monitor your baby\'s behavior, feeding, and energy level. If the fever persists beyond 5 days or your baby seems increasingly fussy or is feeding poorly, contact your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Teething is often blamed for low-grade fevers, and while teething can cause a very slight temperature elevation, it should not cause a true fever above 100.4°F. A persistent low-grade fever at this age is more likely related to a mild viral infection. Track the temperature pattern and your baby\'s symptoms to share with your doctor if the fever lasts more than 5 days.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers who are very active may feel warm after play, which can mimic a low-grade fever. Take the temperature when your child has been resting for at least 15 minutes. If a genuine low-grade fever persists for more than a week, your pediatrician may want to run some basic tests to rule out urinary tract infection, ear infection, or other causes.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Persistent low-grade fevers in older toddlers sometimes accompany viral upper respiratory infections that linger for 7-10 days. If your child is eating, drinking, playing, and sleeping reasonably well, a low-grade fever alone is usually not a cause for alarm. If it continues beyond a week or is accompanied by weight loss, night sweats, or fatigue, seek medical evaluation.',
    },
  ],
  whenNormal: [
    'A low-grade fever follows a known viral illness and is gradually decreasing over 3-5 days',
    'Your baby\'s temperature is slightly elevated after physical activity, feeding, or being overdressed',
    'The temperature is only slightly above 98.6°F (37°C) and varies throughout the day',
    'Your baby is eating, sleeping, and behaving normally despite the mild temperature elevation',
  ],
  whenToMention: [
    'A low-grade fever has persisted for more than 5 days without an obvious cause',
    'Your baby has a low-grade fever along with poor appetite, irritability, or decreased energy',
    'You are unsure whether what you are measuring is truly a fever or normal temperature variation',
  ],
  whenToActNow: [
    'A low-grade fever in a baby under 3 months that persists after removing extra layers and rechecking',
    'A persistent low-grade fever accompanied by weight loss, night sweats, a new rash, joint swelling, or any signs of serious illness',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-fever-recurring-daily',
    'baby-fever-with-no-symptoms',
    'baby-temperature-regulation-immature',
    'baby-teething-fever-myth',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fever Without Fear. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/Fever-Without-Fear.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Fever - When to see a doctor.',
      url: 'https://www.mayoclinic.org/diseases-conditions/fever/symptoms-causes/syc-20352759',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Fever of Unknown Origin in Children. Pediatrics in Review.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/26527626/',
    },
  ],
};
