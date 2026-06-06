import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-weight-gain-too-rapid',
  title: 'My Baby Is Gaining Weight Too Fast',
  category: 'physical',
  searchTerms: ['baby gaining weight too fast', 'baby overweight', 'baby rapid weight gain', 'baby chunky concern', 'baby too heavy', 'baby obese', 'baby weight gain too rapid', 'breastfed baby gaining too fast', 'baby fat concern', 'overfeeding baby weight'],
  quickAnswer: 'Rapid weight gain in babies can be normal, especially in breastfed newborns during the first few months. Breastfed babies cannot be overfed. For formula-fed babies, paced bottle feeding can prevent overfeeding. Most chubby babies lean out when they become mobile. Your pediatrician monitors growth patterns and will advise if weight gain is concerning.',
  byAge: [
    { ageRange: '0-3 months', context: 'Rapid weight gain in the first months is often normal, especially in breastfed babies. Babies need to gain weight to grow and develop. If your baby is exclusively breastfed, trust their hunger cues. For bottle-fed babies, paced feeding can help prevent overfeeding.' },
    { ageRange: '3-6 months', context: 'Weight gain typically slows slightly. If your baby is crossing percentile lines upward rapidly, your pediatrician will review feeding practices. Breastfed babies may gain rapidly then slow down; this is normal.' },
    { ageRange: '6-12 months', context: 'As solids are introduced and babies become more mobile, weight gain often naturally moderates. Focus on offering nutritious foods and following your baby\'s hunger and fullness cues rather than restricting food.' },
    { ageRange: '12-24 months', context: 'Active toddlers typically lean out as they walk and run. If rapid weight gain continues with minimal activity, discuss with your pediatrician. Do not restrict calories in a toddler without medical guidance.' },
  ],
  whenNormal: ['Your baby is breastfed and gaining weight rapidly in the first months.', 'Your baby is active and meeting developmental milestones.', 'Weight is proportional to length.', 'Your baby is gaining along a consistent percentile.'],
  whenToMention: ['Weight is crossing multiple percentile lines upward while length remains stable.', 'You are concerned about overfeeding.', 'Rapid weight gain continues past the first year.'],
  whenToActNow: ['Rapid weight gain is accompanied by excessive thirst, urination, or other symptoms.', 'Your child has sudden unexplained weight gain.'],
  relatedMilestones: ['growth-weight'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-growth-percentile-jumping'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Healthy Growth', url: 'https://www.healthychildren.org/English/health-issues/conditions/Glands-Growth-Disorders/Pages/default.aspx' },
    { org: 'WHO', citation: 'WHO Child Growth Standards', url: 'https://www.who.int/tools/child-growth-standards' },
    { org: 'CDC', citation: 'CDC - About Child and Teen BMI', url: 'https://www.cdc.gov/bmi/child-teen-calculator/index.html' },
  ],
};
