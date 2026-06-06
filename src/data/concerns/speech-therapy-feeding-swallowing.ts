import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'speech-therapy-feeding-swallowing',
  title: 'When Does My Child Need Speech Therapy for Feeding?',
  category: 'feeding',
  searchTerms: ['speech therapy feeding', 'speech therapy swallowing', 'SLP feeding help', 'swallowing therapy child', 'dysphagia therapy child', 'speech therapist feeding', 'feeding and speech therapy', 'swallowing evaluation baby', 'speech therapy eating', 'SLP feeding evaluation'],
  quickAnswer: 'Speech-language pathologists (SLPs) specialize in oral motor function and swallowing. They can help with difficulty coordinating sucking, chewing, and swallowing, aspiration risk during feeding, oral motor weakness, and swallowing disorders (dysphagia). If your child coughs, chokes, or has a wet-sounding voice during or after meals, a swallowing evaluation may be needed.',
  byAge: [
    { ageRange: '0-3 months', context: 'SLPs can help newborns with difficulty latching, weak suck, tongue tie assessment, and bottle feeding challenges. Premature babies often benefit from SLP-guided feeding therapy.' },
    { ageRange: '4-6 months', context: 'If baby has significant difficulty transitioning to spoon feeding, frequently coughs or chokes on purees, or seems unable to manage smooth textures, an SLP can assess oral motor function.' },
    { ageRange: '6-9 months', context: 'SLPs can evaluate babies who cannot chew, have difficulty moving food in their mouth, or seem to have weak oral muscles for age-appropriate feeding skills.' },
    { ageRange: '9-12 months', context: 'If baby frequently aspirates (food or liquid goes into the airway) during meals, has a wet or gurgly voice after eating, or cannot manage expected textures, a swallowing study may be recommended.' },
    { ageRange: '12-24 months', context: 'Toddlers who pocket food, cannot chew age-appropriate textures, drool excessively during meals, or have chronic coughing while eating may benefit from SLP evaluation. Many SLPs who treat feeding also address speech delays, as oral motor skills overlap.' },
  ],
  whenNormal: ['Child has occasional coughing or gagging while learning new textures', 'Child is progressing with chewing and swallowing skills over time', 'Child has some difficulty with new textures but manages most foods'],
  whenToMention: ['Child coughs or chokes during most meals', 'Child has a wet or gurgly voice after eating or drinking', 'Child cannot chew food by 15 months', 'Child seems to have difficulty swallowing food or liquid'],
  whenToActNow: ['Child appears to aspirate food or liquid (goes into the wrong pipe) regularly', 'Child has recurrent pneumonia that may be aspiration-related', 'Child cannot swallow food and is at risk of choking'],
  relatedMilestones: ['feeding'],
  showSelfReferral: true,
  relatedConcernSlugs: ['occupational-therapy-feeding', 'baby-aspiration-risk-feeding', 'baby-swallowing-difficulty-dysphagia'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. When to See a Speech-Language Pathologist. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Pediatric Dysphagia. GI Motility Online, 2020.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
