import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-constipation-remedies-safe',
  title: 'Safe Constipation Remedies for Baby',
  category: 'digestive',
  searchTerms: [
    'baby constipation remedies safe',
    'safe ways to relieve baby constipation',
    'baby constipation home remedies',
    'baby constipation what to do',
    'how to help constipated baby',
    'infant constipation remedies',
    'natural constipation relief baby',
    'baby constipation safe treatment',
    'what helps baby constipation',
    'baby constipation tips',
  ],
  quickAnswer:
    'Safe constipation remedies for babies include tummy massage, bicycle legs, warm baths, and for babies over 4 months, offering small amounts of 100% prune, pear, or apple juice (1 to 2 ounces). High-fiber foods like prunes, pears, and peas help once solids are started. Never give laxatives, suppositories, or enemas without your pediatrician\'s guidance. Avoid honey, corn syrup, and mineral oil in babies under 1 year.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In young infants, constipation is uncommon, especially in breastfed babies. If stools are hard, tummy massage and bicycle legs may help. Rectal stimulation with a lubricated rectal thermometer should only be done occasionally and under your pediatrician\'s guidance, as it can become habit-forming for the baby.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If your baby is over 4 months, your pediatrician may recommend 1 to 2 ounces of 100% prune or pear juice diluted with water. For formula-fed babies, sometimes a formula change helps. Do not switch formulas without discussing with your pediatrician first.',
    },
    {
      ageRange: '6-12 months',
      context:
        'High-fiber solid foods are the best remedy: pureed prunes, pears, peas, plums, and peaches (the "P fruits"). Offer water between meals. Avoid constipating foods like rice cereal, bananas, and applesauce if constipation is an issue. If dietary changes do not help, your pediatrician may recommend an osmotic laxative like polyethylene glycol.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Ensure adequate fluid intake and fiber from fruits, vegetables, and whole grains. Limit constipating foods like dairy, white bread, and bananas if constipation is an issue. If dietary changes are insufficient, polyethylene glycol (Miralax) may be recommended by your pediatrician. Establishing regular toilet times after meals can help in older toddlers.',
    },
  ],
  whenNormal: [
    'Hard stools that resolve with dietary changes like adding prune juice or high-fiber foods',
    'Occasional constipation during transitions like starting solids or switching formula',
  ],
  whenToMention: [
    'Constipation is recurrent despite dietary modifications',
    'You want guidance on whether a laxative is appropriate for your child',
    'Your baby strains and cries with every bowel movement',
  ],
  whenToActNow: [
    'Your baby has not passed stool for several days and has a distended, firm abdomen with vomiting',
    'Blood in the stool or around the anus from an anal fissure that is not healing',
    'Constipation in a newborn under 6 weeks who was previously pooping regularly',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Constipation in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Constipation.aspx',
    },
    {
      org: 'NIDDK',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Constipation in Children.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/constipation-children',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fruit Juice for Infants. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/doi/10.1542/peds.2017-0967/27250/',
    },
  ],
  relatedConcernSlugs: ['constipation', 'baby-constipation-prune-juice', 'baby-constipation-after-starting-solids', 'hard-pebble-poop'],
};
