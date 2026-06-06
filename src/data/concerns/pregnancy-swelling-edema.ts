import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-swelling-edema',
  title: 'Swelling in Feet, Ankles, and Hands During Pregnancy',
  category: 'maternal',
  searchTerms: [
    'swelling pregnancy',
    'swollen feet pregnant',
    'swollen ankles pregnancy',
    'edema pregnancy',
    'swollen hands pregnant',
    'puffy face pregnancy',
    'feet won\'t fit in shoes pregnant',
    'swelling third trimester',
    'fluid retention pregnancy',
    'when is swelling dangerous pregnancy',
  ],
  quickAnswer:
    'Mild to moderate swelling (edema) in the feet, ankles, and hands is very common in pregnancy, affecting about 80% of pregnant people. It is caused by increased blood volume and fluid retention, and it is usually harmless. However, sudden or severe swelling, especially in the face and hands, can be a warning sign of preeclampsia.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Mild swelling is uncommon in the first trimester. Your body is beginning to increase blood volume, but visible edema usually does not develop this early. If you notice significant swelling in the first trimester, mention it to your provider.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'Swelling typically begins in the second trimester as blood volume increases. Your feet and ankles may swell, especially later in the day or in warm weather. Elevating your feet, staying hydrated, reducing sodium intake, and wearing comfortable shoes can help. Rings may start to feel tight on your fingers.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Swelling is most pronounced in the third trimester when blood volume peaks at about 50% above normal. The growing uterus puts pressure on pelvic veins, slowing blood return from the legs. Elevate your legs when possible, sleep on your left side, wear compression stockings, and stay active with gentle walking. Swelling that worsens gradually throughout the day and improves with rest is typically normal.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'Swelling may temporarily worsen in the first few days after delivery as your body sheds excess fluid, especially if you received IV fluids during labor. Postpartum swelling usually resolves within 1-2 weeks. Continue to stay hydrated and elevate your legs when resting.',
    },
  ],
  whenNormal: [
    'Gradual, mild to moderate swelling in feet and ankles that worsens throughout the day',
    'Swelling improves with rest, elevation, and overnight sleep',
    'Both feet and ankles are equally affected',
    'Swelling is worse in warm weather or after prolonged standing',
  ],
  whenToMention: [
    'Swelling does not improve with rest and elevation',
    'Your hands are noticeably swollen and you cannot remove your rings',
    'Swelling seems to be increasing more rapidly than expected',
  ],
  whenToActNow: [
    'Sudden severe swelling of your face and hands, which can be a sign of preeclampsia',
    'Swelling in only one leg with pain, warmth, or redness, which could indicate a blood clot',
    'Severe swelling accompanied by headache, vision changes, or upper abdominal pain',
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
      org: 'NIH',
      citation:
        'National Library of Medicine. Edema in Pregnancy. MedlinePlus, 2023.',
      url: 'https://medlineplus.gov/ency/article/003104.htm',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Common Discomforts of Pregnancy. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/pregnancy/common-discomforts-of-pregnancy.aspx',
    },
  ],
  relatedConcernSlugs: ['preeclampsia-warning-signs', 'pregnancy-blood-clot-risk', 'pregnancy-carpal-tunnel'],
};
