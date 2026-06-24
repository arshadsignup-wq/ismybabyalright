import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-bottle-warming-safety',
  title: 'How to Safely Warm Baby Bottles',
  category: 'feeding',
  searchTerms: [
    'warm baby bottle safely',
    'bottle warmer safe temperature',
    'microwave baby bottle danger',
    'warm breast milk safely',
    'how hot should baby bottle be',
    'bottle warming methods',
    'can you microwave formula',
    'hot spots in bottle microwave',
    'warm formula from fridge',
    'baby bottle temperature test',
  ],
  quickAnswer:
    'The safest way to warm a bottle is by placing it in a bowl of warm water or using a bottle warmer. Never microwave breast milk or formula, as microwaving creates dangerous hot spots that can scald your baby\'s mouth. Always test the temperature on the inside of your wrist before feeding - it should feel lukewarm or slightly warm. Many babies are happy with room-temperature or even cold milk, so warming is not always necessary.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young babies may prefer warm milk as it resembles the temperature of breast milk. To warm a bottle safely, place it in a bowl of warm (not boiling) water for a few minutes, or use a bottle warmer that heats to a controlled temperature. Swirl the bottle gently to distribute heat evenly - do not shake vigorously as this creates air bubbles. Always test on your inner wrist before feeding. Formula should be prepared according to package directions with water at the recommended temperature.',
    },
    {
      ageRange: '3-12 months',
      context:
        'As your baby grows, they may become more flexible about milk temperature. Some babies happily drink cold milk straight from the refrigerator. If you are warming bottles, avoid leaving warmed milk out for more than 2 hours (1 hour for freshly expressed breast milk at room temperature becomes 2 hours from fridge after warming). Once a baby has started drinking from a bottle, use the remaining milk within 1 hour, as bacteria from the baby\'s mouth can multiply in the warm liquid.',
    },
    {
      ageRange: '12-36 months',
      context:
        'If your toddler is still using bottles (the AAP recommends transitioning to cups by 12-18 months), the same warming safety principles apply. As you transition to cups with cow\'s milk or alternatives, most toddlers accept these at any temperature. If warming milk in a cup, the same rule applies: never microwave, and always test temperature first. This is a good time to let your child drink milk at refrigerator temperature, which is simpler and safer.',
    },
  ],
  whenNormal: [
    'Your baby prefers warm milk and you use a bottle warmer or warm water bath to heat bottles.',
    'Your baby happily drinks milk at room temperature or cold from the refrigerator - no warming needed.',
    'You test milk temperature on your inner wrist before every feeding.',
  ],
  whenToMention: [
    'Your baby has developed mouth blisters or seems to be in pain after feeding and you are concerned about milk temperature.',
    'Your baby suddenly refuses bottles and you are wondering if temperature preference has changed.',
    'You have questions about how long warmed milk can safely sit out before it needs to be discarded.',
  ],
  whenToActNow: [
    'Your baby has been burned by overheated milk - oral burns appear as white or red patches inside the mouth, excessive drooling, or refusal to feed. Seek medical attention.',
    'Your baby is vomiting or has diarrhea after drinking formula that was improperly stored or reheated.',
    'You accidentally microwaved a bottle and your baby drank it before you tested - watch for signs of mouth burns and contact your pediatrician.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-bottle-sterilization-methods',
    'baby-bottle-to-cup-transition',
    'baby-european-formula-safety',
  ],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Proper Storage and Preparation of Breast Milk.',
      url: 'https://www.cdc.gov/breastfeeding/recommendations/handling_breastmilk.htm',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Practical Bottle Feeding Tips. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/Practical-Bottle-Feeding-Tips.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Safe Preparation, Storage and Handling of Powdered Infant Formula, 2007.',
      url: 'https://www.who.int/publications/i/item/9789241595414',
    },
  ],
};
