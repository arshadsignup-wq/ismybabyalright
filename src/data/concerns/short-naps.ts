import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'short-naps',
  title: 'Baby Only Taking Short Naps',
  category: 'sleep',
  searchTerms: [
    'baby short naps',
    'baby only naps 30 minutes',
    'why are my baby\'s naps so short',
    'baby catnapping',
    'baby won\'t nap longer than 30 minutes',
    'how to extend baby naps',
    'baby wakes up after one sleep cycle',
    'baby 45 minute nap',
    'short nap baby overtired',
    'when do baby naps get longer',
  ],
  quickAnswer:
    'Short naps of 30-45 minutes are the biological norm for babies under about 5-6 months of age. A baby sleep cycle is roughly 40 minutes, and it takes time for the brain to develop the ability to link cycles together during daytime sleep. Most babies naturally begin taking longer naps around 5-7 months.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Catnapping is developmentally appropriate and expected at this age. Newborn sleep cycles are about 40-50 minutes, and linking them during daytime sleep is a skill that has not yet developed. Do not worry about trying to "fix" short naps  -  instead, offer frequent nap opportunities so your baby gets enough total daytime sleep.',
    },
    {
      ageRange: '3-5 months',
      context:
        'Your baby\'s nap length may be unpredictable  -  some naps may be 30 minutes and others might stretch to 1.5 hours, seemingly at random. This inconsistency is normal as the brain matures. You may notice that the first nap of the day tends to lengthen first, followed by the second nap.',
    },
    {
      ageRange: '5-8 months',
      context:
        'Many babies begin to consolidate naps around this age, with at least one or two naps extending past the single sleep cycle. If naps are still consistently short, check that your baby\'s wake windows are long enough to build adequate sleep pressure. A too-short wake window is the most common reason for short naps at this age.',
    },
    {
      ageRange: '8-18 months',
      context:
        'By this age, most babies are taking two naps that are 1-2 hours each. If naps are still only 30-40 minutes, it can lead to overtiredness by bedtime. Ensuring the sleep environment is dark and consistent and that wake windows are appropriately stretched (2.5-4 hours depending on age) can help. The third "catnap" is typically the last to go and may remain short.',
    },
  ],
  whenNormal: [
    'Your baby is under 5 months and napping for 30-45 minutes at a time',
    'Your baby takes one longer nap and one shorter nap during the day',
    'Your baby is happy and alert during wake windows despite short naps',
    'Nighttime sleep is going well even though daytime naps are short',
    'Short naps occur on busy days with lots of stimulation or disrupted routines',
  ],
  whenToMention: [
    'Your baby is over 7 months and every single nap is under 30 minutes despite consistent routines and environment',
    'Short naps are causing significant overtiredness with constant fussiness and difficulty sleeping at night',
    'Your baby seems to wake from naps startled, gasping, or in distress rather than simply transitioning between sleep cycles',
  ],
  whenToActNow: [
    'Your baby is excessively sleepy but cannot stay asleep  -  waking frequently from both naps and nighttime sleep with apparent breathing difficulty',
    'Your baby seems lethargic, difficult to rouse, or abnormally unresponsive between naps',
  ],
  relatedMilestones: [
    'sleep-consolidation',
    'self-soothing',
    'circadian-rhythm-development',
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
