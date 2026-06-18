import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'puffy-coat-car-seat-danger',
  title: 'Why Puffy Coats Are Dangerous in Car Seats',
  category: 'medical',
  searchTerms: [
    'puffy coat car seat danger',
    'winter coat car seat safety',
    'bulky jacket car seat',
    'car seat harness loose winter coat',
    'coat compression car seat crash',
    'baby winter car seat safety',
    'can baby wear coat in car seat',
    'car seat pinch test coat',
    'car seat cold weather tips',
    'snowsuit car seat danger',
  ],
  quickAnswer:
    'Puffy winter coats, snowsuits, and bulky jackets create a dangerous gap between the car seat harness and your child\'s body. In a crash, the coat compresses instantly and the child can slide through the loose harness straps, risking ejection. Instead, buckle your child in thin layers, then place the coat on backward over the straps like a blanket, or use a car seat cover.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Infants in rear-facing seats are especially vulnerable because bulky clothing makes it difficult to achieve a snug harness fit. Use thin fleece layers under the harness, and place a blanket over the buckled baby. Car seat bundle bags or shower cap-style covers that go over the outside of the seat are safe alternatives. The harness should pass the "pinch test" — you should not be able to pinch any excess webbing at the shoulder.',
    },
    {
      ageRange: '1-4 years',
      context:
        'Toddlers in forward-facing seats with harnesses face the same risk. A puffy coat can add 2-4 inches of false bulk that compresses to nothing in a crash. To test if a coat is too bulky: buckle your child wearing the coat and tighten the straps snugly, then remove the child, take off the coat, and put them back in without adjusting the straps. If the straps are now loose, the coat is too bulky for car seat use.',
    },
    {
      ageRange: '4-8 years',
      context:
        'Children in booster seats using the vehicle seat belt face a similar issue — a bulky coat prevents the lap belt from sitting low and flat across the hips. The coat should be removed and placed over the child like a blanket after the seat belt is properly positioned.',
    },
  ],
  whenNormal: [
    'Your child wears thin, compressible layers (fleece, long sleeves) under the car seat harness and the harness passes the pinch test',
    'You place the coat over the harness like a blanket or use a car seat cover that goes over the outside of the seat',
    'You pre-warm the car before putting your child in the car seat',
  ],
  whenToMention: [
    'You are unsure whether your child\'s coat is too thick for safe car seat use and want to learn the pinch test',
    'You want recommendations for car seat-safe winter clothing options',
  ],
  whenToActNow: [
    'You realize your child has been riding in a car seat with a puffy coat and loose harness straps — adjust the setup before your next car trip, as the risk exists every time the car is in motion',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Car Seat Safety in Winter. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/Winter-Car-Seat-Safety-Tips.aspx',
    },
    {
      org: 'NHTSA',
      citation:
        'National Highway Traffic Safety Administration. Car Seat Tips for Winter.',
      url: 'https://www.nhtsa.gov/equipment/car-seats-and-booster-seats',
    },
    {
      org: 'Safe Kids',
      citation:
        'Safe Kids Worldwide. Winter Car Seat Safety.',
      url: 'https://www.safekids.org/car-seat',
    },
  ],
};
