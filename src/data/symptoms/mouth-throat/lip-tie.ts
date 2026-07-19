import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'lip-tie',
  title: 'Lip-Tie in Babies',
  bodySystem: 'mouth-throat',
  description: 'A lip-tie occurs when the labial frenulum — the band of tissue connecting the upper lip to the gum above the front teeth — is unusually thick, tight, or low-attached, limiting upper lip movement. All babies have a labial frenulum; a lip-tie is only a concern when it is tight enough to restrict the upper lip from flanging outward during breastfeeding, potentially causing a shallow latch. Lip-tie is less well-studied than tongue-tie, and there is ongoing debate about when intervention is needed. It often coexists with tongue-tie.',
  possibleCauses: [
    { cause: 'Normal anatomical variation in frenulum attachment', likelihood: 'common' },
    { cause: 'Familial/genetic predisposition', likelihood: 'common' },
    { cause: 'Associated tongue-tie (co-occurrence)', likelihood: 'uncommon' },
  ],
  byAge: [
    { ageRange: '0-2 months', normalVariation: 'All newborns have a labial frenulum. A prominent frenulum that does not restrict lip movement during feeding is normal.', whenToWorry: 'Upper lip unable to flange outward during breastfeeding, persistent shallow latch despite positioning correction, painful latch with blanching of upper lip, and poor weight gain.' },
    { ageRange: '2-6 months', normalVariation: 'As baby grows, the frenulum may thin and become less restrictive. Feeding often improves naturally.', whenToWorry: 'Ongoing feeding difficulty with poor weight gain, chronic nipple damage in breastfeeding mother, or excessive air intake causing severe gassiness and reflux symptoms.' },
    { ageRange: '6-12 months', normalVariation: 'Lip-tie rarely causes problems with solid food introduction. The frenulum naturally recedes as the upper jaw grows.', whenToWorry: 'Difficulty drinking from a cup due to lip restriction, or persistent feeding issues not explained by other causes.' },
    { ageRange: '1-3 years', normalVariation: 'The frenulum often stretches or recedes with growth. Some children retain a prominent frenulum into preschool years without problems.', whenToWorry: 'Gap between front teeth (diastema) that does not close, recurrent trauma to the frenulum from falls, or difficulty with oral hygiene of upper front teeth.' },
  ],
  urgencyLevels: {
    emergency: [
      'Lip-tie itself is never an emergency',
    ],
    urgent: [
      'Newborn with lip-tie and tongue-tie combined causing inability to feed and weight loss exceeding 10% of birth weight',
    ],
    sameDay: [
      'Suspected lip-tie contributing to breastfeeding difficulty with nipple damage',
      'Lip-tie with documented poor weight gain and feeding-related distress',
    ],
    monitor: [
      'Visible prominent frenulum with no feeding difficulties',
      'Mild lip restriction with adequate latch and weight gain',
      'Lip-tie identified incidentally during oral exam with no symptoms',
    ],
  },
  homeRemedies: [
    'Work with an IBCLC lactation consultant to optimize latch and positioning',
    'Try asymmetric latch technique — aim nipple toward roof of baby\'s mouth',
    'Support baby\'s upper lip to flange outward manually during latch',
    'Use laid-back (biological nurturing) position to allow gravity-assisted latch',
    'If bottle feeding, ensure upper lip is flanged around bottle nipple',
    'Gentle upper lip stretches only if recommended by a qualified provider',
    'Do NOT attempt to cut or release the frenulum at home',
    'Consider evaluation by pediatric dentist or ENT if breastfeeding remains difficult despite lactation support',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['tongue-tie', 'refusing-to-eat', 'drooling'],
  relatedIllnessSlugs: ['ankyloglossia', 'failure-to-thrive'],
  relatedConcernSlugs: ['lip-tie-baby', 'baby-shallow-latch', 'breastfeeding-difficulty'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Upper lip-tie and breastfeeding: A review. Pediatrics. 2017.', url: 'https://publications.aap.org/pediatrics/' },
    { org: 'NIH', citation: 'Ghaheri BA, et al. Breastfeeding improvement following tongue-tie and lip-tie release. Laryngoscope. 2017;127(5):1217-1223.', url: 'https://pubmed.ncbi.nlm.nih.gov/27539228/' },
    { org: 'ABM', citation: 'Academy of Breastfeeding Medicine. ABM Clinical Protocol #11: Guidelines for the Evaluation and Management of Neonatal Ankyloglossia.', url: 'https://www.bfrjournal.com/article/S1551-7144(22)00126-X/fulltext' },
  ],
};
