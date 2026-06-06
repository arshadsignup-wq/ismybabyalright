import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-encopresis-signs',
  title: 'Encopresis (Soiling) in Toddlers',
  category: 'digestive',
  searchTerms: [
    'toddler encopresis',
    'toddler soiling pants',
    'toddler poop accidents',
    'encopresis signs child',
    'toddler pooping in underwear',
    'child fecal soiling',
    'toddler constipation overflow soiling',
    'toddler poop leaking',
    'encopresis treatment child',
    'toddler regression poop pants',
  ],
  quickAnswer:
    'Encopresis is when a potty-trained child (usually over age 4) repeatedly soils their underwear, most often due to chronic constipation with overflow leakage. The child cannot feel the leaking because hard stool stretches the rectum and dulls the sensation. It is not done on purpose and should not be punished. Treatment involves clearing the impaction and establishing regular soft stools.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Encopresis does not apply to infants. Stool leakage in babies is normal and expected as they are not toilet trained.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Encopresis is not a concern at this age. Normal infant stooling patterns are expected.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Encopresis is not applicable to babies. If there are stool concerns at this age, they are related to constipation or other infant digestive issues.',
    },
    {
      ageRange: '12-24 months',
      context:
        'True encopresis typically begins after age 4, but the foundation of chronic constipation and stool withholding often starts in toddlerhood. If your toddler is avoiding pooping, holding in stool, or having painful bowel movements, addressing constipation early helps prevent encopresis later. Painful pooping creates a cycle of avoidance that can lead to chronic constipation.',
    },
  ],
  whenNormal: [
    'Occasional poop accidents during potty training are completely normal and not encopresis',
    'Brief periods of regression during times of change or stress',
  ],
  whenToMention: [
    'Your potty-trained child has frequent soiling accidents',
    'Your toddler is clearly withholding stool and has painful, infrequent bowel movements',
    'You suspect chronic constipation with overflow soiling',
  ],
  whenToActNow: [
    'Severe constipation with abdominal distension, pain, and vomiting',
    'Your child is significantly distressed or being bullied due to soiling',
    'You need help developing a comprehensive treatment plan for encopresis',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Soiling (Encopresis). HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Soiling-Encopresis.aspx',
    },
    {
      org: 'NIDDK',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Constipation in Children.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/constipation-children',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Toilet Training. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/toilet-training/Pages/default.aspx',
    },
  ],
  relatedConcernSlugs: ['constipation', 'poop-withholding-toddler', 'baby-constipation-remedies-safe'],
};
