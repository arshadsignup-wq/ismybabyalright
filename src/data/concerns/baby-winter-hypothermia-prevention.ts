import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-winter-hypothermia-prevention',
  title: 'Preventing Hypothermia in Babies During Winter',
  category: 'medical',
  searchTerms: [
    'baby hypothermia prevention',
    'baby cold weather danger',
    'baby too cold winter',
    'how to dress baby winter',
    'baby hypothermia signs',
    'newborn cold exposure',
    'baby frostbite prevention',
    'how to keep baby warm winter',
    'baby winter clothing layers',
    'baby outdoor winter safety',
  ],
  quickAnswer:
    'Babies lose body heat much faster than adults due to their large head-to-body ratio, thin skin, and limited ability to generate heat through shivering. The general rule is to dress your baby in one more layer than you would wear. Signs of hypothermia in babies include cold, bright red skin, lethargy, weak cry, and refusing to eat. Limit outdoor time in very cold conditions (below 20F/-7C), and never leave a baby in a cold car or unheated room.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns are especially vulnerable to cold because they cannot shiver effectively to generate heat and have very little body fat for insulation. Keep indoor temperature between 68-72F (20-22C). Dress your newborn in layers: a bodysuit, a sleeper, and a sleep sack for nighttime. For outdoor trips, add a warm hat (babies lose significant heat through their heads), mittens, and warm blankets over the car seat (remove extra layers once in a warm car, as bulky coats interfere with car seat harness fit). Limit outdoor exposure in extreme cold.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Babies are slightly better at temperature regulation but remain vulnerable. The "one more layer" rule applies: if you are comfortable in a coat, your baby needs a coat plus an additional layer. For car seats, avoid puffy winter coats that prevent proper harness fit - instead, buckle baby in and place a blanket over the harness. Hats and mittens are essential for outdoor play. Watch for signs of cold stress: fussiness, red nose and cheeks, cold hands despite gloves, and decreased activity. Bring your baby inside if they show any signs of being too cold.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers are more active outdoors in winter but may not complain when they are getting cold. Dress in layers that can be removed if they get warm from activity. Waterproof outer layers are important for snow play. Frostbite can occur on exposed skin (nose, ears, fingers, toes) in as little as 30 minutes in extreme cold and wind. Check extremities regularly during outdoor play. Take breaks inside to warm up every 20-30 minutes in cold weather. If your toddler\'s cheeks, fingers, or toes become white, waxy, or numb, bring them inside immediately and warm the area gently.',
    },
  ],
  whenNormal: [
    'Your baby feels warm to the touch on their chest and back even if their hands and feet are slightly cool.',
    'Your baby is comfortable and active during brief outdoor time in cold weather with appropriate layering.',
    'Your baby\'s cheeks are pink (not bright red or white) after brief cold exposure.',
  ],
  whenToMention: [
    'You are unsure how to dress your baby appropriately for your local winter climate.',
    'Your baby seems to get cold more easily than expected despite adequate layering.',
    'Your baby has a medical condition that may affect temperature regulation.',
  ],
  whenToActNow: [
    'Your baby has signs of hypothermia: cold red skin, lethargy, weak cry, refusal to eat, or body temperature below 95F (35C).',
    'Your baby has possible frostbite: white, waxy, or grayish-yellow patches on exposed skin.',
    'Your baby has been exposed to extreme cold for an extended period and is unusually sleepy or unresponsive.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-room-temperature-sleep', 'baby-winter-dry-skin-cracking', 'baby-safe-sleep-position-back'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Winter Safety Tips. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Frostbite-Prevention.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention - Hypothermia Prevention.',
      url: 'https://www.cdc.gov/disasters/winter/staysafe/hypothermia.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Cold Weather Tips. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Dressing-Your-Child-for-the-Cold.aspx',
    },
  ],
};
