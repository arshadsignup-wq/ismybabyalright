import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-congestion-no-cold',
  title: 'Nasal Congestion in Newborns Without a Cold',
  category: 'medical',
  searchTerms: [
    'newborn congestion no cold',
    'baby stuffy nose no mucus',
    'newborn nasal congestion normal',
    'baby sounds congested',
    'newborn stuffy nose',
    'baby congested not sick',
    'infant nasal congestion',
    'newborn snoring from congestion',
    'baby cant breathe through nose',
    'newborn noisy nose breathing',
  ],
  quickAnswer:
    'Nasal congestion in newborns without a cold is very common and usually harmless. Newborns have very small nasal passages that are easily congested by normal mucus, dried milk, lint, or dry air. Because babies breathe primarily through their noses, even mild congestion can sound significant. Saline drops and a bulb syringe or nasal aspirator can help, along with a cool-mist humidifier.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Newborns are obligate nasal breathers, meaning they preferentially breathe through their noses. Their nasal passages are very narrow (only a few millimeters), so even a small amount of mucus or debris can cause noisy, congested-sounding breathing. This is often called "newborn congestion" and is not a cold. You can help by using 1-2 drops of saline in each nostril and gently suctioning with a bulb syringe or nasal aspirator before feeds and sleep. A cool-mist humidifier in the nursery can also help keep nasal passages moist.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Congestion without illness may persist as nasal passages are still small. You may notice your baby sounds stuffy, especially at night or after sleeping. Continue with saline and gentle suctioning as needed, but avoid excessive suctioning, which can cause swelling and make congestion worse. If your baby develops a runny nose with colored discharge, cough, or fever, it may be a viral infection.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Nasal passages are slightly larger, and physiological congestion becomes less common. If congestion persists or worsens, especially with other symptoms, it may be related to environmental irritants, allergies (though rare at this age), or recurrent upper respiratory infections.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Physiological newborn congestion should no longer be an issue. Persistent congestion at this age may be related to frequent colds (normal for this age group), adenoid enlargement, or environmental factors. Discuss persistent congestion with your pediatrician.',
    },
  ],
  whenNormal: [
    'Noisy nasal breathing in a newborn without runny nose, cough, or fever',
    'Congestion that improves with saline drops and gentle suctioning',
    'Baby is feeding well and gaining weight normally',
    'Congestion sounds worse at night but baby is otherwise comfortable',
  ],
  whenToMention: [
    'Congestion persists and seems to interfere with feeding or sleep',
    'You notice thick or colored nasal discharge',
    'Baby seems more congested than usual despite using saline and a humidifier',
  ],
  whenToActNow: [
    'Baby is struggling to breathe, has nasal flaring, chest retractions, or rapid breathing',
    'Congestion with fever (100.4F or higher in a baby under 3 months), poor feeding, or decreased wet diapers',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Nasal Congestion in Newborns. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Stuffy-Nose.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Stuffy Nose in Babies. Patient Care and Health Information.',
      url: 'https://www.mayoclinic.org/symptoms/nasal-congestion/basics/when-to-see-doctor/sym-20050644',
    },
  ],
  relatedConcernSlugs: ['newborn-sneezing-frequently', 'newborn-noisy-breathing-normal', 'baby-mouth-breathing'],
};
