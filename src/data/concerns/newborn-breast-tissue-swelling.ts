import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-breast-tissue-swelling',
  title: 'Breast Buds and Swelling in Newborns',
  category: 'medical',
  searchTerms: [
    'newborn breast swelling',
    'baby breast buds',
    'newborn swollen nipples',
    'baby breast lump',
    'newborn breast tissue enlargement',
    'baby boy breast swelling',
    'newborn breast engorgement',
    'baby chest lumps',
    'neonatal breast hypertrophy',
    'newborn breast buds normal',
  ],
  quickAnswer:
    'Swollen breast tissue (breast buds) in newborns is very common and occurs in both boys and girls. It is caused by the mother\'s hormones (estrogen) that crossed the placenta before birth. The swelling is harmless, may last a few weeks to months, and resolves on its own. Do not squeeze or massage the breast tissue.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Breast buds or swollen breast tissue are normal in both male and female newborns. The swelling is caused by maternal estrogen that crossed the placenta during pregnancy. You may feel a firm, disc-shaped lump under the nipple on one or both sides. Some babies may even produce a small amount of milky discharge (sometimes called witch\'s milk), which is also normal. Do not squeeze, press, or try to express the fluid, as this can cause irritation or infection.',
    },
    {
      ageRange: '1-3 months',
      context:
        'The breast swelling typically begins to decrease during this period as your baby\'s body clears the maternal hormones. The process is gradual and may take several weeks. The tissue may feel smaller and softer over time. Continue to avoid manipulating the area. If the swelling increases, becomes red, warm, or tender, contact your pediatrician.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Most breast buds have resolved or are significantly smaller by this age. Some babies, particularly girls, may have breast tissue that persists longer due to their own hormone production, but this is still generally normal. If you have concerns about persistent breast tissue, your pediatrician can evaluate at a well-child visit.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Breast tissue should have resolved in most babies by this age. Persistent or new breast enlargement beyond this period should be mentioned to your pediatrician, as it could occasionally warrant further evaluation.',
    },
  ],
  whenNormal: [
    'Firm, disc-shaped breast tissue under one or both nipples in the first weeks of life',
    'Small amount of milky discharge from the nipple (witch\'s milk)',
    'Swelling occurs in both boys and girls',
    'The breast tissue is not red, warm, or painful',
  ],
  whenToMention: [
    'Breast swelling persists beyond 6 months of age',
    'The tissue seems to be growing rather than shrinking',
    'You notice breast tissue enlargement in a baby older than 6 months',
  ],
  whenToActNow: [
    'The breast area becomes red, hot, swollen, or tender, which could indicate mastitis (breast infection) requiring antibiotics',
    'Your baby has fever along with breast swelling or discharge that appears bloody or pus-like',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Physical Appearance and Growth: Your Newborn. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Your-Babys-First-Days.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Breast Enlargement in Newborns. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/001911.htm',
    },
  ],
  relatedConcernSlugs: ['newborn-witch-milk', 'newborn-swollen-genitals', 'newborn-vaginal-bleeding-mini-period'],
};
