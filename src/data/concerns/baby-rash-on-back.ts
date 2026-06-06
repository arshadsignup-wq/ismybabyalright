import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-rash-on-back',
  title: 'Baby Back Rash',
  category: 'skin',
  searchTerms: [
    'baby rash on back',
    'infant back rash',
    'baby red spots on back',
    'baby bumps on back',
    'baby heat rash back',
    'baby back rash after sleeping',
    'rash on baby lower back',
    'baby eczema back',
    'baby rash back and stomach',
    'toddler rash on back',
  ],
  quickAnswer:
    'Back rashes in babies are quite common and are most often caused by heat rash, eczema, viral rashes, or irritation from clothing and bedding. Because the back is often covered and pressed against surfaces, heat and moisture can easily accumulate. Most back rashes are harmless and resolve with simple care.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns who spend a lot of time on their backs may develop heat rash or pressure-related redness. Erythema toxicum, the common newborn rash with red blotches and white or yellow bumps, frequently appears on the back. Mongolian spots, which are flat blue-gray patches, are common on the lower back and are completely harmless birthmarks.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Heat rash on the back is common at this age because babies spend much of their time lying down. Overdressing or heavy swaddling can worsen it. Eczema patches may also develop on the back. Dressing your baby in breathable fabrics and avoiding overheating helps prevent back rashes.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies start sitting up and moving more, back rashes from heat and pressure often improve. Viral rashes like roseola typically spread across the trunk, including the back. Contact dermatitis from new laundry detergents or fabrics may also appear on the back where clothing sits closest to the skin.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers may develop back rashes from sweat during active play, viral illnesses, or eczema. The back is a common location for widespread viral rashes. If your toddler develops a persistent rash on the back with no clear cause, it is worth having your pediatrician take a look.',
    },
  ],
  whenNormal: [
    'Small bumps or redness on the back that clears up when the baby is kept cool and in breathable clothing',
    'Flat blue-gray patches on the lower back that have been present since birth, consistent with Mongolian spots',
    'A pink rash that appears on the back and trunk after a fever resolves',
  ],
  whenToMention: [
    'The back rash is persistent, expanding, or not improving with basic skin care',
    'Your baby seems itchy or uncomfortable and is having trouble sleeping because of the rash',
    'The rash has an unusual appearance such as a ring shape, blisters, or peeling skin',
  ],
  whenToActNow: [
    'The rash is non-blanching, meaning the spots do not fade when pressed, which could indicate a serious condition',
    'Your baby has a rapidly spreading rash with fever, lethargy, or poor feeding',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Rashes and Skin Conditions in Newborns. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Rashes-and-Skin-Conditions.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Birthmarks and Your Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin-Birthmarks-and-Rashes.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Dermatologic Conditions in Infants. American Family Physician.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30213356/',
    },
  ],
  relatedConcernSlugs: ['heat-rash', 'viral-rash-baby', 'mongolian-spots', 'eczema'],
};
