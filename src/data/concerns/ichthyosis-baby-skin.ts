import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'ichthyosis-baby-skin',
  title: 'My Baby Has Ichthyosis (Scaly Skin Disorder)',
  category: 'medical',
  searchTerms: [
    'baby ichthyosis',
    'baby scaly skin',
    'ichthyosis vulgaris baby',
    'harlequin ichthyosis',
    'lamellar ichthyosis',
    'collodion baby',
    'baby thick scaly skin',
    'ichthyosis treatment baby',
    'baby dry scaly patches',
    'baby fish scale skin',
  ],
  quickAnswer:
    'Ichthyosis is a group of skin disorders characterized by dry, thickened, scaly skin. Ichthyosis vulgaris is the most common and mildest form, causing dry, flaky skin that is often mistaken for eczema. Lamellar ichthyosis presents at birth as a "collodion baby" - the newborn is encased in a tight, shiny membrane that sheds over the first weeks of life. Harlequin ichthyosis is the most severe and rarest form, with thick, diamond-shaped plates of skin separated by deep cracks at birth. Treatment centers on maintaining skin moisture with emollients, removing excess scale with keratolytics, and in severe cases, using retinoids. With appropriate care, many children with ichthyosis lead full, active lives.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Severe forms of ichthyosis (harlequin, lamellar) are apparent at birth. A collodion baby is born encased in a tight, clear-to-yellow membrane that restricts movement and may cause feeding difficulty. This membrane cracks and peels over 2-4 weeks, revealing the underlying ichthyosis. These babies need NICU care: humidified incubators to prevent fluid loss, gentle emollients, and careful skin monitoring. Harlequin ichthyosis requires intensive care - the thick skin plates can restrict breathing and feeding. Ichthyosis vulgaris is usually not apparent at birth and develops later.',
    },
    {
      ageRange: '1-6 months',
      context:
        'As the collodion membrane sheds, the underlying skin pattern becomes apparent. Emollient application multiple times daily is the foundation of care. For ichthyosis vulgaris, dry scaly patches may begin appearing on the legs, arms, and trunk during this period. Skin biopsies and genetic testing may be performed to determine the specific type of ichthyosis, which guides treatment and prognosis. Monitoring for skin infections is important since cracked skin provides an entry point for bacteria. Overheating can be a problem in severe ichthyosis because thickened skin impairs sweating.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Establishing a consistent skincare routine is essential. Bathing in lukewarm water followed by immediate application of thick emollients (petroleum jelly, lanolin-based creams) helps lock in moisture. Gentle keratolytics (like low-concentration urea or lactic acid creams) may be introduced to help remove thick scale. Avoid harsh soaps and very hot baths, which worsen dryness. Physical therapy may be helpful for severe forms to maintain joint mobility if thick skin limits range of motion.',
    },
    {
      ageRange: '1-5 years',
      context:
        'Daily skincare remains central to management. For ichthyosis vulgaris, the condition may improve in warm, humid weather and worsen in winter. Humidifiers in the home can help. For moderate to severe forms, your dermatologist may consider oral retinoids (such as acitretin) to reduce scaling, though these must be monitored carefully for side effects. Eye irritation (ectropion - outward turning of eyelids) can occur in lamellar ichthyosis and may need ophthalmologic management. Ear canal scaling may require regular cleaning to prevent hearing obstruction.',
    },
    {
      ageRange: '5 years+',
      context:
        'Children with ichthyosis learn to manage their own skincare routines as they grow. Ichthyosis vulgaris often improves with age. Severe forms require lifelong management but many children attend school, play sports, and live active lives. Support groups and online communities connect families. Teaching your child to advocate for their skin care needs builds confidence. Research into gene therapy and enzyme replacement for ichthyosis continues, offering hope for future treatments. Psychological support is available if your child struggles with the appearance of their skin.',
    },
  ],
  whenNormal: [
    'Your baby has ichthyosis vulgaris with mild dry, scaly skin that responds well to emollients',
    'Your baby\'s collodion membrane has fully shed and the underlying skin is being managed with a regular care routine',
    'Scaling is controlled with emollients and keratolytics, and your baby is comfortable',
    'Your child is growing, developing, and meeting milestones appropriately',
    'You are following up regularly with a dermatologist experienced in ichthyosis',
  ],
  whenToMention: [
    'Your baby\'s skin seems to be getting drier or scalier despite regular emollient use',
    'You are not sure which products or moisturizers are best for your baby\'s ichthyosis type',
    'Your child has difficulty with temperature regulation or overheats easily',
    'You notice thickened skin is limiting your child\'s movement in any joint',
    'You are interested in discussing retinoid therapy or clinical trials',
  ],
  whenToActNow: [
    'Your baby has signs of a skin infection: rapidly spreading redness, warmth, pus, foul odor, or fever, since cracked skin is vulnerable to bacterial infection',
    'Your collodion baby is having breathing difficulty or significant trouble feeding in the newborn period',
    'Your baby appears dehydrated (fewer wet diapers, dry mouth, sunken fontanelle) due to fluid loss through impaired skin barrier',
    'Your child has eye redness, pain, or their eyelids are turning outward (ectropion), which needs prompt ophthalmologic evaluation',
    'Your baby has a high fever with ichthyosis, which may indicate sepsis from skin infection and requires emergency evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-dry-cracked-skin-hands', 'baby-dry-skin-winter', 'peeling-skin-newborn'],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute of Arthritis and Musculoskeletal and Skin Diseases. Ichthyosis. NIAMS, 2024.',
      url: 'https://www.niams.nih.gov/health-topics/ichthyosis',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Ichthyosis. Genetic and Rare Diseases Information Center (GARD), 2024.',
      url: 'https://rarediseases.info.nih.gov/diseases/6571/ichthyosis',
    },
    {
      org: "Children's Hospital",
      citation:
        "Boston Children's Hospital. Ichthyosis.",
      url: 'https://www.childrenshospital.org/conditions/ichthyosis',
    },
  ],
};
