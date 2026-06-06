import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-wheezing-recurrent',
  title: 'My Baby Keeps Having Wheezing Episodes',
  category: 'medical',
  searchTerms: [
    'baby recurrent wheezing',
    'baby keeps wheezing',
    'baby wheezing every cold',
    'recurring wheezing baby',
    'baby wheezing multiple times',
    'is my baby asthmatic',
    'baby wheezing pattern',
    'frequent wheezing episodes baby',
    'baby wheezing with every virus',
    'will my baby outgrow wheezing',
  ],
  quickAnswer:
    'Recurrent wheezing is common in young children - about one-third of babies wheeze with viral infections. Many will outgrow it by age 3-5. However, babies who have 3 or more wheezing episodes, family history of asthma, eczema, or allergies may be developing asthma and benefit from a treatment plan. Your pediatrician can help determine whether preventive treatment is appropriate.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Recurrent wheezing in very young babies needs thorough evaluation. While viral infections can cause repeated wheezing, structural airway issues, gastroesophageal reflux, and congenital heart conditions can also cause recurrent wheezing at this age. Your pediatrician may refer to a specialist if wheezing keeps recurring.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies who wheeze repeatedly with viral infections in the first year are described as having "transient early wheezers" if they outgrow it, or "persistent wheezers" if it continues. Keeping a log of each episode (date, triggers, severity, what helped) is valuable for your pediatrician. Risk factors for persistent wheezing include maternal smoking, premature birth, and eczema.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If your baby has had 3 or more wheezing episodes, your pediatrician may prescribe a rescue inhaler (albuterol with spacer) to keep at home. Some babies may benefit from daily preventive medication. The modified Asthma Predictive Index helps predict which wheezing babies will develop asthma: criteria include parental asthma, eczema, allergies, or wheezing without colds.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers with recurrent wheezing may be started on a daily inhaled corticosteroid if episodes are frequent or severe. This is safe and can significantly reduce wheezing episodes. An asthma action plan from your pediatrician helps you know when to use rescue medication versus preventive treatment.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 3, the pattern becomes clearer. Children who continue to wheeze may be diagnosed with asthma, which can be well-managed with appropriate treatment. Many children who wheezed only with viral infections will have outgrown it. Allergy testing may help identify specific triggers to avoid.',
    },
  ],
  whenNormal: [
    'Your baby wheezes mildly during colds but breathes normally between illnesses',
    'Wheezing episodes respond well to prescribed rescue inhaler medication',
    'Your baby is growing well and developing normally despite occasional wheezing',
    'The frequency and severity of wheezing episodes are decreasing as your baby grows',
  ],
  whenToMention: [
    'Your baby has had 3 or more wheezing episodes and you want to discuss a management plan',
    'Wheezing is occurring more frequently or between viral illnesses',
    'You have questions about whether your baby needs daily preventive medication',
  ],
  whenToActNow: [
    'Your baby has a severe wheezing episode with difficulty breathing, fast breathing, rib retractions, or color changes',
    'Rescue inhaler medication is not improving the wheezing, or your baby refuses to eat or drink during a wheezing episode',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-wheezing-first-time',
    'baby-asthma-action-plan',
    'baby-nebulizer-treatment-concerns',
    'reactive-airway-disease-toddler',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Recurrent Wheezing in Children. Pediatrics, 2016.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Wheezing.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Heart, Lung, and Blood Institute. Guidelines for the Diagnosis and Management of Asthma (EPR-3).',
      url: 'https://www.nhlbi.nih.gov/health-topics/guidelines-for-diagnosis-management-of-asthma',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Childhood asthma: Diagnosis and treatment.',
      url: 'https://www.mayoclinic.org/diseases-conditions/childhood-asthma/diagnosis-treatment/drc-20351513',
    },
  ],
};
