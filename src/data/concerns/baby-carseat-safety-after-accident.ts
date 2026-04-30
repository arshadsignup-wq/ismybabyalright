import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-carseat-safety-after-accident',
  title: 'Car Seat Safety and What to Do After an Accident',
  category: 'medical',
  searchTerms: ['baby car seat after accident', 'car seat crash replacement', 'baby in car accident', 'toddler car accident what to do', 'car seat safety check', 'baby car seat expired', 'car seat installation check', 'rear facing car seat', 'baby car seat age', 'toddler car seat safety'],
  quickAnswer: 'After any car accident, even a minor fender bender, your child should be evaluated by a medical professional if they were in the vehicle. Car seats must be replaced after a moderate or severe crash (NHTSA guidelines). Even if the car seat looks fine, internal damage may compromise its ability to protect your child in a future crash. Car seat safety is one of the most important things you can do: keep your child rear-facing as long as possible (at least until age 2, ideally until they outgrow the rear-facing limits), ensure the harness is snug, and have your installation checked by a certified car seat technician.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies should ALWAYS ride rear-facing in the back seat. Ensure the harness straps are at or below the shoulders, the chest clip is at armpit level, and the harness is snug (you should not be able to pinch any slack). After an accident: remove your baby from the car seat and check for injuries. Babies may not show obvious signs of injury immediately - watch for unusual crying, vomiting, or behavioral changes. Even in a minor crash, have your baby checked by a pediatrician. Replace the car seat after any moderate or severe crash.' },
    { ageRange: '1-3 years', context: 'Keep your toddler rear-facing as long as possible - the AAP recommends rear-facing until the child reaches the maximum height or weight limit of their convertible car seat (often 40-50 lbs). After a car accident: check your toddler for any signs of injury including neck or back pain, headache, vomiting, or unusual behavior. Even if your child seems fine, have them evaluated by a doctor. The car seat should be replaced after a moderate or severe crash. After a minor crash, you may be able to keep the seat if specific criteria are met (check NHTSA minor crash criteria). Never use a car seat past its expiration date.' },
  ],
  whenNormal: ['Your child was properly restrained in a correctly installed car seat during a very minor low-speed collision and has no symptoms'],
  whenToMention: ['Your child was in any car accident and you want them evaluated', 'You are unsure if your car seat needs to be replaced after an accident', 'You want a professional car seat installation check', 'Your car seat is approaching its expiration date'],
  whenToActNow: ['Your child was in a moderate or severe car accident - seek immediate medical evaluation', 'Your child is showing any symptoms after a car accident: crying, vomiting, neck pain, confusion, or loss of consciousness', 'Your child was not properly restrained during a crash', 'The car seat is visibly damaged after an accident'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-concussion-signs', 'baby-broken-bone-fracture-signs', 'baby-first-aid-kit-essentials'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Car Seats: Information for Families. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/Car-Safety-Seats-Information-for-Families.aspx' },
    { org: 'NHTSA', citation: 'National Highway Traffic Safety Administration. Child Car Seat Safety.', url: 'https://www.nhtsa.gov/equipment/car-seats-and-booster-seats' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Rear-Facing Car Seats. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/Rear-Facing-Car-Seats-for-Infants-Toddlers.aspx' },
  ],
};
