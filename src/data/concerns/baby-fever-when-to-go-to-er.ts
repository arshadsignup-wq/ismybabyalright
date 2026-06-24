import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-fever-when-to-go-to-er',
  title: 'Baby Fever: When to Go to the Emergency Room',
  category: 'medical',
  searchTerms: [
    'baby fever when to go to ER',
    'baby fever emergency',
    'how high fever baby hospital',
    'newborn fever emergency',
    'baby fever 104 what to do',
    'infant fever when to worry',
    'baby fever not going down',
    'baby fever ER or wait',
    'baby fever danger level',
    'when to take baby to hospital fever',
  ],
  quickAnswer:
    'Any fever (100.4 degrees F / 38 degrees C or higher) in a baby under 3 months requires immediate medical evaluation, as it can indicate a serious infection. For babies 3-6 months, a fever above 102 degrees F (38.9 degrees C) warrants a call to your pediatrician. For babies over 6 months, how your baby is acting matters more than the number on the thermometer. A high fever alone does not mean an emergency, but fever combined with lethargy, difficulty breathing, or other concerning symptoms requires urgent care.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'A rectal temperature of 100.4 degrees F (38 degrees C) or higher in a baby under 3 months is always a medical emergency. Go to the emergency room immediately, even if your baby seems okay otherwise. Young babies have immature immune systems and can deteriorate quickly. Serious bacterial infections (meningitis, urinary tract infections, bloodstream infections) can present with fever as the only initial sign. Your baby will likely need blood tests, urine tests, and possibly a lumbar puncture. Do not give fever-reducing medication before the evaluation unless instructed by a doctor.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Call your pediatrician for any fever in this age range. Go to the ER if the fever is above 102 degrees F (38.9 degrees C), if your baby is lethargic, feeding poorly, or seems very irritable, or if it is after hours and your pediatrician is unavailable. Fever-reducing medication (infant acetaminophen - Tylenol) can be given at this age as directed. Watch for signs of dehydration and serious illness: fewer wet diapers, sunken fontanelle, inconsolable crying, or a rash that does not blanch when pressed.',
    },
    {
      ageRange: '6-36 months',
      context:
        'For babies and toddlers over 6 months, the fever number is less important than how your child is acting. A child with a 103 degree F fever who is drinking, somewhat playful, and making eye contact is generally less concerning than a child with a 101 degree F fever who is limp, unresponsive, or refusing all fluids. Go to the ER if: fever has lasted more than 3 days, your child seems extremely ill, there are signs of dehydration, your child has a seizure, or there is a non-blanching rash. Ibuprofen (Motrin) can be given in addition to acetaminophen for babies 6 months and older.',
    },
  ],
  whenNormal: [
    'Your baby over 6 months has a fever but is still drinking, making wet diapers, and is somewhat interactive.',
    'Your child\'s fever responds to fever-reducing medication and they perk up when the fever is down.',
    'Your child has a mild fever (under 102 degrees F) with cold symptoms and is otherwise acting normally.',
  ],
  whenToMention: [
    'Your baby\'s fever has lasted more than 2-3 days, even if they are acting reasonably well.',
    'Your baby is between 3-6 months with any fever.',
    'The fever keeps returning after seeming to resolve for a day, suggesting a new or persistent infection.',
  ],
  whenToActNow: [
    'Any fever (100.4 degrees F or higher) in a baby under 3 months - go to the ER immediately.',
    'Your baby has a fever with a stiff neck, bulging fontanelle, seizure, purple rash, difficulty breathing, or extreme lethargy.',
    'Your baby has a fever and signs of dehydration - no wet diaper in 8+ hours, no tears, sunken fontanelle.',
    'Your baby has a fever above 104 degrees F (40 degrees C) that does not respond to fever-reducing medication.',
    'Your baby has a fever and seems to be in significant pain that you cannot identify or manage.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-febrile-seizure-first-time',
    'persistent-fever-baby',
    'baby-first-cold-what-to-do',
    'baby-dehydration-hot-weather',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fever and Your Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/Fever-and-Your-Baby.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. When to Call Your Pediatrician: Fever. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/When-to-Call-the-Pediatrician.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Fever in a Newborn.',
      url: 'https://www.cdc.gov/group-b-strep/about/newborns-infants.html',
    },
  ],
};
