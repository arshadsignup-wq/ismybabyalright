import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-wheezing-first-time',
  title: 'My Baby Is Wheezing for the First Time',
  category: 'medical',
  searchTerms: [
    'baby wheezing first time',
    'first wheezing episode baby',
    'baby wheezing sound',
    'baby whistling breathing',
    'baby wheezing when breathing out',
    'baby wheezing with cold',
    'infant first wheeze',
    'baby wheezing no cold',
    'baby wheezing what to do',
    'baby breathing sounds wheezy',
  ],
  quickAnswer:
    'A first wheezing episode in a baby is most commonly caused by bronchiolitis (often from RSV) or a viral upper respiratory infection that has affected the lower airways. Wheezing is a high-pitched whistling sound heard during breathing out. The first wheezing episode should always be evaluated by your pediatrician to determine the cause and appropriate treatment, especially in babies under 12 months.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Wheezing in a very young baby needs prompt medical evaluation. RSV bronchiolitis is the most common cause and can be more severe in this age group. Your baby may need monitoring of oxygen levels and possibly hospitalization. Other causes include congenital airway issues. Contact your pediatrician immediately or go to the emergency room if your young baby is wheezing.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Bronchiolitis remains the most common cause of first-time wheezing at this age. The wheezing usually peaks around days 3-5 of illness and gradually improves. Watch for signs of increased breathing effort: fast breathing, rib retractions, nasal flaring, and grunting. Your baby may need to be evaluated to check oxygen levels.',
    },
    {
      ageRange: '6-12 months',
      context:
        'First-time wheezing during RSV season (fall through spring) is very common. Many babies who wheeze with viral infections do not go on to develop asthma. Your pediatrician may prescribe a trial of albuterol via nebulizer to see if it helps. If your baby has eczema or a family history of asthma, the risk of recurrent wheezing is higher.',
    },
    {
      ageRange: '12-24 months',
      context:
        'First-time wheezing in toddlers can be triggered by viral infections, allergen exposure, or exercise. Your pediatrician will assess whether a trial of bronchodilator medication is appropriate. If wheezing responds well to albuterol, this suggests reactive airway disease. One wheezing episode does not necessarily mean your child has asthma.',
    },
    {
      ageRange: '2-3 years',
      context:
        'A first wheezing episode in an older toddler is less commonly from RSV bronchiolitis and more likely from viral-triggered reactive airway disease or newly developing asthma. Allergy triggers may also play a role. Your pediatrician will evaluate and may start a treatment plan if wheezing recurs.',
    },
  ],
  whenNormal: [
    'Mild wheezing during a cold that your baby does not seem distressed by',
    'Wheezing that improves with prescribed medication from your pediatrician',
    'Brief wheezing sounds that resolve on their own within a day',
  ],
  whenToMention: [
    'Any first-time wheezing episode should be discussed with your pediatrician',
    'Mild wheezing that persists for more than a day during a cold',
    'You are unsure if what you are hearing is wheezing or normal congestion sounds',
  ],
  whenToActNow: [
    'Your baby is wheezing with fast breathing, rib retractions, nasal flaring, or seems to be working hard to breathe',
    'Your baby turns blue around the lips, refuses to feed, is excessively sleepy, or the wheezing worsens rapidly',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-wheezing-recurrent',
    'wheezing',
    'bronchiolitis-baby',
    'rsv-baby',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Wheezing in Infants and Young Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Wheezing.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. First episode of wheezing in infants. Pediatric Pulmonology.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/24166845/',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Wheezing in children.',
      url: 'https://www.mayoclinic.org/symptoms/wheezing/basics/causes/sym-20050764',
    },
  ],
};
