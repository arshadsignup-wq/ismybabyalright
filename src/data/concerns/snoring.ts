import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'snoring',
  title: 'Baby or Toddler Snoring',
  category: 'sleep',
  searchTerms: [
    'baby snoring',
    'toddler snoring',
    'baby snoring in sleep',
    'is it normal for babies to snore',
    'baby snoring when congested',
    'toddler snoring every night',
    'loud snoring baby',
    'baby snoring and breathing hard',
    'newborn snoring',
    'child snoring should I worry',
  ],
  quickAnswer:
    'Occasional, quiet snoring is common in babies and toddlers, especially during colds or congestion. However, loud snoring that occurs most nights could be a sign of enlarged tonsils or adenoids and may warrant evaluation, particularly if accompanied by pauses in breathing or restless sleep.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns are naturally noisy breathers. Their tiny nasal passages are easily congested by normal mucus, dry air, or milk residue, and this can produce snoring or snorting sounds. Using saline drops and a bulb syringe before feeds and sleep can help. True snoring (the vibrating sound of tissue in the airway) is less common at this age and should be mentioned to your pediatrician.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Occasional snoring during a cold or upper respiratory infection is very normal. If your baby snores most nights when well, mention it at your next checkup. At this age, the most common causes are nasal congestion, enlarged adenoids, or occasionally laryngomalacia (a floppy larynx, which usually resolves by 12-18 months).',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers develop frequent upper respiratory infections (8-12 per year is normal), so intermittent snoring is expected. However, habitual snoring  -  defined as snoring more than 3 nights per week when your child is well  -  occurs in about 10% of children and should be evaluated. Enlarged tonsils and adenoids are the most common cause and are very treatable.',
    },
    {
      ageRange: '3+ years',
      context:
        'Persistent habitual snoring in preschool-age children is the most common symptom of obstructive sleep apnea, which affects about 1-5% of children. Other signs include mouth breathing during sleep, restless sleep, unusual sleeping positions (head tilted back or propped up), and daytime sleepiness or behavior problems. An evaluation by your pediatrician can determine if a referral to an ENT specialist or a sleep study is needed.',
    },
  ],
  whenNormal: [
    'Your baby snores occasionally during a cold or when congested and stops when the congestion clears',
    'Your newborn makes noisy breathing sounds but feeds and breathes comfortably when awake',
    'Snoring occurs only when your baby is in a particular position and resolves with repositioning',
    'Mild snoring that does not cause any visible breathing difficulty or sleep disruption',
  ],
  whenToMention: [
    'Your child snores most nights when they are not sick',
    'Snoring is accompanied by mouth breathing, restless sleep, or frequent position changes during the night',
    'Your child sweats excessively during sleep or sleeps in unusual positions like with their neck extended',
    'You notice daytime sleepiness, irritability, difficulty concentrating, or behavioral issues that could be related to poor sleep quality',
  ],
  whenToActNow: [
    'You observe pauses in breathing during sleep lasting more than a few seconds, followed by a gasp or snort',
    'Your baby or toddler turns blue or very pale during sleep or has episodes of labored breathing with rib retractions',
    'Snoring is accompanied by a high-pitched crowing sound (stridor) that worsens with feeding, crying, or respiratory illness',
  ],
  relatedMilestones: [
    'sleep-consolidation',
    'breathing-development',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Snoring, Sleep Apnea, and Your Child. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Snoring-Sleep-Apnea-and-Your-Child.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Diagnosis and Management of Childhood Obstructive Sleep Apnea Syndrome. Pediatrics, 2012.',
      url: 'https://publications.aap.org/pediatrics/article/130/3/e714/30096/Diagnosis-and-Management-of-Childhood-Obstructive',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Sleep and Sleep Disorders.',
      url: 'https://www.cdc.gov/sleep/index.html',
    },
  ],
};
