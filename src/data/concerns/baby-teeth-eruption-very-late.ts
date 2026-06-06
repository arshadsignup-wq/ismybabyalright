import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-teeth-eruption-very-late',
  title: 'My Baby Has No Teeth After 12 Months',
  category: 'physical',
  searchTerms: ['baby no teeth 12 months', 'baby late teething', 'baby teeth delayed', 'no teeth at 1 year', 'baby teeth not coming in', 'late teething baby', 'baby teeth eruption delayed', 'when to worry no teeth', 'baby no teeth 13 months', 'delayed dentition baby'],
  quickAnswer: 'While most babies get their first tooth by 6-10 months, some healthy babies do not get teeth until 12-14 months or even later. Late teething often runs in families and is usually not a medical concern. However, if your baby has no teeth by 18 months, your pediatrician may refer to a pediatric dentist for evaluation.',
  byAge: [
    { ageRange: '6-9 months', context: 'Not having teeth yet at this age is common and normal. Teething timelines vary widely. If your baby\'s gums look healthy and they can manage appropriate solid foods with their gums, there is no concern.' },
    { ageRange: '9-12 months', context: 'Some babies do not get their first tooth until around their first birthday. This is a normal variation, especially if late teething runs in the family. Your baby can still eat a variety of age-appropriate foods using their gums.' },
    { ageRange: '12-15 months', context: 'If no teeth have appeared by 12 months, mention it to your pediatrician at the well visit. They may check for nutritional deficiencies like vitamin D, or note it for monitoring. Many late teethers are simply late bloomers.' },
    { ageRange: '15-18 months', context: 'If still no teeth by 15-18 months, a dental evaluation is recommended. Rarely, conditions like ectodermal dysplasia or vitamin D deficiency can delay teeth. A dental X-ray can confirm teeth are present under the gums.' },
  ],
  whenNormal: ['Late teething runs in your family.', 'Your baby\'s gums are healthy.', 'Your baby is developing normally in all other areas.', 'Your baby is under 14 months.'],
  whenToMention: ['No teeth by 12 months.', 'Your baby has other signs of nutritional deficiency.', 'Teeth are delayed along with other developmental delays.'],
  whenToActNow: ['No teeth by 18 months with no family history of late teething.', 'Your baby has missing hair, very dry skin, or absent sweating alongside missing teeth.'],
  relatedMilestones: ['dental-first-tooth'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-teeth-eruption-early', 'baby-teeth-eruption-out-of-order'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Baby Teeth', url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Babys-First-Tooth-Facts-Parents-Should-Know.aspx' },
    { org: 'NIH', citation: 'Suri L, et al. Delayed Tooth Eruption. J Pediatr. 2004;145(6)', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
    { org: 'CDC', citation: 'CDC - Children\'s Oral Health', url: 'https://www.cdc.gov/oralhealth/basics/childrens-oral-health/index.html' },
  ],
};
