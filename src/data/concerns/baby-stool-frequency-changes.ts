import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-stool-frequency-changes',
  title: 'Changes in Baby Poop Frequency',
  category: 'digestive',
  searchTerms: [
    'baby poop frequency change',
    'baby pooping less often',
    'baby pooping more often',
    'baby stool frequency normal',
    'baby poop frequency age',
    'how often should baby poop',
    'baby suddenly pooping less',
    'baby bowel movement frequency change',
    'infant stool frequency',
    'toddler poop frequency change',
  ],
  quickAnswer:
    'Baby poop frequency varies widely and changes with age. Newborns may poop after every feed, while breastfed babies after 6 weeks may go up to 7 to 10 days between bowel movements. Formula-fed babies typically poop daily. What matters more than frequency is consistency: soft stools passed comfortably, regardless of frequency, are normal.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In the first 6 weeks, expect at least 3 to 4 stools per day in breastfed babies (a sign of adequate milk intake). After 6 weeks, breastfed babies may naturally shift to pooping once every few days or even once a week, and this can be completely normal if the stool is soft. Formula-fed babies typically continue to poop 1 to 3 times daily.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Stool frequency may decrease further. Some breastfed babies go a week or more between bowel movements without any problem. Formula-fed babies going more than 3 to 4 days without a stool may need attention. A sudden change in frequency (either direction) without other symptoms is usually not concerning.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Starting solids often changes stool frequency. Many babies begin pooping more regularly, typically 1 to 2 times per day. The stool becomes more formed. Some babies develop mild constipation when solids are introduced, especially with low-fiber first foods.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers typically have 1 to 2 bowel movements per day, but anywhere from 3 times a day to once every other day can be normal. Frequency may change with diet, activity level, and hydration. Establishing regular toilet times after meals can help normalize frequency.',
    },
  ],
  whenNormal: [
    'Frequency changes at 6 weeks when breastfed babies naturally poop less often',
    'Changes in frequency when starting or changing solid foods',
    'A regular pattern of 1 to 2 stools daily in a baby eating solids',
  ],
  whenToMention: [
    'A sudden significant change in stool frequency without a clear cause',
    'Your formula-fed baby goes more than 3 to 4 days without a bowel movement',
    'Your baby is straining or seems uncomfortable with the change in frequency',
  ],
  whenToActNow: [
    'A newborn under 6 weeks who stops pooping (fewer than 3 per day) as this could indicate inadequate feeding',
    'No stool for many days with a distended, firm abdomen and vomiting',
    'Frequency changes accompanied by blood in stool, weight loss, or signs of illness',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bowel Movements in Babies. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Babys-First-Bowel-Movements.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Pooping By the Numbers. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Pooping-By-the-Numbers.aspx',
    },
    {
      org: 'NIDDK',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Constipation in Children.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/constipation-children',
    },
  ],
  relatedConcernSlugs: ['not-pooping-daily', 'frequent-pooping', 'constipation', 'poop-consistency-by-age'],
};
