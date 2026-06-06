import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-carpal-tunnel',
  title: 'Carpal Tunnel Syndrome During Pregnancy',
  category: 'maternal',
  searchTerms: [
    'carpal tunnel pregnancy',
    'hand numbness pregnant',
    'tingling hands pregnancy',
    'wrist pain pregnant',
    'numb fingers pregnancy',
    'hand pain during pregnancy',
    'dropping things pregnant',
    'swollen hands numb fingers pregnant',
    'pregnancy carpal tunnel syndrome',
    'wrist splint pregnancy',
  ],
  quickAnswer:
    'Carpal tunnel syndrome during pregnancy is caused by fluid retention that compresses the median nerve in the wrist, leading to numbness, tingling, and pain in the hands and fingers. It affects up to 60% of pregnant people, is most common in the third trimester, and usually resolves after delivery.',
  byAge: [
    {
      ageRange: 'Second trimester',
      context:
        'Carpal tunnel symptoms may begin in the second trimester as fluid retention increases. You may notice tingling, numbness, or aching in the thumb, index, middle, and ring fingers, often worse at night. Wearing a wrist splint at night and elevating your hands can help relieve symptoms.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Symptoms typically peak in the third trimester when fluid retention is greatest. You may have difficulty gripping objects or experience weakness in your hands. Icing, gentle wrist stretches, and ergonomic adjustments can help. Avoid repetitive hand motions when possible. Talk to your provider if symptoms significantly affect your function.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'Carpal tunnel from pregnancy usually resolves within weeks to months after delivery as excess fluid is released. Breastfeeding positions that put strain on the wrists can temporarily prolong symptoms. If symptoms persist beyond 3 months postpartum, talk to your provider about additional treatment options.',
    },
  ],
  whenNormal: [
    'Tingling or numbness in the thumb, index, and middle fingers that is worse at night',
    'Symptoms began or worsened during pregnancy',
    'Both hands may be affected, though one is often worse than the other',
    'Symptoms improve with wrist splinting or changes in hand position',
  ],
  whenToMention: [
    'Numbness or tingling is persistent rather than intermittent',
    'You are dropping things frequently or have significant hand weakness',
    'Symptoms are interfering with sleep or daily activities',
  ],
  whenToActNow: [
    'Complete loss of feeling in your fingers or hand that does not resolve with position changes',
    'Sudden severe swelling of hands and face with headache, which could indicate preeclampsia rather than carpal tunnel',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Skin Conditions During Pregnancy. ACOG, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/skin-conditions-during-pregnancy',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Carpal Tunnel Syndrome in Pregnancy. StatPearls, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK537307/',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Common Discomforts of Pregnancy. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/pregnancy/common-discomforts-of-pregnancy.aspx',
    },
  ],
  relatedConcernSlugs: ['pregnancy-swelling-edema', 'preeclampsia-warning-signs'],
};
