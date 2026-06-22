import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-hates-tummy-time-alternatives',
  title: 'Baby Hates Tummy Time: Alternatives That Still Build Strength',
  category: 'physical',
  searchTerms: [
    'baby hates tummy time',
    'baby cries during tummy time',
    'tummy time alternatives',
    'baby screams on stomach',
    'how to make tummy time easier',
    'baby refuses tummy time',
    'tummy time tips for fussy baby',
    'tummy time on chest count',
    'baby wont do tummy time',
    'alternatives to tummy time for baby',
  ],
  quickAnswer:
    'Many babies dislike tummy time, especially in the first few weeks, and this is one of the most common frustrations new parents face. The AAP recommends supervised tummy time starting from day one to build neck, shoulder, and core strength and prevent flat spots (positional plagiocephaly). However, tummy time does not have to mean placing your baby flat on the floor. Effective alternatives include: tummy-to-chest time (lying baby on your chest while you recline), the football hold (carrying baby face-down along your forearm), tummy time on your lap, using a rolled towel under the chest for support, and babywearing in a carrier. Even 1-2 minutes at a time counts, and the AAP recommends working up to 15-30 minutes total per day by 7 weeks. Short, frequent sessions are more effective and better tolerated than one long session.',
  byAge: [
    {
      ageRange: '0-6 weeks',
      context:
        'Start with tummy-to-chest time, which most newborns tolerate well because of skin-to-skin contact and your heartbeat. Place baby on your chest while you are reclined at a 45-degree angle, which counts as tummy time per the AAP. The football hold (carrying baby face-down along your forearm with their head near your elbow) is another option. Aim for a few minutes after each diaper change. Most newborns will fuss after 1-2 minutes and that is normal. Stop, comfort, and try again later.',
    },
    {
      ageRange: '6 weeks to 3 months',
      context:
        'Gradually introduce floor tummy time with support. Place a rolled-up towel or small nursing pillow under your baby\'s chest so their arms are propped forward, which reduces the work their neck muscles have to do. Get down on the floor at eye level and use high-contrast toys, a mirror, or your face to engage them. Tummy time across your lap while you gently pat their back is another well-tolerated option. Aim for 15-30 minutes total daily, broken into short sessions.',
    },
    {
      ageRange: '3-4 months',
      context:
        'Most babies become significantly more tolerant of tummy time around 3-4 months as their neck and upper body strength improves. They start pushing up on their forearms (mini push-ups) and can hold their head at 45-90 degrees. If your baby still resists, try tummy time on a firm surface outdoors (a blanket on grass), in front of a window, or with a sibling or pet nearby for motivation. Carrying in an upright position in a front-facing carrier also builds similar muscle groups.',
    },
    {
      ageRange: '4-6 months',
      context:
        'By this age, many babies who previously hated tummy time are now comfortable and may even prefer it as they work toward rolling and eventually crawling. If your baby is still strongly resistant, talk to your pediatrician, because occasionally, discomfort during tummy time can signal reflux, torticollis (tight neck muscle), or sensory sensitivity. Physical therapy can help if there is an underlying issue. Most babies, however, simply needed time and gradual exposure.',
    },
  ],
  whenNormal: [
    'Baby fussing or crying for the first 1-2 minutes of tummy time (this is expected and does not mean you should stop entirely)',
    'Preferring tummy-to-chest over floor tummy time in the first 2 months',
    'Baby tolerating tummy time better at some times of day than others (try after naps, not when hungry or tired)',
    'Gradual improvement in tolerance over weeks, not days',
  ],
  whenToMention: [
    'Baby seems to be in genuine pain (not just frustration) during any position on their stomach',
    'Baby always turns their head to one side and resists turning the other way, which may indicate torticollis',
    'Baby is not lifting their head at all during tummy time by 2 months',
    'You notice a flat spot developing on your baby\'s head despite tummy time efforts',
  ],
  whenToActNow: [
    'Baby has no head control and their head consistently flops forward or to the side by 4 months, which may indicate a motor delay needing evaluation',
    'Baby arches their back and screams during tummy time consistently, especially after feeds, which could indicate significant reflux requiring treatment',
    'Any asymmetric movement where baby only uses one side of their body during tummy time',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'flat-head',
    'newborn-tummy-time-too-early',
    'baby-plagiocephaly-helmet-therapy',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Back to Sleep, Tummy to Play. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Back-to-Sleep-Tummy-to-Play.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Safe to Sleep Campaign: Tummy Time.',
      url: 'https://safetosleep.nichd.nih.gov/reduce-risk/tummy-time',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Movement Milestones: Birth to 3 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-Birth-to-Three-Months.aspx',
    },
  ],
};
