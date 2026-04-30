import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-regression-after-starting-daycare',
  title: 'Baby or Toddler Regressing After Starting Daycare',
  category: 'behavior',
  searchTerms: ['baby regression daycare', 'toddler regressing daycare', 'baby acting different after daycare', 'toddler clingy after starting daycare', 'baby sleep regression daycare', 'toddler behavior change daycare', 'baby crying at daycare', 'toddler won\'t eat at daycare', 'baby daycare adjustment', 'toddler daycare transition'],
  quickAnswer: 'Some behavioral regression when starting daycare is very common and expected. The transition to daycare is a major life change for a young child, and temporary regression is their way of coping with the stress of separation, a new environment, and a new routine. Common regressions include: increased clinginess, sleep disruptions, potty training setbacks, more tantrums, changes in appetite, and wanting a bottle or pacifier again. Most children adjust within 2-6 weeks. Consistency, patience, and a warm goodbye routine help ease the transition.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies starting daycare may show changes in sleep patterns, feeding behavior, and overall fussiness. Separation anxiety peaks around 8-10 months, making this a particularly challenging time to start daycare. You may notice your baby is clingier at drop-off and pickup, sleeps differently at home, or has changes in feeding patterns. Bring familiar comfort items (a blanket or lovey) to daycare. Ask about the daycare\'s routine so you can mirror it at home for consistency. Most babies adapt within 2-4 weeks, though some take longer.' },
    { ageRange: '1-3 years', context: 'Toddlers starting daycare often show regression in multiple areas: sleep (nighttime waking, nap refusal), potty training (accidents after being trained), eating (pickier or eating less), behavior (more tantrums, hitting), and social (increased clinginess, separation anxiety). They may also bring home challenging behaviors learned from other children. These regressions are temporary coping mechanisms, not permanent setbacks. Help your toddler by: creating a consistent goodbye ritual, validating their feelings ("I know you miss me"), maintaining routines at home, providing extra connection time after pickup, and not introducing other big changes simultaneously.' },
  ],
  whenNormal: ['Increased clinginess during the first 2-6 weeks of daycare', 'Sleep disruptions that gradually improve', 'Temporary potty training setbacks', 'More tantrums and emotional sensitivity for a few weeks', 'Wanting more comfort items (pacifier, lovey, bottle)'],
  whenToMention: ['Regression is lasting beyond 6-8 weeks with no improvement', 'Your child seems fearful or distressed (not just sad) about daycare', 'Regression is severe - complete refusal to eat, extreme sleep disruption, or persistent distress', 'You have concerns about the quality of care at the daycare'],
  whenToActNow: ['Your child has signs of being mistreated: new fearfulness, unexplained injuries, dramatic personality changes', 'Loss of developmental milestones (language, motor skills) beyond behavioral regression', 'Persistent refusal to eat combined with weight loss', 'Your child is showing signs of significant anxiety or depression'],
  relatedMilestones: ['social-emotional'],
  showSelfReferral: false,
  relatedConcernSlugs: ['separation-anxiety', 'toddler-regression-after-move', 'sleep-regression', 'toddler-aggressive-at-daycare'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Starting Daycare. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/work-and-child-care/Pages/default.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Separation Anxiety. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Soothing-Your-Childs-Separation-Anxiety.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Childcare Transitions and Adjustment.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
