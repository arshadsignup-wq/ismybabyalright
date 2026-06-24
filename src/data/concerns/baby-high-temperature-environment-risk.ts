import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-high-temperature-environment-risk',
  title: 'Risks of High Temperature Environments for My Baby',
  category: 'medical',
  searchTerms: [
    'baby overheating room temperature',
    'baby hot car danger',
    'safe room temperature for baby',
    'baby overheating risk SIDS',
    'hot weather danger baby',
    'baby sauna safety',
    'baby hot tub danger',
    'baby overheating at night',
    'ideal temperature baby room',
    'baby overdressed overheating signs',
  ],
  quickAnswer:
    'Babies are at significant risk from high temperature environments because they cannot regulate their body temperature effectively. Overheating is a known risk factor for SIDS (Sudden Infant Death Syndrome). The ideal room temperature for a baby is 68-72 degrees F (20-22 degrees C). Babies should never be left in parked cars, exposed to direct sunlight for extended periods, or placed in hot tubs or saunas. Signs of overheating include sweating, flushed skin, rapid breathing, and irritability.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Young infants are most vulnerable to temperature extremes. Overheating during sleep is a significant SIDS risk factor — the AAP recommends keeping the baby\'s room at 68-72 degrees F and dressing them in no more than one layer beyond what an adult would wear. Avoid blankets, hats, and excessive swaddling in warm environments. Never leave a baby in a parked car — the interior temperature can rise 20 degrees F in just 10 minutes, even with windows cracked. Hot baths (above 100 degrees F) can cause burns to delicate infant skin. Check your baby\'s temperature by feeling the back of their neck or chest — hands and feet are naturally cooler and are not reliable indicators.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become more active, they generate more body heat. Continue maintaining a comfortable room temperature for sleep. When outdoors in hot weather, keep your baby in the shade, use breathable clothing and wide-brimmed hats, and limit sun exposure — sunscreen can be used on babies over 6 months. Strollers with sun shades should not be covered with blankets draped over the top, as this can trap heat dangerously. In cars, never leave a baby unattended, use sunshades on windows, and check that car seat straps and buckles are not hot before buckling your baby in.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers remain at higher risk than adults for heat-related illness due to their smaller body size and less efficient sweating. They should not use hot tubs, saunas, or steam rooms — their bodies heat up 3-5 times faster than adults. During heat waves, keep toddlers indoors during peak heat hours (10 AM - 4 PM) and ensure adequate hydration. If your home does not have air conditioning during extreme heat, take your child to a public cooling center. Watch for signs of overheating: excessive thirst, reduced urination, lethargy, and irritability.',
    },
  ],
  whenNormal: [
    'Your baby\'s room is maintained at 68-72 degrees F and your baby is dressed appropriately for the temperature.',
    'Your baby feels warm on the back of their neck or chest but is not sweating, flushed, or irritable.',
    'Your baby is slightly flushed after active play but returns to normal quickly after cooling down.',
  ],
  whenToMention: [
    'You are unsure about the right room temperature or how many layers your baby needs for sleep.',
    'Your baby frequently seems overheated despite reasonable temperature control.',
    'You live in a hot climate without reliable air conditioning and want strategies to keep your baby safe.',
  ],
  whenToActNow: [
    'Your baby has been left in a hot car or enclosed hot space — seek emergency medical care immediately, even if they appear fine, as symptoms can develop rapidly.',
    'Your baby shows signs of heat stroke: body temperature over 104 degrees F, hot and dry skin, confusion, vomiting, or loss of consciousness — call 911 and begin cooling immediately.',
    'Your baby is lethargic, not feeding, and has a very warm body after exposure to high temperatures — seek urgent medical care.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-heat-exhaustion-signs', 'baby-heat-rash', 'baby-prickly-heat-rash-recurring'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Reduce the Risk of SIDS and Suffocation',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention — Heat-Related Illness Prevention',
      url: 'https://www.cdc.gov/extreme-heat/prevention/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Child Health and Human Development — Safe Sleep for Your Baby',
      url: 'https://safetosleep.nichd.nih.gov/',
    },
  ],
};
