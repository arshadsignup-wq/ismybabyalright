import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-restless-legs',
  title: 'Restless Leg Syndrome in Pregnancy',
  category: 'maternal',
  searchTerms: [
    'restless legs pregnancy',
    'restless leg syndrome pregnant',
    'RLS pregnancy',
    'legs won\'t stop moving pregnant',
    'uncomfortable legs at night pregnant',
    'creepy crawly feeling legs pregnant',
    'can\'t keep legs still pregnancy',
    'tingling legs at night pregnant',
    'urge to move legs pregnancy',
    'restless legs iron pregnancy',
  ],
  quickAnswer:
    'Restless leg syndrome (RLS) affects up to 26% of pregnant people, making it about 2-3 times more common during pregnancy. It causes an irresistible urge to move the legs, often accompanied by uncomfortable sensations, and typically worsens at night. It may be related to iron or folate deficiency and usually resolves after delivery.',
  byAge: [
    {
      ageRange: 'Second trimester',
      context:
        'RLS may begin or worsen in the second trimester. The uncomfortable sensations - often described as crawling, tingling, aching, or pulling - are temporarily relieved by movement. Your provider may check iron and ferritin levels, as iron deficiency is strongly associated with RLS. Gentle leg exercises before bed and avoiding caffeine can help.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'RLS is most common and severe in the third trimester. It can significantly impact sleep quality. Warm baths before bed, leg massage, stretching, and maintaining regular sleep schedules may help. Iron supplementation (if levels are low) has been shown to improve symptoms. Avoid antihistamines and antiemetics that can worsen RLS.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'RLS usually resolves within weeks of delivery for most people. If it persists, talk to your provider. Women who develop RLS during pregnancy have a higher risk of developing it again in future pregnancies or later in life.',
    },
  ],
  whenNormal: [
    'An uncomfortable urge to move your legs that is worse at rest and improves with movement',
    'Symptoms that are worse in the evening or at night',
    'Uncomfortable sensations in the legs described as crawling, tingling, or aching',
    'Symptoms that developed or worsened during pregnancy',
  ],
  whenToMention: [
    'RLS is significantly affecting your sleep quality',
    'You need help managing symptoms that are not improving with lifestyle changes',
    'You want to discuss whether iron supplementation might help',
  ],
  whenToActNow: [
    'Symptoms are accompanied by severe leg pain, swelling, or discoloration, which could indicate a different condition',
    'RLS is causing severe sleep deprivation that affects your ability to function safely',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute of Neurological Disorders and Stroke. Restless Legs Syndrome Fact Sheet. NINDS, 2023.',
      url: 'https://www.ninds.nih.gov/health-information/disorders/restless-legs-syndrome',
    },
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Sleep During Pregnancy. ACOG, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/sleep-during-pregnancy',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Restless Legs Syndrome in Pregnancy. Sleep Medicine Reviews, 2018.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28886916/',
    },
  ],
  relatedConcernSlugs: ['pregnancy-leg-cramps', 'pregnancy-insomnia', 'pregnancy-anemia'],
};
