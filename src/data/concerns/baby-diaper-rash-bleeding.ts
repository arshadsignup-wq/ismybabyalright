import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-diaper-rash-bleeding',
  title: 'Severe Diaper Rash with Bleeding',
  category: 'skin',
  searchTerms: [
    'baby diaper rash bleeding',
    'severe diaper rash baby',
    'baby diaper rash raw bleeding',
    'diaper rash won\'t heal baby',
    'baby diaper rash open sores',
    'baby diaper rash very bad',
    'worst diaper rash baby',
    'baby diaper rash cracked bleeding',
    'severe diaper rash treatment baby',
    'diaper rash with blood baby',
  ],
  quickAnswer:
    'A diaper rash that has progressed to the point of bleeding or open sores is considered severe and needs attention from your pediatrician. While mild diaper rash is very common, bleeding indicates the skin barrier is significantly broken. Maximizing diaper-free time, using thick barrier creams, and treating any underlying yeast or bacterial infection are key to healing.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborn skin is especially delicate and can develop severe diaper rash quickly, particularly with frequent watery stools. If the rash is bleeding or has open sores, see your pediatrician. Use gentle cleansing (warm water and soft cloth rather than wipes), frequent diaper changes, and a thick layer of zinc oxide cream with each change.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Severe diaper rash with bleeding may indicate a secondary yeast or bacterial infection. Bright red rash with satellite spots suggests yeast and needs antifungal treatment. Apply zinc oxide paste thickly and allow diaper-free time to air dry the skin. Do not scrub off barrier cream at each change; layer more on top.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Starting solids can change stool composition and contribute to more irritating diarrhea. Severe diaper rash can develop quickly during bouts of diarrhea. Protect the skin proactively with barrier cream during any episode of loose stools. If the rash is raw or bleeding, apply a generous "cement" layer of zinc oxide paste.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers may develop severe diaper rash from diarrheal illnesses, antibiotic use, or delayed diaper changes. For very severe rashes, your pediatrician may recommend a combination approach with antifungal cream, a mild steroid, and barrier paste. Changing diapers promptly and maximizing bare-bottom time accelerate healing.',
    },
  ],
  whenNormal: [
    'Mild redness in the diaper area that responds to frequent changes and barrier cream',
  ],
  whenToMention: [
    'Diaper rash is raw, cracked, or has any bleeding spots',
    'The rash is bright red with satellite spots suggesting yeast',
    'Diaper rash has not improved after 3 days of aggressive home treatment',
  ],
  whenToActNow: [
    'Extensive open, bleeding sores in the diaper area with fever or signs of infection',
    'Your baby is screaming with every diaper change and seems to be in significant pain',
    'Pus or foul-smelling drainage from the rash',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Diaper Rash. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Diaper-Rash.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. How to Treat Diaper Rash.',
      url: 'https://www.aad.org/public/diseases/a-z/diaper-rash-treatment',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Diaper Dermatitis. Pediatric Clinics of North America.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/24636195/',
    },
  ],
  relatedConcernSlugs: ['diaper-rash', 'diaper-rash-not-clearing', 'yeast-diaper-rash'],
};
