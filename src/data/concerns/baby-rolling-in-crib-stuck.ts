import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-rolling-in-crib-stuck',
  title: 'Baby Rolls Over in Crib and Gets Stuck',
  category: 'sleep',
  searchTerms: [
    'baby stuck on tummy in crib',
    'baby rolls over can\'t roll back',
    'baby rolling in crib stuck',
    'baby rolls onto stomach sleep',
    'baby trapped on tummy at night',
    'baby stuck after rolling in crib',
    'baby cries when rolls over in crib',
    'what to do when baby rolls in sleep',
    'baby flips to tummy can\'t get back',
    'rolling in crib safety',
  ],
  quickAnswer:
    'When babies first learn to roll (typically 4-6 months), they often roll from back to tummy but cannot yet roll back. This is a common and usually brief phase. Always place your baby on their back to sleep, but if they roll onto their tummy on their own during sleep, you do not need to flip them back, as long as the sleep surface is firm and flat with no loose bedding.',
  byAge: [
    {
      ageRange: '3-5 months',
      context:
        'This is when many babies first learn to roll, often catching parents by surprise. If your baby rolls to their tummy and gets upset but cannot roll back, you can gently flip them. However, this may become a cycle of flipping and re-rolling. Practice tummy time during the day to strengthen the muscles needed for rolling in both directions. Most babies learn to roll back within 2-4 weeks of learning to roll to their tummy. Stop swaddling once your baby shows signs of rolling.',
    },
    {
      ageRange: '5-7 months',
      context:
        'Most babies become proficient at rolling both ways by this age. During the transition, your baby may roll to their tummy and fuss initially but then learn to sleep comfortably in that position. The AAP states that once a baby can roll independently, you do not need to reposition them. Ensure the crib is completely bare - no bumpers, blankets, or loose items. A sleep sack is the safest option for warmth.',
    },
    {
      ageRange: '7-9 months',
      context:
        'By this age, most babies roll freely and may have a preferred sleep position. Many babies who initially resisted tummy sleeping discover they actually prefer it. If your baby is still getting stuck at this age, extra tummy time practice during the day can help. Some babies are more interested in other skills (sitting, crawling) and may take a bit longer to master rolling in both directions.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Rolling should be well-established by now. Your baby likely moves around their crib freely and may change positions multiple times during the night. If your baby over 9 months consistently cannot roll from tummy to back, mention this to your pediatrician as it could indicate a motor delay worth evaluating.',
    },
  ],
  whenNormal: [
    'Your baby just learned to roll and gets stuck on their tummy occasionally - this is a temporary learning phase',
    'Your baby fusses briefly when stuck but can eventually figure out how to get comfortable or roll back',
    'After a few weeks of practice, your baby rolls freely in both directions',
    'Your baby chooses to sleep on their tummy after learning to roll independently',
  ],
  whenToMention: [
    'Your baby is over 7 months and still cannot roll from tummy to back despite regular practice',
    'Your baby seems to have significant difficulty with any rolling movement and shows limited mobility overall',
    'You are extremely anxious about your baby\'s sleep position and it is affecting your own sleep and mental health',
  ],
  whenToActNow: [
    'Your baby has difficulty breathing, makes unusual sounds, or has color changes while on their tummy',
    'Your baby seems truly trapped in a position that is restricting their breathing',
    'Your baby has a sudden loss of motor skills they previously had',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'Moon RY et al. Sleep-Related Infant Deaths: Updated 2022 Recommendations. Pediatrics. 2022;150(1):e2022057990.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Back to Sleep, Tummy to Play. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Back-to-Sleep-Tummy-to-Play.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health, Safe to Sleep Campaign. Safe Sleep for Your Baby.',
      url: 'https://safetosleep.nichd.nih.gov/',
    },
  ],
  relatedConcernSlugs: ['rolling-in-sleep', 'baby-sleeping-face-down', 'sleep-safe-environment-checklist'],
};
