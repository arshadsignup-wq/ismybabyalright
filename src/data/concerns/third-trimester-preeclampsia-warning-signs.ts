import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'third-trimester-preeclampsia-warning-signs',
  title: 'Preeclampsia Warning Signs in the Third Trimester',
  category: 'maternal',
  searchTerms: [
    'preeclampsia warning signs',
    'preeclampsia symptoms third trimester',
    'high blood pressure pregnancy',
    'preeclampsia signs',
    'swelling pregnancy preeclampsia',
    'headache pregnancy preeclampsia',
    'protein in urine pregnancy',
    'preeclampsia risk factors',
    'HELLP syndrome signs',
    'preeclampsia vision changes',
    'preeclampsia when to go to hospital',
  ],
  quickAnswer:
    'Preeclampsia is a serious pregnancy complication characterized by high blood pressure and signs of organ damage, typically occurring after 20 weeks of pregnancy. It affects 5-8% of pregnancies and can progress rapidly. Warning signs include persistent severe headache, vision changes (blurring, spots, light sensitivity), sudden severe swelling (especially face and hands), upper abdominal pain (especially right side), nausea or vomiting in the second half of pregnancy, and sudden weight gain from fluid retention. These symptoms require immediate medical evaluation.',
  byAge: [
    {
      ageRange: '20-28 weeks',
      context:
        'Early-onset preeclampsia (before 34 weeks) is less common but tends to be more severe. Risk factors include first pregnancy, previous preeclampsia, chronic hypertension, kidney disease, diabetes, autoimmune conditions, obesity, age over 35 or under 20, IVF pregnancy, and carrying multiples. If you have risk factors, your provider may recommend low-dose aspirin starting at 12-16 weeks. Regular prenatal visits include blood pressure checks and urine screening, which help catch early signs. If diagnosed this early, close monitoring and possible hospitalization may be needed.',
    },
    {
      ageRange: '28-37 weeks',
      context:
        'This is the most common window for preeclampsia to develop. Learn and watch for warning signs between appointments: persistent headache not relieved by acetaminophen, visual disturbances (flashing lights, blurry vision, spots), pain in the upper right abdomen or shoulder, sudden significant swelling of face, hands, or feet, and nausea or vomiting. If your blood pressure at a prenatal visit is elevated (140/90 or higher), additional testing including blood work and urine protein will be ordered. Treatment depends on severity and gestational age, and may include blood pressure medication, magnesium sulfate, and close monitoring.',
    },
    {
      ageRange: '37+ weeks and postpartum',
      context:
        'Late-onset preeclampsia and postpartum preeclampsia (occurring up to 6 weeks after delivery) are important to recognize. The cure for preeclampsia is delivery, and at 37+ weeks, induction is typically recommended. After delivery, continue to watch for preeclampsia symptoms for several weeks. If you develop severe headache, vision changes, difficulty breathing, or upper abdominal pain after going home from the hospital, seek emergency care. Postpartum preeclampsia can develop even in people who had normal blood pressure throughout pregnancy.',
    },
  ],
  whenNormal: [
    'Mild swelling of feet and ankles at the end of the day, which is common in pregnancy',
    'Occasional mild headaches that respond to rest and hydration',
    'Blood pressure readings that remain normal at prenatal visits',
  ],
  whenToMention: [
    'You notice a significant increase in swelling, particularly in your face and hands',
    'You have a persistent headache that does not respond to acetaminophen, rest, or hydration',
    'You are gaining weight rapidly (more than 2 pounds in a week) from fluid retention',
    'You have any risk factors for preeclampsia and want to discuss prevention',
  ],
  whenToActNow: [
    'You have a severe headache with vision changes (blurring, spots, flashing lights)',
    'You have upper right abdominal pain or right shoulder pain, especially with nausea or vomiting',
    'You have a blood pressure reading of 160/110 or higher at home',
    'You have sudden severe swelling with difficulty breathing or chest tightness',
    'You experience decreased fetal movement along with any preeclampsia symptoms',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'signs-of-labor-starting',
    'postpartum-preeclampsia',
    'syphilis-screening-during-pregnancy',
  ],
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Preeclampsia and High Blood Pressure During Pregnancy. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/preeclampsia-and-high-blood-pressure-during-pregnancy',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Child Health and Human Development. Preeclampsia and Eclampsia. NICHD, 2024.',
      url: 'https://www.nichd.nih.gov/health/topics/preeclampsia',
    },
    {
      org: 'Preeclampsia Foundation',
      citation:
        'Preeclampsia Foundation. Signs and Symptoms. Preeclampsia.org, 2024.',
      url: 'https://www.preeclampsia.org/signs-and-symptoms',
    },
  ],
};
