import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-vivid-dreams',
  title: 'Vivid or Disturbing Dreams During Pregnancy',
  category: 'maternal',
  searchTerms: [
    'vivid dreams pregnancy',
    'nightmares pregnant',
    'scary dreams pregnancy',
    'weird dreams pregnant',
    'pregnancy dreams about baby',
    'disturbing dreams pregnancy',
    'dreaming about labor',
    'bad dreams pregnant',
    'pregnancy dream meaning',
    'can\'t stop dreaming pregnant',
  ],
  quickAnswer:
    'Vivid, intense, or disturbing dreams are extremely common during pregnancy. They are caused by hormonal changes, increased REM sleep disruptions from waking frequently at night, and the natural anxieties and excitement of becoming a parent. These dreams do not predict the future and are not a sign that something is wrong.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Vivid dreams may begin early in pregnancy due to surging progesterone levels and frequent nighttime waking. Dreams about pregnancy, the baby, or being unprepared are common. Hormonal changes can intensify the emotional quality of dreams. This is normal and does not mean something is wrong with your pregnancy.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'Dreams may become more vivid and sometimes involve themes about the baby, labor, or changes in your body or relationships. These reflect normal subconscious processing of the major life changes you are experiencing. Talking about your dreams with a partner, friend, or therapist can help process any anxiety they cause.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Dreams are often most vivid and frequent in the third trimester. You may dream about labor, the baby, or worst-case scenarios. More frequent nighttime waking means you are more likely to remember dreams. Journaling before bed, practicing relaxation techniques, and maintaining good sleep hygiene can help. These dreams are your brain\'s way of processing major upcoming changes.',
    },
  ],
  whenNormal: [
    'Dreams are more vivid, emotional, or strange than usual',
    'Dreams involve themes about the baby, pregnancy, labor, or parenthood',
    'You remember dreams more often because you wake frequently at night',
    'Dreams may be unsettling but do not cause lasting distress during the day',
  ],
  whenToMention: [
    'Dreams are causing significant anxiety or fear that persists during the day',
    'You are having recurring nightmares that are disrupting your sleep',
    'Dreams are related to trauma or past experiences and are becoming overwhelming',
  ],
  whenToActNow: [
    'Disturbing dreams are accompanied by severe anxiety, panic attacks, or intrusive thoughts during waking hours',
    'You are having thoughts of harming yourself or others, whether in dreams or while awake',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Sleep and Dreams in Pregnancy. Sleep Medicine Reviews, 2017.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/27751677/',
    },
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Sleep During Pregnancy. ACOG, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/sleep-during-pregnancy',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Sleep During Pregnancy. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/pregnancy/sleep-during-pregnancy.aspx',
    },
  ],
  relatedConcernSlugs: ['pregnancy-insomnia', 'pregnancy-anxiety', 'prenatal-depression'],
};
