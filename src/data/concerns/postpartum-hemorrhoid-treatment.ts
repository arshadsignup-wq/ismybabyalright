import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postpartum-hemorrhoid-treatment',
  title: 'Postpartum Hemorrhoids: Treatment and Relief',
  category: 'maternal',
  searchTerms: [
    'postpartum hemorrhoids',
    'hemorrhoids after birth',
    'hemorrhoids after delivery treatment',
    'postpartum hemorrhoid relief',
    'hemorrhoids after pushing',
    'hemorrhoids breastfeeding safe treatment',
    'thrombosed hemorrhoid postpartum',
    'hemorrhoids won\'t go away after birth',
    'hemorrhoid cream safe breastfeeding',
    'how long do postpartum hemorrhoids last',
  ],
  quickAnswer:
    'Postpartum hemorrhoids are very common, affecting up to 40% of people after vaginal delivery due to the intense pressure of pushing. They can also develop during pregnancy due to increased blood volume and pressure from the growing uterus. Most postpartum hemorrhoids resolve on their own within a few weeks with conservative treatment including sitz baths, witch hazel pads, topical treatments, stool softeners, and adequate hydration.',
  byAge: [
    {
      ageRange: '0-2 weeks postpartum',
      context:
        'Hemorrhoids are often at their worst immediately after delivery. Sitz baths (sitting in a few inches of warm water for 10-15 minutes) several times daily provide significant relief. Apply chilled witch hazel pads or medicated hemorrhoid wipes to the area. Over-the-counter hydrocortisone cream or hemorrhoid cream can reduce swelling and itching. Ice packs wrapped in a cloth applied for 10-minute intervals can also help. Take stool softeners to avoid straining, and stay well hydrated.',
    },
    {
      ageRange: '2-6 weeks postpartum',
      context:
        'Most hemorrhoids begin to shrink during this period with continued conservative care. Keep up sitz baths, maintain soft stools through hydration and fiber, and avoid sitting for prolonged periods. Gentle walking can help improve circulation and promote healing. If hemorrhoids are thrombosed (containing a blood clot), they are typically most painful for the first 72 hours and then gradually improve. Avoid straining during bowel movements and do not delay the urge to go.',
    },
    {
      ageRange: '6-12 weeks postpartum',
      context:
        'By six to twelve weeks, many postpartum hemorrhoids have resolved or significantly improved. If they persist, mention this at your postpartum checkup. Your provider may recommend prescription-strength treatments or refer you to a specialist. Persistent hemorrhoids can sometimes be a sign of ongoing constipation or pelvic floor dysfunction that should be addressed. Continuing high-fiber intake and adequate hydration helps prevent recurrence.',
    },
    {
      ageRange: '3+ months postpartum',
      context:
        'Hemorrhoids that persist beyond three months may require further treatment. Options include rubber band ligation, sclerotherapy, or in rare cases, surgical removal. Do not suffer in silence - effective treatments exist. Chronic hemorrhoids can sometimes cause complications like anemia from ongoing bleeding or skin tags. Maintaining good bowel habits, regular exercise, and adequate hydration are the best long-term prevention strategies.',
    },
  ],
  whenNormal: [
    'Hemorrhoids develop during pregnancy or immediately after vaginal delivery',
    'Mild to moderate discomfort that improves with sitz baths and topical treatments',
    'Small amounts of bright red blood on toilet paper after bowel movements',
  ],
  whenToMention: [
    'Hemorrhoids are severely painful and not responding to home treatment after two weeks',
    'You notice persistent bleeding with bowel movements beyond the first few weeks',
    'A hemorrhoid becomes extremely swollen, hard, and blue-purple, suggesting thrombosis',
    'Hemorrhoids are interfering with your ability to sit, walk, or care for your baby',
  ],
  whenToActNow: [
    'You have heavy rectal bleeding that fills the toilet bowl or does not stop with pressure',
    'You develop a fever along with severe rectal pain, which could indicate an abscess or infection',
    'You experience dizziness or lightheadedness from blood loss',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'postpartum-constipation-remedies',
    'postpartum-episiotomy-healing-tips',
    'postpartum-nutrition-breastfeeding-diet',
  ],
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Problems of the Digestive System. ACOG FAQ, 2021.',
      url: 'https://www.acog.org/womens-health/faqs/problems-of-the-digestive-system',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Hemorrhoids. NIDDK, 2023.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/hemorrhoids',
    },
    {
      org: 'NHS',
      citation:
        'National Health Service. Piles (Haemorrhoids). NHS, 2024.',
      url: 'https://www.nhs.uk/conditions/piles-haemorrhoids/',
    },
  ],
};
