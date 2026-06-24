import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-food-texture-sensitivity',
  title: 'My Toddler Gags or Refuses Certain Food Textures',
  category: 'feeding',
  searchTerms: [
    'toddler food texture sensitivity',
    'toddler gags on food textures',
    'toddler won\'t eat lumpy food',
    'toddler only eats smooth food',
    'toddler texture aversion food',
    'toddler refuses mushy food',
    'toddler sensitive to food textures',
    'toddler oral sensory issues',
    'toddler picky about food textures',
    'toddler won\'t eat meat texture',
  ],
  quickAnswer:
    'Many toddlers have strong preferences or aversions to certain food textures, and this is one of the most common feeding challenges parents face. Some children gag on lumpy or mixed-texture foods, while others refuse soft or mushy textures. This is often a normal part of sensory development and usually improves with gentle, repeated exposure over time. However, severe texture aversion that significantly limits food variety or affects nutrition may benefit from evaluation by a feeding therapist.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'When starting solids, babies naturally gag as they learn to manage different textures. This gagging reflex is protective and is not the same as choking. Gradually progressing from smooth purees to mashed, then soft lumpy foods helps build oral motor skills. If your baby refuses all textures beyond smooth purees by 9-10 months or gags violently on any textured food, mention this to your pediatrician. Early introduction of varied textures is important for long-term acceptance.',
    },
    {
      ageRange: '12-18 months',
      context:
        'Toddlers are developing chewing skills and learning to manage a wider range of textures. Some children become more selective at this age, which is a normal developmental phase. Common texture aversions include slimy foods (bananas, avocado), mixed textures (soup with chunks), and chewy foods (meat). Continue offering a variety of textures without pressure. Let your toddler touch and explore foods with their hands — messy eating is an important part of sensory development and food acceptance.',
    },
    {
      ageRange: '18 months - 3 years',
      context:
        'Texture sensitivity often peaks during this period but should gradually improve. Strategies that help include serving preferred and non-preferred textures together, letting your toddler see you eating the same foods, and using "food chaining" (gradually changing textures from accepted to similar new ones). If your toddler eats fewer than 20 different foods, gags on most textures, or is losing weight, consider an evaluation by a pediatric feeding therapist (usually a speech-language pathologist or occupational therapist specializing in feeding).',
    },
  ],
  whenNormal: [
    'Your toddler has preferences for certain textures but still eats a reasonable variety of foods overall',
    'Your toddler occasionally gags on new textures but tolerates them after several exposures',
    'Your toddler is growing well and getting adequate nutrition despite some texture preferences',
    'Texture sensitivity varies by day — your toddler may eat something one day and refuse it the next',
  ],
  whenToMention: [
    'Your toddler eats fewer than 20 different foods and texture is the primary reason for refusal',
    'Your toddler gags or vomits frequently during meals, making mealtimes stressful for the whole family',
    'Your toddler is unable to progress beyond pureed foods by 12-15 months of age',
  ],
  whenToActNow: [
    'Your toddler is losing weight or falling off their growth curve due to severely restricted food intake',
    'Your toddler chokes (not just gags) frequently on foods, which could indicate a swallowing disorder',
    'Your toddler refuses all food and drink for more than 24 hours',
  ],
  relatedMilestones: [
    'feeding-texture-progression',
    'oral-motor-skills',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-picky-eater-strategies',
    'toddler-self-feeding-messy-normal',
    'baby-choking-on-food',
    'throwing-food',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Picky Eaters and What to Do. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Picky-Eaters.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Sensory Processing and Feeding in Young Children. National Library of Medicine.',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5348132/',
    },
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Feeding and Swallowing Disorders in Children.',
      url: 'https://www.asha.org/public/speech/swallowing/feeding-and-swallowing-disorders-in-children/',
    },
  ],
};
