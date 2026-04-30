import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-dislocated-elbow-nursemaids',
  title: "Nursemaid's Elbow (Pulled Elbow) in Baby or Toddler",
  category: 'physical',
  searchTerms: [
    'nursemaid\'s elbow baby',
    'pulled elbow toddler',
    'toddler won\'t move arm',
    'baby arm pulled out of socket',
    'toddler not using arm after pulling',
    'radial head subluxation baby',
    'toddler arm limp after swinging',
    'toddler arm injury from pulling',
    'baby elbow dislocated',
    'toddler holding arm at side won\'t bend',
  ],
  quickAnswer:
    'Nursemaid\'s elbow is the most common orthopedic injury in children under 5. It happens when a ligament in the elbow slips out of place, usually after a pulling or swinging motion on the arm. The child suddenly stops using the affected arm, holding it still at their side with the palm turned inward. It is not a dislocation or fracture, and it is easily fixed by a doctor with a quick, gentle maneuver. Recovery is immediate - most children use the arm normally within minutes of reduction.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Nursemaid\'s elbow is less common in babies under 1 year but can happen when a baby is pulled up by one arm, lifted by the hands, or when an arm gets caught in crib rails or during a roll. The baby will suddenly stop moving the affected arm and may cry briefly then become quiet, holding the arm limply at their side. Seek medical evaluation - the fix is quick and painless.',
    },
    {
      ageRange: '1-4 years',
      context:
        'This is the peak age for nursemaid\'s elbow. Common scenarios include: pulling a toddler by the hand to prevent a fall, swinging a toddler by the arms during play, pulling a toddler\'s arm through a jacket sleeve, or a toddler catching their arm while rolling or falling. The child will immediately stop using the arm. Do not try to fix it yourself. A medical professional can reduce it in seconds with a specific rotation of the forearm.',
    },
  ],
  whenNormal: [
    'Your child uses the arm completely normally within 15-30 minutes after medical reduction',
    'Brief crying at the time of injury that settles quickly',
    'No visible swelling, bruising, or deformity of the arm',
  ],
  whenToMention: [
    'Your child has had nursemaid\'s elbow and you want to learn how to prevent recurrence',
    'Your child has had multiple episodes of nursemaid\'s elbow',
    'You want to learn the warning signs so you can seek quick treatment',
  ],
  whenToActNow: [
    'Your child is not using one arm after any pulling, swinging, or lifting event',
    'Your child\'s arm is visibly swollen, deformed, or bruised (may indicate fracture rather than nursemaid\'s elbow)',
    'Your child\'s arm does not return to normal use after medical reduction',
    'There was no clear pulling mechanism and the child stopped using their arm (other causes need evaluation)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-not-using-one-arm', 'baby-fell-off-bed', 'baby-broken-bone-fracture-signs'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Nursemaid\'s Elbow. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Nursemaids-Elbow.aspx',
    },
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Common Orthopedic Injuries. Pediatrics in Review.',
      url: 'https://publications.aap.org/pediatricsinreview',
    },
    {
      org: 'NIH',
      citation: 'National Library of Medicine. Nursemaid Elbow. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK459147/',
    },
  ],
};
