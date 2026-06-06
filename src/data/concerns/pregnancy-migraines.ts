import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-migraines',
  title: 'Migraines During Pregnancy',
  category: 'maternal',
  searchTerms: [
    'migraine pregnancy',
    'migraines while pregnant',
    'migraine with aura pregnancy',
    'migraine medication safe pregnancy',
    'severe headache pregnancy',
    'throbbing headache pregnant',
    'migraine nausea pregnancy',
    'visual aura pregnant',
    'migraine triggers pregnancy',
    'triptan safe pregnancy',
  ],
  quickAnswer:
    'Migraines affect about 25% of women of reproductive age. Many people with migraines find they improve during pregnancy, especially in the second and third trimesters, due to stable estrogen levels. However, some experience worsening or new-onset migraines. Management during pregnancy requires careful medication selection under your provider\'s guidance.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Migraines may worsen or remain unchanged in the first trimester due to hormonal fluctuations. Many migraine medications (triptans, ergotamines, some preventives) are not recommended during pregnancy. Acetaminophen is the safest first-line treatment. Non-medication approaches like cold compresses, dark rooms, adequate sleep, hydration, and stress management are important.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'Many migraine sufferers experience significant improvement starting in the second trimester as estrogen levels stabilize at higher levels. Continue non-pharmacologic strategies. If migraines persist and are disabling, your provider can discuss safer medication options that may be appropriate.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Improvement in migraines often continues in the third trimester. However, new-onset migraines or migraines with aura in the third trimester must be carefully evaluated. Migraine with aura symptoms (visual disturbances, numbness) can mimic preeclampsia warning signs. Always report new neurological symptoms to your provider promptly.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'Migraines may return or worsen after delivery as hormone levels drop dramatically. If you are breastfeeding, discuss safe medication options with your provider. Many migraine treatments are compatible with breastfeeding.',
    },
  ],
  whenNormal: [
    'Migraines similar to your pre-pregnancy pattern that respond to acetaminophen and rest',
    'Improvement in migraines as pregnancy progresses',
    'Known migraine triggers (stress, sleep changes, certain foods) producing familiar symptoms',
  ],
  whenToMention: [
    'Migraines are frequent and significantly impacting your quality of life',
    'You need migraine medication and want to discuss safe options',
    'Migraine patterns have changed compared to your pre-pregnancy experience',
  ],
  whenToActNow: [
    'New-onset migraine with aura (visual disturbances, numbness, weakness) especially in the third trimester - must be evaluated to rule out preeclampsia or stroke',
    'Worst headache of your life or headache unlike any previous migraine',
    'Migraine with confusion, difficulty speaking, high blood pressure, or fever',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Headaches in Pregnancy. ACOG, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/headaches-during-pregnancy',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Migraine in Pregnancy. StatPearls, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK562250/',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Headaches During Pregnancy. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/pregnancy/common-discomforts-of-pregnancy.aspx',
    },
  ],
  relatedConcernSlugs: ['pregnancy-headaches', 'preeclampsia-warning-signs', 'pregnancy-medication-safety'],
};
