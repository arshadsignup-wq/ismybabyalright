import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'molar-pregnancy-signs',
  title: 'Molar Pregnancy',
  category: 'medical',
  searchTerms: [
    'molar pregnancy',
    'hydatidiform mole',
    'molar pregnancy symptoms',
    'grape-like clusters ultrasound',
    'abnormal placenta growth',
    'very high hCG levels',
    'molar pregnancy snowstorm ultrasound',
    'gestational trophoblastic disease',
    'partial molar pregnancy',
    'complete molar pregnancy',
  ],
  quickAnswer:
    'A molar pregnancy occurs when an abnormal fertilized egg implants in the uterus, resulting in a growth of abnormal tissue instead of a normal pregnancy. It affects about 1 in 1,000 pregnancies. While a molar pregnancy cannot develop into a viable baby, it is treatable with a procedure to remove the abnormal tissue. With proper follow-up monitoring of hCG levels, most women recover fully and can have healthy pregnancies in the future.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Most molar pregnancies are diagnosed in the first trimester through ultrasound and blood tests. Common signs include vaginal bleeding (sometimes with passage of grape-like tissue), a uterus that is larger than expected, severe nausea and vomiting, abnormally high hCG levels, and occasionally early signs of preeclampsia. Ultrasound may show a characteristic "snowstorm" pattern in a complete mole.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'With modern ultrasound, molar pregnancies are usually detected before the second trimester. However, a partial molar pregnancy (where some normal placental tissue exists alongside abnormal tissue) may not be identified until later. If diagnosed, the treatment is surgical evacuation (suction curettage) of the uterus. This procedure is safe and typically performed as an outpatient.',
    },
    {
      ageRange: 'Post-treatment monitoring',
      context:
        'After removal of a molar pregnancy, hCG levels are monitored weekly until they return to zero, then monthly for 6-12 months to ensure no abnormal tissue remains. Reliable contraception is recommended during this monitoring period to avoid confusing hCG from a new pregnancy with persistent disease. Most women have undetectable hCG levels within 8-12 weeks.',
    },
    {
      ageRange: 'Future pregnancies',
      context:
        'Most women who have had a molar pregnancy can go on to have normal, healthy pregnancies. The risk of a second molar pregnancy is only about 1-2%. Your provider will typically recommend waiting until hCG monitoring is complete before trying to conceive again. An early ultrasound in your next pregnancy can provide reassurance.',
    },
  ],
  whenNormal: [
    'Light spotting in early pregnancy with a normal-appearing gestational sac and embryo on ultrasound',
    'Your hCG levels are appropriately rising and your ultrasound shows normal pregnancy development',
    'First trimester nausea that is typical in severity (not unusually extreme)',
    'After molar pregnancy treatment, your hCG levels are declining steadily toward zero',
  ],
  whenToMention: [
    'You have vaginal bleeding with an unusually high hCG level or uterus measuring larger than expected',
    'You had a molar pregnancy previously and want to discuss monitoring for a new pregnancy',
    'Your hCG levels after molar pregnancy treatment are plateauing instead of declining steadily',
  ],
  whenToActNow: [
    'You pass grape-like clusters of tissue from your vagina (collect and bring to your provider if possible)',
    'After molar pregnancy treatment, your hCG levels are rising instead of declining, which may indicate persistent gestational trophoblastic disease requiring further treatment',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Gestational Trophoblastic Disease. ACOG Practice Bulletin No. 53, 2004 (reaffirmed 2019).',
      url: 'https://www.acog.org/womens-health/faqs/early-pregnancy-loss',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Molar pregnancy. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/complications/molar-pregnancy.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Molar pregnancy - Symptoms and causes. Mayo Clinic, 2023.',
      url: 'https://www.mayoclinic.org/diseases-conditions/molar-pregnancy/symptoms-causes/syc-20375175',
    },
  ],
};
