import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-transitional-stools',
  title: 'Stool Changes in the First Week',
  category: 'digestive',
  searchTerms: ['newborn stool changes', 'baby poop color changes', 'transitional stools newborn', 'meconium to yellow poop', 'baby stool first week', 'newborn poop progression', 'green to yellow baby poop', 'baby stool color chart', 'normal newborn stool changes', 'when does meconium stop'],
  quickAnswer: 'Your newborn\'s stools go through a normal progression in the first week: thick, dark green-black meconium (days 1-2), transitional green-brown stools (days 3-4), and then yellow seedy stools in breastfed babies or tan/brown paste in formula-fed babies (by day 4-5). This progression indicates that feeding is going well.',
  byAge: [
    { ageRange: '0-1 month', context: 'The stool progression in the first week is an important indicator of feeding adequacy. Days 1-2: meconium (thick, sticky, dark green-black). Days 2-3: transitional stools (dark green to brownish-green, less sticky). Days 3-5: stools become looser and lighter, turning yellow. By day 4-5: breastfed babies have yellow, seedy, mustard-like stools; formula-fed babies have tan to brown, more formed stools. Breastfed babies may have 3-4+ stools per day in the first month. If stools have not transitioned from meconium by day 4-5, your baby may not be getting enough milk.' },
    { ageRange: '1-3 months', context: 'Breastfed baby stools remain yellow and seedy. Frequency may range from after every feed to once every few days (both are normal). Formula-fed babies typically have 1-2 formed stools per day. Green stools can be normal occasionally.' },
    { ageRange: '3-6 months', context: 'Stool patterns continue to evolve. Breastfed babies may have fewer stools as they become more efficient at absorbing nutrients.' },
    { ageRange: '6-12 months', context: 'Stools change significantly with the introduction of solid foods, becoming more formed and varying in color based on diet.' },
  ],
  whenNormal: ['Dark meconium transitioning to yellow stools by day 4-5', 'Yellow, seedy stools in breastfed babies; tan, pasty stools in formula-fed babies', 'Frequent stools (3-4+ per day) in breastfed newborns', 'Color and consistency variations related to feeding'],
  whenToMention: ['Stools have not transitioned from meconium by day 4-5', 'Stools are consistently an unusual color (white, red, or black after meconium period)', 'Very infrequent stools in a formula-fed baby'],
  whenToActNow: ['White, pale, or clay-colored stools at any age, which could indicate a liver problem', 'Bloody or tarry black stools (after meconium has passed), or green bile-stained vomiting with abdominal distension'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Baby\'s First Bowel Movements. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Normal Neonatal Stool Patterns. MedlinePlus.', url: 'https://medlineplus.gov/ency/article/003300.htm' },
  ],
  relatedConcernSlugs: ['newborn-meconium-not-passing', 'newborn-green-poop-first-weeks', 'white-poop'],
};
