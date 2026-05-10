import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'achondroplasia-baby',
  title: 'Achondroplasia (Dwarfism) in Babies',
  category: 'medical',
  searchTerms: [
    'achondroplasia baby',
    'baby short limbs',
    'dwarfism baby signs',
    'baby large head short arms legs',
    'achondroplasia newborn',
    'skeletal dysplasia baby',
    'baby disproportionate short stature',
    'achondroplasia diagnosis infant',
  ],
  quickAnswer:
    'Achondroplasia is the most common form of short-limbed dwarfism, affecting about 1 in 15,000 to 40,000 births. It is caused by a mutation in the FGFR3 gene and is usually apparent at birth with characteristic features including short limbs, a larger head, and a prominent forehead. Intelligence is normal. With monitoring for specific complications and supportive care, children with achondroplasia lead full, active, and independent lives.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Achondroplasia is usually evident at birth or diagnosed on prenatal ultrasound. Newborns have short arms and legs (especially the upper arms and thighs), a relatively large head with a prominent forehead, and a flattened nasal bridge. The trunk is of normal length. Low muscle tone is common and can affect head control and feeding. Monitoring for hydrocephalus (head circumference tracking) and foramen magnum stenosis (narrowing at the base of the skull) is critical in the newborn period.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies with achondroplasia often have low muscle tone that affects motor development. Head control may be delayed. Sleep studies may be recommended to check for obstructive sleep apnea, which is common due to midface hypoplasia. Head circumference should be plotted on achondroplasia-specific growth charts. Recurrent ear infections may begin and should be monitored closely to prevent hearing loss.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Motor milestones are typically delayed — sitting independently often occurs around 9-12 months rather than 6-8 months. Sitting posture may involve a rounded back (thoracolumbar kyphosis), which is normal for achondroplasia in infancy and usually resolves when walking begins. Physical therapy helps support motor development. Cognitive development is typically normal.',
    },
    {
      ageRange: '12 months+',
      context:
        'Walking is usually delayed until 18-30 months, partly due to the head-to-body proportions and low tone. Once walking begins, the thoracolumbar kyphosis typically converts to lumbar lordosis (increased curve in the lower back). Speech and cognitive development are typically normal. The medication vosoritide (Voxzogo), approved for children as young as age 5, can increase growth velocity. Ongoing orthopedic, ENT, and neurological monitoring continues through childhood.',
    },
  ],
  whenNormal: [
    'Your baby with achondroplasia is following the achondroplasia-specific growth charts appropriately',
    'Your baby has delayed but steady motor progress with physical therapy support',
    'Your baby is cognitively and socially developing on time',
    'Your baby\'s head circumference is growing along the expected curve for achondroplasia',
  ],
  whenToMention: [
    'Your baby has signs of achondroplasia (short limbs, large head) and has not yet been formally diagnosed',
    'Your baby with achondroplasia has increasing snoring, pauses in breathing during sleep, or chronic ear infections',
    'Your baby seems to have sudden changes in motor abilities or excessive irritability',
  ],
  whenToActNow: [
    'Your baby with achondroplasia has signs of spinal cord compression — sudden weakness in legs, changes in breathing pattern, or loss of previously achieved motor skills — this may indicate foramen magnum stenosis',
    'Your baby has rapidly increasing head size, bulging fontanelle, vomiting, or extreme irritability — this may indicate hydrocephalus',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Health Supervision for Children With Achondroplasia. Pediatrics, 2005.',
      url: 'https://publications.aap.org/pediatrics/article/116/3/771/62922/Health-Supervision-for-Children-With-Achondroplasia',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Achondroplasia. MedlinePlus Genetics, 2023.',
      url: 'https://medlineplus.gov/genetics/condition/achondroplasia/',
    },
  ],
};
