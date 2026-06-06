import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-wont-be-put-down',
  title: 'Baby Only Sleeps When Held',
  category: 'behavior',
  searchTerms: ['baby wont sleep unless held', 'baby only sleeps when held', 'newborn wont be put down', 'baby cries when put down', 'baby needs to be held all time', 'contact napping', 'baby sleeps on chest only', 'newborn cries in crib', 'why wont baby sleep in bassinet', 'baby wants to be held constantly'],
  quickAnswer: 'It is biologically normal for newborns to want to be held and to sleep best when close to a caregiver. This does not mean you have created bad habits. Babies are hardwired to seek closeness for safety and comfort. While holding a sleeping baby is not recommended for safe sleep, there are strategies to help transition baby to a safe sleep surface.',
  byAge: [
    { ageRange: '0-1 month', context: 'Newborns spent 9 months in the warm, snug, constantly-moving environment of the womb. It is completely natural for them to prefer the warmth, heartbeat, and closeness of being held. This is not a behavior problem and you cannot spoil a newborn. However, for safe sleep, baby should be placed on a firm, flat surface on their back. Strategies to help: warm the sleep surface with a heating pad before placing baby down (remove the pad first), swaddle snugly, use white noise to mimic womb sounds, wait until baby is in deep sleep (limp arms, slow breathing) before transferring, place baby down bottom first then slowly lower the head, and try babywearing during the day to meet baby\'s need for closeness while keeping your hands free. Contact napping (baby sleeping on your chest while you are awake and alert) is enjoyable but should be done with caution.' },
    { ageRange: '1-3 months', context: 'Baby may still strongly prefer being held for sleep. This is still normal. Gradually working on putting baby down drowsy but awake can help, though many babies are not ready for this yet. Continue using the transition strategies. Some babies respond well to being placed in a swing or bouncer for supervised naps (not for overnight sleep). A consistent sleep routine can begin to help signal sleep time.' },
    { ageRange: '3-6 months', context: 'Baby is more developmentally ready to learn to fall asleep independently, though this varies widely. Gentle sleep training methods may be appropriate if desired. Continue responding to baby\'s needs while gradually encouraging independent sleep.' },
    { ageRange: '6-12 months', context: 'If baby still cannot fall asleep without being held, you may choose to work on independent sleep skills. There are many approaches from gentle to structured. Talk to your pediatrician about options that feel right for your family.' },
  ],
  whenNormal: ['Newborn prefers to be held and protests when put down', 'Baby sleeps longer stretches when held versus in a crib', 'Baby wakes immediately or within minutes of being placed on a flat surface', 'This is most intense in the first 6-8 weeks'],
  whenToMention: ['You are exhausted and struggling to safely manage holding baby for all sleep', 'You want guidance on safe sleep strategies that work for your baby', 'Baby is older than 4 months and you want to discuss sleep training approaches'],
  whenToActNow: ['You have fallen asleep while holding baby and are concerned about safety', 'You are so exhausted you feel unsafe driving or caring for baby', 'Baby is inconsolable even when held and seems to be in pain or ill'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Responding to Your Baby\'s Cues. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Safe to Sleep Campaign.', url: 'https://safetosleep.nichd.nih.gov/' },
  ],
  relatedConcernSlugs: ['newborn-fussy-evening-witching-hour', 'newborn-safe-sleep-positioning', 'newborn-irregular-sleep-patterns'],
};
