import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-excessive-burping',
  title: 'Baby Burping Too Much or Excessive Gas',
  category: 'digestive',
  searchTerms: ['baby burping a lot', 'baby excessive burping', 'toddler burping too much', 'baby burps constantly', 'baby belching', 'baby won\'t stop burping', 'toddler excessive burping', 'baby gassy and burping', 'baby burping after feeding', 'baby aerophagia'],
  quickAnswer: 'Frequent burping in babies is very common and usually normal. Babies swallow air during feeding, crying, and pacifier use, and this air needs to come back up as burps. Breastfed babies tend to swallow less air than bottle-fed babies. Excessive burping is usually caused by swallowing too much air (aerophagia), feeding too fast, an improper bottle nipple flow, or minor digestive immaturity. It is rarely a sign of a medical problem. Ensuring proper latch, paced feeding, and appropriate bottle nipple size can help reduce excessive air swallowing.',
  byAge: [
    { ageRange: '0-12 months', context: 'Burping is a normal and necessary part of infant feeding. Babies should be burped during and after each feed to release swallowed air. Excessive burping or gas is often caused by: a shallow latch (breastfeeding), a bottle nipple with too fast a flow, feeding in a too-flat position, or crying before feeds (which causes air swallowing). If your baby seems uncomfortable with gas, try more frequent burping during feeds, keeping baby upright for 20-30 minutes after feeds, and gentle bicycle leg movements to help pass gas.' },
    { ageRange: '1-3 years', context: 'Toddlers may burp frequently if they eat too fast, drink through straws, consume carbonated beverages, chew gum, or talk while eating. Some toddlers learn to force burps as a game, which is a normal behavioral phase. Excessive burping combined with stomach pain, vomiting, or refusing to eat could suggest gastroesophageal reflux (GER) and should be discussed with your pediatrician. Otherwise, frequent burping in an otherwise happy, growing toddler is not concerning.' },
  ],
  whenNormal: ['Regular burping during and after feeds in a young baby', 'Gas and fussiness that resolves after burping', 'Occasional loud burps in a toddler, especially after eating quickly', 'A toddler who has learned to burp intentionally (behavioral phase)'],
  whenToMention: ['Excessive burping is accompanied by spitting up, discomfort, or arching', 'Your baby seems to be in pain from gas and is very difficult to burp', 'Burping is frequent and associated with feeding refusal or poor weight gain', 'You want to discuss feeding technique to reduce air swallowing'],
  whenToActNow: ['Excessive burping with projectile vomiting in a young baby (possible pyloric stenosis)', 'Burping with abdominal distension, vomiting, and no bowel movements (possible obstruction)', 'Your baby is refusing all feeds and appears unwell'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['gassy-baby', 'reflux', 'spitting-up', 'colic'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Breaking Up Gas. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Breaking-Up-Gas.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Burping Your Baby. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Burping-Hiccups-and-Spitting-Up.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Infant Gas and Colic.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
