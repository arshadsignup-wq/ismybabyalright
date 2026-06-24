import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-first-cold-what-to-do',
  title: 'My Baby\'s First Cold - What to Do',
  category: 'medical',
  searchTerms: [
    'baby first cold',
    'newborn cold symptoms',
    'baby stuffy nose first time',
    'baby cold treatment',
    'infant congestion remedies',
    'how long does baby cold last',
    'baby cold when to worry',
    'baby runny nose first cold',
    'cold medicine for babies',
    'baby congested can\'t sleep',
    'baby cold vs something serious',
  ],
  quickAnswer:
    'A baby\'s first cold is stressful for parents but is a normal part of building the immune system. Babies typically get 8-10 colds in their first two years. Symptoms include nasal congestion, runny nose, mild cough, low-grade fever, and fussiness. No cold medicine is safe for babies under 6 years. Supportive care includes saline drops with gentle suctioning, a cool-mist humidifier, extra fluids, and rest. Most colds resolve within 7-10 days.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'A cold in a very young baby deserves extra attention because young babies are more vulnerable to complications and because symptoms can mimic more serious infections. Babies this age are obligate nose breathers, so nasal congestion can significantly interfere with feeding. Use saline drops and a bulb syringe or NoseFrida to help clear the nose before feedings. If your baby under 3 months develops a fever of 100.4 degrees F or higher, this requires immediate medical evaluation regardless of whether it seems like "just a cold." Contact your pediatrician for any cold in a baby under 3 months.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Colds are very common at this age, especially once babies start daycare or have older siblings. Symptom management includes saline nasal drops and suctioning (especially before feeds and sleep), a cool-mist humidifier in the bedroom, and offering extra breast milk or formula feeds for hydration. You can offer a small amount of warm water for babies over 6 months. Elevating the head of the crib slightly with a folded towel UNDER the mattress may help with congestion, but do not use pillows in the crib. Most colds resolve in 7-10 days, though a cough may linger for up to 2 weeks.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers get frequent colds - up to 8-10 per year is normal. Offer plenty of fluids (water, warm broth, diluted juice). Honey (for children over 12 months) can help with cough - give 1/2 to 1 teaspoon as needed. A cool-mist humidifier and saline spray continue to be helpful. Over-the-counter cold medicines are still not recommended for children under 6. If your toddler has a persistent cough, fever lasting more than 3 days, or seems to be getting worse rather than better after day 5, contact your pediatrician.',
    },
  ],
  whenNormal: [
    'Your baby has a runny nose, mild congestion, and occasional cough but is still feeding and producing wet diapers.',
    'Your baby has a low-grade fever (under 102 degrees F) that responds to acetaminophen (for babies 3+ months).',
    'Symptoms peak around days 3-5 and then gradually improve over the next few days.',
    'Your baby is fussier than usual and sleeping more during a cold - this is normal.',
  ],
  whenToMention: [
    'The cold symptoms have not improved after 10 days or seem to be getting worse after day 5.',
    'Your baby has a persistent cough that lasts more than 2 weeks.',
    'Your baby has thick, colored nasal discharge for more than 10 days (possible sinus infection).',
    'Your baby keeps getting ear infections with each cold.',
  ],
  whenToActNow: [
    'Your baby under 3 months has a fever of 100.4 degrees F or higher.',
    'Your baby is having difficulty breathing - nasal flaring, rib retractions, breathing faster than 60 breaths per minute, or grunting with each breath.',
    'Your baby is refusing feeds and showing signs of dehydration - fewer than 4 wet diapers in 24 hours, no tears, sunken fontanelle.',
    'Your baby\'s lips or fingernails are turning blue or gray.',
    'Your baby seems extremely lethargic or is difficult to wake.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-cough-home-remedies-safe',
    'baby-fever-when-to-go-to-er',
    'rsv-baby',
    'wheezing',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Children and Colds. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Children-and-Colds.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Common Cold.',
      url: 'https://www.cdc.gov/common-cold/about/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Coughs and Colds: Medicines or Home Remedies? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Coughs-and-Colds-Medicines-or-Home-Remedies.aspx',
    },
  ],
};
