import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-refusing-morning-nap',
  title: 'Baby Refusing the Morning Nap',
  category: 'sleep',
  searchTerms: [
    'baby refusing morning nap',
    'baby fighting morning nap',
    'baby won\'t take morning nap',
    'baby skipping morning nap',
    'baby doesn\'t want morning nap anymore',
    'morning nap refusal baby',
    'when do babies drop morning nap',
    'baby crying at morning nap',
    'baby too awake for morning nap',
    'morning nap battle baby',
  ],
  quickAnswer:
    'Morning nap refusal can happen for several reasons depending on your baby\'s age. In younger babies, it may signal that wake windows need adjusting. In babies 12-18 months, it is often a sign that they are transitioning from two naps to one. Occasional refusal is normal - consistent refusal over 2+ weeks usually signals a schedule change is needed.',
  byAge: [
    {
      ageRange: '4-8 months',
      context:
        'If your baby under 8 months is refusing the morning nap, the most common cause is that the first wake window is too short or too long. Try adjusting wake time by 15 minutes in either direction. If your baby woke very early, they may need a shorter wake window. If they slept well and woke refreshed, they may need a slightly longer one. The morning nap is typically the easiest nap to get, so refusal at this age usually points to a timing issue rather than readiness to drop it.',
    },
    {
      ageRange: '8-12 months',
      context:
        'Morning nap refusal around 8-10 months is often related to the 8-month sleep regression or developmental milestones like crawling, pulling up, and cruising. Your baby may be too excited about their new skills to want to sleep. Stay consistent with your routine, darken the room, and give your baby 10-15 minutes to settle. This is usually a phase that resolves within a few weeks. It is generally too early to drop to one nap.',
    },
    {
      ageRange: '12-15 months',
      context:
        'This is when morning nap refusal may signal genuine readiness to transition to one nap. However, be cautious - many babies go through a phase of morning nap refusal around 12 months due to the 12-month sleep regression but still need two naps for several more months. If your baby refuses the morning nap but is clearly tired and cranky by 10 AM, they are likely not ready for one nap yet. Wait for consistent refusal over 2-3 weeks before making a change.',
    },
    {
      ageRange: '15-18 months',
      context:
        'If your baby is consistently refusing the morning nap at this age, they are likely ready to transition to one midday nap. You can gradually push the morning nap later by 15-30 minutes every few days until it merges into a midday nap around 12:00-1:00 PM. Expect an adjustment period of 2-4 weeks where your toddler may be crankier than usual. An earlier bedtime during the transition helps.',
    },
  ],
  whenNormal: [
    'Your baby occasionally skips the morning nap but takes it most days',
    'Morning nap refusal coincides with a developmental milestone, illness, or schedule change',
    'Your baby is between 12-18 months and is showing signs of transitioning to one nap',
    'After skipping the morning nap, your baby takes a good afternoon nap and sleeps well at night',
  ],
  whenToMention: [
    'Your baby under 10 months refuses all morning naps and seems chronically overtired',
    'Morning nap refusal leads to a domino effect of overtiredness that disrupts all sleep',
    'Your baby seems excessively tired but physically cannot settle for a nap despite clear fatigue cues',
  ],
  whenToActNow: [
    'Your baby is unusually lethargic, difficult to wake, or seems sick along with the nap refusal',
    'Your baby has breathing difficulties, excessive snoring, or color changes during sleep',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sleep: What Every Parent Needs to Know. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/default.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Baby Naps: How Many and How Long. SleepFoundation.org, 2024.',
      url: 'https://www.sleepfoundation.org/baby-sleep/baby-naps',
    },
    {
      org: 'NIH',
      citation:
        'Mindell JA et al. Development of infant and toddler sleep patterns. Sleep Med. 2016;23:5-11.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/27544830/',
    },
  ],
  relatedConcernSlugs: ['fighting-naps', 'baby-nap-transition-2-to-1', 'wake-windows-by-age', 'sleep-regression-12-months'],
};
