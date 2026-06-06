import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-selective-hearing-vs-real',
  title: 'Is My Toddler Ignoring Me or Can\'t They Hear?',
  category: 'communication',
  searchTerms: [
    'toddler selective hearing',
    'toddler ignoring me or can\'t hear',
    'toddler not listening vs hearing loss',
    'toddler ignores when called',
    'is toddler deaf or ignoring',
    'toddler pretending not to hear',
    'toddler selective hearing vs hearing loss',
    'toddler doesn\'t respond sometimes',
    'toddler hearing problem or behavior',
    'how to tell if toddler can\'t hear',
  ],
  quickAnswer:
    'It can be hard to tell whether a toddler is deliberately ignoring you or genuinely cannot hear well. True selective listening is common in toddlers who are absorbed in play. However, if your child consistently does not respond to their name, needs the TV turned up loud, or seems to hear in some situations but not others, a hearing test can rule out actual hearing loss. When in doubt, a hearing evaluation is a simple, non-invasive first step.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Toddlers at this age can become deeply absorbed in activities and genuinely not process what you are saying. This is normal attention development. However, a child who rarely responds to their name or loud sounds should have their hearing checked.',
    },
    {
      ageRange: '18-24 months',
      context:
        'The "terrible twos" begin, and toddlers may deliberately ignore instructions they do not want to follow. True selective listening shows a pattern: your child responds to interesting things like a treat being offered but ignores requests to clean up. True hearing loss is more consistent.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Toddlers are developing autonomy and may intentionally not respond as an assertion of independence. Key differences from hearing loss: a hearing child responds to whispered treats, turns to unexpected sounds, and reacts to their name when you are behind them.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Children are better able to deliberately ignore, but they should consistently respond to their name and to conversational speech across a room. If your child needs you to repeat things frequently or seems to misunderstand what you say, a hearing test is warranted.',
    },
    {
      ageRange: '4-5 years',
      context:
        'Hearing issues at this age may present as difficulty following multi-step directions or misunderstanding speech in noisy environments. A comprehensive hearing evaluation can identify mild or fluctuating hearing losses that may have been missed.',
    },
  ],
  whenNormal: [
    'Your toddler responds when you offer something interesting but ignores requests to stop playing',
    'Your toddler is deeply absorbed in an activity and does not respond until you are at their level',
    'Your toddler looks up at unexpected sounds but ignores repetitive requests',
    'Your toddler responds well in quiet settings but seems less responsive in noisy environments',
  ],
  whenToMention: [
    'Your toddler frequently does not respond to their name even in a quiet room',
    'Your toddler needs the TV volume higher than seems necessary',
    'Your toddler says "what?" or "huh?" frequently even when you are speaking directly to them',
  ],
  whenToActNow: [
    'Your toddler shows no response to loud unexpected sounds',
    'Your toddler\'s responsiveness to sound has decreased suddenly or progressively',
  ],
  relatedMilestones: ['hearing', 'responds-to-name', 'follows-directions', 'language-comprehension'],
  showSelfReferral: true,
  relatedConcernSlugs: ['hearing-loss-signs-baby', 'toddler-hearing-fluctuating', 'not-responding-to-name'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hearing Loss in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Hearing-Loss.aspx',
    },
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Hearing Screening.',
      url: 'https://www.asha.org/public/hearing/hearing-screening/',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Hearing Loss in Children.',
      url: 'https://www.nidcd.nih.gov/health/hearing-loss-children',
    },
  ],
};
