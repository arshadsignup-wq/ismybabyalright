import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-teeth-grinding-damage',
  title: 'My Toddler Grinds Their Teeth and It\'s Causing Wear',
  category: 'physical',
  searchTerms: ['toddler teeth grinding', 'toddler bruxism', 'toddler grinding teeth damage', 'toddler teeth wearing down', 'toddler grinding teeth sleep', 'bruxism toddler', 'toddler clenching jaw', 'toddler teeth grinding treatment', 'baby grinding teeth', 'toddler teeth flat from grinding'],
  quickAnswer: 'Teeth grinding (bruxism) is very common in children, affecting up to 30% of kids under age 5. Most children outgrow it. Mild grinding rarely causes lasting damage to baby teeth. However, if grinding is causing visible wear, pain, or sleep disruption, a pediatric dentist can evaluate and provide guidance.',
  byAge: [
    { ageRange: '6-12 months', context: 'Some babies begin grinding when their first teeth appear. They are exploring the new sensation of teeth touching. This is typically a phase that resolves on its own.' },
    { ageRange: '12-24 months', context: 'Teeth grinding is common at this age, often during sleep. It may sound alarming but usually does not cause significant damage to baby teeth. If your toddler seems to grind frequently, mention it at your dental visit.' },
    { ageRange: '2-3 years', context: 'If grinding persists and is causing visible wear on teeth, jaw pain, or headaches, a pediatric dentist should evaluate. Causes may include stress, allergies, or jaw alignment issues. Night guards are rarely used in toddlers.' },
    { ageRange: '3-5 years', context: 'Most children reduce or stop grinding as they mature. If significant grinding continues, ongoing dental monitoring is important to track tooth wear. Since these are baby teeth, significant damage is less concerning than it would be for permanent teeth.' },
  ],
  whenNormal: ['Occasional grinding, especially when new teeth come in.', 'Grinding is intermittent and your child seems comfortable.', 'Teeth show minimal or no visible wear.', 'Grinding is decreasing over time.'],
  whenToMention: ['Visible wear or flattening of teeth.', 'Your child complains of jaw pain or headaches.', 'Grinding disrupts sleep significantly.'],
  whenToActNow: ['Teeth are cracking or breaking from grinding.', 'Severe jaw pain or locking.'],
  relatedMilestones: ['dental-eruption'],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-jaw-alignment-concerns'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Bruxism in Children', url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/default.aspx' },
    { org: 'NIH', citation: 'Machado E, et al. Prevalence of Sleep Bruxism in Children. J Oral Rehabil. 2014;41(4)', url: 'https://pubmed.ncbi.nlm.nih.gov/24382165/' },
    { org: 'CDC', citation: 'CDC - Children\'s Oral Health', url: 'https://www.cdc.gov/oralhealth/basics/childrens-oral-health/index.html' },
  ],
};
