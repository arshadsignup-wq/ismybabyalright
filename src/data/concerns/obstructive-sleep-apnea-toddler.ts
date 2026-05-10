import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'obstructive-sleep-apnea-toddler',
  title: 'Obstructive Sleep Apnea in Toddlers',
  category: 'medical',
  searchTerms: [
    'sleep apnea toddler',
    'toddler snoring',
    'obstructive sleep apnea child',
    'baby stops breathing in sleep',
    'toddler snoring loud',
    'sleep apnea symptoms toddler',
    'toddler mouth breathing sleep',
    'child snoring and breathing pauses',
  ],
  quickAnswer:
    'Obstructive sleep apnea (OSA) in toddlers occurs when the airway becomes partially or completely blocked during sleep, causing pauses in breathing, snoring, and disrupted sleep. The most common cause in children ages 2-6 is enlarged tonsils and adenoids. OSA affects 1-5% of children and can lead to behavioral problems, daytime sleepiness, poor growth, and learning difficulties if untreated. Treatment often involves adenotonsillectomy (surgical removal of tonsils and adenoids).',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'True obstructive sleep apnea is uncommon in newborns but can occur in babies with craniofacial abnormalities (like Pierre Robin sequence), severe laryngomalacia, or neurological conditions. Central apnea (brain-related pauses) is more common in premature infants. If your newborn has been observed to stop breathing during sleep, snore loudly, or seem to struggle to breathe while sleeping, report this to your pediatrician immediately.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Snoring in young babies can occur from nasal congestion or laryngomalacia and is usually not OSA. However, if your baby consistently snores loudly, has observed pauses in breathing during sleep, or seems to work hard to breathe while sleeping (retractions, head extension), mention this to your pediatrician. Babies who sleep with their neck extended backward may be compensating for an obstructed airway.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies grow, mild snoring from nasal congestion usually improves. Persistent loud snoring, especially with observed pauses or gasping, is not normal at any age. Risk factors for OSA in infants include obesity, Down syndrome, craniofacial abnormalities, and neuromuscular conditions. If your baby has any of these risk factors along with snoring, discuss sleep apnea screening with your pediatrician.',
    },
    {
      ageRange: '12 months+',
      context:
        'OSA becomes more common in toddlers as adenoids and tonsils grow. Signs include loud snoring most nights, observed breathing pauses during sleep, restless sleep, mouth breathing, sweating during sleep, unusual sleep positions (neck hyperextended), and daytime behavioral changes (irritability, hyperactivity). A sleep study (polysomnography) is the gold standard for diagnosis. If tonsils and adenoids are enlarged, adenotonsillectomy is the first-line treatment and resolves OSA in most children.',
    },
  ],
  whenNormal: [
    'Baby occasionally snores when congested from a cold',
    'Baby makes soft breathing sounds during sleep without pauses or distress',
    'Toddler snores lightly for a few nights during an upper respiratory infection',
    'Baby sleeps quietly in various positions without neck extension or mouth breathing',
  ],
  whenToMention: [
    'Your toddler snores loudly most nights, even when not sick',
    'You have observed your child pause in breathing or gasp during sleep',
    'Your toddler is a restless sleeper, mouth breather, or has behavioral or growth concerns',
  ],
  whenToActNow: [
    'Your child stops breathing during sleep for more than 10-20 seconds or turns blue -- call 911',
    'Your child has severe difficulty breathing during sleep with significant retractions or stridor',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Clinical Practice Guideline: Diagnosis and Management of Childhood Obstructive Sleep Apnea Syndrome. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/130/3/576/30095/Diagnosis-and-Management-of-Childhood-Obstructive',
    },
    {
      org: 'NIH',
      citation:
        'National Heart, Lung, and Blood Institute. Sleep Apnea. NHLBI, NIH.',
      url: 'https://www.nhlbi.nih.gov/health/sleep-apnea',
    },
  ],
};
