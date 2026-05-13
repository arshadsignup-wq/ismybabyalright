import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'fever-management-without-medicine',
  title: 'Managing Fever Without Medication',
  category: 'medical',
  searchTerms: [
    'manage baby fever without medicine',
    'baby fever home remedies',
    'reduce baby fever naturally',
    'baby fever no medication',
    'baby fever comfort measures',
    'lukewarm bath baby fever',
    'how to cool down baby fever',
    'baby fever without Tylenol',
    'natural fever relief baby',
  ],
  quickAnswer:
    'Fever is the body\'s natural defense against infection, and not every fever needs medication. For babies over 3 months with low-grade fevers who are otherwise comfortable, non-medication strategies like keeping them lightly dressed, offering extra fluids, and maintaining a comfortable room temperature can be effective. The goal of fever management is comfort, not achieving a specific number on the thermometer.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Do not attempt to manage a fever at home in a baby under 3 months. Any rectal temperature of 100.4\u00b0F (38\u00b0C) or higher requires immediate medical evaluation. Do not give fever-reducing medication before being seen by a doctor, as it may mask important symptoms. Seek care first  -  your doctor will guide you on treatment.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If your baby has a low-grade fever and is alert, feeding, and producing wet diapers, you can try comfort measures before reaching for medication. Dress your baby in a single light layer, offer frequent breastfeeds or formula to prevent dehydration, and keep the room at a comfortable temperature (68-72\u00b0F). Avoid cold baths or rubbing alcohol  -  these can cause shivering, which actually raises body temperature.',
    },
    {
      ageRange: '6-12 months',
      context:
        'At this age, many fevers are from viral infections or teething and resolve on their own. Offer extra fluids including water (in small amounts) alongside breast milk or formula. A lukewarm (not cold) bath can provide temporary comfort. Watch for signs that your baby is uncomfortable  -  if they are fussy, not sleeping, or refusing to eat, medication may still be the best option for their comfort.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers can often tolerate low-grade fevers well, especially if they are still playing and drinking. Encourage fluid intake with popsicles, water, or diluted juice. Keep clothing light and avoid bundling. Rest is important but does not need to mean bed rest  -  let your toddler set their own pace. If the fever makes your child visibly miserable, medication for comfort is appropriate.',
    },
  ],
  whenNormal: [
    'Your baby over 3 months has a low-grade fever (under 102\u00b0F) and is alert, feeding, and playing',
    'The fever comes down somewhat with comfort measures like light clothing and extra fluids',
    'Your child has brief periods of fussiness but also periods of normal activity during the fever',
    'The fever is associated with a known viral illness and is following the expected 2-3 day timeline',
  ],
  whenToMention: [
    'The fever persists beyond 3 days despite comfort measures and you are unsure whether medication is needed',
    'Your baby is mildly fussy and eating somewhat less but you want guidance on the right approach',
    'You have questions about appropriate fever-reducing medication dosing for your baby\'s weight',
  ],
  whenToActNow: [
    'Any fever in a baby under 3 months requires immediate medical evaluation  -  do not try to manage it at home',
    'Your baby of any age has a fever with difficulty breathing, a stiff neck, a non-blanching rash, extreme lethargy, or a seizure  -  seek emergency care immediately',
    'Your baby has signs of dehydration: no tears, dry mouth, no wet diaper in 6 or more hours, or sunken soft spot',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'Sullivan JE, Farrar HC. Fever and Antipyretic Use in Children. Pediatrics, 2011.',
      url: 'https://publications.aap.org/pediatrics/article/127/3/580/65075/Fever-and-Antipyretic-Use-in-Children',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Treating a Fever Without Medicine. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/Fever-Without-Fear.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Fever in Children: Overview. InformedHealth.org.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK279455/',
    },
  ],
};
