import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'trigger-thumb-baby',
  title: 'Pediatric Trigger Thumb (or Finger)',
  category: 'medical',
  searchTerms: [
    'baby thumb stuck bent',
    'baby trigger thumb',
    'baby thumb won\'t straighten',
    'infant trigger finger',
    'toddler thumb locked bent position',
    'notta nodule baby thumb',
    'congenital trigger thumb',
    'baby thumb bump at base',
    'pediatric trigger thumb treatment',
    'baby thumb clicks when straightened',
  ],
  quickAnswer:
    'Pediatric trigger thumb occurs when the flexor tendon of the thumb develops a thickened nodule (called a Notta nodule) that prevents the thumb from straightening fully, leaving it stuck in a bent position. It is most often noticed between ages 1 and 3 years. About 30% of cases resolve spontaneously by age 1 with observation and gentle stretching. If the thumb remains locked, a minor outpatient surgical release is highly successful and is typically recommended by 2-3 years of age.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Trigger thumb is rarely noticed at this age because newborns naturally keep their hands clenched with thumbs tucked in (cortical thumb posture). This normal newborn reflex can mask a trigger thumb. If you notice a firm pea-sized bump at the base of your baby\'s thumb on the palm side, mention it to your pediatrician, but it is not urgent at this stage.',
    },
    {
      ageRange: '3-12 months',
      context:
        'As your baby begins to open their hands more, you may notice the thumb stays in a bent position or catches and clicks when you try to straighten it. You can often feel a small firm nodule (Notta node) at the base of the thumb on the palm side. The condition is painless. Your pediatrician may recommend observation and gentle passive stretching exercises (holding the thumb gently extended for a few seconds, several times a day). Approximately 30% of cases will resolve spontaneously during the first year.',
    },
    {
      ageRange: '1-3 years',
      context:
        'This is the age when trigger thumb is most commonly identified. If it has not resolved with stretching, your doctor may refer you to a pediatric hand or orthopedic specialist. Most specialists recommend surgical release (trigger thumb release) if the thumb remains locked by 2-3 years of age. The surgery is a brief outpatient procedure under general anesthesia where the tight A1 pulley of the tendon sheath is released through a small incision. Recovery is quick, with children using the hand normally within a few weeks.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Trigger thumb that persists untreated beyond age 3 may develop a fixed flexion contracture, meaning the interphalangeal joint itself becomes stiff and may not fully straighten even after surgical release. Surgery is still effective but may require more rehabilitation. Trigger fingers (affecting fingers other than the thumb) are less common in children but are evaluated and treated similarly. Most children have excellent outcomes after surgical release at any age.',
    },
  ],
  whenNormal: [
    'Your newborn keeps their hands clenched with thumbs tucked, which is a normal newborn reflex that resolves by 3-4 months',
    'Your baby\'s thumb occasionally catches or clicks but can be fully straightened without difficulty or pain',
    'Your baby was diagnosed with trigger thumb and your doctor has recommended watchful waiting with gentle stretching exercises',
    'Your child had trigger thumb release surgery and the thumb is straightening well during recovery',
  ],
  whenToMention: [
    'Your baby\'s thumb is persistently stuck in a bent position and cannot be fully straightened, or you feel a firm nodule at the base of the thumb',
    'Trigger thumb has not improved by 12 months despite consistent gentle stretching exercises',
    'You notice locking or catching in one or more fingers in addition to the thumb',
  ],
  whenToActNow: [
    'Your baby\'s thumb or finger is acutely swollen, red, warm, or painful, which could indicate infection rather than trigger thumb and needs same-day evaluation',
    'Your child suddenly loses the ability to move a finger or thumb after an injury, which may indicate a tendon or ligament injury requiring prompt assessment',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-clicking-joints'],
  sources: [
    {
      org: 'OrthoInfo',
      citation:
        'American Academy of Orthopaedic Surgeons. Trigger Finger. OrthoInfo, 2022.',
      url: 'https://orthoinfo.aaos.org/en/diseases--conditions/trigger-finger/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Congenital Trigger Thumb. Pediatrics in Review, 2019.',
      url: 'https://publications.aap.org/pediatricsinreview/article/40/5/236/35215/Pediatric-Trigger-Thumb',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Trigger Finger. MedlinePlus, 2023.',
      url: 'https://medlineplus.gov/ency/article/000565.htm',
    },
  ],
};
