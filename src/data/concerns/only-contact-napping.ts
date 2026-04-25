import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'only-contact-napping',
  title: 'Baby Will Only Nap While Being Held',
  category: 'sleep',
  searchTerms: [
    'baby only sleeps on me',
    'baby won\'t nap in crib',
    'contact napping baby',
    'baby has to be held to sleep',
    'baby wakes up when put down',
    'why does my baby only sleep in my arms',
    'how to stop contact napping',
    'baby naps on chest',
    'baby won\'t sleep unless held',
    'when do babies stop needing to be held to sleep',
    'transfer sleeping baby to crib',
  ],
  quickAnswer:
    'Contact napping  -  where your baby will only sleep in your arms or on your chest  -  is extremely common and biologically normal, especially in the first few months. Babies are wired to seek closeness, and your warmth, heartbeat, and breathing provide powerful sleep cues. This is not a bad habit you have created; it is a normal infant need that most babies gradually grow out of.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Contact napping is at its peak during the newborn period and is developmentally expected. Your baby spent 9 months hearing your heartbeat and feeling your warmth  -  of course they sleep best on you. Safety note: if you are contact napping, stay awake and ensure the baby is on their back on your chest. If you feel drowsy, place your baby on a firm, flat surface.',
    },
    {
      ageRange: '3-5 months',
      context:
        'Many babies begin to show readiness for independent napping around this age as their awareness grows and routines become more established. You can start with small steps like putting your baby down drowsy but awake for one nap per day, keeping expectations low. If it does not work yet, that is completely fine  -  try again in a week or two.',
    },
    {
      ageRange: '5-8 months',
      context:
        'Most babies develop the ability to nap independently during this window, though the timeline varies widely. A consistent pre-nap routine (5 minutes of dimming lights, a book or song, then placing in the crib) helps signal that it is safe to sleep independently. Some babies transition easily; others need more gradual support.',
    },
    {
      ageRange: '8-12 months',
      context:
        'If your baby still strongly prefers contact naps at this age, it is worth gently working toward independent naps, not because contact napping is harmful, but because it can become unsustainable for you. Separation anxiety peaks around 8-10 months and may make this harder temporarily. A gradual approach (sitting beside the crib, slowly moving farther away) works well for many families.',
    },
  ],
  whenNormal: [
    'Your newborn or young baby (under 4 months) will only sleep while being held',
    'Your baby naps independently sometimes but prefers being held when overtired, teething, or ill',
    'Your baby sleeps fine at night in the crib but wants to be held for daytime naps',
    'Contact napping started during an illness or developmental regression and increased temporarily',
  ],
  whenToMention: [
    'Your baby is over 8 months and cannot sleep in any position or location other than being held, even at night, and it is significantly affecting your rest and wellbeing',
    'Your baby seems to need to be held upright to sleep comfortably, which could suggest reflux or airway discomfort',
    'You are so exhausted from contact napping that you are falling asleep while holding your baby, which is a safety concern',
  ],
  whenToActNow: [
    'You have fallen asleep while holding your baby on a sofa, recliner, or other soft surface  -  these are the highest-risk sleep environments. If this is happening regularly, please talk to your pediatrician about safe sleep strategies.',
    'Your baby seems unable to lie flat without choking, gasping, or significant distress that suggests a breathing or digestive issue',
  ],
  relatedMilestones: [
    'self-soothing',
    'sleep-consolidation',
    'emotional-attachment',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Safe Sleep: Back to Sleep, Tummy to Play. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Back-to-Sleep-Tummy-to-Play.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Keep Your Sleeping Baby Safe. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Safe Sleep for Babies.',
      url: 'https://www.cdc.gov/sids/about/index.html',
    },
  ],
};
