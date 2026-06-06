import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-sleep-crutch-dependency',
  title: 'My Baby Is Dependent on a Sleep Aid to Fall Asleep',
  category: 'sleep',
  searchTerms: [
    'baby sleep crutch',
    'baby dependent on rocking to sleep',
    'baby needs feeding to sleep',
    'sleep prop dependency',
    'baby can\'t sleep without being held',
    'baby sleep aid dependency',
    'breaking sleep associations',
    'baby needs motion to sleep',
    'baby needs pacifier to sleep',
    'baby only sleeps with help',
  ],
  quickAnswer:
    'If your baby can only fall asleep with a specific help (rocking, feeding, bouncing, pacifier), this is called a sleep association. It only becomes a problem if it is no longer sustainable for you or if it causes frequent night wakings because your baby needs the same help to get back to sleep each time they wake between sleep cycles. There is no urgency to change a sleep association that works for your family.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'All sleep associations at this age are completely normal and expected. Your newborn needs help regulating their nervous system and falling asleep. Rocking, feeding, holding, bouncing, and pacifiers are all appropriate tools. You are not creating bad habits - you are responding to your baby\'s developmental needs. Do not let anyone make you feel guilty about helping your very young baby sleep.',
    },
    {
      ageRange: '4-6 months',
      context:
        'As your baby\'s sleep architecture matures, you may notice that sleep associations start to cause more frequent night wakings. This is because your baby now cycles between light and deep sleep, and at each transition point, they may need the same conditions present when they fell asleep. If this pattern is working for your family, there is no need to change. If it is becoming unsustainable, you can gradually begin to introduce the sleep association earlier in the routine rather than at the point of falling asleep.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, if sleep associations are causing you to provide help multiple times per night and this is affecting your wellbeing, it may be time to gently work on change. The approach does not have to be all-or-nothing. You can gradually reduce the association - for example, rocking until calm but not fully asleep, feeding earlier in the routine rather than right before bed, or replacing one association with a less intensive one. Go at a pace that feels right for you and your baby.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers can be more resistant to changes in sleep associations because habits are more ingrained and they can protest more vigorously. However, they also have better coping skills. Introducing a comfort object (lovey), keeping the bedtime routine consistent, and being clear and confident about the change helps. Many families find that making changes gradually over 1-2 weeks is easier than an abrupt change.',
    },
  ],
  whenNormal: [
    'Your baby under 4 months needs help falling asleep - this is not a sleep crutch, it is normal newborn care',
    'Your baby has a sleep association but sleeps well overnight with only 1-2 brief wakings',
    'You use a sleep association by choice because it works for your family and you enjoy the closeness',
    'Your baby uses a pacifier but can sometimes fall back asleep without it',
  ],
  whenToMention: [
    'Your baby is waking 6+ times per night and needs the same intervention every time to fall back asleep, and you are struggling with exhaustion',
    'The sleep association has become extreme (e.g., requiring 45+ minutes of rocking for every sleep period)',
    'You want to change the pattern but are unsure how to start and would like professional guidance',
  ],
  whenToActNow: [
    'Sleep deprivation is causing you to feel unsafe while caring for your baby or driving',
    'You are falling asleep in unsafe conditions (on a couch or recliner while holding your baby)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sleeping Through the Night. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Sleeping-Through-the-Night.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Sleep Associations in Babies. SleepFoundation.org, 2024.',
      url: 'https://www.sleepfoundation.org/baby-sleep',
    },
    {
      org: 'NIH',
      citation:
        'Mindell JA et al. Behavioral treatment of bedtime problems and night wakings in infants and young children. Sleep. 2006;29(10):1263-1276.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/17068979/',
    },
  ],
  relatedConcernSlugs: ['baby-sleep-associations', 'baby-needs-rocking-to-sleep', 'wont-sleep-without-nursing', 'baby-self-soothing-development'],
};
