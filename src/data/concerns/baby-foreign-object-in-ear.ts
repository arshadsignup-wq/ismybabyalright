import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-foreign-object-in-ear',
  title: 'Baby Put Something in Their Ear',
  category: 'physical',
  searchTerms: [
    'toddler put something in ear',
    'baby foreign object in ear',
    'toddler bead in ear',
    'toddler stuck something in ear',
    'toddler food in ear',
    'toddler toy in ear',
    'how to get object out of baby ear',
    'toddler insect in ear',
    'baby bug in ear',
    'toddler ear pain after putting something in',
  ],
  quickAnswer:
    'Toddlers sometimes insert small objects into their ear canals - beads, small food, crayon tips, small toy parts, and occasionally insects fly or crawl in. Unlike nasal foreign bodies, ear foreign bodies should almost always be removed by a medical professional because the ear canal is narrow and the eardrum can be easily damaged. Do not try to remove objects with tweezers, cotton swabs, or your fingers, as you are likely to push them deeper.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Babies under 1 year rarely insert objects in their own ears. However, an older sibling could place something in a baby\'s ear. If you notice your baby suddenly fussy, pawing at one ear, or if you see something lodged in the ear canal, seek medical evaluation. Do not attempt removal at home.',
    },
    {
      ageRange: '1-3 years',
      context:
        'This is the most common age for ear foreign bodies. Your toddler may tell you they put something in their ear, or you might notice ear pain, decreased hearing on one side, or drainage from one ear. If an insect is in the ear and your child is distressed by the buzzing or movement, you can try flooding the ear canal with warm (not hot) mineral oil or olive oil to kill the insect before seeking removal. For all other objects, go to your pediatrician or urgent care.',
    },
  ],
  whenNormal: [
    'Your child is calm and the object is visible near the ear canal opening without pain',
    'A small amount of ear wax is dislodged during the removal process',
  ],
  whenToMention: [
    'You suspect something is in your child\'s ear but cannot see it',
    'Your child is complaining of ear fullness or muffled hearing',
    'Your child has a new, unexplained discharge from one ear',
  ],
  whenToActNow: [
    'A button battery is in the ear (this is an emergency - chemical burns can occur within hours)',
    'There is significant pain, bleeding, or hearing loss after something was placed in the ear',
    'Your child has a live insect in the ear causing severe distress',
    'Your child pushed the object deeper while trying to remove it themselves',
    'There is drainage of pus or blood from the ear canal',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['ear-infections', 'baby-ear-pulling', 'baby-ear-wax-buildup', 'baby-foreign-object-in-nose'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Foreign Bodies in the Ear. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Foreign-Body-Ear.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Library of Medicine. Ear Foreign Body. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK459136/',
    },
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Ear Care. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/default.aspx',
    },
  ],
};
