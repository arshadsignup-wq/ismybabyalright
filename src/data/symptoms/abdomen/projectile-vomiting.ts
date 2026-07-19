import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'projectile-vomiting',
  title: 'Projectile Vomiting in Babies',
  bodySystem: 'abdomen',
  description: 'Projectile vomiting is defined as forceful vomiting that travels a significant distance (often several feet) from the baby. It is distinctly different from normal spit-up or reflux, which is effortless. The most important cause to rule out in a young infant (2-8 weeks old) is pyloric stenosis — a condition where the muscle at the outlet of the stomach thickens and blocks food from passing into the small intestine. Pyloric stenosis requires surgical correction. Projectile vomiting in older infants and toddlers is more commonly from forceful gastroenteritis or overfeeding.',
  possibleCauses: [
    { cause: 'Pyloric stenosis (classically presents at 2-8 weeks of age)', likelihood: 'common' },
    { cause: 'Forceful vomiting from viral gastroenteritis', likelihood: 'common' },
    { cause: 'Overfeeding or feeding too fast', likelihood: 'common' },
    { cause: 'Severe gastroesophageal reflux', likelihood: 'uncommon' },
    { cause: 'Food allergy (cow\'s milk protein allergy)', likelihood: 'uncommon' },
    { cause: 'Intestinal obstruction (malrotation with volvulus)', likelihood: 'rare' },
    { cause: 'Increased intracranial pressure (hydrocephalus, brain tumor)', likelihood: 'rare' },
    { cause: 'Inborn errors of metabolism', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-2 weeks', normalVariation: 'Occasional forceful spit-up in the first week as feeding is established can occur. Small amounts of milk returning with a burp are normal.', whenToWorry: 'True projectile vomiting (shoots across the room) in the first 2 weeks is unusual — while pyloric stenosis typically presents later, it can occur this early. Bilious (green) vomiting at any age is always an emergency.' },
    { ageRange: '2-8 weeks', normalVariation: 'Spit-up is common but should be effortless. Some babies have larger reflux episodes that may appear forceful but baby is not in distress.', whenToWorry: 'Classic pyloric stenosis presentation: progressively worsening projectile vomiting after every feed, baby appears hungry immediately after vomiting ("hungry vomiter"), poor weight gain or weight loss, fewer wet diapers, and dehydration signs.' },
    { ageRange: '2-6 months', normalVariation: 'Occasional forceful vomiting during a stomach bug is common and usually self-limiting. Peak reflux age, but reflux is effortless, not projectile.', whenToWorry: 'Persistent projectile vomiting after most feeds with weight loss. Projectile vomiting with bulging fontanelle or increasing head circumference. Green (bilious) projectile vomiting.' },
    { ageRange: '6 months - 3 years', normalVariation: 'Forceful vomiting during gastroenteritis is common in this age group. Toddlers may vomit with surprising force during viral illness.', whenToWorry: 'Projectile vomiting with severe headache, altered consciousness, or visual changes. Projectile vomiting with progressive worsening over days/weeks without viral illness. Projectile vomiting with abdominal distension.' },
  ],
  urgencyLevels: {
    emergency: [
      'Projectile vomiting in infant 2-8 weeks old (possible pyloric stenosis — needs same-day ultrasound)',
      'Green/bilious projectile vomiting at any age (possible bowel obstruction)',
      'Projectile vomiting with bulging fontanelle or altered consciousness',
      'Projectile vomiting with signs of severe dehydration (lethargic, sunken fontanelle, no tears)',
      'Projectile vomiting with bloody content',
    ],
    urgent: [
      'Projectile vomiting with signs of dehydration (reduced wet diapers, dry mouth)',
      'Progressive projectile vomiting worsening over several days',
      'Projectile vomiting in young infant with poor weight gain or weight loss',
      'Projectile vomiting with abdominal distension',
    ],
    sameDay: [
      'New projectile vomiting in infant 3-12 weeks (even if only occurred once or twice — needs evaluation)',
      'Recurrent forceful vomiting not improving after 24 hours in an older infant/toddler',
    ],
    monitor: [
      'Single episode of forceful vomiting during a viral gastroenteritis with child otherwise recovering',
      'Occasional forceful spit-up in a well, thriving infant (likely just vigorous reflux)',
    ],
  },
  homeRemedies: [
    'If pyloric stenosis is suspected (2-8 week infant with progressively worsening projectile vomiting): seek medical attention — there are no home remedies for this condition',
    'For viral gastroenteritis with forceful vomiting: wait 30-60 minutes then offer small frequent sips of oral rehydration solution',
    'Breastfed babies: offer shorter, more frequent feeds',
    'Bottle-fed babies: offer smaller volumes more frequently and ensure proper flow rate of nipple',
    'Keep baby upright for 20-30 minutes after feeds',
    'Track number of wet diapers to monitor hydration',
    'Do NOT give anti-nausea medications without medical guidance',
    'Record frequency and volume of projectile vomiting to report to doctor',
    'If vomiting is progressively worsening (not improving day to day), do not wait — seek evaluation',
  ],
  triageSlug: 'vomiting',
  relatedSymptomSlugs: ['vomiting', 'spit-up', 'refusing-to-eat', 'gas-bloating'],
  relatedIllnessSlugs: ['pyloric-stenosis', 'gastroenteritis', 'reflux', 'malrotation'],
  relatedConcernSlugs: ['baby-projectile-vomiting', 'pyloric-stenosis-symptoms', 'forceful-vomiting-baby'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Pyloric Stenosis. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Pyloric-Stenosis.aspx' },
    { org: 'NIH', citation: 'Pandya S, Heiss K. Pyloric stenosis in pediatric surgery: an evidence-based review. Surgical Clinics of North America. 2012;92(3):527-539.', url: 'https://pubmed.ncbi.nlm.nih.gov/22595707/' },
    { org: 'AAP', citation: 'Zella GC, Israel EJ. An evidence-based approach to infant vomiting. Pediatrics in Review. 2012;33(4):e21.', url: 'https://publications.aap.org/pediatricsinreview/article/33/4/e21/32578' },
  ],
};
