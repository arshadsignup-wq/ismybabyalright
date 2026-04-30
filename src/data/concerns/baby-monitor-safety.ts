import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-monitor-safety',
  title: 'Baby Breathing Monitors and Wearable Safety',
  category: 'sleep',
  searchTerms: [
    'owlet monitor safety',
    'baby breathing monitor',
    'owlet sock baby',
    'baby oxygen monitor',
    'baby wearable monitor',
    'snuza monitor baby',
    'baby movement monitor',
    'baby monitor false alarm',
    'do I need a baby breathing monitor',
    'baby monitor SIDS prevention',
    'pulse oximeter baby sleep',
    'baby heart rate monitor sleep',
  ],
  quickAnswer:
    'Consumer baby breathing monitors and wearable pulse oximeters (like sock-style monitors) are popular among parents, but the AAP and FDA do not recommend them as medical devices for preventing SIDS. These products have not been shown to reduce the risk of SIDS, and they can cause unnecessary anxiety through false alarms. The most effective SIDS prevention strategies remain placing your baby on their back to sleep, using a firm flat mattress, and keeping the sleep area free of loose bedding.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'This is the age when SIDS risk is highest and when parents are most likely to consider breathing monitors. While the desire to watch your baby constantly is understandable, consumer wearable monitors are not regulated as medical devices and can give both false alarms and false reassurance. The FDA has warned that some consumer products may not accurately measure vital signs in infants. Instead, focus on proven safe sleep practices: back sleeping, a firm mattress in a bare crib, room-sharing (but not bed-sharing), and a smoke-free environment.',
    },
    {
      ageRange: '6-12 months',
      context:
        'SIDS risk decreases significantly after 6 months, and many parents who used monitors begin to transition away from them. If you have been relying on a monitor, gradually building confidence in your baby\'s ability to sleep safely without one is a healthy step. Babies who can roll both ways can be left in whatever position they choose. If your pediatrician has prescribed a medical-grade monitor for a specific condition (like apnea of prematurity), follow their guidance on when to stop.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Breathing monitors are not needed or recommended for toddlers. By this age, SIDS risk is extremely low. If you still feel anxious about your child\'s sleep safety and find it hard to sleep without a monitor, consider talking to your pediatrician about your concerns. Persistent sleep-related anxiety can be a sign that you would benefit from support.',
    },
  ],
  whenNormal: [
    'Occasional pauses in a newborn\'s breathing (called periodic breathing) lasting up to 10 seconds',
    'Slightly irregular breathing patterns during sleep, especially in young babies',
    'A consumer monitor giving an occasional false alarm that your baby is fine',
    'Feeling anxious about SIDS, which is a very common concern among new parents',
  ],
  whenToMention: [
    'You are experiencing significant anxiety about your baby\'s breathing during sleep that is affecting your ability to rest',
    'A consumer monitor is frequently alarming and you are unsure whether to trust it',
    'You want to discuss whether a medical-grade home monitor is appropriate for your baby',
    'Your baby was premature and you have questions about apnea monitoring',
  ],
  whenToActNow: [
    'Your baby stops breathing for more than 20 seconds or turns blue or limp',
    'Your baby has an apparent life-threatening event (ALTE) or brief resolved unexplained event (BRUE) where they stop breathing, turn pale or blue, or become limp',
    'Your baby needs stimulation to restart breathing',
    'Your baby was born prematurely and has been diagnosed with apnea of prematurity',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['sids-risk-factors', 'baby-sleeping-face-down', 'apnea-spells-baby', 'sleep-apnea-signs'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Safe Sleep Recommendations. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022',
    },
    {
      org: 'FDA',
      citation:
        'U.S. Food and Drug Administration. Do Not Use Infant Sleep Positioners Due to the Risk of Suffocation.',
      url: 'https://www.fda.gov/consumers/consumer-updates/do-not-use-infant-sleep-positioners-due-risk-suffocation',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Reducing SIDS Risk. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Reducing-the-Risk-of-SIDS.aspx',
    },
  ],
};
