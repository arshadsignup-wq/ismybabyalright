import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-swallowing-difficulty-dysphagia',
  title: 'My Baby Has Difficulty Swallowing',
  category: 'feeding',
  searchTerms: ['baby difficulty swallowing', 'baby dysphagia', 'baby can\'t swallow food', 'baby swallowing problems', 'baby trouble swallowing', 'baby swallow evaluation', 'dysphagia infant', 'baby food gets stuck', 'baby struggles to swallow', 'swallowing disorder baby'],
  quickAnswer: 'Dysphagia (difficulty swallowing) in babies can affect feeding with liquids, purees, or solid foods. Causes include neurological conditions, structural abnormalities, reflux, or oral motor delays. Signs include prolonged feeding times, coughing during feeds, food refusal, and poor weight gain. A swallowing evaluation by a speech-language pathologist can identify the problem and guide treatment.',
  byAge: [
    { ageRange: '0-3 months', context: 'Difficulty with swallowing breast milk or formula may present as prolonged feeding times (over 30 minutes), excessive drooling, coughing, or nasal regurgitation. Premature babies and those with congenital conditions are at higher risk.' },
    { ageRange: '4-6 months', context: 'If baby cannot manage thin purees and consistently coughs, chokes, or lets food dribble out, the swallowing mechanism may need evaluation.' },
    { ageRange: '6-9 months', context: 'Difficulty progressing from purees to textured foods may be related to a swallowing problem. If baby pockets food, gags excessively, or cannot clear their mouth, discuss with your pediatrician.' },
    { ageRange: '9-12 months', context: 'If swallowing difficulties persist, a videofluoroscopic swallow study (modified barium swallow) can visualize how baby swallows and identify exactly where the problem occurs. Treatment is then tailored to the findings.' },
    { ageRange: '12-24 months', context: 'Toddlers with persistent dysphagia may need ongoing feeding therapy, texture modifications, or in some cases, alternative nutrition methods. A multidisciplinary feeding team provides comprehensive care.' },
  ],
  whenNormal: ['Baby occasionally has difficulty with a new texture but manages most foods', 'Baby coughs once in a while during feeds but recovers quickly', 'Baby sometimes takes longer with challenging textures'],
  whenToMention: ['Baby takes more than 30-40 minutes to complete most feeds', 'Baby coughs, chokes, or has a wet voice during most meals', 'Baby consistently pockets food or cannot clear food from their mouth', 'Baby is not gaining weight despite adequate food offerings'],
  whenToActNow: ['Baby cannot swallow liquids or food at all', 'Baby turns blue or stops breathing during feeding', 'Baby has recurrent aspiration pneumonia'],
  relatedMilestones: ['feeding'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-aspiration-risk-feeding', 'speech-therapy-feeding-swallowing', 'thickened-feeds-baby'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Swallowing Disorders in Children. Pediatrics, 2021.', url: 'https://publications.aap.org/' },
    { org: 'NIH', citation: 'National Institutes of Health. Pediatric Dysphagia: Assessment and Management. Dysphagia, 2020.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
