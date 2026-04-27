import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-fell-off-bed',
  title: 'Baby Fell Off the Bed or Couch',
  category: 'medical',
  searchTerms: [
    'baby fell off bed',
    'baby fell off couch',
    'baby rolled off bed',
    'baby fell off changing table',
    'baby fell and hit head',
    'baby fell off furniture what to do',
    'infant fell off bed emergency',
    'baby fell off bed when to go to ER',
    'signs of concussion baby after fall',
    'baby fell off bed acting normal',
    'baby bumped head after fall',
    'newborn fell off bed',
    'baby fell off bed crying',
  ],
  quickAnswer:
    'Falls from beds, couches, and changing tables are one of the most common accidents in infancy. Most falls from furniture height (2-3 feet) do not cause serious injury, but every fall involving the head deserves careful monitoring. If your baby cried immediately after the fall and is now acting normally - alert, feeding, and moving all limbs - serious injury is unlikely. However, certain warning signs require immediate medical evaluation.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns can roll or squirm off surfaces even before they can officially roll over. Falls at this age are particularly concerning because the skull is soft and the brain is still developing rapidly. After a fall, pick up your baby and comfort them. Check for visible injuries such as bumps, bruises, or bleeding. If your baby cries immediately and then calms down, this is a reassuring sign. Monitor closely for the next 24 hours. Because young infants cannot tell you how they feel, any fall in a baby under 3 months warrants a call to your pediatrician, even if your baby seems fine.',
    },
    {
      ageRange: '3-6 months',
      context:
        'This is a high-risk age for furniture falls because babies are learning to roll but parents may not yet realize how mobile they are. A baby who seemed unable to roll yesterday may roll today. After a fall, check for swelling, bruising, or changes in behavior. A "goose egg" (soft swelling on the head) is common and is actually a reassuring sign that the impact was absorbed by the soft tissue rather than the skull. Apply a cold compress gently. If your baby cries briefly, then returns to their normal behavior, feeding pattern, and alertness, serious injury is unlikely.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Mobile babies fall frequently as they learn to sit, crawl, pull up, and cruise. Most of these falls are low-impact. Falls from furniture become less common as parents adapt to their baby\'s mobility, but they still happen. After a fall, watch for vomiting (especially repeated vomiting), excessive sleepiness, unequal pupils, a bulging soft spot, inability to be consoled, or refusing to eat. These are signs of a more serious head injury. Normal fussiness, a brief cry, and a bump or bruise are expected and do not usually indicate a serious problem.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers fall constantly as they learn to walk and climb, and most falls are harmless. The concern increases with the height of the fall. Falls from less than 3 feet rarely cause serious injury. Falls from greater heights - bunk beds, tall furniture, windows, or stairs - are more concerning and should be evaluated. After any significant fall, monitor your toddler for 24-48 hours. Changes in behavior, coordination, speech, or consciousness are reasons to seek care. Toddlers can sometimes tell you their head hurts or show you where it hurts, which is helpful information for their doctor.',
    },
  ],
  whenNormal: [
    'Your baby cried immediately after the fall and calmed down within a few minutes with comforting',
    'There is a small bump or bruise at the impact site but no other symptoms',
    'Your baby is alert, feeding normally, moving all limbs, and acting like their usual self',
    'Your baby fell from a low height (3 feet or less) onto a soft or carpeted surface',
    'A "goose egg" has formed but your baby is otherwise completely normal',
  ],
  whenToMention: [
    'Your baby fell from a height greater than 3 feet or from a hard surface',
    'Your baby is under 3 months old and had any fall involving the head',
    'You notice a large or rapidly growing bump on the head',
    'Your baby seems slightly more irritable or sleepy than usual in the hours after the fall',
  ],
  whenToActNow: [
    'Your baby lost consciousness even briefly, had a seizure, or is difficult to wake up after the fall',
    'Your baby is vomiting repeatedly, has unequal pupils, a bulging soft spot, blood or clear fluid from the nose or ears, or is inconsolable',
    'Your baby is not moving one side of their body normally, has a visible skull deformity, or their behavior has changed significantly since the fall',
  ],
  relatedMilestones: [
    'gross-motor-rolling',
    'gross-motor-sitting',
    'gross-motor-crawling',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-hit-head-when-to-worry', 'baby-bruises-easily', 'meningitis-signs-baby'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Falls. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Falls.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Head Injury in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Head-Injury.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Traumatic Brain Injury in Children.',
      url: 'https://www.cdc.gov/traumatic-brain-injury/about/index.html',
    },
    {
      org: 'NIH',
      citation:
        'Kuppermann N, et al. Identification of children at very low risk of clinically-important brain injuries after head trauma: a prospective cohort study. Lancet. 2009;374(9696):1160-1170.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/19758692/',
    },
  ],
};
