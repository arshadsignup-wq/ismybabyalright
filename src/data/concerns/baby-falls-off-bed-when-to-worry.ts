import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-falls-off-bed-when-to-worry',
  title: 'My Baby Fell Off the Bed - When to Worry',
  category: 'physical',
  searchTerms: [
    'baby fell off bed',
    'baby fell off changing table',
    'baby fell off couch',
    'when to worry baby fall',
    'baby hit head falling off bed',
    'infant fall injury signs',
    'baby fell concussion signs',
    'how far baby fall to get hurt',
    'baby fell and vomited',
    'baby fell off bed sleeping',
    'baby head injury signs',
  ],
  quickAnswer:
    'Falls from beds and changing tables are one of the most common injuries in infancy and can be very frightening for parents. Most short falls (under 3 feet) onto carpeted surfaces do not cause serious injury. However, any fall should be monitored carefully. Watch your baby for the next 24-48 hours for signs of concussion or internal head injury. Seek immediate medical attention if your baby loses consciousness, vomits more than once, has a seizure, has unequal pupils, or is unusually sleepy or irritable.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'Even before babies can roll, they can scoot or wriggle off an elevated surface surprisingly quickly. Falls from changing tables are especially common at this age. After a fall, check your baby thoroughly for obvious injuries. If they cry immediately and then settle within a few minutes, this is generally a good sign. A small bump or bruise on the head is common and can be treated with a cold compress. However, any fall in a baby under 3 months should be discussed with your pediatrician, as young babies are more vulnerable to skull fractures.',
    },
    {
      ageRange: '4-12 months',
      context:
        'As babies learn to roll, crawl, and pull up, falls become more common. Falls from beds, sofas, and stairs are frequent in this age group. After a fall, check for alertness, symmetry of movement, and feeding behavior. A baby who resumes normal behavior within 15-30 minutes after the initial crying is usually fine. Watch for warning signs over the next 24-48 hours: repeated vomiting, excessive sleepiness, refusal to eat, a growing bump, clear fluid from the nose or ears, or any seizure activity.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers fall frequently as they learn to walk and climb, and most falls from standing height onto a flat surface are benign. Falls from greater heights (stairs, furniture, playground equipment) deserve more attention. After any significant fall, do the same 24-48 hour monitoring. Toddlers can usually tell you if something hurts, which helps with assessment. If your toddler hit their head, it is okay to let them sleep normally but check on them every few hours the first night to ensure they rouse easily.',
    },
  ],
  whenNormal: [
    'Your baby cried immediately after the fall but settled within a few minutes and resumed normal behavior.',
    'Your baby has a small bump or bruise that is not growing and does not seem tender.',
    'Your baby is feeding, playing, and sleeping normally after the fall.',
    'Your baby vomited once after the fall (possibly from the upset of crying) but has not vomited again.',
  ],
  whenToMention: [
    'Your baby fell from a height greater than 3 feet.',
    'Your baby has a large or growing bruise on the head.',
    'Your baby seems slightly different than usual after the fall - somewhat fussier, slightly less active, or feeding a bit less.',
  ],
  whenToActNow: [
    'Your baby lost consciousness at any point after the fall, even briefly.',
    'Your baby has vomited more than once after the fall.',
    'Your baby has unequal pupils, is not moving one side of their body normally, or has a seizure.',
    'You notice clear or bloody fluid coming from your baby\'s nose or ears.',
    'Your baby is excessively sleepy and difficult to wake, or is inconsolably irritable for more than an hour after the fall.',
    'Your baby fell onto a hard surface from a significant height (more than 3-4 feet) or has a visible skull deformity.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'apartment-baby-proofing-small-space',
    'soft-spot-concerns',
    'baby-bath-seat-drowning-recall',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Falls: Prevention and First Aid. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Falls.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Traumatic Brain Injury in Children.',
      url: 'https://www.cdc.gov/traumatic-brain-injury/about/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Head Injury in Children: When to Worry. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Head-Injury.aspx',
    },
  ],
};
