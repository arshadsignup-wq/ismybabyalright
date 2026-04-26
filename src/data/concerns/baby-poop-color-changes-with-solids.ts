import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-poop-color-changes-with-solids',
  title: 'Baby Poop Color Changes with Solids',
  category: 'digestive',
  searchTerms: [
    'baby poop color changes with solids',
    'baby poop different color after food',
    'baby green poop after vegetables',
    'baby orange poop after carrots',
    'baby poop red after beets',
    'baby dark poop after solids',
    'solid food changing baby stool color',
    'is baby poop color normal',
    'baby poop colors chart',
    'baby stool color after starting solids',
  ],
  quickAnswer:
    'Dramatic changes in poop color after starting solids are completely normal and expected. What your baby eats directly affects stool color - carrots may turn poop orange, spinach makes it green, beets can make it reddish, and blueberries can turn it dark blue-black. As long as your baby is comfortable and the stool is not white, black (tarry), or bright red with blood, these color changes are harmless.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Before solids, breastfed babies typically have yellow, seedy, mustard-like stools, while formula-fed babies have tan to brown stools. These are normal baselines. Green stools can happen from a foremilk-hindmilk imbalance, fast gut transit, or simply normal variation. The only concerning colors at any age are white or pale gray (could indicate a liver issue) and black tarry stools (could indicate blood).',
    },
    {
      ageRange: '6-9 months',
      context:
        'Welcome to a world of rainbow stools! As new foods are introduced, you will see stool color change dramatically. Orange from carrots and sweet potato, green from peas and spinach, dark from blueberries and prunes, and reddish from beets and tomatoes. You may also see undigested food pieces in the stool - this is normal. Your baby\'s digestive system is still learning.',
    },
    {
      ageRange: '9-12 months',
      context:
        'As your baby\'s diet expands, stool color will vary based on what was eaten 12-24 hours earlier. The stool consistency also becomes firmer and more formed compared to the liquid stools of early infancy. Some color changes may alarm you - beet-red stool or dark blue-black blueberry stool can look like blood, but if you fed the matching food recently, that is almost certainly the cause.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddler stools settle into a more predictable brown range, though colorful foods will still affect stool color. If you notice a persistent color change that does not match any food your child has eaten, or if stools are consistently pale, white, or have visible blood, bring it up with your pediatrician.',
    },
  ],
  whenNormal: [
    'Stool color matches a food eaten in the last 24-48 hours',
    'Green poop after eating green vegetables or from normal digestive variation',
    'Orange or reddish stool after eating carrots, sweet potatoes, or beets',
    'Dark or black stool after eating blueberries, blackberries, or foods with dark color',
    'Visible undigested food pieces (corn, peas, raisins) in the stool',
  ],
  whenToMention: [
    'Stool is consistently an unusual color that does not match any food your baby has eaten',
    'Poop is very pale, clay-colored, or white - this can indicate a bile duct issue and should be checked',
    'You are unsure whether redness in the stool is from food or from blood',
  ],
  whenToActNow: [
    'Black, tarry, sticky stools (not from blueberries or iron supplements) that could indicate upper digestive bleeding',
    'Bright red blood in the stool that is clearly not from food, especially with pain, fever, or vomiting',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Many Colors of Baby Poop. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Pooping-By-the-Numbers.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Starting Solid Foods. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx',
    },
  ],
};
