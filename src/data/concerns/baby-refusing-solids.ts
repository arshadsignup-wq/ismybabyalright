import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-refusing-solids',
  title: 'Baby Refusing Solid Foods',
  category: 'feeding',
  searchTerms: [
    'baby refusing solids',
    'baby won\'t eat solid food',
    'baby spits out food',
    'baby not interested in food',
    'baby turns head away from spoon',
    'baby gags on solid food',
    'baby only wants milk',
    'starting solids baby refuses',
    'baby hates purees',
    'when to worry baby not eating solids',
  ],
  quickAnswer:
    'It is common for babies to refuse solid foods when first introduced around 4-6 months. Babies may need 10-15 exposures to a new food before accepting it. The tongue-thrust reflex, which causes babies to push food out of their mouths, is normal and fades with practice. As long as your baby is getting adequate nutrition from breast milk or formula, there is no rush. Continue offering a variety of foods without pressure.',
  byAge: [
    {
      ageRange: '4-6 months',
      context:
        'Many babies are not developmentally ready for solids until closer to 6 months. Signs of readiness include sitting with minimal support, showing interest in food, and loss of the tongue-thrust reflex. If your baby pushes food out with their tongue, they may simply not be ready yet. Try again in a week or two. Offer solids when your baby is alert and slightly hungry but not starving, as a very hungry baby wants the comfort of familiar milk, not a new experience.',
    },
    {
      ageRange: '6-9 months',
      context:
        'By 6 months, most babies are developmentally ready for solids, but willingness varies widely. Start with single-ingredient purees or soft finger foods. Let your baby explore textures at their own pace. Some babies prefer baby-led weaning (self-feeding soft pieces) over being spoon-fed. Gagging is normal and different from choking; it is a protective reflex that helps babies learn to manage food in their mouths. Keep mealtimes relaxed and pressure-free.',
    },
    {
      ageRange: '9-12 months',
      context:
        'By this age, solid foods should be becoming a more regular part of your baby\'s diet, though breast milk or formula remains the primary nutrition source until 12 months. If your baby is still mostly refusing solids by 9-10 months, talk to your pediatrician. Sometimes oral motor issues, sensory sensitivities, or reflux can contribute to food refusal. An occupational therapist or speech therapist specializing in feeding can help if needed.',
    },
  ],
  whenNormal: [
    'Your baby is under 6 months and pushes food out with their tongue - this is the normal tongue-thrust reflex.',
    'Your baby accepts some foods but rejects others - preferences are normal and change over time.',
    'Your baby plays with food and eats small amounts - exploration is part of learning to eat.',
  ],
  whenToMention: [
    'Your baby is over 8 months and consistently refuses all solid foods despite repeated offerings.',
    'Your baby gags or vomits frequently when any food texture is introduced.',
    'Your baby shows strong aversive reactions to food, such as crying, arching away, or clamping mouth shut.',
  ],
  whenToActNow: [
    'Your baby is losing weight or not growing along their growth curve.',
    'Your baby is choking (silent, unable to breathe, turning blue) rather than gagging on food.',
    'Your baby over 12 months is still exclusively on milk with no solid food intake and your pediatrician has not been consulted.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-refusing-solids-after-six-months', 'baby-choking-on-food', 'baby-spoon-feeding-vs-self-feeding', 'throwing-food'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Starting Solid Foods. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention - When, What, and How to Introduce Solid Foods.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/when-to-introduce-solid-foods.html',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization - Complementary Feeding.',
      url: 'https://www.who.int/health-topics/complementary-feeding',
    },
  ],
};
