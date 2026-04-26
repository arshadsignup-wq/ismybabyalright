import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-nail-peeling',
  title: 'Baby Nail Peeling or Splitting',
  category: 'skin',
  searchTerms: [
    'baby nail peeling',
    'baby nails splitting',
    'infant peeling nails',
    'baby fingernails flaking',
    'baby toenails peeling',
    'newborn nail peeling',
    'baby brittle nails',
    'baby nails thin and peeling',
    'toddler nails splitting',
    'baby nail layers peeling off',
  ],
  quickAnswer:
    'Peeling or splitting nails in babies are very common and usually harmless. Baby nails are extremely thin and soft, making them prone to peeling, especially from normal wear and moisture exposure. This typically improves as your child grows and their nails become stronger. Keep nails trimmed short and moisturize the nail area gently.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborn nails are paper-thin and often peel at the tips. This is completely normal. Their nails grew in the amniotic fluid environment and are adjusting to air exposure. You may notice the top layer flaking off. Keep nails trimmed to prevent scratching, and avoid picking at peeling edges. No treatment is needed.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Nail peeling may continue as babies this age frequently have their hands in their mouths, keeping nails moist. The constant moisture-to-dry cycling weakens the nail layers. This is normal. Gently pat hands dry after drool exposure and keep nails trimmed with baby nail clippers or a fine file.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby explores more, their nails may show wear from crawling and grabbing objects. Some peeling from normal activity is expected. If your baby\'s nails seem unusually brittle or you notice color changes, mention it at your next well visit. Most peeling at this age is still entirely normal.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddler nails are stronger but still thinner than adult nails. Peeling may occur after hand-foot-mouth disease (a common cause of temporary nail shedding), frequent water play, or simply from normal wear. Nails that peel after an illness usually grow back normally within a few months.',
    },
  ],
  whenNormal: [
    'Thin, slightly peeling nails in a newborn adjusting to life outside the womb',
    'Mild peeling at the nail tips without redness or pain',
    'Temporary nail changes after hand-foot-mouth disease or other viral illness',
    'Nails that look normal at the base and only peel at the free edge',
  ],
  whenToMention: [
    'Nails are severely peeling, pitting, or discolored along with skin changes on the fingers or toes',
    'Nail peeling is accompanied by hair loss, poor growth, or other signs that concern you',
    'Nails appear thickened, discolored, or are separating from the nail bed',
  ],
  whenToActNow: [
    'Nail area is red, swollen, warm, or draining pus - this suggests a nail infection (paronychia)',
    'Your baby has sudden, complete shedding of nails along with blistering or skin peeling that seems painful',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Nail Care for Newborns. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Nail-Care.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hand-Foot-and-Mouth Disease. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/infections/Pages/Hand-Foot-and-Mouth-Disease.aspx',
    },
  ],
};
