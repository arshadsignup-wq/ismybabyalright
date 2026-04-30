import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'premature-baby-adjusted-age-milestones',
  title: 'Premature Baby Milestones and Adjusted Age',
  category: 'medical',
  searchTerms: ['premature baby milestones', 'adjusted age baby', 'preemie development', 'corrected age baby', 'premature baby development', 'preemie milestone delay', 'adjusted age milestones', 'premature baby catch up', 'preemie when to worry', 'premature baby growth'],
  quickAnswer: 'Premature babies should be assessed using their "adjusted age" (also called corrected age) for developmental milestones, not their actual birth date. Adjusted age is calculated by subtracting the number of weeks of prematurity from their actual age. For example, a baby born 8 weeks early who is now 6 months old has an adjusted age of 4 months. Use adjusted age for milestone expectations until age 2-3 years, when most premature babies catch up with their full-term peers. Most premature babies develop normally, though they may reach milestones on a slightly different timeline.',
  byAge: [
    { ageRange: '0-12 months', context: 'During the first year, use adjusted age for all developmental milestone assessments. A baby born at 32 weeks (8 weeks early) who is 4 months old chronologically has an adjusted age of about 2 months - so expect 2-month milestones, not 4-month milestones. This applies to motor milestones (head control, rolling, sitting), social milestones (smiling, cooing), and feeding milestones. Growth (weight, length, head circumference) should also be plotted using adjusted age on growth charts. Your pediatrician and any early intervention services will use adjusted age when evaluating your baby.' },
    { ageRange: '1-3 years', context: 'Most premature babies continue to use adjusted age for milestone assessment until about 2 years of age, and some pediatricians use it until age 3 for babies born very prematurely (before 28 weeks). By age 2-3, most premature children have caught up with their full-term peers in development, though some (particularly those born very prematurely) may continue to have mild differences in some areas. Your premature child may be eligible for early intervention services, which provide developmental support at no cost. Ask your pediatrician about a developmental evaluation if you have concerns about your child\'s progress.' },
  ],
  whenNormal: ['Your premature baby is meeting milestones for their adjusted age, even if behind chronological age', 'Slower weight gain in the first year that follows a consistent growth curve', 'Minor delays that gradually improve as your baby grows and catches up'],
  whenToMention: ['Your premature baby is not meeting milestones for their adjusted age', 'You want to discuss early intervention services', 'You are concerned about your child\'s development even using adjusted age', 'Your child is approaching age 2-3 and still seems behind peers'],
  whenToActNow: ['Loss of previously achieved milestones (developmental regression)', 'Significant delays in multiple areas (motor, language, social) even using adjusted age', 'Your premature baby has feeding difficulties, apnea episodes, or other medical concerns', 'Signs of cerebral palsy: persistent stiffness or floppiness, asymmetric movement, or delayed motor milestones well beyond adjusted age expectations'],
  relatedMilestones: ['gross-motor', 'fine-motor', 'communication', 'cognitive', 'social-emotional'],
  showSelfReferral: true,
  relatedConcernSlugs: ['developmental-delay', 'late-walker', 'late-talker', 'not-sitting-up'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Preemie Development. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/preemie/Pages/default.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Developmental Milestones.', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
    { org: 'NIH', citation: 'National Library of Medicine. Developmental Follow-Up of Preterm Infants.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
