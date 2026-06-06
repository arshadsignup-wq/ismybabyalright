import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-headaches',
  title: 'Headaches During Pregnancy',
  category: 'maternal',
  searchTerms: [
    'headache pregnancy',
    'headaches pregnant',
    'tension headache pregnancy',
    'head pain pregnant',
    'headache first trimester',
    'headache third trimester',
    'headache relief pregnancy safe',
    'tylenol for headache pregnancy',
    'frequent headaches pregnant',
    'headache and nausea pregnancy',
  ],
  quickAnswer:
    'Headaches are common during pregnancy, especially in the first and third trimesters. They are often caused by hormonal changes, increased blood volume, stress, fatigue, caffeine withdrawal, or dehydration. Most pregnancy headaches are tension-type and harmless, but severe or persistent headaches, especially in the third trimester, should be evaluated to rule out preeclampsia.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Headaches are common in the first trimester due to surging hormones, increased blood volume, and caffeine reduction. Rest, hydration, cool compresses, and acetaminophen (Tylenol) at your provider\'s recommended dose are generally safe. Avoid ibuprofen (Advil/Motrin) and aspirin unless specifically prescribed by your provider.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'Many people find headaches improve in the second trimester as hormones stabilize. If headaches persist, try maintaining regular sleep, eating frequent small meals, staying hydrated, and managing stress. If you need medication, acetaminophen remains the safest option.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'New-onset headaches in the third trimester or headaches that are different from your usual pattern should always be reported to your provider. Severe, persistent headache that does not respond to acetaminophen, rest, and hydration can be a warning sign of preeclampsia, especially if accompanied by visual changes, upper abdominal pain, or swelling.',
    },
  ],
  whenNormal: [
    'Mild to moderate tension-type headache that responds to rest, hydration, or acetaminophen',
    'Headaches related to fatigue, hunger, stress, or caffeine changes',
    'Headaches similar to ones you experienced before pregnancy',
    'Headaches that occur in the first trimester and improve in the second',
  ],
  whenToMention: [
    'Frequent headaches that are not responsive to safe home treatments',
    'Headaches that are interfering with work or daily activities',
    'A change in headache pattern or new type of headache during pregnancy',
  ],
  whenToActNow: [
    'Sudden severe headache, the worst headache of your life, or a headache different from any you have had before',
    'Headache accompanied by vision changes, seeing spots, severe swelling, or upper abdominal pain - these are potential signs of preeclampsia',
    'Headache with fever, stiff neck, confusion, or seizures',
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
        'National Library of Medicine. Headache in Pregnancy. StatPearls, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK562250/',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Common Discomforts of Pregnancy. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/pregnancy/common-discomforts-of-pregnancy.aspx',
    },
  ],
  relatedConcernSlugs: ['pregnancy-migraines', 'preeclampsia-warning-signs'],
};
