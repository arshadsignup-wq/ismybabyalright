import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-hemorrhoids',
  title: 'Hemorrhoids During Pregnancy',
  category: 'maternal',
  searchTerms: [
    'hemorrhoids pregnancy',
    'piles pregnant',
    'rectal pain pregnancy',
    'bleeding when wiping pregnant',
    'itchy bottom pregnant',
    'hemorrhoid treatment pregnancy',
    'swollen veins rectum pregnant',
    'hemorrhoids postpartum',
    'hemorrhoids after birth',
    'hemorrhoids pushing birth',
  ],
  quickAnswer:
    'Hemorrhoids are swollen blood vessels in the rectal area that affect up to 35% of pregnant people. They are caused by increased blood volume, pressure from the growing uterus, constipation, and straining. While uncomfortable, they are very common and usually treatable with conservative measures.',
  byAge: [
    {
      ageRange: 'Second trimester',
      context:
        'Hemorrhoids may develop as blood volume increases and the uterus begins to put pressure on pelvic veins. Preventing constipation is the best way to prevent hemorrhoids. Eat plenty of fiber, drink adequate water, and avoid sitting for prolonged periods. Witch hazel pads and warm sitz baths can soothe symptoms.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Hemorrhoids are most common and often worst in the third trimester due to maximum pressure from the growing uterus. Kegel exercises can improve blood flow to the rectal area. Use a step stool to elevate your feet while on the toilet to reduce straining. Your provider can recommend safe topical treatments.',
    },
    {
      ageRange: 'Labor & delivery',
      context:
        'Pushing during vaginal delivery can worsen existing hemorrhoids or cause new ones. This is very common and expected. Ice packs, witch hazel pads, and sitz baths in the days after delivery can help. Let your care team know about hemorrhoid discomfort so they can help manage it.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'Hemorrhoids that developed during pregnancy or delivery usually improve significantly within weeks to months after birth. Continue with stool softeners, fiber, and sitz baths. Most pregnancy-related hemorrhoids resolve without surgical treatment. If they persist or are very painful, talk to your provider about additional treatment options.',
    },
  ],
  whenNormal: [
    'Mild itching, discomfort, or swelling around the anus',
    'Small amount of bright red blood on toilet paper when wiping',
    'Symptoms improve with sitz baths, witch hazel, and fiber intake',
    'Hemorrhoids developed during pregnancy and are manageable',
  ],
  whenToMention: [
    'Hemorrhoids are very painful, large, or prolapsing (protruding from the anus)',
    'You are having recurrent bleeding with bowel movements',
    'Over-the-counter treatments are not providing adequate relief',
  ],
  whenToActNow: [
    'Heavy rectal bleeding that soaks pads or does not stop',
    'A hard, extremely painful lump at the anus that is blue or purple, suggesting a thrombosed hemorrhoid that may need medical treatment',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Problems of the Digestive System. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/problems-of-the-digestive-system',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Hemorrhoids. StatPearls, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK500009/',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Common Discomforts of Pregnancy. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/pregnancy/common-discomforts-of-pregnancy.aspx',
    },
  ],
  relatedConcernSlugs: ['pregnancy-constipation', 'pregnancy-varicose-veins'],
};
