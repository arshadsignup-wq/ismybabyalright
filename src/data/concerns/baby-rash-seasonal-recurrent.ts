import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-rash-seasonal-recurrent',
  title: 'Recurring Seasonal Rash in Baby',
  category: 'skin',
  searchTerms: [
    'baby rash every winter',
    'baby seasonal rash',
    'baby rash recurring',
    'baby rash comes back',
    'baby eczema winter flare',
    'baby skin worse in winter',
    'baby rash every summer',
    'seasonal skin problems baby',
    'baby rash same time every year',
    'recurrent baby rash pattern',
  ],
  quickAnswer:
    'Many baby skin rashes follow seasonal patterns. Eczema tends to flare in cold, dry winter months, while heat rash and sun-related rashes are more common in summer. Identifying the seasonal pattern can help you prepare preventive strategies and manage flares more effectively.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young infants born in winter may develop drier skin and early eczema flares due to indoor heating and low humidity. Summer babies may develop heat rash more readily. At this age, the seasonal pattern may not yet be obvious since this may be their first exposure to a particular season.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As babies experience their first seasonal changes, you may begin to notice patterns. Winter dryness can trigger or worsen eczema. Using a humidifier and applying thicker moisturizers during cold months can help. In warmer months, lighter clothing and avoiding overheating are key.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, seasonal patterns become more apparent. Eczema often worsens in fall and winter as humidity drops. Spring may bring contact rashes from grass and pollen. Summer heat can cause miliaria (heat rash). Adjusting your skin care routine with the seasons can make a significant difference.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers who have had one full year of seasonal changes may show clear patterns of flares. Some children develop seasonal allergies that can worsen eczema. If your toddler has a predictable rash pattern, your pediatrician may recommend starting preventive treatments before the typical flare season begins.',
    },
  ],
  whenNormal: [
    'Eczema that predictably worsens in winter and improves in summer, which is a very common pattern',
    'Heat rash that appears during hot weather and resolves when the child is kept cool',
    'Mild skin dryness that follows seasonal humidity changes',
  ],
  whenToMention: [
    'Seasonal rash flares are becoming more severe each year or harder to control',
    'You need help developing a seasonal skin care plan for your baby',
    'The rash pattern does not clearly fit a seasonal eczema or heat rash pattern',
  ],
  whenToActNow: [
    'A seasonal rash flare becomes infected, with oozing, crusting, or increasing pain',
    'Your baby develops a severe widespread rash with fever that you initially attributed to seasonal patterns',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Treat and Control Eczema Rashes in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Eczema-Tips.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Eczema Types: Atopic Dermatitis.',
      url: 'https://www.aad.org/public/diseases/eczema/types/atopic-dermatitis',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Seasonal Variation in Atopic Dermatitis. Journal of Allergy and Clinical Immunology.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30578875/',
    },
  ],
  relatedConcernSlugs: ['eczema', 'eczema-flare-triggers', 'heat-rash', 'dry-skin'],
};
