import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'not-understanding-no',
  title: 'My Baby Doesn\'t Understand \'No\'',
  category: 'communication',
  searchTerms: [
    'baby doesn\'t understand no',
    'baby ignores when I say no',
    'baby doesn\'t respond to no',
    'when do babies understand no',
    'baby not listening to no',
    'baby doesn\'t stop when I say no',
    'baby doesn\'t understand words',
    'receptive language delay',
    'baby doesn\'t follow directions',
    'baby doesn\'t understand me',
  ],
  quickAnswer:
    'Most babies begin to understand "no" between 9 and 12 months, often pausing or looking at you when they hear it  -  though they may not actually stop what they\'re doing. If your baby shows no response at all to "no" or other simple words by 12-15 months, it\'s worth checking their hearing and receptive language skills.',
  byAge: [
    {
      ageRange: '6-9 months',
      context:
        'At this age, babies are just beginning to connect words with meaning. They might recognize their name and pause when you say "no" in a firm tone, but they won\'t reliably stop an action. What you\'re looking for is any sign they\'re processing language  -  turning toward you, pausing, or changing their expression. Full comprehension and compliance aren\'t expected yet.',
    },
    {
      ageRange: '10-12 months',
      context:
        'By around 12 months, most babies understand "no" well enough to pause or look at you when they hear it, even if they immediately go back to what they were doing. This is normal  -  understanding comes before self-control. If your baby shows no reaction at all to "no," it may mean they\'re not processing the word, which could signal a hearing or language issue.',
    },
    {
      ageRange: '13-18 months',
      context:
        'Toddlers this age understand "no" and many other words, but impulse control is still developing. They might look at you, smile, and keep doing the forbidden thing anyway  -  that\'s testing boundaries, not a language problem. The key is whether they show they understand  -  a pause, eye contact, or a mischievous grin. If they seem genuinely confused by simple words, mention it to your pediatrician.',
    },
    {
      ageRange: '19-24 months',
      context:
        'By 2 years, your toddler should clearly understand "no" and many simple instructions, even if they don\'t always obey. If they don\'t follow any simple directions ("come here," "give me the ball") or seem confused by everyday language, a speech and language evaluation is a good idea. Receptive language delays can be subtle but have a big impact on learning and behavior.',
    },
  ],
  whenNormal: [
    'Your baby pauses or looks at you when you say "no," but then keeps doing what they were doing  -  they understand, they just don\'t have impulse control yet.',
    'Your baby responds to "no" sometimes but not always  -  consistency is hard for young toddlers, especially when they\'re excited or focused.',
    'Your baby understands "no" in context (like when reaching for something hot) but not when it\'s said randomly  -  context helps babies learn word meanings.',
    'Your baby is under 12 months and doesn\'t respond to "no" yet, but they turn to their name and react to other sounds.',
  ],
  whenToMention: [
    'Your baby is over 12 months and shows no response to "no" or their name  -  no pause, no turning, no acknowledgment.',
    'Your baby doesn\'t seem to understand any words at all by 15 months  -  not "mama," "dada," "bottle," or "no."',
    'Your baby used to respond to "no" and has stopped reacting to it or other words.',
    'Your baby doesn\'t follow simple instructions like "come here" or "give it to me" by 18 months.',
  ],
  whenToActNow: [
    'Your baby is over 18 months and doesn\'t respond to any language  -  not their name, "no," or simple directions.',
    'Your baby has lost the ability to understand words they previously seemed to know.',
    'Your baby doesn\'t respond to sounds or voices at all  -  hearing should be checked immediately.',
  ],
  relatedMilestones: [
    'language-receptive',
    'language-responds-to-name',
    'language-follows-simple-directions',
    'cognitive-understands-object-names',
    'social-emotional-joint-attention',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC  -  Important Milestones: Your Child By 12 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-12mo.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Language Development: 8 to 12 Months',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Language-Development-8-to-12-Months.aspx',
    },
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association  -  How Does Your Child Hear and Talk?',
      url: 'https://www.asha.org/public/speech/development/chart/',
    },
  ],
};
