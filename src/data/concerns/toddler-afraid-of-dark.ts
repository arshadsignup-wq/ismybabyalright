import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-afraid-of-dark',
  title: 'Toddler Afraid of the Dark',
  category: 'sleep',
  searchTerms: [
    'toddler afraid of the dark',
    'child scared of dark',
    'toddler won\'t sleep in dark room',
    'toddler fear of dark',
    'nightlight for toddler',
    'child afraid to sleep alone',
    'toddler cries in dark',
    'when do kids fear the dark',
    'how to help child afraid of dark',
    'toddler needs light to sleep',
  ],
  quickAnswer:
    'Fear of the dark is one of the most common childhood fears and typically emerges between ages 2-4 as your child\'s imagination develops. It is a sign of healthy cognitive growth, not a problem. A warm nightlight, a comforting routine, and validating their feelings (without overdoing reassurance) usually helps them feel safe.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Babies under 12 months are not afraid of the dark. In fact, darkness supports melatonin production and better sleep. If your baby fusses in a dark room, it is more likely about separation or needing comfort rather than fear of darkness itself. A very dark room is actually ideal for infant sleep.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Some toddlers begin showing mild unease with darkness toward the end of this age range. Their growing imagination allows them to start creating mental images that can feel scary. A small, warm-toned nightlight (red or orange rather than blue or white) provides comfort without significantly disrupting melatonin production.',
    },
    {
      ageRange: '2-3 years',
      context:
        'This is the peak age for fear of the dark to emerge. Your child\'s imagination is booming, but they cannot yet fully distinguish fantasy from reality. Validate their feelings - "I understand it feels scary" - without reinforcing the fear. Offer a nightlight, a special protector toy, and keep the bedtime routine calm and reassuring. Avoid monster checks, as they can accidentally confirm that monsters are real.',
    },
    {
      ageRange: '3+ years',
      context:
        'Fear of the dark may persist or intensify as imagination grows. Creative coping strategies work well at this age - "magic spray" (water in a spray bottle), a flashlight to keep by the bed, or a glow-in-the-dark star ceiling. Teach your child simple breathing exercises. Gradual exposure during daytime (playing in dim rooms) can also help build confidence.',
    },
  ],
  whenNormal: [
    'Your toddler asks for a nightlight or expresses unease about darkness starting around age 2-3',
    'Fear of the dark is worse during times of change or stress',
    'Your child settles with the help of a nightlight, comfort object, or brief reassurance',
    'Fear gradually decreases as your child matures and can distinguish real from imaginary',
    'Your child is otherwise happy and well-adjusted during the day',
  ],
  whenToMention: [
    'Fear of the dark is so intense that your child cannot fall asleep even with nightlights and reassurance, causing chronic sleep deprivation',
    'The fear extends to daytime activities - your child avoids dark rooms, closets, or becomes generally anxious',
    'Fear of the dark is accompanied by other new fears, regression, or behavioral changes',
  ],
  whenToActNow: [
    'Your child has severe panic reactions to darkness including hyperventilating, vomiting, or uncontrollable shaking',
    'Fear seems connected to a specific traumatic event and is getting worse rather than better',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fears and Phobias in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/Fears-and-Phobias.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Child Development - Preschoolers.',
      url: 'https://www.cdc.gov/child-development/about/preschoolers-3-5-years.html',
    },
  ],
};
