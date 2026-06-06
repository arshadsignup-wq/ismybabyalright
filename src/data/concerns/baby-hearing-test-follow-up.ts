import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-hearing-test-follow-up',
  title: 'Baby Failed Newborn Hearing Screen - What Now?',
  category: 'communication',
  searchTerms: [
    'baby failed hearing test',
    'newborn hearing screen failed',
    'baby hearing test follow up',
    'baby refer on hearing screen',
    'what happens after failed hearing test',
    'baby didn\'t pass hearing screening',
    'newborn hearing test results',
    'ABR hearing test baby',
    'baby hearing retest',
    'failed hearing screening one ear',
  ],
  quickAnswer:
    'Failing a newborn hearing screen does not necessarily mean your baby has hearing loss. Many babies who fail the initial screen pass on follow-up testing. However, it is critical to complete follow-up testing by 3 months of age. If hearing loss is confirmed, early intervention by 6 months of age leads to significantly better language outcomes.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Most newborns receive a hearing screening before leaving the hospital. If your baby did not pass, a rescreen is typically scheduled. Common reasons for a "refer" result include fluid in the ear canal, debris, or a noisy testing environment. Many babies pass on retest.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Follow-up diagnostic testing, typically an Auditory Brainstem Response (ABR) test, should be completed by 3 months of age. This more detailed test can determine the type and degree of any hearing loss. Do not wait to schedule this appointment.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If hearing loss is confirmed, early intervention should begin by 6 months. Services may include hearing aids, sign language instruction, and speech-language therapy. Research shows that babies who receive intervention by 6 months develop language skills comparable to hearing peers.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Ongoing audiological monitoring and early intervention services support your baby\'s communication development. Your audiologist will track hearing thresholds and adjust hearing devices as needed. Speech and language milestones should be monitored closely.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Children with identified hearing loss who received early intervention continue to develop language skills. Regular hearing evaluations and speech-language therapy remain important. If hearing loss was not identified earlier, any speech or language delays at this age should prompt a hearing evaluation.',
    },
  ],
  whenNormal: [
    'Your baby failed the initial hospital screening but there was fluid in the ear canal or the environment was noisy',
    'Your baby failed in one ear only, which may be due to positioning or temporary fluid',
    'Your baby is scheduled for a follow-up test and you are waiting for the appointment',
  ],
  whenToMention: [
    'Your baby failed the follow-up hearing test and you need guidance on next steps',
    'Your baby passed the initial screen but you have concerns about hearing at a later age',
    'Your baby has risk factors for hearing loss like family history, NICU stay, or certain infections',
  ],
  whenToActNow: [
    'Your baby failed the initial screen and the follow-up test has not been scheduled by 1 month of age',
    'Your baby has been diagnosed with hearing loss and intervention has not started by 6 months',
  ],
  relatedMilestones: ['hearing', 'cooing', 'babbling', 'responds-to-name'],
  showSelfReferral: true,
  relatedConcernSlugs: ['hearing-loss-signs-baby', 'not-responding-to-sounds', 'speech-delay-from-hearing-loss'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Year 2019 Position Statement: Principles and Guidelines for Early Hearing Detection and Intervention Programs.',
      url: 'https://publications.aap.org/pediatrics/article/144/5/e20191996/38058/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Hearing Loss in Children.',
      url: 'https://www.cdc.gov/ncbddd/hearingloss/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Your Baby\'s Hearing Screening.',
      url: 'https://www.nidcd.nih.gov/health/your-babys-hearing-screening',
    },
  ],
};
