import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'preeclampsia-warning-signs',
  title: 'Preeclampsia Warning Signs',
  category: 'medical',
  searchTerms: [
    'preeclampsia symptoms',
    'high blood pressure pregnancy',
    'swelling in pregnancy danger signs',
    'protein in urine pregnant',
    'preeclampsia risk',
    'toxemia pregnancy',
    'pregnancy hypertension headache',
    'preeclampsia warning signs',
    'sudden swelling pregnancy face hands',
    'blurry vision pregnant',
  ],
  quickAnswer:
    'Preeclampsia is a pregnancy complication characterized by high blood pressure and signs of organ damage, usually after 20 weeks of pregnancy. It affects about 5-8% of pregnancies and can range from mild to severe. With regular prenatal monitoring, preeclampsia can be detected early and managed to protect both you and your baby.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Preeclampsia does not develop in the first trimester, but certain risk factors can be identified early. If you have a history of preeclampsia, chronic hypertension, kidney disease, autoimmune conditions, or are carrying multiples, your provider may recommend low-dose aspirin starting between weeks 12-16 to reduce your risk.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'Preeclampsia most commonly begins to develop after 20 weeks. Your blood pressure will be checked at every prenatal visit, and urine may be tested for protein. Warning signs to watch for include persistent headaches, visual changes, upper abdominal pain, and sudden swelling of your face or hands. Report any of these symptoms to your provider immediately.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'The third trimester is when preeclampsia most commonly presents. It can develop gradually or suddenly. If diagnosed, your provider will monitor you closely with blood pressure checks, blood tests, and fetal monitoring. Mild preeclampsia may be managed with close monitoring, while severe preeclampsia often requires earlier delivery. The cure for preeclampsia is delivery of the baby and placenta.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'Preeclampsia can develop or worsen in the postpartum period, typically within 48 hours of delivery but sometimes up to 6 weeks later. Continue to monitor for symptoms such as severe headaches, visual changes, upper abdominal pain, and significant swelling. Postpartum preeclampsia is a medical emergency that requires prompt treatment.',
    },
  ],
  whenNormal: [
    'Mild swelling in your feet and ankles that improves with rest and elevation (common in normal pregnancy)',
    'Occasional mild headaches that respond to rest and hydration',
    'Blood pressure readings that remain within normal range at prenatal visits',
    'Trace amounts of protein in urine without elevated blood pressure',
  ],
  whenToMention: [
    'You notice sudden swelling of your face or hands that is new or worsening',
    'You have persistent headaches that do not improve with acetaminophen and rest',
    'You have a blood pressure reading above 130/80 at home',
  ],
  whenToActNow: [
    'Blood pressure is 160/110 or higher on any reading',
    'You experience severe persistent headache, vision changes (seeing spots, flashing lights, blurry vision), or severe upper abdominal pain (especially right side under the ribs)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Preeclampsia and High Blood Pressure During Pregnancy. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/preeclampsia-and-high-blood-pressure-during-pregnancy',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Preeclampsia. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/complications/preeclampsia.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Preeclampsia - Symptoms and causes. Mayo Clinic, 2023.',
      url: 'https://www.mayoclinic.org/diseases-conditions/preeclampsia/symptoms-causes/syc-20355745',
    },
  ],
};
