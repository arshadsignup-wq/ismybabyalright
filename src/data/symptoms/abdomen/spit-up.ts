import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'spit-up',
  title: 'Spit-Up (Reflux) in Babies',
  bodySystem: 'abdomen',
  description: 'Spit-up (gastroesophageal reflux or GER) is the effortless return of stomach contents into the esophagus and out the mouth. It is extremely common in healthy infants — more than 50% of babies spit up regularly in the first 3 months, peaking at 4 months and typically resolving by 12-18 months as the lower esophageal sphincter matures. Spit-up is considered normal ("happy spitter") when the baby is growing well, feeding normally, and not in distress. It becomes gastroesophageal reflux disease (GERD) only when it causes complications like poor weight gain, esophagitis, or respiratory problems.',
  possibleCauses: [
    { cause: 'Normal physiological reflux (immature lower esophageal sphincter)', likelihood: 'common' },
    { cause: 'Overfeeding or swallowing air during feeds', likelihood: 'common' },
    { cause: 'Lying flat immediately after feeding', likelihood: 'common' },
    { cause: 'Cow\'s milk protein allergy or intolerance', likelihood: 'uncommon' },
    { cause: 'GERD (reflux causing complications)', likelihood: 'uncommon' },
    { cause: 'Pyloric stenosis (progressively worsening, becomes projectile)', likelihood: 'rare' },
    { cause: 'Eosinophilic esophagitis', likelihood: 'rare' },
    { cause: 'Anatomical abnormality (hiatal hernia, malrotation)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-2 months', normalVariation: 'Frequent spit-up (multiple times daily) is extremely common and normal. "Happy spitters" gain weight well and are not distressed by the spitting up.', whenToWorry: 'Spit-up becoming projectile (pyloric stenosis typically presents 2-8 weeks). Green or bloody spit-up. Spit-up with poor weight gain, arching, or excessive crying. Spit-up with choking or turning blue.' },
    { ageRange: '2-4 months', normalVariation: 'Peak spit-up period. Babies may spit up after every feed. Volume can seem alarming but is often less than it appears (1 tablespoon looks like a lot on a bib).', whenToWorry: 'Weight loss or failure to gain weight. Inconsolable crying suggesting pain (esophagitis). Refusal to feed. Frequent respiratory symptoms (chronic cough, recurrent wheezing) alongside reflux.' },
    { ageRange: '4-12 months', normalVariation: 'Spit-up begins to decrease after 4-6 months. Introduction of solids and sitting upright help. Many babies outgrow reflux by 12 months.', whenToWorry: 'Spit-up worsening rather than improving after 6 months. New onset vomiting (rather than spit-up) after 6 months. Spit-up with feeding aversion or poor growth.' },
    { ageRange: '1-3 years', normalVariation: 'Most reflux has resolved. Occasional spit-up with overeating or vigorous activity after eating can happen.', whenToWorry: 'Persistent reflux or vomiting beyond 18 months requires evaluation. Reflux with chronic cough, dental erosion, or recurrent ear infections. Complaints of chest pain or throat burning in verbal toddlers.' },
  ],
  urgencyLevels: {
    emergency: [
      'Green (bilious) spit-up/vomiting at any age',
      'Spit-up with choking, turning blue, or apnea',
      'Projectile vomiting replacing normal spit-up in infant 2-8 weeks (pyloric stenosis)',
      'Bloody vomiting (not just blood-streaked from cracked nipple)',
    ],
    urgent: [
      'Spit-up with documented weight loss or failure to gain weight',
      'Spit-up with signs of dehydration (fewer than 6 wet diapers, sunken fontanelle)',
      'Spit-up with severe feeding refusal (arching, screaming during feeds)',
    ],
    sameDay: [
      'Spit-up with poor weight gain (crossing percentile lines down)',
      'Frequent spit-up with persistent fussiness and possible pain',
      'Parents concerned about differentiating normal spit-up from vomiting',
    ],
    monitor: [
      'Happy spitter — frequent spit-up but baby is growing well, feeding normally, and content',
      'Spit-up that is gradually decreasing with age (improving trajectory)',
      'Mild increase in spit-up during teething or illness',
    ],
  },
  homeRemedies: [
    'Feed smaller amounts more frequently rather than large infrequent feeds',
    'Burp baby thoroughly during and after feeds (every 2-3 ounces for bottle-fed)',
    'Keep baby upright for 20-30 minutes after feeding',
    'Avoid vigorous play or tummy time immediately after feeds',
    'If bottle-feeding, ensure nipple flow rate is appropriate (not too fast)',
    'Try paced bottle feeding technique — hold bottle more horizontal, allow baby to control pace',
    'Avoid tight diapers or clothing around the abdomen after feeds',
    'For formula-fed babies with suspected milk allergy: discuss trial of hydrolyzed formula with doctor',
    'Do NOT add cereal to bottles unless specifically directed by your pediatrician',
    'Do NOT elevate the head of the crib (AAP recommends flat sleep surface)',
    'Do NOT stop breastfeeding — breast milk is easier to digest than formula',
  ],
  triageSlug: 'vomiting',
  relatedSymptomSlugs: ['vomiting', 'projectile-vomiting', 'hiccups', 'refusing-to-eat'],
  relatedIllnessSlugs: ['reflux', 'gerd', 'milk-protein-allergy', 'pyloric-stenosis'],
  relatedConcernSlugs: ['baby-spitting-up-a-lot', 'reflux-in-babies', 'happy-spitter'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Gastroesophageal Reflux in Infants. Pediatrics. 2013;131(5):e1684-e1695.', url: 'https://publications.aap.org/pediatrics/article/131/5/e1684/31882' },
    { org: 'NASPGHAN', citation: 'Rosen R, et al. Pediatric Gastroesophageal Reflux Clinical Practice Guidelines. JPGN. 2018;66(3):516-554.', url: 'https://pubmed.ncbi.nlm.nih.gov/29470322/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Spitting Up in Babies. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Gastroesophageal-Reflux-in-Infants.aspx' },
  ],
};
