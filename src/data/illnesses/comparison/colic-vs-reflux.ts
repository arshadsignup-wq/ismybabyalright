import type { IllnessComparison } from '../types';

export const comparison: IllnessComparison = {
  slug: 'colic-vs-reflux',
  title: 'Colic vs Reflux: Key Differences',
  description: 'Both colic and reflux cause crying and fussiness in young infants, making them difficult to distinguish. Colic is defined by excessive crying with no identifiable cause, while reflux involves stomach contents flowing back up the esophagus.',
  conditionA: { name: 'Colic', illnessSlug: 'colic' },
  conditionB: { name: 'Infant Reflux (GER/GERD)', illnessSlug: 'reflux' },
  comparisonPoints: [
    { category: 'Definition', conditionA: 'Excessive crying (3+ hours/day, 3+ days/week) in a healthy infant', conditionB: 'Stomach contents flowing back into esophagus' },
    { category: 'Timing', conditionA: 'Worst in late afternoon/evening ("witching hour")', conditionB: 'During or shortly after feeds; when lying flat' },
    { category: 'Relationship to feeding', conditionA: 'Crying not specifically related to feeds', conditionB: 'Spitting up during/after feeds; may arch back while feeding' },
    { category: 'Spitting up', conditionA: 'May have normal spit-up but not excessive', conditionB: 'Frequent, sometimes large volume spitting up' },
    { category: 'Weight gain', conditionA: 'Normal weight gain', conditionB: 'Usually normal ("happy spitter"); poor gain in severe GERD' },
    { category: 'Body position', conditionA: 'Drawing up legs, clenched fists, tense abdomen', conditionB: 'Arching back, turning head (trying to relieve discomfort)' },
    { category: 'Age', conditionA: 'Starts around 2-3 weeks; peaks at 6 weeks; resolves by 3-4 months', conditionB: 'Starts in first weeks; peaks at 4 months; resolves by 12-18 months' },
    { category: 'Pattern', conditionA: 'Predictable daily episodes; fine between crying bouts', conditionB: 'Related to feeds throughout the day' },
    { category: 'Treatment', conditionA: 'Soothing techniques (5 S\'s), time; no effective medication', conditionB: 'Smaller/frequent feeds, upright positioning, thickened feeds; medication if severe' },
    { category: 'Sleep', conditionA: 'May sleep well once episode passes', conditionB: 'Often disrupted sleep due to lying-flat position worsening reflux' },
  ],
  keyDifferences: [
    'Colic crying is worst in the evening; reflux fussiness is tied to feeding times',
    'Reflux involves visible spitting up or wet burps; colic does not',
    'Back-arching during feeds suggests reflux; drawing up legs and clenching suggests colic',
    'Colic resolves by 3-4 months; reflux may persist until 12-18 months',
    'Many babies have BOTH colic and reflux, making them difficult to separate',
  ],
  whenToWorry: [
    'Poor weight gain or weight loss (suggests significant GERD, not simple colic)',
    'Projectile vomiting in a baby aged 2-8 weeks (possible pyloric stenosis — emergency)',
    'Green (bilious) vomiting (never normal — seek immediate care)',
    'Blood in spit-up or stool',
    'Refusing all feeds or unable to feed',
    'Crying with fever, rash, or other signs of illness (not colic)',
    'Excessive crying with bulging fontanelle or inconsolability (other serious causes)',
  ],
  sources: [
    { org: 'AAP', citation: 'AAP. Colic Relief Tips for Parents.', url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/Colic.aspx' },
    { org: 'AAP', citation: 'AAP. Gastroesophageal Reflux in Infants.', url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/GERD-Reflux.aspx' },
    { org: 'NICE', citation: 'NICE. Gastro-oesophageal Reflux Disease in Children and Young People.', url: 'https://www.nice.org.uk/guidance/ng1' },
  ],
};
