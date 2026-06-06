import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-scalp-electrode-wound',
  title: 'Wound From Fetal Scalp Electrode Monitoring',
  category: 'medical',
  searchTerms: [
    'fetal scalp electrode wound',
    'baby scalp wound from monitoring',
    'newborn head wound FSE',
    'scalp electrode site care',
    'baby scalp mark from labor',
    'fetal monitoring wound',
    'internal monitor scalp wound',
    'newborn scalp electrode infection',
    'baby scalp scratch from birth',
    'scalp electrode healing time',
  ],
  quickAnswer:
    'A small wound or mark on your baby\'s scalp from a fetal scalp electrode (used for internal heart rate monitoring during labor) is common and heals quickly. The wound is typically small, like a tiny scratch or prick, and usually heals within 1-2 weeks with simple care. Keep the area clean and dry.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'A fetal scalp electrode creates a tiny wound on the baby\'s scalp where it was attached to monitor the heart rate during labor. The mark is usually very small and may look like a small scratch, prick, or scab. Keep the area clean by gently washing during baths. No special ointment or bandage is needed. The wound typically heals within 1-2 weeks. Watch for signs of infection: increasing redness, swelling, warmth, or discharge from the site.',
    },
    {
      ageRange: '1-3 months',
      context:
        'The scalp electrode wound should be fully healed. In most cases, there is no visible scar. If you notice a small bald patch where the electrode was placed, hair will typically grow back once the area heals.',
    },
    {
      ageRange: '3-6 months',
      context:
        'There should be no remaining sign of the scalp electrode placement. Hair growth should have covered the area completely.',
    },
    {
      ageRange: '6-12 months',
      context:
        'No lasting effects from fetal scalp electrode monitoring. The scalp should appear completely normal.',
    },
  ],
  whenNormal: [
    'A small scratch, prick mark, or scab on the scalp after birth',
    'The wound is small and does not bleed significantly',
    'Healing occurs within 1-2 weeks',
    'Surrounding skin looks normal without redness or swelling',
  ],
  whenToMention: [
    'The wound seems slow to heal or is not improving after 2 weeks',
    'You notice a small bald patch and are concerned about hair regrowth',
    'The scab keeps being bumped off during handling',
  ],
  whenToActNow: [
    'The wound site becomes red, swollen, warm, or drains pus, indicating possible infection',
    'Your baby develops a fever along with signs of infection at the electrode site',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Fetal Heart Rate Monitoring During Labor.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Library of Medicine. Fetal Scalp Electrode. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK539764/',
    },
  ],
  relatedConcernSlugs: ['newborn-bruising-from-delivery', 'newborn-vacuum-marks'],
};
