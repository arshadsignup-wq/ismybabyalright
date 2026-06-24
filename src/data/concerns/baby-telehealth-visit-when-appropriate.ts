import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-telehealth-visit-when-appropriate',
  title: 'When Is a Telehealth Visit Appropriate for Your Baby?',
  category: 'medical',
  searchTerms: [
    'telehealth baby when to use',
    'virtual doctor visit baby',
    'pediatric telehealth appropriate',
    'online doctor baby',
    'video visit pediatrician baby',
    'telehealth vs in person baby',
    'when to use telemedicine baby',
    'virtual pediatrician appointment',
    'telehealth infant safe',
    'baby sick telehealth or ER',
  ],
  quickAnswer:
    'Telehealth visits can be appropriate for many baby and toddler concerns including mild rashes, feeding questions, behavioral concerns, medication questions, follow-up visits, and mild cold symptoms. However, in-person visits are necessary when a physical examination is needed, such as for ear infections, high fever in young infants, breathing difficulties, injuries, or any emergency. Telehealth is a complement to, not a replacement for, in-person pediatric care.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Telehealth can be useful for breastfeeding concerns, diaper rash questions, normal newborn questions (belly button care, skin changes, sleep patterns), and postpartum parent support. However, young infants need in-person evaluation more often than older babies because physical signs can be subtle. Any fever (100.4F/38C or above) in a baby under 3 months always requires an in-person or emergency visit, not telehealth. Breathing concerns, poor feeding, lethargy, and jaundice also need in-person assessment.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Telehealth is helpful for: mild cold symptoms without breathing difficulty, mild rashes you can show on camera, feeding and sleep questions, developmental milestone concerns, medication dosage questions, and follow-ups after a previous in-person visit. In-person visits are needed for: suspected ear infections (the ear needs to be examined), high fever lasting more than 3 days, dehydration concerns, any breathing difficulty, and when the doctor needs to listen to the heart or lungs. A good rule: if you would call the nurse line, telehealth may be appropriate.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Telehealth works well for toddler behavioral concerns, mild illness assessment, skin conditions visible on camera, constipation questions, sleep issues, and developmental concerns. Many pediatricians can triage whether an in-person visit is needed during a telehealth call, saving you an unnecessary trip. In-person visits remain essential for: well-child checkups and vaccinations, injuries, prolonged illness, and any symptoms concerning enough that the doctor needs hands-on examination.',
    },
  ],
  whenNormal: [
    'You use telehealth for mild concerns and follow your pediatrician\'s advice about whether an in-person visit is needed.',
    'You attend all recommended well-child checkups in person for vaccinations and developmental screening.',
    'You use telehealth for convenient follow-up after an in-person visit.',
  ],
  whenToMention: [
    'You are unsure whether your baby\'s symptoms warrant an in-person visit or can be handled via telehealth.',
    'You want to discuss your baby\'s development or behavior and are not sure if a video visit is sufficient.',
    'You live in a rural area with limited pediatric access and rely heavily on telehealth.',
  ],
  whenToActNow: [
    'Your baby has difficulty breathing, is turning blue, or is unresponsive - call 911, do not use telehealth.',
    'Your baby under 3 months has a fever of 100.4F (38C) or above - this needs immediate in-person evaluation.',
    'Your baby has had a head injury, seizure, or ingested something potentially toxic - go to the ER immediately.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['persistent-fever-baby', 'baby-stuffy-nose-remedies', 'baby-rash-from-new-detergent'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Telehealth: How to Make the Most of Your Virtual Visit. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/health-management/Pages/Palliative-Telehealth-Palliative-Care-and-Virtual-Visits.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Telehealth and Pediatric Practice. Pediatrics, 2021.',
      url: 'https://publications.aap.org/pediatrics/article/148/3/e2021053129/181149/Telehealth-Interim-Guidance',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention - Using Telehealth Services.',
      url: 'https://www.cdc.gov/coronavirus/2019-ncov/hcp/telehealth.html',
    },
  ],
};
