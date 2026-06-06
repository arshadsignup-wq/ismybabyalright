import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'tv-during-meals-effects',
  title: 'Is TV During Meals Bad for My Baby?',
  category: 'feeding',
  searchTerms: ['tv during meals baby', 'screen time eating', 'watching tv while eating', 'screens during meals bad', 'baby eating in front of tv', 'toddler needs tv to eat', 'screen distraction meals', 'iPad during meals toddler', 'phone during baby feeding', 'screen time mealtime effects'],
  quickAnswer: 'Research shows that screen time during meals is associated with less healthy eating patterns, reduced family interaction, and poorer ability to recognize fullness cues. The AAP recommends avoiding screens during meals. Children who eat with screens tend to eat less variety and may become dependent on entertainment to eat. Turning off screens creates better eating habits long-term.',
  byAge: [
    { ageRange: '0-3 months', context: 'The AAP recommends no screen time for babies under 18 months (except video calls). Feeding time should be a time for bonding and eye contact.' },
    { ageRange: '4-6 months', context: 'When starting solids, make mealtime a focused, screen-free experience. This helps baby learn to pay attention to their food and develop eating skills.' },
    { ageRange: '6-9 months', context: 'Resist the urge to use a phone or tablet to distract baby during meals. While it may seem to help baby eat more, it prevents them from learning to eat mindfully and respond to their own hunger and fullness cues.' },
    { ageRange: '9-12 months', context: 'If screens have become part of mealtimes, gradually phase them out. Baby may eat less for a few meals during the transition but will adjust. Mealtime conversation and family interaction are more beneficial.' },
    { ageRange: '12-24 months', context: 'If your toddler will only eat with a screen, work on eliminating this dependency. Expect some resistance for a few days. Make mealtimes social and interactive instead. Toddlers who eat without screens tend to be better self-regulators and less picky.' },
  ],
  whenNormal: ['You have occasional screen exposure during meals but it is not the norm', 'You eat meals as a family without screens most of the time', 'You use screens during meals only during illness or travel'],
  whenToMention: ['Your toddler absolutely refuses to eat without a screen', 'You feel trapped in a cycle of screen-dependent eating', 'You want strategies to transition away from screens at mealtime'],
  whenToActNow: ['Your child will not eat at all without a screen and is losing weight', 'Screen dependence during meals is causing significant family stress'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-distracted-eating', 'family-meals-importance-baby', 'responsive-feeding-approach'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Media and Children. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/family-life/Media/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Screen Time and Eating Behavior in Children. Appetite, 2021.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
