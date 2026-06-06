import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'sensory-food-aversion',
  title: 'Could My Child Have a Sensory Food Aversion?',
  category: 'feeding',
  searchTerms: ['sensory food aversion', 'sensory processing feeding', 'sensory issues food', 'child gags at texture', 'food texture sensitivity', 'sensory feeding disorder', 'sensory eating issues', 'texture aversion child', 'sensory processing food refusal', 'SPD eating problems'],
  quickAnswer: 'Sensory food aversion goes beyond typical picky eating. Children with sensory aversions may gag at the sight, smell, or texture of foods, have extreme reactions to food touching their skin, and eat a very limited range of textures. This can be related to sensory processing differences and may benefit from evaluation by a feeding therapist or occupational therapist.',
  byAge: [
    { ageRange: '0-3 months', context: 'Sensory issues are difficult to identify at this age. Babies who are extremely sensitive to textures on their face or mouth may show early signs.' },
    { ageRange: '4-6 months', context: 'Some babies may have strong negative reactions to the feel of food on their face or hands. Extreme gagging on smooth purees that does not improve may be an early sign.' },
    { ageRange: '6-9 months', context: 'If baby gags or vomits at the sight or smell of food, or will not touch food with their hands, sensory processing may play a role. Some sensory exploration resistance is normal, but extreme reactions warrant attention.' },
    { ageRange: '9-12 months', context: 'Difficulty progressing beyond smooth purees, extreme gagging on any texture, or refusal to touch any food could indicate sensory aversion. Mention these concerns to your pediatrician.' },
    { ageRange: '12-24 months', context: 'If your toddler has extreme food selectivity based on texture, color, or smell, and the list of accepted foods is shrinking, a feeding evaluation can help. Occupational therapy for sensory processing can make a significant difference in expanding food acceptance.' },
  ],
  whenNormal: ['Child prefers certain textures but eats enough variety to grow well', 'Child has some food preferences but gradually expands their diet', 'Child gags occasionally on challenging textures but manages most foods'],
  whenToMention: ['Child eats fewer than 15-20 foods and the list is not growing', 'Child has extreme reactions like gagging or vomiting at the sight or smell of food', 'Child refuses entire food groups or texture categories'],
  whenToActNow: ['Child is not growing due to extremely limited food acceptance', 'Child has extreme distress around food that affects daily life and family functioning'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['pediatric-feeding-disorder-signs', 'occupational-therapy-feeding', 'food-neophobia-toddler'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Sensory Processing and Feeding. Pediatrics, 2022.', url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Sensory Processing and Food Selectivity in Children. Nutrients, 2021.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
