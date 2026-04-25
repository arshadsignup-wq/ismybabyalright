import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'sleep-apnea-signs',
  title: 'Baby Sleep Apnea Signs',
  category: 'sleep',
  searchTerms: [
    'baby sleep apnea',
    'baby stops breathing in sleep',
    'baby pauses breathing sleep',
    'signs of sleep apnea in babies',
    'infant sleep apnea symptoms',
    'toddler sleep apnea',
    'baby gasping in sleep',
    'obstructive sleep apnea baby',
    'baby choking in sleep',
    'baby breathing pauses at night',
    'how to tell if baby has sleep apnea',
  ],
  quickAnswer:
    'Brief pauses in breathing (up to about 10 seconds) can be normal in young infants, especially premature babies, as their brainstem matures. However, pauses longer than 20 seconds, breathing accompanied by color changes or gasping, or habitual loud snoring with observed pauses should be evaluated by your pediatrician promptly.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Periodic breathing  -  clusters of breaths followed by brief pauses of up to 10 seconds  -  is normal in newborns and especially common in premature infants. This is different from true apnea. If your baby pauses breathing for longer than 20 seconds, or shorter pauses are accompanied by color changes (blue or pale), limpness, or a slowed heart rate, seek medical attention immediately.',
    },
    {
      ageRange: '3-12 months',
      context:
        'By 3-6 months, periodic breathing should become much less frequent. If your baby is snoring loudly most nights, gasping or choking during sleep, or sleeping with their neck extended (as if trying to open their airway), these could be signs of obstructive sleep apnea. Large tonsils and adenoids, craniofacial differences, or low muscle tone can contribute.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Obstructive sleep apnea in toddlers is most commonly caused by enlarged tonsils and adenoids. Key signs include loud snoring most nights, observed pauses in breathing, restless or sweaty sleep, mouth breathing, unusual sleep positions, and daytime sleepiness or behavior changes (hyperactivity, irritability). A sleep study (polysomnography) is the gold standard for diagnosis.',
    },
    {
      ageRange: '3+ years',
      context:
        'Children with untreated sleep apnea may show behavioral issues, difficulty concentrating, bedwetting, slow growth, or morning headaches in addition to nighttime symptoms. If adenotonsillectomy is recommended, it resolves the issue in about 80% of otherwise healthy children. For children with obesity, Down syndrome, or craniofacial conditions, additional management may be needed.',
    },
  ],
  whenNormal: [
    'Your newborn has periodic breathing with brief pauses of under 10 seconds followed by normal breathing, with no color changes',
    'Your baby breathes noisily when congested from a cold but breathes quietly when well',
    'Your baby occasionally sighs, pauses, or has an irregular breathing rhythm during active (REM) sleep',
  ],
  whenToMention: [
    'Your baby or toddler snores loudly most nights when not congested from a cold',
    'You have noticed your child appears to pause breathing briefly during sleep, even if they restart on their own',
    'Your child is a restless sleeper who sweats excessively, sleeps in unusual positions, or has frequent night wakings despite age-appropriate sleep habits',
    'Your child seems excessively sleepy, has difficulty concentrating, or has behavioral issues that could be related to disrupted sleep',
  ],
  whenToActNow: [
    'Your baby stops breathing for more than 20 seconds, or any pause is accompanied by blue or grey color around the lips or face',
    'Your baby or child gasps, chokes, or appears to struggle to resume breathing during sleep',
    'Your baby becomes limp, unresponsive, or requires stimulation to resume breathing',
  ],
  relatedMilestones: [
    'breathing-development',
    'sleep-consolidation',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Diagnosis and Management of Childhood Obstructive Sleep Apnea Syndrome. Pediatrics, 2012.',
      url: 'https://publications.aap.org/pediatrics/article/130/3/e714/30096/Diagnosis-and-Management-of-Childhood-Obstructive',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Snoring, Sleep Apnea, and Your Child. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Snoring-Sleep-Apnea-and-Your-Child.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Sleep and Sleep Disorders.',
      url: 'https://www.cdc.gov/sleep/index.html',
    },
  ],
};
