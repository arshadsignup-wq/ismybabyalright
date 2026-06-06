import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-social-communication-disorder', title: 'Social (Pragmatic) Communication Disorder Signs', category: 'communication',
  searchTerms: ['social communication disorder', 'pragmatic communication disorder child', 'SCD signs toddler', 'social pragmatic communication disorder', 'child poor social communication', 'pragmatic language disorder vs autism', 'social communication difficulty child', 'SCD vs autism', 'social communication disorder toddler', 'pragmatic communication problems child'],
  quickAnswer: 'Social (Pragmatic) Communication Disorder (SCD) involves persistent difficulties with the social use of verbal and nonverbal communication. Unlike autism, SCD does not include restricted interests or repetitive behaviors. Children with SCD may have adequate vocabulary and grammar but struggle with using language appropriately in social contexts, such as adjusting their speech to different listeners, taking turns in conversation, understanding nonliteral language, and making inferences. SCD is typically diagnosed after age 4 when social communication demands increase.',
  byAge: [
    { ageRange: '18-24 months', context: 'Early signs are subtle and hard to distinguish from typical development. Limited joint attention, reduced social referencing, and less varied use of gestures may be present. These signs overlap with early autism indicators, so careful evaluation is needed.' },
    { ageRange: '2-3 years', context: 'Difficulties with conversational turn-taking, limited topic maintenance, and challenges with the social aspects of communication may emerge. The child may talk at length about their own interests without noticing the listener\'s response.' },
    { ageRange: '3-4 years', context: 'Social communication challenges become more apparent. The child may struggle with greetings, requesting, commenting, and adjusting their communication style for different people. They may have difficulty with peer conversations despite adequate language skills.' },
    { ageRange: '4-5 years', context: 'This is the typical age for SCD diagnosis. The child may have good vocabulary and sentence structure but struggle with the social rules of communication: staying on topic, taking turns, reading social cues, and understanding figurative language.' },
    { ageRange: '5-7 years', context: 'School demands reveal social communication challenges. The child may struggle with group work, making friends, understanding sarcasm and humor, and interpreting indirect requests. Speech therapy targeting pragmatic skills can be very beneficial.' },
  ],
  whenNormal: ['Your child communicates appropriately in social situations for their age', 'Your child adjusts their communication style for different listeners', 'Your child takes turns in conversation and stays on topic', 'Your child is a bit shy but uses appropriate social communication when they engage'],
  whenToMention: ['Your child has adequate language skills but struggles with the social use of language', 'Your child talks at people rather than with them', 'Your child has difficulty maintaining friendships despite wanting to connect with peers'],
  whenToActNow: ['Your child\'s social communication difficulties are causing significant distress or social isolation', 'Your child\'s social communication challenges are worsening as social demands increase', 'Your child is being excluded by peers due to communication differences'],
  relatedMilestones: ['social-engagement', 'conversation-skills', 'perspective-taking', 'joint-attention'],
  showSelfReferral: true, relatedConcernSlugs: ['toddler-pragmatic-language-difficulty', 'toddler-high-functioning-autism-signs', 'toddler-not-maintaining-topic'],
  sources: [
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Social Communication Disorder.', url: 'https://www.asha.org/practice-portal/clinical-topics/social-communication-disorder/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Social Communication Challenges.', url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Institute of Mental Health. Social Communication Disorder.', url: 'https://www.nimh.nih.gov/health/topics' },
  ],
};
