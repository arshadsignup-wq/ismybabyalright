import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-only-sleeps-being-held',
  title: 'My Baby Only Sleeps When Being Held',
  category: 'sleep',
  searchTerms: [
    'baby only sleeps when held',
    'baby won\'t sleep unless held',
    'newborn only sleeps on me',
    'baby wakes up when put down',
    'baby needs to be held to sleep',
    'contact sleeping baby',
    'baby won\'t sleep independently',
    'how to stop holding baby to sleep',
    'baby only sleeps in arms',
    'baby wakes immediately when put down',
  ],
  quickAnswer:
    'It is completely normal and biologically expected for babies, especially newborns, to prefer sleeping while being held. Babies are born with a strong instinct to stay close to their caregiver for warmth, comfort, and safety. While this is not a problem to "fix," most families eventually need their baby to sleep independently, and gentle, gradual transitions can help when you are ready.',
  byAge: [
    {
      ageRange: '0-6 weeks',
      context:
        'In the first six weeks, your baby is adjusting to life outside the womb, and wanting to be held constantly is one of the most normal newborn behaviors. The "fourth trimester" concept recognizes that newborns still crave the closeness, warmth, and motion they experienced in utero. Swaddling, white noise, and a warm sleep surface can mimic some of these sensations when you do need to put your baby down.',
    },
    {
      ageRange: '6 weeks - 3 months',
      context:
        'Around 6-8 weeks, many families begin gently practicing putting their baby down drowsy. This does not mean your baby must fall asleep independently yet  -  it is simply an early introduction. The key is to try placing your baby down while they are very sleepy but not yet fully asleep. If they protest, picking them back up and trying again is perfectly fine. There is no spoiling at this age.',
    },
    {
      ageRange: '3-6 months',
      context:
        'This is often the most productive window for teaching independent sleep skills, as your baby\'s nervous system is more mature and circadian rhythms are established. A consistent bedtime routine becomes very important. You might try the "pick up, put down" method, where you place your baby in the crib, comfort them if they cry, and repeat as needed. Progress can be slow but cumulative.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If your baby still needs to be held to sleep at this age, it does not mean you have created a "bad habit" or done anything wrong. However, if the arrangement is no longer sustainable for you, your baby is developmentally ready for gentle sleep teaching. Starting with naps  -  when sleep pressure is high  -  can be easier than starting at bedtime. Separation anxiety may cause temporary setbacks around 8-10 months.',
    },
  ],
  whenNormal: [
    'Your newborn (under 3 months) strongly prefers being held during sleep  -  this is a biological norm',
    'Your baby can occasionally be transferred to a flat surface once deeply asleep',
    'The preference increases during illness, teething, or growth spurts and then improves',
    'Your baby is healthy, gaining weight well, and developing on track',
  ],
  whenToMention: [
    'You are unable to put your baby down at all, even when deeply asleep, and they immediately scream in an arched-back position  -  this could indicate reflux or discomfort when flat',
    'You are becoming dangerously sleep-deprived and falling asleep while holding your baby in unsafe situations',
    'Your baby is over 6 months and seems to have significant anxiety or distress beyond normal protest when separated from you',
  ],
  whenToActNow: [
    'You have fallen asleep holding your baby on a couch, recliner, or in bed with soft bedding  -  these are the highest-risk situations for infant suffocation and you should create a safe sleep plan immediately',
    'Your baby has difficulty breathing or turns blue when placed flat on their back',
  ],
  relatedMilestones: [
    'self-soothing',
    'sleep-consolidation',
    'cognitive-object-permanence',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Safe Sleep: Recommendations. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Getting Your Baby to Sleep. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Getting-Your-Baby-to-Sleep.aspx',
    },
    {
      org: 'Cleveland Clinic',
      citation:
        'Cleveland Clinic. Newborn Sleep Patterns. ClevelandClinic.org.',
      url: 'https://my.clevelandclinic.org/health/articles/14300-newborns-sleep-patterns',
    },
  ],
};
