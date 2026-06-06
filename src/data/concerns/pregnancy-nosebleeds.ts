import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-nosebleeds',
  title: 'Frequent Nosebleeds During Pregnancy',
  category: 'maternal',
  searchTerms: [
    'nosebleeds pregnancy',
    'bloody nose pregnant',
    'nose bleeding during pregnancy',
    'epistaxis pregnancy',
    'nosebleed won\'t stop pregnant',
    'frequent nosebleeds pregnant',
    'dry nose pregnancy',
    'nasal congestion pregnancy',
    'nose bleeds second trimester',
    'nose bleeds third trimester',
  ],
  quickAnswer:
    'Nosebleeds are common during pregnancy, affecting about 20% of pregnant people compared to 6% of non-pregnant people. They are caused by increased blood volume expanding the tiny blood vessels in the nose and hormonal changes that can cause nasal congestion and dryness.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Nosebleeds may begin in the first trimester as blood volume starts to increase. Using a humidifier, applying saline nasal spray, and keeping the nasal passages moist with petroleum jelly can help prevent them. Blow your nose gently and avoid picking.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'Nosebleeds may become more frequent as blood volume continues to rise. Most pregnancy nosebleeds are minor and stop within 10-15 minutes with gentle pressure. Pinch the soft part of your nose below the bridge and lean forward (not back) while applying pressure for 10-15 minutes.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Nosebleeds are most common in the third trimester when blood volume peaks. Continue preventive measures. If nosebleeds are very frequent or heavy, let your provider know. Rarely, frequent or severe nosebleeds can be associated with blood pressure changes or clotting issues that should be evaluated.',
    },
  ],
  whenNormal: [
    'Occasional nosebleeds that stop within 10-15 minutes with gentle pressure',
    'Nosebleeds occur more often than before pregnancy but are not severe',
    'Associated with nasal congestion or dry air',
    'No other unusual bleeding symptoms',
  ],
  whenToMention: [
    'Nosebleeds are happening several times a week',
    'Bleeding takes longer than 15-20 minutes to stop with proper pressure',
    'You are also noticing easy bruising or bleeding gums',
  ],
  whenToActNow: [
    'A nosebleed that does not stop after 20 minutes of continuous pressure',
    'Very heavy nosebleed with blood running down the back of your throat',
    'Nosebleed accompanied by severe headache, vision changes, or very high blood pressure',
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
        'National Library of Medicine. Epistaxis in Pregnancy. MedlinePlus, 2023.',
      url: 'https://medlineplus.gov/ency/article/003106.htm',
    },
    {
      org: 'NICE',
      citation:
        'National Institute for Health and Care Excellence. Epistaxis (Nosebleeds). NICE CKS, 2023.',
      url: 'https://cks.nice.org.uk/topics/epistaxis-nosebleeds/',
    },
  ],
  relatedConcernSlugs: ['pregnancy-bleeding-gums', 'preeclampsia-warning-signs'],
};
