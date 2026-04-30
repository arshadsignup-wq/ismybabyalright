import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-vomiting-at-night-only',
  title: 'Baby Vomiting at Night Only',
  category: 'digestive',
  searchTerms: ['baby vomiting at night', 'toddler throws up at night', 'baby vomiting while sleeping', 'toddler night vomiting no fever', 'baby vomiting in sleep', 'toddler vomiting only at bedtime', 'baby night vomiting reflux', 'toddler vomiting in crib', 'baby throwing up at night not sick', 'toddler vomits in sleep'],
  quickAnswer: 'Vomiting that occurs primarily at night can have several causes. The most common include postnasal drip from a cold or allergies (mucus drains to the back of the throat when lying down, triggering gagging and vomiting), reflux (stomach acid flows back when lying flat), overeating at dinner, or coughing spells that trigger vomiting. If your child is otherwise well during the day and the vomiting is occasional, it is likely related to positioning and congestion rather than a stomach illness.',
  byAge: [
    { ageRange: '0-12 months', context: 'Night vomiting in babies is most commonly caused by reflux (gastroesophageal reflux). When a baby lies flat, stomach contents can flow back up more easily. Other causes include overfeeding before bed, a cold with postnasal drip, or a food sensitivity. Keeping your baby upright for 20-30 minutes after the last feed and ensuring the crib mattress is flat (do not use wedges or inclines, as these are not safe) can help. If night vomiting is frequent, discuss with your pediatrician.' },
    { ageRange: '1-3 years', context: 'Night vomiting in toddlers is commonly caused by: postnasal drip from a cold, sinusitis, or allergies that triggers coughing and gagging when lying down; eating too much or too close to bedtime; or reflux. Cough-induced vomiting is very common in toddlers with respiratory infections. If your toddler vomits at night during a cold, elevate the head of the bed slightly and use saline drops before bed. Recurrent night vomiting without illness should be evaluated, especially if it occurs with headaches (rare but important to rule out).' },
  ],
  whenNormal: ['Occasional vomiting at night during a cold due to postnasal drip and coughing', 'Vomiting once after a particularly large dinner', 'Spit-up or mild vomiting after a late bedtime feed in a young baby', 'A single episode of night vomiting with no other symptoms'],
  whenToMention: ['Night vomiting is happening regularly (more than once or twice a week)', 'Vomiting is interfering with your child\'s sleep and well-being', 'Night vomiting occurs even when your child does not have a cold', 'Your child complains of stomach pain or heartburn at night'],
  whenToActNow: ['Recurrent morning headaches with night or early morning vomiting (needs evaluation)', 'Vomiting with difficulty breathing, wheezing, or choking at night', 'Vomiting blood or bile (green)', 'Signs of dehydration from repeated vomiting (dry mouth, no tears, reduced wet diapers)'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-vomiting-no-fever', 'reflux', 'chronic-congestion', 'baby-vomiting-after-crying'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Vomiting in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Treating-Vomiting.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. GER and GERD in Infants. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/GERD-Reflux.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Gastroesophageal Reflux in Children.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK459149/' },
  ],
};
