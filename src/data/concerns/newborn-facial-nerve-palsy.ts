import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-facial-nerve-palsy',
  title: 'Facial Nerve Damage at Birth',
  category: 'medical',
  searchTerms: [
    'newborn facial nerve palsy',
    'baby face drooping one side',
    'birth injury facial nerve',
    'newborn asymmetric face crying',
    'baby facial paralysis',
    'forceps facial nerve damage',
    'newborn one side face not moving',
    'baby crooked smile',
    'facial nerve palsy newborn prognosis',
    'baby face asymmetry birth injury',
  ],
  quickAnswer:
    'Facial nerve palsy in a newborn causes one side of the face to droop or not move as well, especially noticeable when the baby cries. It can result from pressure on the nerve during delivery (from forceps or passage through the birth canal) or, rarely, from developmental causes. Most cases from birth pressure resolve completely within a few weeks to months.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Facial nerve palsy is typically noticed at birth or soon after when the baby cries and one side of the face does not move symmetrically. On the affected side, the forehead may not wrinkle, the eye may not close completely, and the mouth may droop. If caused by pressure during delivery, the prognosis is excellent, with most cases resolving within 2-3 weeks as the nerve recovers from compression. If the eye does not close fully, protecting the eye with lubricating drops or ointment may be recommended to prevent drying.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Most pressure-related facial nerve palsies have resolved or are improving significantly by this time. If there is no improvement by 4-6 weeks, further evaluation may be warranted to determine whether the injury is more severe. Developmental (congenital) facial nerve palsy, which is present from birth but not caused by delivery trauma, may not improve and may require specialist evaluation.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Nearly all delivery-related facial nerve palsies have resolved by this time. If facial asymmetry persists, your pediatrician may refer to a pediatric neurologist or ENT specialist. Congenital facial palsy may require different management depending on the underlying cause.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Persistent facial nerve palsy at this age is likely either congenital or the result of more severe nerve injury. Specialist evaluation can determine whether any intervention would be beneficial.',
    },
  ],
  whenNormal: [
    'Mild facial asymmetry only visible during crying that gradually improves over weeks',
    'Baby can close both eyes and feed without difficulty',
    'Progressive improvement in facial movement over the first few weeks',
  ],
  whenToMention: [
    'You notice your baby\'s face looks asymmetric, especially during crying',
    'One eye does not seem to close fully',
    'There is no improvement in facial movement after 3-4 weeks',
  ],
  whenToActNow: [
    'The affected eye cannot close and appears dry or irritated, requiring immediate eye protection',
    'Facial palsy appears alongside other neurological symptoms such as difficulty swallowing, poor feeding, or limb weakness',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Birth Injuries. Caring for Your Baby and Young Child.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Neonatal Facial Nerve Palsy. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK538219/',
    },
  ],
  relatedConcernSlugs: ['newborn-forceps-marks', 'newborn-brachial-plexus-injury', 'newborn-bruising-from-delivery'],
};
