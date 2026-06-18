import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'car-seat-replacement-after-accident',
  title: 'Do I Need to Replace My Baby\'s Car Seat After a Car Accident?',
  category: 'medical',
  searchTerms: [
    'car seat replacement after accident',
    'car seat after crash',
    'baby car seat accident',
    'do I need new car seat after fender bender',
    'car seat crash replacement',
    'minor accident car seat',
    'car seat expiration after crash',
    'NHTSA car seat replacement',
    'car seat insurance replacement',
    'when to replace car seat after accident',
  ],
  quickAnswer:
    'After a moderate or severe car crash, car seats should always be replaced — even if there is no visible damage. The structural integrity of the car seat may be compromised in ways that are not visible. For minor crashes (all of these must be true: the vehicle was drivable, the door nearest the car seat was undamaged, no one was injured, no airbags deployed, and there is no visible damage to the car seat), NHTSA guidelines say replacement may not be necessary. However, many car seat manufacturers and safety technicians recommend replacement after any crash to be safe. Most insurance policies cover car seat replacement.',
  byAge: [
    {
      ageRange: 'All ages',
      context:
        'This applies to all car seats — rear-facing infant seats, convertible seats, forward-facing seats, and boosters. After a crash, do not continue using the car seat until you have determined whether it needs replacement. If in doubt, replace it. The cost of a new car seat is minimal compared to the protection it provides. Contact your insurance company — most auto insurance policies cover car seat replacement after a crash, and you do not need to file a separate claim.',
    },
    {
      ageRange: 'After a moderate to severe crash',
      context:
        'If the crash was moderate or severe (the vehicle could not be driven away, there was structural damage to the door nearest the car seat, airbags deployed, anyone was injured, or you can see any damage to the car seat), the car seat must be replaced. Cut the straps and dispose of the old seat so no one else can use it. Document the car seat (brand, model, purchase date) for your insurance claim. Purchase a new seat and have it inspected for proper installation at a car seat check event.',
    },
    {
      ageRange: 'After a minor crash',
      context:
        'NHTSA defines a minor crash as one where ALL of these are true: the vehicle was drivable from the scene, the door nearest the car seat was undamaged, no one in the vehicle was injured, no airbags deployed, and there is no visible damage to the car seat. In a truly minor crash meeting all these criteria, NHTSA says replacement may not be needed. However, check your car seat manufacturer\'s specific guidance — some manufacturers (like Britax) recommend replacement after any crash regardless of severity.',
    },
  ],
  whenNormal: [
    'You were in a very minor fender bender meeting all NHTSA criteria for a minor crash and your car seat manufacturer allows continued use after minor crashes',
    'You have replaced the car seat after a crash and had the new one inspected for proper installation',
  ],
  whenToMention: [
    'You are unsure whether your crash qualifies as minor or moderate under NHTSA guidelines',
    'Your car seat has visible damage after a crash',
    'You need help finding a car seat inspection station near you',
    'Your insurance company is not covering the car seat replacement',
  ],
  whenToActNow: [
    'Your baby was in the car seat during a crash and shows any signs of injury — neck or back pain, unusual fussiness, vomiting, or lethargy — seek immediate medical evaluation even if the crash seemed minor',
    'Your baby\'s car seat was visibly damaged in the crash — do not use it. Get a new seat immediately',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'puffy-coat-car-seat-danger',
  ],
  sources: [
    {
      org: 'NHTSA',
      citation:
        'National Highway Traffic Safety Administration. Car Seat Use After a Crash.',
      url: 'https://www.nhtsa.gov/equipment/car-seats-and-booster-seats#installation-help-inspection',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Car Seats: Information for Families. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/Car-Safety-Seats-Information-for-Families.aspx',
    },
    {
      org: 'Safe Kids',
      citation:
        'Safe Kids Worldwide. Car Seat Safety.',
      url: 'https://www.safekids.org/safetytips/field_risks/car-seat',
    },
  ],
};
