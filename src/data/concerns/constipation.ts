import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'constipation',
  title: 'Baby Constipation',
  category: 'digestive',
  searchTerms: [
    'baby constipation',
    'baby not pooping',
    'constipated baby remedies',
    'newborn constipation',
    'baby constipation after starting solids',
    'how to help constipated baby',
    'baby straining to poop',
    'baby hasn\'t pooped in 3 days',
    'infant constipation signs',
    'baby constipation formula fed',
  ],
  quickAnswer:
    'Constipation in babies is defined by hard, dry, difficult-to-pass stools rather than by how often your baby poops. Breastfed babies can go several days without a bowel movement and still be perfectly normal. If your baby is passing soft stools comfortably, even if infrequently, they are likely not constipated.',
  byAge: [
    {
      ageRange: '0-6 weeks',
      context:
        'Newborns typically poop frequently, sometimes after every feeding. Breastfed newborns should have at least 3-4 stools per day in the first month. If your newborn is not pooping regularly in the early weeks, it could indicate they are not getting enough milk, and this is worth discussing with your pediatrician promptly.',
    },
    {
      ageRange: '6 weeks - 6 months',
      context:
        'After about 6 weeks, breastfed babies may naturally start pooping less frequently. Some breastfed babies go 7 to 10 days between bowel movements and this can be completely normal as long as the stool is soft when it does come. Formula-fed babies tend to poop more regularly, and going more than 3-4 days without a stool may warrant attention.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Starting solid foods is the most common trigger for true constipation in babies. Their digestive system is adjusting to new foods, and low-fiber choices like rice cereal, bananas, and applesauce can contribute to harder stools. Offering water between meals and high-fiber foods like prunes, pears, and peas can help.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddler constipation is very common, especially during potty training when children may withhold stool. A diet with plenty of fruits, vegetables, and whole grains along with adequate fluid intake helps prevent constipation. If your toddler is consistently passing hard, painful stools, talk to your pediatrician about a management plan.',
    },
  ],
  whenNormal: [
    'Your breastfed baby goes several days without pooping but passes soft stool comfortably when they do',
    'Your baby grunts and turns red while pooping but produces soft stool afterward',
    'Your baby\'s stool pattern changes after starting a new food but stools remain soft',
    'Your baby poops less frequently after the first 6 weeks but is otherwise happy, feeding well, and gaining weight',
  ],
  whenToMention: [
    'Your baby consistently passes hard, pellet-like stools that seem painful to pass',
    'Your formula-fed baby has not pooped in more than 3 to 4 days',
    'Your baby seems uncomfortable with a distended belly and is refusing feeds',
    'Your baby has small streaks of blood on hard stool from a possible anal fissure',
  ],
  whenToActNow: [
    'Your newborn under 6 weeks has not pooped in more than 24-48 hours and is feeding poorly or lethargic',
    'Your baby has a distended, firm abdomen with vomiting and has not passed stool or gas',
    'There is significant blood in the stool or your baby appears to be in severe pain',
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
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Baby\'s First Bowel Movements. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Babys-First-Bowel-Movements.aspx',
    },
    {
      org: 'NIDDK',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Constipation in Children.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/constipation-children',
    },
  ],
};
