import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-standing-in-crib-wont-lie-down',
  title: 'Baby Stands in Crib but Won\'t Lie Back Down',
  category: 'sleep',
  searchTerms: [
    'baby standing in crib won\'t lie down',
    'baby pulls up in crib can\'t get down',
    'baby stands in crib crying',
    'baby stuck standing in crib',
    'baby pulls to stand at bedtime',
    'baby won\'t sit down in crib',
    'baby standing at nap time',
    'how to get baby to lie down in crib',
    'baby practicing standing at bedtime',
    'baby keeps standing up in crib at night',
  ],
  quickAnswer:
    'When babies learn to pull up to standing (typically 8-10 months), they often practice this exciting new skill at bedtime and during naps. The problem is that many babies learn to pull up before they learn to sit back down, which can leave them stuck and upset. This phase is temporary and usually resolves within 1-3 weeks as they learn to lower themselves.',
  byAge: [
    {
      ageRange: '7-9 months',
      context:
        'Some early movers begin pulling to stand around 7-8 months. If your baby pulls up and gets stuck, calmly lay them back down and offer brief comfort. Avoid turning this into a game or giving too much attention, as this can reinforce the behavior. During the day, practice the skill of getting from standing to sitting by showing your baby how to bend their knees and lower themselves while holding onto furniture.',
    },
    {
      ageRange: '9-11 months',
      context:
        'This is the peak age for standing-in-crib issues. Your baby is thrilled with their new ability and wants to practice it constantly, including during sleep times. Be patient and consistent. Each time they stand, gently guide them down. Some parents find it helpful to wait a few minutes before going in, as some babies will figure out how to sit down on their own if given the chance. Practice the "getting down" motion many times during the day near the couch or a sturdy piece of furniture.',
    },
    {
      ageRange: '11-13 months',
      context:
        'Most babies have mastered getting from standing to sitting or sitting down by this age, and the crib standing issue resolves. If your baby is still standing and crying in the crib at every sleep time without showing improvement, it may be less about being stuck and more about testing limits or protesting sleep. Stay calm and consistent with your response while ensuring the mattress is at the lowest setting for safety.',
    },
    {
      ageRange: '13-18 months',
      context:
        'If standing in the crib persists at this age, your toddler can definitely get down on their own - this is more of a behavioral pattern than a physical limitation. Consistent, boring responses work best: lay them down, say a brief goodnight, and leave. Avoid engaging in lengthy interactions. Some toddlers will stand for a few minutes and then lie down on their own when they realize standing is not getting them anything.',
    },
  ],
  whenNormal: [
    'Your baby just learned to pull up and gets stuck standing in the crib - this is a common, temporary phase',
    'The standing behavior disrupts sleep for 1-3 weeks and then resolves as motor skills develop',
    'Your baby practices pulling up during every nap and bedtime - new skills are always more interesting than sleeping',
    'Your baby can sit back down during the day but forgets how when they are tired and upset in the crib',
  ],
  whenToMention: [
    'Your baby is over 12 months and genuinely cannot lower themselves from a standing position anywhere, not just in the crib',
    'The standing behavior persists for more than a month with no improvement and is severely disrupting sleep',
    'Your baby has difficulty with other motor milestones alongside this issue',
  ],
  whenToActNow: [
    'Your baby falls in the crib and hits their head hard or you are concerned about injury',
    'Your baby can climb or lean over the crib rail - lower the mattress immediately and consider a transition if they can climb out',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Movement Milestones: Babies 8-12 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-8-to-12-Months.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Sleep and Developmental Milestones. SleepFoundation.org, 2024.',
      url: 'https://www.sleepfoundation.org/baby-sleep',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby by Nine Months.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-9mo.html',
    },
  ],
  relatedConcernSlugs: ['baby-climbing-crib-rails', 'sleep-regression-8-months', 'baby-fighting-sleep'],
};
