import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'car-sickness-baby-toddler',
  title: 'Car Sickness in Babies and Toddlers',
  category: 'medical',
  searchTerms: [
    'baby throws up in car',
    'toddler car sick every trip',
    'motion sickness in toddler',
    'baby vomiting in car seat',
    'how to prevent car sickness toddler',
    'car sickness remedies for baby',
    'toddler nauseous in car',
    'child gets sick on car rides',
  ],
  quickAnswer:
    'Motion sickness occurs when the brain receives conflicting signals from the eyes, inner ear, and body about movement. It is uncommon in babies under 2 but becomes more common in children ages 2-12. Rear-facing car seats may contribute because the child cannot see the direction of travel. Strategies include fresh air, avoiding heavy meals before travel, looking out the window (for forward-facing children), and frequent stops. Medication is generally not recommended for very young children without a pediatrician\'s guidance.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'True motion sickness is very rare at this age. If your baby vomits in the car, it is more likely due to reflux, overfeeding before travel, or being uncomfortable in the car seat position. Ensure proper car seat positioning and avoid feeding large volumes right before a car ride.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Motion sickness remains uncommon. If your baby regularly vomits in the car, check car seat recline angle and positioning. Some babies are sensitive to car seat position, and adjusting recline may help. If vomiting is frequent outside the car as well, discuss with your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Sensitivity to motion may begin to develop. Keep car rides smooth, provide fresh air through cracked windows, and offer small snacks rather than large meals before travel. A rear-facing seat means the child cannot see out the front window, which can worsen motion sensitivity.',
    },
    {
      ageRange: '12 months+',
      context:
        'Motion sickness becomes more common from age 2 onward. For toddlers in rear-facing seats, ensure they can see out a side window. Provide light snacks (crackers, dry cereal) and avoid heavy or greasy foods before travel. Take frequent breaks on long trips. Ginger in age-appropriate forms may help. Avoid screens during car rides as this can worsen symptoms.',
    },
  ],
  whenNormal: [
    'Your toddler occasionally feels sick on longer car rides or winding roads',
    'Car sickness improves with fresh air, frequent stops, and lighter eating before travel',
    'Your child feels better quickly after getting out of the car',
    'Motion sickness runs in your family — it has a strong genetic component',
  ],
  whenToMention: [
    'Your baby under 12 months vomits frequently during car rides and you are unsure if it is motion sickness or another issue like reflux',
    'Car sickness is so severe that your child cannot tolerate any car trip without vomiting, significantly limiting daily activities',
    'You want to discuss medication options for an older toddler before a long road trip',
  ],
  whenToActNow: [
    'Your baby or toddler vomits repeatedly and shows signs of dehydration — no wet diapers for 6+ hours, no tears when crying, sunken fontanelle',
    'Vomiting is accompanied by fever, diarrhea, or lethargy that suggests illness rather than motion sickness',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'flying-with-baby-ear-pressure',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Car Sickness. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Car-Sickness.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Motion sickness: Prevention.',
      url: 'https://www.mayoclinic.org/diseases-conditions/motion-sickness/symptoms-causes/syc-20374909',
    },
  ],
};
