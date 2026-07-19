import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'watery-eyes',
  title: 'Watery Eyes (Epiphora) in Babies',
  bodySystem: 'eyes',
  description: 'Watery eyes (excessive tearing) in babies is extremely common. The most frequent cause is a congenitally blocked nasolacrimal duct (tear duct), which occurs in up to 20% of newborns. The blockage usually resolves on its own within the first year of life. Watery eyes can also be caused by irritation, infection, or allergies.',
  possibleCauses: [
    { cause: 'Blocked nasolacrimal duct (congenital dacryostenosis)', likelihood: 'common' },
    { cause: 'Upper respiratory infection (cold)', likelihood: 'common' },
    { cause: 'Wind or cold air irritation', likelihood: 'common' },
    { cause: 'Viral conjunctivitis', likelihood: 'uncommon' },
    { cause: 'Allergies (seasonal or environmental)', likelihood: 'uncommon' },
    { cause: 'Congenital glaucoma', likelihood: 'rare' },
    { cause: 'Foreign body or corneal abrasion', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-3 months', normalVariation: 'Babies typically do not produce visible tears until 2-3 weeks of age. Once tears appear, one-sided or bilateral watering from a blocked duct is very common and normal.', whenToWorry: 'Excessive tearing with a cloudy or enlarged cornea (possible congenital glaucoma \u2014 requires urgent referral). Light sensitivity combined with tearing.' },
    { ageRange: '3-6 months', normalVariation: 'Blocked tear duct remains the most common cause. Tears pool in the eye and may overflow onto the cheek. May worsen during colds.', whenToWorry: 'Red, swollen, tender area at the inner corner of the eye near the nose (dacryocystitis \u2014 infected tear duct sac). Any blood-tinged tears.' },
    { ageRange: '6-12 months', normalVariation: 'Most blocked ducts resolve by 12 months. Tearing may fluctuate \u2014 better at times and worse during colds.', whenToWorry: 'Persistent blockage approaching 12 months (may need ophthalmology referral for probing procedure). Recurrent infections of the tear duct.' },
    { ageRange: '1-3 years', normalVariation: 'After 12 months, blocked tear ducts are less common and tearing is more often from colds, wind, or allergies.', whenToWorry: 'Chronic unilateral tearing after 12 months (blocked duct may need intervention). New-onset tearing with eye rubbing and seasonal pattern (allergies).' },
  ],
  urgencyLevels: {
    emergency: [
      'Watery eyes with cloudy or enlarged corneas in a newborn (possible congenital glaucoma)',
      'Tearing with severe light sensitivity and eye squeezing in an infant',
      'Sudden tearing with visible foreign body or after chemical exposure',
    ],
    urgent: [
      'Red, swollen, tender bump at inner corner of eye near nose (dacryocystitis)',
      'Tearing with thick green discharge and significant eyelid swelling',
      'Watery eye with apparent pain (baby rubbing eye and crying)',
    ],
    sameDay: [
      'Watery eyes with red conjunctiva (pink eye needing evaluation)',
      'Blocked tear duct with increasing mucoid discharge (possible secondary infection)',
    ],
    monitor: [
      'Clear tearing from one or both eyes with no redness or swelling (likely blocked duct)',
      'Watery eyes during a cold that resolve when cold resolves',
      'Known blocked tear duct with typical mild symptoms and no infection signs',
      'Tearing in windy or cold weather (normal reflex tearing)',
    ],
  },
  homeRemedies: [
    'Nasolacrimal duct massage: gently press at inner corner of eye near nose and stroke downward 5-10 times, 2-3 times daily',
    'Clean overflow tears and mild discharge with warm damp cotton ball',
    'Use a fresh cotton ball for each eye',
    'If allergies suspected in older baby: keep windows closed during high pollen, wash face after outdoor play',
    'Do not use over-the-counter eye drops without doctor guidance',
    'Keep baby\'s hands clean to reduce risk of eye infection from rubbing',
  ],
  relatedSymptomSlugs: ['eye-discharge', 'swollen-eyelid'],
  relatedIllnessSlugs: ['blocked-tear-duct', 'conjunctivitis', 'congenital-glaucoma'],
  relatedConcernSlugs: ['baby-watery-eyes', 'blocked-tear-duct-baby', 'baby-tears-from-one-eye'],
  sources: [
    { org: 'AAO', citation: 'American Academy of Ophthalmology. Blocked Tear Duct in Children.', url: 'https://www.aao.org/eye-health/diseases/blocked-tear-duct-children' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Tear Duct Obstruction and Surgery. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Tear-Duct-Obstruction.aspx' },
    { org: 'AAPOS', citation: 'American Association for Pediatric Ophthalmology and Strabismus. Nasolacrimal Duct Obstruction.', url: 'https://aapos.org/glossary/nasolacrimal-duct-obstruction' },
  ],
};
