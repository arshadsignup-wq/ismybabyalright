import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-eye-trauma-injury',
  title: 'My Baby Got Poked or Hit in the Eye',
  category: 'medical',
  searchTerms: [
    'baby eye injury',
    'baby poked in eye',
    'baby hit eye',
    'baby eye trauma',
    'baby scratched eye',
    'baby eye swollen after hit',
    'baby black eye injury',
    'baby something in eye',
    'baby eye first aid',
    'baby corneal scratch',
  ],
  quickAnswer:
    'Eye injuries in babies should be taken seriously because young children cannot reliably tell you about vision changes. Minor pokes may cause temporary redness and tearing. Corneal scratches (abrasions) cause significant pain, tearing, and light sensitivity but usually heal within 24-48 hours. Any direct blow to the eye, chemical splash, penetrating injury, or significant vision change requires immediate medical evaluation.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Eye injuries in very young babies are uncommon but can occur from fingernail scratches (baby\'s own nails or a sibling\'s). A corneal abrasion causes the baby to keep the eye closed, tear excessively, and be very fussy. Keep baby\'s nails trimmed short. Any eye injury in this age group should be evaluated promptly by a doctor.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As babies become more active and start reaching for things, minor eye pokes become possible. If your baby is poked in the eye, watch for persistent redness, swelling, excessive tearing, or difficulty opening the eye. If symptoms last more than a few hours, have the eye examined. Do not try to remove anything stuck in the eye yourself.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Crawling babies may bump into furniture edges or sharp objects at eye level. Prevent injuries by padding sharp corners and keeping dangerous objects out of reach. After any eye trauma, observe for the following warning signs over 24-48 hours: unequal pupil sizes, blood in the colored part of the eye, drooping eyelid, or apparent vision change.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers are at increased risk for eye injuries from falls, thrown objects, and finger pokes from siblings. A black eye (bruising around the eye) from a bump may look alarming but is usually not serious if the eye itself is not affected. Apply a cold compress for swelling. Watch for signs that the eyeball itself was injured.',
    },
    {
      ageRange: '2-3 years',
      context:
        'As children become more active and play with other children, eye injuries increase. Teach gentle play and supervise closely. If a chemical substance gets in the eye, flush with clean water for at least 15 minutes immediately and then seek medical care. For any penetrating injury (object stuck in eye), do NOT remove it - go to the emergency room immediately.',
    },
  ],
  whenNormal: [
    'A minor poke causes temporary redness and tearing that resolves within 30-60 minutes',
    'A small bump near the eye causes a bruise but the eye itself appears unaffected',
    'Your baby resumes normal behavior quickly and the eye looks clear',
  ],
  whenToMention: [
    'Your baby has persistent redness, tearing, or squinting after an eye injury that lasts several hours',
    'Your baby seems sensitive to light after an eye injury (possible corneal scratch)',
    'You notice a small scratch on the white of the eye',
  ],
  whenToActNow: [
    'Your baby has a direct blow to the eyeball, blood visible in the eye, an object stuck in the eye, a chemical splash, or a deep cut near the eye',
    'After any eye injury: your baby\'s pupils are unequal sizes, the eye does not move normally, there is significant swelling, or you suspect your baby cannot see normally from the injured eye',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-swollen-eye',
    'baby-vision-screening-importance',
    'baby-pediatric-ophthalmologist-when',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Eye Injuries. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Eye-Injuries.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Eye injury: First aid.',
      url: 'https://www.mayoclinic.org/first-aid/first-aid-eye-injury/basics/art-20056645',
    },
    {
      org: 'NIH',
      citation:
        'National Eye Institute. Eye Emergencies.',
      url: 'https://www.nei.nih.gov/learn-about-eye-health/healthy-vision/keep-your-eyes-safe',
    },
  ],
};
