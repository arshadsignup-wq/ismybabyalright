import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'bottle-preference-development',
  title: 'Bottle Preference in Babies',
  category: 'feeding',
  searchTerms: [
    'bottle preference in babies',
    'baby only wants bottle',
    'baby prefers bottle feeding',
    'picky about bottle type',
    'baby rejecting certain bottles',
    'baby won\'t take specific bottle',
    'which bottle for baby',
    'baby attached to one bottle',
  ],
  quickAnswer:
    'Many babies develop a preference for a particular bottle shape, material, or nipple design. This is normal and reflects your baby\'s comfort with what they know. If you need to switch bottles, a gradual introduction during calm, non-hungry moments can help. Bottle preference is different from bottle-versus-breast preference, and is simply about the feeding vessel itself.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young babies are still learning to coordinate sucking, swallowing, and breathing, so the bottle and nipple design can make a real difference in their comfort and feeding efficiency. Trying a few different bottle styles early on can help you find one that works well, but once your baby has settled into a good feeding pattern with a particular bottle, there is no need to change unless problems arise.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, babies are more set in their preferences and may resist changes to their bottle. If you need to transition to a different bottle for daycare or other reasons, try offering the new bottle with a small amount of milk during a relaxed moment rather than when your baby is very hungry. Some babies accept a new bottle from a different caregiver more readily than from a parent.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies with a strong bottle preference at this age are often using the bottle as a source of comfort as well as nutrition. This is a good time to begin introducing an open cup or straw cup alongside the familiar bottle. The AAP recommends starting to transition off bottles by 12 months, so gentle exposure to cups now can make that process smoother.',
    },
    {
      ageRange: '12-24 months',
      context:
        'If your toddler is still very attached to a specific bottle, it is time to work on transitioning to cups. Prolonged bottle use after 12 months is associated with dental concerns and excess calorie intake. Offer the familiar beverage in a cup during meals, and consider reserving the bottle only for bedtime before phasing it out completely.',
    },
  ],
  whenNormal: [
    'Your baby readily feeds from one type of bottle but fusses or refuses a different brand',
    'Your baby takes a few tries to warm up to a new bottle but eventually accepts it',
    'Your baby drinks different amounts depending on the bottle or nipple used',
    'Your baby prefers a certain nipple shape that mimics the breast or a particular flow rate',
  ],
  whenToMention: [
    'Your baby refuses all bottles and you need them to take a bottle for childcare or other reasons',
    'Your baby seems to gag, choke, or struggle with every bottle type you have tried',
    'Your toddler is over 15 months and still dependent on a bottle with no interest in cups',
  ],
  whenToActNow: [
    'Your baby is refusing both breast and bottle and showing signs of dehydration',
    'Your baby chokes, turns blue, or has difficulty breathing during bottle feeds regardless of bottle type',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bottle Feeding. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Bottle-Feeding.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Discontinuing the Bottle. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Discontinuing-the-Bottle.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant and Toddler Nutrition: Feeding from a Bottle.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/bottle-feeding/index.html',
    },
  ],
};
