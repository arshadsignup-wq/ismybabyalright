import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'epiphora-excessive-tearing-baby',
  title: 'Excessive Tearing in Babies',
  category: 'medical',
  searchTerms: [
    'baby eyes watering constantly',
    'excessive tearing baby',
    'epiphora infant',
    'baby one eye watering',
    'baby tears from one eye',
    'baby watery eye causes',
    'newborn eye tearing',
    'baby eyes always watering',
    'constant tears baby eye',
  ],
  quickAnswer:
    'Excessive tearing (epiphora) in babies is most commonly caused by a blocked nasolacrimal duct (blocked tear duct), which affects about 6-20% of newborns. Tears cannot drain properly into the nose, causing them to overflow onto the cheek. This condition usually resolves on its own by 12 months of age. Other causes of excessive tearing include conjunctivitis, corneal abrasion, a foreign body, allergies, and rarely, infantile glaucoma. If excessive tearing is accompanied by light sensitivity or an enlarged eye, urgent evaluation is needed.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Blocked tear ducts are very common in this age group. Newborns typically do not produce emotional tears until about 2-3 months, so a watery eye before this age is almost always due to a blocked duct. The tearing may be intermittent, and you may notice crusting or mild mucus accumulation. Treatment involves gentle lacrimal sac massage and keeping the eye clean.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Blocked tear ducts remain the most common cause of tearing. Perform gentle Crigler massage 2-3 times daily (firm pressure in a downward motion along the side of the nose near the inner eye corner) to help open the duct. Most blocked ducts resolve by 6 months. If the eye becomes very red, produces thick discharge, or the skin around the tear duct area becomes swollen, the duct may be infected.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If the blocked tear duct has not resolved, continued massage and observation are still appropriate through 12 months. Your pediatrician or ophthalmologist may discuss the option of tear duct probing, which is typically performed between 6-12 months if conservative measures fail. The procedure has a success rate of about 90%.',
    },
    {
      ageRange: '12 months+',
      context:
        'If excessive tearing persists beyond 12 months, referral to a pediatric ophthalmologist is recommended for probing or other interventions. In toddlers, new onset tearing may indicate allergies, an eye infection, a corneal scratch, or a foreign body. Rarely, persistent tearing with light sensitivity and an enlarged cornea could indicate congenital glaucoma.',
    },
  ],
  whenNormal: [
    'One or both eyes water intermittently, with mild clear or whitish discharge, starting in the first weeks of life',
    'The eye itself looks white and healthy (no redness), and tearing improves with gentle massage',
    'Crusting appears in the morning but is easily cleaned and does not bother the baby',
    'Tearing gradually improves over the first year of life',
  ],
  whenToMention: [
    'Tearing persists consistently beyond 6 months and is not improving with massage',
    'Discharge becomes yellow or green, suggesting a possible secondary infection',
    'The skin around the eye is becoming irritated from constant wetness',
  ],
  whenToActNow: [
    'The inner corner of the eye near the nose becomes red, swollen, and tender, suggesting dacryocystitis (tear duct infection) that needs antibiotic treatment',
    'Excessive tearing is accompanied by light sensitivity, a cloudy or enlarged cornea, or the eye appears larger than the other, which are signs of infantile glaucoma requiring emergency evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAPOS',
      citation:
        'American Association for Pediatric Ophthalmology and Strabismus. Nasolacrimal Duct Obstruction.',
      url: 'https://aapos.org/glossary/nasolacrimal-duct-obstruction',
    },
    {
      org: 'AAO',
      citation:
        'American Academy of Ophthalmology. Blocked Tear Duct in Children.',
      url: 'https://www.aao.org/eye-health/diseases/blocked-tear-duct-children',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Blocked Tear Ducts. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Tear-Duct-Blocked.aspx',
    },
  ],
};
