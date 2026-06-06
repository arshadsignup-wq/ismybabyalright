import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-pragmatic-language-difficulty',
  title: 'Toddler Has Difficulty with Social Language',
  category: 'communication',
  searchTerms: [
    'toddler pragmatic language difficulty',
    'toddler social language problems',
    'toddler doesn\'t use language socially',
    'toddler pragmatics',
    'toddler language not conversational',
    'social use of language delay',
    'pragmatic language disorder',
    'toddler not using language to communicate',
    'toddler words but not social',
    'toddler social communication problems',
  ],
  quickAnswer:
    'Pragmatic language refers to the social use of language, including taking turns in conversation, staying on topic, using appropriate eye contact, and adjusting language for different listeners. Difficulties with pragmatic language can occur alongside normal vocabulary and grammar. If your child speaks well but struggles with the social aspects of communication, a speech-language evaluation can help.',
  byAge: [
    { ageRange: '12-18 months', context: 'Early pragmatic skills include using gestures to communicate, sharing attention with others through pointing, and taking turns in simple vocal exchanges. These foundational social communication skills are important precursors to later conversational ability.' },
    { ageRange: '18-24 months', context: 'Toddlers begin using words for social purposes like greeting, requesting, and protesting. They should be initiating communication, not just responding. If your toddler uses words but never to share, request, or interact socially, this may indicate a pragmatic difficulty.' },
    { ageRange: '24-36 months', context: 'Children begin having simple conversations, taking turns, and talking about what interests others. A child who talks at length about their own interests but does not respond to others\' topics or take conversational turns may have pragmatic difficulties.' },
    { ageRange: '3-4 years', context: 'Pragmatic skills expand to include staying on topic, using polite forms, requesting clarification, and recognizing when a listener does not understand. Difficulties in these areas become more apparent in preschool social settings.' },
    { ageRange: '4-5 years', context: 'Children should engage in back-and-forth conversation, adjust their language for different listeners, and understand basic conversational rules. Persistent pragmatic difficulties may indicate Social Communication Disorder or be part of an autism spectrum profile.' },
  ],
  whenNormal: [
    'Your young toddler is still learning conversational skills and takes turns inconsistently',
    'Your toddler sometimes dominates conversations, which is typical for the age',
    'Your toddler is quieter in group settings but has appropriate social language skills one-on-one',
    'Your toddler is still developing the ability to share attention and take turns',
  ],
  whenToMention: [
    'Your toddler uses words but never to share experiences, request things, or interact socially',
    'Your toddler talks at length about their own interests but does not engage with others\' communication',
    'Your toddler does not take turns in conversation and seems unaware of conversational rules',
  ],
  whenToActNow: [
    'Your toddler has strong vocabulary but almost no social use of language combined with limited eye contact and social engagement',
    'Your child\'s pragmatic difficulties are causing significant social isolation or distress',
  ],
  relatedMilestones: ['social-engagement', 'joint-attention', 'conversation-skills', 'language-development'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-social-communication-disorder', 'toddler-not-initiating-conversation', 'toddler-not-maintaining-topic'],
  sources: [
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Social Communication Disorder.', url: 'https://www.asha.org/practice-portal/clinical-topics/social-communication-disorder/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Social Development in Preschoolers. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Social-Development-in-Preschoolers.aspx' },
    { org: 'NIH', citation: 'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.', url: 'https://www.nidcd.nih.gov/health/speech-and-language' },
  ],
};
