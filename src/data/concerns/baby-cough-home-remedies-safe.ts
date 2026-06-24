import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-cough-home-remedies-safe',
  title: 'Safe Home Remedies for Baby\'s Cough',
  category: 'medical',
  searchTerms: [
    'home remedies baby cough',
    'baby cough treatment at home',
    'honey for baby cough age',
    'humidifier baby cough',
    'natural cough remedy infant',
    'baby cough medicine safe age',
    'saline drops baby congestion',
    'steam for baby cough',
    'safe cough relief baby',
    'baby cough when to give medicine',
  ],
  quickAnswer:
    'Over-the-counter cough and cold medicines are not safe for children under 6 years old and should never be given to babies. Safe home remedies for a baby\'s cough include saline nasal drops with gentle suctioning, a cool-mist humidifier, keeping the baby well-hydrated, and elevating the head of the crib slightly. Honey can be given to children over 12 months but is dangerous for babies under 1 year due to botulism risk.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Young babies who are coughing need careful attention because their airways are small and they breathe primarily through their noses. Safe approaches include using saline nasal drops (1-2 drops per nostril) followed by gentle suction with a bulb syringe or NoseFrida to clear congestion. A cool-mist humidifier in the room helps keep airways moist. Offer frequent breast or bottle feeds to maintain hydration. Do not give any cough medicine, honey, vapor rubs, or essential oils. If a baby under 3 months develops a cough, contact your pediatrician promptly.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Continue with saline drops, suctioning, and humidifier use. You can also offer small sips of warm water (after 6 months) to soothe the throat. Sitting in a steamy bathroom (not directly in hot steam) for 10-15 minutes can help loosen congestion. Do NOT give honey to babies under 12 months due to the risk of infant botulism. Do NOT use mentholated vapor rubs on babies - they can irritate young skin and airways. Propping up during supervised awake time may help with drainage, but always place baby on a flat surface for sleep.',
    },
    {
      ageRange: '12-36 months',
      context:
        'After 12 months, you can give 1/2 to 1 teaspoon of honey to help soothe a cough - studies show honey is as effective as some cough suppressants. Continue with humidifier, saline drops, and adequate fluids (water, breast milk, or milk). Warm clear liquids like broth or warm water with honey and lemon may help. Over-the-counter cough medicines are still not recommended for children under 6. If the cough is persistent or accompanied by wheezing, your pediatrician may recommend a specific treatment.',
    },
  ],
  whenNormal: [
    'Your baby has a mild cough with a cold that improves over 7-10 days.',
    'The cough is mostly caused by nasal drainage (postnasal drip) and improves with saline and suctioning.',
    'Your baby continues to eat, drink, and play normally despite the cough.',
  ],
  whenToMention: [
    'The cough has lasted more than 10 days without improvement.',
    'Your baby is coughing at night to the point where it regularly disrupts sleep.',
    'The cough is accompanied by wheezing or a persistent whistling sound when breathing.',
  ],
  whenToActNow: [
    'Your baby is having difficulty breathing - retractions (skin pulling in between ribs), nasal flaring, or breathing faster than 60 breaths per minute.',
    'Your baby\'s lips or fingernails turn blue or gray during coughing episodes.',
    'Your baby is under 3 months with any cough and fever (100.4 degrees F or higher).',
    'Your baby has a barking, seal-like cough (possible croup) with stridor (a high-pitched sound when breathing in).',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-first-cold-what-to-do',
    'baby-essential-oil-diffuser-risk',
    'wheezing',
    'rsv-baby',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Coughs and Colds: Medicines or Home Remedies? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Coughs-and-Colds-Medicines-or-Home-Remedies.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Common Cold: Treatment.',
      url: 'https://www.cdc.gov/common-cold/treatment/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Effect of Honey on Nocturnal Cough and Sleep Quality. Pediatrics, 2012.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/22869830/',
    },
  ],
};
