import type { IllnessComparison } from '../types';

export const comparison: IllnessComparison = {
  slug: 'reflux-vs-pyloric-stenosis',
  title: 'Reflux (Spitting Up) vs Pyloric Stenosis: Key Differences',
  description: 'Both reflux and pyloric stenosis cause vomiting in young infants. Normal reflux (spitting up) is very common and harmless, while pyloric stenosis is a surgical emergency requiring prompt diagnosis.',
  conditionA: { name: 'Infant Reflux (GER/GERD)', illnessSlug: 'reflux' },
  conditionB: { name: 'Pyloric Stenosis', illnessSlug: 'pyloric-stenosis' },
  comparisonPoints: [
    { category: 'What it is', conditionA: 'Stomach contents flow back up esophagus (immature valve)', conditionB: 'Thickened pylorus muscle blocks stomach outlet' },
    { category: 'Typical onset', conditionA: 'First weeks of life; peaks at 4 months', conditionB: '2-8 weeks of age (usually 3-5 weeks)' },
    { category: 'Vomiting type', conditionA: 'Effortless spitting up or mild vomiting', conditionB: 'Forceful PROJECTILE vomiting (shoots across room)' },
    { category: 'Pattern', conditionA: 'Frequent small spit-ups throughout the day', conditionB: 'Progressively worsening; every feed, increasingly forceful' },
    { category: 'Baby behavior after vomiting', conditionA: '"Happy spitter" — comfortable, wants to feed again', conditionB: 'Immediately hungry again (hungry vomiter); increasingly distressed' },
    { category: 'Weight gain', conditionA: 'Normal weight gain in most cases', conditionB: 'Weight loss or failure to gain — becomes dehydrated' },
    { category: 'Vomit contents', conditionA: 'Curdled milk, sometimes slightly blood-tinged', conditionB: 'Non-bilious (no green/yellow bile); may have blood streaks' },
    { category: 'Bowel movements', conditionA: 'Normal', conditionB: 'Fewer and smaller stools ("starvation stools")' },
    { category: 'Treatment', conditionA: 'Positioning, smaller/frequent feeds; medication if severe', conditionB: 'Surgery (pyloromyotomy) — curative' },
    { category: 'Demographics', conditionA: 'Equal in boys and girls', conditionB: '4-5x more common in firstborn males' },
  ],
  keyDifferences: [
    'Projectile vomiting (forceful, travels several feet) is the hallmark of pyloric stenosis, not reflux',
    'Pyloric stenosis gets progressively worse over days/weeks; reflux stays relatively stable',
    'Babies with pyloric stenosis lose weight; babies with simple reflux gain weight normally',
    'Pyloric stenosis causes dehydration and fewer wet diapers; reflux does not',
    'Pyloric stenosis requires surgery; reflux resolves on its own by 12-18 months',
  ],
  whenToWorry: [
    'Projectile vomiting (shoots 1-2 feet) in a baby aged 2-8 weeks — seek urgent evaluation',
    'Baby losing weight or not gaining weight appropriately',
    'Fewer wet diapers than expected (fewer than 6 per day) with vomiting',
    'Green (bilious) vomit — this is NEVER normal and requires emergency evaluation (may indicate bowel obstruction)',
    'Baby appears dehydrated: sunken fontanelle, dry mouth, lethargic',
    'Increasing frequency and force of vomiting over days',
  ],
  sources: [
    { org: 'AAP', citation: 'AAP. Pyloric Stenosis in Infants.', url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Pyloric-Stenosis.aspx' },
    { org: 'AAP', citation: 'AAP. Gastroesophageal Reflux in Infants.', url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/GERD-Reflux.aspx' },
    { org: 'NASPGHAN', citation: 'North American Society for Pediatric Gastroenterology. Guidelines on GER and GERD.', url: 'https://www.naspghan.org/' },
  ],
};
