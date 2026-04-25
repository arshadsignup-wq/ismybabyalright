import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'tantrums',
  title: 'Toddler Tantrums and Meltdowns',
  category: 'behavior',
  searchTerms: [
    'toddler tantrums',
    'toddler meltdowns',
    'terrible twos tantrums',
    'how to handle toddler tantrums',
    'toddler screaming fits',
    'are tantrums normal',
    '2 year old constant tantrums',
    'toddler tantrum won\'t stop',
    'toddler throwing themselves on floor',
    'how many tantrums a day is normal',
    'toddler tantrum breath holding',
  ],
  quickAnswer:
    'Tantrums are a completely normal and expected part of development, peaking between ages 1.5 and 3. They happen because the emotional centers of your toddler\'s brain are developing faster than the parts that control reasoning and impulse regulation. On average, toddlers have one tantrum per day, and each typically lasts 2-15 minutes.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Tantrums often begin appearing around the first birthday as babies develop strong preferences and desires but have almost no ability to communicate them or handle the frustration of not getting what they want. These early tantrums tend to be shorter and are often related to hunger, tiredness, or being told "no." They may include crying, arching the back, or going stiff.',
    },
    {
      ageRange: '18 months - 2 years',
      context:
        'This is when tantrums often intensify. Your toddler understands so much more than they can express, creating a frustrating communication gap. Tantrums may include screaming, throwing themselves on the floor, kicking, or hitting. These are not manipulative  -  your toddler is genuinely overwhelmed. Staying calm and present (even if you need to just sit nearby) is the most helpful thing you can do.',
    },
    {
      ageRange: '2-3 years',
      context:
        'The peak of tantrum frequency for most children. Two-year-olds are developing a strong sense of independence ("Me do it!") while also lacking the skills to manage when things do not go as planned. Tantrums may seem to happen over tiny things, but to your toddler, the broken banana is a genuine crisis. Acknowledging their feelings ("You wanted the banana whole. That\'s so frustrating.") helps them feel understood.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Tantrums typically begin to decrease in frequency and intensity as language, reasoning, and emotional regulation skills improve. Your child may start to be able to use words during meltdowns or recover more quickly. If tantrums are still very frequent (more than 5 per day), lasting longer than 25 minutes, or getting more intense rather than less, it is worth discussing with your pediatrician.',
    },
    {
      ageRange: '4+ years',
      context:
        'Occasional meltdowns are still normal at this age, especially when children are tired, hungry, or dealing with big transitions. However, daily intense tantrums in a child over 4, especially if they involve self-harm, prolonged aggression, or an inability to calm down, may benefit from evaluation. Your pediatrician can help determine if additional support would be helpful.',
    },
  ],
  whenNormal: [
    'Tantrums happen about once a day on average and last under 15 minutes',
    'Your toddler has tantrums when tired, hungry, frustrated, or told "no"  -  these are the most common and normal triggers',
    'Your child recovers from tantrums and returns to their normal, happy self relatively quickly',
    'Tantrums are most intense between ages 2-3 and are gradually becoming less frequent',
    'Your toddler sometimes holds their breath during a tantrum until they briefly pass out  -  while terrifying, breath-holding spells are involuntary and not dangerous',
  ],
  whenToMention: [
    'Tantrums are happening more than 5 times per day or routinely lasting longer than 25 minutes',
    'Your child regularly hurts themselves during tantrums (head banging, biting, scratching) in ways that leave marks',
    'Tantrums are getting worse rather than better after age 3-4, or are becoming more intense and harder to recover from',
    'Your child has tantrums that seem to come out of nowhere with no identifiable trigger',
  ],
  whenToActNow: [
    'Your child holds their breath during a tantrum and loses consciousness for more than a few seconds, turns blue, or seems confused afterward  -  while brief breath-holding spells are usually harmless, your doctor should be aware',
    'Your child seems unable to be consoled or calm down for extended periods (over 30-45 minutes) on a regular basis, which could indicate underlying anxiety, sensory overload, or pain',
    'Tantrums are accompanied by a sudden loss of previously acquired skills or a significant change in personality or behavior',
  ],
  relatedMilestones: [
    'social-emotional-regulation',
    'language-expressive',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Temper Tantrums. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Temper-Tantrums.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Positive Parenting Tips: Toddlers (2-3 years).',
      url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers2.html',
    },
    {
      org: 'AAP',
      citation:
        'Belden AC, Thomson NR, Luby JL. Temper Tantrums in Healthy Versus Depressed and Disruptive Preschoolers. Journal of Pediatrics. 2008;152(1):117-122.',
      url: 'https://publications.aap.org/pediatrics/article/121/6/e1541/73283',
    },
  ],
};
