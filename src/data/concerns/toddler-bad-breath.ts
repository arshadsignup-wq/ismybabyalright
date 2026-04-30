import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-bad-breath',
  title: 'Toddler Has Bad Breath',
  category: 'digestive',
  searchTerms: ['toddler bad breath', 'baby bad breath', 'toddler breath smells', 'child halitosis', 'toddler stinky breath', 'toddler morning breath', 'toddler breath smells like poop', 'toddler fruity breath', 'toddler breath smells sour', 'baby breath smells bad'],
  quickAnswer: 'Bad breath (halitosis) in toddlers is common and usually has a simple cause. The most frequent culprits are mouth breathing during sleep (which dries out the mouth), sinus congestion, a foreign object stuck in the nose, poor tooth brushing, or a mild throat infection. Bad breath is rarely caused by stomach problems in children. Most cases resolve by addressing the underlying cause, such as treating congestion, brushing teeth more thoroughly, or having a foreign object removed from the nose.',
  byAge: [
    { ageRange: '0-12 months', context: 'Bad breath in babies is uncommon. If present, the most likely causes are oral thrush, reflux (sour-smelling breath), or dried milk residue on the tongue. Cleaning your baby\'s tongue and gums with a damp cloth after feeds can help. If bad breath persists in a young baby, mention it to your pediatrician.' },
    { ageRange: '1-3 years', context: 'Toddler bad breath is very common and usually caused by: mouth breathing during sleep (dry mouth allows bacteria to grow), chronic congestion or sinus infection, a foreign object in the nose (causes foul-smelling one-sided discharge), tonsil issues (food debris collecting in tonsil crypts), inadequate tooth brushing, or dehydration. If the bad breath smells like rotten eggs from one side of the nose, a foreign body is the likely cause. Sweet or fruity breath can rarely indicate diabetic ketoacidosis and warrants immediate evaluation.' },
  ],
  whenNormal: ['Morning breath that improves after eating and drinking', 'Temporary bad breath during a cold or sinus congestion', 'Garlic or onion breath after eating strong foods', 'Mild mouth odor from teething or drooling'],
  whenToMention: ['Bad breath persists despite regular tooth brushing and good hydration', 'Your toddler has chronic nasal congestion alongside bad breath', 'Bad breath has a very foul, rotten smell', 'Your child snores and mouth breathes at night with morning bad breath'],
  whenToActNow: ['Sweet, fruity breath with increased thirst and urination (possible diabetes - needs urgent evaluation)', 'Very foul breath with green, smelly discharge from one nostril (likely foreign object in nose)', 'Bad breath with fever, sore throat, and visibly swollen or pus-covered tonsils', 'Sudden onset of very bad breath with drooling and difficulty swallowing'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['chronic-congestion', 'baby-mouth-breathing', 'baby-foreign-object-in-nose', 'thrush'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Bad Breath in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/mouth-teeth/Pages/default.aspx' },
    { org: 'AAPD', citation: 'American Academy of Pediatric Dentistry. Oral Health Policies.', url: 'https://www.aapd.org/research/oral-health-policies--recommendations/' },
    { org: 'NIH', citation: 'National Library of Medicine. Halitosis in Children.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
