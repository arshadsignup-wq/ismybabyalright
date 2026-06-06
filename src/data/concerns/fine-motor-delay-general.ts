import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'fine-motor-delay-general',
  title: 'My Baby Has Overall Fine Motor Delays',
  category: 'physical',
  searchTerms: ['fine motor delay baby', 'baby fine motor skills behind', 'baby not using hands well', 'fine motor development delayed', 'baby hand skills behind', 'toddler fine motor concerns', 'baby can\'t manipulate objects', 'fine motor milestones delayed', 'baby small motor skills', 'baby dexterity problems'],
  quickAnswer: 'Fine motor skills develop gradually from grasping rattles to using a pincer grip to scribbling and stacking. If your child seems behind in multiple fine motor areas, an occupational therapy evaluation can identify specific areas to work on. Many fine motor delays respond very well to targeted therapy and practice.',
  byAge: [
    { ageRange: '0-3 months', context: 'Babies at this age are just beginning to bring hands to midline and grasp objects placed in their hands. Fine motor skills are very basic. If your baby can grasp a rattle briefly, they are on track.' },
    { ageRange: '4-6 months', context: 'Your baby should be reaching for and grasping objects, transferring items between hands, and exploring with their mouth. If your baby shows no interest in reaching or cannot hold objects, mention it to your pediatrician.' },
    { ageRange: '6-9 months', context: 'Raking grasp, banging objects, and early finger feeding should be developing. If your baby is not using their hands to explore objects by 9 months, evaluation is recommended.' },
    { ageRange: '9-12 months', context: 'Pincer grasp (thumb and finger), pointing, and more precise manipulation should be emerging. If your baby cannot pick up small objects or shows limited hand use, discuss this with your doctor.' },
    { ageRange: '12-24 months', context: 'Stacking blocks, scribbling, turning pages, and using utensils should be developing. If your toddler is significantly behind in multiple fine motor areas, an occupational therapy evaluation can be very helpful.' },
  ],
  whenNormal: ['Your child is slightly behind in one fine motor area but on track in others.', 'Fine motor skills are developing but at a slower pace than peers.', 'Your child was premature and is tracking on adjusted age.', 'Your child recently started making progress in fine motor skills.'],
  whenToMention: ['Your child is behind in multiple fine motor areas for their age.', 'Your child shows no interest in manipulating or exploring objects.', 'Your child has difficulty with both fine and gross motor skills.'],
  whenToActNow: ['Your child has lost fine motor skills they previously had.', 'Your child\'s hands seem weak, stiff, or unable to function.'],
  relatedMilestones: ['fine-motor-grasp', 'fine-motor-pincer', 'fine-motor-stacking'],
  showSelfReferral: true,
  relatedConcernSlugs: ['delayed-fine-motor', 'delayed-pincer-grasp-development', 'baby-not-grasping-objects'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Hand and Finger Skills', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Hand-and-Finger-Skills-1.aspx' },
    { org: 'CDC', citation: 'CDC - Important Milestones by Age', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
    { org: 'NIH', citation: 'Case-Smith J. Fine Motor Outcomes in Preschool Children Who Receive Occupational Therapy. Am J Occup Ther. 2000;54(4)', url: 'https://pubmed.ncbi.nlm.nih.gov/10906126/' },
  ],
};
