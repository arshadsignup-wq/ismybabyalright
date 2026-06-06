import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-meconium-not-passing',
  title: 'Delayed First Stool (Not Passing Meconium)',
  category: 'digestive',
  searchTerms: ['baby not pooping meconium', 'newborn no first stool', 'delayed meconium passage', 'baby hasn\'t pooped after birth', 'no meconium 24 hours', 'newborn bowel movement delay', 'baby not passing first stool', 'meconium delay causes', 'newborn no poop first day', 'when should newborn first poop'],
  quickAnswer: 'Most newborns pass their first meconium stool within 24-48 hours of birth. Delayed passage beyond 48 hours should be evaluated, as it can sometimes indicate conditions such as Hirschsprung disease, meconium ileus, or other bowel obstructions. Premature babies may take longer to pass meconium.',
  byAge: [
    { ageRange: '0-1 month', context: 'About 99% of full-term newborns pass meconium within the first 48 hours. Meconium is the thick, dark green-black, tar-like first stool. If your baby has not passed meconium by 48 hours, your pediatrician will evaluate for potential causes. Common reasons include Hirschsprung disease (absence of nerve cells in part of the colon), meconium ileus (associated with cystic fibrosis), intestinal atresia, or meconium plug syndrome. Many of these conditions are treatable, and early diagnosis leads to better outcomes.' },
    { ageRange: '1-3 months', context: 'After the initial meconium passage, stools transition to yellow seedy stools in breastfed babies and tan/brown formed stools in formula-fed babies. If Hirschsprung disease or another condition was diagnosed, treatment and follow-up will be ongoing.' },
    { ageRange: '3-6 months', context: 'Normal stool patterns should be established. Any ongoing concerns about bowel function should be monitored by your pediatrician.' },
    { ageRange: '6-12 months', context: 'Bowel patterns may change with the introduction of solid foods. If bowel problems were identified in the newborn period, continued follow-up is important.' },
  ],
  whenNormal: ['Meconium passed within the first 24-48 hours', 'Transition from meconium to normal stools by day 3-5', 'Regular bowel movements with adequate feeding'],
  whenToMention: ['Baby has not passed meconium by 24 hours', 'Stools are infrequent or baby seems to strain excessively', 'Abdominal distension is present'],
  whenToActNow: ['No meconium passed by 48 hours, which requires medical evaluation', 'Abdominal distension with vomiting (especially green/bile-colored), which could indicate bowel obstruction'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Stool Patterns in Newborns. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Delayed Meconium Passage. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK537298/' },
  ],
  relatedConcernSlugs: ['delayed-meconium-passage', 'meconium-ileus', 'newborn-transitional-stools'],
};
