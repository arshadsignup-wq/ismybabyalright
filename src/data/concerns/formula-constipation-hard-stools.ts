import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'formula-constipation-hard-stools',
  title: 'Formula-Fed Baby Constipation and Hard Stools',
  category: 'digestive',
  searchTerms: [
    'formula fed baby constipation',
    'baby hard stool formula',
    'formula causing constipation baby',
    'baby straining to poop formula',
    'iron in formula constipation',
    'which formula causes less constipation',
    'formula change constipation baby',
    'baby poop pellets formula',
    'formula fed baby not pooping',
    'constipation relief formula baby',
  ],
  quickAnswer:
    'Constipation is more common in formula-fed babies than breastfed babies because formula is digested differently. Signs of true constipation include hard, pellet-like stools, infrequent bowel movements with straining and discomfort, and blood on the stool surface from straining. Infrequent but soft stools are not constipation. Iron in formula does not typically cause constipation at standard levels. Simple measures like tummy massage and, for babies over 4 months, small amounts of prune or pear juice may help.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Formula-fed newborns typically poop 1-4 times per day, though some may go every other day. Formula stools are normally firmer and more formed than breastfed baby stools, and they tend to be tan, yellow, or greenish. If your newborn is straining, grunting, or turning red while pooping but the stool is soft, this is likely infant dyschezia (difficulty coordinating the muscles for pooping), not constipation. True constipation -- hard, dry stools that are difficult to pass -- is uncommon in the first month and should be evaluated by your pediatrician.',
    },
    {
      ageRange: '2-6 months',
      context:
        'As your baby\'s digestive system matures, stool frequency may decrease. Some formula-fed babies may poop only once every 2-3 days, which is normal as long as stools are soft. If stools are truly hard, pellet-like, or cause your baby significant distress, discuss with your pediatrician. They may recommend trying a different formula, as some babies do better with partially hydrolyzed proteins. For babies over 4 months, 1-2 oz of 100% prune, pear, or apple juice diluted with water may help soften stools.',
    },
    {
      ageRange: '6-12 months',
      context:
        'The introduction of solid foods can temporarily worsen constipation. Avoid excessive bananas, rice cereal, and applesauce, which can be binding. Instead, offer high-fiber foods: prunes, pears, peas, oat cereal, and whole grain options. Ensure adequate fluid intake alongside solids. If constipation persists despite dietary adjustments, your pediatrician may recommend an over-the-counter stool softener like polyethylene glycol (Miralax) at an appropriate dose. Do not use suppositories, laxatives, or enemas without medical guidance.',
    },
  ],
  whenNormal: [
    'Your formula-fed baby poops every 1-3 days and the stool is soft, even if your baby grunts or strains briefly.',
    'Your baby\'s stool consistency changed slightly after switching formula brands but remains soft.',
    'Your baby has occasional harder stools after starting solids that resolve with dietary adjustments.',
  ],
  whenToMention: [
    'Your baby consistently passes hard, pellet-like stools with straining and distress.',
    'Your baby has not pooped in 5 or more days and seems uncomfortable.',
    'You see blood on the outside of the stool or on the diaper from straining.',
  ],
  whenToActNow: [
    'Your newborn under 1 month has not had a bowel movement in 3 or more days, which could indicate a more serious condition.',
    'Your baby has a distended, hard, or tender abdomen along with vomiting and no bowel movements.',
    'Your baby passes large amounts of blood in their stool or has stool mixed with blood and mucus.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['hard-pebble-poop', 'straining-to-poop', 'formula-gas-bloating-discomfort', 'grunting-baby-syndrome'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Constipation in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Constipation.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Baby\'s First Bowel Movements. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Babys-First-Bowel-Movements.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Constipation in Children. NIDDK.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/constipation-children',
    },
  ],
};
