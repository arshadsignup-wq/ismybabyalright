import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-milk-allergy-alternatives',
  title: 'Milk Allergy in Toddlers: Alternatives and Management',
  category: 'feeding',
  searchTerms: [
    'toddler milk allergy',
    'toddler cow milk allergy alternatives',
    'dairy allergy toddler',
    'milk allergy symptoms toddler',
    'best milk alternative for toddler',
    'toddler allergic to milk what to give',
    'toddler dairy free milk',
    'cow milk protein allergy toddler',
    'toddler milk substitute',
    'soy milk for toddler with milk allergy',
  ],
  quickAnswer:
    'Cow\'s milk protein allergy (CMPA) affects about 2-3% of infants and young children. Most children outgrow it by age 3-5. For toddlers who cannot drink cow\'s milk, soy milk (fortified) is the most nutritionally complete alternative recommended by the AAP. Other options include pea protein milk and oat milk, though these vary in nutritional content. Work with your pediatrician or a pediatric dietitian to ensure your toddler gets adequate calcium, vitamin D, protein, and fat from alternative sources.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'In infancy, cow\'s milk protein allergy is managed through extensively hydrolyzed or amino acid-based formula if breastfeeding is not possible. Breastfeeding mothers may need to eliminate dairy from their own diet. Symptoms can include blood in stool, excessive fussiness, eczema, vomiting, and diarrhea. Standard cow\'s milk should never be given before age 12 months regardless. If your baby has been diagnosed with CMPA, your pediatrician or allergist will guide the transition plan as your child approaches toddlerhood.',
    },
    {
      ageRange: '12-24 months',
      context:
        'When other children transition to whole cow\'s milk at age 1, your milk-allergic toddler needs a suitable alternative. Fortified soy milk is the AAP\'s first-line recommendation because it most closely matches cow\'s milk in protein, fat, and calorie content. Oat milk and almond milk are lower in protein and may not provide adequate nutrition as a primary milk replacement. Read labels carefully — calcium and vitamin D fortification varies widely between brands. Your child should get about 16-24 ounces of their milk alternative daily.',
    },
    {
      ageRange: '2-4 years',
      context:
        'Many children begin to outgrow cow\'s milk allergy between ages 2-5. Your allergist will periodically retest your child and may recommend a supervised oral food challenge to determine if the allergy has resolved. Until then, continue with appropriate alternatives and ensure your toddler gets calcium from other sources such as fortified foods, broccoli, beans, and calcium-set tofu. If your child also has soy allergy (which occurs in about 10-15% of cow\'s milk allergic children), pea protein milk is another option.',
    },
  ],
  whenNormal: [
    'Your toddler is growing well on a milk alternative and meeting nutritional needs with a varied diet',
    'Your toddler tolerates baked milk products (milk in muffins or bread) but reacts to straight milk — this is common and may indicate they are outgrowing the allergy',
    'Your toddler\'s symptoms have improved significantly since removing cow\'s milk from their diet',
  ],
  whenToMention: [
    'Your toddler is not growing well or you are concerned they are not getting enough calcium and vitamin D',
    'Your toddler seems to be reacting to their milk alternative as well',
    'You want to discuss whether your toddler might be ready for a supervised oral food challenge to test if they have outgrown the allergy',
  ],
  whenToActNow: [
    'Your toddler has signs of anaphylaxis after accidental exposure to milk: difficulty breathing, widespread hives, facial swelling, vomiting, or going limp — administer epinephrine and call 911',
    'Your toddler has bloody stools, persistent vomiting, or severe abdominal pain after ingesting a milk product',
    'Your toddler shows signs of severe nutritional deficiency such as bone pain, muscle weakness, or failure to thrive',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-soy-allergy-concerns',
    'toddler-milk-consumption-how-much',
    'too-much-cow-milk-iron-absorption',
    'toddler-egg-allergy-management',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Milk Allergy in Infants. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Milk-Allergy-in-Infants.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Guidelines for the Diagnosis and Management of Food Allergy.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/food-allergy-guidelines',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Choosing an Alternative Milk for Your Toddler. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Milk-Alternatives.aspx',
    },
  ],
};
