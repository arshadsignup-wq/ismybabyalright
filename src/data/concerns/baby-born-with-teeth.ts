import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-born-with-teeth',
  title: 'Baby Born with Teeth - Natal Teeth',
  category: 'physical',
  searchTerms: ['baby born with teeth','natal teeth','neonatal teeth','baby teeth at birth','baby born with tooth','newborn tooth','baby tooth early','natal teeth safe','baby born with one tooth','are natal teeth normal','natal teeth breastfeeding','should natal teeth be removed'],
  quickAnswer: 'Natal teeth (teeth present at birth) occur in about 1 in 2,000-3,000 births. In most cases, these are actual primary (baby) teeth that erupted early, not extra teeth. Most natal teeth are the lower front incisors. While natal teeth can sometimes cause breastfeeding difficulties or have a risk of becoming loose and being a choking hazard, many can be left in place and monitored. The decision to keep or remove a natal tooth depends on how firmly it is attached and whether it is causing problems.',
  byAge: [
    { ageRange: '0-1 month (natal teeth)', context: 'If your baby was born with teeth or teeth erupted within the first 30 days (neonatal teeth), your pediatrician and a pediatric dentist should evaluate them. Most natal teeth are real primary teeth (about 90%). The evaluation determines: how firmly attached the tooth is (loose teeth may need removal to prevent choking), whether the tooth is interfering with breastfeeding, and whether it is causing a tongue ulcer (Riga-Fede disease) from the baby\'s tongue rubbing against the tooth during sucking.' },
    { ageRange: '1-3 months', context: 'If natal teeth were left in place, monitor them for: loosening (which creates an aspiration risk), tongue or gum ulceration, and breastfeeding difficulties. If breastfeeding is painful due to the teeth, a lactation consultant can help with positioning. In some cases, smoothing the sharp edge of the tooth resolves nipple pain. If the tooth becomes very loose, it should be removed by a dentist. Natal teeth that remain firmly attached typically stay in place until the normal age for that tooth to fall out (around age 6-7).' },
    { ageRange: '3-6 months', context: 'If your baby has natal teeth that were kept, they will look like regular baby teeth and can be cared for the same way - gentle wiping with a damp cloth after feeds. Normal teething for other teeth begins around 4-6 months. Having natal teeth does not mean your baby will teethe earlier or later for the remaining teeth. The presence of natal teeth does not indicate any other health problems in the vast majority of cases.' },
    { ageRange: '6+ months', context: 'If a natal tooth was removed, the permanent tooth should still develop normally in the space. The gap from a removed natal tooth does not need treatment. Regular dental care should begin by age 1 as recommended by the AAP and American Academy of Pediatric Dentistry. If the natal tooth remained, it will eventually be lost like any other baby tooth. In rare cases, natal teeth can be associated with certain syndromes, but isolated natal teeth in an otherwise healthy baby are a benign variation.' },
  ],
  whenNormal: ['Your baby was born with one or two lower front teeth that are firmly attached - this is the most common presentation','The natal tooth is not causing breastfeeding problems or tongue ulceration','The tooth has been evaluated by a dentist and was determined to be a real primary tooth','Your baby is feeding, growing, and developing normally despite having early teeth'],
  whenToMention: ['Your baby has natal teeth and breastfeeding is painful or difficult','The natal tooth appears loose and could be a choking risk','Your baby has developed a sore on their tongue from rubbing against the tooth','You notice your baby has more than two natal teeth'],
  whenToActNow: ['A natal tooth has become very loose and could be swallowed or aspirated','Your baby has an ulcerated, bleeding sore on their tongue from the tooth','Your baby was born with multiple natal teeth along with other unusual features - could indicate a syndrome requiring evaluation'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-grinding-teeth-while-awake','baby-white-tongue','breastfeeding-to-formula-transition'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatric Dentistry. Management of the Developing Dentition. The Reference Manual of Pediatric Dentistry.', url: 'https://www.aapd.org/research/oral-health-policies--recommendations/' },
    { org: 'NIH', citation: 'Leung AK, Robson WL. Natal Teeth: A Review. Journal of the National Medical Association. 2006.', url: 'https://pubmed.ncbi.nlm.nih.gov/16573311/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Baby\'s First Tooth: 7 Facts Parents Should Know. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Babys-First-Tooth-Facts-Parents-Should-Know.aspx' },
  ],
};
