import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'throwing-food',
  title: 'Baby or Toddler Throwing Food',
  category: 'feeding',
  searchTerms: [
    'baby throwing food',
    'toddler throwing food on floor',
    'baby drops food off high chair',
    'toddler throws food at every meal',
    'how to stop baby throwing food',
    'why does my baby throw food',
    'baby plays with food instead of eating',
    'toddler won\'t stop throwing food',
    'baby smearing food everywhere',
    'is it normal for baby to throw food',
  ],
  quickAnswer:
    'Food throwing is one of the most common (and most frustrating) mealtime behaviors, and it is actually a normal part of development. Babies throw food to explore cause and effect, test boundaries, and communicate that they are finished eating. While messy, it is a sign of healthy cognitive development. It typically peaks between 8 and 18 months and gradually improves as language develops and your child can tell you they are done.',
  byAge: [
    {
      ageRange: '6-9 months',
      context:
        'At this age, food throwing is purely exploratory. Your baby is fascinated by what happens when they release an object and it falls. This is the same reason they drop toys from the high chair. They are learning about gravity and cause and effect. Offering small amounts of food at a time rather than a full plate can reduce waste while still allowing exploration.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Food throwing often increases as babies develop better hand control and the ability to intentionally release objects. Your baby may also throw food when they are finished eating but cannot yet communicate this with words. Teaching the sign for "all done" can give them an alternative way to signal the end of a meal. Stay calm and avoid making a big reaction, which can turn throwing into a game.',
    },
    {
      ageRange: '12-18 months',
      context:
        'Toddlers in this range throw food for a mix of reasons: they are finished, they do not like that particular food, they want your attention, or they are testing boundaries. Setting a calm, consistent boundary by saying "food stays on the tray" and ending the meal after a few throws is an effective strategy. Avoid punishing or making it into a power struggle.',
    },
    {
      ageRange: '18 months+',
      context:
        'As language develops, food throwing usually decreases because toddlers can verbally communicate their needs. If throwing persists well past 2 years old and is accompanied by other challenging mealtime behaviors, it may be worth exploring whether there are sensory issues or the mealtime environment needs adjustments. Most toddlers, however, gradually learn table manners through consistent, gentle guidance.',
    },
  ],
  whenNormal: [
    'Your baby throws food toward the end of the meal when they are getting full',
    'Food throwing coincides with the age when your baby is learning to drop and throw everything, not just food',
    'Your baby eats some food and throws some at each meal',
    'Your toddler throws food less often when they are truly hungry versus just snacking',
    'Food throwing decreases over time as your child learns to say or sign "all done"',
  ],
  whenToMention: [
    'Your child throws food at every meal and eats very little, leading to poor weight gain',
    'Food throwing is accompanied by extreme distress, gagging, or a strong aversion to certain textures',
    'Your toddler over 2 years old is escalating mealtime behaviors including throwing, screaming, and refusing to sit',
  ],
  whenToActNow: [
    'Your child is not eating enough from any source and is showing signs of weight loss or nutritional deficiency',
    'Food throwing is part of a larger pattern of extreme behavioral difficulties that are affecting your family\'s well-being',
  ],
  relatedMilestones: [
    'fine-motor',
    'social-emotional',
    'feeding',
    'cognitive',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Feeding and Nutrition: Your One-Year-Old. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Feeding-and-Nutrition-Your-One-Year-Old.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Toddler Nutrition: Mealtime Tips.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/mealtime/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Toddler Food Jags. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Picky-Eaters.aspx',
    },
  ],
};
