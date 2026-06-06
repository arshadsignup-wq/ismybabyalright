import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-bumpy-skin-texture-rough',
  title: 'Baby Rough or Bumpy Skin Texture',
  category: 'skin',
  searchTerms: [
    'baby rough skin texture',
    'baby bumpy skin',
    'baby rough patches on skin',
    'baby skin feels like sandpaper',
    'baby goosebump like skin',
    'infant rough skin arms',
    'baby chicken skin',
    'baby skin not smooth',
    'toddler rough bumpy skin',
    'baby textured skin patches',
  ],
  quickAnswer:
    'Rough or bumpy skin in babies is very common and usually caused by dry skin, eczema, or keratosis pilaris (tiny bumps from keratin buildup in hair follicles). These conditions are harmless and manageable with regular moisturizing. Rarely, a sandpaper-like rash with fever could indicate scarlet fever, which needs medical attention.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborn skin naturally goes through a period of peeling and dryness as it adjusts to the outside world. This can make the skin feel rough in places, which is completely normal. Eczema may also start as rough, dry patches on the cheeks. Gentle, fragrance-free moisturizers applied after baths help maintain smooth skin.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Dry skin and early eczema are the most common causes of rough skin at this age. The outer arms, cheeks, and legs are typical locations. If the rough patches are also red and itchy, this is likely eczema. Regular application of a thick moisturizer or ointment, especially right after bathing, is the first-line treatment.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Keratosis pilaris may begin to appear as tiny, rough bumps on the upper arms, thighs, or cheeks. It looks like permanent goose bumps and is harmless. Eczema-related roughness may shift to skin creases. Both conditions respond to gentle exfoliation with a washcloth and consistent moisturizing.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Rough, bumpy skin from keratosis pilaris becomes more noticeable in toddlers and is very common. It is a cosmetic concern only and does not need medical treatment. However, a new sandpaper-like rash with fever and sore throat could indicate scarlet fever, which is caused by strep bacteria and requires antibiotics.',
    },
  ],
  whenNormal: [
    'Small, rough bumps on the upper arms and thighs that are not red or itchy, consistent with keratosis pilaris',
    'Dry, rough patches that improve significantly with regular moisturizing',
    'Newborn skin that feels rough and peeling during the first few weeks of life',
  ],
  whenToMention: [
    'Rough patches are also red, itchy, and cracked, suggesting eczema that may benefit from prescription treatment',
    'The rough texture is widespread and not improving despite consistent moisturizing',
    'You are concerned about the appearance and want to discuss management options',
  ],
  whenToActNow: [
    'A sandpaper-textured rash appears suddenly with high fever and sore throat, which could be scarlet fever requiring antibiotics',
    'Rough skin becomes very red, warm, swollen, or shows signs of infection',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Keratosis Pilaris: Overview.',
      url: 'https://www.aad.org/public/diseases/a-z/keratosis-pilaris-overview',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Dry Skin. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Dry-Skin.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Keratosis Pilaris. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK546708/',
    },
  ],
  relatedConcernSlugs: ['keratosis-pilaris-baby', 'dry-skin', 'eczema', 'baby-sandpaper-rash-scarlet-fever'],
};
