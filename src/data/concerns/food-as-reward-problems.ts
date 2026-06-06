import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'food-as-reward-problems',
  title: 'Is Using Food as a Reward Harmful?',
  category: 'feeding',
  searchTerms: ['food as reward child', 'bribing with food', 'candy as reward', 'food reward bad', 'using treats as bribe', 'food reward behavior', 'rewarding with dessert', 'food as motivation child', 'candy for good behavior', 'snack as reward problems'],
  quickAnswer: 'Research consistently shows that using food as a reward can lead to unhealthy eating patterns. It teaches children to eat when they are not hungry, increases preference for reward foods (usually sweets), and can contribute to emotional eating later in life. Instead, use non-food rewards like stickers, extra playtime, or special activities.',
  byAge: [
    { ageRange: '0-3 months', context: 'Not applicable as babies are not eating solids.' },
    { ageRange: '4-6 months', context: 'Not applicable for this age group.' },
    { ageRange: '6-9 months', context: 'This is an ideal time to establish neutral attitudes toward all foods. Avoid praising baby excessively for eating certain foods while showing disappointment about others.' },
    { ageRange: '9-12 months', context: 'Begin treating all foods neutrally. Do not use one food to bribe baby to eat another. All foods served are acceptable options.' },
    { ageRange: '12-24 months', context: 'This is when food rewards become most tempting. Resist using treats to manage behavior. Saying "eat your vegetables and you can have dessert" teaches children that vegetables are undesirable and dessert is the goal. Serve dessert as part of the meal in small portions or offer it on some nights without conditions.' },
  ],
  whenNormal: ['You occasionally use a special food to celebrate but do not tie it to behavior', 'You serve all foods as neutral options at mealtime', 'You use non-food rewards like stickers and activities for behavior management'],
  whenToMention: ['You find yourself relying on food rewards frequently and want to change', 'Your child only eats certain foods if bribed with treats', 'You are concerned that food reward patterns may be developing into unhealthy eating habits'],
  whenToActNow: ['Your child is showing signs of emotional eating or binge eating', 'Your child has an unhealthy relationship with food that causes significant distress'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['pressure-to-eat-effects', 'clean-plate-mentality-harmful', 'dessert-withholding-strategy'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Healthy Eating Habits. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Food as Reward and Its Effect on Children\'s Eating Behavior. Appetite, 2019.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
