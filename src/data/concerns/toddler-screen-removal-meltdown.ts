import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-screen-removal-meltdown',
  title: 'Toddler Meltdowns When Screens Are Taken Away',
  category: 'behavior',
  searchTerms: [
    'toddler tantrum when TV turned off',
    'toddler meltdown taking away iPad',
    'toddler screams when screen removed',
    'how to take away screen from toddler',
    'toddler addicted to phone tantrums',
    'screen time tantrum toddler',
    'toddler freaks out when tablet taken',
    'how to reduce screen time toddler tantrums',
    'toddler aggressive when screen turned off',
    'weaning toddler off screen time',
  ],
  quickAnswer:
    'Intense toddler reactions when screens are removed are extremely common and, while alarming, are not a sign of true addiction in the clinical sense. Screens provide high levels of sensory stimulation (rapid visuals, bright colors, music) that trigger dopamine release in the brain. When this stimulation stops abruptly, the transition to lower-stimulation reality can feel like a crash for toddlers whose emotional regulation skills are still developing. A 2023 University of Michigan study found that toddlers who watched more than 1 hour of screen time daily had significantly more emotional dysregulation during transitions. Strategies to reduce meltdowns: use a visual timer so the child can see "time is ending," give a 5-minute and 1-minute warning before turning off, transition to a preferred non-screen activity rather than simply removing the screen, avoid using screens during transitions (before meals, bedtime), and set consistent daily limits so the child learns the routine. Gradual reduction (5 fewer minutes per day) is more effective than sudden elimination.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'At this age, tantrums when screens are removed are primarily about the loss of a preferred stimulus — similar to how a toddler might tantrum when a favorite toy is taken. The emotional reaction is developmentally appropriate, though the intensity may seem disproportionate. Prevention is the most effective strategy: avoid establishing screen time as a daily habit at this age (the AAP recommends no screens before 18-24 months except video chat). If screens are already part of the routine, reduce gradually rather than eliminating cold turkey.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Toddlers in this age range are developing stronger preferences and the will to assert them, making screen removal battles more intense. They understand cause and effect (reaching for the remote, saying "more") but cannot yet understand time limits or delayed gratification. Use concrete cues instead of time-based ones: "One more episode" or "After this song, we turn it off." Follow screen time with a high-engagement activity (going outside, playing with water, a favorite toy) rather than asking them to self-direct, which feels empty compared to screen stimulation.',
    },
    {
      ageRange: '2-3 years',
      context:
        'This is the peak age for screen-related power struggles. Toddlers have stronger negotiation skills ("just one more!") and more intense tantrums. The key is consistency — inconsistent enforcement (giving in after a tantrum) teaches the child that enough protest gets results. Set clear rules and follow through calmly every time. A visual schedule showing "screen time then park time" helps toddlers anticipate transitions. Some parents find that allowing the child to turn off the screen themselves gives them a sense of control that reduces resistance.',
    },
    {
      ageRange: 'All ages',
      context:
        'If your toddler\'s screen tantrums are severe (lasting 30+ minutes, physically aggressive, occurring multiple times daily), this is a signal to significantly reduce overall screen time. The AAP recommends creating a Family Media Plan that designates screen-free times (meals, bedtime, car rides) and places (bedrooms). Replace screen time with sensory-rich alternatives: play dough, water play, outdoor time, music, or art. Within 1-2 weeks of consistent reduced screen time, most parents report significant improvement in their toddler\'s overall emotional regulation, not just during screen transitions.',
    },
  ],
  whenNormal: [
    'Brief protest (crying, whining for 5-10 minutes) when a screen is turned off — this is a normal toddler reaction to losing a preferred activity',
    'Requesting "more" or trying to turn the screen back on — this shows understanding, not addiction',
    'Better behavior on days with less screen time and worse behavior on heavy-screen days — this is a common pattern',
    'Needing a transition activity after screens rather than just stopping cold — this is age-appropriate',
  ],
  whenToMention: [
    'Tantrums after screen removal are consistently lasting more than 30 minutes and include physical aggression',
    'Your child shows no interest in non-screen activities and becomes distressed without screens available',
    'Screen time has gradually increased to multiple hours daily and attempts to reduce it have failed',
    'Your child\'s language development, social skills, or sleep have been affected by screen use',
  ],
  whenToActNow: [
    'Your child becomes physically dangerous during screen-related tantrums (head banging on hard surfaces, throwing heavy objects, self-injury)',
    'Your child has lost previously acquired skills (language, social engagement) and their primary activity is screen watching',
    'You feel unable to manage your child\'s behavior without screens and the situation is affecting your mental health or your child\'s safety',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'screen-time-addiction-toddler',
    'tablet-dependency-toddler',
    'excessive-screen-time-effects',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Family Media Plan. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/fmp/Pages/MediaPlan.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Screen Time and Children\'s Well-Being. JAMA Pediatrics.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/36342702/',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Guidelines on Physical Activity, Sedentary Behaviour and Sleep for Children Under 5.',
      url: 'https://www.who.int/publications/i/item/9789241550536',
    },
  ],
};
