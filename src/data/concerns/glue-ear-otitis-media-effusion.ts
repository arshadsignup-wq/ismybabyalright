import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'glue-ear-otitis-media-effusion',
  title: 'Glue Ear (Otitis Media with Effusion)',
  category: 'medical',
  searchTerms: [
    'glue ear baby',
    'fluid behind eardrum baby',
    'otitis media with effusion baby',
    'baby can\'t hear after ear infection',
    'middle ear fluid baby',
    'baby muffled hearing',
    'ear effusion toddler',
    'glue ear hearing loss child',
  ],
  quickAnswer:
    'Glue ear (otitis media with effusion) is a buildup of thick, sticky fluid behind the eardrum without active infection. It is extremely common in young children, affecting about 90% of children at some point before school age. In most cases, it resolves on its own within 3 months. However, persistent glue ear can temporarily reduce hearing and may affect speech and language development if left unaddressed.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Glue ear is less commonly diagnosed at this age but can occur, especially after a cold or upper respiratory infection. If your newborn failed their hearing screening, fluid in the middle ear may be a contributing factor. A repeat hearing test is typically recommended at this age before assuming permanent hearing loss.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies in this age range may develop glue ear following recurrent colds. Signs can be subtle  -  your baby may seem less responsive to quiet sounds or voices. If your baby has had repeated ear infections, your pediatrician may check for residual fluid. Most cases resolve spontaneously as the Eustachian tubes mature.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is a peak age for ear infections and subsequent glue ear. After an acute ear infection resolves, fluid can persist for weeks to months. Your baby may tug at their ears, seem inattentive to sounds, or appear more irritable. If fluid persists for more than 3 months, a formal hearing evaluation is recommended to assess whether it is affecting hearing.',
    },
    {
      ageRange: '12 months+',
      context:
        'Persistent glue ear in toddlers is particularly important to monitor because this is a critical period for speech and language development. If your toddler has had fluid behind the eardrums for more than 3 months with documented hearing loss, your doctor may refer to an ENT specialist to discuss treatment options including ear tubes (tympanostomy tubes). Many toddlers outgrow glue ear as the Eustachian tubes develop.',
    },
  ],
  whenNormal: [
    'Fluid behind the eardrum is found incidentally during a well-child visit after a recent cold, and your baby seems to hear normally.',
    'Your baby had an ear infection and the doctor notes residual fluid at the follow-up visit  -  this commonly takes 4-6 weeks to clear.',
    'Your child has one episode of glue ear that resolves within 3 months without any speech or hearing concerns.',
    'Your toddler passes a hearing screen despite having some fluid noted on examination.',
  ],
  whenToMention: [
    'Your baby seems less responsive to sounds or voices than usual, especially after a recent ear infection.',
    'Fluid behind the eardrum has been present for more than 3 months based on repeated examinations.',
    'Your toddler\'s speech development seems delayed or they frequently say "what?" or increase the TV volume.',
  ],
  whenToActNow: [
    'Your baby has persistent hearing loss confirmed by audiological testing along with fluid in both ears for more than 3 months  -  this combination warrants prompt ENT referral.',
    'Your toddler is showing significant speech and language delays that may be related to chronic reduced hearing from glue ear.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Clinical Practice Guideline: Otitis Media with Effusion. Pediatrics, 2016.',
      url: 'https://publications.aap.org/pediatrics/article/137/2/e20154709/52267/Otitis-Media-with-Effusion-Diagnosis-and',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Ear Infections in Children.',
      url: 'https://www.nidcd.nih.gov/health/ear-infections-children',
    },
  ],
};
