import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-furniture-walking-one-direction',
  title: 'My Baby Only Cruises in One Direction',
  category: 'physical',
  searchTerms: [
    'baby cruises one direction only',
    'baby furniture walking one way',
    'baby only goes left cruising',
    'baby only goes right cruising',
    'asymmetric cruising baby',
    'baby cruises one side',
    'baby won\'t cruise both ways',
    'one direction furniture walking',
    'baby favoring side cruising',
    'cruising asymmetry baby',
  ],
  quickAnswer:
    'When babies first start cruising, it is common to go in one direction more easily than the other. This is because side-stepping requires leading with one foot, and babies naturally favor one side initially. Most babies learn to cruise both directions within a few weeks. Persistent one-direction cruising lasting more than a month should be mentioned to your pediatrician.',
  byAge: [
    { ageRange: '9-11 months', context: 'When cruising first begins, preferring one direction is very common. Your baby is figuring out the side-stepping motion and naturally leads with one foot. Give them time to develop comfort in both directions. You can encourage the other direction by placing toys on the non-preferred side.' },
    { ageRange: '11-13 months', context: 'Most babies cruise in both directions by now, though they may still have a preferred side. If your baby exclusively cruises one way and seems unable to go the other direction, watch for other signs of asymmetry like favoring one hand or one leg seeming stiffer.' },
    { ageRange: '13-15 months', context: 'If your baby still cannot cruise both directions, mention it to your pediatrician. They may want to check for asymmetry in muscle tone or strength. Some babies transition to walking even if they only cruised one direction, which may resolve the concern.' },
    { ageRange: '15-18 months', context: 'If your child has started walking, observe whether they walk symmetrically. If walking also seems asymmetric, evaluation is recommended. If walking looks normal, the one-direction cruising was likely just a preference.' },
  ],
  whenNormal: [
    'Your baby just started cruising and prefers one direction.',
    'Your baby can cruise both ways but prefers one.',
    'The preference is improving over weeks.',
    'Your baby uses both legs equally when walking or standing.',
  ],
  whenToMention: [
    'Your baby exclusively cruises in one direction for more than 4-6 weeks.',
    'Your baby seems unable to step to one side.',
    'You notice other asymmetric movements alongside one-direction cruising.',
  ],
  whenToActNow: [
    'Your baby has sudden weakness on one side of their body.',
    'Your baby was cruising both directions and has stopped going one way.',
  ],
  relatedMilestones: ['gross-motor-cruising', 'gross-motor-walking'],
  showSelfReferral: true,
  relatedConcernSlugs: ['not-cruising', 'asymmetric-movement', 'baby-cruising-not-walking'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Movement: 8 to 12 Months', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-8-to-12-Months.aspx' },
    { org: 'CDC', citation: 'CDC - Important Milestones: Your Baby at 12 Months', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-12mo.html' },
    { org: 'NIH', citation: 'Haehl V, et al. Learning to Cruise: Bernstein\'s Theory Applied to Skill Acquisition During Infancy. Hum Mov Sci. 2000;19(5)', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
