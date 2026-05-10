import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'fortified-formula-when-needed',
  title: 'When Fortified Formula is Needed',
  category: 'feeding',
  searchTerms: [
    'when to use fortified formula',
    'high calorie formula baby',
    'baby not gaining weight formula',
    'premature baby special formula',
    'fortified breast milk',
    'infant formula types',
    'concentrated formula baby',
    'neosure similac special care',
    'formula for underweight baby',
    'when doctor recommends formula',
  ],
  quickAnswer:
    'Fortified or specialized infant formulas are recommended in specific medical situations, including prematurity, failure to thrive, certain metabolic conditions, and when standard formula or breast milk alone does not provide adequate nutrition. High-calorie formulas (22-30 calories per ounce vs. standard 20 cal/oz) help babies who need extra calories to grow. These formulas should only be used under the direction of a pediatrician or neonatologist, as incorrect preparation or unnecessary use can be harmful.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Premature babies (born before 37 weeks) often require fortified breast milk or specialized preterm formulas that provide extra calories, protein, calcium, phosphorus, and vitamins. Human milk fortifiers (HMF) can be added to expressed breast milk to boost nutrition. Formulas like Similac Special Care or Enfamil Premature are designed for use in the NICU. After NICU discharge, many preemies transition to post-discharge formulas (like NeoSure or EnfaCare) that provide 22 calories per ounce to support catch-up growth.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If your baby is not gaining weight adequately on standard formula or breast milk, your pediatrician may recommend concentrating formula to a higher calorie density (22 or 24 calories per ounce instead of standard 20). This should only be done following precise medical instructions, as incorrect mixing can cause dangerous electrolyte imbalances or dehydration. Babies with specific conditions such as congenital heart disease, chronic lung disease, or gastrointestinal conditions may also require specialized formulas.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Some babies continue to need fortified formula even as solids are introduced if they have ongoing growth challenges. Babies with cow\'s milk protein allergy may need extensively hydrolyzed formulas (like Nutramigen or Alimentum) or amino acid-based formulas (like EleCare or PurAmino). Babies with galactosemia require soy-based formulas. Your pediatrician or a pediatric gastroenterologist will guide formula selection based on your baby\'s specific condition and nutritional needs.',
    },
    {
      ageRange: '12 months+',
      context:
        'Most children transition off formula at 12 months, but some with ongoing medical conditions may continue with specialized formulas or high-calorie nutritional supplements. Toddler formulas marketed to the general public are generally unnecessary for healthy toddlers eating a varied diet, and the AAP does not recommend them for routine use. However, children with feeding difficulties, chronic illness, or failure to thrive may benefit from prescribed nutritional supplements. Always consult your pediatrician before continuing formula past 12 months.',
    },
  ],
  whenNormal: [
    'Your healthy, full-term baby is growing well on standard infant formula or breast milk without any need for fortification',
    'Your premature baby is on a post-discharge formula recommended by the NICU team and is catching up on growth',
    'Your baby transitioned off specialized formula to standard formula or breast milk as directed by your pediatrician',
    'Your toddler has transitioned to whole milk at 12 months and is gaining weight appropriately',
  ],
  whenToMention: [
    'Your baby is not gaining weight despite feeding well and you are wondering if a higher-calorie formula is needed',
    'You are unsure when to transition your premature baby from specialized formula to standard formula',
    'You have been mixing concentrated formula and want to confirm you are doing it correctly',
  ],
  whenToActNow: [
    'Your baby shows signs of severe dehydration or electrolyte imbalance after formula changes, including lethargy, sunken fontanelle, very dry mouth, or no wet diaper for 8 or more hours',
    'Your baby is losing weight rapidly, refusing feeds entirely, or vomiting every feeding, which requires urgent medical evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Choosing an Infant Formula. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/Choosing-an-Infant-Formula.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Nutritional Needs of the Preterm Infant. Pediatric Nutrition. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK513399/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant Formula Preparation and Storage.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/formula-feeding/infant-formula-preparation-and-storage.html',
    },
  ],
};
