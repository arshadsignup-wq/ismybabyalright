import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-apgar-score-low',
  title: 'Low Apgar Score Concerns',
  category: 'medical',
  searchTerms: [
    'low Apgar score baby',
    'Apgar score meaning',
    'baby Apgar 5',
    'low Apgar score long term',
    'what does Apgar score mean',
    'Apgar 1 minute vs 5 minute',
    'baby low Apgar normal now',
    'Apgar score below 7',
    'newborn Apgar concerns',
    'Apgar score and brain damage',
  ],
  quickAnswer:
    'The Apgar score is a quick assessment done at 1 and 5 minutes after birth, rating your baby\'s heart rate, breathing, muscle tone, reflexes, and color on a scale of 0-10. A score below 7 at 1 minute is common and often improves by 5 minutes. A low 1-minute score alone does not predict long-term problems. The 5-minute score is more important for long-term outlook.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'The Apgar score was designed to quickly assess a newborn\'s condition at birth and guide resuscitation decisions, not to predict long-term outcomes. A score of 7-10 is considered normal, 4-6 may indicate some difficulty adjusting, and 0-3 suggests the baby needs immediate medical intervention. Many babies with low 1-minute Apgar scores improve dramatically by the 5-minute assessment. Factors affecting Apgar scores include prematurity, difficult delivery, maternal medications, and congenital conditions. If your baby had a low Apgar score but subsequent examinations are normal, the prognosis is typically excellent.',
    },
    {
      ageRange: '1-3 months',
      context:
        'If your baby had a low Apgar score at birth but recovered quickly and subsequent evaluations have been normal, there is generally no reason for ongoing concern. Your pediatrician will monitor development at routine well-child visits. Babies who had persistently low Apgar scores (still low at 5 or 10 minutes) may receive more detailed neurological follow-up.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Developmental milestones continue to be monitored. Most babies with low initial Apgar scores who recovered quickly develop normally. If there were concerns about prolonged oxygen deprivation, your pediatrician may be watching more closely for early signs of developmental delay.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Continued monitoring of milestones. Research shows that a low 1-minute Apgar score alone is a poor predictor of long-term outcomes. The 5-minute score, the need for prolonged resuscitation, and subsequent neurological exams are more meaningful predictors.',
    },
  ],
  whenNormal: [
    'A 1-minute Apgar of 5-6 that improves to 7 or above by 5 minutes',
    'Your baby responded well to initial stimulation and is now feeding and behaving normally',
    'All subsequent physical and neurological exams have been normal',
    'Your pediatrician has no ongoing concerns about your baby\'s development',
  ],
  whenToMention: [
    'You have questions about what your baby\'s Apgar scores mean for their long-term health',
    'You are anxious about a low score and want reassurance',
    'Your baby had an Apgar below 7 at 5 minutes and you want to understand the follow-up plan',
  ],
  whenToActNow: [
    'These concerns are managed at the time of birth by the medical team; after discharge, any breathing difficulties, seizures, or extreme lethargy require emergency evaluation',
    'You notice developmental delays or unusual neurological symptoms in the weeks and months following a difficult birth',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Apgar Score. Pediatrics. 2015;136(4):819-822.',
      url: 'https://publications.aap.org/pediatrics/article/136/4/819/33941/The-Apgar-Score',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Apgar Score. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK470569/',
    },
  ],
  relatedConcernSlugs: ['newborn-not-crying-at-birth', 'newborn-meconium-stained-fluid'],
};
