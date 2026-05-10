import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'nasal-congestion-newborn',
  title: 'Nasal Congestion in Newborns',
  category: 'medical',
  searchTerms: [
    'nasal congestion newborn',
    'baby stuffy nose',
    'newborn congested nose',
    'baby can\'t breathe through nose',
    'baby snoring congestion',
    'newborn boogers',
    'baby stuffy nose at night',
    'how to clear baby stuffy nose',
    'newborn nasal congestion remedies',
  ],
  quickAnswer:
    'Nasal congestion is extremely common in newborns and young babies because their nasal passages are very narrow. Babies are obligate nose breathers for the first several months, which means nasal congestion can be particularly distressing for them and their parents. Most congestion in newborns is caused by normal mucus production and narrow passages, not illness. Saline drops and gentle suctioning are the safest and most effective treatments.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns have very small nasal passages (about the diameter of a pencil eraser), so even a small amount of mucus can make them sound very congested. This is usually normal. Babies may snort, sneeze frequently, and sound noisy when breathing, all of which help clear their tiny nasal passages. If your baby is feeding well and not in distress, congestion alone is usually not concerning. Use saline drops and a bulb syringe or nasal aspirator before feeds as needed.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, nasal passages have grown slightly but congestion from colds becomes more common as maternal antibodies wane. A cold causing congestion typically lasts 7-10 days. Use saline drops before suctioning to thin mucus. Running a cool-mist humidifier in the baby\'s room can help. Do NOT use medicated nasal sprays, decongestants, or menthol products in babies. Elevating the head of the crib slightly may also help.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies at this age may get many colds (8-12 per year is normal), especially if in daycare. Congestion during colds can interfere with feeding and sleep. Continue using saline and gentle suctioning but avoid over-suctioning, which can cause nasal swelling. If congestion persists between colds or is always one-sided, mention it to your pediatrician as it could indicate a structural issue or, rarely, an object in the nose.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers can begin to develop allergic rhinitis (nasal allergies), which causes chronic congestion, runny nose, and sneezing. If your toddler has persistent congestion that does not follow the pattern of a cold, allergies may be a factor. Enlarged adenoids can also cause chronic nasal congestion and mouth breathing in toddlers. If your child snores, breathes through the mouth, or has disturbed sleep from congestion, discuss this with your pediatrician.',
    },
  ],
  whenNormal: [
    'Newborn sounds congested but is feeding well, making wet diapers, and breathing comfortably',
    'Baby sneezes frequently and has occasional noisy breathing without fever or other symptoms',
    'Baby has nasal congestion during a cold that gradually improves over 7-10 days',
    'Baby\'s congestion improves after saline drops and gentle suctioning',
  ],
  whenToMention: [
    'Baby has persistent congestion that lasts more than 2 weeks without improvement',
    'Congestion seems to always be on one side of the nose',
    'Toddler has chronic congestion, mouth breathing, or snoring that is not related to colds',
  ],
  whenToActNow: [
    'Baby under 3 months has congestion with fever (100.4 F or higher) -- call your pediatrician immediately',
    'Baby is struggling to breathe, has nasal flaring, chest retractions, or refuses to feed due to congestion -- seek urgent care',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Stuffy Nose in Babies. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Stuffy-Nose.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Nasal Congestion in Infants.',
      url: 'https://www.mayoclinic.org/symptoms/nasal-congestion/basics/when-to-see-doctor/sym-20050644',
    },
  ],
};
