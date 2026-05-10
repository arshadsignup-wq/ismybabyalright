import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-teeth-gap-spacing',
  title: 'Gaps Between Baby Teeth',
  category: 'medical',
  searchTerms: [
    'gaps between baby teeth',
    'baby teeth spaced apart',
    'baby teeth gap',
    'spaces between toddler teeth',
    'diastema baby teeth',
    'baby front teeth gap',
    'are gaps in baby teeth normal',
    'wide spaces baby teeth',
  ],
  quickAnswer:
    'Gaps and spaces between baby teeth are actually a very good sign. Pediatric dentists consider spacing between primary teeth to be normal and even desirable because these gaps indicate there will likely be enough room for the larger permanent teeth to come in properly. About two-thirds of children have some spacing between their baby teeth.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Teeth have not yet erupted, so spacing is not applicable at this age. The jaw is still developing and will continue to grow significantly during the first few years of life.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As the first teeth begin to erupt, parents may notice gaps between the lower front teeth. This is completely normal and expected as baby teeth are naturally smaller relative to the jaw.',
    },
    {
      ageRange: '6-12 months',
      context:
        'With more teeth appearing, spacing between them is common and healthy. The gaps you see are often called primate spaces or developmental spaces. These spaces serve an important purpose by reserving room for the permanent teeth, which are larger than baby teeth.',
    },
    {
      ageRange: '12 months+',
      context:
        'As more baby teeth come in through age 3, the jaw continues growing, and spaces may become more or less visible. Crowded baby teeth (no spaces at all) can actually be more concerning because it may indicate insufficient room for permanent teeth. Regular dental visits will help monitor spacing and jaw development.',
    },
  ],
  whenNormal: [
    'You see small gaps between the front baby teeth, especially the upper front teeth',
    'The spaces between teeth are relatively even and symmetrical',
    'Your child has gaps but teeth appear healthy with no discoloration',
    'Your dentist has confirmed the spacing is developmentally appropriate',
  ],
  whenToMention: [
    'A very large gap between the upper front teeth (diastema) is accompanied by a thick piece of tissue (frenulum) between them',
    'Your child\'s baby teeth are very crowded with no spacing at all, which may indicate future orthodontic needs',
    'A gap suddenly appears where there was not one before, which could indicate a missing or damaged tooth',
  ],
  whenToActNow: [
    'A gap appeared suddenly due to trauma and a tooth was knocked out or displaced, as baby dental injuries need prompt evaluation',
    'The gum tissue between a gap appears swollen, discolored, or has a visible lump, which could indicate a cyst or other issue',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAPD',
      citation:
        'American Academy of Pediatric Dentistry. Guideline on Management of the Developing Dentition and Occlusion in Pediatric Dentistry.',
      url: 'https://www.aapd.org/research/oral-health-policies--recommendations/management-of-the-developing-dentition/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Teething and Tooth Care. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Prevalence of spacing in the primary dentition and its relation to the permanent dentition. Pediatric Dental Journal.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/23966839/',
    },
  ],
};
