import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'hellp-syndrome-signs',
  title: 'HELLP Syndrome',
  category: 'medical',
  searchTerms: [
    'HELLP syndrome',
    'HELLP syndrome symptoms',
    'HELLP syndrome pregnancy',
    'liver problems pregnancy',
    'low platelets pregnancy',
    'hemolysis elevated liver enzymes low platelets',
    'upper abdominal pain pregnancy',
    'HELLP vs preeclampsia',
    'HELLP syndrome risk',
  ],
  quickAnswer:
    'HELLP syndrome is a serious pregnancy complication involving Hemolysis (breakdown of red blood cells), Elevated Liver enzymes, and Low Platelet count. It affects about 1-2 in 1,000 pregnancies and is often related to preeclampsia. HELLP is a medical emergency that typically requires prompt delivery. With early recognition and immediate medical care, most mothers and babies have good outcomes.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'HELLP syndrome does not develop in the first trimester. However, women with a history of HELLP in a prior pregnancy, chronic hypertension, or autoimmune conditions are at higher risk and should discuss this with their provider early. Low-dose aspirin may be recommended starting at 12-16 weeks to reduce the risk of preeclampsia-related conditions including HELLP.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'HELLP syndrome can rarely develop as early as the mid-second trimester, though this is uncommon. The most common symptoms are upper right abdominal pain or epigastric pain (below the breastbone), nausea, vomiting, malaise, and headache. These symptoms can mimic heartburn, flu, or gallbladder disease, so blood work is essential for diagnosis.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Most cases of HELLP develop in the third trimester, particularly between 28-36 weeks. It can develop rapidly. Key symptoms include severe upper abdominal pain (especially right-sided), nausea and vomiting, headache, visual disturbances, and general malaise. Blood pressure may or may not be elevated. Diagnosis requires blood tests showing hemolysis, elevated liver enzymes (AST/ALT), and low platelets.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'About 30% of HELLP cases develop within 48 hours after delivery. Postpartum HELLP presents with the same symptoms and requires the same urgent evaluation. Recovery typically takes days to weeks after delivery, with close monitoring of blood counts and liver function. Most women recover fully, though there is a small recurrence risk in future pregnancies.',
    },
  ],
  whenNormal: [
    'Mild nausea or heartburn-like symptoms in pregnancy without elevated blood pressure or other warning signs',
    'Routine blood work shows normal liver enzymes and platelet counts',
    'Upper abdominal discomfort that is clearly related to eating or positioning and resolves with antacids',
    'You have preeclampsia risk factors but your labs remain normal at prenatal visits',
  ],
  whenToMention: [
    'You have persistent upper abdominal pain, especially right-sided, that does not resolve with typical remedies',
    'You feel generally unwell with flu-like symptoms, fatigue, nausea, or vomiting in the second or third trimester',
    'You had HELLP syndrome in a previous pregnancy and want to discuss monitoring',
  ],
  whenToActNow: [
    'You have severe upper right abdominal or epigastric pain with nausea, vomiting, headache, or visual changes - go to the emergency room immediately',
    'You experience signs of internal bleeding such as easy bruising, nosebleeds, bleeding gums, or dark tarry stools along with abdominal pain and feeling unwell',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. HELLP Syndrome. ACOG Clinical, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/preeclampsia-and-high-blood-pressure-during-pregnancy',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. HELLP Syndrome. MedlinePlus, 2023.',
      url: 'https://medlineplus.gov/ency/article/000890.htm',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. HELLP syndrome. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/complications/hellp-syndrome.aspx',
    },
  ],
};
