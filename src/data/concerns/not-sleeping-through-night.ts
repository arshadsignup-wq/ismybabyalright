import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'not-sleeping-through-night',
  title: 'Baby Not Sleeping Through the Night',
  category: 'sleep',
  searchTerms: [
    'baby not sleeping through the night',
    'when do babies sleep through the night',
    'baby waking up at night',
    'baby still not sleeping through night at 6 months',
    'baby won\'t sleep all night',
    'how to get baby to sleep through the night',
    'when should baby sleep through night',
    'baby wakes up every 2 hours at night',
    'is it normal for baby to not sleep through night',
    'baby sleeping through the night regression',
  ],
  quickAnswer:
    'Waking during the night is biologically normal for babies and does not mean something is wrong. Most babies are not developmentally ready to sleep a full 8-12 hour stretch until at least 6 months of age, and many healthy babies continue to wake once or twice a night well into the first year.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns are supposed to wake frequently. Their tiny stomachs need refilling every 2-4 hours, and their sleep cycles are only about 40-50 minutes long. Night waking at this age is a protective mechanism and a sign of healthy development, not a problem to solve.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Sleep architecture is maturing and many babies begin to consolidate longer stretches at night, but 1-3 night wakings are still completely normal. The well-known "4-month sleep regression" is actually a permanent shift in sleep patterns, so things may feel harder before they get easier.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Some babies this age can go 6-8 hours without a feed, but many still benefit from one overnight feed. Teething, separation anxiety, and new motor skills like sitting and crawling can all temporarily increase night waking. If your baby was sleeping longer stretches and starts waking more, it is usually developmental and passes.',
    },
    {
      ageRange: '9-12 months',
      context:
        'By now, most babies are physiologically capable of going without overnight feeds, though some still genuinely need one. Sleep disruptions at this age are commonly linked to standing, cruising, and the major cognitive leap of object permanence. Consistent, gentle bedtime routines continue to be the most evidence-based approach.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers who still wake once at night are within the range of normal, especially during illness, teething, or big transitions like dropping to one nap. If your toddler is waking frequently and seems truly distressed or excessively tired during the day, mention it to your pediatrician to rule out things like ear infections, reflux, or obstructive sleep issues.',
    },
  ],
  whenNormal: [
    'Your baby is under 6 months and wakes to feed during the night',
    'Night waking increased around a developmental milestone like rolling, sitting, or crawling',
    'Your baby wakes briefly but settles back to sleep within a few minutes with minimal help',
    'Night waking coincides with teething, illness, or a schedule change like travel or daylight saving time',
    'Your baby is growing well, happy during the day, and meeting milestones',
  ],
  whenToMention: [
    'Your baby is over 9 months and waking more than 3-4 times per night consistently, and you\'re concerned about how it\'s affecting their daytime function or your own wellbeing',
    'Your baby seems to wake gasping, choking, or with very noisy breathing',
    'You\'ve noticed your baby is excessively sleepy during the day despite seemingly spending enough time in bed at night',
    'Night wakings are accompanied by inconsolable crying that lasts more than 30 minutes and you can\'t identify a cause',
  ],
  whenToActNow: [
    'Your baby stops breathing during sleep or has pauses in breathing that last longer than 20 seconds',
    'Your baby is very difficult to wake from sleep, seems limp, or has a blue or grey tinge around the lips',
    'Night waking is accompanied by a high fever, projectile vomiting, or other acute illness symptoms',
  ],
  relatedMilestones: [
    'self-soothing',
    'sleep-consolidation',
    'gross-motor-rolling',
    'cognitive-object-permanence',
  ],
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
        'American Academy of Pediatrics. Sleep Duration Recommendations for Children. Pediatrics, 2016.',
      url: 'https://publications.aap.org/pediatrics/article/138/2/e20161601/25985/Recommended-Amount-of-Sleep-for-Pediatric',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. How Much Sleep Do I Need?',
      url: 'https://www.cdc.gov/sleep/about/how-much-sleep.html',
    },
  ],
};
