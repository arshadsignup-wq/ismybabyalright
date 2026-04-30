import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-taking-off-clothes-diaper',
  title: 'Toddler Keeps Taking Off Clothes or Diaper',
  category: 'behavior',
  searchTerms: ['toddler takes off diaper', 'toddler removing clothes', 'toddler strips naked', 'baby pulling off diaper', 'toddler undressing', 'toddler won\'t keep clothes on', 'toddler takes off diaper at night', 'baby removes diaper in crib', 'toddler keeps undressing', 'toddler hates wearing clothes'],
  quickAnswer: 'Toddlers frequently go through a phase of removing their clothes and diapers. This is a normal developmental behavior driven by their growing independence, new fine motor skills (they can now figure out snaps and zippers), sensory preferences (some children dislike the feeling of certain fabrics or a wet diaper), and the simple thrill of mastering a new skill. It can also be an early sign of potty training readiness. While inconvenient, this phase is temporary and usually resolves with patience and practical strategies.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies under 1 rarely have the fine motor skills to intentionally remove clothing or diapers. If a baby is pulling at their diaper, it is usually because of discomfort - a wet or dirty diaper, diaper rash, or an ill-fitting diaper. Check for and address the source of discomfort. Some older babies (10-12 months) may start pulling at velcro tab diapers, which can be solved by using snap-style diaper covers or putting the diaper on backwards.' },
    { ageRange: '1-3 years', context: 'This is the peak age for clothes and diaper removal. Toddlers love demonstrating their independence and showing off new skills. Common reasons include: practicing a new motor skill, disliking the sensation of clothing or a wet diaper, wanting attention (they get a big reaction when they strip), feeling too warm, or early potty training readiness. Practical solutions: try backwards onesies or zip-up sleepers worn backwards at night, use cloth diaper covers over disposables, offer choices about clothing, and consider starting potty training if your child consistently removes a wet diaper.' },
  ],
  whenNormal: ['Removing clothes or diaper occasionally as a new skill (18-30 months)', 'Taking off a wet or dirty diaper', 'Preferring to be naked at home - many toddlers do', 'Undressing as part of asserting independence'],
  whenToMention: ['Diaper removal is happening constantly and causing hygiene issues', 'Your toddler seems to have sensory aversions to all clothing fabrics', 'You suspect your child is ready for potty training and want guidance', 'The behavior is accompanied by other sensory sensitivities that concern you'],
  whenToActNow: ['Diaper removal is combined with signs of skin irritation, rash, or infection in the diaper area', 'Your child is in distress about wearing clothes (not just preference, but true distress)', 'The behavior is part of a broader pattern of sensory issues affecting multiple areas of daily life'],
  relatedMilestones: ['self-care'],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-genital-self-stimulation', 'sensory-seeking-behavior', 'potty-training-readiness', 'diaper-rash'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Dressing and Undressing. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/default.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Toilet Training. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/toilet-training/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Self-Help Skills in Toddlers.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
