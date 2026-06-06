import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-projectile-vomiting-early',
  title: 'Forceful (Projectile) Vomiting in Newborns',
  category: 'digestive',
  searchTerms: ['projectile vomiting baby', 'newborn forceful vomiting', 'baby vomiting shoots out', 'projectile vomit newborn', 'baby vomiting forcefully', 'pyloric stenosis vomiting', 'newborn projectile spit up', 'baby vomit across room', 'forceful vomiting after feeding', 'newborn projectile vomiting causes'],
  quickAnswer: 'Occasional forceful spit-up can happen in newborns. However, true projectile vomiting (stomach contents shooting forcefully, sometimes across the room) that worsens over days to weeks should be evaluated promptly. In babies 2-8 weeks old, progressive projectile vomiting is a classic sign of pyloric stenosis, a treatable condition requiring surgery.',
  byAge: [
    { ageRange: '0-1 month', context: 'It is important to distinguish between a large spit-up and true projectile vomiting. Occasional larger-than-usual spit-ups can occur when a baby overeats or has significant gas. True projectile vomiting is forceful and shoots out of the mouth with force, often landing a foot or more away. If this happens once and the baby is otherwise well, monitor closely. If it recurs or becomes a pattern, especially in a baby 2-6 weeks old, it could indicate pyloric stenosis, where the muscle between the stomach and small intestine thickens and blocks food passage. Pyloric stenosis develops gradually and typically presents around 3-5 weeks of age.' },
    { ageRange: '1-3 months', context: 'This is the classic age for pyloric stenosis presentation. A pattern of increasingly forceful vomiting after every feed in an otherwise hungry baby ("hungry vomiter") is the hallmark. The baby typically wants to eat again immediately after vomiting. Weight loss or poor gain may occur. An ultrasound confirms the diagnosis, and surgical treatment (pyloromyotomy) is curative. Green or bile-stained vomit at any age is concerning for bowel obstruction and needs emergency evaluation.' },
    { ageRange: '3-6 months', context: 'Pyloric stenosis rarely presents after 3 months. Forceful vomiting at this age could be related to GERD, food intolerance, or infection. Persistent projectile vomiting should be evaluated.' },
    { ageRange: '6-12 months', context: 'Occasional vomiting from illness, overeating, or gagging on new foods is common. Persistent or worsening projectile vomiting needs evaluation.' },
  ],
  whenNormal: ['Occasional larger-than-usual spit-up that does not recur', 'Baby is well, feeding normally, and gaining weight after an isolated episode', 'Forceful spit-up related to overfeeding that improves with smaller, more frequent feeds'],
  whenToMention: ['Vomiting that seems more forceful than typical spit-up', 'Vomiting that occurs after most or all feeds', 'Baby seems hungry again immediately after vomiting'],
  whenToActNow: ['Progressive projectile vomiting that worsens over days, especially in a baby 2-8 weeks old (classic pyloric stenosis)', 'Green or bile-stained vomit at any age (possible bowel obstruction)', 'Projectile vomiting with weight loss, dehydration, or lethargy'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Pyloric Stenosis. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Pyloric-Stenosis.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Pyloric Stenosis. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK534200/' },
  ],
  relatedConcernSlugs: ['pyloric-stenosis-signs', 'newborn-spit-up-vs-vomit', 'baby-vomiting-bile'],
};
