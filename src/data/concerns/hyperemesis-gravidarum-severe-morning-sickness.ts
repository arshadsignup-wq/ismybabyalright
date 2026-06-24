import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'hyperemesis-gravidarum-severe-morning-sickness',
  title: 'Hyperemesis Gravidarum - Severe Morning Sickness',
  category: 'maternal',
  searchTerms: [
    'hyperemesis gravidarum',
    'severe morning sickness',
    'can\'t stop vomiting pregnant',
    'extreme nausea pregnancy',
    'morning sickness hospitalization',
    'HG pregnancy',
    'vomiting all day pregnant',
    'losing weight pregnant from vomiting',
    'dehydration from morning sickness',
    'hyperemesis treatment options',
    'morning sickness worse than normal',
    'can\'t keep anything down pregnant',
  ],
  quickAnswer:
    'Hyperemesis gravidarum (HG) is a severe form of pregnancy nausea and vomiting that affects 0.3-3% of pregnancies. Unlike typical morning sickness, HG causes persistent vomiting, weight loss of 5% or more of pre-pregnancy weight, dehydration, and inability to keep food or fluids down. It is a serious medical condition that requires treatment, not something to "push through." Effective treatments include prescription antiemetics, IV fluids, nutritional support, and in severe cases, hospitalization. HG is not caused by anxiety or psychological weakness.',
  byAge: [
    {
      ageRange: 'First trimester (weeks 4-13)',
      context:
        'HG typically begins between weeks 4-6 and peaks around weeks 9-13. Key differences between normal morning sickness and HG: normal nausea usually allows some food intake and subsides by week 14, while HG causes relentless vomiting (sometimes 20+ times per day), inability to keep any food or liquid down, rapid weight loss, and ketosis. If you cannot keep fluids down for 12-24 hours, contact your provider. Treatment may include ondansetron (Zofran), promethazine, metoclopramide, or doxylamine-pyridoxine (Diclegis). IV fluids with electrolytes and vitamins (especially thiamine to prevent Wernicke encephalopathy) may be needed.',
    },
    {
      ageRange: 'Second trimester (weeks 14-27)',
      context:
        'While most cases improve by weeks 16-20, approximately 10-20% of women with HG continue to experience severe symptoms throughout the second trimester or the entire pregnancy. Ongoing management may include home IV hydration, PICC line nutrition (TPN), or repeated hospital admissions. Mental health support is important, as HG is associated with depression, anxiety, PTSD, and feelings of isolation. The condition can strain relationships and may affect bonding with the pregnancy. Partners and family members should understand that HG is a medical condition, not something the mother can control.',
    },
    {
      ageRange: 'Third trimester (weeks 28-40) and postpartum',
      context:
        'Most HG cases resolve by mid-pregnancy, but some persist until delivery. Babies born to mothers with HG are slightly more likely to be small for gestational age if the mother had significant weight loss, but most babies develop normally. After delivery, symptoms typically resolve rapidly, though some women experience lingering food aversions. Psychological recovery can take longer: HG can cause PTSD-like symptoms, and some women decide against future pregnancies because of their experience. If you experienced HG, discuss your mental health with your provider postpartum.',
    },
  ],
  whenNormal: [
    'You have typical morning sickness that is manageable with dietary modifications and you can keep some food and fluids down.',
    'Your nausea improves by the end of the first trimester.',
    'You are not losing weight or becoming dehydrated.',
  ],
  whenToMention: [
    'You are vomiting more than 3-4 times daily and struggling to keep food down.',
    'You have lost more than 5% of your pre-pregnancy body weight.',
    'Over-the-counter remedies (ginger, vitamin B6, small frequent meals) are not helping.',
    'Your nausea is significantly affecting your ability to work, care for other children, or function daily.',
  ],
  whenToActNow: [
    'You have not kept any fluids down for more than 12-24 hours and are showing signs of dehydration (dark urine, dizziness, rapid heartbeat, dry mouth).',
    'You are vomiting blood or material that looks like coffee grounds.',
    'You feel confused, have blurred vision, or experience muscle weakness, which can indicate vitamin deficiency complications.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'intrahepatic-cholestasis-pregnancy',
    'peripartum-cardiomyopathy-underdiagnosed',
    'losing-baby-weight-safely',
  ],
  sources: [
    {
      org: 'ACOG',
      citation:
        'ACOG Practice Bulletin No. 189: Nausea and Vomiting of Pregnancy. Obstetrics & Gynecology, 2018.',
      url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2018/01/nausea-and-vomiting-of-pregnancy',
    },
    {
      org: 'NIH',
      citation:
        'NIH - Hyperemesis Gravidarum: A Review of Recent Literature. Pharmacology, 2014.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/24401693/',
    },
    {
      org: 'HER Foundation',
      citation:
        'Hyperemesis Education and Research Foundation. About Hyperemesis Gravidarum.',
      url: 'https://www.hyperemesis.org/about-hyperemesis-gravidarum/',
    },
  ],
};
