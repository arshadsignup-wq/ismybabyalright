import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'precipitous-labor',
  title: 'Very Fast Labor (Precipitous Labor)',
  category: 'maternal',
  searchTerms: ['precipitous labor', 'fast labor', 'quick delivery', 'labor too fast', 'born in car', 'rapid labor', 'gave birth before hospital', 'labor less than 3 hours', 'fast birth emotional', 'unassisted birth unplanned'],
  quickAnswer: 'Precipitous labor is defined as labor lasting less than 3 hours from the onset of regular contractions to delivery. It occurs in about 2-3% of births. While a fast labor may sound ideal, it can be physically and emotionally overwhelming due to intense, closely spaced contractions and limited time for pain management.',
  byAge: [
    { ageRange: 'Third trimester', context: 'Risk factors for precipitous labor include having had a previous fast labor, multiparity (not your first birth), and certain conditions that cause rapid cervical dilation. If you have a history of fast labor, discuss a plan with your provider, including when to head to the hospital, and learn basic emergency delivery steps just in case.' },
    { ageRange: 'Labor & delivery', context: 'Precipitous labor can feel like being hit by a freight train - contractions may start strong and close together without the gradual buildup. There may not be time for an epidural or even to get to the hospital. If you are delivering before reaching the hospital, call 911, stay calm, and let the baby come gently. Do not pull the baby. Place the baby skin-to-skin and keep both of you warm until help arrives.' },
    { ageRange: 'Postpartum', context: 'After a precipitous labor, you may feel shocked, shaky, or even traumatized by how fast everything happened. Some people feel they missed their birth experience. Physically, rapid labor can cause more tearing and heavier postpartum bleeding. Processing the experience and seeking support if needed is important.' },
  ],
  whenNormal: ['Feeling overwhelmed or in shock after a very fast labor', 'Needing time to process what happened', 'Feeling grateful but also shaken'],
  whenToMention: ['You had a previous precipitous labor and want to plan for this pregnancy', 'You are emotionally struggling after a very fast birth', 'You want to debrief the experience with your provider'],
  whenToActNow: ['You are having a baby before reaching the hospital - call 911 immediately', 'Heavy postpartum bleeding (soaking more than one pad per hour)', 'Signs of infection or significant tearing after a rapid delivery'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. How to Tell When Labor Begins. ACOG FAQ, 2022.', url: 'https://www.acog.org/womens-health/faqs/how-to-tell-when-labor-begins' },
    { org: 'NIH', citation: 'National Library of Medicine. Precipitous Labor. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK557878/' },
    { org: 'March of Dimes', citation: 'March of Dimes. Stages of Labor. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/stages-of-labor.aspx' },
  ],
  relatedConcernSlugs: ['birth-trauma-emotional', 'birth-plan-flexibility'],
};
