import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-spoon-feeding-vs-self-feeding',
  title: 'Spoon Feeding vs Self-Feeding (Baby-Led Weaning)',
  category: 'feeding',
  searchTerms: [
    'spoon feeding vs baby led weaning',
    'BLW vs purees',
    'baby self feeding',
    'baby led weaning safe',
    'when to let baby feed themselves',
    'spoon feeding baby how long',
    'baby finger foods vs purees',
    'baby led weaning choking risk',
    'combination feeding baby solids',
    'baby won\'t eat from spoon',
  ],
  quickAnswer:
    'Both spoon-feeding (traditional weaning with purees) and baby-led weaning (BLW, where babies self-feed soft finger foods from the start) are valid approaches to introducing solids. Research shows no significant difference in nutritional outcomes or choking risk when BLW is done safely. Many families use a combination of both approaches. The best method is the one that works for your family while prioritizing safety and offering a variety of nutritious foods.',
  byAge: [
    {
      ageRange: '4-6 months',
      context:
        'Most babies are ready to start solids around 6 months (some as early as 4 months with pediatrician guidance). For spoon-feeding, start with thin, smooth purees and gradually increase thickness. For baby-led weaning, offer soft, appropriately shaped finger foods (long strips that are easy to grip). Regardless of method, your baby should be able to sit with support, show interest in food, and have good head control. Iron-rich foods (iron-fortified cereal, pureed meat, mashed beans) should be among the first foods introduced.',
    },
    {
      ageRange: '6-9 months',
      context:
        'This is the critical window for texture progression. Babies who are exclusively spoon-fed should gradually move from smooth purees to mashed and lumpy textures by 8-9 months. Delaying textured foods beyond 9 months has been associated with more feeding difficulties later. BLW babies are already experiencing textures through self-feeding. Both approaches can be combined: offer purees on a preloaded spoon alongside soft finger foods. Gagging is common and normal with both methods - it is a protective reflex, different from choking.',
    },
    {
      ageRange: '9-14 months',
      context:
        'By 9-12 months, most babies should be eating soft finger foods regardless of starting approach. Encourage self-feeding with appropriately sized pieces. Your baby is developing the pincer grasp (thumb and forefinger) which allows them to pick up smaller pieces. Offer a variety of foods across all food groups. Messy eating is normal and supports sensory development. By 12 months, babies should be eating family foods in appropriate textures and gradually transitioning away from pureed foods.',
    },
  ],
  whenNormal: [
    'Your baby gags occasionally when trying new textures - this is a normal protective reflex.',
    'Mealtimes are messy and your baby plays with food as much as eating it.',
    'Your baby prefers one method (spoon-fed or self-feeding) and you adapt accordingly.',
  ],
  whenToMention: [
    'Your baby is over 9 months and still only accepts very smooth purees, refusing all textured foods.',
    'You are unsure how to safely prepare foods for baby-led weaning to minimize choking risk.',
    'Your baby has strong gag reactions to most textures and mealtimes are consistently stressful.',
  ],
  whenToActNow: [
    'Your baby is choking (silent, unable to cough or cry, turning blue) rather than gagging.',
    'Your baby has a known swallowing disorder and has not been evaluated for safe feeding methods.',
    'Your baby is losing weight or failing to gain weight regardless of feeding method.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-refusing-solids', 'baby-refusing-solids-after-six-months', 'baby-choking-on-food', 'throwing-food'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Starting Solid Foods. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization - Complementary Feeding: Family Foods for Breastfed Children.',
      url: 'https://www.who.int/publications/i/item/9241590351',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health - Baby-Led Introduction to SolidS (BLISS) Study. Pediatrics, 2016.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/27647715/',
    },
  ],
};
