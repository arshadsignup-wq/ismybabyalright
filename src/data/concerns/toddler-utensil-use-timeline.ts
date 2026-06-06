import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-utensil-use-timeline',
  title: 'When Should My Toddler Use a Fork and Spoon?',
  category: 'feeding',
  searchTerms: ['toddler utensil use', 'when toddler use spoon', 'toddler fork and spoon age', 'toddler eating with utensils', 'teaching toddler to use spoon', 'toddler utensil milestones', 'toddler self feeding spoon', 'when baby use fork', 'toddler utensil practice', 'toddler spoon feeding themselves'],
  quickAnswer: 'Most babies show interest in holding a spoon around 12-15 months, but proficient self-feeding with utensils typically develops between 18 and 24 months. A spoon is usually mastered before a fork. Pre-loaded spoons (where you load the food and hand it to baby) are a great bridge. Expect lots of missed mouths and dropped food as coordination develops.',
  byAge: [
    { ageRange: '0-3 months', context: 'Not applicable.' },
    { ageRange: '4-6 months', context: 'Baby is being spoon-fed by a caregiver. Let baby hold an extra spoon during meals to get used to the feel.' },
    { ageRange: '6-9 months', context: 'Give baby their own spoon to hold and explore while you feed with another spoon. Baby will mostly bang the spoon and play with it. This is great practice.' },
    { ageRange: '9-12 months', context: 'Baby may begin dipping the spoon in food and bringing it toward their mouth. Success will be inconsistent. Pre-load spoons with sticky foods like yogurt or oatmeal and let baby practice bringing it to their mouth.' },
    { ageRange: '12-24 months', context: 'Between 12-18 months, toddlers become more skilled at scooping with a spoon. Forks can be introduced around 15-18 months with soft foods. By 24 months, most toddlers can use a spoon with reasonable success and stab food with a fork. Proficiency continues to develop through age 3-4.' },
  ],
  whenNormal: ['Baby holds a spoon but mostly plays with it rather than eating from it', 'Toddler gets food on the spoon but most falls off before reaching their mouth', 'Toddler alternates between utensils and fingers at meals', 'Utensil skills develop gradually over months'],
  whenToMention: ['Toddler shows no interest in holding a spoon by 15 months', 'Toddler cannot bring a loaded spoon to their mouth by 18 months', 'Toddler has difficulty with hand coordination that affects multiple activities beyond eating'],
  whenToActNow: ['Toddler has significant weakness or stiffness in hands that prevents any self-feeding', 'Toddler has sudden loss of previously acquired utensil skills'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-independent-eating-expectations', 'baby-not-self-feeding', 'baby-pincer-grasp-feeding'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Self-Feeding Milestones. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/default.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Developmental Milestones for Toddlers. 2023.', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
  ],
};
