import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'occupational-therapy-feeding',
  title: 'When Does My Child Need Occupational Therapy for Feeding?',
  category: 'feeding',
  searchTerms: ['OT for feeding', 'occupational therapy feeding', 'feeding therapy needed', 'OT eating help', 'when to see feeding therapist', 'occupational therapy eating', 'feeding occupational therapy child', 'OT sensory feeding', 'feeding therapy toddler', 'occupational therapy food refusal'],
  quickAnswer: 'Occupational therapy for feeding can help children who have sensory-based food aversions, difficulty with self-feeding skills, oral motor challenges, extreme texture sensitivity, or significant food selectivity that impacts nutrition and growth. OTs address the underlying sensory and motor causes of feeding difficulties rather than just the symptoms.',
  byAge: [
    { ageRange: '0-3 months', context: 'OT may be recommended for babies with feeding difficulties related to prematurity, neurological conditions, or significant latch or sucking problems.' },
    { ageRange: '4-6 months', context: 'If baby shows extreme aversion to anything touching their face or mouth, or has significant difficulty transitioning to spoon feeding, early OT evaluation may be beneficial.' },
    { ageRange: '6-9 months', context: 'OT can help with babies who gag or vomit on all textures, refuse to touch food, or have difficulty with the oral motor skills needed for eating.' },
    { ageRange: '9-12 months', context: 'If baby is significantly behind in feeding milestones such as no finger feeding by 10 months, no texture progression, or extreme food refusal, OT evaluation is appropriate.' },
    { ageRange: '12-24 months', context: 'OT for feeding is most commonly sought during toddlerhood when extreme selectivity, sensory aversions, or poor self-feeding skills become apparent. Early intervention tends to be most effective.' },
  ],
  whenNormal: ['Child has typical picky eating but eats enough variety to grow', 'Child is progressing with feeding milestones even if slowly', 'Child has some sensory preferences but manages most foods'],
  whenToMention: ['Child has extreme sensory reactions to food such as gagging at sight or smell', 'Child cannot progress beyond purees despite months of trying', 'Child has very poor self-feeding skills for their age', 'Child\'s limited diet is affecting growth or nutrition'],
  whenToActNow: ['Child is losing weight due to inability to eat', 'Child has aspiration risk when eating', 'Child is in severe distress at every mealtime'],
  relatedMilestones: ['feeding'],
  showSelfReferral: true,
  relatedConcernSlugs: ['sensory-food-aversion', 'pediatric-feeding-disorder-signs', 'speech-therapy-feeding-swallowing'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. When to Seek Help for Feeding Problems. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Occupational Therapy Interventions for Pediatric Feeding Disorders. American Journal of Occupational Therapy, 2020.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
