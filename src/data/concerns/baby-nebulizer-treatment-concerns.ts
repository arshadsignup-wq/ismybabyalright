import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-nebulizer-treatment-concerns',
  title: 'My Baby Needs Nebulizer Treatments - What Should I Know?',
  category: 'medical',
  searchTerms: [
    'nebulizer for baby',
    'baby nebulizer treatment',
    'nebulizer vs inhaler baby',
    'how to use nebulizer baby',
    'baby albuterol nebulizer',
    'nebulizer side effects baby',
    'baby won\'t sit still for nebulizer',
    'nebulizer mask baby tips',
    'baby breathing treatment',
    'nebulizer machine infant',
  ],
  quickAnswer:
    'A nebulizer converts liquid medication into a fine mist that your baby breathes in through a mask. It is commonly used to deliver albuterol (a bronchodilator) or inhaled steroids for wheezing, bronchiolitis, or reactive airway disease. Treatments typically take 5-15 minutes. While babies may resist the mask initially, most adjust with consistent gentle approach. Side effects of albuterol include temporary rapid heartbeat and jitteriness.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Nebulizers can be used for very young babies when prescribed. Use the infant-sized mask to ensure a good seal over the nose and mouth. Hold your baby upright in your lap and keep the mask gently against their face. Treatments work best when your baby is calm or sleeping. If your baby is too agitated, the medicine delivery is less effective. Contact your doctor if you are having difficulty administering treatments.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Your baby may be more alert and resistant to the mask. Try distraction with a toy, song, or breastfeeding during treatment. Some parents find that doing treatments while the baby sleeps works well, though it is less effective if the baby breathes through their mouth. Ensure the nebulizer is clean and dry between uses.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Active babies may strongly resist the nebulizer mask. Consistent, calm approach is key. Let your baby hold a spare mask to explore while you use the treatment mask. Some parents find screen time during treatments helpful despite otherwise limiting screens. An inhaler with spacer and mask may be an alternative if nebulizer treatments are very difficult.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Many toddlers can transition to an inhaler with spacer and mask, which delivers medication in seconds rather than minutes. If continuing nebulizer treatments, make it a routine with a special activity or show. Common albuterol side effects (mild tremor, fast heart rate) are temporary and not harmful.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Older toddlers can begin to cooperate with treatments and may even hold the mask themselves. Consider transitioning to an inhaler with spacer, which is more portable and faster. If your child is on daily preventive nebulizer treatments, discuss with your pediatrician whether an inhaler with spacer would be more convenient.',
    },
  ],
  whenNormal: [
    'Your baby becomes slightly jittery or has a temporarily increased heart rate after albuterol, which resolves within 30-60 minutes',
    'Your baby fusses during the treatment but breathes better afterward',
    'Wheezing or breathing difficulty improves within 15-20 minutes of completing the treatment',
  ],
  whenToMention: [
    'Your baby seems very jittery, irritable, or has prolonged fast heartbeat after nebulizer treatments',
    'You are having great difficulty administering treatments and want to discuss alternatives',
    'You are unsure about how often to give treatments or want clarification on the treatment plan',
  ],
  whenToActNow: [
    'Your baby\'s breathing does not improve after a nebulizer treatment, or worsens',
    'Your baby has a severe reaction to nebulized medication such as significant tremor, vomiting, excessive fussiness, or paradoxical worsening of wheezing',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-inhaler-spacer-use',
    'baby-wheezing-recurrent',
    'baby-asthma-action-plan',
    'reactive-airway-disease-toddler',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Using a Nebulizer. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Nebulizers.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Heart, Lung, and Blood Institute. How Is Asthma Treated and Controlled?',
      url: 'https://www.nhlbi.nih.gov/health/asthma/treatment',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Nebulizers: Tips for use.',
      url: 'https://www.mayoclinic.org/diseases-conditions/asthma/in-depth/asthma/art-20045846',
    },
  ],
};
