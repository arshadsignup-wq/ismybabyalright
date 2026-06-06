import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-mucousy-poop',
  title: 'Mucus in Newborn Stool',
  category: 'digestive',
  searchTerms: ['mucus in baby poop', 'newborn mucousy stool', 'slimy poop baby', 'baby poop with mucus', 'stringy mucus baby stool', 'newborn mucus bowel movement', 'jelly-like poop baby', 'mucus stool breastfed baby', 'baby mucus poop normal', 'green mucus baby poop'],
  quickAnswer: 'A small amount of mucus in a newborn\'s stool is common and usually normal, as the intestines produce mucus as part of digestion. However, persistent, large amounts of mucus, especially with blood or a change in feeding behavior, could indicate a milk protein allergy, infection, or other digestive issue that should be evaluated.',
  byAge: [
    { ageRange: '0-1 month', context: 'Small amounts of mucus in newborn stools are common and usually harmless. The intestinal lining naturally produces mucus to help stool move through. During the first week, as stools transition from meconium to milk stools, some mucus is expected. If you notice significant amounts of mucus (stringy, jelly-like) or mucus mixed with blood, it could indicate cow\'s milk protein allergy (especially in formula-fed babies or breastfed babies whose mothers consume dairy) or infection. Contact your pediatrician for evaluation.' },
    { ageRange: '1-3 months', context: 'Persistent mucousy stools, especially with blood streaks, are a hallmark sign of cow\'s milk protein allergy (CMPA). If breastfeeding, your pediatrician may recommend an elimination diet removing dairy (and sometimes soy) from your diet. If formula-feeding, a switch to a hydrolyzed or amino acid-based formula may be recommended. Mucousy stools from CMPA typically improve within 2-4 weeks of dietary changes.' },
    { ageRange: '3-6 months', context: 'If mucousy stools have resolved with dietary changes, continue the elimination diet as recommended. If mucousy stools persist or develop new, discuss with your pediatrician to evaluate for other causes.' },
    { ageRange: '6-12 months', context: 'With introduction of solid foods, occasional mucus in stools can occur. Persistent mucus should be evaluated, especially if accompanied by blood, diarrhea, or poor weight gain.' },
  ],
  whenNormal: ['Occasional small amounts of mucus in an otherwise normal stool', 'Mucus during the transition from meconium to milk stools', 'Baby is feeding well, gaining weight, and not in distress'],
  whenToMention: ['Persistent mucus in most stools', 'Mucus accompanied by blood streaks', 'Baby seems uncomfortable, gassy, or fussy with feeds'],
  whenToActNow: ['Large amounts of bloody mucus in stools, or explosive, watery, mucousy diarrhea', 'Baby is refusing to eat, has a distended abdomen, or appears ill'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Milk Allergy in Infants. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Cow\'s Milk Protein Allergy in Infants. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK572114/' },
  ],
  relatedConcernSlugs: ['newborn-green-poop-first-weeks', 'blood-in-mucus-baby', 'newborn-watery-stools-breastfed'],
};
