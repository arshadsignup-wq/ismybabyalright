import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-reflux-diet-modifications',
  title: 'What Diet Changes Help My Baby\'s Reflux?',
  category: 'feeding',
  searchTerms: ['baby reflux diet', 'reflux diet changes baby', 'foods that worsen reflux baby', 'breastfeeding diet reflux', 'formula for reflux', 'GERD diet baby', 'reflux friendly foods baby', 'dairy free reflux baby', 'acid reflux baby food', 'reflux and solid foods'],
  quickAnswer: 'Diet modifications can help manage infant reflux (GER/GERD). For breastfed babies, maternal elimination of cow\'s milk protein sometimes helps if milk protein intolerance is suspected. For formula-fed babies, switching to a hydrolyzed formula may be recommended. Once solids are introduced, smaller and more frequent meals, upright positioning after eating, and avoiding acidic or fatty foods can reduce symptoms. Always consult your pediatrician before making diet changes.',
  byAge: [
    { ageRange: '0-3 months', context: 'For breastfed babies with significant reflux, your doctor may suggest a 2-4 week trial of eliminating dairy from your diet to see if milk protein intolerance is contributing. For formula-fed babies, a switch to extensively hydrolyzed or amino acid-based formula may be tried.' },
    { ageRange: '4-6 months', context: 'As you begin introducing solids, start with easily digestible foods. Some parents find that starting solids slightly earlier (around 4 months with pediatrician approval) helps reduce reflux symptoms. Thicker purees may stay down better than thin liquids.' },
    { ageRange: '6-9 months', context: 'Offer smaller, more frequent meals rather than large portions. Avoid citrus fruits, tomatoes, and very fatty foods if they seem to worsen symptoms. Keep baby upright for at least 20-30 minutes after meals.' },
    { ageRange: '9-12 months', context: 'Most babies see significant improvement in reflux by this age. Continue offering a variety of foods while monitoring for individual triggers. If symptoms persist, discuss further evaluation with your pediatrician.' },
    { ageRange: '12-24 months', context: 'Reflux that persists beyond 12-18 months may need further evaluation for GERD. Diet modifications for toddlers include smaller meals, avoiding eating right before bed, and limiting known trigger foods. Your pediatrician may refer to a pediatric GI specialist.' },
  ],
  whenNormal: ['Baby spits up after feeds but is happy, growing, and not in pain', 'Reflux improves with simple position changes after feeding', 'Baby tolerates most foods without worsening symptoms'],
  whenToMention: ['Reflux does not improve with standard feeding modifications', 'Baby seems to be in pain during or after feeds', 'Baby is refusing feeds due to apparent discomfort', 'Baby is not gaining weight despite adequate intake'],
  whenToActNow: ['Baby is vomiting blood or has bloody stools', 'Baby is losing weight or showing signs of dehydration', 'Baby has difficulty breathing related to reflux episodes'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['thickened-feeds-baby', 'formula-changing-frequency', 'baby-first-foods-best-choices'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Gastroesophageal Reflux in Infants. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Management of Gastroesophageal Reflux Disease in Infants. Journal of Pediatric Gastroenterology and Nutrition, 2018.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
