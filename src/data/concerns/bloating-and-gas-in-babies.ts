import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'bloating-and-gas-in-babies',
  title: 'Bloating and Excessive Gas in Babies',
  category: 'digestive',
  searchTerms: [
    'baby bloated belly',
    'baby excessive gas',
    'newborn gassy and bloated',
    'baby stomach distended',
    'baby gas pain crying',
    'baby farts a lot',
    'gassy baby remedies',
    'baby belly hard and round',
    'why is my baby so gassy',
  ],
  quickAnswer:
    'Gas and mild bloating are extremely common in babies, especially in the first 3-4 months of life. Babies have immature digestive systems and swallow air during feeding and crying, which produces gas. A gassy baby who is otherwise feeding well, growing, and having normal stools is almost always fine. The gassiness tends to improve significantly after 3-4 months as the digestive system matures.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'This is the peak period for gassiness. Newborns swallow air during feeding, their intestinal muscles are still learning to coordinate, and their gut bacteria are just beginning to establish. Babies may squirm, grunt, pull their legs up, and cry from gas discomfort. Frequent burping during and after feeds, bicycle leg movements, and tummy time can help. Gas drops (simethicone) are safe and may help some babies, though evidence is mixed.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Gas issues typically improve significantly around 3-4 months as the digestive system matures and feeding coordination improves. If excessive gassiness persists beyond 4 months, especially with other symptoms like blood in stool or severe fussiness, it could suggest a food sensitivity (such as cow\'s milk protein in a breastfeeding mother\'s diet or in formula). Otherwise, mild ongoing gassiness is still normal at this age.',
    },
    {
      ageRange: '6-12 months',
      context:
        'New gassiness may appear when solids are introduced, as the gut adjusts to digesting different foods. Foods that commonly cause gas include beans, broccoli, cauliflower, and some fruits. This is temporary and does not mean your baby cannot tolerate these foods long-term. Introducing new foods one at a time helps you identify which ones cause more gas. Adequate fluid intake alongside solids also helps digestion.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers may experience gas from increased dietary variety, particularly with the introduction of cow\'s milk, high-fiber foods, or juice. Some gassiness is normal as the diet expands. If your toddler has persistent bloating, foul-smelling gas, and changes in stool pattern, it may be worth discussing possible food intolerances with your pediatrician.',
    },
  ],
  whenNormal: [
    'Your baby is gassy but is feeding well, gaining weight, and having normal stools for their age',
    'Gas is worst in the first 3-4 months and is gradually improving',
    'Your baby passes gas frequently but is generally content between episodes and can be soothed',
    'Gas increases temporarily after introducing new solid foods',
  ],
  whenToMention: [
    'Excessive gas is accompanied by persistent fussiness, poor feeding, or stools that are consistently unusual in color or consistency',
    'You suspect a specific food is causing your baby significant gas and discomfort and want guidance on elimination',
    'Gas and bloating persist beyond 4 months of age without improvement, especially if your baby seems to be in pain during and after most feedings',
    'Your baby has excessive gas along with frequent spitting up or reflux symptoms',
  ],
  whenToActNow: [
    'Your baby\'s abdomen is very distended, hard, and rigid rather than soft and squishy, especially if accompanied by vomiting or no stool output',
    'Your baby has severe, inconsolable crying with a very bloated belly, which could indicate a bowel obstruction or other abdominal emergency',
    'Bloating is accompanied by green (bilious) vomiting, bloody stools, or signs of severe pain such as drawing legs up tightly and screaming',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breaking Up Gas. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Breaking-Up-Gas.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Infant Colic and Gas. National Library of Medicine.',
      url: 'https://medlineplus.gov/ency/article/000978.htm',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Common Conditions in Newborns. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Common-Conditions-in-Newborns.aspx',
    },
  ],
};
