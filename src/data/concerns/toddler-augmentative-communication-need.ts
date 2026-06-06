import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-augmentative-communication-need', title: 'Does My Child Need an AAC Device?', category: 'communication',
  searchTerms: ['AAC device toddler', 'augmentative communication child', 'communication device toddler', 'AAC for toddler', 'speech generating device child', 'picture communication board', 'PECS for toddler', 'alternative communication toddler', 'nonverbal child communication device', 'AAC will it prevent speech'],
  quickAnswer: 'Augmentative and Alternative Communication (AAC) includes any tool that supplements or replaces spoken language, from simple picture boards to high-tech speech-generating devices. AAC does NOT prevent or delay speech development. Research consistently shows that AAC actually supports spoken language development. If your child is struggling to communicate verbally, AAC gives them a voice right now while continuing to build spoken language skills. Every child deserves a way to communicate, and AAC can be that bridge.',
  byAge: [
    { ageRange: '12-18 months', context: 'For children with significant communication delays, low-tech AAC like picture boards or simple signs can be introduced early. These tools reduce frustration and build the understanding that communication has power, which supports later speech development.' },
    { ageRange: '18-24 months', context: 'If your child has very few words and significant frustration, an SLP may recommend introducing AAC. This does not mean giving up on speech. It means giving your child a way to communicate now while continuing to work on verbal skills.' },
    { ageRange: '2-3 years', context: 'Children with minimal verbal speech benefit greatly from AAC. Options range from picture exchange systems (PECS) to tablet-based communication apps. An SLP specializing in AAC can help determine the best system for your child.' },
    { ageRange: '3-4 years', context: 'AAC can grow with your child. As their needs and abilities change, the system can be modified. Many children who use AAC do develop spoken language over time. Others rely on AAC as their primary communication method, which is equally valid.' },
    { ageRange: '4-6 years', context: 'Robust AAC systems allow children to express a full range of thoughts and needs. Children using AAC should have access to their device at all times, including at school. AAC users can and do participate fully in education and social life.' },
  ],
  whenNormal: ['Your child is communicating effectively through speech, gestures, and other means', 'Your child has some speech delays but is progressing steadily with therapy', 'Your child uses a few words and supplements with gestures effectively'],
  whenToMention: ['Your child has very limited verbal speech and is frustrated by inability to communicate', 'Your child is over 2 with fewer than 10 functional words', 'You have heard about AAC and want to know if it would help your child'],
  whenToActNow: ['Your child has no functional verbal communication and no alternative communication system', 'Your child is having severe behavioral problems due to inability to communicate', 'Your child is withdrawing socially because they cannot participate in communication'],
  relatedMilestones: ['language-development', 'first-words', 'social-engagement', 'gestures'],
  showSelfReferral: true, relatedConcernSlugs: ['toddler-sign-language-helping-speech', 'toddler-understanding-but-not-talking', 'toddler-speech-progress-slow'],
  sources: [
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Augmentative and Alternative Communication.', url: 'https://www.asha.org/public/speech/disorders/AAC/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Communication Options for Children.', url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Institute on Deafness and Other Communication Disorders. Assistive Devices for Communication.', url: 'https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders' },
  ],
};
