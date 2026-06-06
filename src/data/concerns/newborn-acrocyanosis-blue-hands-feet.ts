import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-acrocyanosis-blue-hands-feet',
  title: 'Blue Hands and Feet in Newborns (Acrocyanosis)',
  category: 'medical',
  searchTerms: [
    'newborn blue hands',
    'newborn blue feet',
    'baby hands turning blue',
    'baby feet purple',
    'acrocyanosis newborn',
    'newborn blue fingers',
    'baby blue toes',
    'newborn hands purple when cold',
    'baby peripheral cyanosis',
    'newborn blue extremities normal',
  ],
  quickAnswer:
    'Blue or purple hands and feet in a newborn (acrocyanosis) is very common and almost always normal in the first few days of life. It happens because your baby\'s circulation is still maturing and blood flow to the extremities is adjusting to life outside the womb.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Acrocyanosis is extremely common in the first 24-48 hours after birth and can recur during the first few weeks, especially when your baby is cold, crying, or feeding. The hands and feet may appear blue or purple while the rest of the body remains pink and well-perfused. This is a normal transitional finding as your newborn\'s circulatory system adapts to breathing air. It is not a sign of heart or lung problems when limited to the hands and feet.',
    },
    {
      ageRange: '1-3 months',
      context:
        'By this age, acrocyanosis becomes much less frequent. You may still occasionally notice blue or mottled hands and feet when your baby is cold or during a bath, but it should resolve quickly with warming. If blueness of the hands and feet persists beyond the newborn period or occurs along with blue lips, tongue, or central body, it warrants medical evaluation.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Acrocyanosis should be rare by this age. Your baby\'s circulation has matured significantly. Occasional mottling when cold is still possible but should resolve quickly. Persistent or new-onset blue discoloration of the extremities at this age should be discussed with your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Blue hands and feet should not be a regular occurrence at this age. If you notice consistent or new blueness of the extremities, it may warrant evaluation for circulatory or cardiac concerns. Brief episodes related to cold exposure are still generally normal.',
    },
  ],
  whenNormal: [
    'Blue or purple hands and feet in the first 48 hours of life with a pink body, lips, and tongue',
    'Blueness of hands and feet that comes and goes, especially when baby is cold or crying',
    'Quick return to pink color when baby is warmed or calmed',
    'Baby is otherwise feeding well, alert, and breathing normally',
  ],
  whenToMention: [
    'Acrocyanosis persists beyond the first week of life or seems to be getting more frequent',
    'Blue hands and feet that take a long time to return to pink after warming',
    'You notice mottling or blueness spreading beyond the hands and feet',
  ],
  whenToActNow: [
    'Blue or purple color of the lips, tongue, gums, or central body (central cyanosis), which may indicate a heart or lung problem requiring immediate evaluation',
    'Baby appears lethargic, has difficulty breathing, is feeding poorly, or seems unwell along with blue extremities',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Newborn Skin: Common Variations. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Skin Color Changes in the Newborn. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/002302.htm',
    },
  ],
  relatedConcernSlugs: ['cyanosis-baby', 'baby-blue-lips-when-cold', 'newborn-mottled-skin'],
};
