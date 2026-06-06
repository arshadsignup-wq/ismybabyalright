import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-rib-pain',
  title: 'Rib Pain From Baby Kicking',
  category: 'maternal',
  searchTerms: [
    'rib pain pregnancy',
    'baby kicking ribs',
    'sore ribs pregnant',
    'pain under ribs pregnancy',
    'rib flaring pregnancy',
    'bruised ribs baby kicks',
    'upper belly pain pregnancy ribs',
    'costochondritis pregnancy',
    'rib cage expanding pregnancy',
    'sharp pain ribs pregnant',
  ],
  quickAnswer:
    'Rib pain during pregnancy is common in the third trimester and is caused by the expanding uterus pushing against the rib cage, hormonal loosening of rib joints, and the baby kicking or pressing against the ribs. While uncomfortable, it is usually harmless and resolves after the baby drops lower or after delivery.',
  byAge: [
    {
      ageRange: 'Second trimester',
      context:
        'Rib discomfort may begin in the late second trimester as the uterus grows upward. The rib cage expands to accommodate the growing uterus, which can cause aching. Gentle stretching, good posture, and avoiding slouching can help reduce discomfort.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Rib pain is most common in the third trimester, especially when the baby is in a breech or oblique position with feet near the ribs. Strong kicks and pushes can cause sharp pain. Stretching with arms above your head, sitting up straight, wearing loose clothing, and using ice packs can help. Gently encouraging the baby to shift position by changing your own position may also provide relief.',
    },
    {
      ageRange: 'Labor & delivery',
      context:
        'Rib pain often improves when the baby drops into the pelvis (engagement/lightening) in the weeks before labor. After delivery, rib pain resolves relatively quickly as the rib cage returns to its normal position over several weeks.',
    },
  ],
  whenNormal: [
    'Aching or soreness along the lower ribs that worsens when sitting or bending',
    'Sharp momentary pain when the baby kicks the ribs',
    'Rib discomfort that improves when the baby changes position',
    'Gradual onset as the belly grew larger',
  ],
  whenToMention: [
    'Rib pain is constant and not related to baby movement',
    'Pain is concentrated on the right side under the ribs and is not clearly from kicks',
    'Rib pain is making it difficult to breathe comfortably',
  ],
  whenToActNow: [
    'Severe right upper quadrant pain under the ribs that is persistent and not from baby kicks - this could indicate HELLP syndrome, gallstones, or liver issues',
    'Rib pain accompanied by shortness of breath, fever, or coughing up blood',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Pregnancy FAQs. ACOG, 2022.',
      url: 'https://www.acog.org/womens-health/faqs',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Musculoskeletal Changes in Pregnancy. StatPearls, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK539776/',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Common Discomforts of Pregnancy. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/pregnancy/common-discomforts-of-pregnancy.aspx',
    },
  ],
  relatedConcernSlugs: ['pregnancy-back-pain', 'hellp-syndrome-signs', 'pregnancy-gallstones'],
};
