import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'wont-sleep-without-nursing',
  title: 'Baby Won\'t Sleep Without Nursing',
  category: 'sleep',
  searchTerms: [
    'baby won\'t sleep without nursing',
    'baby needs to nurse to fall asleep',
    'baby falls asleep breastfeeding',
    'nursing to sleep bad habit',
    'how to stop nursing to sleep',
    'baby only falls asleep on breast',
    'breastfeeding to sleep association',
    'baby needs boob to sleep',
    'when to stop nursing to sleep',
    'baby won\'t sleep without breastfeeding',
    'breaking nurse to sleep association',
  ],
  quickAnswer:
    'Nursing to sleep is one of the most natural and biologically normal things you can do  -  breast milk contains hormones that promote sleepiness, and the act of suckling is deeply calming. It is not a bad habit you have created. If it is working for your family, there is no medical reason to change it. If it is no longer sustainable for you, gentle approaches can help your baby learn other ways to fall asleep.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Nursing to sleep is completely expected and appropriate for newborns. The suckling reflex, the warmth of your body, and the sleep-promoting hormones in breast milk (including melatonin, which varies with time of day) are nature\'s perfect sleep aid. There is no need to try to change this pattern in the newborn period.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Many babies continue to nurse to sleep through this period, and that is perfectly fine. If you want to begin gently introducing other ways to fall asleep, you can try unlatching your baby when they slow down their suckling and are drowsy but not fully asleep. There is no rush  -  follow your baby\'s lead and your own readiness.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is when some families find nursing to sleep becomes less sustainable, particularly if it means only one parent can ever put the baby to bed. If you want to shift the pattern, gradually moving nursing earlier in the bedtime routine (nurse, then book, then song, then bed) can help your baby learn to fall asleep without the breast as the very last step.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Many toddlers still nurse to sleep, especially at bedtime, and this is within the range of normal. The World Health Organization recommends breastfeeding up to 2 years and beyond. If you are ready to wean from nursing to sleep, your toddler can understand simple language  -  you can narrate the change: "We are going to have milk, then read a book, then cuddle to sleep." Expect some protest, but stay warm and consistent.',
    },
  ],
  whenNormal: [
    'Your newborn or young baby falls asleep while nursing  -  this is biologically designed',
    'Your baby nurses to sleep at bedtime but can fall asleep other ways for naps or with other caregivers',
    'Your baby nurses to sleep and sleeps well afterward',
    'Nursing to sleep is working for your family and you are not feeling burdened by it',
    'Your baby occasionally falls asleep without nursing, showing they have other self-soothing abilities developing',
  ],
  whenToMention: [
    'Your baby is over 6 months and cannot fall asleep any way other than nursing, and it is significantly affecting your wellbeing, sleep, or relationship',
    'Your baby nurses to sleep but wakes extremely frequently (every 30-60 minutes) wanting to nurse again, which could indicate comfort sucking due to pain from ear infections, reflux, or other discomfort',
    'You need to return to work or have another caregiver handle bedtime and your baby absolutely refuses to sleep for anyone else',
    'You are experiencing breastfeeding pain, nipple damage, or symptoms of mastitis from extended comfort nursing sessions',
  ],
  whenToActNow: [
    'You are so exhausted from overnight nursing that you have fallen asleep while nursing in bed with loose bedding, pillows, or an older sibling nearby  -  this creates an unsafe sleep environment',
    'Your baby has developed a sudden, strong refusal to nurse (nursing strike) accompanied by fever, ear pulling, or other illness signs',
  ],
  relatedMilestones: [
    'self-soothing',
    'sleep-consolidation',
    'feeding',
    'emotional-attachment',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics, 2012.',
      url: 'https://publications.aap.org/pediatrics/article/129/3/e827/31785/Breastfeeding-and-the-Use-of-Human-Milk',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Getting Your Baby to Sleep. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Getting-Your-Baby-to-Sleep.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Breastfeeding: Frequently Asked Questions.',
      url: 'https://www.cdc.gov/breastfeeding/faq/index.htm',
    },
  ],
};
