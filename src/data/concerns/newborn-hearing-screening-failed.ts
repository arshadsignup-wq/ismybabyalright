import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'newborn-hearing-screening-failed',
  title: 'Failed Newborn Hearing Screening',
  category: 'medical',
  searchTerms: [
    'newborn hearing screening failed',
    'baby failed hearing test',
    'newborn hearing test refer',
    'baby can\'t hear',
    'infant hearing loss',
    'OAE test failed baby',
    'ABR test newborn',
    'baby hearing screening follow up',
    'newborn hearing rescreen',
    'congenital hearing loss baby',
  ],
  quickAnswer:
    'A "refer" or "fail" result on the newborn hearing screening does not necessarily mean your baby has hearing loss. Many babies who do not pass the initial screening have normal hearing on follow-up testing. Common reasons for an initial fail include fluid in the ear canal, vernix debris, or background noise during the test. However, follow-up testing is essential, as early identification and intervention for true hearing loss significantly improves language and developmental outcomes.',
  byAge: [
    {
      ageRange: '0-48 hours',
      context:
        'Universal newborn hearing screening is performed before hospital discharge, typically using otoacoustic emissions (OAE) or auditory brainstem response (ABR) testing. The screening is quick, painless, and done while the baby sleeps. If the baby does not pass in one or both ears, a rescreen is usually attempted before discharge. It is common for babies to not pass the initial screen due to fluid or debris in the ear canal from birth, amniotic fluid, or vernix. About 2-10% of babies are referred for follow-up after the initial screening, but only a small fraction of those have permanent hearing loss.',
    },
    {
      ageRange: '2-4 weeks',
      context:
        'If the baby did not pass the in-hospital hearing screening or rescreen, a follow-up appointment with an audiologist should be scheduled within 2-4 weeks. Some hospitals schedule this before you leave. The follow-up test is more comprehensive and is often done in a quieter, more controlled environment. By this age, any birth-related fluid in the ears has usually cleared, making the results more reliable. If the follow-up screen is normal, your baby can be discharged from hearing follow-up. If the baby does not pass again, diagnostic testing will be recommended.',
    },
    {
      ageRange: '1-3 months',
      context:
        'The AAP recommends that diagnostic audiological evaluation be completed by 3 months of age for babies who do not pass the follow-up screening. This typically involves a diagnostic ABR, which measures the brain\'s response to sound and can determine the type and degree of hearing loss. Early identification is critical because the first months of life are a sensitive period for auditory brain development. While waiting for testing, talk and sing to your baby normally. Even babies with hearing loss benefit from consistent exposure to language and environmental sounds.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If hearing loss is confirmed, the goal is to begin intervention by 6 months of age (the "1-3-6" guideline: screen by 1 month, diagnose by 3 months, intervene by 6 months). Intervention may include hearing aids, enrollment in early intervention programs, speech-language therapy, and in cases of severe to profound hearing loss, evaluation for cochlear implantation. Babies identified and treated early for hearing loss can develop language skills comparable to their hearing peers. Connect with family support organizations and other families who have navigated hearing loss diagnoses.',
    },
  ],
  whenNormal: [
    'Your baby did not pass the initial screening but passed the follow-up rescreen with an audiologist',
    'Your baby did not pass in one ear initially due to fluid or debris, and repeat testing was normal',
    'Your baby passed the hearing screening in both ears and no follow-up is needed',
    'Your baby startles to loud sounds, quiets to your voice, and shows age-appropriate responses to sound',
  ],
  whenToMention: [
    'Your baby did not pass the hearing screening and you have not yet scheduled follow-up testing',
    'You have a family history of childhood hearing loss and are concerned about your baby\'s hearing',
    'Your baby does not seem to startle to loud sounds, turn toward your voice, or respond to noise by 2-3 months',
  ],
  whenToActNow: [
    'Your baby has failed multiple hearing screening attempts and diagnostic testing has not yet been completed, as delay beyond 3 months of age reduces the effectiveness of early intervention and can impact language development',
    'Your baby had risk factors for hearing loss (NICU stay over 5 days, family history, very low birth weight, or exposure to ototoxic medications) and is not responding to sound as expected at any age, as prompt audiological evaluation is essential',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Year 2019 Position Statement: Principles and Guidelines for Early Hearing Detection and Intervention Programs. Pediatrics. 2019;144(4):e20191264.',
      url: 'https://publications.aap.org/pediatrics/article/144/4/e20191264/38092/Year-2019-Position-Statement-Principles-and',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Your Baby\'s Hearing Screening.',
      url: 'https://www.nidcd.nih.gov/health/your-babys-hearing-screening',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Hearing Loss in Children: Screening and Diagnosis.',
      url: 'https://www.cdc.gov/hearing-loss-children/screening/index.html',
    },
  ],
};
