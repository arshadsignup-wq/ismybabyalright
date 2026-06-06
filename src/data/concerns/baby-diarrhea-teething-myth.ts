import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-diarrhea-teething-myth',
  title: 'Does Teething Cause Diarrhea?',
  category: 'digestive',
  searchTerms: [
    'teething diarrhea baby',
    'does teething cause diarrhea',
    'baby loose stool teething',
    'teething and poop changes',
    'baby diarrhea when teething',
    'teething diarrhea myth',
    'is teething diarrhea real',
    'baby runny poop teething',
    'teething stool changes',
    'baby pooping more teething',
  ],
  quickAnswer:
    'While many parents report looser stools during teething, research does not support a direct causal link between teething and diarrhea. Teething occurs at the same age that babies lose maternal antibodies and start putting everything in their mouths, increasing infection risk. True watery diarrhea during teething should not be dismissed and may indicate an infection.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Teething before 3 months is uncommon. Diarrhea in young infants should not be attributed to teething and warrants medical evaluation, especially if accompanied by fever or poor feeding.',
    },
    {
      ageRange: '3-6 months',
      context:
        'This is when teething typically begins. Studies show that while drooling, gum rubbing, and mild fussiness are associated with teething, diarrhea and high fever are not. If your baby has watery diarrhea, look for other causes such as a viral infection or dietary change rather than attributing it to teething.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Teething peaks during this period, coinciding with increased exposure to pathogens from mouthing objects and the introduction of new foods. Slightly looser stools may occur from swallowing excess saliva, but true diarrhea with watery, frequent stools is more likely from a virus and should not be ignored.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers continue to teethe with their molars. If diarrhea occurs during teething, it is important to stay hydrated and monitor for signs of infection. Do not let teething be a catch-all explanation for diarrhea that persists more than a day or two.',
    },
  ],
  whenNormal: [
    'Slightly softer or more frequent stools during active teething that are not watery',
    'One to two days of mildly loose stool that resolves on its own',
  ],
  whenToMention: [
    'Diarrhea during teething that is watery, frequent, or lasting more than 2 to 3 days',
    'You want to discuss whether your baby\'s symptoms are truly related to teething or something else',
  ],
  whenToActNow: [
    'Watery diarrhea with blood, mucus, or foul smell during teething, which suggests an infection',
    'Diarrhea with high fever, vomiting, or signs of dehydration regardless of teething status',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Teething Pain. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Teething-Pain.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Symptoms Associated with Infant Teething. Pediatrics.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/10742368/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Teething: 4 to 7 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Teething-4-to-7-Months.aspx',
    },
  ],
  relatedConcernSlugs: ['diarrhea', 'baby-diarrhea-food-introduction', 'baby-stomach-virus-duration'],
};
