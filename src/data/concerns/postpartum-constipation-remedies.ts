import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postpartum-constipation-remedies',
  title: 'Postpartum Constipation: Causes and Remedies',
  category: 'maternal',
  searchTerms: [
    'postpartum constipation',
    'constipation after giving birth',
    'can\'t poop after delivery',
    'constipation after c section',
    'first bowel movement after birth',
    'postpartum stool softener',
    'scared to poop after birth',
    'constipation after epidural',
    'postpartum constipation remedies',
    'how long constipation after birth',
  ],
  quickAnswer:
    'Postpartum constipation is extremely common, affecting up to half of all new parents after delivery. It is caused by a combination of factors including hormonal shifts, dehydration, pain medications, iron supplements, reduced physical activity, and fear of pain from stitches or hemorrhoids. Most cases resolve within a few days with adequate hydration, fiber-rich foods, stool softeners, and gentle movement.',
  byAge: [
    {
      ageRange: '0-1 week postpartum',
      context:
        'The first bowel movement after delivery can feel daunting, especially if you had perineal tearing, an episiotomy, or a cesarean section. Many hospitals provide stool softeners like docusate sodium before discharge. Drink at least eight to ten glasses of water daily, eat fiber-rich foods when you can, and try to get up and walk short distances. Holding a clean pad or cloth against your perineum while bearing down can provide support and reduce anxiety. Most people have their first postpartum bowel movement within two to three days of delivery.',
    },
    {
      ageRange: '1-4 weeks postpartum',
      context:
        'If constipation persists beyond the first few days, evaluate your fluid and fiber intake, as breastfeeding increases your hydration needs. Opioid pain medications commonly prescribed after cesarean delivery or significant tearing are a major contributor to constipation. Ask your provider about switching to non-opioid pain relief if possible. Gentle walking, even short strolls around the house, helps stimulate bowel motility. Over-the-counter remedies like polyethylene glycol (Miralax) are generally safe while breastfeeding.',
    },
    {
      ageRange: '1-3 months postpartum',
      context:
        'By this point, most postpartum constipation has resolved. If you are still struggling, consider whether iron supplements (often taken for postpartum anemia) are contributing. Slow-release or plant-based iron formulations may cause less constipation. Regular physical activity, adequate water intake, and a diet rich in fruits, vegetables, and whole grains remain the foundation of prevention. If constipation is accompanied by hemorrhoids, treating both conditions simultaneously is important.',
    },
    {
      ageRange: '3+ months postpartum',
      context:
        'Persistent constipation beyond three months postpartum may indicate an underlying issue such as pelvic floor dysfunction, thyroid problems, or medication side effects. Pelvic floor physical therapy can be remarkably effective for constipation related to pelvic floor coordination issues. If you are straining excessively, experiencing rectal bleeding, or alternating between constipation and diarrhea, discuss these symptoms with your provider.',
    },
  ],
  whenNormal: [
    'You have not had a bowel movement for two to three days immediately after delivery',
    'Your first postpartum bowel movement is uncomfortable but not severely painful',
    'You experience mild constipation that responds to increased fluids, fiber, and stool softeners',
  ],
  whenToMention: [
    'Constipation persists for more than a week despite adequate hydration, fiber, and stool softeners',
    'You have significant pain with bowel movements or notice bright red blood on the toilet paper',
    'You are taking opioid pain medications and constipation is worsening',
    'Constipation is accompanied by bloating, nausea, or loss of appetite',
  ],
  whenToActNow: [
    'You have not had a bowel movement in more than a week and are experiencing severe abdominal pain, bloating, or vomiting',
    'You notice large amounts of rectal bleeding or dark, tarry stools',
    'You have severe abdominal pain with fever, which could indicate a bowel obstruction or infection',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'postpartum-hemorrhoid-treatment',
    'postpartum-episiotomy-healing-tips',
    'postpartum-nutrition-breastfeeding-diet',
  ],
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Your Body After Baby: The First 6 Weeks. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/your-body-after-baby',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Constipation. NIDDK, 2023.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/constipation',
    },
    {
      org: 'NHS',
      citation:
        'National Health Service. Keeping Fit and Healthy with a Baby. NHS, 2024.',
      url: 'https://www.nhs.uk/conditions/baby/support-and-services/keeping-fit-and-healthy/',
    },
  ],
};
