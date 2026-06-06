import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-sneezing-frequently',
  title: 'Frequent Sneezing in Newborns',
  category: 'medical',
  searchTerms: [
    'newborn sneezing a lot',
    'baby sneezing frequently',
    'newborn sneezing normal',
    'baby sneezing all the time',
    'newborn sneezing no cold',
    'infant sneezing reflex',
    'baby sneezing after birth',
    'newborn sneezing clearing nose',
    'baby constant sneezing',
    'is newborn sneezing normal',
  ],
  quickAnswer:
    'Frequent sneezing in newborns is completely normal and is not usually a sign of a cold or illness. Newborns sneeze to clear their tiny nasal passages of mucus, dust, and other particles. It is one of the few ways they can clear their nose since they are obligate nasal breathers. Sneezing is actually a healthy reflex.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Newborns sneeze frequently, and this is one of the most common concerns parents raise. Because babies breathe primarily through their noses, sneezing serves as an important mechanism to clear the nasal passages of amniotic fluid residue, lint, dust, and mucus. Newborns have very small nasal passages that are easily irritated. Sneezing does not mean your baby has a cold. As long as your baby is feeding well and has no other symptoms, frequent sneezing is perfectly normal.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Sneezing may continue frequently during this period. It remains a normal reflex. Your baby\'s nasal passages are still small and sensitive to environmental irritants like dry air, pet dander, or dust. Using a cool-mist humidifier in the nursery can help keep nasal passages moist. If sneezing is accompanied by thick nasal discharge, coughing, or fever, your baby may have a cold.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Sneezing continues to be normal but may become less frequent as your baby\'s nasal passages grow larger. If your baby develops congestion, runny nose, cough, or fever along with sneezing, it may indicate a viral upper respiratory infection, which is common as maternal antibodies begin to wane.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Occasional sneezing remains normal at any age. By this age, if sneezing is accompanied by other cold symptoms, your baby may be fighting a viral infection. Babies can get 6-8 colds in their first year, especially if they attend daycare.',
    },
  ],
  whenNormal: [
    'Frequent sneezing in a newborn with no other symptoms',
    'Baby is feeding well, alert when awake, and has no fever',
    'No thick or colored nasal discharge accompanying the sneezing',
    'Sneezing happens more in dry environments or when exposed to dust or lint',
  ],
  whenToMention: [
    'Sneezing is accompanied by persistent clear runny nose or mild congestion',
    'You notice your baby seems stuffier than usual but is still feeding well',
    'Sneezing occurs with frequent hiccups and seems to bother your baby',
  ],
  whenToActNow: [
    'Sneezing with difficulty breathing, rapid breathing, flaring nostrils, or chest retractions',
    'Sneezing with fever (100.4F or higher rectally in a baby under 3 months), poor feeding, or lethargy',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Caring for Your Baby and Young Child: Birth to Age 5. 7th Edition.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Neonatal Reflexes and Normal Newborn Behavior. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/003300.htm',
    },
  ],
  relatedConcernSlugs: ['newborn-congestion-no-cold', 'newborn-noisy-breathing-normal', 'common-cold-duration-babies'],
};
