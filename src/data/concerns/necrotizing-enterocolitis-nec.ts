import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'necrotizing-enterocolitis-nec',
  title: 'My Baby Was Diagnosed with NEC (Necrotizing Enterocolitis)',
  category: 'medical',
  searchTerms: [
    'necrotizing enterocolitis NEC',
    'NEC premature baby',
    'NEC surgery baby',
    'NEC NICU diagnosis',
    'premature baby intestine infection',
    'NEC cow milk formula',
    'NEC breast milk protection',
    'NEC ostomy baby',
    'necrotizing enterocolitis survival',
    'NEC short bowel syndrome',
  ],
  quickAnswer:
    'Necrotizing enterocolitis (NEC) is a serious intestinal disease that primarily affects premature babies. It occurs when bacteria invade the intestinal wall, causing inflammation, tissue death, and sometimes perforation. NEC is one of the most feared diagnoses in the NICU, and it is understandable to feel terrified. Treatment depends on severity — mild cases may be managed with bowel rest and antibiotics, while severe cases may require surgery. Breast milk significantly reduces NEC risk, and ongoing research continues to improve prevention and outcomes.',
  byAge: [
    {
      ageRange: 'NICU — acute phase',
      context:
        'NEC typically presents 2-6 weeks after birth in premature infants, often with feeding intolerance, abdominal distension, bloody stools, and signs of systemic illness. When NEC is suspected, feedings are stopped, a nasogastric tube is placed for decompression, and IV antibiotics are started. X-rays are taken frequently to monitor for intestinal perforation. Your NICU team may use the Bell staging system (stage I-III) to classify severity. This is a critical time, and your baby\'s condition can change rapidly.',
    },
    {
      ageRange: 'Recovery in NICU (post-NEC)',
      context:
        'After the acute phase, feedings are slowly reintroduced, typically starting with breast milk if available. If surgery was needed, your baby may have an ostomy (temporary opening for the intestine). Ostomy care can feel daunting, but your nurses will teach you before discharge. Some babies who lost significant intestine may develop short bowel syndrome, requiring specialized nutrition support. Recovery from NEC varies widely — some babies recover quickly, others need weeks to months.',
    },
    {
      ageRange: '0-6 months corrected age (post-discharge)',
      context:
        'After NEC, your baby may have ongoing feeding and growth challenges. Frequent weight checks and nutritional monitoring are important. If your baby had an ostomy, reanastomosis surgery (reconnecting the intestine) is typically done after several weeks to months. Babies who had NEC are at slightly higher risk for intestinal strictures (narrowing), which can cause feeding problems, vomiting, or bloody stools weeks to months after the initial illness.',
    },
    {
      ageRange: '6 months+ corrected age',
      context:
        'Most babies who recover from NEC without extensive bowel loss go on to feed and grow well. Those with short bowel syndrome may need ongoing nutritional support, including TPN (IV nutrition), specialized formulas, and monitoring for nutrient deficiencies. Developmental follow-up is important, as NEC (especially when it required surgery) is associated with a somewhat increased risk of neurodevelopmental delays.',
    },
  ],
  whenNormal: [
    'Your baby had mild NEC (Bell stage I) that resolved with bowel rest and antibiotics and is now feeding and growing well',
    'Your baby is recovering from NEC and gaining weight steadily, though perhaps more slowly than other preemies',
    'Your baby had an ostomy that has been reversed and is tolerating feeds',
  ],
  whenToMention: [
    'Your baby is having difficulty tolerating feeds after NEC recovery — vomiting, abdominal distension, or refusing to eat',
    'Your baby\'s stools contain blood or mucus after being discharged following NEC',
    'Your baby is not gaining weight as expected despite adequate intake',
    'You have concerns about your baby\'s development or growth trajectory',
  ],
  whenToActNow: [
    'Your baby has a distended abdomen with bilious (green) vomiting — this could indicate a stricture or obstruction and requires emergency evaluation',
    'Your baby has bloody stools with abdominal distension and appears ill — seek immediate medical care',
    'Your baby has a fever, is lethargic, or is refusing all feeds — these may indicate a serious complication',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'adjusted-age-milestones-preemie',
    'nicu-parent-trauma',
    'vulnerable-child-syndrome-post-nicu',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Necrotizing Enterocolitis. StatPearls, 2024.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK513357/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Necrotizing Enterocolitis and Human Milk Feeding. Pediatrics, 2021.',
      url: 'https://publications.aap.org/pediatrics/article/148/2/e2021051791/179918',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Necrotizing Enterocolitis.',
      url: 'https://www.marchofdimes.org/find-support/topics/birth/necrotizing-enterocolitis',
    },
  ],
};
