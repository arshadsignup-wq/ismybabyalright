import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-herpes-simplex-cold-sore',
  title: 'Cold Sores (Herpes Simplex) on Baby',
  category: 'skin',
  searchTerms: ['baby cold sore', 'baby herpes simplex', 'cold sore baby dangerous', 'neonatal herpes', 'baby cold sore lip', 'infant herpes virus', 'kissing baby cold sore risk', 'baby HSV infection', 'cold sore newborn danger', 'toddler cold sore first time'],
  quickAnswer: 'Cold sores are caused by herpes simplex virus (HSV) and can be very dangerous for newborns under 3 months old. In older babies and toddlers, a first cold sore infection may cause painful mouth sores and fever but is usually manageable. Never kiss a baby when you have an active cold sore, and seek immediate medical attention if a newborn is exposed.',
  byAge: [
    { ageRange: '0-3 months', context: 'Herpes simplex virus is extremely dangerous in newborns because their immune systems cannot fight it effectively. Neonatal herpes can cause serious brain, organ, and skin damage. If a newborn develops blisters, fever, poor feeding, or lethargy, especially if exposed to someone with a cold sore, seek emergency medical care immediately.' },
    { ageRange: '3-6 months', context: 'While still a concern, herpes simplex in babies beyond the neonatal period is typically less severe. A primary HSV infection may cause gingivostomatitis with painful sores inside the mouth, fever, drooling, and refusal to eat. Pain management and hydration are key. Contact your pediatrician if you suspect HSV infection.' },
    { ageRange: '6-12 months', context: 'As babies explore and are kissed by more family members, exposure risk increases. Primary herpes gingivostomatitis can cause significant discomfort for 7 to 10 days. Offer cold fluids and soft foods, and use pain medication as recommended by your pediatrician. The virus then goes dormant and cold sores may recur periodically.' },
    { ageRange: '12-24 months', context: 'Toddlers may have their first HSV exposure at daycare from shared toys and cups. Recurrent cold sores are milder than the first outbreak and usually appear on the lips. Keep cold sore areas clean and avoid touching other parts of the body, especially the eyes. Cold sores near the eye need urgent medical evaluation.' },
  ],
  whenNormal: ['A recurrent cold sore on the lip of a toddler that is small, healing on its own, and not near the eyes'],
  whenToMention: ['A first-time outbreak of mouth sores with fever and difficulty eating', 'Your baby was exposed to someone with an active cold sore', 'Recurrent cold sores that are frequent or spreading'],
  whenToActNow: ['Any blisters, fever, or illness in a baby under 6 weeks who may have been exposed to HSV requires emergency evaluation', 'Cold sores near the eye, which can cause a serious eye infection', 'Widespread blisters over eczema patches, suggesting eczema herpeticum', 'A baby with cold sores who becomes lethargic, has a high fever, or stops feeding'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Herpes Simplex Virus. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/infections/Pages/Herpes-Simplex-Virus-Cold-Sores.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Genital Herpes - CDC Detailed Fact Sheet.', url: 'https://www.cdc.gov/herpes-simplex-virus/hcp/clinical-overview/neonatal-hsv.html' },
    { org: 'NIH', citation: 'National Library of Medicine. Neonatal Herpes Simplex Virus Infection. Pediatrics in Review.', url: 'https://pubmed.ncbi.nlm.nih.gov/22474121/' },
  ],
  relatedConcernSlugs: ['baby-blister-rash-fluid-filled', 'baby-eczema-infected-signs'],
};
