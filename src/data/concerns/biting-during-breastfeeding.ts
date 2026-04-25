import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'biting-during-breastfeeding',
  title: 'My Baby Bites During Breastfeeding',
  category: 'feeding',
  searchTerms: [
    'baby biting while breastfeeding',
    'baby bites nipple',
    'how to stop baby from biting',
    'teething baby biting breast',
    'baby clamps down while nursing',
    'nipple pain from biting',
    'baby bites at end of feed',
    'baby biting and laughing',
    'why does baby bite while nursing',
    'baby biting during letdown',
  ],
  quickAnswer:
    'Being bitten while breastfeeding is painful and distressing, but it is usually a phase that can be managed. Babies bite for various reasons: teething discomfort, playfulness, distraction, trying to slow milk flow, or experimenting with their new teeth. The key is to respond calmly but firmly - unlatch your baby immediately, say "no biting" in a neutral tone, and pause the feeding briefly. Most babies learn quickly that biting ends the feeding.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'Babies this young do not yet have teeth, so true biting is rare. However, they may clamp down with their gums, especially during teething preparation or if they are frustrated with milk flow (too fast or too slow). Clamping can also happen if your baby has a shallow latch. If gum clamping is frequent and painful, consult a lactation consultant to assess latch and rule out tongue tie or other structural issues.',
    },
    {
      ageRange: '4-8 months',
      context:
        'This is peak teething time, and many babies get their first teeth around 6 months. Teething babies may bite down to soothe sore gums. Biting often happens at the end of a feeding when they are no longer actively sucking. Watch for your baby\'s feeding cues: when they start to slow down or become playful, unlatch them before they have a chance to bite. Offer a cold teether before nursing to ease gum discomfort.',
    },
    {
      ageRange: '8-12 months',
      context:
        'Older babies may bite out of curiosity, to get a reaction, or because they are distracted and not focusing on nursing. Some babies bite during a fast letdown because they are trying to slow the flow. If biting becomes a pattern, immediately unlatch, set your baby down, and pause for a moment. Babies quickly learn that biting = no more nursing. Stay calm - big reactions (yelling, laughing) can reinforce the behavior.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers sometimes bite while nursing if they are bored, seeking attention, or testing boundaries. Consistent, calm responses are key. Some parents find success with saying "gentle" and modeling soft touches, or limiting nursing sessions to times when the toddler is genuinely hungry and focused. If biting becomes frequent and painful, it is okay to set boundaries or consider weaning if breastfeeding is no longer working for you.',
    },
  ],
  whenNormal: [
    'Your baby bites once or twice, you respond by unlatching, and the behavior stops',
    'Your baby clamps down gently when sleepy or at the end of a feed, but releases when you break the latch',
    'Biting happens during a few days of intense teething, then resolves once the tooth breaks through',
    'Your baby bites when distracted, but stops when you minimize distractions and refocus them on nursing',
  ],
  whenToMention: [
    'Your baby bites during every single feeding session despite your attempts to prevent it',
    'You have developed cracked, bleeding, or infected nipples due to repeated biting',
    'Your baby seems to have a painful latch or nursing is always uncomfortable, which may indicate structural issues beyond simple biting',
    'You are experiencing severe nipple pain or trauma and are considering stopping breastfeeding because of it',
  ],
  whenToActNow: [
    'You have signs of a breast infection (mastitis): fever, flu-like symptoms, red/hot area on breast, severe pain',
    'Your nipple is severely damaged with deep cracks, bleeding that won\'t stop, or signs of infection (pus, extreme redness, swelling)',
    'You suspect your baby has thrush (white patches in mouth) or you have nipple thrush (shiny, itchy, burning nipples) - both need treatment',
  ],
  relatedMilestones: [
    'feeding',
    'teething',
    'behavior',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'La Leche League',
      citation:
        'La Leche League International. How Do I Get My Baby to Stop Biting During Breastfeeding?',
      url: 'https://www.llli.org/breastfeeding-info/biting/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Teething and Breastfeeding. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/default.aspx',
    },
    {
      org: 'KellyMom',
      citation:
        'KellyMom Parenting & Breastfeeding. Biting and Breastfeeding: What to Do.',
      url: 'https://kellymom.com/ages/older-infant/biting/',
    },
  ],
};
