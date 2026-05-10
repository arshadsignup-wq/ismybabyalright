import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'tooth-decay-breastfed-baby',
  title: 'Tooth Decay in Breastfed Babies',
  category: 'medical',
  searchTerms: [
    'breastfeeding cavities baby',
    'breastfeeding tooth decay',
    'night nursing cavities',
    'does breastfeeding cause cavities',
    'breastfed baby tooth decay',
    'nursing caries breastfeeding',
    'breastfeeding at night bad for teeth',
    'breastmilk cause cavities',
  ],
  quickAnswer:
    'While breast milk alone has not been shown to directly cause tooth decay, prolonged and frequent nighttime breastfeeding after teeth have erupted may contribute to cavity development, especially when combined with other sugars in the diet. Breast milk contains lactose, which cavity-causing bacteria can use to produce acid. The key protective measure is good oral hygiene: brush your baby\'s teeth twice daily with fluoride toothpaste and maintain regular dental visits.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'At this age, teeth have typically not erupted, so decay is not a concern. Exclusive breastfeeding is recommended and provides optimal nutrition. Begin wiping gums with a clean, damp cloth after feedings to establish good oral hygiene habits early.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As the first teeth begin to appear, start brushing with a tiny smear of fluoride toothpaste. Breastfeeding on demand is still appropriate and beneficial. The emerging teeth are beginning to be exposed to sugars in breast milk, but at this age, the risk of decay is low with proper oral care.',
    },
    {
      ageRange: '6-12 months',
      context:
        'With more teeth present and the introduction of solid foods, cavity risk begins to increase. Nighttime breastfeeding can be a risk factor because saliva flow decreases during sleep, reducing the mouth\'s natural ability to wash away sugars and neutralize acid. Brush teeth before bed and after the last feeding when possible.',
    },
    {
      ageRange: '12 months+',
      context:
        'Prolonged, unrestricted nighttime nursing sessions combined with a diet that includes other sugars and starches create the highest risk for caries in breastfed children. This does not mean you must stop breastfeeding. Instead, focus on thorough oral hygiene, limit other sugar exposures, apply fluoride varnish at dental visits, and discuss a personalized plan with your pediatric dentist.',
    },
  ],
  whenNormal: [
    'You are breastfeeding and your baby\'s teeth are clean, white, and free of spots or discoloration',
    'Your baby has regular dental checkups with no signs of decay',
    'You brush your baby\'s teeth twice daily with fluoride toothpaste',
    'Your pediatric dentist is aware of your breastfeeding pattern and is not concerned about decay risk',
  ],
  whenToMention: [
    'You notice white or chalky spots on your breastfed baby\'s teeth, particularly near the gumline',
    'Your baby nurses frequently throughout the night and you are wondering about cavity prevention strategies',
    'You are unsure whether your current oral hygiene routine is adequate for your breastfed baby',
  ],
  whenToActNow: [
    'Your baby has visible brown or black spots on their teeth, or teeth that appear to be decaying, which need prompt dental evaluation and treatment',
    'Your baby has swollen gums, facial swelling, or appears to be in pain while eating, which could indicate advanced decay or abscess',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAPD',
      citation:
        'American Academy of Pediatric Dentistry. Policy on Early Childhood Caries (ECC): Unique Challenges and Treatment Options.',
      url: 'https://www.aapd.org/research/oral-health-policies--recommendations/early-childhood-caries-classifications-consequences-and-preventive-strategies/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics. 2012;129(3):e827-e841.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Breastfeeding and Early Childhood Caries: A Systematic Review and Meta-Analysis. Acta Paediatrica. 2015;104(S467):62-69.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/26192560/',
    },
  ],
};
