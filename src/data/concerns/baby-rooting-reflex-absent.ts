import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-rooting-reflex-absent',
  title: 'Baby\'s Rooting Reflex Is Absent',
  category: 'physical',
  searchTerms: [
    'baby no rooting reflex',
    'rooting reflex absent newborn',
    'baby won\'t turn to breast',
    'baby not searching for nipple',
    'absent rooting reflex',
    'newborn reflex missing',
    'baby doesn\'t root when touched',
    'rooting reflex not present',
    'baby not opening mouth for breast',
    'weak rooting reflex',
  ],
  quickAnswer:
    'The rooting reflex causes a newborn to turn their head and open their mouth when their cheek or lip is stroked, helping them find the breast or bottle. This reflex is normally present at birth and gradually fades by 3-4 months as feeding becomes more voluntary. An absent or very weak rooting reflex in a newborn may indicate prematurity, neurological concerns, or simply that the baby was recently fed. Mention an absent rooting reflex to your pediatrician for evaluation.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'The rooting reflex should be consistently present in full-term newborns. When you gently stroke your baby\'s cheek or the corner of their mouth, they should turn their head toward the touch and open their mouth. Premature babies may have a weaker rooting reflex that strengthens as they mature. The reflex may be harder to elicit right after a feeding when the baby is full and sleepy. If the rooting reflex is completely absent in a full-term newborn, your pediatrician should evaluate for possible neurological concerns.',
    },
    {
      ageRange: '1-3 months',
      context:
        'The rooting reflex remains active during this period but may become less predictable as your baby develops more voluntary feeding behaviors. Your baby is learning to open their mouth and latch more intentionally. Some babies begin to suppress the rooting reflex when they are not hungry. If rooting was never present and your baby has difficulty latching or feeding, seek evaluation for oral motor function and neurological health.',
    },
    {
      ageRange: '3-6 months',
      context:
        'The rooting reflex normally begins to fade between 3-4 months as your baby transitions to voluntary feeding behaviors. By 4-6 months, most babies open their mouth deliberately when they see the breast or bottle approaching, rather than relying on the reflex. The disappearance of the rooting reflex at this age is a healthy sign of neurological maturation, not a concern.',
    },
  ],
  whenNormal: [
    'Your baby roots when hungry but not immediately after a feeding - a full baby may not root.',
    'The rooting reflex is gradually fading after 3 months as your baby feeds more voluntarily.',
    'Your premature baby has a weak rooting reflex that is strengthening over weeks.',
  ],
  whenToMention: [
    'Your full-term newborn has a very weak rooting reflex and struggles to latch or find the nipple.',
    'The rooting reflex seems absent on one side but present on the other.',
    'Your baby has a weak rooting reflex along with other weak or absent reflexes.',
  ],
  whenToActNow: [
    'Your newborn has no rooting reflex and is unable to feed, resulting in poor weight gain or dehydration.',
    'Absent rooting reflex is accompanied by extreme floppiness, seizures, or unresponsiveness.',
    'Your baby cannot suck or swallow and is at risk of aspiration during feeding.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-primitive-reflexes-not-integrating', 'baby-weak-suck-reflex-feeding', 'baby-stepping-reflex-absent', 'tongue-tie'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Newborn Reflexes. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Newborn-Reflexes.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health - Infant Reflexes. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/003292.htm',
    },
    {
      org: 'Stanford Children\'s Health',
      citation:
        'Stanford Children\'s Health - Newborn Reflexes.',
      url: 'https://www.stanfordchildrens.org/en/topic/default?id=newborn-reflexes-90-P02630',
    },
  ],
};
