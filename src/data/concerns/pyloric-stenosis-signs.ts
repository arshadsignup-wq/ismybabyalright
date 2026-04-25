import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'pyloric-stenosis-signs',
  title: 'Signs of Pyloric Stenosis in Babies',
  category: 'digestive',
  searchTerms: [
    'pyloric stenosis symptoms',
    'projectile vomiting baby',
    'baby vomits after every feeding',
    'pyloric stenosis signs',
    'baby always hungry but vomits',
    'what is pyloric stenosis',
    'projectile vomit newborn',
    'baby losing weight and vomiting',
  ],
  quickAnswer: 'Pyloric stenosis is a rare condition (affecting about 3 in 1,000 babies) where the stomach outlet thickens, blocking food from entering the small intestine. The hallmark sign is forceful, projectile vomiting after feeds starting around 3-5 weeks of age, with baby seeming hungry immediately after. It requires surgical correction but has an excellent prognosis when treated.',
  byAge: [
    {
      ageRange: '0-2 weeks',
      context: 'Pyloric stenosis symptoms rarely appear in the first two weeks of life. If your newborn is vomiting, it\'s more likely to be normal spit-up, reflux, or feeding issues like overfeeding or swallowing air. However, if you notice true projectile vomiting (shooting several feet) at this age, contact your pediatrician promptly.',
    },
    {
      ageRange: '3-5 weeks',
      context: 'This is the most common age for pyloric stenosis to appear. Symptoms typically start gradually: first occasional vomiting after feeds, then becoming more frequent and forceful. The vomiting is projectile (shoots out with force, not just dribbling), happens shortly after most feeds, and doesn\'t contain bile (it\'s usually just milk). Baby seems hungry and eager to feed again right after vomiting.',
    },
    {
      ageRange: '6-12 weeks',
      context: 'While less common, pyloric stenosis can develop up to 3 months of age. If your older baby suddenly develops forceful, projectile vomiting after a period of normal feeding, don\'t dismiss it. Other signs at this age include fewer wet diapers, weight loss or poor weight gain, constipation (small, infrequent stools), and appearing dehydrated. Sometimes you can see wave-like contractions across baby\'s belly after feeding.',
    },
    {
      ageRange: '3+ months',
      context: 'Pyloric stenosis is extremely rare after 3 months. If your baby has projectile vomiting at this age, other causes are more likely, such as gastroenteritis, food intolerance, or reflux. Still, any pattern of forceful vomiting deserves medical evaluation.',
    },
  ],
  whenNormal: [
    'Occasional spit-up that dribbles out, even if it seems like a lot',
    'Vomiting once or twice that doesn\'t create a pattern',
    'Baby continues to gain weight appropriately',
    'Plenty of wet diapers (6+ per day)',
    'Baby seems content between feeds',
  ],
  whenToMention: [
    'Vomiting is becoming more frequent or more forceful',
    'Baby seems hungrier than usual despite feeding well',
    'You\'re concerned about the force or frequency of vomiting',
    'Slightly fewer wet diapers than usual',
  ],
  whenToActNow: [
    'Projectile vomiting after most or all feeds',
    'Baby isn\'t gaining weight or is losing weight',
    'Fewer than 4-6 wet diapers in 24 hours',
    'Baby seems lethargic, has sunken soft spot, or dry mouth',
    'You can see wave-like movements across baby\'s belly after feeding',
    'Vomit is green, yellow, or contains blood',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'American Academy of Pediatrics',
      citation: 'Pyloric Stenosis: Symptoms and Treatment in Infants (2024)',
      url: 'https://www.aap.org',
    },
    {
      org: 'Children\'s Hospital of Philadelphia',
      citation: 'Pyloric Stenosis: Diagnosis and Surgical Management (2024)',
      url: 'https://www.chop.edu',
    },
    {
      org: 'Mayo Clinic',
      citation: 'Pyloric Stenosis in Infants: When to Seek Emergency Care (2024)',
      url: 'https://www.mayoclinic.org',
    },
  ],
};
