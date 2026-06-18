import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'hot-car-seat-buckle-burns',
  title: 'Hot Car Seat Buckle Burns in Summer',
  category: 'medical',
  searchTerms: [
    'hot car seat buckle burn baby',
    'metal car seat buckle hot',
    'baby burned car seat summer',
    'car seat burn prevention',
    'hot car seat buckle temperature',
    'baby burned by seat belt buckle',
    'car seat summer safety',
    'cover car seat buckle sun',
    'car seat metal burn baby skin',
    'hot seat belt buckle child',
  ],
  quickAnswer:
    'Metal car seat buckles and straps can heat to over 150°F (65°C) in a sun-exposed car, hot enough to cause burns on a baby\'s delicate skin within seconds. Before buckling your child in, always test metal parts with the back of your hand. Use a light-colored towel or car seat cover to shield the seat when parked, and try to park in shade when possible.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Infant skin is significantly thinner and more susceptible to burns than adult skin. A metal buckle that feels merely warm to an adult can cause a burn on a baby. Check all metal components of the car seat before placing your baby in it — the buckle tongue, chest clip, and any metal adjusters. Keep a light cloth draped over the car seat when not in use, and consider using a car seat sun shade.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers in car seats can get burns on their legs, back, and hands from hot buckles and straps. They may not be able to communicate that something is too hot until after the burn occurs. Always test the seat and buckles with the back of your hand before buckling your child. On hot days, cover the entire car seat with a light blanket when leaving the car.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Older children who buckle themselves may grab a hot buckle before checking. Teach them to touch metal parts carefully first. Using a clothespin or clip to keep the buckle tongue off the seat surface helps prevent it from heating up in direct sunlight.',
    },
  ],
  whenNormal: [
    'You always check the temperature of the buckle and seat before placing your child in the car seat',
    'You cover the car seat when parked in the sun and the surfaces are cool to the touch when you return',
  ],
  whenToMention: [
    'Your child has a minor red mark from a warm buckle that fades within an hour',
    'You want tips on keeping your car seat cool in hot weather',
  ],
  whenToActNow: [
    'Your child has a burn with blistering from a hot car seat buckle — cool the burn with lukewarm (not ice-cold) running water for at least 10 minutes and seek medical care',
    'The burn covers a large area, is on the face, hands, or genitals, or your child seems in significant distress',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Burn Prevention Tips. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Treating-and-Preventing-Burns.aspx',
    },
    {
      org: 'Safe Kids',
      citation:
        'Safe Kids Worldwide. Burn Prevention: Car Seat Safety.',
      url: 'https://www.safekids.org/burn-prevention',
    },
    {
      org: 'NHTSA',
      citation:
        'National Highway Traffic Safety Administration. Child Car Seat Safety.',
      url: 'https://www.nhtsa.gov/equipment/car-seats-and-booster-seats',
    },
  ],
};
