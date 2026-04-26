import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-sleep-associations',
  title: 'Baby Sleep Associations',
  category: 'sleep',
  searchTerms: [
    'baby sleep associations',
    'sleep crutches baby',
    'baby needs pacifier to sleep',
    'baby needs feeding to sleep',
    'baby needs to be held to sleep',
    'sleep props baby',
    'baby won\'t self soothe',
    'how to break sleep associations',
    'baby can\'t fall asleep independently',
    'sleep onset associations',
  ],
  quickAnswer:
    'Sleep associations are the conditions your baby connects with falling asleep - rocking, feeding, a pacifier, or being held. They are completely normal and not "bad habits." If they are working for your family, there is no need to change. If frequent night waking from needing those conditions recreated is exhausting you, gentle gradual changes can help.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'All newborns have sleep associations - they are supposed to. Babies this young need significant help falling asleep, and providing that help builds trust and security. Feeding to sleep, rocking, and holding are all appropriate at this age. You cannot spoil a newborn, and trying to teach "self-soothing" is not developmentally appropriate yet.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Around 4 months, sleep architecture matures and your baby begins cycling through sleep stages like an adult. If they can only fall asleep with a specific association (like nursing or rocking), they may need that same association recreated at every sleep cycle transition. If this is causing frequent wakings, you can gently start putting baby down drowsy but awake sometimes.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is often when families notice sleep associations most - baby may wake every 1-2 hours needing the same conditions to fall back asleep. If you want to make changes, gentle methods include gradually reducing the intensity (rock less vigorously, unlatch before fully asleep) rather than stopping cold turkey. Positive sleep associations like a consistent routine, dark room, and white noise are helpful.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Toddlers can develop new sleep associations like needing a parent to lie with them. If this works for your family, great. If you want to change, toddlers respond well to gradual withdrawal - sit closer to the door each night. A lovey or security object can serve as a positive, portable sleep association your child can access independently.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Older toddlers can understand simple explanations about new sleep expectations. You can create a "sleep plan" together. Positive associations like a special blanket, favorite stuffed animal, or calming music can replace ones that require your active involvement. Be patient and consistent - change takes time.',
    },
  ],
  whenNormal: [
    'Your baby has specific conditions they prefer for falling asleep',
    'Your baby wakes between sleep cycles and needs brief help getting back to sleep',
    'Different caregivers may have different sleep associations with your baby (that is fine)',
    'Sleep associations shift naturally as your baby grows and develops new skills',
  ],
  whenToMention: [
    'Your baby wakes every 45-90 minutes all night long requiring the same sleep association each time, and you are dangerously sleep deprived',
    'You have been trying to make changes for several weeks with no improvement and need guidance',
    'Sleep deprivation is affecting your mental health, your relationship, or your ability to care for your baby safely',
  ],
  whenToActNow: [
    'You are so exhausted that you fall asleep holding your baby on a couch, recliner, or other unsafe surface',
    'You feel you may harm yourself or your baby due to frustration and exhaustion - put baby in a safe space and call for help immediately',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Getting Your Baby to Sleep. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Getting-Your-Baby-to-Sleep.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Keep Your Sleeping Baby Safe. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx',
    },
  ],
};
