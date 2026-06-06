import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-walking-late-18-months',
  title: 'My Baby Is Not Walking at 18 Months',
  category: 'physical',
  searchTerms: [
    'baby not walking 18 months',
    'toddler not walking yet',
    'late walker 18 months',
    '18 month old not walking',
    'when to worry about late walking',
    'delayed walking 18 months',
    'baby still not walking',
    'should my baby be walking by now',
    'toddler won\'t walk 18 months',
    'late walking normal',
  ],
  quickAnswer:
    'While most babies walk by 15 months, the WHO considers walking alone as normal up to 17.6 months. If your baby is not walking at 18 months, your pediatrician will want to evaluate them, but many late walkers have no underlying issues. Babies who were premature, who are bottom shufflers, or who are more cautious temperamentally may walk later.',
  byAge: [
    {
      ageRange: '15-16 months',
      context:
        'About 90% of babies walk independently by 15 months, but the remaining 10% are still perfectly normal. If your baby is cruising confidently, standing independently, and perhaps taking a few steps, walking is likely imminent. Some babies simply take more time to build confidence. Mention it at your well visit, but this is often within the normal range.',
    },
    {
      ageRange: '16-18 months',
      context:
        'If your baby is approaching 18 months without walking, your pediatrician should evaluate their motor development. However, many babies who walk at 16-18 months have no developmental concerns at all. Your doctor will check muscle tone, joint flexibility, and overall strength. If everything looks normal, they may recommend a short course of physical therapy to help build confidence.',
    },
    {
      ageRange: '18-21 months',
      context:
        'Walking after 18 months warrants medical evaluation. Your pediatrician may refer to a developmental pediatrician or physical therapist. Common treatable causes include hypermobility (very flexible joints), mild low muscle tone, or simply being a cautious child. Physical therapy can make a big difference at this stage.',
    },
    {
      ageRange: '21-24 months',
      context:
        'If your child is still not walking by 21 months, a thorough developmental evaluation is important. While some children are simply very late walkers with no underlying cause, this level of delay may indicate conditions that benefit from early intervention, such as hypotonia, developmental coordination disorder, or other treatable conditions.',
    },
  ],
  whenNormal: [
    'Your baby is cruising, standing independently, and may take a few steps with hands held.',
    'Your baby was premature - use adjusted age, which may shift walking by several months.',
    'Your baby was a bottom shuffler, as bum shufflers commonly walk later (15-21 months).',
    'Your baby seems cautious and careful rather than physically unable to walk.',
  ],
  whenToMention: [
    'Your baby is 15 months old and not yet taking independent steps.',
    'Your baby is not cruising along furniture by 12 months.',
    'Your baby seems to have weak legs, floppy muscle tone, or very stiff legs.',
    'There is a family history of neuromuscular conditions.',
  ],
  whenToActNow: [
    'Your baby was walking and has stopped or lost motor skills.',
    'Your baby cannot stand with support, has significant weakness, or cannot bear any weight on their legs.',
  ],
  relatedMilestones: [
    'gross-motor-pulling-to-stand',
    'gross-motor-cruising',
    'gross-motor-walking',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['not-walking', 'baby-cruising-not-walking', 'low-muscle-tone'],
  sources: [
    {
      org: 'WHO',
      citation:
        'WHO Motor Development Study: Walking alone achieved between 8.2 and 17.6 months across populations',
      url: 'https://www.who.int/publications/i/item/WHO-TRS-2006-450',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Delayed Walking',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Babys-First-Steps.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Child By 18 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-18mo.html',
    },
  ],
};
