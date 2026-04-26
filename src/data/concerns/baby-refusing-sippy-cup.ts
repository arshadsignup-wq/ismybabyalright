import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-refusing-sippy-cup',
  title: 'Baby Refusing Sippy Cup',
  category: 'feeding',
  searchTerms: [
    'baby refusing sippy cup',
    'baby won\'t drink from cup',
    'baby hates sippy cup',
    'how to get baby to use cup',
    'transition from bottle to cup',
    'toddler won\'t use sippy cup',
    'baby throws sippy cup',
    'best cup for baby who refuses sippy',
    'baby only drinks from bottle',
    'straw cup vs sippy cup baby',
  ],
  quickAnswer:
    'Many babies are initially uninterested in or resistant to sippy cups, and that is completely normal. The key is finding the right type of cup for your baby and offering it consistently without pressure. Some babies skip traditional sippy cups entirely and do better with straw cups or open cups with handles. There is no single cup that works for every baby, so trying a few different styles is often the solution.',
  byAge: [
    {
      ageRange: '6-9 months',
      context:
        'This is a good time to begin introducing a cup, but do not expect your baby to be proficient right away. Start with water in an open cup with a small amount of liquid, or try a straw cup. Many feeding therapists actually recommend skipping traditional spouted sippy cups and going straight to straw cups or open cups, as they promote better oral motor development. Let your baby explore the cup at meals without any pressure to drink.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Most babies can learn to drink from a straw cup or open cup with practice at this age. If your baby has been refusing a traditional sippy cup, try a different style. Some babies dislike the hard spout of a sippy cup but readily take a soft silicone straw or a 360 cup. Offer the cup at every meal and snack time so it becomes part of the routine. Put breast milk or formula in the cup occasionally instead of just water to increase interest.',
    },
    {
      ageRange: '12-18 months',
      context:
        'This is the ideal window to transition from bottles to cups. If your baby is still resisting, try letting them pick out their own cup, modeling cup drinking yourself, or offering their favorite drink in the cup while giving only water in the bottle. Some families find success with going cold turkey on the bottle, which usually leads to acceptance of the cup within a few days after some initial protest.',
    },
    {
      ageRange: '18 months - 3 years',
      context:
        'Most toddlers can drink well from an open cup with some spilling by 18 to 24 months. If your toddler is still struggling with all cup types, consider whether there might be an oral motor issue. Some children have difficulty with the coordination needed for straw drinking or cup drinking and may benefit from a brief evaluation by a feeding therapist.',
    },
  ],
  whenNormal: [
    'Your 6 to 9 month old plays with the cup but does not drink much from it yet',
    'Your baby prefers one type of cup over another and refuses certain styles',
    'Your baby drinks small amounts from a cup at meals but still gets most milk from a breast or bottle',
    'Your toddler spills frequently when using an open cup',
  ],
  whenToMention: [
    'Your baby is over 12 months and refuses all types of cups, making the bottle-to-cup transition very difficult',
    'Your baby chokes or coughs frequently when attempting to drink from any cup, which may suggest a swallowing issue',
    'Your toddler is over 18 months and cannot drink from any cup despite regular practice',
  ],
  whenToActNow: [
    'Your baby aspirates (inhales liquid into the lungs) when drinking, causing coughing, choking, or a wet-sounding voice',
    'Your child is refusing all liquids from any source and showing signs of dehydration',
  ],
  relatedMilestones: [
    'feeding',
    'fine-motor',
    'oral-motor',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sippy Cups: Transitioning from the Bottle. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Sippy-Cups.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant and Toddler Nutrition: Cups.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/when-to-introduce-cups.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Starting Solid Foods. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx',
    },
  ],
};
