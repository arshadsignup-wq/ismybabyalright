import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-breath-smells-bad',
  title: 'My Toddler\'s Breath Smells Bad',
  category: 'medical',
  searchTerms: [
    'toddler bad breath',
    'toddler breath smells',
    'toddler halitosis',
    'why does my toddler have bad breath',
    'toddler morning breath',
    'toddler breath smells like rotten eggs',
    'toddler breath smells fruity',
    'bad breath in 2 year old',
    'toddler stinky breath causes',
    'toddler mouth odor',
  ],
  quickAnswer:
    'Bad breath (halitosis) in toddlers is common and usually caused by dry mouth from mouth breathing, food particles, or mild sinus congestion. Poor oral hygiene is the most frequent cause, especially as toddlers may resist tooth brushing. While most cases are harmless and easily addressed, persistent foul-smelling breath can occasionally indicate a foreign body lodged in the nose, a sinus infection, or dental issues.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'At this age, bad breath is often related to mouth breathing during sleep, particularly if your toddler has a cold or congestion. Milk residue on the tongue and emerging teeth can also contribute to odor. Start brushing teeth twice daily with a rice-grain-sized amount of fluoride toothpaste as soon as the first tooth appears. Wiping the tongue gently with a damp cloth can also help.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Toddlers at this age are eating a wider variety of foods, and particles can get trapped between teeth. They are also at an age where they begin putting small objects in their noses, which is a surprisingly common cause of persistent, foul one-sided nasal discharge and bad breath. If your toddler has sudden-onset bad breath that does not improve with brushing, and particularly if you notice smelly discharge from one nostril, a nasal foreign body should be considered.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By this age, dental hygiene becomes increasingly important as your toddler has most of their primary teeth. Cavities can develop quickly in toddlers and are a common cause of persistent bad breath. Ensure your toddler has their first dental visit by age one or within six months of the first tooth. Chronic mouth breathing, enlarged adenoids, or recurring sinus infections can also cause ongoing halitosis and may warrant evaluation by your pediatrician or an ENT specialist.',
    },
  ],
  whenNormal: [
    'Your toddler has morning breath that improves after brushing teeth and drinking water',
    'Bad breath occurs temporarily during a cold or when your toddler is congested',
    'Breath smells after eating strong-flavored foods like garlic, onions, or cheese',
  ],
  whenToMention: [
    'Bad breath persists despite regular tooth brushing and good oral hygiene',
    'Your toddler chronically breathes through their mouth, snores heavily, or has persistent nasal congestion',
    'You notice foul-smelling discharge from one nostril, which may suggest a lodged foreign body',
  ],
  whenToActNow: [
    'Your toddler\'s breath has a fruity or acetone-like smell, which can be a sign of diabetic ketoacidosis or metabolic issues',
    'Your toddler has bad breath accompanied by high fever, facial swelling, or severe tooth pain suggesting a dental abscess',
    'Your toddler has sudden difficulty breathing along with foul breath and nasal discharge',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-sleeping-mouth-open',
    'toddler-food-texture-sensitivity',
    'persistent-fever-baby',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bad Breath in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/mouth-teeth/Pages/Bad-Breath.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Brushing Up on Oral Health. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/oral-health/Pages/Brushing-Up-on-Oral-Health.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Halitosis in Children. National Library of Medicine.',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4530825/',
    },
  ],
};
