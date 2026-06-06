import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-friction-rash-chafing',
  title: 'Chafing and Friction Rash on Baby',
  category: 'skin',
  searchTerms: [
    'baby chafing rash',
    'baby friction rash',
    'baby rash from clothing',
    'baby skin irritation clothes',
    'baby chafing thighs',
    'baby neck chafing',
    'toddler chafing rash',
    'baby clothing irritation skin',
    'baby rough fabric rash',
    'baby elastic mark rash',
  ],
  quickAnswer:
    'Friction rashes from clothing, diapers, or skin-on-skin contact are common in babies, especially in skin folds and areas where clothing rubs. Using soft, breathable fabrics, ensuring proper clothing fit, and applying barrier creams to friction-prone areas can prevent and treat chafing.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns can develop friction rashes from clothing tags, seams, or tight elastic bands. Diaper edges may chafe the thighs and waist. Choose soft, tagless clothing and ensure diapers fit properly without being too tight. Soft cotton is the gentlest fabric for newborn skin.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Chubby skin folds on the neck, thighs, and wrists are prone to friction irritation. Keeping skin folds clean and dry, and applying a thin layer of barrier cream, prevents chafing. Avoid rough or synthetic fabrics directly against the skin.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies crawl, knees and elbows may develop friction rashes from carpet or hard floors. Clothing with padded knees or soft play mats can help. Elastic waistbands that are too tight can cause red marks and irritation around the waist.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Active toddlers may develop chafing from running, especially in the inner thighs during warm weather. Moisture-wicking fabrics and applying petroleum jelly to friction-prone areas before active play can prevent chafing. If a friction rash persists or becomes raw, see your pediatrician.',
    },
  ],
  whenNormal: [
    'Mild redness from clothing that fades quickly after removing the irritating garment',
    'Red marks from elastic bands that resolve within hours',
  ],
  whenToMention: [
    'Persistent friction rash that does not resolve with clothing changes',
    'Chafing that leads to broken skin or bleeding',
    'Repeated rashes in the same location suggesting contact dermatitis',
  ],
  whenToActNow: [
    'A friction area becomes infected with swelling, warmth, pus, or spreading redness',
    'A rash that was assumed to be friction but is spreading or worsening in an unusual pattern',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Dressing Your Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Dressing-Your-Baby.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. How to Prevent Chafing.',
      url: 'https://www.aad.org/public/everyday-care/skin-care-basics/dry/prevent-chafing',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Intertrigo. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK531489/',
    },
  ],
  relatedConcernSlugs: ['baby-rash-in-skin-folds', 'diaper-rash', 'contact-dermatitis-baby'],
};
