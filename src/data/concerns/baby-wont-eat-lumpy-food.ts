import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-wont-eat-lumpy-food',
  title: "My Baby Won't Eat Lumpy or Textured Food",
  category: 'feeding',
  searchTerms: [
    'baby won\'t eat lumpy food',
    'baby refuses textured food',
    'baby only eats smooth puree',
    'baby gags on lumps',
    'baby won\'t eat chunky food',
    'baby texture issues food',
    'baby hates lumpy food',
    'transitioning baby to textured food',
    'baby rejecting textured purees',
    'baby stuck on purees',
  ],
  quickAnswer:
    'Many babies need a gradual introduction to lumpy and textured foods. There is a critical window between 6 and 9 months when babies are most receptive to new textures. If your baby resists lumps, try progressing very slowly from smooth purees to slightly mashed foods, and offer soft finger foods they can explore at their own pace.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Babies are not eating solids at this age. This concern does not apply yet.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Most babies start with smooth purees, and that is completely appropriate. There is no need to rush textures at this stage. Focus on helping baby learn to swallow thin purees from a spoon first.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Research shows this is an important window for introducing textured foods. Babies who are not exposed to lumpy textures by about 9 months may have more difficulty accepting them later. Start by making purees slightly less smooth, then progress to mashed foods with soft lumps. Offering dissolvable puffs or very soft finger foods can also help.',
    },
    {
      ageRange: '9-12 months',
      context:
        'If your baby is still only accepting smooth purees, try mixing a tiny amount of texture into their favorite puree and gradually increasing it. Offer soft, well-cooked finger foods like banana, avocado, or steamed sweet potato. Some babies accept finger foods more easily than lumpy purees because they have more control over what goes in their mouth.',
    },
    {
      ageRange: '12-24 months',
      context:
        'If your toddler still refuses all textured foods by this age, it may be worth discussing with your pediatrician. Some children benefit from an evaluation by a feeding therapist who can assess oral motor skills and sensory sensitivities. Continue offering a variety of textures without pressure at every meal.',
    },
  ],
  whenNormal: [
    'Baby gags on lumpy food initially but gradually improves with exposure',
    'Baby prefers smoother textures but will eat some soft finger foods',
    'Baby is under 9 months and still learning to manage textures',
  ],
  whenToMention: [
    'Baby is over 9 months and refuses all textures beyond smooth purees',
    'Baby vomits when encountering any lumps in food',
    'Baby has not made any progress with textures despite weeks of consistent offering',
  ],
  whenToActNow: [
    'Baby is losing weight or not growing because food intake is so limited',
    'Baby appears to have difficulty swallowing even smooth foods',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-gagging-on-textures', 'baby-texture-regression', 'baby-only-eating-pouches'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Texture Progression in Infant Feeding. Pediatric Nutrition, 8th Edition, 2019.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Coulthard H, Harris G, Emmett P. Delayed introduction of lumpy foods to children during the complementary feeding period affects child\'s food acceptance and feeding at 7 years of age. Maternal & Child Nutrition, 2009.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/19320675/',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Complementary Feeding: Report of the Global Consultation. Geneva, 2003.',
      url: 'https://www.who.int/publications/i/item/924154614X',
    },
  ],
};
