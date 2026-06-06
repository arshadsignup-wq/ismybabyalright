import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-dark-room-necessary',
  title: 'Does My Baby\'s Room Need to Be Dark for Sleep?',
  category: 'sleep',
  searchTerms: ['does baby need dark room','baby room darkness sleep','blackout curtains baby','dark room baby naps','baby sleep in light room','how dark baby room','bright room baby sleep','baby naps in light','darkness baby sleep','blackout shades baby'],
  quickAnswer: 'Darkness significantly helps sleep quality for babies over 3-4 months because it supports melatonin production. While newborns can sleep in light, a dark room becomes increasingly important as circadian rhythm develops. For naps and nighttime, ideally the room should be dark enough that you can barely see your hand.',
  byAge: [
    { ageRange: '0-3 months', context: 'Newborns can sleep almost anywhere regardless of light. Their melatonin is not yet light-driven. Beginning to differentiate day (some light during naps) and night (dark room) helps circadian development.' },
    { ageRange: '3-6 months', context: 'As circadian rhythm develops, darkness becomes a powerful sleep tool. Melatonin is suppressed by light. Blackout curtains can dramatically improve nap quality and bedtime ease. Dim lights 30-60 minutes before bed.' },
    { ageRange: '6-12 months', context: 'A very dark room is one of the most impactful changes for both naps and nighttime. Early morning wakings and short naps often improve with better blackout coverage. Check for light leaks. Use dim red or amber light for night feeds.' },
    { ageRange: '12-36 months', context: 'Continue with darkness. If your toddler develops dark fears, a very dim amber or red nightlight is the best compromise. Blue or white nightlights suppress melatonin more. The nightlight should be barely perceptible.' },
  ],
  whenNormal: ['Your baby sleeps better in a dark room','Your baby naps in lighter conditions when out but sleeps longest in a dark room at home','Blackout curtains improve nap length and bedtime ease','Your baby needs a dim nightlight after developing dark fears'],
  whenToMention: ['Your baby cannot sleep in any light at all making travel impossible','Despite a very dark room your baby continues to have significant sleep difficulties','Your baby seems to have unusual sensitivity to light'],
  whenToActNow: ['Your baby shows significant light sensitivity with squinting and tearing in normal light','Your baby has vision concerns related to light sensitivity'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'NSF', citation: 'National Sleep Foundation. Light and Sleep. SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/bedroom-environment/light-and-sleep' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Getting Your Baby to Sleep. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Getting-Your-Baby-to-Sleep.aspx' },
    { org: 'NIH', citation: 'Gooley JJ et al. Exposure to room light before bedtime suppresses melatonin onset. J Clin Endocrinol Metab. 2011;96(3):E463-E472.', url: 'https://pubmed.ncbi.nlm.nih.gov/21193540/' },
  ],
  relatedConcernSlugs: ['baby-sleep-environment-optimal','early-morning-waking','short-naps'],
};
