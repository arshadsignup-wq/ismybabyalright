import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-voice-too-quiet',
  title: 'Toddler Speaks Very Quietly',
  category: 'communication',
  searchTerms: [
    'toddler speaks very quietly',
    'toddler whispers all the time',
    'toddler soft voice',
    'toddler can barely hear talking',
    'toddler mumbles quietly',
    'toddler voice too soft',
    'toddler doesn\'t project voice',
    'toddler quiet talker',
    'toddler low volume speech',
    'toddler won\'t speak up',
  ],
  quickAnswer:
    'Some toddlers naturally speak in a quieter voice due to temperament or shyness. However, a consistently very quiet voice may indicate vocal cord weakness, a voice disorder, anxiety, or hearing differences. If your toddler always speaks so softly that it is difficult to hear them, mention this to your pediatrician.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'First words are often quiet and tentative as babies practice new sounds. A soft voice at this stage is normal. Some babies are naturally quieter communicators while others are naturally loud.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Volume naturally increases as toddlers become more confident speakers. A very quiet voice may reflect temperament, or it may indicate that the child is unsure or anxious about speaking. Observe whether they are louder at home than in other settings.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Toddlers should be able to project their voice enough to be heard across a room. If your child always speaks in a near-whisper and cannot increase their volume even when encouraged, a voice evaluation may be helpful.',
    },
    {
      ageRange: '3-4 years',
      context:
        'If your child consistently speaks too softly to be heard in group settings like preschool, it may affect their social interactions and learning. A speech-language pathologist can assess whether there is a voice disorder, or whether anxiety or temperament is the primary factor.',
    },
    {
      ageRange: '4-5 years',
      context:
        'Children should be able to adjust their volume for different situations. Persistently very quiet speech that interferes with daily communication warrants evaluation. Treatment depends on the underlying cause.',
    },
  ],
  whenNormal: [
    'Your toddler speaks quietly in new situations but uses normal volume at home',
    'Your toddler has a naturally soft temperament and is quieter than peers but can be heard',
    'Your toddler speaks quietly when shy but gets louder when comfortable and excited',
    'Your toddler whispers as a game but can speak at normal volume',
  ],
  whenToMention: [
    'Your toddler always speaks so softly that even you have difficulty hearing them',
    'Your toddler cannot increase their volume even when asked or encouraged',
    'Your toddler\'s quiet voice is affecting their ability to communicate at daycare or preschool',
  ],
  whenToActNow: [
    'Your toddler\'s voice has become progressively weaker or softer over time',
    'Your toddler has a breathy, strained, or effortful quality to their quiet voice suggesting a physical cause',
  ],
  relatedMilestones: ['voice-quality', 'self-regulation', 'social-engagement', 'speech-clarity'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-voice-hoarse-raspy', 'selective-mutism', 'toddler-not-talking-at-daycare'],
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Voice Disorders.',
      url: 'https://www.asha.org/public/speech/disorders/voice-disorders/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hoarseness in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Hoarseness.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Voice Disorders.',
      url: 'https://www.nidcd.nih.gov/health/voice',
    },
  ],
};
