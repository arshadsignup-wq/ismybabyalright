import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-wont-drink-from-cup',
  title: "My Baby Won't Drink from a Cup",
  category: 'feeding',
  searchTerms: [
    'baby won\'t drink from cup',
    'baby refuses cup',
    'baby only wants bottle',
    'baby cup refusal',
    'teaching baby to drink from cup',
    'baby won\'t use sippy cup or straw cup',
    'baby refuses all cups',
    'transitioning baby to cup',
    'baby spits out cup',
    'when should baby drink from cup',
  ],
  quickAnswer:
    'Cup refusal is common, especially if baby is used to bottles or breastfeeding. Most babies can start learning to drink from an open cup or straw cup around 6 months. Patience and repeated exposure are key. Try different cup types, and remember that it is a skill that takes practice.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Babies this age get all their fluids from breast milk or formula via breast or bottle. Cup drinking is not expected at this stage.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Around 6 months, you can start offering small sips of water in an open cup held by you. Baby will likely let most of the water dribble out, and that is completely normal. This is the very beginning of a long learning process.',
    },
    {
      ageRange: '6-9 months',
      context:
        'This is a great time to practice cup drinking with small amounts of water during meals. Offer both open cups and straw cups to see which your baby prefers. Do not worry if baby plays with the cup more than drinks from it. Consistent exposure helps build the skill.',
    },
    {
      ageRange: '9-12 months',
      context:
        'By 12 months, babies should be moving toward cup use. If your baby refuses all cups, try letting them play with an empty cup first, model drinking yourself, and try different cup types. Some babies prefer straw cups while others do better with open cups or 360 cups.',
    },
    {
      ageRange: '12-24 months',
      context:
        'The AAP recommends weaning from bottles by 12-15 months. If your toddler still refuses all cups, try offering their favorite drink in a cup and nothing in a bottle. It may take a few days of adjustment. If your toddler cannot drink from any cup by 18 months, discuss it with your pediatrician.',
    },
  ],
  whenNormal: [
    'Baby is under 9 months and still learning the skill',
    'Baby plays with the cup and occasionally takes a sip',
    'Baby prefers one cup type over another',
    'Baby drinks small amounts from a cup but still prefers bottle or breast for most fluids',
  ],
  whenToMention: [
    'Baby is over 12 months and refuses all cup types despite consistent practice',
    'Baby seems unable to coordinate sipping and swallowing from a cup',
    'Baby chokes or coughs every time they try to drink from a cup',
  ],
  whenToActNow: [
    'Baby is showing signs of dehydration because they refuse all fluids from any source',
    'Baby has sudden difficulty swallowing liquids from any vessel',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-refusing-sippy-cup', 'straw-cup-training-difficulty', 'bottle-to-cup-transition-timing'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Recommended Drinks for Children Age 5 and Younger. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Recommended-Drinks-for-Young-Children-Ages-0-5.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Cups and Drinks for 6 to 24 Month Olds. 2023.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/cups-and-drinks.html',
    },
  ],
};
