import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'poop-consistency-by-age',
  title: 'What Normal Poop Looks Like at Every Age',
  category: 'digestive',
  searchTerms: [
    'normal baby poop consistency',
    'what should baby poop look like',
    'baby poop texture by age',
    'toddler poop consistency normal',
    'breastfed baby poop normal',
    'formula fed baby poop',
    'baby poop after starting solids',
    'baby poop color chart',
    'normal infant stool',
  ],
  quickAnswer:
    'Normal baby poop varies tremendously in color, consistency, and frequency depending on age, diet, and whether a baby is breastfed or formula-fed. What seems alarming to a new parent is often completely normal. In general, healthy baby poop ranges from yellow to green to brown and can be seedy, pasty, or formed, all within the range of normal.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In the first few days, babies pass meconium, a thick, dark green-black, tar-like stool. By day 3-4, stool transitions to a green-brown color and then to the typical pattern for their feeding method. Breastfed baby poop is usually yellow, seedy, and loose, resembling Dijon mustard. Formula-fed baby poop tends to be tan, yellow-brown, or greenish, with a thicker, paste-like consistency similar to peanut butter. Both are completely normal.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Breastfed babies may continue to have loose, seedy, yellow stools. Some breastfed babies poop after every feeding, while others may go up to 7-10 days between stools, which can be normal as long as the poop is soft when it comes. Formula-fed babies typically poop 1-3 times daily with a thicker consistency. Green stool is usually harmless and often caused by iron in formula or a foremilk-hindmilk imbalance in breastfed babies.',
    },
    {
      ageRange: '6-12 months',
      context:
        'When solids are introduced, poop changes dramatically. It becomes thicker, darker, smellier, and may take on the color of recently eaten foods. Seeing identifiable chunks of food like peas, carrots, or blueberry skins is completely normal because babies do not yet chew food thoroughly. Stool may also become more variable in consistency from day to day. The transition period can bring temporary constipation or looser stools as the digestive system adjusts.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddler poop begins to resemble adult stool as the diet expands. It should be soft and formed, like a small log or thick paste. Brown is the most common color but variations are normal. Pooping 1-3 times per day is typical, though some toddlers poop every other day. As long as stools are soft and not painful to pass, less frequent pooping is usually fine.',
    },
    {
      ageRange: '24-36 months',
      context:
        'By this age, stool should be consistently soft and formed. Children are often beginning or completing potty training, so parents may become more aware of stool patterns. Occasional variations in color and consistency are normal, especially with dietary changes or mild illnesses. Consistently hard, pellet-like stools or very watery stools that persist should be evaluated.',
    },
  ],
  whenNormal: [
    'Your breastfed baby has loose, yellow, seedy stool or your formula-fed baby has thicker, tan or greenish stool',
    'Poop changes color or consistency after introducing a new food or switching formula',
    'You see identifiable pieces of food in your baby\'s diaper after starting solids',
    'Your breastfed baby over 6 weeks goes several days between poops but the stool is soft when it comes',
  ],
  whenToMention: [
    'Stools are consistently very hard and pellet-like, and your baby seems to strain or be in pain during bowel movements',
    'Poop is persistently very pale, chalky white, or grey, which can indicate a liver or bile duct issue',
    'Your baby has very frequent watery stools for more than a day or two without an obvious cause like a stomach bug',
  ],
  whenToActNow: [
    'You see bright red blood in the stool, black tarry stools (after the meconium period), or red jelly-like stools that could indicate intussusception',
    'Your newborn has not passed meconium within the first 48 hours of life',
    'Stool is white, chalky, or very pale and persists, which requires urgent evaluation for biliary atresia, especially in the first few months of life',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Many Colors of Poop. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/The-Many-Colors-of-Poop.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Baby\'s First Bowel Movements. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Babys-First-Bowel-Movements.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Infant Stool Form Scale. Journal of Pediatric Gastroenterology and Nutrition.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/19644397/',
    },
  ],
};
