import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'open-cup-readiness',
  title: 'When Is My Baby Ready for an Open Cup?',
  category: 'feeding',
  searchTerms: [
    'when can baby use open cup',
    'baby open cup readiness',
    'teaching baby to drink from cup',
    'baby spills water from open cup',
    'open cup vs sippy cup',
    'when to introduce open cup',
    'baby cup drinking milestones',
    'how to teach baby to drink from a cup',
  ],
  quickAnswer:
    'Most babies can begin practicing with a small open cup around six months of age, when they start solids. Early attempts will be messy, and that is completely expected. Open cups are recommended over sippy cups by most feeding therapists because they promote better oral motor development and are easier to transition to long term.',
  byAge: [
    {
      ageRange: '3-6 months',
      context:
        'Before six months, babies get all their liquid from breastmilk or formula and do not need supplemental water or cup practice. Around six months, as you introduce solids, you can begin offering a few sips of water from a small open cup held by a caregiver. Expect most of the water to dribble out, and keep the amounts tiny.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is the ideal window to introduce an open cup. Start by holding a small cup to your baby\'s lips and tipping it gently. Over time, your baby will begin to reach for and hold the cup independently. Many babies can take several sips from an assisted open cup by nine months. Straw cups are also a good option during this stage, as they promote a more mature swallowing pattern than sippy cups.',
    },
    {
      ageRange: '12-24 months',
      context:
        'By 12 to 15 months, many toddlers can independently drink from a small open cup with some spilling. By 18 to 24 months, most toddlers can drink from an open cup with minimal spills. If your toddler is still exclusively using bottles or sippy cups, now is a good time to actively practice open cup skills at meals. The AAP recommends weaning from bottles by 12 to 15 months.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Most toddlers should be proficient with an open cup by this age. If your child still strongly resists or cannot manage an open cup, it may be worth mentioning to your pediatrician, as difficulty drinking from a cup can sometimes indicate oral motor challenges that benefit from evaluation.',
    },
  ],
  whenNormal: [
    'Your baby spills frequently when first learning to use an open cup, especially before 12 months',
    'Your baby takes only tiny sips at a time and loses interest quickly',
    'Your baby alternates between wanting the cup and pushing it away during the learning phase',
    'Your toddler has some spills even after months of practice, since full cup proficiency often takes until age two or beyond',
  ],
  whenToMention: [
    'Your baby coughs or chokes frequently when taking sips from any cup after multiple weeks of practice',
    'Your toddler over 18 months shows no interest in or ability to use any type of cup',
    'Your child seems to have difficulty controlling liquids in their mouth and frequently loses liquid out the sides',
    'Your toddler exclusively drinks from a bottle past 15 months despite consistent cup practice',
  ],
  whenToActNow: [
    'Your baby chokes severely on liquids and turns blue or cannot breathe',
    'Your baby seems unable to swallow liquids and liquid consistently comes out of the nose',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Recommended Drinks for Children Age 5 and Younger. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Recommended-Drinks-for-Young-Children-Ages-0-5.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Discontinuing the Bottle. HealthyChildren.org, 2022.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Discontinuing-the-Bottle.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant and Toddler Nutrition: Foods and Drinks for 6 to 24 Month Olds.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/foods-and-drinks-for-6-to-24-month-olds.html',
    },
  ],
};
