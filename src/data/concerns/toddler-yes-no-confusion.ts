import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-yes-no-confusion',
  title: 'Toddler Can\'t Use Yes and No Correctly',
  category: 'communication',
  searchTerms: [
    'toddler yes no confusion', 'toddler says yes when means no', 'toddler can\'t say yes',
    'toddler doesn\'t understand yes no', 'toddler always says no', 'toddler can\'t answer yes or no',
    'toddler yes no mixed up', 'toddler doesn\'t nod yes', 'when do toddlers understand yes no',
    'toddler yes no questions difficulty',
  ],
  quickAnswer:
    'Understanding and using "yes" and "no" develops gradually. Most toddlers learn "no" first (around 12 to 18 months) and "yes" later (around 18 to 24 months). Confusing yes and no, or always saying no regardless of what they mean, is common in toddlers under 2.5. If your child still cannot reliably use yes and no to answer simple questions by age 3, this may indicate a comprehension difficulty.',
  byAge: [
    { ageRange: '12-18 months', context: '"No" is often one of the first words, used both correctly and as a default response. Head shaking for no may appear before the word. "Yes" is harder because it is less salient in adult speech. Not using "yes" at this age is completely normal.' },
    { ageRange: '18-24 months', context: 'Head nodding for "yes" and verbal "yes" or "yeah" typically emerge. Some toddlers still say "no" when they mean "yes" because "no" is more practiced. This confusion is common and usually resolves with time.' },
    { ageRange: '24-30 months', context: 'Most toddlers can reliably use yes and no to answer simple questions like "Do you want juice?" They may still make errors when the question is more abstract. The meaning of yes/no should be understood even if usage is imperfect.' },
    { ageRange: '30-36 months', context: 'Yes/no should be used correctly and consistently for simple preference and factual questions. If your child still seems genuinely confused about what yes and no mean by this age, a language evaluation may be helpful.' },
    { ageRange: '3-4 years', context: 'Reliable yes/no responses are expected. Children should be able to answer yes/no questions about their experiences, preferences, and simple facts. Persistent confusion may indicate a receptive language difficulty.' },
  ],
  whenNormal: [
    'Your toddler is under 2 and uses "no" for everything, including when they want something',
    'Your toddler says "no" reflexively but then takes the offered item, showing they meant yes',
    'Your toddler is learning to nod for yes and occasionally gets confused',
    'Your toddler uses yes and no correctly for preferences but gets confused on factual questions',
  ],
  whenToMention: [
    'Your toddler is over 2.5 and still genuinely cannot distinguish yes from no',
    'Your toddler always echoes the last word of a yes/no question rather than responding meaningfully',
    'Your toddler cannot indicate preferences through yes/no even nonverbally',
  ],
  whenToActNow: [
    'Your toddler shows no understanding of yes/no concepts by age 3 as part of broader comprehension difficulties',
    'Your toddler previously used yes/no correctly and has lost this ability',
  ],
  relatedMilestones: ['language-comprehension', 'conversation-skills', 'vocabulary-growth'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-wh-questions-difficulty', 'delayed-receptive-language', 'not-understanding-no'],
  sources: [
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. One to Two Years: Communication Development.', url: 'https://www.asha.org/public/speech/development/12/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Language Development. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Communication Development in Toddlers.', url: 'https://www.zerotothree.org/resource/from-babbling-to-books/' },
  ],
};
