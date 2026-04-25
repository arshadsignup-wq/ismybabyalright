import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'fighting-naps',
  title: 'Baby Fighting Naps or Refusing to Nap',
  category: 'sleep',
  searchTerms: [
    'baby fighting naps',
    'baby won\'t nap',
    'baby refuses to nap',
    'baby screams at nap time',
    'baby fights sleep during the day',
    'why does my baby fight naps',
    'baby overtired won\'t nap',
    'toddler skipping naps',
    'baby nap resistance',
    'how to get overtired baby to nap',
    'baby cries every time I put them down for nap',
  ],
  quickAnswer:
    'Nap resistance is one of the most common struggles parents face and is usually a sign that your baby is either overtired, undertired, or going through a developmental leap rather than a sign of a medical problem. Adjusting wake windows and creating a brief pre-nap routine are the most effective strategies.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns often have very short wake windows of just 45-90 minutes. If your baby is fighting a nap, they may already be overtired  -  an overtired baby produces stress hormones that make it paradoxically harder to fall asleep. Watch for early sleepy cues like yawning, looking away, and jerky limb movements rather than waiting for fussing.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Wake windows are stretching to about 1.5-2.5 hours. The transition from 4 naps to 3 naps often happens in this period and can temporarily cause nap battles. Many babies also become more socially aware around 4 months and would rather engage with the world than sleep. A brief wind-down routine of 5-10 minutes in a dim room can help signal it is time for sleep.',
    },
    {
      ageRange: '6-12 months',
      context:
        'The transition from 3 naps to 2 naps (usually around 7-9 months) is a classic trigger for nap refusal. Your baby is also learning exciting new skills like sitting, crawling, and pulling up, which can make the idea of lying down deeply unappealing. Ensuring enough physical activity during wake windows helps build sleep pressure.',
    },
    {
      ageRange: '12-18 months',
      context:
        'Some babies temporarily refuse one or both naps around 12 months  -  this is often misread as readiness for one nap, but most children are not truly ready to drop to one nap until closer to 14-18 months. If your toddler skips a nap, offering a slightly earlier bedtime can prevent overtiredness from snowballing.',
    },
    {
      ageRange: '18-36 months',
      context:
        'The 2-to-1 nap transition is usually complete by 18 months, and most toddlers keep their single afternoon nap until age 3-4. If your toddler starts fighting the remaining nap, try adjusting the timing rather than dropping it entirely. Many toddlers do best with their nap starting around 12:30-1:00 PM after lunch.',
    },
  ],
  whenNormal: [
    'Nap resistance coincides with a nap transition (4 to 3, 3 to 2, or 2 to 1 naps)',
    'Your baby fights naps on days with a lot of stimulation or disrupted routine',
    'Your baby recently learned a new physical skill and seems too excited to settle',
    'Nap resistance lasts a week or two and then improves on its own',
    'Your baby is otherwise happy, well-rested, and sleeping reasonably at night',
  ],
  whenToMention: [
    'Your baby is chronically overtired  -  fussy and rubbing eyes constantly but unable to fall asleep',
    'Nap refusal is persistent (more than 2-3 weeks) and significantly affecting nighttime sleep as well',
    'Your baby seems to be in discomfort or pain when lying down for naps, which could suggest ear infection or reflux',
  ],
  whenToActNow: [
    'Your baby is excessively sleepy, difficult to rouse, or seems lethargic beyond normal tiredness',
    'Sudden severe sleep refusal accompanied by a high fever, persistent crying, or vomiting',
    'Your baby has a breathing pattern that seems labored or noisy when lying flat',
  ],
  relatedMilestones: [
    'sleep-consolidation',
    'gross-motor-rolling',
    'gross-motor-crawling',
    'cognitive-object-permanence',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Naps. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Naps.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Healthy Sleep Habits: How Many Hours Does Your Child Need? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Healthy-Sleep-Habits-How-Many-Hours-Does-Your-Child-Need.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. How Much Sleep Do I Need?',
      url: 'https://www.cdc.gov/sleep/about/how-much-sleep.html',
    },
  ],
};
