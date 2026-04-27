import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-growing-too-fast',
  title: 'Baby Growing Too Fast - Rapid Weight or Height Gain',
  category: 'physical',
  searchTerms: ['baby growing too fast','baby gaining weight too fast','baby large for age','baby above 99th percentile','baby rapid growth','baby high percentile weight','overweight baby','chubby baby concerning','big baby health risks','baby growing too quickly','macrosomia baby','baby off the charts growth'],
  quickAnswer: 'Babies come in all sizes, and being on a high growth percentile does not automatically mean something is wrong. What matters more than the percentile itself is the pattern - a baby who has always tracked along the 90th percentile is following their own normal curve. Rapid upward crossing of percentile lines (jumping from the 50th to the 95th) is more noteworthy. Breastfed babies cannot be overfed at the breast. For formula-fed babies, ensure appropriate bottle feeding practices. Most "big babies" simply have big parents and are growing as genetically programmed.',
  byAge: [
    { ageRange: '0-3 months', context: 'Rapid weight gain in the first 3 months is very common, especially in breastfed babies who may gain 1-2 pounds per week initially. This is normal "catch-up" growth and the growth rate typically slows after 3-4 months. Breastfed babies often appear chubby in the first 6 months and lean out when they become mobile. A baby who is gaining fast but is otherwise healthy and feeding normally does not need dietary restriction. Never water down formula or limit feeds to slow growth in a young baby.' },
    { ageRange: '3-6 months', context: 'Growth rate normally slows after the first 3 months. If your baby continues to gain very rapidly, consider whether they are being overfed with bottles (use paced bottle feeding) or whether the formula is being mixed correctly. Breastfed babies self-regulate intake and do not typically overfeed. Look at length as well as weight - if both are high, your baby is proportionally large. If weight is high but length is not, the growth pattern should be monitored.' },
    { ageRange: '6-12 months', context: 'Once babies start solids and become more mobile (rolling, crawling, pulling up), weight gain typically slows and the baby-fat chubbiness begins to decrease. If your baby is still gaining very rapidly despite increased activity and a balanced solid food diet, discuss the growth pattern with your pediatrician. However, most large babies are simply genetically programmed to be bigger. There is no evidence that restricting food for infants leads to healthier outcomes.' },
    { ageRange: '12-36 months', context: 'As toddlers become very active, most rapid growers settle into a more typical growth pattern. If your toddler continues to gain weight disproportionately to height, your pediatrician may review dietary patterns and activity levels. However, putting a toddler on a "diet" is never recommended. Instead, focus on offering balanced meals, limiting juice and processed snacks, encouraging active play, and following the division of responsibility (you decide what/when, they decide how much).' },
  ],
  whenNormal: ['Your baby has always tracked along a high percentile and parents are tall or large-framed','Growth has been steady along the same curve without crossing upward across multiple percentile lines','Your breastfed baby is chubby but happy, healthy, and developing normally','Your baby is long AND heavy - proportionally large rather than just heavy'],
  whenToMention: ['Your baby\'s weight has crossed upward across two or more major percentile lines on the growth chart','Your baby\'s weight percentile is much higher than their length percentile','Your formula-fed baby is consistently eating more than 32 oz per day','You are concerned about your child\'s growth pattern and want reassurance'],
  whenToActNow: ['Rapid weight gain alongside other symptoms - excessive thirst, excessive urination, or unusual fat distribution patterns','Your baby\'s head circumference is growing much faster than expected (could indicate increased intracranial pressure)','Growth patterns suggest a possible endocrine condition - your pediatrician will guide testing if needed'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-eating-too-much','baby-growing-too-slow','baby-not-gaining-height'],
  sources: [
    { org: 'WHO', citation: 'World Health Organization. Child Growth Standards.', url: 'https://www.who.int/tools/child-growth-standards' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Growth Charts. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/Glands-Growth-Disorders/Pages/Growth-Charts.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Clinical Growth Charts.', url: 'https://www.cdc.gov/growthcharts/clinical_charts.htm' },
  ],
};
