import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-led-weaning-safety',
  title: 'Baby-Led Weaning Safety Concerns',
  category: 'feeding',
  searchTerms: ['baby led weaning safety', 'BLW choking risk', 'baby led weaning choking', 'is baby led weaning safe', 'baby led weaning vs purees', 'BLW gagging baby', 'baby led weaning first foods', 'finger foods baby 6 months', 'baby led weaning when to start', 'baby choking on finger food'],
  quickAnswer: 'Baby-led weaning (BLW) is an approach where babies are offered soft, age-appropriate finger foods from the start of solids, skipping purees. Research shows that BLW does not increase choking risk when done safely with appropriate foods. Gagging is common and expected with BLW and is different from choking - gagging is a safety reflex that helps babies learn to manage food. The key safety rules are: always supervise, offer appropriately sized and textured foods, ensure your baby is sitting upright, and know the difference between gagging and choking.',
  byAge: [
    { ageRange: '6 months', context: 'If starting BLW, your baby must be able to sit upright with minimal support, have good head control, and show interest in food. Offer soft foods that are long enough for the baby to grip with the end sticking out of their fist (finger-length strips). Good starter foods: soft-cooked sweet potato strips, ripe avocado, banana rolled in crushed cereal for grip, steamed broccoli florets, and well-cooked pasta. Avoid hard, round, or sticky foods.' },
    { ageRange: '7-9 months', context: 'As your baby develops their pincer grasp, you can offer smaller, softer pieces. Gagging will likely decrease as they learn to manage food. Continue to offer a variety of textures and flavors. Foods should be soft enough to smash between your thumb and forefinger. Avoid: whole grapes, hot dog rounds, raw carrots, whole nuts, popcorn, chunks of peanut butter, and hard raw fruits.' },
    { ageRange: '9-12 months', context: 'Your baby should be managing a variety of textures and self-feeding more independently. Continue to cut round foods (grapes, cherry tomatoes, blueberries) into small pieces or quarters. You can now offer combination foods and let your baby practice with a preloaded spoon. Most babies eating with BLW are eating a modified version of family meals by 12 months.' },
  ],
  whenNormal: ['Gagging and making retching sounds while learning to eat (this is protective, not choking)', 'Spitting out food that is too large or an unfamiliar texture', 'Eating very little actual food in the first few weeks (most nutrition still from milk)', 'Making a mess - dropping, squishing, and exploring food with hands', 'Having strong preferences and rejecting some foods'],
  whenToMention: ['You are anxious about the difference between gagging and choking and want a demonstration', 'Your baby gags excessively and vomits at most meals', 'Your baby is not progressing to new textures after several weeks of practice', 'You are unsure which foods are safe for your baby\'s age'],
  whenToActNow: ['Your baby is silently choking - no sound, red or blue face, unable to cough or cry (perform infant Heimlich/back blows immediately and call 911)', 'Your baby has an allergic reaction to a new food (hives, swelling, vomiting, difficulty breathing)', 'Your baby is losing weight because they are not consuming enough food or milk'],
  relatedMilestones: ['6-months', '9-months'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-choking-on-food', 'baby-choking-vs-gagging-difference', 'baby-gagging-on-textures', 'baby-starting-solids-when-ready'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Starting Solid Foods. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Choking Prevention. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Choking-Prevention.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Baby-Led Weaning and Risk of Choking.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
