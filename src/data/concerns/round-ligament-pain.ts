import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'round-ligament-pain',
  title: 'Round Ligament Pain in Pregnancy',
  category: 'maternal',
  searchTerms: [
    'round ligament pain',
    'sharp pain lower belly pregnant',
    'stabbing pain sides pregnancy',
    'pain when standing up pregnant',
    'groin pain pregnancy',
    'sharp pain when sneezing pregnant',
    'ligament pain pregnancy',
    'lower abdominal pain pregnant',
    'pain in sides of belly pregnant',
    'round ligament stretching',
  ],
  quickAnswer:
    'Round ligament pain is a sharp or jabbing sensation in the lower belly or groin area caused by the stretching of the ligaments that support the uterus. It is one of the most common discomforts of pregnancy, especially during the second trimester, and is not harmful to you or your baby.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Round ligament pain is uncommon in the first trimester since the uterus is still small. Any sharp lower abdominal pain in early pregnancy should be mentioned to your provider to rule out ectopic pregnancy or other concerns.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'This is the peak time for round ligament pain. As your uterus grows rapidly, the round ligaments stretch and thicken, which can cause brief, sharp pains on one or both sides of your lower belly or groin. Pain is often triggered by sudden movements like standing up quickly, coughing, sneezing, laughing, or rolling over in bed. The pain typically lasts only seconds to a few minutes.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Round ligament pain may continue or return in the third trimester as the uterus reaches its largest size. Supporting your belly when changing positions and moving slowly can help. If pain becomes persistent, is accompanied by contractions, or is severe, contact your provider to rule out other causes such as preterm labor.',
    },
  ],
  whenNormal: [
    'Brief, sharp pain on one or both sides of the lower belly that lasts seconds to minutes',
    'Pain is triggered by sudden movement, coughing, sneezing, or changing positions',
    'Pain resolves quickly with rest or position change',
    'No bleeding, fever, or other symptoms accompany the pain',
  ],
  whenToMention: [
    'Pain is persistent and does not resolve with rest or position changes',
    'You experience frequent episodes that affect your daily activities',
    'You are unsure whether the pain is round ligament pain or something else',
  ],
  whenToActNow: [
    'Severe abdominal pain that does not go away, especially if accompanied by bleeding, fever, chills, or pain with urination',
    'Pain is accompanied by regular tightening or contractions, especially before 37 weeks',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Pregnancy FAQs: Problems of the Digestive System. ACOG, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/problems-of-the-digestive-system',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Round Ligament Pain. StatPearls, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK459218/',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Common Discomforts of Pregnancy. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/pregnancy/common-discomforts-of-pregnancy.aspx',
    },
  ],
  relatedConcernSlugs: ['lightning-crotch-pregnancy', 'pregnancy-pelvic-pressure'],
};
