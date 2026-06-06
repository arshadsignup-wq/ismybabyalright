import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-poor-pencil-grip',
  title: 'My Toddler Has an Immature Pencil Grip',
  category: 'physical',
  searchTerms: ['toddler pencil grip', 'toddler holds crayon wrong', 'toddler fist grip crayon', 'toddler immature grip', 'toddler grip development', 'when do toddlers hold pencils correctly', 'toddler palmar grasp crayon', 'toddler writing grip', 'pencil grip stages toddler', 'toddler grip pattern development'],
  quickAnswer: 'A fist grip on crayons is completely normal for toddlers. Grip patterns develop in stages from a full fist grip (12-18 months) to a digital pronate grip (2-3 years) to a mature tripod grip (4-6 years). There is no need to correct your toddler\'s grip - it will naturally mature with practice and development.',
  byAge: [
    { ageRange: '12-18 months', context: 'A full fist grip (palmar-supinate grasp) wrapping the whole hand around the crayon is the normal grip at this age. Your toddler colors with whole-arm movements. Do not attempt to correct this - it is developmentally appropriate.' },
    { ageRange: '18-24 months', context: 'Your toddler may transition to a digital-pronate grip, holding the crayon with fingers pointing down toward the paper. Some children still use a fist grip, which is fine. Coloring involves large movements from the elbow and shoulder.' },
    { ageRange: '2-3 years', context: 'A static tripod grip or modified grip may begin to emerge. Your child holds the crayon between thumb and fingers with more wrist movement. If your child still uses a full fist grip at age 3, mention it to your pediatrician.' },
    { ageRange: '3-4 years', context: 'A mature dynamic tripod grip (thumb, index, middle finger) typically develops around age 4-6. If your child\'s grip seems to limit their drawing and writing ability, occupational therapy can help.' },
  ],
  whenNormal: ['Your toddler uses a fist grip and is under 2.5 years old.', 'Your child\'s grip is gradually changing as they get older.', 'Your child can make marks and draw despite their grip pattern.', 'Your child switches between different grips.'],
  whenToMention: ['Your child is over 3 and still uses a full fist grip exclusively.', 'Your child has difficulty making marks or drawing due to grip.', 'Your child avoids drawing or coloring activities.'],
  whenToActNow: ['Your child has lost the ability to hold a crayon.', 'Your child has hand weakness or stiffness affecting grip.'],
  relatedMilestones: ['fine-motor-grasp', 'fine-motor-drawing'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-not-scribbling', 'fine-motor-delay-general', 'toddler-cant-use-scissors'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Fine Motor Development', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/default.aspx' },
    { org: 'NIH', citation: 'Schneck CM, Henderson A. Descriptive Analysis of the Developmental Progression of Grip Position for Pencil and Crayon Control. Am J Occup Ther. 1990;44(10)', url: 'https://pubmed.ncbi.nlm.nih.gov/2240250/' },
    { org: 'CDC', citation: 'CDC - Important Milestones: Your Child By 3 Years', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-3yr.html' },
  ],
};
