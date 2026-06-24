import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-crib-mattress-firmness',
  title: 'How Firm Should My Baby\'s Crib Mattress Be?',
  category: 'sleep',
  searchTerms: [
    'crib mattress firmness baby',
    'how firm should baby mattress be',
    'crib mattress safety standard',
    'baby mattress too soft',
    'firm mattress SIDS prevention',
    'crib mattress test firmness',
    'best crib mattress baby',
    'mattress firmness safe sleep',
    'baby sleeping on soft surface danger',
    'crib mattress fit properly',
  ],
  quickAnswer:
    'A baby\'s crib mattress should be very firm - when you press on it, it should spring back immediately and not conform to the shape of your hand. The AAP recommends a firm, flat surface for all infant sleep. A mattress that is too soft increases the risk of suffocation if a baby rolls face-down. The mattress should fit snugly in the crib with no gaps larger than two fingers between the mattress edge and crib frame. Only use the mattress designed for your specific crib.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'This is the highest-risk period for SIDS and sleep-related deaths, making mattress firmness critically important. A safe crib mattress should not indent when your baby lies on it. Use only a fitted sheet designed for that mattress - no additional padding, pillow tops, or mattress toppers. If the mattress came with your crib, ensure it meets current CPSC safety standards (ASTM F2933). If using a hand-me-down mattress, check that it is still firm, has not degraded, and fits the crib properly.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby begins to roll and move during sleep, a firm mattress remains essential. Babies who roll face-down onto a soft surface may not be able to lift or turn their head enough to breathe. Do not switch to a softer mattress even if you think your baby seems uncomfortable - babies sleep safely on firm surfaces. Do not add any foam toppers, egg crate pads, sheepskin, or pillows to try to make the mattress softer. A firm mattress is a safe mattress.',
    },
    {
      ageRange: '12-36 months',
      context:
        'When transitioning to a toddler bed, the mattress should still be firm, though toddler mattresses may be slightly less rigid than infant crib mattresses. Many crib mattresses are dual-sided with a firmer infant side and a slightly softer toddler side. If your crib converts to a toddler bed, you can flip the mattress to the toddler side after 12 months. Avoid adult mattresses for toddlers, as they are too soft and often too high, creating a fall risk.',
    },
  ],
  whenNormal: [
    'Your baby\'s mattress feels very firm to you - almost uncomfortably so. This is correct and safe.',
    'Your baby seems to sleep fine on the firm mattress even though you worry it is not comfortable enough.',
    'The mattress fits snugly in the crib with less than two finger-widths of gap on any side.',
  ],
  whenToMention: [
    'You are unsure if your crib mattress meets current safety standards, especially if it is second-hand.',
    'You notice a gap between the mattress and the crib frame that seems too large.',
    'Your baby consistently rolls to one position and you want to discuss sleep surface safety.',
  ],
  whenToActNow: [
    'You find your baby face-down on a soft surface and they are having difficulty breathing or are unresponsive.',
    'Your baby has become wedged between the mattress and the crib frame.',
    'Your crib mattress has been recalled - check CPSC.gov for current recalls and stop using it immediately.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-crib-bumper-danger',
    'baby-co-sleeper-bassinet-safety',
    'baby-sleeping-face-down',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Safe Sleep: Back to Sleep, Tummy to Play. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Consumer Product Safety Commission. Crib Mattresses: Safety Standards and Recommendations.',
      url: 'https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/cribs',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sleep-Related Infant Deaths: Updated 2022 Recommendations. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304',
    },
  ],
};
