import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-mouthing-objects-after-12-months',
  title: 'My Baby Still Mouths Objects After 12 Months',
  category: 'physical',
  searchTerms: ['baby mouthing after 12 months', 'toddler still mouthing everything', 'toddler puts things in mouth', 'toddler oral exploration late', 'toddler mouthing objects', 'when does mouthing stop', 'toddler chewing non food items', 'late mouthing behavior toddler', 'toddler biting objects', 'toddler oral sensory seeking'],
  quickAnswer: 'Some mouthing after 12 months is normal, especially during teething or with new textures. However, if your toddler mouths objects constantly and intensely after 18 months, it may indicate oral sensory seeking behavior. This is often manageable with appropriate sensory strategies and does not necessarily indicate a developmental concern.',
  byAge: [
    { ageRange: '12-15 months', context: 'Some mouthing is still very normal at this age, especially during teething (molars come in around 13-19 months). Your toddler should also be exploring objects in other ways - shaking, banging, stacking. As long as mouthing is decreasing and other exploration is increasing, development is on track.' },
    { ageRange: '15-18 months', context: 'Mouthing should be decreasing. Your toddler may still mouth new or interesting textures occasionally, which is fine. If mouthing is still a primary exploration method, try redirecting to other sensory activities.' },
    { ageRange: '18-24 months', context: 'Persistent, frequent mouthing at this age is worth discussing with your pediatrician. It may indicate oral sensory seeking or developmental differences. Providing appropriate chew toys and oral sensory input can help redirect the behavior.' },
    { ageRange: '2-3 years', context: 'Regular mouthing of non-food objects at this age warrants evaluation. An occupational therapist can assess whether there are sensory processing differences and provide strategies. Some children need extra oral sensory input and benefit from chewy tubes or crunchy foods.' },
  ],
  whenNormal: ['Your toddler occasionally mouths objects during teething.', 'Mouthing is decreasing over time and other play is increasing.', 'Your toddler mouths new textures briefly then explores in other ways.', 'Your child is under 18 months.'],
  whenToMention: ['Your child is over 18 months and frequently mouths non-food objects.', 'Mouthing is not decreasing over time.', 'Your child mouths objects to the exclusion of age-appropriate play.'],
  whenToActNow: ['Your child has suddenly started mouthing everything after not doing so.', 'Your child is ingesting non-food items (pica).'],
  relatedMilestones: ['sensory-development', 'fine-motor-manipulation'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-mouth-exploring-everything', 'toddler-sensory-motor-play-avoidance'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Oral Sensory Processing in Toddlers', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/default.aspx' },
    { org: 'CDC', citation: 'CDC - Important Milestones: Your Child By 18 Months', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-18mo.html' },
    { org: 'NIH', citation: 'Dunn W. The Sensory Profile: Examiner Manual. Psychological Corporation. 1999', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
