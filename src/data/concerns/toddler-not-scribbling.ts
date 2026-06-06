import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-not-scribbling',
  title: 'My Toddler Isn\'t Scribbling with Crayons',
  category: 'physical',
  searchTerms: ['toddler not scribbling', 'toddler won\'t use crayons', 'when do toddlers scribble', 'toddler not interested in drawing', 'toddler can\'t hold crayon', 'scribbling milestone toddler', 'toddler won\'t draw', 'toddler no interest in crayons', 'when should toddler scribble', 'toddler coloring delay'],
  quickAnswer: 'Scribbling with a crayon typically develops between 12-18 months. Many toddlers need to be shown how and given opportunities to practice. If your toddler shows no interest in making marks by 18 months or cannot hold a crayon at all, mention it to your pediatrician. Some children simply need more exposure and encouragement.',
  byAge: [
    { ageRange: '10-14 months', context: 'Some toddlers begin scribbling at this age, but many have not been introduced to crayons yet. If you offer a large crayon, your toddler may bang it, mouth it, or make accidental marks. Any mark-making at this age is a great start.' },
    { ageRange: '14-18 months', context: 'Most toddlers can make spontaneous scribble marks with a crayon by 15-18 months. The marks will be random lines and dots. If your toddler can hold a crayon but shows no interest in making marks, try drawing together and modeling. If they cannot hold a crayon at all, mention it to your pediatrician.' },
    { ageRange: '18-24 months', context: 'Scribbling should be well established. Your toddler should be able to make marks on paper with some control. If your child cannot scribble at all by 18 months, an occupational therapy evaluation may be helpful to assess grip and fine motor skills.' },
    { ageRange: '2-3 years', context: 'Scribbling becomes more purposeful, with imitation of lines and circles emerging around age 2-3. If your child is still not scribbling at all, evaluation of fine motor skills is recommended.' },
  ],
  whenNormal: ['Your toddler is under 15 months and has not had much crayon exposure.', 'Your toddler makes some marks but prefers other activities.', 'Your toddler holds the crayon in a fist grip, which is age-appropriate.', 'Scribbling is emerging and improving with practice.'],
  whenToMention: ['Your child is over 18 months and shows no ability to scribble.', 'Your child cannot hold a crayon or other writing tool.', 'Your child has difficulty with other fine motor tasks.'],
  whenToActNow: ['Your child has lost the ability to hold objects or use their hands.', 'Your child\'s hand function is declining.'],
  relatedMilestones: ['fine-motor-grasp', 'fine-motor-drawing'],
  showSelfReferral: true,
  relatedConcernSlugs: ['fine-motor-delay-general', 'toddler-poor-pencil-grip', 'delayed-fine-motor'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Hand and Finger Skills: 1 Year Old', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Hand-and-Finger-Skills-1-Year-Old.aspx' },
    { org: 'CDC', citation: 'CDC - Important Milestones: Your Child By 18 Months', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-18mo.html' },
    { org: 'NIH', citation: 'Schneck CM, Henderson A. Descriptive Analysis of the Developmental Progression of Grip Position. Am J Occup Ther. 1990;44(10)', url: 'https://pubmed.ncbi.nlm.nih.gov/2240250/' },
  ],
};
