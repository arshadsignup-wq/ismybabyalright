import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-sleep-consultant-safety-concerns',
  title: 'Are Baby Sleep Consultants Safe? What Parents Should Know',
  category: 'sleep',
  searchTerms: [
    'baby sleep consultant safe',
    'sleep consultant qualifications',
    'unregulated sleep consultant',
    'baby sleep coach dangerous advice',
    'sleep consultant told me to put baby on stomach',
    'is my sleep consultant qualified',
    'sleep consultant vs pediatrician',
    'baby sleep consultant SIDS risk',
    'how to find safe sleep consultant',
    'sleep consultant certification meaning',
    'baby sleep expert credentials',
    'sleep training consultant red flags',
    'sleep consultant bad advice',
    'infant sleep consultant regulation',
  ],
  quickAnswer:
    'The baby sleep consulting industry is unregulated - anyone can call themselves a "sleep consultant" with no medical training or standardized certification. Investigations have found consultants giving advice that directly contradicts safe sleep guidelines, including recommending face-down sleeping. Always verify that any sleep advice aligns with the AAP safe sleep guidelines, and consult your pediatrician before following a sleep consultant\'s recommendations, especially regarding sleep position, environment, or feeding changes.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'This is the highest-risk period for SIDS, and safe sleep practices are critical. No sleep consultant should recommend anything other than back sleeping on a firm, flat surface with no loose bedding. Be especially wary of consultants who claim they can "sleep train" babies under 4 months - most pediatric sleep experts agree this is too early. Some consultants recommend practices like extended crying periods or restricting night feeds in very young babies, which can be harmful. If a sleep consultant recommends anything that contradicts your pediatrician or the AAP Safe Sleep guidelines, follow your pediatrician.',
    },
    {
      ageRange: '4-12 months',
      context:
        'This is the age range where many parents seek sleep consultants, and evidence-based sleep training can be appropriate. A responsible consultant should ask about your baby\'s health history, feeding patterns, and developmental stage before making recommendations. Red flags include: recommending stomach sleeping, ignoring feeding cues to maintain a rigid schedule, guaranteeing specific outcomes, discouraging you from contacting your pediatrician, or using fear-based tactics. Good consultants work within AAP guidelines and encourage you to discuss plans with your doctor.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Sleep challenges in toddlers are common and some parents benefit from professional guidance. At this age, the acute SIDS risk is lower, but safe sleep environment matters. Be cautious of consultants who recommend weighted blankets for toddlers under 2, locking bedroom doors, or withholding comfort during illness. A qualified consultant should consider your toddler\'s developmental stage, temperament, and any underlying medical conditions.',
    },
  ],
  whenNormal: [
    'You consulted a sleep professional who asked about your baby\'s medical history, respected AAP safe sleep guidelines, and encouraged you to keep your pediatrician informed.',
    'Your sleep consultant recommended evidence-based approaches like consistent bedtime routines, appropriate wake windows, and gradual methods.',
    'You feel uncertain about sleep advice and want to verify it with your pediatrician before implementing - this is always the right approach.',
  ],
  whenToMention: [
    'A sleep consultant recommended practices that seem to contradict what your pediatrician has told you.',
    'You are considering hiring a sleep consultant and want your pediatrician\'s input on their recommended approach.',
    'Your baby\'s sleep problems may have an underlying medical cause (reflux, sleep apnea, ear infections) that a sleep consultant is not qualified to diagnose.',
  ],
  whenToActNow: [
    'A sleep consultant told you to place your baby on their stomach to sleep, use bumpers, add blankets or pillows, or recommended a sleep position other than on the back - do not follow this advice.',
    'A sleep consultant recommended withholding feeds from a baby who needs them for growth, or suggested ignoring signs of illness to maintain a sleep schedule.',
    'Your baby\'s breathing, color, or behavior during sleep concerns you regardless of what any consultant has said.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'sleep-safe-environment-checklist',
    'sids-risk-factors',
    'baby-sleep-training-methods-comparison',
    'baby-cry-it-out-safety',
    'sleep-training-guilt-methods',
  ],
  sources: [
    {
      org: 'AAP',
      citation: 'AAP - Safe Sleep Recommendations for Infants',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022',
    },
    {
      org: 'NIH',
      citation: 'NIH Safe to Sleep Campaign - Safe Sleep Environment Guidelines',
      url: 'https://safetosleep.nichd.nih.gov/',
    },
    {
      org: 'Lullaby Trust',
      citation: 'Lullaby Trust - Safer Sleep Advice for Parents',
      url: 'https://www.lullabytrust.org.uk/safer-sleep-advice/',
    },
  ],
};
