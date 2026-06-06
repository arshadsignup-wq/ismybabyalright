import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-eczema-triggers-identification',
  title: 'Identifying Eczema Triggers in Baby',
  category: 'skin',
  searchTerms: [
    'baby eczema triggers',
    'what causes baby eczema flare',
    'baby eczema trigger identification',
    'eczema trigger diary baby',
    'baby eczema food triggers',
    'baby eczema environmental triggers',
    'what makes baby eczema worse',
    'baby eczema flare up causes',
    'eczema trigger testing baby',
    'preventing baby eczema flares',
  ],
  quickAnswer:
    'Identifying your baby\'s specific eczema triggers can significantly improve flare management. Common triggers include dry air, fragranced products, certain fabrics, sweat, saliva, specific foods, dust mites, pet dander, and stress. Keeping a trigger diary can help you spot patterns. Not every baby has the same triggers, so finding your child\'s unique set takes some detective work.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'At this young age, the most common eczema triggers are environmental: dry air from indoor heating, fragranced soaps and lotions, rough fabrics like wool, and overheating. For breastfed babies, rarely, something in the mother\'s diet may contribute, but this should only be explored under medical guidance. Focus on gentle, fragrance-free skin care first.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Common triggers to watch for include drool (which irritates cheeks and chin), new laundry detergents, pet exposure, and environmental allergens like dust mites. Starting a simple diary noting when flares occur and what changed (new product, weather shift, illness) can help identify patterns over time.',
    },
    {
      ageRange: '6-12 months',
      context:
        'The introduction of solid foods adds a new category of potential triggers. Foods most commonly associated with eczema flares include cow\'s milk, eggs, wheat, soy, peanuts, and tree nuts. If you notice eczema worsening within 24 to 48 hours of a new food, note it and discuss with your pediatrician. Allergy testing may be considered.',
    },
    {
      ageRange: '12-24 months',
      context:
        'By this age, you likely have a sense of your child\'s main triggers. Seasonal changes, illness, and stress or excitement can all worsen eczema. Sweat from active play is a very common toddler trigger. Maintaining a consistent skin care routine and avoiding known triggers, while not being overly restrictive, is the best long-term approach.',
    },
  ],
  whenNormal: [
    'Eczema flares with predictable triggers like dry winter weather or a specific product',
    'Temporary worsening during illness that improves as the child recovers',
    'Mild flares that respond well to increased moisturizing and trigger avoidance',
  ],
  whenToMention: [
    'You suspect a food trigger and want to discuss allergy testing or an elimination approach',
    'Despite avoiding known triggers, eczema continues to flare frequently',
    'You want help creating a comprehensive trigger management plan',
  ],
  whenToActNow: [
    'Your baby has an acute allergic reaction with hives, swelling, or breathing difficulty after food exposure',
    'Eczema flares are becoming increasingly severe despite trigger avoidance and standard treatment',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Eczema in Babies and Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Eczema.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Eczema: Triggers.',
      url: 'https://www.aad.org/public/diseases/eczema/childhood/treating/triggers',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Food Allergy and Eczema.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/eczema-food-allergy',
    },
  ],
  relatedConcernSlugs: ['eczema', 'eczema-flare-triggers', 'eczema-and-food-allergy-link', 'baby-eczema-moisturizer-routine'],
};
