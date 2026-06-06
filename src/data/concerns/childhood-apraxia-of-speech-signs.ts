import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'childhood-apraxia-of-speech-signs',
  title: 'Signs of Childhood Apraxia of Speech (CAS)',
  category: 'communication',
  searchTerms: [
    'childhood apraxia of speech',
    'CAS signs toddler',
    'apraxia of speech child',
    'motor speech disorder toddler',
    'toddler groping for sounds',
    'toddler inconsistent speech errors',
    'toddler knows what to say can\'t',
    'verbal dyspraxia child',
    'apraxia signs baby',
    'speech apraxia toddler symptoms',
  ],
  quickAnswer:
    'Childhood apraxia of speech (CAS) is a motor speech disorder where the brain has difficulty coordinating the movements needed for speech. Signs include inconsistent sound errors, difficulty imitating words, limited babbling as a baby, and groping mouth movements when trying to speak. CAS requires specialized speech therapy with a therapist experienced in motor speech disorders. Early diagnosis and intensive therapy lead to the best outcomes.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Early signs may include very limited babbling, few consonant sounds, and delayed cooing. Some babies with CAS are very quiet overall. These early signs are subtle and are often only recognized in retrospect after a later diagnosis.',
    },
    {
      ageRange: '12-18 months',
      context:
        'Children who will later be diagnosed with CAS often have very few or no words at this age. They may have limited babbling variety and difficulty imitating sounds. First words may be significantly delayed.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Key warning signs include having few or no words, a gap between what the child understands and what they can say, and visible struggle or groping when trying to produce words. The child may seem to know what they want to say but cannot coordinate the movements.',
    },
    {
      ageRange: '24-36 months',
      context:
        'CAS becomes more identifiable as speech demands increase. Characteristic signs include inconsistent errors on the same word, difficulty with longer words, loss of words that were previously used, and vowel distortions. A speech evaluation with a specialist in motor speech disorders is recommended.',
    },
    {
      ageRange: '3-5 years',
      context:
        'CAS can be more reliably diagnosed at this age. Intensive, frequent speech therapy with a focus on motor planning is the gold standard treatment. Children with CAS benefit from therapy multiple times per week. Progress may be slower than with other speech disorders, but with consistent therapy, significant improvement is possible.',
    },
  ],
  whenNormal: [
    'Your toddler makes typical speech errors that are consistent and follow predictable patterns',
    'Your child makes errors but can consistently repeat words the same way each time',
    'Your child\'s speech errors are improving steadily with age',
    'Your child has a few sound errors but overall speech development is on track',
  ],
  whenToMention: [
    'Your child says the same word differently each time they try (inconsistent errors)',
    'Your child seems to struggle or grope with their mouth when trying to talk',
    'Your child had very limited babbling as a baby and now has very few words',
    'There is a large gap between what your child understands and what they can say',
  ],
  whenToActNow: [
    'Your child was using words and has lost them, combined with difficulty producing speech sounds',
    'Your child is over 2 with almost no words, visible struggle when trying to speak, and strong comprehension',
  ],
  relatedMilestones: ['speech-clarity', 'first-words', 'babbling', 'oral-motor-development'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-speech-sound-disorder', 'late-talker', 'toddler-oral-motor-weakness'],
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Childhood Apraxia of Speech.',
      url: 'https://www.asha.org/public/speech/disorders/childhood-apraxia-of-speech/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Apraxia of Speech in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/Apraxia-of-Speech.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Apraxia of Speech.',
      url: 'https://www.nidcd.nih.gov/health/apraxia-speech',
    },
  ],
};
