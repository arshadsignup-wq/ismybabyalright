import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-functional-abdominal-pain',
  title: 'Recurrent Tummy Aches in Toddler',
  category: 'digestive',
  searchTerms: [
    'toddler recurrent tummy ache',
    'toddler stomach ache recurring',
    'toddler frequent belly pain',
    'functional abdominal pain child',
    'toddler keeps saying tummy hurts',
    'toddler stomach pain comes and goes',
    'toddler abdominal pain no cause',
    'recurrent abdominal pain child',
    'toddler belly ache every day',
    'functional GI pain toddler',
  ],
  quickAnswer:
    'Recurrent tummy aches in toddlers are common and most often have no serious underlying cause. Functional abdominal pain occurs when the gut is extra sensitive to normal digestive processes like gas, stretching, and movement. Common triggers include constipation, gas, stress, and anxiety. When a child is growing well with a normal physical exam, functional pain is the most likely diagnosis.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Abdominal discomfort in young infants is typically related to gas, colic, or feeding issues. The concept of functional abdominal pain applies more to children over 2 years who can verbalize their discomfort.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Belly discomfort at this age is usually from gas, constipation, or reflux. Functional abdominal pain as a diagnosis is not typically applied before toddlerhood.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies may show signs of belly discomfort through fussiness and drawing legs up. At this age, constipation and dietary causes are most likely. A thorough evaluation by your pediatrician can rule out other causes.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers may begin to verbalize tummy aches. Common causes include constipation (the most frequent cause of recurrent belly pain in children), gas from a diet high in sugar or juice, anxiety, and stress. If your toddler complains of belly pain but is eating, growing, and active between episodes, functional pain is likely.',
    },
  ],
  whenNormal: [
    'Intermittent tummy aches around the belly button in a child who is growing well and has no alarm symptoms',
    'Belly pain that resolves quickly and does not prevent normal activities',
    'Tummy aches associated with constipation that improve when stools normalize',
  ],
  whenToMention: [
    'Recurrent tummy aches that are affecting your child\'s daily activities or quality of life',
    'You want to rule out organic causes and discuss management strategies',
    'Belly pain is associated with constipation or dietary patterns you want to address',
  ],
  whenToActNow: [
    'Abdominal pain with fever, bilious vomiting, or bloody stool',
    'Severe pain that wakes the child from sleep',
    'Pain localized to the right lower abdomen (possible appendicitis, though rare under age 3)',
    'Unexplained weight loss, persistent vomiting, or signs of a systemic illness',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Chronic Abdominal Pain in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Chronic-Abdominal-Pain.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Functional Abdominal Pain in Children. Pediatrics.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/25713280/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Stomachaches in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Stomachaches.aspx',
    },
  ],
  relatedConcernSlugs: ['constipation', 'baby-trapped-gas-signs', 'toddler-cyclic-vomiting-syndrome'],
};
