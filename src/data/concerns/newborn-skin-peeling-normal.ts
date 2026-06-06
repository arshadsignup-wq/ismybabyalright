import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-skin-peeling-normal',
  title: 'Normal Skin Peeling After Birth',
  category: 'skin',
  searchTerms: [
    'newborn skin peeling',
    'baby skin flaking',
    'newborn dry peeling skin',
    'baby skin shedding after birth',
    'newborn skin cracking',
    'post-term baby peeling skin',
    'baby skin peeling hands feet',
    'newborn desquamation',
    'baby skin peeling normal',
    'overdue baby skin peeling',
  ],
  quickAnswer:
    'Skin peeling in newborns is very normal, especially in the first one to three weeks after birth. Babies who were born past their due date often have more peeling. The peeling happens as the skin adjusts from the watery environment of the womb to the drier outside air. No treatment is needed, and the peeling will resolve on its own.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Skin peeling is most common in the first one to three weeks of life. Full-term and especially post-term babies tend to peel more than premature babies. The peeling often starts on the hands, feet, and ankles but can occur anywhere. The underlying skin is healthy and normal. You do not need to peel or pick at the flaking skin. A small amount of fragrance-free moisturizer can be applied if the skin appears very dry, but this is optional. Avoid over-bathing, which can worsen dryness.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Most newborn skin peeling resolves by the second or third week. If your baby\'s skin continues to peel, crack, or appears red and irritated beyond this period, it could be an early sign of eczema or another skin condition. Gentle moisturizing with fragrance-free products can help maintain skin hydration.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Normal newborn peeling should be long resolved. Any new or persistent skin peeling, dryness, or cracking at this age may suggest eczema, food sensitivities, or other skin conditions and should be discussed with your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Skin peeling at this age is not related to normal newborn skin transition and should be evaluated. Common causes of peeling or dry skin in older infants include eczema, environmental irritants, or allergic reactions.',
    },
  ],
  whenNormal: [
    'Peeling and flaking skin in the first 1-3 weeks of life, especially on hands, feet, and ankles',
    'More pronounced peeling in babies born at or after their due date',
    'The skin underneath the peeling areas looks healthy and pink',
    'Baby is comfortable and not bothered by the peeling',
  ],
  whenToMention: [
    'Peeling continues beyond 3-4 weeks or seems excessive',
    'The skin under the peeling areas appears red, raw, or cracked',
    'Peeling is accompanied by a rash or other skin changes',
  ],
  whenToActNow: [
    'Widespread skin breakdown, blistering, or oozing that could indicate a skin infection or other condition requiring prompt treatment',
    'Skin peeling with fever, poor feeding, or baby appearing unwell',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Your Newborn\'s Skin. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Neonatal Skin Care. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/002302.htm',
    },
  ],
  relatedConcernSlugs: ['newborn-milia-white-bumps', 'newborn-dry-skin-eczema-early', 'newborn-bath-frequency'],
};
