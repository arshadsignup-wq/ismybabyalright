import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-napping-only-30-minutes-fix',
  title: 'How to Help Baby Nap Longer Than 30 Minutes',
  category: 'sleep',
  searchTerms: [
    'baby naps only 30 minutes',
    'how to extend baby naps',
    'baby short nap fix',
    'baby wakes after 30 minutes',
    'extending baby nap length',
    'baby nap too short solutions',
    'how to get baby to nap longer',
    'baby catnap fix',
    'baby wont nap more than 30 minutes',
    'connecting sleep cycles nap',
    'baby nap extension tips',
  ],
  quickAnswer:
    'Thirty-minute naps happen because your baby is waking at the end of their first sleep cycle and has not yet learned to connect cycles. This is biologically normal, especially under 5 months. Strategies to help include optimizing sleep environment, nailing wake windows, and giving your baby a few minutes to resettle before intervening.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Short naps at this age are completely normal and very common. Newborn sleep cycles are about 30-45 minutes, and babies this young have not developed the neurological ability to consistently link sleep cycles. There is very little you can do to force longer naps at this age. Some naps will naturally be longer than others. Contact napping, using a carrier, or motion (stroller, car) sometimes helps babies sleep longer because your closeness and movement help them transition between cycles.',
    },
    {
      ageRange: '4-5 months',
      context:
        'As sleep architecture matures around 4 months, many babies begin to show the ability to connect sleep cycles, starting with the morning nap. To encourage longer naps, ensure the room is very dark, use consistent white noise, and make sure wake windows are appropriate (typically 1.75-2.5 hours at this age). When your baby wakes after 30 minutes, wait 5-10 minutes before going in - many babies will fuss briefly and then resettle into another sleep cycle.',
    },
    {
      ageRange: '5-7 months',
      context:
        'This is when many babies begin to consolidate naps. The morning nap typically lengthens first. Key strategies include putting your baby down awake (or at least drowsy), ensuring wake windows are not too short or too long, and creating a brief pre-nap routine that signals sleep. If your baby is still catnapping at every nap, try the "crib hour" approach: leave your baby in the crib for a full hour from the start of the nap, giving them the opportunity to fall back asleep.',
    },
    {
      ageRange: '7-12 months',
      context:
        'By 7-9 months, most babies are taking at least one longer nap. If your baby is still stuck in a pattern of only 30-minute naps, consider whether sleep associations might be playing a role. If your baby needs to be rocked, fed, or held to fall asleep at nap time, they may need those same conditions to fall back asleep between sleep cycles. Gradually helping your baby learn to fall asleep more independently at nap time often naturally extends nap length.',
    },
  ],
  whenNormal: [
    'Your baby is under 5 months and consistently takes 30-minute naps - this is a normal phase of sleep maturation',
    'Your baby takes one or two short naps and one longer nap - this mixed pattern is very typical',
    'Short naps coincide with a developmental leap, illness, or schedule change and are temporary',
    'Your baby wakes from a short nap happy, alert, and in a good mood',
  ],
  whenToMention: [
    'Your baby over 7 months exclusively takes 30-minute naps and is chronically overtired, irritable, and cannot stay happy during wake windows',
    'Despite trying various strategies for 2-3 weeks, naps are not lengthening and daytime behavior is suffering',
    'Short naps are accompanied by loud snoring, mouth breathing, or restless sleep at night',
  ],
  whenToActNow: [
    'Your baby has pauses in breathing, gasping, or choking during naps',
    'Your baby is excessively difficult to wake or seems unusually lethargic',
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
      org: 'NSF',
      citation:
        'National Sleep Foundation. How Long Should Baby Naps Be? SleepFoundation.org, 2024.',
      url: 'https://www.sleepfoundation.org/baby-sleep/baby-naps',
    },
    {
      org: 'NIH',
      citation:
        'Mindell JA et al. Development of infant and toddler sleep patterns. Sleep Med. 2016;23:5-11.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/27544830/',
    },
  ],
  relatedConcernSlugs: ['baby-catnapping-30-minutes', 'short-naps', 'baby-sleep-associations', 'wake-windows-by-age'],
};
