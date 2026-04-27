import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-pooping-for-a-week',
  title: 'Baby Not Pooping for a Week - When to Worry',
  category: 'digestive',
  searchTerms: ['baby not pooping for a week','baby hasn\'t pooped in 5 days','baby not pooping but passing gas','breastfed baby not pooping','how long can baby go without pooping','baby constipated or normal','baby straining to poop','newborn not pooping','baby infrequent stool','baby no bowel movement 7 days','when to worry baby not pooping','baby poop schedule'],
  quickAnswer: 'For breastfed babies over 6 weeks old, going up to 7-10 days without a bowel movement can be completely normal - breast milk is so well-digested that there is very little waste. For formula-fed babies, going more than 3-4 days without pooping is unusual and may indicate constipation. The key indicator is not frequency but consistency - if the poop is soft when it finally comes, your baby is not constipated regardless of the gap. Hard, pellet-like stools with straining indicate true constipation.',
  byAge: [
    { ageRange: '0-6 weeks', context: 'In the first 6 weeks, both breastfed and formula-fed babies should poop at least once daily - multiple times is common. Fewer than 3-4 poops per day in the first month for breastfed babies can indicate insufficient milk intake. If your newborn under 6 weeks has not pooped in 24-48 hours, contact your pediatrician, as this could be a feeding issue or, rarely, a sign of Hirschsprung disease (a condition where nerves in the colon are missing).' },
    { ageRange: '6 weeks - 6 months', context: 'After 6 weeks, breastfed babies famously develop longer gaps between bowel movements. Some poop after every feed and some poop once a week - both are normal as long as the poop is soft. Formula-fed babies typically poop daily or every other day. If your formula-fed baby goes more than 3 days, try gentle belly massage, bicycle legs, and ensure the formula is mixed correctly. Do not add anything to bottles (juice, corn syrup) without pediatrician guidance.' },
    { ageRange: '6-12 months', context: 'Starting solids changes poop patterns significantly. It is normal for poop to become firmer, darker, and less frequent. Constipating foods include bananas, rice cereal, and dairy. High-fiber foods (prunes, pears, peas, oatmeal) help keep things moving. Offer water with meals once solids are established. If your baby strains, has hard pellet-like stools, or has painful bowel movements, increase water and fiber-rich foods.' },
    { ageRange: '12-36 months', context: 'Toddler constipation is very common, especially during potty training. Withholding poop (refusing to go) can create a painful cycle - hard stool causes pain, so the child holds it more, making it harder. If your toddler is not pooping for several days and the stool is hard when it comes, your pediatrician may recommend Miralax or another osmotic laxative. Increasing fiber, water, and physical activity helps prevent constipation.' },
  ],
  whenNormal: ['Your breastfed baby over 6 weeks goes several days without pooping but produces a large, soft stool when they finally go','Your baby is happy, feeding well, and passing gas between bowel movements','Poop frequency changed after starting solids but the stool is still soft','Your baby strains with a red face but produces soft stool - this is normal infant dyschezia, not constipation'],
  whenToMention: ['Your formula-fed baby regularly goes 4+ days without pooping','Stools are hard, pellet-like, or painful to pass','Your baby cries during bowel movements and there is blood on the stool or diaper','Your toddler is withholding stool and going several days between painful bowel movements'],
  whenToActNow: ['A newborn under 6 weeks who has not passed meconium within 48 hours of birth or stops pooping','Your baby has a distended (swollen, hard) belly with no bowel movement and is vomiting','Blood in stool with severe abdominal pain and your baby drawing legs up - could indicate intussusception'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-chronic-diarrhea','toddler-abdominal-pain','baby-vomiting-no-fever'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Constipation in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Constipation.aspx' },
    { org: 'NIH', citation: 'National Institute of Diabetes and Digestive and Kidney Diseases. Constipation in Children.', url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/constipation-children' },
    { org: 'AAP', citation: 'Tabbers MM, et al. Evaluation and Treatment of Functional Constipation in Infants and Children. Journal of Pediatric Gastroenterology and Nutrition. 2014.', url: 'https://pubmed.ncbi.nlm.nih.gov/24345831/' },
  ],
};
