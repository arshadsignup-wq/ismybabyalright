import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'speech-therapy-what-to-expect', title: 'What to Expect in Speech Therapy', category: 'communication',
  searchTerms: ['what happens in speech therapy', 'speech therapy what to expect', 'speech therapy session toddler', 'speech therapy process child', 'first speech therapy appointment', 'speech therapy activities toddler', 'speech therapy techniques child', 'SLP session what happens', 'speech pathologist appointment child', 'speech therapy evaluation process'],
  quickAnswer: 'Speech therapy for young children looks like play. A speech-language pathologist (SLP) uses toys, books, games, and activities to build communication skills in a natural, engaging way. Sessions typically last 30 to 60 minutes and may occur one to three times per week depending on your child\'s needs. Parent involvement is a key part of therapy, as you will learn strategies to support your child\'s communication throughout daily routines.',
  byAge: [
    { ageRange: '0-12 months', context: 'Therapy focuses on parent coaching, building early communication foundations like eye contact and turn-taking, supporting feeding if needed, and encouraging babbling and gestures. Sessions are play-based and family-centered.' },
    { ageRange: '12-18 months', context: 'The SLP will work on building vocabulary through play, encouraging gestures and early words, and teaching you strategies to use at home. Therapy at this age emphasizes creating communication opportunities throughout daily routines.' },
    { ageRange: '18-24 months', context: 'Sessions focus on expanding vocabulary, encouraging word combinations, improving understanding of language, and building social communication skills. The SLP will model language strategies you can use at home.' },
    { ageRange: '2-3 years', context: 'Therapy may address vocabulary, sentence building, speech sound production, following directions, and social communication. The SLP uses structured play activities and may begin more targeted articulation work if appropriate.' },
    { ageRange: '3-5 years', context: 'Sessions become more structured while remaining play-based. Therapy may target speech sounds, grammar, narrative skills, conversation skills, and pre-literacy. Parent training continues to be an important component.' },
  ],
  whenNormal: ['Your child is already making progress after starting therapy', 'Your SLP has explained that your child is responding well to intervention', 'Your child enjoys therapy sessions and engages willingly', 'You see improvements in daily communication at home'],
  whenToMention: ['You are unsure if your child is making adequate progress in therapy', 'You want to understand how to support therapy goals at home', 'You feel your child needs more or different therapy than what is being provided'],
  whenToActNow: ['Your child is not making any progress after several months of consistent therapy', 'Your child is distressed or resistant during every therapy session', 'You believe your child has additional concerns that are not being addressed in current therapy'],
  relatedMilestones: ['language-development', 'first-words', 'social-engagement', 'speech-clarity'],
  showSelfReferral: true, relatedConcernSlugs: ['speech-therapy-when-to-start', 'speech-therapy-at-home-activities', 'toddler-speech-progress-slow'],
  sources: [
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Speech-Language Therapy.', url: 'https://www.asha.org/public/speech/therapy/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Speech and Language Therapy for Children.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Delay.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Supporting Communication Development.', url: 'https://www.zerotothree.org/resource/supporting-communication/' },
  ],
};
