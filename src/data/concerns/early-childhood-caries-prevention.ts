import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'early-childhood-caries-prevention',
  title: 'Preventing Early Childhood Cavities (Caries)',
  category: 'medical',
  searchTerms: [
    'baby teeth cavities',
    'toddler cavities prevention',
    'early childhood caries',
    'baby bottle tooth decay',
    'when to brush baby teeth',
    'baby teeth rot',
    'fluoride for baby teeth',
    'toddler brown teeth',
    'breastfeeding cavities',
    'bottle at night cavities',
    'baby dental care',
  ],
  quickAnswer:
    'Early childhood caries (ECC) is the most common chronic disease in young children, affecting about 23% of US children under age 5. Cavities in baby teeth matter because they can cause pain, infection, and affect the development of permanent teeth. Prevention starts from the first tooth: use a rice-grain-sized smear of fluoride toothpaste, avoid putting baby to bed with a bottle of milk or juice, limit sugary foods and drinks, and schedule the first dental visit by age 1 or within 6 months of the first tooth appearing.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Before teeth appear, good oral health habits begin. Clean your baby\'s gums with a soft, damp cloth after feedings. Avoid sharing utensils or cleaning pacifiers with your mouth, as cavity-causing bacteria (Streptococcus mutans) can be transmitted from caregiver to baby. If your baby is on breast milk or formula only, no toothbrushing is needed until the first tooth appears, but gum care supports healthy oral development.',
    },
    {
      ageRange: '6-12 months',
      context:
        'When the first tooth appears (usually around 6 months), begin brushing twice daily with a soft infant toothbrush and a rice-grain-sized smear of fluoride toothpaste. The AAP and the American Academy of Pediatric Dentistry (AAPD) both recommend fluoride toothpaste from the first tooth. Schedule the first dental visit by age 1. Avoid putting your baby to bed with a bottle of milk or juice, as prolonged exposure to sugary liquids causes rapid tooth decay. Water is the only safe liquid for a bedtime bottle.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Continue brushing twice daily. After age 2-3 (when your child can spit), increase to a pea-sized amount of fluoride toothpaste. Limit juice to no more than 4 oz per day and avoid sugary snacks between meals. Sippy cups with milk or juice between meals bathe teeth in sugar and promote decay. Your pediatrician may apply fluoride varnish at well-child visits (effective and safe for children from the first tooth). If you notice white spots, brown discoloration, or pitting on your child\'s teeth, see a dentist promptly, as these are early signs of decay.',
    },
  ],
  whenNormal: [
    'Your baby\'s teeth are coming in white, smooth, and without spots or discoloration.',
    'You are brushing your baby\'s teeth twice daily with fluoride toothpaste and limiting sugary drinks.',
    'Your child has had their first dental visit and the dentist found no concerns.',
  ],
  whenToMention: [
    'You notice white spots or chalky areas on your child\'s teeth, which can be the earliest sign of decay.',
    'Your child has yellow or brown discoloration on their teeth.',
    'Your child has not yet seen a dentist and is over 12 months old.',
  ],
  whenToActNow: [
    'Your child has visible cavities (holes, dark spots, broken teeth) or is complaining of tooth pain.',
    'Your child has a swollen face or gum area, which could indicate a dental abscess requiring urgent treatment.',
    'Your child has been in pain or refusing to eat due to dental problems.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-grinding-teeth', 'breastfeeding-at-night-frequent', 'formula-constipation-hard-stools'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fluoride Use in Caries Prevention in the Primary Care Setting. Pediatrics, 2020.',
      url: 'https://publications.aap.org/pediatrics/article/146/6/e2020034637/33537/Fluoride-Use-in-Caries-Prevention-in-the-Primary',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Children\'s Oral Health. CDC.',
      url: 'https://www.cdc.gov/oral-health/about/childrens-oral-health.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Healthy Teeth. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/oral-health/Pages/default.aspx',
    },
  ],
};
