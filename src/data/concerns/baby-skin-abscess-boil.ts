import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-skin-abscess-boil',
  title: 'Boil or Abscess on Baby\'s Skin',
  category: 'skin',
  searchTerms: ['baby boil', 'baby skin abscess', 'baby boil on skin', 'infant abscess', 'baby pus filled lump', 'baby boil treatment', 'baby furuncle', 'toddler boil', 'baby painful red lump', 'baby skin boil staph'],
  quickAnswer: 'A boil (furuncle) is a painful, red, pus-filled lump caused by a bacterial infection of a hair follicle, most commonly Staphylococcus aureus. Boils in babies should always be evaluated by a pediatrician. Never squeeze or lance a boil at home, as this can worsen the infection or spread bacteria.',
  byAge: [
    { ageRange: '0-3 months', context: 'Any abscess or boil in a newborn needs prompt medical evaluation. Young infants have immature immune systems and skin infections can progress quickly. A warm, red, fluctuant lump on a newborn should be seen the same day.' },
    { ageRange: '3-6 months', context: 'Boils can develop in areas of friction or moisture like the diaper area, armpits, or neck folds. Warm compresses may help bring the boil to a head, but your pediatrician should evaluate it to determine if it needs drainage or antibiotics.' },
    { ageRange: '6-12 months', context: 'As babies become more active, minor skin breaks from scratches and scrapes can allow bacteria to enter. Boils may form at these sites. Keep the area clean and covered, apply warm compresses, and see your pediatrician if the boil is larger than a pea, worsening, or your baby has a fever.' },
    { ageRange: '12-24 months', context: 'Toddlers may develop recurrent boils, especially if they carry Staphylococcus aureus on their skin. If your child gets frequent boils, your pediatrician may recommend decolonization measures such as bleach baths or nasal mupirocin ointment. MRSA (methicillin-resistant Staph) should be considered with recurrent boils.' },
  ],
  whenNormal: ['A very small, superficial red bump that resolves within a day or two is likely a minor folliculitis, not a true boil'],
  whenToMention: ['A red, painful, growing lump develops on your baby\'s skin', 'A boil that is not draining on its own after several days of warm compresses', 'Your child has had more than one boil in the past few months'],
  whenToActNow: ['Any boil or abscess in a baby under 3 months old', 'A boil is accompanied by fever, red streaking, or rapidly spreading redness', 'A boil near the eye, nose, or groin is growing quickly', 'Multiple boils appear simultaneously'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Boils (Abscess). HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Boils-Abscess.aspx' },
    { org: 'AAD', citation: 'American Academy of Dermatology. Boils and Carbuncles.', url: 'https://www.aad.org/public/diseases/a-z/boils-overview' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Methicillin-resistant Staphylococcus aureus (MRSA).', url: 'https://www.cdc.gov/mrsa/index.html' },
  ],
  relatedConcernSlugs: ['baby-skin-infection-staph', 'baby-cellulitis-spreading-redness', 'baby-mrsa-skin-infection'],
};
