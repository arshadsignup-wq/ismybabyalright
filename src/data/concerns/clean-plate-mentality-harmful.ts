import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'clean-plate-mentality-harmful',
  title: 'Should I Make My Child Finish Everything on Their Plate?',
  category: 'feeding',
  searchTerms: ['clean plate club', 'finish everything plate', 'must finish dinner', 'make child clean plate', 'eat everything on plate', 'no dessert until plate clean', 'wasting food child', 'finish meal requirement', 'eat all your food', 'plate clearing rule child'],
  quickAnswer: 'Requiring children to clean their plate undermines their ability to recognize and respond to their own fullness signals. This can lead to overeating, an unhealthy relationship with food, and difficulty maintaining a healthy weight later in life. Instead, serve small portions and let your child ask for more. Trust that they know when they are full.',
  byAge: [
    { ageRange: '0-3 months', context: 'Never force a baby to finish a bottle. Babies are born with excellent self-regulation of intake.' },
    { ageRange: '4-6 months', context: 'Let baby determine how much to eat at each solid food meal. Do not try to get them to finish a certain amount.' },
    { ageRange: '6-9 months', context: 'Serve small amounts and offer more if baby wants it. Do not push baby to eat more once they signal they are done.' },
    { ageRange: '9-12 months', context: 'Serve small portions on the plate. If baby eats it all and wants more, offer additional food. If not, remove the plate without comment.' },
    { ageRange: '12-24 months', context: 'Give small portions and let your toddler ask for more. If they leave food, that is okay. Avoid comments like "just two more bites" or "you hardly ate anything." These well-meaning statements teach children to ignore their fullness and eat to please adults instead.' },
  ],
  whenNormal: ['Your child eats different amounts at different meals', 'Your child leaves food on their plate sometimes', 'Your child eats a lot at some meals and very little at others'],
  whenToMention: ['You struggle with letting your child leave food on the plate due to your own upbringing', 'Your child has an unhealthy relationship with finishing food', 'You want strategies for serving appropriate portions without waste'],
  whenToActNow: ['Your child is overeating to the point of vomiting because they feel they must finish', 'Your child has extreme anxiety about leaving food on the plate'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['pressure-to-eat-effects', 'food-as-reward-problems', 'dessert-withholding-strategy'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Portion Sizes and Children\'s Eating. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Clean Plate Policies and Children\'s Weight Status. Appetite, 2017.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
