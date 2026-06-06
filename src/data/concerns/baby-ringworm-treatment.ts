import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-ringworm-treatment',
  title: 'Treating Ringworm in Baby',
  category: 'skin',
  searchTerms: ['baby ringworm treatment', 'ringworm baby cream', 'how to treat ringworm baby', 'baby ringworm antifungal', 'baby ringworm how long to treat', 'ringworm baby contagious', 'infant ringworm care', 'toddler ringworm treatment', 'baby ringworm not going away', 'ringworm baby daycare'],
  quickAnswer: 'Ringworm (tinea) is a common fungal infection that causes a ring-shaped, scaly rash. It is treated with over-the-counter antifungal cream applied twice daily for 2 to 4 weeks, even after the rash looks better. Ringworm is contagious but your child can return to daycare once treatment has started. It is not caused by a worm despite the name.',
  byAge: [
    { ageRange: '0-3 months', context: 'Ringworm is uncommon in very young infants. If a ring-shaped rash appears, have your pediatrician confirm the diagnosis before starting antifungal treatment, as other conditions can mimic ringworm at this age. Only use antifungal creams recommended specifically for young infants.' },
    { ageRange: '3-6 months', context: 'If ringworm is confirmed, an over-the-counter antifungal cream containing clotrimazole or miconazole, applied twice daily, is usually effective. Treat for the full recommended duration (typically 2 to 4 weeks) even if the rash appears to clear sooner, to prevent recurrence.' },
    { ageRange: '6-12 months', context: 'Ringworm is more common at this age as babies interact with pets, other children, and more surfaces. Cover the affected area with clothing if possible to prevent spread. Wash your hands after applying cream. If the rash is not improving after 2 weeks of consistent antifungal treatment, see your pediatrician.' },
    { ageRange: '12-24 months', context: 'Toddlers frequently pick up ringworm from daycare, pets, or shared objects. Continue applying antifungal cream for the full course. If ringworm appears on the scalp (tinea capitis), topical treatment alone is not enough and oral antifungal medication prescribed by your pediatrician is needed.' },
  ],
  whenNormal: ['A single ringworm patch that is improving with consistent antifungal cream application', 'Gradual clearing from the center outward over 1 to 2 weeks of treatment'],
  whenToMention: ['Ringworm is not improving after 2 weeks of over-the-counter antifungal treatment', 'Multiple patches of ringworm are appearing', 'Ringworm appears on the scalp with associated hair loss', 'You are unsure whether the rash is actually ringworm'],
  whenToActNow: ['Ringworm becomes very red, swollen, painful, and oozing, which could indicate a secondary bacterial infection or a kerion (intense inflammatory reaction)', 'Widespread ringworm with signs of immune compromise'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Ringworm. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Ringworm.aspx' },
    { org: 'AAD', citation: 'American Academy of Dermatology. Ringworm: Diagnosis and Treatment.', url: 'https://www.aad.org/public/diseases/a-z/ringworm-treatment' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Ringworm.', url: 'https://www.cdc.gov/fungal/diseases/ringworm/index.html' },
  ],
  relatedConcernSlugs: ['ringworm-vs-eczema', 'baby-ring-shaped-rash', 'baby-tinea-corporis', 'baby-tinea-capitis-scalp'],
};
