import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-regression-after-move',
  title: 'Toddler Regression After a Move or Big Life Change',
  category: 'behavior',
  searchTerms: ['toddler regression after move', 'toddler behavior change after moving', 'toddler regression new sibling', 'toddler regression after life change', 'toddler acting like baby again', 'toddler regression after divorce', 'toddler regression after trauma', 'toddler sleep regression after move', 'toddler clingy after move', 'toddler potty regression after move'],
  quickAnswer: 'It is very common for toddlers to temporarily regress after a major life change such as a move, the arrival of a new sibling, starting daycare, a parent returning to work, or changes in family structure. Regression means your toddler may revert to earlier behaviors - having potty accidents after being trained, wanting a bottle again, increased clinginess, sleep disruptions, or baby talk. This is a normal stress response, not a sign that development has been lost. With patience, routine, and emotional support, most regressions resolve within a few weeks to a couple of months.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies under 1 year are sensitive to changes in routine and environment but do not "regress" in the same way toddlers do because they have fewer established skills to lose. You may notice increased fussiness, clinginess, sleep disruption, or feeding changes after a move or major change. Maintaining familiar routines (same bedtime routine, same loveys and sleep environment) as much as possible during transitions helps babies adjust. Most babies settle within 1-2 weeks of a change.' },
    { ageRange: '1-3 years', context: 'Toddler regression after a big change is extremely common and can include: potty training setbacks, increased tantrums, returning to baby talk, wanting a pacifier or bottle again, sleep disruptions, new separation anxiety, and clinginess. Your toddler is not being manipulative - they are coping with stress the only way they know how. Help by: maintaining as much routine as possible, offering extra comfort and attention, validating their feelings ("Moving is hard. You miss your old house"), being patient with setbacks, and not punishing regressive behaviors. Most regressions resolve within 2-8 weeks as your child adjusts.' },
  ],
  whenNormal: ['Temporary potty training setbacks after a move or new sibling', 'Increased clinginess and separation anxiety for a few weeks', 'Sleep disruptions that gradually improve', 'Baby talk or wanting a bottle again briefly', 'More tantrums and emotional sensitivity during the adjustment period'],
  whenToMention: ['Regression is lasting longer than 2 months without improvement', 'Your child is extremely anxious, having nightmares, or showing signs of persistent distress', 'Regression includes loss of language or social skills (not just behavior changes)', 'You are concerned about how your child is coping with a specific change'],
  whenToActNow: ['Loss of previously acquired developmental milestones (language, motor skills) rather than just behavioral regression', 'Signs of significant anxiety or depression: persistent withdrawal, loss of interest in play, persistent sadness', 'Regression after a traumatic event combined with fearfulness, flashbacks, or extreme avoidance behaviors'],
  relatedMilestones: ['social-emotional'],
  showSelfReferral: false,
  relatedConcernSlugs: ['separation-anxiety', 'tantrums', 'sleep-regression', 'baby-regression-after-starting-daycare'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Helping Children Adjust to a Move. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/Helping-Children-Adjust-to-a-Move.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Preparing Your Child for a New Sibling. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/Preparing-Your-Child-for-a-New-Sibling.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Stress and Regression in Young Children.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
