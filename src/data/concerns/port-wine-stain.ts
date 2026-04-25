import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'port-wine-stain',
  title: 'My Baby Has a Port-Wine Stain',
  category: 'skin',
  searchTerms: [
    'port wine stain baby',
    'port wine birthmark',
    'nevus flammeus',
    'red birthmark baby face',
    'vascular birthmark',
    'purple birthmark baby',
    'port wine stain treatment',
    'port wine stain laser',
    'sturge weber syndrome',
    'facial port wine stain',
  ],
  quickAnswer:
    'A port-wine stain is a flat, pink, red, or purple birthmark caused by abnormal blood vessels in the skin. It is present at birth, permanent, and does not fade over time like some other birthmarks. While most are purely cosmetic, those on the face may require medical evaluation and early laser treatment for best results.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Port-wine stains are present at birth and appear as flat, pink or light red patches, most commonly on the face, neck, or limbs. Unlike salmon patches (stork bites), port-wine stains do not fade. Early evaluation by a pediatric dermatologist is important, especially for facial birthmarks, as early laser treatment leads to better outcomes.',
    },
    {
      ageRange: '3-12 months',
      context:
        'During this period, the port-wine stain may darken from pink to a deeper red or purple as your baby\'s circulation matures. If the birthmark involves the forehead and upper eyelid, your pediatrician will monitor for Sturge-Weber syndrome, a rare condition requiring eye and neurological assessment. Most port-wine stains are isolated findings with no associated issues.',
    },
    {
      ageRange: '12 months - 3 years',
      context:
        'Port-wine stains continue to darken over time and do not disappear. The affected skin may begin to thicken slightly or develop small bumps. Laser treatment, typically started in infancy, can lighten the birthmark significantly. Multiple treatment sessions spaced several months apart are usually needed for optimal results.',
    },
    {
      ageRange: '3+ years',
      context:
        'Without treatment, port-wine stains become darker and the skin may thicken further. Some develop a bumpy, cobblestone texture. Laser therapy remains effective at this age but may require more sessions than early treatment. Makeup can also help camouflage the birthmark if desired. Ongoing dermatology follow-up is important.',
    },
  ],
  whenNormal: [
    'A flat, pink, red, or purple patch present at birth that does not blanch (turn white) when pressed',
    'The birthmark is located on the face, neck, arms, or legs and does not involve the eye or forehead',
    'Your baby is otherwise healthy with normal vision, development, and no seizures or neurological concerns',
    'The birthmark is not painful, does not bleed, and does not seem to bother your baby',
  ],
  whenToMention: [
    'The port-wine stain involves the forehead, upper eyelid, or area around the eye',
    'You are interested in early laser treatment for cosmetic reasons',
    'The birthmark is thickening, developing bumps, or bleeding easily',
    'You have concerns about associated conditions like Sturge-Weber syndrome',
  ],
  whenToActNow: [
    'Your baby with a facial port-wine stain develops seizures, developmental delays, or vision problems',
    'The birthmark becomes infected with swelling, warmth, drainage, or fever',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Vascular Birthmarks. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin-Birthmarks-and-Rashes.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Port-Wine Stain: Diagnosis and Treatment.',
      url: 'https://www.aad.org/public/diseases/a-z/port-wine-stains-treatment',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Port-Wine Stain. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/001475.htm',
    },
  ],
};
