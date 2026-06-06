import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-mouth-exploring-everything',
  title: 'My Baby Mouths Everything',
  category: 'physical',
  searchTerms: ['baby mouths everything', 'baby puts everything in mouth', 'baby oral exploration', 'baby chewing on everything', 'baby mouthing toys', 'is mouthing normal baby', 'baby oral fixation', 'when do babies stop mouthing', 'baby exploring with mouth', 'baby biting toys'],
  quickAnswer: 'Mouthing objects is a completely normal and important way for babies to explore the world. Babies use their mouths as sensory organs because the mouth has more nerve endings than the hands. Mouthing peaks around 6-9 months and typically decreases significantly by 12-18 months, though some mouthing is normal well into toddlerhood.',
  byAge: [
    { ageRange: '3-6 months', context: 'Mouthing everything is completely normal and important at this age. Your baby learns about objects through their mouth - texture, temperature, shape, and taste. This is not a cause for concern; it is healthy sensory exploration. Make sure objects are safe for mouthing.' },
    { ageRange: '6-9 months', context: 'This is peak mouthing age. Your baby puts everything in their mouth, and this is still completely normal. Mouthing also provides relief during teething. Continue to ensure objects are safe and mouthing-appropriate.' },
    { ageRange: '9-12 months', context: 'Mouthing should begin to decrease as your baby develops more sophisticated hand exploration - turning, poking, banging, and shaking objects. Some mouthing is still normal, but your baby should also explore objects in other ways.' },
    { ageRange: '12-24 months', context: 'Mouthing should be decreasing significantly. While occasional mouthing is still normal, persistent, constant mouthing after 12-18 months may indicate sensory seeking behavior or developmental differences worth discussing with your pediatrician.' },
  ],
  whenNormal: ['Your baby is under 12 months and mouths objects as primary exploration.', 'Your baby mouths some things but also explores objects with hands.', 'Mouthing is gradually decreasing over time.', 'Your baby mainly mouths teething toys or when teething.'],
  whenToMention: ['Your child is over 18 months and still mouths everything constantly.', 'Your child mouths non-food objects intensely and cannot be redirected.', 'Your child mouths objects to the exclusion of other play.'],
  whenToActNow: ['Your child suddenly starts mouthing everything after a period of not doing so.', 'Your child seems to be in oral pain or has mouth sores alongside mouthing.'],
  relatedMilestones: ['fine-motor-grasp', 'sensory-development'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-mouthing-objects-after-12-months', 'toddler-sensory-motor-play-avoidance'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Ages and Stages: Oral Exploration', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx' },
    { org: 'CDC', citation: 'CDC - Important Milestones by Age', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
    { org: 'NIH', citation: 'Rochat P. Object Manipulation and Exploration in 2 to 5 Month Old Infants. Dev Psychol. 1989;25(6)', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
