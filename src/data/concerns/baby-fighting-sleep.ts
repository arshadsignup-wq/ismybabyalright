import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-fighting-sleep',
  title: 'Baby Fighting Sleep',
  category: 'sleep',
  searchTerms: [
    'baby fighting sleep',
    'baby won\'t go to sleep',
    'baby resists sleep',
    'baby screams at bedtime',
    'why does my baby fight sleep',
    'baby cries when put down to sleep',
    'baby arches back at bedtime',
    'baby overtired but won\'t sleep',
    'baby fights naps',
    'infant resisting sleep',
  ],
  quickAnswer:
    'A baby who fights sleep is usually either overtired, undertired, or going through a developmental leap. It can feel exhausting, but it is very common and does not mean anything is wrong. Adjusting wake windows and creating a calming pre-sleep routine are the most effective strategies.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns can only handle about 45-90 minutes of awake time before needing sleep again. If your baby seems to fight sleep, they may already be overtired. Watch for early sleepy cues like yawning, eye rubbing, and turning away from stimulation. At this age, it is also common for babies to need significant help falling asleep, and that is perfectly normal.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Wake windows extend to about 1.5-2.5 hours. Babies become more aware of their surroundings and may resist sleep because they do not want to miss out. The Moro reflex is fading, which helps, but new skills like rolling may cause temporary excitement at bedtime. A consistent wind-down routine becomes especially important now.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Separation anxiety can emerge around 8-9 months, making bedtime feel harder. Babies may also fight sleep when practicing new motor skills like crawling, pulling up, or cruising. Wake windows are now 2-4 hours depending on age. Keep the routine predictable and offer brief reassurance without creating new sleep associations.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Toddlers may fight sleep out of a desire for independence and control. Bedtime resistance can increase around nap transitions and developmental leaps. Offering limited choices (which pajamas, which book) can give your toddler a sense of agency while keeping the routine on track.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By this age, bedtime battles are often about testing boundaries and FOMO (fear of missing out). A clear, consistent bedtime routine with firm but gentle limits works best. Visual schedules and countdown warnings before bedtime can help your toddler feel prepared rather than surprised.',
    },
  ],
  whenNormal: [
    'Baby cries or fusses briefly before settling to sleep',
    'Sleep resistance coincides with a new developmental skill like rolling, crawling, or walking',
    'Baby fights sleep more on days with disrupted schedules or extra stimulation',
    'Bedtime battles improve when you adjust wake windows or the bedtime routine',
    'Your baby is otherwise happy, healthy, and meeting milestones during awake time',
  ],
  whenToMention: [
    'Baby consistently takes more than 45 minutes to fall asleep despite appropriate wake windows and a calming routine',
    'Sleep resistance is accompanied by frequent night wakings and severe daytime crankiness that affects feeding and development',
    'You suspect pain or discomfort may be the reason your baby fights sleep',
  ],
  whenToActNow: [
    'Baby has pauses in breathing, gasping, or choking during sleep once they finally fall asleep',
    'Baby is inconsolable for hours, refuses all feeds, and seems ill or lethargic when awake',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bedtime Routines for Infants and Babies. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Getting-Your-Baby-to-Sleep.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Baby Sleep: What to Expect and Tips. SleepFoundation.org.',
      url: 'https://www.sleepfoundation.org/baby-sleep',
    },
  ],
};
