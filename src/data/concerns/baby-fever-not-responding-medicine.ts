import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-fever-not-responding-medicine',
  title: 'My Baby\'s Fever Won\'t Go Down with Medicine',
  category: 'medical',
  searchTerms: [
    'baby fever not going down with medicine',
    'fever won\'t break baby',
    'baby fever still high after tylenol',
    'medicine not working for baby fever',
    'baby fever not responding to ibuprofen',
    'fever won\'t come down baby',
    'persistent high fever baby',
    'baby fever keeps coming back',
    'fever reducer not working baby',
    'baby still hot after medicine',
  ],
  quickAnswer:
    'Fever-reducing medicine does not always bring the temperature back to normal, and that is okay. The goal is to improve your baby\'s comfort, not to reach a specific number. A temperature drop of 1-2 degrees after medication is considered a response. If your baby remains uncomfortable and the fever stays above 104°F despite proper dosing, contact your pediatrician.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Any fever in a baby under 3 months that does not respond to a single dose of acetaminophen should be evaluated immediately. At this age, fever management at home is not the priority; identifying the cause of the fever is. Call your pediatrician or go to the emergency room if your newborn has a fever of 100.4°F or higher.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If acetaminophen does not bring your baby\'s fever down at all within 60-90 minutes, ensure you gave the correct weight-based dose using the included measuring device. A partial response (fever drops but does not return to normal) is expected and acceptable. Contact your pediatrician if the fever persists above 102°F despite medication or your baby seems very unwell.',
    },
    {
      ageRange: '6-12 months',
      context:
        'With both acetaminophen and ibuprofen available, you have more options. If one medication does not provide adequate relief, your pediatrician may suggest trying the other or alternating. Make sure you are waiting appropriate intervals between doses (4-6 hours for acetaminophen, 6-8 hours for ibuprofen). Tepid sponge baths and light clothing can also help.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers with viral illnesses may have fevers that persist for 3-5 days and may not always respond dramatically to medication. Focus on your child\'s behavior rather than the thermometer number. A toddler who still plays, drinks fluids, and engages with you despite a fever is generally doing okay. A toddler who is listless, refuses all fluids, or seems unusually ill needs medical evaluation.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Stubborn fevers in older toddlers are common with certain viral infections. Roseola, for example, can cause high fevers for 3-5 days that may be hard to control with medication. Continue to offer fluids, keep your child comfortable, and watch for warning signs. If the fever lasts more than 5 days or new concerning symptoms develop, see your pediatrician.',
    },
  ],
  whenNormal: [
    'The fever drops by 1-2 degrees after medication even if it does not return to normal',
    'Your baby seems more comfortable and active after medication even if still slightly warm',
    'The fever returns when the medication wears off but responds again to the next dose',
    'A viral illness causes fever for 3-5 days that improves with medication even if not completely resolved',
  ],
  whenToMention: [
    'The fever has persisted for more than 3 days without improvement',
    'Your baby\'s fever does not drop at all after a properly dosed medication',
    'You are unsure if you are dosing the medication correctly by weight',
  ],
  whenToActNow: [
    'Your baby\'s fever stays above 104°F (40°C) despite proper medication dosing and comfort measures, or your baby under 3 months has any fever',
    'Your baby is extremely lethargic, difficult to wake, refusing all fluids, has a rash, difficulty breathing, or shows signs of dehydration alongside the unresponsive fever',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-fever-acetaminophen-vs-ibuprofen',
    'baby-fever-alternating-medicines',
    'baby-high-fever-over-104',
    'persistent-fever-baby',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fever Without Fear. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/Fever-Without-Fear.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Fever: First aid. When to seek emergency help.',
      url: 'https://www.mayoclinic.org/first-aid/first-aid-fever/basics/art-20056685',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Fever in Infants and Children. American Family Physician.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/34264616/',
    },
  ],
};
