import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-stomach-gurgling-loud',
  title: 'Baby\'s Stomach Is Gurgling or Making Loud Noises',
  category: 'digestive',
  searchTerms: ['baby stomach gurgling', 'baby tummy noises', 'baby stomach growling', 'baby belly rumbling', 'toddler stomach gurgling', 'baby loud stomach sounds', 'baby borborygmi', 'baby stomach noises during feeding', 'baby stomach gurgles and gas', 'toddler tummy grumbling'],
  quickAnswer: 'Stomach gurgling and rumbling sounds (called borborygmi) are completely normal in babies and toddlers. These sounds are caused by the movement of gas, food, and fluids through the intestines. A baby\'s belly is small and the intestinal walls are thin, which makes these normal digestive sounds much more audible than in adults. Gurgling is especially common during and after feeding, when the baby is hungry, or when the digestive system is actively processing milk or food. It is almost never a sign of a problem.',
  byAge: [
    { ageRange: '0-12 months', context: 'Loud stomach sounds in babies are very common and usually normal. You may hear gurgling during feeding (as milk moves through the digestive system), between feeds (as the stomach empties), or during bowel movements. If your baby seems comfortable, is feeding well, and is gaining weight, the noises are simply normal digestion. Babies who are gassy may have louder stomach sounds along with squirming and passing gas, which is also usually normal as their digestive system matures.' },
    { ageRange: '1-3 years', context: 'Toddler stomachs gurgle for the same reasons as adults: hunger, digestion, and gas movement. You may notice louder stomach sounds when your toddler is hungry, after meals, or when trying new foods. Introducing high-fiber foods, beans, or dairy can temporarily increase stomach sounds and gas. If the gurgling is accompanied by normal appetite, regular bowel movements, and no pain, it is not a concern. Persistent loud gurgling with diarrhea, pain, or food refusal should be discussed with your doctor.' },
  ],
  whenNormal: ['Gurgling sounds during or after feeding', 'Stomach noises when your baby is hungry', 'Rumbling sounds before or during a bowel movement', 'Louder stomach sounds after introducing new foods'],
  whenToMention: ['Gurgling is accompanied by frequent diarrhea', 'Your baby seems uncomfortable or in pain along with the stomach sounds', 'Stomach sounds are associated with vomiting or poor feeding', 'You notice increased gurgling after specific foods (possible food sensitivity)'],
  whenToActNow: ['Loud stomach sounds with a distended (bloated, hard) abdomen', 'High-pitched, tinkling bowel sounds with vomiting and no bowel movements (possible obstruction)', 'Severe abdominal pain with gurgling and blood in stool'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['gassy-baby', 'baby-excessive-burping', 'baby-diarrhea', 'food-intolerance-baby'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Gas Pain in Babies. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Breaking-Up-Gas.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Borborygmi and Bowel Sounds.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Abdominal Pain in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/default.aspx' },
  ],
};
