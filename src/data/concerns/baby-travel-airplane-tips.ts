import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-travel-airplane-tips',
  title: 'Flying with a Baby: Safety Tips and Guidance',
  category: 'medical',
  searchTerms: [
    'flying with baby tips',
    'baby airplane ear pressure',
    'when can baby fly',
    'airplane travel baby safety',
    'baby ear pain flying',
    'car seat airplane baby',
    'flying with infant tips',
    'baby jet lag',
    'nursing on airplane baby',
    'newborn flying safe',
  ],
  quickAnswer:
    'Most healthy full-term babies can fly after 1-2 weeks of age, though many pediatricians recommend waiting until 2-3 months when the immune system is more developed. To help with ear pressure during takeoff and landing, nurse, bottle-feed, or offer a pacifier. The safest way for an infant to fly is in an FAA-approved car seat in their own seat, not on a lap. Bring plenty of supplies and plan feedings around takeoff and landing times.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'While there is no strict medical minimum age for flying, most pediatricians recommend waiting until at least 2 weeks (to ensure no complications from birth) and ideally 2-3 months when the immune system is stronger. Premature babies should consult their pediatrician before flying. Nurse or bottle-feed during takeoff and landing to help equalize ear pressure through swallowing. Airplane cabins have recirculated air and close quarters with other passengers, so be prepared with hand sanitizer and consider limiting contact with other passengers. An FAA-approved car seat in a purchased seat is safest.',
    },
    {
      ageRange: '3-12 months',
      context:
        'This is a common age for first flights. Feed your baby during takeoff and landing to help with ear pressure. Bring more diapers, formula/milk, and snacks than you think you need. Breast milk, formula, and baby food are exempt from TSA liquid rules. A front carrier or wrap makes navigating airports easier. For entertainment, bring small, quiet toys and consider downloading content on a tablet as backup. Try to book flights during naptime. If your baby has an ear infection, consult your pediatrician before flying, as cabin pressure changes can worsen ear pain.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddler travel brings new challenges as they want to move and explore. A purchased seat with a car seat remains the safest option and gives your toddler their own space. Bring a variety of snacks and activities. Walk the aisle during cruising altitude to let your toddler stretch. Jet lag can be managed by gradually shifting sleep schedules a few days before travel and exposing your child to daylight at the destination. For international travel, ensure all vaccinations are up to date and check whether additional vaccinations are recommended for your destination.',
    },
  ],
  whenNormal: [
    'Your baby cries during takeoff or landing due to ear pressure but calms with feeding or a pacifier.',
    'Your baby has disrupted sleep patterns for a few days after travel due to jet lag.',
    'Your baby is fussy during the flight but has no symptoms after landing.',
  ],
  whenToMention: [
    'Your baby was premature and you want to know if flying is safe.',
    'Your baby has a current ear infection and you have upcoming travel plans.',
    'Your baby has a heart or lung condition and you want clearance for air travel.',
  ],
  whenToActNow: [
    'Your baby develops severe ear pain that does not resolve after landing.',
    'Your baby has difficulty breathing during the flight.',
    'Your baby develops high fever or becomes very ill during or immediately after travel.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-travel-car-seat-long-drive', 'baby-recurring-ear-infections', 'baby-vaccination-schedule-delayed-catching-up'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Flying with Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/Flying-with-Baby.aspx',
    },
    {
      org: 'FAA',
      citation:
        'Federal Aviation Administration - Child Safety on Airplanes.',
      url: 'https://www.faa.gov/travelers/fly_children',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention - Travel with Infants and Children.',
      url: 'https://wwwnc.cdc.gov/travel/page/children',
    },
  ],
};
