import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-hand-tremor-fine-motor',
  title: 'My Toddler\'s Hands Shake During Fine Motor Tasks',
  category: 'physical',
  searchTerms: ['toddler hand tremor', 'toddler hands shake', 'toddler shaky hands drawing', 'toddler hand shaking fine motor', 'toddler trembling hands', 'toddler hand tremor when reaching', 'toddler shaky hands eating', 'intention tremor toddler', 'toddler hands tremble tasks', 'toddler fine motor shakiness'],
  quickAnswer: 'Some hand trembling during concentrated fine motor tasks can be normal in toddlers as their nervous system is still maturing. However, persistent or worsening hand tremors, especially those that occur during reaching (intention tremor), should be evaluated by your pediatrician to rule out neurological concerns.',
  byAge: [
    { ageRange: '6-12 months', context: 'Mild shaking or trembling when reaching for objects can be normal in young babies as they develop motor control. The tremor should be brief and occur mainly during effortful reaching. If tremors are constant or occur at rest, mention them to your pediatrician.' },
    { ageRange: '12-18 months', context: 'As your toddler develops more precise hand skills, some shakiness during concentrated tasks is normal. If the tremor seems to worsen as they reach toward a target (intention tremor) or is present at rest, evaluation is recommended.' },
    { ageRange: '18-24 months', context: 'Fine motor control should be improving. Some hand shakiness during challenging tasks like stacking blocks is normal, but constant tremors or tremors that interfere with function should be evaluated.' },
    { ageRange: '2-3 years', context: 'Hand tremors at this age warrant evaluation. Your pediatrician may check for neurological causes. Most childhood tremors are benign, but it is important to identify the cause for appropriate management.' },
  ],
  whenNormal: ['Hand shaking only occurs during very concentrated or effortful tasks.', 'Tremor is mild and does not interfere with function.', 'Shakiness is improving as your child gains experience.', 'Tremor only happens when your child is tired or hungry.'],
  whenToMention: ['Tremor is persistent during fine motor tasks.', 'Tremor seems to worsen when reaching for objects.', 'Tremor interferes with eating, drinking, or play.', 'Tremor is present in other body parts as well.'],
  whenToActNow: ['New or sudden onset tremors.', 'Tremor is accompanied by other neurological changes like unsteadiness or weakness.'],
  relatedMilestones: ['fine-motor-grasp', 'fine-motor-coordination'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-tremors', 'baby-ataxia-signs', 'fine-motor-delay-general'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Movement Disorders in Children', url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/default.aspx' },
    { org: 'NIH', citation: 'Louis ED. Essential Tremor. Lancet Neurol. 2005;4(2):100-110', url: 'https://pubmed.ncbi.nlm.nih.gov/15664542/' },
    { org: 'CDC', citation: 'CDC - Learn the Signs. Act Early.', url: 'https://www.cdc.gov/ncbddd/actearly/index.html' },
  ],
};
