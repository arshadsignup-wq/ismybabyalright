import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-independent-eating-expectations',
  title: 'What Should I Expect for My Toddler\'s Self-Feeding?',
  category: 'feeding',
  searchTerms: ['toddler self feeding milestones', 'toddler independent eating', 'when toddler feed themselves', 'toddler eating independently', 'self feeding expectations age', 'toddler feeding skills', 'toddler eating development', 'when stop helping toddler eat', 'toddler eating on own', 'feeding development milestones'],
  quickAnswer: 'Self-feeding is a gradual skill that develops over the first two years. By 12 months, most babies can finger feed. By 15-18 months, toddlers use a spoon with some success. By 24 months, most toddlers can eat with reasonable independence using a spoon and fork. Full independent eating with minimal mess continues to develop through ages 3-4.',
  byAge: [
    { ageRange: '0-3 months', context: 'Baby is entirely dependent on caregiver for feeding.' },
    { ageRange: '4-6 months', context: 'Baby begins to reach for food and may grab the spoon. This is early interest in self-feeding.' },
    { ageRange: '6-9 months', context: 'Baby starts finger feeding with soft foods. They use a raking grasp and may pick up puffs, soft fruit pieces, and similar foods. Most food still comes from caregiver spoon-feeding.' },
    { ageRange: '9-12 months', context: 'Baby becomes proficient at finger feeding. They may hold their own bottle or cup. First attempts at spoon use begin. About half of intake may come from self-feeding and half from caregiver assistance.' },
    { ageRange: '12-24 months', context: 'Toddlers gradually gain independence. At 12-15 months, most can finger feed efficiently. At 15-18 months, spoon use improves. By 24 months, most toddlers can manage most of their meal with minimal help. Always offer both utensils and finger foods to support development.' },
  ],
  whenNormal: ['Toddler makes a mess but gets most food in their mouth', 'Toddler alternates between utensils and fingers', 'Toddler sometimes asks for help with certain foods', 'Skills vary from day to day and meal to meal'],
  whenToMention: ['Toddler shows no interest in self-feeding by 15 months', 'Toddler cannot finger feed effectively by 12 months', 'Toddler has difficulty with hand coordination that affects eating and other activities'],
  whenToActNow: ['Toddler has sudden loss of feeding skills they previously had', 'Toddler cannot bring any food to their mouth by 12 months'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-utensil-use-timeline', 'baby-not-self-feeding', 'self-feeding-messy-normal'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Feeding and Nutrition Milestones. HealthyChildren.org, 2024.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/default.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Important Milestones. 2023.', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
  ],
};
