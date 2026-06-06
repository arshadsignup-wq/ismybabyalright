import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-speech-progress-slow', title: 'Speech Progress Is Slow Despite Therapy', category: 'communication',
  searchTerms: ['speech therapy slow progress', 'speech therapy not working', 'toddler not improving speech', 'slow progress speech therapy', 'speech delay not getting better', 'speech therapy taking long', 'child not progressing speech', 'speech improvement slow toddler', 'is speech therapy working', 'expected progress speech therapy'],
  quickAnswer: 'Speech and language progress can vary significantly from child to child. Some children make rapid gains once therapy begins, while others progress more gradually. It is important to remember that progress may not always look like new words. Improvements in understanding, attention, gestures, imitation, and social engagement are all meaningful gains. If your child has been in consistent therapy for 3 to 6 months without measurable progress, discuss this with your SLP. The therapy approach, frequency, or diagnosis may need to be reconsidered.',
  byAge: [
    { ageRange: '12-18 months', context: 'At this age, progress may be measured in pre-linguistic skills rather than words. Increased eye contact, more babbling variety, better response to name, and emerging gestures are all signs of progress. These skills are foundations for words.' },
    { ageRange: '18-24 months', context: 'Progress may include more attempts at words, better imitation, increased use of gestures and sounds to communicate, and improved understanding of language. Even small gains in these areas indicate the child is benefiting from therapy.' },
    { ageRange: '2-3 years', context: 'If vocabulary growth is slow, consider whether understanding is improving, whether the child is combining gestures with words, and whether communication attempts are increasing. Discuss with your SLP whether the therapy approach should be adjusted.' },
    { ageRange: '3-4 years', context: 'If progress has stalled after several months of consistent therapy, a re-evaluation may be needed. The SLP may recommend changes in therapy approach, increased frequency, or additional assessments to rule out underlying issues.' },
    { ageRange: '4-5 years', context: 'Persistent slow progress may indicate an underlying language disorder rather than a simple delay. A comprehensive re-evaluation including hearing, cognitive, and language assessments can help guide next steps.' },
  ],
  whenNormal: ['Your child is making small but consistent gains in therapy', 'Your SLP confirms measurable progress even if it feels slow to you', 'Your child has made gains in understanding or social communication even if words are slow to come', 'Progress was slow initially but is now accelerating'],
  whenToMention: ['Your child has been in therapy for 3 to 6 months with little visible progress', 'You feel the current therapy approach is not working for your child', 'You want to understand what realistic progress looks like for your child\'s specific needs'],
  whenToActNow: ['Your child has shown no measurable progress after 6 months of consistent therapy', 'Your child is regressing despite ongoing therapy', 'You suspect an undiagnosed underlying condition is affecting progress'],
  relatedMilestones: ['language-development', 'first-words', 'social-engagement', 'speech-clarity'],
  showSelfReferral: true, relatedConcernSlugs: ['speech-therapy-when-to-start', 'speech-therapy-what-to-expect', 'toddler-speech-plateau'],
  sources: [
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Treatment Efficacy for Speech-Language Pathology.', url: 'https://www.asha.org/research/ehp/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Language Delays.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Delay.aspx' },
    { org: 'NIH', citation: 'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.', url: 'https://www.nidcd.nih.gov/health/speech-and-language' },
  ],
};
