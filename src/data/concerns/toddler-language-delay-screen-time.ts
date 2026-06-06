import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-language-delay-screen-time', title: 'Screen Time and Speech Delay Connection', category: 'communication',
  searchTerms: ['screen time speech delay', 'too much screen time toddler speech', 'TV causing speech delay', 'screen time language development', 'tablet speech delay toddler', 'phone screen time speech', 'screen time affecting language', 'reduce screen time help speech', 'digital media speech delay', 'screen time recommendations toddler speech'],
  quickAnswer: 'Research has found a correlation between excessive screen time and language delays in young children. The AAP recommends no screen time for children under 18 months (except video calls) and limited high-quality programming for ages 18 to 24 months, watched together with a parent. Screens replace the back-and-forth interactions that build language. However, screen time alone rarely causes a language delay. If your child has a speech delay, reducing screen time and increasing interactive communication is one important step, but a full evaluation is also recommended.',
  byAge: [
    { ageRange: '0-12 months', context: 'The AAP recommends no screen media for babies under 18 months except video chatting. Babies learn language from live human interaction, not from screens. Background TV also reduces the quantity and quality of parent-child talk.' },
    { ageRange: '12-18 months', context: 'Continue avoiding screen media except video calls. This is a critical period for language development when babies need face-to-face interaction, joint attention, and responsive communication from caregivers.' },
    { ageRange: '18-24 months', context: 'If you choose to introduce screens, select high-quality educational programming and watch together. Co-viewing and talking about what is on screen can turn passive watching into an interactive learning opportunity.' },
    { ageRange: '2-3 years', context: 'Limit screen time to one hour per day of high-quality programming. Prioritize interactive play, reading, and conversation. If your child has a speech delay, reducing screen time allows more time for the face-to-face interaction that builds language.' },
    { ageRange: '3-5 years', context: 'Continue limiting screens to one hour daily. Focus on choosing interactive educational content. Ensure that screen time does not replace outdoor play, social interaction, and reading. Balance is key.' },
  ],
  whenNormal: ['Your child watches limited, high-quality media with a caregiver and is meeting speech milestones', 'Your child has age-appropriate language skills despite some screen exposure', 'You are following AAP screen time guidelines and your child communicates well'],
  whenToMention: ['Your child has high screen time and you are seeing speech delays', 'You want help reducing screen time and increasing interaction', 'Your child prefers screens over social interaction and you are concerned about language'],
  whenToActNow: ['Your child has excessive screen time AND significant speech or language delays', 'Your child is becoming withdrawn, avoiding interaction, and only engages with screens', 'Your child has lost words or social skills alongside heavy screen use'],
  relatedMilestones: ['language-development', 'first-words', 'social-engagement', 'joint-attention'],
  showSelfReferral: true, relatedConcernSlugs: ['speech-therapy-when-to-start', 'toddler-understanding-but-not-talking', 'toddler-not-initiating-conversation'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Media and Young Minds.', url: 'https://publications.aap.org/pediatrics/article/138/5/e20162591/60503/Media-and-Young-Minds' },
    { org: 'NIH', citation: 'National Institutes of Health. Screen Time and Language Development.', url: 'https://www.nih.gov/news-events/nih-research-matters/' },
    { org: 'Zero to Three', citation: 'Zero to Three. Screen Sense: Setting the Record Straight.', url: 'https://www.zerotothree.org/resource/screen-sense/' },
  ],
};
