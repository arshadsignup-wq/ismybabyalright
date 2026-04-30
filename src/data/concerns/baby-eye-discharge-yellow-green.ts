import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-eye-discharge-yellow-green',
  title: 'Yellow or Green Eye Discharge in Baby',
  category: 'physical',
  searchTerms: [
    'baby eye discharge yellow',
    'baby green eye discharge',
    'baby sticky eye',
    'baby goopy eye',
    'baby eye boogers yellow',
    'baby eye gunk',
    'baby crusty eye',
    'newborn eye discharge',
    'baby eye mattering',
    'baby eye discharge one eye',
    'baby waking up with crusty eyes',
  ],
  quickAnswer:
    'Yellow or green eye discharge in babies is very common, especially in newborns. The most frequent cause is a blocked tear duct (dacryostenosis), which affects up to 20% of newborns and usually resolves on its own by 12 months. Bacterial conjunctivitis (pink eye) is another common cause that produces thicker, more colored discharge. Simple blocked tear duct discharge tends to be milder and does not cause redness of the eye itself.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Sticky, yellowish discharge in one or both eyes is extremely common in newborns. A blocked tear duct causes tears to pool and become slightly sticky or crusty but the white of the eye stays clear. Gentle tear duct massage (pressing softly at the inner corner of the eye and stroking downward) 2-3 times a day can help. Clean discharge with a warm, damp cloth. If the eye white turns pink or red, or discharge becomes thick and green, contact your pediatrician.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Blocked tear ducts often persist through the first year. As long as the eye is not red and your baby is not bothered by it, continued gentle massage and cleaning is usually sufficient. If the area beside the nose becomes red and swollen (dacryocystitis), this is an infection of the tear sac that needs antibiotic treatment. Most blocked ducts resolve by 12 months. If not, a simple outpatient procedure (tear duct probing) can open the duct.',
    },
    {
      ageRange: '1-3 years',
      context:
        'New onset of yellow or green eye discharge in toddlers is more likely to be bacterial or viral conjunctivitis, often spread at daycare. Bacterial conjunctivitis produces thick yellow-green discharge that crusts the eye shut overnight. Viral conjunctivitis tends to be watery with some white or yellow discharge and often accompanies a cold. Both are highly contagious. Good handwashing is essential to prevent spread.',
    },
  ],
  whenNormal: [
    'Mild, slightly yellowish crusting on eyelashes after sleep in a baby with a known blocked tear duct',
    'Small amounts of eye discharge during a cold',
    'One eye having more discharge than the other with a blocked duct',
    'The white of the eye remaining clear (not red) despite the discharge',
  ],
  whenToMention: [
    'Eye discharge persists daily for more than a week',
    'Discharge is thick, green, or copious',
    'The eyelids are sticking together with discharge',
    'A blocked tear duct has not resolved by 12 months',
  ],
  whenToActNow: [
    'The white of the eye is significantly red along with thick discharge (bacterial conjunctivitis likely)',
    'The area beside the nose is red, swollen, and tender (dacryocystitis - tear sac infection)',
    'A newborn under 4 weeks develops eye discharge, which could indicate a serious infection acquired during birth',
    'Eye discharge is accompanied by eyelid swelling, fever, or pain',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['blocked-tear-duct', 'baby-pink-eye', 'baby-swollen-eye'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Blocked Tear Ducts. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Blocked-Tear-Ducts.aspx',
    },
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Conjunctivitis (Pink Eye). HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Conjunctivitis-Pink-Eye.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Eye Institute. Pink Eye.',
      url: 'https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/pink-eye',
    },
  ],
};
