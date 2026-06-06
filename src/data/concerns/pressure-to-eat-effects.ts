import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pressure-to-eat-effects',
  title: 'Does Pressuring My Child to Eat Backfire?',
  category: 'feeding',
  searchTerms: ['pressure to eat child', 'forcing child to eat', 'making child eat', 'pressuring toddler eat', 'child won\'t eat unless forced', 'coercion eating child', 'nagging child to eat', 'feeding pressure effects', 'forcing food child', 'persuading child eat more'],
  quickAnswer: 'Yes, research consistently shows that pressuring children to eat backfires. It decreases their enjoyment of food, increases picky eating, reduces their ability to self-regulate intake, and can create negative associations with mealtimes. Children who are pressured to eat tend to eat less of the pressured food, not more. A relaxed, no-pressure approach produces better long-term results.',
  byAge: [
    { ageRange: '0-3 months', context: 'Never force a baby to finish a bottle or continue feeding when showing fullness cues. Respecting satiety from the beginning builds healthy self-regulation.' },
    { ageRange: '4-6 months', context: 'When starting solids, let baby set the pace. If they close their mouth or turn away, respect that signal. Forcing the spoon in creates negative associations with eating.' },
    { ageRange: '6-9 months', context: 'Allow baby to explore food at their own pace. Do not insist they eat a certain amount. Some meals will be big and others small.' },
    { ageRange: '9-12 months', context: 'Resist the urge to count bites or insist baby eat more. Trust that a healthy baby will eat what they need when offered regular meals and snacks in a pressure-free environment.' },
    { ageRange: '12-24 months', context: 'Toddler appetites naturally decrease as growth slows. Pressuring a toddler to eat more than they want can lead to food refusal, mealtime battles, and long-term negative eating patterns. Your role is to offer; their role is to decide how much to eat.' },
  ],
  whenNormal: ['You offer food without insisting child eat it', 'You accept when your child says they are done', 'Mealtime is generally relaxed even when child eats less than you expected'],
  whenToMention: ['You find it very difficult to stop pressuring your child to eat', 'Mealtime has become a battle every day', 'You are worried your child is not eating enough and feel compelled to force feed'],
  whenToActNow: ['Your child has developed severe anxiety about eating or mealtimes', 'Your child has stopped eating almost entirely and pressure has made it worse'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['responsive-feeding-approach', 'clean-plate-mentality-harmful', 'food-as-reward-problems'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Pressure-Free Feeding. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Picky-Eaters.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Parental Control in Feeding and Its Effect on Children\'s Eating. Appetite, 2018.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
