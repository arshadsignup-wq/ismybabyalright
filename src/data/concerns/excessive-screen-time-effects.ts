import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'excessive-screen-time-effects',
  title: 'Excessive Screen Time Effects on Baby',
  category: 'behavior',
  searchTerms: [
    'too much screen time baby',
    'screen time effects on baby',
    'screen time and development',
    'toddler watches too much TV',
    'baby addicted to phone',
    'screen time guidelines baby',
    'screen time and speech delay',
    'how much screen time is too much',
    'toddler screen time tantrum',
    'tablet effects on toddler',
    'screen time and behavior problems',
  ],
  quickAnswer:
    'The AAP recommends avoiding screen time (except video chatting) for children under 18 months and limiting it to 1 hour per day of high-quality programming for children 2-5. Excessive screen time in young children has been associated with language delays, attention difficulties, and sleep disruption. If your child has been getting more screen time than recommended, the good news is that reducing screen time and increasing interactive play can make a meaningful difference at any point.',
  byAge: [
    {
      ageRange: '0-18 months',
      context:
        'The AAP recommends no screen time other than video chatting for babies under 18 months. At this age, babies learn best through face-to-face interaction, physical exploration, and responsive caregiving. Research shows that babies under 18 months generally cannot learn from screens the way they learn from real-world interaction. If your baby has had some screen exposure, do not feel guilty - simply focus on increasing interactive activities going forward.',
    },
    {
      ageRange: '18 months - 2 years',
      context:
        'Between 18 and 24 months, children begin to learn from high-quality educational media when a parent watches with them and reinforces the content. The key is co-viewing - watching together and talking about what you see. Short, high-quality programs (like Sesame Street) are very different from passive YouTube scrolling. If your toddler has been watching a lot of screens, gradually reduce by replacing screen time with hands-on play.',
    },
    {
      ageRange: '2-3 years',
      context:
        'The AAP recommends no more than 1 hour per day of high-quality programming at this age. If your toddler has tantrums when screens are turned off, this is common and does not mean they are "addicted" - it means screens are highly stimulating and everything else feels boring by comparison. Establishing consistent screen rules, using timers, and transitioning to a favorite activity afterward can help. It takes about 2 weeks of consistent limits for the protests to decrease significantly.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Continue limiting to 1 hour per day of high-quality content. At this age, interactive educational apps can have some benefit when used in moderation, but they should not replace physical play, outdoor time, reading, and social interaction. If you notice your child has difficulty paying attention to non-screen activities, becomes very agitated when screens are removed, or has reduced interest in imaginative play, these are signs to reduce screen time further.',
    },
  ],
  whenNormal: [
    'Your child watches some educational programming and is meeting developmental milestones on track',
    'Your toddler protests when the TV is turned off but settles into another activity within a few minutes',
    'Screen time increases temporarily during illness, travel, or particularly difficult days - this is real life, and occasional flexibility is fine',
    'Your child also engages enthusiastically in non-screen activities like playing, reading, and outdoor time',
  ],
  whenToMention: [
    'Your child seems to have no interest in toys, books, or interactive play and only wants screens',
    'You notice your child\'s language development seems delayed and they have been getting significant daily screen time',
    'Your child has extreme meltdowns when screens are removed that last 30 minutes or more and seem to be getting worse',
  ],
  whenToActNow: [
    'Your child is showing signs of developmental delay in language or social skills and has had extensive screen exposure - early intervention can help regardless of the cause',
    'Screen time is interfering with sleep, eating, or basic daily functioning and you need help establishing limits',
  ],
  relatedMilestones: [
    'language-expressive',
    'language-receptive',
    'social-emotional-regulation',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Media and Young Minds. Pediatrics, 2016.',
      url: 'https://www.healthychildren.org/English/family-life/Media/Pages/Where-We-Stand-TV-Viewing-for-Children.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Family Media Plan. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/fmp/Pages/MediaPlan.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Screen Time and Children. MedlinePlus.',
      url: 'https://medlineplus.gov/screentime.html',
    },
  ],
};
