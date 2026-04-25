import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'not-following-two-step-commands',
  title: 'My Toddler Doesn\'t Follow Two-Step Commands',
  category: 'communication',
  searchTerms: [
    'toddler not following two step directions',
    'toddler doesn\'t follow instructions',
    'child can\'t follow two step commands',
    'toddler not understanding directions',
    'toddler ignoring commands',
    'when should toddler follow instructions',
    'toddler receptive language delay',
    'toddler doesn\'t listen to directions',
    'child not following multi step directions',
    'toddler only follows one step commands',
  ],
  quickAnswer:
    'Following two-step commands (like "Pick up the ball and bring it to me") typically develops between 24 and 30 months. Before that, toddlers generally handle one-step instructions. If your child follows single commands well but struggles with two-part instructions, they may just need more time and practice.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'At this age, toddlers are expected to follow only simple, one-step commands, especially when paired with gestures  -  like "Give me the cup" while you hold your hand out. Two-step commands are not expected yet. Focus on whether your child understands and responds to basic requests consistently.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Toddlers in this range begin to understand more complex language and may start following two related steps, especially if the steps are part of a routine ("Get your shoes and come here"). However, many toddlers this age still need instructions broken into single steps. As long as they\'re reliably following one-step commands and their receptive vocabulary is growing, development is on track.',
    },
    {
      ageRange: '24-30 months',
      context:
        'This is when most children begin following two-step unrelated commands ("Pick up the book and close the door"). If your child consistently struggles with this by 30 months  -  even when they\'re paying attention and the instructions are clear  -  it may indicate a receptive language delay worth evaluating. Keep in mind that distractibility, not lack of understanding, is often the real reason toddlers miss multi-step directions.',
    },
    {
      ageRange: '30-36 months',
      context:
        'By 3 years old, most children can follow two- and even some three-step commands. If your child still relies on single-step instructions at this age and seems to lose track of what was asked, a speech-language evaluation focusing on receptive language can help identify whether there\'s a processing issue and provide strategies.',
    },
  ],
  whenNormal: [
    'Your toddler is under 24 months and reliably follows one-step commands  -  two-step instructions aren\'t expected yet.',
    'Your toddler follows two-step commands in familiar routines (like bedtime) but struggles with novel combinations  -  context helps at this age.',
    'Your toddler gets distracted mid-task but clearly understood the first step  -  this is an attention issue, not a comprehension issue.',
    'Your toddler follows two-step commands inconsistently  -  some days better than others, which is typical during the learning phase.',
  ],
  whenToMention: [
    'Your child is over 30 months and consistently can\'t follow two-step directions, even with clear, simple language and no distractions.',
    'Your child struggles to follow even one-step commands reliably after 18 months, especially without gestural cues.',
    'Your child seems to understand individual words but can\'t process them together in a sentence.',
  ],
  whenToActNow: [
    'Your child is over 24 months and doesn\'t seem to understand simple language at all  -  not responding to their name, not following any verbal instructions, and not identifying familiar objects when named.',
    'Your child previously followed directions but has stopped  -  any loss of receptive language skills warrants prompt evaluation.',
  ],
  relatedMilestones: [
    'language-receptive',
    'language-two-word-phrases',
    'social-emotional-joint-attention',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Typical Speech and Language Development.',
      url: 'https://www.asha.org/public/speech/development/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Language Delays in Toddlers: Information for Parents. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Delay.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By Two Years.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
    },
  ],
};
