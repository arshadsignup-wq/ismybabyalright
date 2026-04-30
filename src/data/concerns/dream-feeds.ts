import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'dream-feeds',
  title: 'Dream Feeding Your Baby',
  category: 'feeding',
  searchTerms: [
    'dream feed baby',
    'dream feeding newborn',
    'feeding baby while sleeping',
    'dream feed formula',
    'when to stop dream feed',
    'dream feed not working',
    'baby won\'t take dream feed',
    'dream feed waking baby',
    'late night feed baby',
    'dream feed and sleep through night',
    'dream feed schedule',
    'is dream feeding safe',
  ],
  quickAnswer:
    'A dream feed is a feeding you give your baby while they are still mostly asleep, typically between 10-11pm, before you go to bed yourself. The goal is to fill your baby\'s stomach so they sleep a longer stretch overnight without waking hungry. Dream feeds work well for some babies and not others. They are generally safe and can be a helpful strategy for extending nighttime sleep, especially between 6 weeks and 4 months of age.',
  byAge: [
    {
      ageRange: '0-6 weeks',
      context:
        'Very young newborns need to eat every 2-3 hours around the clock, so dream feeds are not typically necessary at this stage. Your baby will wake naturally when hungry. Focus on feeding on demand and establishing your milk supply if breastfeeding. Some parents begin dream feeds around 4-6 weeks, but it is fine to wait until your baby\'s feeding pattern is more established.',
    },
    {
      ageRange: '6 weeks - 4 months',
      context:
        'This is the sweet spot for dream feeds. Around this age, many babies are physically capable of sleeping longer stretches but wake around 1-3am hungry. A dream feed at 10-11pm can help shift that feeding earlier so both you and baby sleep from about 11pm to 4-5am. To dream feed: gently pick up your sleeping baby, offer the breast or bottle, and let them eat without fully waking. Keep lights dim and avoid diaper changes unless necessary.',
    },
    {
      ageRange: '4-9 months',
      context:
        'If dream feeds have been working, you may continue them. However, by 4-6 months, many babies no longer need nighttime calories and may drop the dream feed naturally. If your baby starts waking more frequently rather than less after a dream feed, it may be disrupting a natural sleep cycle and it could be time to stop. Most sleep experts suggest trying to phase out the dream feed by 6-9 months to allow consolidated sleep.',
    },
  ],
  whenNormal: [
    'Your baby eats well during a dream feed without fully waking up',
    'Your baby sleeps a longer stretch after the dream feed (an extra 2-4 hours)',
    'Your baby sometimes takes less milk at the dream feed than during daytime feeds',
    'It takes a few nights to find the right timing for the dream feed',
    'Your baby eventually stops needing the dream feed as they grow',
  ],
  whenToMention: [
    'Your baby consistently wakes more often after introducing a dream feed',
    'You are struggling to get your baby to eat during the dream feed',
    'Your baby is over 6 months and still seems to need a dream feed every night',
    'You are unsure whether your baby is eating out of hunger or habit at night',
  ],
  whenToActNow: [
    'Your baby chokes, gags, or has difficulty breathing during a dream feed',
    'Your baby is not gaining weight adequately and you are concerned about calorie intake',
    'Your baby frequently vomits after dream feeds',
  ],
  relatedMilestones: ['3-months', '6-months'],
  showSelfReferral: false,
  relatedConcernSlugs: ['excessive-night-feeding', 'frequent-night-wakings', 'baby-waking-every-hour', 'wont-sleep-without-nursing'],
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
        'American Academy of Pediatrics. Sleeping Through the Night. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Sleeping-Through-the-Night.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Infant Sleep and Feeding Patterns.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
