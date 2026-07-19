import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'tongue-tie',
  title: 'Tongue-Tie (Ankyloglossia) in Babies',
  bodySystem: 'mouth-throat',
  description: 'Tongue-tie (ankyloglossia) occurs when the lingual frenulum — the band of tissue connecting the underside of the tongue to the floor of the mouth — is unusually short, thick, or tight, restricting tongue movement. It affects approximately 4-11% of newborns and is more common in males. Tongue-tie can interfere with breastfeeding, cause nipple pain for the mother, and in some cases affect speech development later. Many tongue-ties are mild and cause no problems, while others may benefit from frenotomy (surgical release).',
  possibleCauses: [
    { cause: 'Congenital variation in frenulum development', likelihood: 'common' },
    { cause: 'Familial/genetic predisposition', likelihood: 'common' },
    { cause: 'Associated with other midline defects (rare)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-2 months', normalVariation: 'Mild tongue-tie with no breastfeeding problems requires no intervention. Some visible frenulum attachment is normal — not all short frenulums cause functional problems.', whenToWorry: 'Baby unable to latch effectively despite proper positioning, painful nursing with cracked/bleeding nipples, poor weight gain, clicking sounds during feeds, or prolonged feeding sessions (more than 40 minutes) with unsatisfied baby.' },
    { ageRange: '2-6 months', normalVariation: 'If baby is feeding well and gaining weight, a visible tongue-tie without symptoms does not need treatment.', whenToWorry: 'Persistent difficulty with breastfeeding, poor weight gain, excessive gassiness from poor seal, or mother developing recurrent mastitis due to inefficient milk transfer.' },
    { ageRange: '6-12 months', normalVariation: 'Many babies with mild tongue-tie adapt as they grow. Introduction of solids may not be affected.', whenToWorry: 'Difficulty managing solid foods, gagging on textured foods beyond normal, or tongue unable to sweep food around mouth. Speech concerns are not typically assessed until age 2-3.' },
    { ageRange: '1-3 years', normalVariation: 'Most children with mild tongue-tie develop normal speech. The tongue tip may appear heart-shaped when extended.', whenToWorry: 'Speech sound errors persisting beyond expected age, difficulty with sounds requiring tongue elevation (l, r, t, d, n), inability to lick lips or stick tongue out past lower lip.' },
  ],
  urgencyLevels: {
    emergency: [
      'Tongue-tie itself is never an emergency',
    ],
    urgent: [
      'Newborn with tongue-tie unable to feed effectively and losing more than 10% of birth weight',
      'Severe nipple damage in breastfeeding mother preventing continued feeding',
    ],
    sameDay: [
      'Suspected tongue-tie with moderate breastfeeding difficulty (painful latch, slow weight gain)',
      'Tongue-tie with baby clicking during feeds and mother experiencing nipple pain',
    ],
    monitor: [
      'Visible tongue-tie with no feeding difficulties and good weight gain',
      'Mild tongue-tie with breastfeeding going well after initial adjustment',
      'Asymptomatic tongue-tie found incidentally',
    ],
  },
  homeRemedies: [
    'Work with a certified lactation consultant (IBCLC) to optimize latch and positioning',
    'Try different breastfeeding positions (laid-back, football hold) to improve latch',
    'If bottle feeding, use a slow-flow nipple and paced feeding technique',
    'Gentle tongue exercises as recommended by a lactation consultant or speech therapist',
    'Skin-to-skin contact to encourage instinctive feeding behaviors',
    'If considering frenotomy, seek evaluation from a provider experienced in tongue-tie assessment',
    'Post-frenotomy wound care: gentle stretches as instructed to prevent reattachment',
    'Do NOT attempt to cut or stretch the frenulum at home',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['lip-tie', 'refusing-to-eat', 'drooling'],
  relatedIllnessSlugs: ['ankyloglossia', 'failure-to-thrive'],
  relatedConcernSlugs: ['tongue-tie-baby', 'baby-not-latching', 'breastfeeding-pain'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics Section on Breastfeeding. Ankyloglossia and Breastfeeding.', url: 'https://publications.aap.org/pediatrics/article/doi/10.1542/peds.2024-068468/199270' },
    { org: 'NIH', citation: 'Messner AH, et al. Ankyloglossia: Incidence and associated feeding difficulties. Archives of Otolaryngology. 2000;126(1):36-39.', url: 'https://pubmed.ncbi.nlm.nih.gov/10628708/' },
    { org: 'NICE', citation: 'NICE Interventional Procedures Guidance IPG149. Division of ankyloglossia (tongue-tie) for breastfeeding.', url: 'https://www.nice.org.uk/guidance/ipg149' },
  ],
};
