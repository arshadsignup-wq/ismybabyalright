import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'speech-therapy-at-home-activities', title: 'Speech Therapy Activities to Do at Home', category: 'communication',
  searchTerms: ['speech therapy at home', 'home speech activities toddler', 'how to help toddler talk at home', 'speech practice home activities', 'parent speech therapy techniques', 'encourage speech at home', 'home language activities child', 'speech therapy homework', 'speech activities daily routine', 'help child talk more at home'],
  quickAnswer: 'The most powerful speech therapy happens during your everyday routines. You do not need special materials or training. Talk about what you are doing during diaper changes, meals, and play. Follow your child\'s interests and narrate their actions. Wait expectantly after asking a question to give your child time to respond. Read together daily and pause to let your child fill in words. Reduce screen time and increase face-to-face interaction. These simple strategies can significantly boost your child\'s communication development.',
  byAge: [
    { ageRange: '0-12 months', context: 'Narrate your daily activities, respond to all vocalizations as if they are meaningful, play peek-a-boo and other simple social games, sing songs with gestures, and read simple board books while pointing to pictures.' },
    { ageRange: '12-18 months', context: 'Label objects your child points to or reaches for, offer choices between two items by naming each one, use simple one to two word phrases, expand on your child\'s single words into short sentences, and read interactive books together.' },
    { ageRange: '18-24 months', context: 'Model two-word phrases, create communication temptations by placing desired items out of reach, use self-talk and parallel talk during routines, sing fill-in-the-blank songs, and play with toys that encourage interaction like bubbles and balls.' },
    { ageRange: '2-3 years', context: 'Expand your child\'s sentences by adding one word, ask open-ended questions, tell simple stories about your day, play pretend together and narrate the play, and practice speech sounds in fun games your SLP recommends.' },
    { ageRange: '3-5 years', context: 'Have back-and-forth conversations during meals and car rides, retell stories from books together, practice targeted speech sounds during daily activities, play category and description games, and encourage your child to narrate their play.' },
  ],
  whenNormal: ['Your child is making steady progress with home practice and therapy combined', 'Your child engages with you during communication activities', 'You notice improvements in daily communication after consistent practice', 'Your child initiates communication more often'],
  whenToMention: ['You are unsure which activities are most helpful for your child\'s specific needs', 'Your child resists or becomes frustrated during speech practice at home', 'You feel overwhelmed and need guidance on how to incorporate practice into daily life'],
  whenToActNow: ['Your child is not progressing despite consistent home practice and therapy', 'Your child has become significantly more frustrated with communication', 'You notice regression in skills that were previously improving'],
  relatedMilestones: ['language-development', 'first-words', 'social-engagement', 'joint-attention'],
  showSelfReferral: true, relatedConcernSlugs: ['speech-therapy-when-to-start', 'speech-therapy-what-to-expect', 'toddler-speech-progress-slow'],
  sources: [
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Activities to Encourage Speech and Language Development.', url: 'https://www.asha.org/public/speech/development/activities-to-encourage-speech-and-language-development/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. How to Help Your Child Communicate.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Delay.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Everyday Ways to Support Your Child\'s Communication.', url: 'https://www.zerotothree.org/resource/supporting-communication/' },
  ],
};
