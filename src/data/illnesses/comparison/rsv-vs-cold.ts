import type { IllnessComparison } from '../types';

export const comparison: IllnessComparison = {
  slug: 'rsv-vs-cold',
  title: 'RSV vs Common Cold: How to Tell the Difference',
  description: 'RSV and the common cold can start with identical symptoms — runny nose, cough, and mild fever. However, RSV can progress to involve the lower airways, causing wheezing and breathing difficulty, especially in infants under 6 months. Here is how to tell them apart.',
  conditionA: { name: 'RSV', illnessSlug: 'rsv' },
  conditionB: { name: 'Common Cold', illnessSlug: 'common-cold' },
  comparisonPoints: [
    { category: 'Cause', conditionA: 'Respiratory Syncytial Virus specifically', conditionB: 'Over 200 viruses (rhinovirus most common)' },
    { category: 'Initial symptoms', conditionA: 'Starts like a cold — runny nose, cough, mild fever', conditionB: 'Runny nose, sneezing, mild cough, low fever' },
    { category: 'Progression', conditionA: 'May worsen on days 3-5 with wheezing, fast breathing', conditionB: 'Peaks around day 2-3, then gradually improves' },
    { category: 'Breathing', conditionA: 'May develop wheezing, nasal flaring, retractions', conditionB: 'Nasal congestion only — no lower airway involvement' },
    { category: 'Feeding impact', conditionA: 'Can significantly impair feeding due to breathing difficulty', conditionB: 'Mildly reduced due to stuffy nose' },
    { category: 'Duration', conditionA: '1-3 weeks, cough may linger 4 weeks', conditionB: '7-10 days, lingering cough up to 3 weeks' },
    { category: 'Severity peak', conditionA: 'Days 3-5 (may worsen after seeming like a cold)', conditionB: 'Days 2-3 then improves' },
    { category: 'Hospitalization', conditionA: '1-3% of infants require hospitalization', conditionB: 'Virtually never requires hospitalization' },
    { category: 'Age risk', conditionA: 'Most dangerous in infants under 6 months', conditionB: 'Similar severity at all ages' },
    { category: 'Season', conditionA: 'Primarily fall through spring (RSV season)', conditionB: 'Year-round' },
  ],
  keyDifferences: [
    'RSV can progress to lower airway disease (wheezing, fast breathing); colds stay in the upper airways (nose and throat)',
    'RSV worsens on days 3-5 after initial cold symptoms; colds peak early then improve steadily',
    'RSV causes visible breathing difficulty (retractions, flaring); colds only cause nasal congestion',
    'RSV is seasonal (fall-spring); colds happen year-round',
    'RSV poses a real hospitalization risk for young infants; colds almost never do',
    'If your baby is breathing fast, wheezing, or working hard to breathe, it is more than a cold',
  ],
  whenToWorry: [
    'Cold symptoms that worsen on day 3-5 instead of improving — suspect RSV',
    'Wheezing, fast breathing, or chest retractions — this is not just a cold',
    'Baby under 3 months with any breathing changes',
    'Poor feeding combined with breathing difficulty',
    'Premature babies or those with heart/lung conditions with cold symptoms — higher risk for RSV complications',
    'Blue lips or pauses in breathing — emergency regardless of the virus',
  ],
  sources: [
    { org: 'CDC', citation: 'CDC. RSV (Respiratory Syncytial Virus).', url: 'https://www.cdc.gov/rsv/index.html' },
    { org: 'AAP', citation: 'AAP. Distinguishing RSV from the Common Cold.', url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/RSV-When-Its-More-Than-Just-a-Cold.aspx' },
    { org: 'CDC', citation: 'CDC. Common Colds.', url: 'https://www.cdc.gov/features/rhinoviruses/index.html' },
  ],
};
