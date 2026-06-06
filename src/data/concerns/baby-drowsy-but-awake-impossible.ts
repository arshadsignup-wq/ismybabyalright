import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-drowsy-but-awake-impossible',
  title: '"Drowsy but Awake" Feels Impossible',
  category: 'sleep',
  searchTerms: [
    'drowsy but awake not working',
    'can\'t put baby down drowsy',
    'drowsy but awake impossible',
    'baby wakes up when put down',
    'drowsy but awake myth',
    'how to do drowsy but awake',
    'baby screams when put down awake',
    'drowsy but awake doesn\'t work',
    'put baby down awake cries',
    'drowsy but awake alternative',
  ],
  quickAnswer:
    '"Drowsy but awake" is a well-meaning recommendation that simply does not work for all babies at all ages. Many newborns cannot be put down drowsy without fully waking and becoming upset. This does not mean you are failing. Some babies are naturally better at settling, while others need more support. The ability to fall asleep independently develops gradually over the first year.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'For most newborns, "drowsy but awake" is unrealistic. Babies this young have an immature nervous system and often need significant help falling asleep, whether through feeding, rocking, shushing, or being held. This is biologically normal and does not create bad habits. If your newborn can occasionally fall asleep with minimal help, wonderful. If they cannot, that is equally normal. Do whatever helps your baby (and you) get the rest you need.',
    },
    {
      ageRange: '3-5 months',
      context:
        'Some babies begin to show the ability to settle with less help around 3-5 months, but many still cannot. You can gently practice by placing your baby down when they are calm and sleepy and offering support (patting, shushing, hand on chest) without picking them up. If they become distressed, pick them up and comfort them fully. This is not sleep training - it is simply offering opportunities for practice without pressure.',
    },
    {
      ageRange: '5-8 months',
      context:
        'This is an age when many babies become more capable of falling asleep with less parental intervention, though not all babies will. If your baby is still falling asleep while feeding or rocking and then waking frequently overnight needing the same help to get back to sleep, you might consider gradually reducing the level of assistance. But there is no obligation to change something that is working for your family.',
    },
    {
      ageRange: '8-18 months',
      context:
        'By this age, most babies have the developmental capacity to learn to fall asleep more independently, but capacity does not mean they will do it without guidance. If "drowsy but awake" has never worked for your baby, alternatives include gradual withdrawal methods (slowly reducing your presence), chair method (sitting near the crib and slowly moving farther away over time), or pick up/put down approaches. Choose a method that feels right for your family.',
    },
  ],
  whenNormal: [
    'Your newborn cannot be put down drowsy and needs to fall fully asleep in your arms before being transferred',
    'Your baby wakes immediately when placed in the crib after being put down drowsy',
    'Some naps your baby settles easily and others they need more help - inconsistency is normal',
    'Your older baby can fall asleep independently sometimes but still needs help at other times',
  ],
  whenToMention: [
    'Your baby over 9 months cannot fall asleep without prolonged rocking, feeding, or bouncing, and this is causing significant exhaustion or frustration for you',
    'You feel trapped in unsustainable sleep patterns and want guidance on gentle approaches to change',
    'Your baby screams inconsolably when placed in the crib at any level of drowsiness and nothing seems to help',
  ],
  whenToActNow: [
    'You are so exhausted from sleep deprivation that you worry about safely handling your baby, especially during nighttime feedings',
    'You find yourself falling asleep while holding your baby in unsafe positions (on a couch, recliner, or chair)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Keep Your Sleeping Baby Safe. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Teaching Your Baby to Self-Soothe. SleepFoundation.org, 2024.',
      url: 'https://www.sleepfoundation.org/baby-sleep/baby-self-soothing',
    },
    {
      org: 'NIH',
      citation:
        'Mindell JA et al. Behavioral treatment of bedtime problems and night wakings in infants and young children. Sleep. 2006;29(10):1263-1276.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/17068979/',
    },
  ],
  relatedConcernSlugs: ['baby-sleep-associations', 'baby-self-soothing-development', 'baby-only-sleeps-being-held', 'baby-needs-rocking-to-sleep'],
};
