import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-sleeping-face-down',
  title: 'My Baby Rolls Face Down in Sleep',
  category: 'sleep',
  searchTerms: [
    'baby sleeping face down',
    'baby rolls face down in sleep',
    'is it safe for baby to sleep face down',
    'baby sleeps with face in mattress',
    'baby rolls onto stomach at night',
    'should I flip baby back over when face down',
    'baby prefers sleeping on stomach',
    'face down sleeping SIDS risk',
    'when can baby sleep on stomach',
    'baby rolling to stomach while sleeping',
  ],
  quickAnswer:
    'Once your baby can roll from back to tummy and tummy to back independently, it\'s safe to let them find their preferred sleep position, even if it\'s face down. Always place your baby on their back to start sleep, but if they roll over on their own, you don\'t need to keep repositioning them.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'Babies this young should always sleep on their back and cannot yet roll independently. If you find your very young baby face down, gently return them to their back. Ensure the sleep surface is firm and flat with no loose bedding, pillows, or soft toys. Tummy time while awake and supervised helps build the strength your baby will need to roll safely.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Many babies learn to roll from back to tummy around this age, often before they can roll the opposite direction. This can be stressful as they may roll face down and become upset or "stuck." Continue placing your baby on their back to start sleep, but once they roll on their own, the AAP says it\'s okay to leave them. Ensure a safe sleep environment with no soft bedding, and give plenty of supervised tummy time during the day to build strength for rolling both ways.',
    },
    {
      ageRange: '6-9 months',
      context:
        'By now, most babies can roll both directions confidently. Many babies this age strongly prefer sleeping on their stomach once they discover it, as it can feel more secure and allow them to push up or change position easily. As long as your baby can move their head freely to avoid suffocation and you\'re following safe sleep guidelines (firm mattress, empty crib, no blankets or bumpers), stomach sleeping is developmentally appropriate once they can roll both ways.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Older babies are very mobile and will move all around the crib during sleep, including rolling, sitting up, or pulling to stand. You cannot control their position, nor should you try. The key is maintaining a safe sleep space. Some parents worry about face-down sleeping, but if your baby has good head control and mobility, they will naturally turn their head to breathe. Continue to place them on their back initially, but let them settle into their preferred position.',
    },
  ],
  whenNormal: [
    'Your baby is at least 4-6 months old and can roll from back to tummy independently',
    'Your baby can turn their head freely from side to side while on their stomach',
    'Your baby rolls to their tummy during sleep but seems comfortable and breathes normally',
    'You\'re placing your baby on their back to start sleep and they\'re choosing to roll over on their own',
    'Your baby\'s sleep environment is safe: firm mattress, fitted sheet only, no loose bedding or soft objects',
  ],
  whenToMention: [
    'Your baby is under 4 months and frequently ends up face down despite being placed on their back',
    'Your baby seems to have difficulty lifting or turning their head when on their stomach during awake time',
    'You notice your baby snoring loudly, breathing through their mouth, or having pauses in breathing',
    'Your baby seems excessively tired during the day or you\'re concerned about their development',
  ],
  whenToActNow: [
    'Your baby has stopped breathing, is gasping, or has a blue or grey color around the lips',
    'Your baby is unresponsive or extremely difficult to wake',
    'You find your baby in an unsafe sleep situation (face buried in soft bedding, wedged in a dangerous position)',
  ],
  relatedMilestones: [
    'gross-motor-rolling',
    'head-control',
    'trunk-strength',
    'sleep-position-independence',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Safe Sleep Recommendations. HealthyChildren.org, 2022.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Back to Sleep, Tummy to Play. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Back-to-Sleep-Tummy-to-Play.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Safe Sleep for Babies. CDC.gov.',
      url: 'https://www.cdc.gov/sids/about/safe-sleep-baby.htm',
    },
  ],
};
