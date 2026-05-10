import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'natal-teeth-born-with-teeth',
  title: 'Natal Teeth (Born with Teeth)',
  category: 'medical',
  searchTerms: [
    'baby born with teeth',
    'natal teeth',
    'neonatal teeth',
    'newborn has teeth',
    'baby born with a tooth',
    'teeth at birth',
    'baby tooth at 1 month',
    'premature teeth baby',
    'natal teeth dangerous',
  ],
  quickAnswer:
    'Natal teeth (teeth present at birth) occur in approximately 1 in 2,000 to 3,000 newborns. In most cases, natal teeth are early-erupting primary teeth rather than extra (supernumerary) teeth. They are usually the lower front incisors. While natal teeth are often harmless, they should be evaluated by a pediatric dentist because they can cause feeding difficulties, tongue ulceration (Riga-Fede disease), or pose an aspiration risk if they are very loose.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Natal teeth are present at birth, and neonatal teeth erupt within the first 30 days of life. A pediatric dentist or pediatrician should evaluate them shortly after discovery. If the tooth is firmly attached (which about 90% of natal teeth are), it is usually left in place. If it is very mobile and poses an aspiration risk, extraction may be recommended, though this is typically delayed until after 10 days of age to reduce bleeding risk.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If natal teeth were left in place, they should be monitored for any issues with feeding, tongue irritation, or mobility. The baby may develop sublingual ulceration (Riga-Fede disease) from the tooth rubbing on the tongue during nursing. Smoothing rough edges or using a protective covering may help. These teeth will eventually be lost on the same schedule as normally erupted primary teeth.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If the natal tooth was a primary tooth that was extracted, the permanent tooth will still develop normally and erupt around age 6. If the natal tooth remains, it should be included in regular brushing and dental care once other teeth begin to erupt.',
    },
    {
      ageRange: '12 months+',
      context:
        'Natal teeth that have been retained will function like normal baby teeth. Regular dental visits should continue to monitor them along with newly erupted teeth. X-rays at an appropriate age can confirm whether the tooth is a true primary tooth or a supernumerary tooth.',
    },
  ],
  whenNormal: [
    'The natal tooth is firm and well-attached to the gum',
    'Your baby is feeding well and gaining weight normally despite having the natal tooth',
    'The tooth does not cause visible irritation to the baby\'s tongue or gums',
    'Your pediatric dentist has evaluated the tooth and recommended monitoring',
  ],
  whenToMention: [
    'Your baby has difficulty latching or feeding due to the natal tooth',
    'You notice an ulcer or sore on your baby\'s tongue that may be caused by the tooth rubbing',
    'The natal tooth appears discolored, irregularly shaped, or has rough edges',
  ],
  whenToActNow: [
    'The natal tooth is extremely loose and mobile, creating a risk of the tooth detaching and being inhaled (aspiration hazard)',
    'Your baby has stopped feeding, is losing weight, or has significant bleeding from the gum around the natal tooth',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAPD',
      citation:
        'American Academy of Pediatric Dentistry. Guideline on Management of the Developing Dentition and Occlusion in Pediatric Dentistry.',
      url: 'https://www.aapd.org/research/oral-health-policies--recommendations/management-of-the-developing-dentition/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Baby\'s First Tooth: 7 Facts Parents Should Know. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Babys-First-Tooth-Facts-Parents-Should-Know.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Natal teeth: a review. International Journal of Paediatric Dentistry. 2003;13(6):399-404.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/14984047/',
    },
  ],
};
