import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-not-banging-toys-together',
  title: 'My Baby Isn\'t Banging Toys Together',
  category: 'physical',
  searchTerms: ['baby not banging toys', 'baby won\'t bang objects together', 'baby clapping toys together milestone', 'when do babies bang toys', 'baby not hitting toys together', 'banging objects together delay', 'baby midline play delay', 'baby not clacking toys', 'when should baby bang blocks', 'baby bilateral hand use'],
  quickAnswer: 'Banging two objects together at midline is a milestone that typically develops around 7-10 months. It shows that your baby can use both hands together and coordinate movements at the midline of their body. If your baby is not banging objects together by 10-11 months, mention it to your pediatrician.',
  byAge: [
    { ageRange: '5-7 months', context: 'Your baby may be holding objects in both hands but has not yet figured out how to bring them together purposefully. They may accidentally hit toys together. This is the beginning of bilateral hand coordination and is completely age-appropriate.' },
    { ageRange: '7-9 months', context: 'Most babies begin intentionally banging objects together during this period. They love the noise and the cause-and-effect relationship. If your baby is not doing this yet but is holding objects in both hands, the skill will likely emerge soon.' },
    { ageRange: '9-11 months', context: 'Banging objects together should be well established by now. If your baby is not doing this, observe whether they bring their hands to midline and use both hands together during other activities. If bilateral hand use seems limited overall, discuss with your pediatrician.' },
    { ageRange: '11-14 months', context: 'If your baby still does not bang toys together, evaluation of fine motor and bilateral coordination skills may be helpful. An occupational therapist can assess hand function and coordination.' },
  ],
  whenNormal: ['Your baby is under 9 months and holds objects in both hands.', 'Your baby bangs objects on surfaces but not together yet.', 'Your baby occasionally brings objects together at midline.', 'Your baby is developing other hand skills on track.'],
  whenToMention: ['Your baby is over 10 months and never bangs objects together.', 'Your baby does not bring hands to midline.', 'Your baby seems to avoid using both hands together.'],
  whenToActNow: ['Your baby has lost the ability to hold objects or use their hands.', 'Your baby cannot bring hands to midline at all after 5 months.'],
  relatedMilestones: ['fine-motor-bilateral', 'fine-motor-grasp'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-not-bringing-hands-to-midline', 'baby-bilateral-coordination-poor', 'fine-motor-delay-general'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Hand and Finger Skills', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Hand-and-Finger-Skills-1.aspx' },
    { org: 'CDC', citation: 'CDC - Important Milestones: Your Baby at 9 Months', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-9mo.html' },
    { org: 'NIH', citation: 'Lobo MA, Galloway JC. Assessment and Stability of Early Learning Abilities in Preterm and Full-term Infants. Dev Med Child Neurol. 2008', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
