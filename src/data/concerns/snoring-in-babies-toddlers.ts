import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'snoring-in-babies-toddlers',
  title: 'Snoring in Babies and Toddlers',
  category: 'sleep',
  searchTerms: [
    'baby snoring',
    'toddler snoring',
    'baby snores while sleeping',
    'is it normal for baby to snore',
    'baby snoring and breathing heavy',
    'toddler snoring every night',
    'baby snoring congestion',
    'snoring in infants',
    'baby snoring sleep apnea',
    'toddler snoring enlarged tonsils',
  ],
  quickAnswer:
    'Occasional snoring during a cold or when congested is common and usually harmless. However, habitual snoring  -  snoring most nights when healthy  -  occurs in about 10-12% of children and may indicate a condition called obstructive sleep apnea (OSA), which can affect development, behavior, and health if untreated. Any child who snores regularly when not sick should be evaluated by their pediatrician.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns are noisy breathers  -  they snort, gurgle, and make all sorts of sounds during sleep, which is usually related to their small nasal passages and normal nasal congestion. Occasional snoring during a cold is expected. However, true habitual snoring, snoring with pauses in breathing, or snoring with rib retractions (skin pulling in between the ribs) at this age should be evaluated, as it may indicate a structural issue such as laryngomalacia or other airway abnormality.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Some congestion-related snoring is common, especially if your baby has a cold or allergies. Babies who breathe through their mouth during sleep or snore most nights even when well should be discussed with the pediatrician. The most common causes of habitual snoring at this age include nasal congestion from milk or formula reflux and, less commonly, enlarged adenoids.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, habitual snoring is more likely to be related to enlarged adenoids or tonsils, which are growing as part of normal immune development. Signs that snoring may be affecting your baby include restless sleep, unusual sleeping positions (neck extended, sleeping sitting up), sweating during sleep, and daytime mouth breathing. If snoring is loud and occurs most nights, mention it at your next well-visit.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Adenoids and tonsils are at their largest relative to the airway during the toddler and preschool years, making this a peak age for snoring and obstructive sleep apnea. Warning signs include snoring most nights, observed pauses in breathing, gasping or choking during sleep, restless sleep, night sweats, and bedwetting in previously dry children. Daytime consequences may include behavioral issues, hyperactivity, difficulty concentrating, and excessive daytime sleepiness. An evaluation and possible sleep study may be recommended.',
    },
  ],
  whenNormal: [
    'Your baby snores occasionally during a cold or when congested, and the snoring resolves when the illness clears',
    'A newborn makes various noisy breathing sounds during sleep but breathes comfortably and feeds well',
    'Very mild, quiet snoring occurs occasionally but your child sleeps well, breathes regularly, and has no daytime symptoms',
  ],
  whenToMention: [
    'Your baby or toddler snores most nights even when not congested or sick',
    'Your child is a habitual mouth breather during the day and night',
    'Snoring is accompanied by restless sleep, unusual sleeping positions, or night sweats',
    'Your toddler has behavioral issues such as hyperactivity, inattention, or excessive crankiness that could be related to poor sleep quality',
  ],
  whenToActNow: [
    'You observe pauses in your baby\'s breathing during sleep, followed by gasping or choking  -  this may be obstructive sleep apnea and needs prompt evaluation',
    'Your baby has noisy breathing with visible rib retractions, nasal flaring, or color changes (blue lips or face) during sleep  -  seek immediate medical attention',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'Marcus CL, et al. Diagnosis and Management of Childhood Obstructive Sleep Apnea Syndrome. Pediatrics, 2012.',
      url: 'https://publications.aap.org/pediatrics/article/130/3/e714/30225/Diagnosis-and-Management-of-Childhood-Obstructive',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sleep Apnea Detection. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Sleep-Apnea-Detection.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Heart, Lung, and Blood Institute. Sleep Apnea: What Is Sleep Apnea?',
      url: 'https://www.nhlbi.nih.gov/health/sleep-apnea',
    },
  ],
};
