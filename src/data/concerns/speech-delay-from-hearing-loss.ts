import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'speech-delay-from-hearing-loss',
  title: 'Speech Delay Related to Hearing Loss',
  category: 'medical',
  searchTerms: [
    'speech delay hearing loss baby',
    'baby not talking hearing problem',
    'toddler speech delay hearing',
    'can hearing loss cause speech delay',
    'late talker hearing loss',
    'child not speaking hearing issue',
    'ear infections speech delay',
    'hearing and speech development baby',
  ],
  quickAnswer:
    'Hearing loss is one of the most common treatable causes of speech and language delay. Even mild or intermittent hearing loss (such as from chronic ear fluid) can significantly impact a child\'s ability to learn speech sounds and develop language. Children need to hear clearly and consistently to learn to talk. If your child has a speech delay, a hearing evaluation should always be one of the first steps, regardless of whether they seem to respond to sounds. Early identification and treatment of hearing loss can lead to dramatic improvements in speech and language development.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'At this age, you cannot yet assess speech, but you can observe pre-speech behaviors. Babies with hearing loss may not startle at loud sounds, may not calm to a parent\'s voice, and may be unusually quiet. These early signs are subtle but important. All newborns should have a hearing screening, and if your baby did not pass, follow-up testing by 3 months is critical  -  the earlier hearing loss is addressed, the less impact it will have on future speech.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies should be cooing, making vowel sounds, and beginning to experiment with sounds by this age. Babies with undetected hearing loss may be noticeably quieter than their peers. They may not turn toward sounds or respond to your voice with vocalizations. If your baby seems unusually quiet and isn\'t beginning to make sounds, request a hearing evaluation even if the newborn screening was passed  -  some types of hearing loss develop after birth.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babbling should be well established by 9 months, with strings of consonant-vowel combinations like "bababa" or "mamama." The absence of varied babbling by 9-10 months is a significant concern and should prompt a hearing evaluation. Babies with hearing loss may babble less, produce fewer consonant sounds, or stop babbling altogether. Recurrent ear infections with persistent fluid during this critical period can also impair hearing enough to delay babbling and early word development.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers should be saying their first words by 12-15 months and combining words by 18-24 months. If your toddler is not meeting these milestones, hearing should be tested. Even if your child seems to hear some things, partial hearing loss affecting certain frequencies can impair the ability to distinguish speech sounds. Toddlers with chronic ear fluid may seem to "tune out" or not follow directions. After hearing is addressed (with tubes, hearing aids, or medical treatment), many children show rapid improvement in speech and language.',
    },
  ],
  whenNormal: [
    'Your toddler had temporary speech plateau during a period of ear infections but caught up once the infections resolved  -  brief interruptions are usually compensated for quickly.',
    'Your child has mild hearing loss that is being appropriately managed and is meeting speech milestones with support.',
    'Your baby seems quiet compared to a sibling at the same age but is still babbling and responding to sounds  -  there is wide normal variation in vocal behavior.',
    'Your toddler\'s speech improved significantly after ear tubes were placed  -  this is a common positive outcome.',
  ],
  whenToMention: [
    'Your toddler is not meeting expected speech milestones and has a history of frequent ear infections or chronic ear fluid.',
    'Your child seems to hear environmental sounds but struggles with speech sounds or has very unclear speech for their age.',
    'Your toddler speaks more quietly than expected, turns up the TV volume, or frequently says "what?"',
  ],
  whenToActNow: [
    'Your baby has no babbling by 9-10 months  -  a hearing evaluation should be completed urgently as this is a critical window for language development.',
    'Your toddler has no words by 16 months or no word combinations by 24 months  -  hearing must be tested before attributing the delay to other causes.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Year 2019 Position Statement: Principles and Guidelines for Early Hearing Detection and Intervention Programs.',
      url: 'https://publications.aap.org/pediatrics/article/144/5/e20191996/38070',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Language and Speech Disorders in Children.',
      url: 'https://www.cdc.gov/child-development/about/language-speech-disorders.html',
    },
  ],
};
