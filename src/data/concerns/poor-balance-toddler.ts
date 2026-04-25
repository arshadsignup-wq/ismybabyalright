import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'poor-balance-toddler',
  title: 'My Toddler Has Poor Balance',
  category: 'physical',
  searchTerms: [
    'toddler poor balance',
    'child falls a lot',
    'toddler clumsy',
    'toddler unsteady walking',
    'child falls constantly',
    'toddler balance problems',
    'child trips all the time',
    'toddler wobbly walking',
  ],
  quickAnswer:
    'Toddlers are naturally clumsy  -  learning to walk, run, and navigate the world is hard work, and falls are a normal part of the process. Most kids take months to walk confidently and years to have truly good balance. However, if your toddler falls constantly, always to one side, or seems much more unsteady than other kids their age, it\'s worth having their pediatrician take a look.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Brand-new walkers are supposed to be wobbly. Your toddler is still building the muscle strength, coordination, and confidence needed for smooth walking. Falls are expected and frequent  -  sometimes every few steps. As long as your child is making progress (walking more steadily over weeks and months) and can get back up and keep trying, this is all part of normal development.',
    },
    {
      ageRange: '19-24 months',
      context:
        'Your toddler should be walking much more confidently by now and starting to run (even if it\'s more of a fast, stiff-legged trot). They\'ll still fall sometimes, especially when tired, on uneven surfaces, or when trying something new. If your toddler is falling multiple times every single day, can\'t walk across a room without losing balance, or seems to be getting worse rather than better, mention it to your doctor.',
    },
    {
      ageRange: '2-3 years',
      context:
        'At this age, your child should be able to walk and run fairly well, climb stairs with support, and start to jump (even if it\'s more of a hop). Some kids are naturally more cautious or less coordinated than others, and that\'s okay. But if your child seems dramatically more unsteady than other kids their age, falls constantly, or avoids physical activities because of balance issues, ask your pediatrician whether an evaluation with a physical therapist might help.',
    },
    {
      ageRange: '3+ years',
      context:
        'By this age, most kids can run smoothly, go up and down stairs, pedal a tricycle, and balance on one foot for a second or two. If your child is still falling frequently, has trouble with basic activities like walking across a room or climbing playground equipment, or seems to tire very easily from physical activity, talk to your doctor about whether physical or occupational therapy could help build strength and coordination.',
    },
  ],
  whenNormal: [
    'Your toddler is a new walker (under 18 months) and falls often but is making steady progress.',
    'Your child falls more when tired, rushing, or on uneven surfaces, but can walk steadily when calm and rested.',
    'Falls are getting less frequent over time as your child gains experience and confidence.',
    'Your child gets back up after falls, doesn\'t seem hurt or scared, and keeps moving.',
  ],
  whenToMention: [
    'Your toddler is over 2 years old and still falls multiple times every day even on flat, familiar surfaces.',
    'Your child consistently falls to one particular side or in one direction.',
    'Balance seems to be getting worse over time rather than improving.',
    'Your child avoids running, climbing, or other physical activities that peers enjoy.',
    'Falls are accompanied by other concerns like delayed speech, difficulty with fine motor skills, or low muscle tone.',
  ],
  whenToActNow: [
    'Sudden onset of balance problems in a child who was previously walking well  -  this needs immediate evaluation.',
    'Balance problems are accompanied by weakness, difficulty waking up, severe headaches, or vomiting.',
    'Your child loses consciousness during or after a fall, or seems disoriented and confused.',
  ],
  relatedMilestones: [
    'gross-motor-walking',
    'gross-motor-running',
    'gross-motor-climbing',
    'gross-motor-jumping',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC  -  Developmental Milestones: Movement and Physical Development',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Movement Milestones: 2 to 3 Years',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Movement-2-to-3-Years.aspx',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three  -  Toddler Motor Development and When to Seek Help',
      url: 'https://www.zerotothree.org/resource/your-childs-development-movement-and-coordination/',
    },
  ],
};
