import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'breast-buds-newborn',
  title: 'My Newborn Has Breast Buds or Swollen Breasts',
  category: 'medical',
  searchTerms: [
    'newborn breast buds',
    'baby swollen breasts',
    'newborn breast tissue swelling',
    'baby breast lump',
    'newborn breast milk leaking',
    'witch\'s milk newborn',
    'baby chest swollen',
    'is it normal for newborn to have breast buds',
    'newborn breast enlargement',
    'baby boy breast swelling',
  ],
  quickAnswer:
    'Breast buds or swollen breast tissue in newborns is very common and completely normal. It is caused by maternal hormones (estrogen) that crossed the placenta before birth. The swelling usually resolves on its own within a few weeks to months and requires no treatment.',
  byAge: [
    {
      ageRange: '0-2 weeks',
      context:
        'Newborn breast swelling is most noticeable in the first 1-2 weeks of life. It occurs in both boys and girls and is caused by maternal estrogen that crossed the placenta during pregnancy. Some newborns may even produce a small amount of milky discharge from the nipples, historically called \'witch\'s milk.\' This is entirely normal and harmless. Do not squeeze or massage the breast tissue, as this can cause irritation or infection.',
    },
    {
      ageRange: '2-6 weeks',
      context:
        'The breast swelling typically begins to decrease as maternal hormones are gradually cleared from the baby\'s system. In breastfed babies, the swelling may persist slightly longer due to continued low-level hormone exposure through breast milk, but this is still normal. The tissue should feel soft and not be red, hot, or painful to touch.',
    },
    {
      ageRange: '6 weeks - 6 months',
      context:
        'By 2-3 months, most newborn breast swelling has fully resolved. In some infants, particularly girls, small breast buds may persist for several months. This is usually benign and part of a condition called infantile gynecomastia. However, if the swelling is increasing in size, becoming hard, or appears red and warm, it should be evaluated by your pediatrician.',
    },
    {
      ageRange: '6 months+',
      context:
        'Breast tissue that persists or enlarges beyond 6 months of age, or any new breast development in infancy or early childhood, warrants medical evaluation. While usually benign (a condition called premature thelarche), your pediatrician may want to check hormone levels to rule out early puberty or other endocrine conditions.',
    },
  ],
  whenNormal: [
    'Both breasts are mildly swollen and soft in a newborn under 2-3 months old',
    'A small amount of milky discharge (witch\'s milk) comes from the nipples in the first few weeks',
    'The swelling is gradually decreasing over weeks',
    'The skin over the breast area looks normal with no redness, warmth, or discoloration',
  ],
  whenToMention: [
    'The breast swelling has not resolved by 3-4 months of age',
    'Breast tissue appears to be growing rather than shrinking',
    'You notice breast development in a baby older than 6 months who did not have newborn breast buds',
  ],
  whenToActNow: [
    'The breast area becomes red, hot, hard, or painful to touch, as this may indicate a breast abscess or mastitis requiring antibiotics',
    'Your baby develops a fever along with breast swelling, or there is pus draining from the nipple',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Common Conditions in Newborns.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Common-Conditions-in-Newborns.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Newborn Breast Swelling. Mayo Foundation for Medical Education and Research.',
      url: 'https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/expert-answers/newborn/faq-20058319',
    },
    {
      org: 'NIH',
      citation:
        'MedlinePlus. Newborn Breast Swelling. National Library of Medicine.',
      url: 'https://medlineplus.gov/ency/article/001911.htm',
    },
  ],
};
