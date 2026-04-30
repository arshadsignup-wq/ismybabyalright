import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-strep-throat',
  title: 'Strep Throat in Baby or Toddler',
  category: 'medical',
  searchTerms: ['baby strep throat', 'toddler strep', 'strep throat baby symptoms', 'toddler sore throat strep', 'baby group A strep', 'toddler strep throat treatment', 'baby strep test', 'toddler strep throat contagious', 'baby strep throat antibiotics', 'toddler strep without fever'],
  quickAnswer: 'Strep throat (Group A Streptococcus infection) is uncommon in babies under 2 years but can occur in toddlers. It is most common in children ages 5-15. In toddlers, strep may present differently than in older children - instead of the classic sore throat, toddlers may have low-grade fever, irritability, decreased appetite, runny nose, and swollen lymph nodes. A rapid strep test or throat culture is needed for diagnosis. Strep throat requires antibiotic treatment (usually amoxicillin for 10 days) to prevent complications including rheumatic fever.',
  byAge: [
    { ageRange: '0-12 months', context: 'Strep throat is very rare in babies under 1 year, partly because maternal antibodies offer some protection and partly because babies have less exposure. If a baby has a sore throat, it is almost always caused by a virus, not strep. However, babies can carry Group A Strep and may develop a "streptococcal fever" with irritability, low-grade fever, nasal discharge, and decreased appetite without the classic sore throat. If a household member has confirmed strep, mention this to your pediatrician.' },
    { ageRange: '1-3 years', context: 'Strep throat in toddlers often looks different from the classic presentation in older children. Toddlers may have: fever, irritability, decreased appetite, thick or bloody nasal discharge, swollen tender lymph nodes in the neck, and a widespread fine red rash (scarlet fever). They may not complain of a sore throat. A rapid strep test can be done at the pediatrician\'s office. If positive, antibiotics (typically amoxicillin for 10 days) are prescribed. Your child is no longer contagious after 24 hours of antibiotics. Complete the full antibiotic course even if symptoms improve.' },
  ],
  whenNormal: ['A sore throat with a runny nose, cough, and hoarse voice (more likely viral, not strep)', 'Mild throat redness during a cold', 'Sore throat that improves within 2-3 days without treatment (likely viral)'],
  whenToMention: ['Sore throat with fever above 101 degrees F (38.3 degrees C) and no cough (this pattern suggests strep)', 'A household member has confirmed strep throat', 'Sore throat lasting more than 2-3 days', 'Your child has a fine, sandpaper-like rash along with fever and sore throat (possible scarlet fever)'],
  whenToActNow: ['Difficulty breathing or swallowing', 'Drooling because swallowing is too painful', 'Muffled voice or inability to open the mouth fully (possible peritonsillar abscess)', 'High fever with a severely ill-appearing child', 'Joint pain or swelling developing after a strep infection (possible rheumatic fever)'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['sore-throat-baby', 'scarlet-fever-baby', 'baby-swollen-lymph-nodes', 'tonsillitis-baby'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Strep Throat. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Strep-Throat.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Group A Strep.', url: 'https://www.cdc.gov/group-a-strep/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Sore Throat in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Sore-Throat-in-Children.aspx' },
  ],
};
