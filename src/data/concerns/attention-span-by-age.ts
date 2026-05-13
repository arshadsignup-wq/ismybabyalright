import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'attention-span-by-age',
  title: 'Attention Span Expectations by Age',
  category: 'behavior',
  searchTerms: [
    'baby attention span',
    'toddler short attention span',
    'how long should baby focus',
    'toddler can\'t focus',
    'baby loses interest quickly',
    'normal attention span toddler',
    'toddler won\'t sit still for anything',
    'baby easily distracted',
  ],
  quickAnswer:
    'Young children naturally have very short attention spans, and this is completely normal. A general guideline is roughly 2-3 minutes of sustained focus per year of age, so a 2-year-old might focus for 4-6 minutes on a single activity. Attention span develops gradually over childhood and is strongly influenced by interest level, environment, and temperament.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns can briefly focus on high-contrast objects and faces for a few seconds to about a minute at a time. Their attention is largely reflexive and driven by novelty. It is completely normal for a young baby to look at something, look away, and then look back. This "gaze aversion" is how they regulate stimulation, not a sign of disinterest.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies begin to sustain attention a bit longer, especially for faces, voices, and brightly colored toys. They may focus on a toy or activity for 1-3 minutes before shifting to something else. They are also developing the ability to follow a moving object with their eyes, which is a building block for later sustained attention.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Attention spans grow as babies develop greater motor skills and can interact with objects more purposefully. You may see your baby focus on exploring a single toy for 2-5 minutes. Babies at this age are driven by curiosity and will move quickly between objects as they explore their world. This rapid shifting is a sign of healthy exploratory behavior, not a deficit.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers can typically focus on a preferred activity for about 3-6 minutes. They are still highly distractible and may abandon activities frequently. Joint attention, where a child focuses on something an adult is pointing to or showing them, becomes much stronger in this period and is an important developmental marker.',
    },
    {
      ageRange: '24-36 months',
      context:
        'By age 2-3, children may sustain focus for 5-8 minutes on activities they enjoy, such as playing with blocks, looking at books, or doing simple puzzles. They are still easily distracted by new stimuli. It is unrealistic to expect a toddler to sit and focus on a single adult-directed activity for long stretches. Child-led play typically produces the longest attention spans.',
    },
  ],
  whenNormal: [
    'Your baby or toddler shifts quickly between toys and activities but is engaged and curious throughout',
    'Your child focuses longer on activities they choose themselves versus activities directed by adults',
    'Attention span varies depending on how tired, hungry, or overstimulated your child is',
    'Your toddler can sit for a short book or activity but then needs to move and explore',
  ],
  whenToMention: [
    'Your toddler over 18 months shows no interest in any toys, books, or activities even briefly and seems to wander aimlessly',
    'Your child over 2 years cannot engage with a preferred activity for even 1-2 minutes despite being well-rested and calm',
    'You notice your child has difficulty with joint attention, such as not following your point or not looking where you look',
  ],
  whenToActNow: [
    'Your child shows a sudden and dramatic loss of ability to focus, which could indicate a seizure disorder or other neurological concern',
    'Extreme inattention is paired with a complete inability to respond to their name, loss of previously acquired skills, or no interest in people',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Cognitive Development: 8 to 12 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Cognitive-Development-8-to-12-Months.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By Two Years.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. How to Support Your Child\'s Developing Attention Span.',
      url: 'https://www.zerotothree.org/resource/how-to-support-your-childs-developing-attention-span/',
    },
  ],
};
