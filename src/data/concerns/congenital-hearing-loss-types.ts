import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'congenital-hearing-loss-types',
  title: 'Congenital Hearing Loss Types',
  category: 'medical',
  searchTerms: [
    'baby born deaf',
    'congenital hearing loss baby',
    'sensorineural hearing loss infant',
    'baby failed hearing test at birth',
    'genetic hearing loss baby',
    'types of hearing loss in newborns',
    'baby born with hearing loss',
    'newborn hearing screening failed',
    'conductive hearing loss baby',
  ],
  quickAnswer:
    'Congenital hearing loss affects approximately 1-3 out of every 1,000 newborns. It can be sensorineural (involving the inner ear or auditory nerve), conductive (involving the outer or middle ear), or mixed. About 50-60% of cases have a genetic cause, while other causes include prenatal infections, prematurity, and certain medications. Early identification through newborn hearing screening and early intervention (by 6 months of age) significantly improves language, speech, and cognitive outcomes.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'All newborns in the United States receive a hearing screening before hospital discharge. If your baby did not pass, this does not necessarily mean permanent hearing loss  -  fluid, debris in the ear canal, or a fussy baby can affect results. A follow-up diagnostic auditory brainstem response (ABR) test should be completed by 3 months of age. If hearing loss is confirmed, early intervention services should begin as soon as possible.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, a definitive diagnosis should ideally be established. If hearing loss is confirmed, hearing aids can be fitted as early as one month after diagnosis. Babies with hearing loss should be enrolled in an early intervention program by 6 months of age. Your audiologist will determine the type and degree of hearing loss, which guides treatment  -  sensorineural loss is typically managed with hearing aids or cochlear implants, while conductive loss may be medically or surgically treatable.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies identified and fitted with appropriate amplification before 6 months of age have language development comparable to hearing peers. If your baby was a late identification, starting intervention now is still highly beneficial. Your team may include an audiologist, ENT specialist, speech-language pathologist, and early intervention specialist. Ongoing monitoring is important as some types of hearing loss can be progressive.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers with congenital hearing loss who have been consistently using hearing aids or cochlear implants and receiving early intervention typically show strong language progress. If hearing loss was not identified earlier, seek evaluation now  -  late identification is still better than no identification. Genetic testing may be offered to understand the cause and determine if the hearing loss could be progressive or associated with other conditions (syndromic hearing loss).',
    },
  ],
  whenNormal: [
    'Your newborn did not pass the initial hearing screening but passed the follow-up test  -  the initial screen has a relatively high false-positive rate.',
    'Your baby was diagnosed with mild conductive hearing loss due to fluid in the middle ear that resolved on its own.',
    'Your baby responds to sounds and is developing speech normally despite having a family history of hearing loss.',
    'Your child has hearing aids and is meeting speech and language milestones with appropriate support.',
  ],
  whenToMention: [
    'Your baby did not pass the newborn hearing screening and you have not yet completed the recommended follow-up testing.',
    'You notice your baby is not responding to sounds as expected, even if they passed the newborn screening  -  hearing loss can develop after birth.',
    'There is a family history of childhood hearing loss and you want your baby monitored more closely.',
  ],
  whenToActNow: [
    'Your baby failed the newborn hearing screening and has not had follow-up diagnostic testing by 3 months of age  -  timely diagnosis is critical for optimal outcomes.',
    'Your baby has confirmed hearing loss and has not been connected with early intervention services by 6 months of age  -  every month of delay matters for language development.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Hearing Loss in Children: Data and Statistics.',
      url: 'https://www.cdc.gov/ncbddd/hearingloss/data.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Hearing Screening and Testing for Newborns.',
      url: 'https://www.nidcd.nih.gov/health/newborn-hearing-screening',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Year 2019 Position Statement: Principles and Guidelines for Early Hearing Detection and Intervention Programs. Pediatrics, 2019.',
      url: 'https://publications.aap.org/pediatrics/article/144/5/e20191996/38070',
    },
  ],
};
