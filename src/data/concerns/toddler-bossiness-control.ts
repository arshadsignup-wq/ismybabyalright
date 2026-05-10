import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-bossiness-control',
  title: 'Toddler Bossiness and Control',
  category: 'behavior',
  searchTerms: [
    'toddler very bossy with other kids',
    'my toddler tries to control everything',
    'toddler tells other children what to do',
    'bossy toddler behavior normal',
    'toddler needs to be in charge',
    'controlling toddler behavior at playdates',
    'why is my toddler so bossy',
    'toddler demands things go their way',
  ],
  quickAnswer:
    'Bossy behavior in toddlers is a normal developmental phase and is often a sign of strong leadership skills, growing confidence, and increasing language ability. Toddlers are learning to assert themselves and test the boundaries of their influence. They have not yet developed the social skills to negotiate or collaborate effectively. With gentle guidance, most bossy toddlers learn to channel their assertiveness into positive leadership over time.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Not applicable. Babies at this age communicate needs through crying and are not yet capable of bossy or controlling behavior.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Not applicable. Babies are beginning to express preferences but do not have the language or cognitive ability for controlling behavior.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies begin to show strong preferences and may protest when things do not go their way. They may point and demand specific toys or foods. This early assertiveness is the beginning of autonomy and is healthy.',
    },
    {
      ageRange: '12 months+',
      context:
        'Bossiness typically peaks between ages 2 and 4 as toddlers develop language, opinions, and a strong sense of self. They may dictate play scenarios, assign roles to other children, and become upset when others do not comply. Offer choices to give them a sense of control, teach negotiation through play, and model flexible language like "How about we try it this way?"',
    },
  ],
  whenNormal: [
    'Your toddler tells other children (or adults) what to do and how to play',
    'Your child insists on being first, choosing the game, or controlling the rules during play',
    'Bossiness increases when your toddler is tired, hungry, or in a new environment',
    'Your child can sometimes follow another child\'s lead with encouragement',
  ],
  whenToMention: [
    'Your child\'s controlling behavior is so rigid that they cannot participate in any group activity without it being done their way, and this is causing significant social difficulties',
    'Bossiness is accompanied by extreme distress — intense meltdowns lasting 30+ minutes — when they cannot control the situation',
    'Your child shows no interest in other children\'s feelings or perspectives by age 4 and has difficulty maintaining any friendships',
  ],
  whenToActNow: [
    'Controlling behavior extends to extreme rigidity in all areas of life — routines, food, clothing — to the point where daily functioning is severely impaired',
    'Your child becomes physically aggressive toward anyone who does not comply with their demands, and this pattern is escalating',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-not-sharing-developmental',
    'aggressive-play-vs-normal-play',
    'toddler-difficulty-making-friends',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Social Development in Preschoolers. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Social-Development-in-Preschoolers.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. The Development of Self-Regulation and Social Skills in Toddlers.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
