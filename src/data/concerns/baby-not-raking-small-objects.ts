import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-not-raking-small-objects',
  title: 'My Baby Isn\'t Raking at Small Objects',
  category: 'physical',
  searchTerms: ['baby not raking grasp', 'baby can\'t pick up small objects', 'baby raking grasp delay', 'baby doesn\'t rake at food', 'baby can\'t get small things', 'raking grasp milestone', 'baby whole hand grasp only', 'baby not scooping small items', 'when should baby rake objects', 'baby palmar grasp only'],
  quickAnswer: 'The raking grasp (using fingers to sweep small objects toward the palm) typically develops around 6-8 months. This is a precursor to the pincer grasp. If your baby cannot rake small objects by 9 months, mention it to your pediatrician. Most babies are still using a whole-hand or palmar grasp at 6 months.',
  byAge: [
    { ageRange: '4-6 months', context: 'Babies at this age use a palmar grasp, wrapping their whole hand around objects. They cannot yet pick up small items. This is completely normal. The raking motion develops next as your baby gains more finger control.' },
    { ageRange: '6-8 months', context: 'The raking grasp should emerge during this period. Your baby will use their fingers to sweep small items like cereal into their palm. It looks messy and imprecise, and that is perfectly normal. This is an important step toward the pincer grasp.' },
    { ageRange: '8-10 months', context: 'Your baby should be raking at small objects and may be starting to develop a crude pincer grasp (using thumb and side of index finger). If your baby shows no raking ability, discuss it with your pediatrician.' },
    { ageRange: '10-12 months', context: 'The raking grasp should have transitioned to a pincer grasp by now. If your baby is still unable to pick up small objects at all, fine motor evaluation is recommended.' },
  ],
  whenNormal: ['Your baby is under 8 months and uses a whole-hand grasp.', 'Your baby rakes messily but is getting food or objects.', 'Your baby is developing the raking grasp but is not yet precise.', 'Your baby was premature and is on adjusted age timeline.'],
  whenToMention: ['Your baby is over 9 months and cannot rake or pick up small objects.', 'Your baby shows no interest in small objects.', 'Your baby cannot bring hands to midline to grasp.'],
  whenToActNow: ['Your baby has lost grasp abilities they previously had.', 'Your baby\'s hands seem weak or unable to function.'],
  relatedMilestones: ['fine-motor-grasp', 'fine-motor-pincer'],
  showSelfReferral: true,
  relatedConcernSlugs: ['delayed-pincer-grasp-development', 'baby-not-grasping-objects', 'fine-motor-delay-general'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Hand and Finger Skills', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Hand-and-Finger-Skills-1.aspx' },
    { org: 'CDC', citation: 'CDC - Important Milestones: Your Baby at 9 Months', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-9mo.html' },
    { org: 'NIH', citation: 'Halverson HM. An Experimental Study of Prehension in Infants. Genetic Psych Monographs. 1931', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
