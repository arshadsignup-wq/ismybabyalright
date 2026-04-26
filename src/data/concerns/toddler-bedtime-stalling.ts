import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-bedtime-stalling',
  title: 'Toddler Bedtime Stalling',
  category: 'sleep',
  searchTerms: [
    'toddler bedtime stalling',
    'toddler stalling at bedtime',
    'toddler asks for water at bedtime',
    'toddler won\'t go to bed',
    'toddler bedtime battles',
    'toddler keeps asking for one more thing',
    'toddler bedtime excuses',
    'toddler delaying bedtime',
    'how to stop bedtime stalling',
    'toddler bedtime routine too long',
    'toddler needs another hug at bedtime',
  ],
  quickAnswer:
    'Bedtime stalling is one of the most common toddler behaviors and is a normal part of development. Your toddler is testing boundaries and exercising their growing independence. A predictable routine with clear, loving limits and built-in choices helps reduce stalling significantly.',
  byAge: [
    {
      ageRange: '1-2 years',
      context:
        'Early bedtime resistance at this age is often about separation anxiety rather than true stalling. Your toddler may cry, cling, or protest when you leave the room. A consistent, comforting routine with a clear endpoint helps. A brief "I\'ll check on you in a few minutes" can ease the transition.',
    },
    {
      ageRange: '2-3 years',
      context:
        'This is peak stalling age. Your toddler now has the language skills to make requests - "one more story," "I need water," "I have to go potty." Build these common requests into the routine proactively: offer water, do a last potty trip, and read the agreed number of books. Then hold the boundary with warmth. A visual bedtime chart can help your toddler see and anticipate each step.',
    },
    {
      ageRange: '3+ years',
      context:
        'Older toddlers and preschoolers become creative stallers. They may develop fears, ask philosophical questions, or discover new "needs." Continue with a clear routine, validate their feelings briefly, and be consistent. An "okay to wake" clock that turns green when it is morning can help children understand when bedtime is over.',
    },
  ],
  whenNormal: [
    'Your toddler asks for one more story, one more hug, or one more drink of water',
    'Bedtime takes 20-30 minutes from routine start to lights out',
    'Stalling increases during times of change such as a new sibling, starting school, or moving',
    'Your toddler protests leaving a fun activity for bedtime',
    'Some nights are smoother than others with no clear pattern',
  ],
  whenToMention: [
    'Bedtime consistently takes over an hour despite a clear routine and boundaries, leaving your child significantly sleep deprived',
    'Your toddler shows extreme anxiety or panic at bedtime that goes beyond normal stalling behavior',
    'Stalling is accompanied by new fears, nightmares, or behavioral changes during the day',
  ],
  whenToActNow: [
    'Your toddler is so sleep deprived from bedtime battles that they are falling asleep in dangerous situations or showing signs of developmental concern',
    'Bedtime is causing such distress that you are concerned about your own mental health or your child\'s emotional wellbeing',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bedtime Trouble. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Bedtime-Trouble.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Toddler Sleep. SleepFoundation.org.',
      url: 'https://www.sleepfoundation.org/toddler-sleep',
    },
  ],
};
