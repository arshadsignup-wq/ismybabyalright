import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'window-fall-prevention-baby',
  title: 'Window Fall Prevention for Babies and Toddlers',
  category: 'medical',
  searchTerms: [
    'baby fell out window',
    'window safety baby',
    'window guard child safety',
    'window screen baby fall',
    'toddler window fall prevention',
    'window lock child safety',
    'baby window fall risk',
    'second floor window baby',
    'window stop baby proofing',
    'child fell through window screen',
  ],
  quickAnswer:
    'Window screens are designed to keep bugs out, not to prevent falls — a baby or toddler can easily push through a screen. Window falls are a serious cause of childhood injury and death, particularly from second-floor and higher windows. Install window guards or window stops that prevent windows from opening more than 4 inches, and keep furniture away from windows so children cannot climb up to window height.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Babies who can pull to stand are at risk of leaning against window screens, which offer no resistance. Even first-floor windows can result in injuries if a baby falls onto a hard surface below. Move cribs, changing tables, and any climbable furniture away from windows. Install window stops or guards on all accessible windows.',
    },
    {
      ageRange: '1-3 years',
      context:
        'This is the highest-risk age. Toddlers climb on furniture, window sills, and anything that gets them closer to a window. They are top-heavy relative to their body size, making them especially prone to falling headfirst. Window guards with quick-release mechanisms (for emergency exit) are recommended by the AAP. Open windows from the top rather than the bottom when possible.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Older children may intentionally lean out of windows or push against screens. Continue to use window guards and window stops. Teach children that screens do not prevent falls and that windows are not for playing near. Ensure that window guards remain properly installed and have not loosened over time.',
    },
  ],
  whenNormal: [
    'Your windows have window guards or stops that prevent them from opening more than 4 inches',
    'All furniture is positioned away from windows so children cannot climb to window height',
    'You supervise your child around open windows and have taught them about window safety',
  ],
  whenToMention: [
    'You need guidance on which window guards or stops to install and how to install them properly',
    'You live above the ground floor and want a comprehensive window safety plan',
  ],
  whenToActNow: [
    'Your child has fallen from a window at any height — call 911 immediately. Do not move the child unless they are in immediate danger. Falls from even a first-floor window can cause serious head, spine, or internal injuries',
    'Your child fell from a window and appears fine — still seek emergency medical evaluation, as internal injuries may not be immediately apparent',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Window Safety for Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Window-Safety.aspx',
    },
    {
      org: 'CPSC',
      citation:
        'U.S. Consumer Product Safety Commission. Window Safety for Children.',
      url: 'https://www.cpsc.gov/Safety-Education/Safety-Guides/Home/Window-Safety',
    },
    {
      org: 'Safe Kids',
      citation:
        'Safe Kids Worldwide. Falls Prevention: Windows.',
      url: 'https://www.safekids.org/fall-prevention',
    },
  ],
};
