import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-fatigue-extreme',
  title: 'Extreme Tiredness During Pregnancy',
  category: 'maternal',
  searchTerms: [
    'extreme fatigue pregnancy',
    'so tired pregnant',
    'exhausted pregnancy',
    'pregnancy tiredness',
    'fatigue first trimester',
    'can\'t stay awake pregnant',
    'pregnancy exhaustion',
    'no energy pregnant',
    'fatigue third trimester',
    'is extreme tiredness normal pregnancy',
  ],
  quickAnswer:
    'Extreme fatigue is one of the most common and earliest symptoms of pregnancy, affecting nearly all pregnant people at some point. It is caused by surging progesterone levels, increased blood production, metabolic changes, and the enormous energy demands of growing a baby. Fatigue is typically most intense in the first and third trimesters.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'First-trimester fatigue can be overwhelming. Rising progesterone acts as a natural sedative, and your body is working hard to establish the placenta and support rapid fetal development. Rest when you can, go to bed earlier, and accept help. The fatigue is real and valid - listen to your body.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'Many people experience a welcome boost in energy during the second trimester. Take advantage of this period if it happens for you. Continue eating well, staying hydrated, and exercising gently. If extreme fatigue persists without improvement, mention it to your provider to rule out anemia or thyroid issues.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Fatigue often returns in the third trimester due to the extra weight you are carrying, disrupted sleep, and the physical demands of late pregnancy. Take naps when possible, delegate tasks, and prioritize rest. Iron-deficiency anemia is common in the third trimester and can worsen fatigue - your provider may check your iron levels.',
    },
  ],
  whenNormal: [
    'Feeling much more tired than usual, especially in the first and third trimesters',
    'Needing to nap during the day or go to bed earlier than normal',
    'Fatigue that improves somewhat with rest and adequate nutrition',
    'Energy improvements in the second trimester',
  ],
  whenToMention: [
    'Fatigue is so severe that you cannot perform basic daily activities',
    'Extreme tiredness persists through the second trimester without any improvement',
    'Fatigue is accompanied by dizziness, shortness of breath, pale skin, or rapid heartbeat, which could suggest anemia',
  ],
  whenToActNow: [
    'Sudden onset of extreme weakness, difficulty breathing, or chest pain',
    'Fatigue accompanied by yellowing of the skin, dark urine, or severe swelling',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Pregnancy FAQs: Exercise During Pregnancy. ACOG, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/exercise-during-pregnancy',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Fatigue in Pregnancy. MedlinePlus, 2023.',
      url: 'https://medlineplus.gov/ency/patientinstructions/000602.htm',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Common Discomforts of Pregnancy. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/pregnancy/common-discomforts-of-pregnancy.aspx',
    },
  ],
  relatedConcernSlugs: ['pregnancy-anemia', 'pregnancy-thyroid-issues', 'pregnancy-insomnia'],
};
