import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-vomiting-no-fever',
  title: 'Baby Vomiting Without Fever',
  category: 'digestive',
  searchTerms: ['baby vomiting no fever','baby throwing up but no fever','baby vomiting but acting normal','infant vomiting without fever','baby keeps throwing up no temperature','toddler vomiting no other symptoms','baby projectile vomiting no fever','baby vomiting after feeding no fever','why is my baby vomiting no fever','non infectious vomiting baby','baby throwing up every feed'],
  quickAnswer: 'Vomiting without fever in babies has many possible causes, and most are not serious. Common reasons include overfeeding, reflux, food intolerance, motion sickness, or a sensitive gag reflex. However, certain patterns - forceful projectile vomiting in a young infant, bile-stained (green) vomit, or vomiting that prevents any fluid intake - can signal conditions that need prompt medical attention.',
  byAge: [
    { ageRange: '0-3 months', context: 'Spitting up is very common in young infants and is different from true vomiting. Spit-up flows out gently while vomiting is forceful. If your newborn is vomiting (not just spitting up) without fever, reflux is the most common cause. However, forceful projectile vomiting in a baby 2-8 weeks old - where vomit shoots several inches - can be a sign of pyloric stenosis, where the muscle at the stomach\'s exit thickens and blocks food. Pyloric stenosis requires urgent evaluation. Green or bile-stained vomit at any age needs immediate attention.' },
    { ageRange: '3-6 months', context: 'Reflux-related vomiting typically peaks around 4 months and gradually improves. If your baby vomits occasionally after feeds but is gaining weight and generally happy, this is likely normal reflux. Formula-fed babies may vomit more with certain formulas. If vomiting increases in frequency or force, or your baby is losing weight, discuss the possibility of significant reflux or formula intolerance with your pediatrician.' },
    { ageRange: '6-12 months', context: 'As babies start solids, new vomiting triggers emerge. Some babies vomit in response to specific foods due to FPIES (food protein-induced enterocolitis syndrome), which causes delayed vomiting 2-4 hours after eating a trigger food. Common triggers include milk, soy, rice, and oats. Some babies have a strong gag reflex with new textures that triggers vomiting during meals - this usually improves with time.' },
    { ageRange: '12-36 months', context: 'Toddlers may vomit without fever from motion sickness, eating too quickly, food intolerances, intense crying, or constipation. Acid reflux can persist into toddlerhood. If vomiting is a single episode followed by normal behavior, it is usually nothing to worry about. Repeated vomiting without obvious cause, progressive worsening, or vomiting with lethargy or headache should be evaluated.' },
  ],
  whenNormal: ['An occasional vomiting episode after which your baby acts completely normal','Vomiting triggered by an obvious cause like car sickness, intense crying, or gagging on new food','Spit-up or mild reflux in a baby under 6 months who is gaining weight normally','A single episode that does not recur'],
  whenToMention: ['Your baby vomits after most feeds and is not gaining weight well','Vomiting seems linked to specific foods suggesting intolerance or allergy','Your baby frequently vomits hours after eating, which could indicate FPIES','Recurring vomiting episodes without clear triggers'],
  whenToActNow: ['Forceful projectile vomiting in a baby 2-8 weeks old after every feed, possibly indicating pyloric stenosis','Vomit that is green or bile-stained, which may indicate bowel obstruction','Your baby cannot keep any fluids down for 8+ hours and shows signs of dehydration'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['spit-up-vs-vomit','reflux','pyloric-stenosis','formula-intolerance-signs'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Vomiting. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Treating-Vomiting.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Pyloric Stenosis. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Pyloric-Stenosis-and-Pylorospasm.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Gastroesophageal Reflux in Infants. MedlinePlus.', url: 'https://medlineplus.gov/ency/article/001134.htm' },
  ],
};
