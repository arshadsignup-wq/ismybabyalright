import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'wheezing',
  title: 'Baby Wheezing',
  category: 'medical',
  searchTerms: [
    'baby wheezing',
    'baby whistling sound breathing',
    'baby wheezing when breathing out',
    'baby chest sounds rattly',
    'baby wheezing with cold',
    'infant wheezing causes',
    'baby wheezing but no cold',
    'baby breathing sounds wheezy',
    'RSV wheezing baby',
    'bronchiolitis baby',
    'is baby wheezing or just congested',
  ],
  quickAnswer:
    'Wheezing is a high-pitched whistling sound heard during breathing out, caused by narrowed airways. In babies, the most common cause is a viral infection like bronchiolitis (often RSV). Many babies wheeze once or twice during their first viral illnesses and never wheeze again. However, wheezing with breathing difficulty always warrants medical evaluation.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Young babies have very small airways, so even mild swelling from a viral infection can cause noticeable wheezing. Bronchiolitis caused by RSV (respiratory syncytial virus) is the most common cause in this age group. Babies under 3 months with wheezing need prompt medical evaluation because their small airways are particularly vulnerable. Upper airway noises from nasal congestion can sometimes be mistaken for wheezing; true wheezing is heard during exhalation.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Viral-induced wheezing remains the most common cause. Many babies in this age group will wheeze with their first significant cold, particularly during RSV season (fall and winter). The wheezing typically peaks around day 3-5 of illness and then gradually improves. Your doctor may recommend saline drops and suctioning, keeping your baby hydrated, and monitoring breathing effort.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Some toddlers develop recurrent wheezing with viral infections. Having 3 or more wheezing episodes is sometimes called "recurrent wheezing" and may be an early sign of asthma, particularly if there is a family history of asthma or allergies, or if the child has eczema. Your doctor may prescribe a bronchodilator (albuterol) to use during wheezing episodes.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By this age, a pattern of recurrent wheezing can be more clearly evaluated. Many children who wheezed as infants stop wheezing by age 3-5 and do not develop asthma. Children with persistent recurrent wheezing, especially between illnesses, may be started on daily preventive medication. Your doctor can help distinguish transient viral wheezing from early asthma.',
    },
  ],
  whenNormal: [
    'Brief, mild wheezing during a cold that does not affect your baby\'s breathing comfort, feeding, or activity level',
    'Noisy breathing from nasal congestion that improves with saline and suctioning (this is usually not true wheezing)',
    'A single wheezing episode during a viral illness that resolves as the cold improves',
    'Your baby is breathing comfortably, feeding well, and has normal color despite some audible wheeze',
  ],
  whenToMention: [
    'Your baby has wheezing with every cold, or has had 3 or more wheezing episodes',
    'Your baby wheezes even when they do not have a cold',
    'There is a family history of asthma and your baby is wheezing recurrently',
    'You are unsure whether the sounds your baby makes are wheezing or just normal congestion noises',
  ],
  whenToActNow: [
    'Your baby is working hard to breathe: fast breathing, ribs showing with each breath (retractions), nostrils flaring, or belly moving in and out forcefully',
    'Your baby\'s lips or fingernails have a bluish tint, which indicates low oxygen and requires emergency care',
    'Your baby is wheezing and refusing to drink fluids, seems lethargic, or is significantly less active than usual',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Clinical Practice Guideline: The Diagnosis, Management, and Prevention of Bronchiolitis. Pediatrics, 2014.',
      url: 'https://publications.aap.org/pediatrics/article/134/5/e1474/33202/Updated-Guidance-for-Palivizumab-Prophylaxis-Among',
    },
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Wheezing in Babies.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Wheezing.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Respiratory Syncytial Virus (RSV).',
      url: 'https://www.cdc.gov/rsv/index.html',
    },
  ],
};
