import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-cluttering-speech',
  title: 'Toddler Speaks Too Fast and Jumbles Words',
  category: 'communication',
  searchTerms: [
    'toddler cluttering speech',
    'toddler talks too fast',
    'toddler rapid speech',
    'toddler words jumbled together',
    'toddler speech too fast to understand',
    'cluttering vs stuttering',
    'toddler running words together',
    'toddler fast messy speech',
    'child speaks in a rush',
    'toddler speech rate too fast',
  ],
  quickAnswer:
    'Cluttering is a fluency disorder characterized by speech that is too fast, irregular in rhythm, and often includes collapsed or blended words, making it hard to understand. Unlike stuttering, children who clutter are often unaware of their speech differences. If your child consistently speaks so quickly that their words run together and become unintelligible, a speech-language evaluation can help.',
  byAge: [
    {
      ageRange: '18-24 months',
      context:
        'It is too early to identify cluttering at this age. Toddlers may rush through words when excited, which is normal. Speech is still developing, and rate irregularities are expected.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Some children begin speaking rapidly as their language skills outpace their motor speech abilities. Occasional rushing through words or sentences when excited is normal. Persistent rapid, disorganized speech may warrant monitoring.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Cluttering may become more apparent as sentences get longer. Signs include speech that is too fast, words that blend into each other, collapsed syllables, and difficulty organizing thoughts into clear sentences. Children with cluttering often do not realize their speech is difficult to understand.',
    },
    {
      ageRange: '4-5 years',
      context:
        'If your child consistently speaks too quickly, runs words together, and has difficulty being understood despite having adequate vocabulary, a fluency evaluation is recommended. Cluttering can co-occur with stuttering, ADHD, or language disorders.',
    },
    {
      ageRange: '5-7 years',
      context:
        'Speech therapy for cluttering focuses on self-monitoring, slowing rate, and organizing language. Treatment is different from stuttering therapy and requires a clinician familiar with cluttering. With practice, children can learn to monitor and adjust their speech rate.',
    },
  ],
  whenNormal: [
    'Your toddler speaks quickly when excited but can slow down when calm',
    'Your toddler rushes through words occasionally but is usually understandable',
    'Your toddler is under 3 and has variable speech rate, which is developmentally typical',
    'Your child talks fast sometimes but slows down when asked to',
  ],
  whenToMention: [
    'Your child consistently speaks so fast that words blur together and are hard to understand',
    'Your child seems unaware that their speech is difficult to follow',
    'Your child\'s rapid speech is accompanied by disorganized narrative and difficulty staying on topic',
  ],
  whenToActNow: [
    'Your child\'s speech rate has increased dramatically and is now mostly unintelligible',
    'Rapid speech is combined with other concerning signs like stuttering, anxiety, or complete communication breakdown',
  ],
  relatedMilestones: ['speech-clarity', 'fluency', 'narrative-skills', 'self-regulation'],
  showSelfReferral: true,
  relatedConcernSlugs: ['stuttering', 'toddler-intelligibility-low', 'toddler-stuttering-vs-normal-disfluency'],
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Cluttering.',
      url: 'https://www.asha.org/practice-portal/clinical-topics/fluency-disorders/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Stuttering and Other Fluency Disorders. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Stuttering-in-Toddlers-Preschoolers.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Stuttering.',
      url: 'https://www.nidcd.nih.gov/health/stuttering',
    },
  ],
};
