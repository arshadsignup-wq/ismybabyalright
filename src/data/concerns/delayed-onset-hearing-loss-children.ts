import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'delayed-onset-hearing-loss-children',
  title: 'Delayed-Onset Hearing Loss in Children',
  category: 'medical',
  searchTerms: [
    'delayed hearing loss baby',
    'late-onset hearing loss child',
    'baby passed hearing test but not hearing',
    'progressive hearing loss child',
    'hearing loss after birth',
    'auditory neuropathy baby',
    'baby not responding to sounds anymore',
    'hearing loss toddler',
    'post-lingual hearing loss child',
    'CMV hearing loss baby',
  ],
  quickAnswer:
    'While newborn hearing screening catches most hearing loss present at birth, some children develop hearing loss after the newborn period. This can be caused by congenital CMV infection (the most common non-genetic cause), genetic conditions that cause progressive loss, chronic ear infections, meningitis, or ototoxic medications. Even if your baby passed the newborn hearing screen, ongoing monitoring of hearing milestones is important, as early intervention for hearing loss significantly improves language outcomes.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'All newborns should receive hearing screening before hospital discharge. A passed screen does not guarantee permanent normal hearing. Babies at higher risk for delayed-onset hearing loss include those with congenital CMV infection, family history of childhood hearing loss, NICU stays longer than 5 days, or exposure to ototoxic medications. By 3 months, babies should startle to loud sounds, quiet to a familiar voice, and begin making cooing sounds. If these milestones are absent, request a hearing evaluation even if the newborn screen was passed.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By 6 months, babies should turn toward sounds, respond to their name, and begin babbling with consonant sounds. By 9 months, babbling should include varied sounds. If your baby stops babbling, does not respond to their name consistently, or seems less responsive to sounds than before, a hearing evaluation is warranted. Congenital CMV, the most common infectious cause of hearing loss, can cause progressive loss that may not be evident at birth but emerges during the first year.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers with delayed-onset hearing loss may show speech delays, difficulty following directions, or regression in language skills they had previously acquired. They may turn up the volume on devices, not respond when called from another room, or seem to hear inconsistently. Chronic middle ear fluid (otitis media with effusion) can cause temporary hearing loss that affects language development if persistent. Any concern about hearing at this age should prompt an audiologic evaluation, as early amplification with hearing aids or cochlear implants leads to much better language outcomes.',
    },
  ],
  whenNormal: [
    'Your baby passed their newborn hearing screen and is meeting all communication milestones on schedule.',
    'Your baby responds consistently to sounds, voices, and their name by 6-9 months.',
    'Your toddler is developing speech and language at the expected pace.',
  ],
  whenToMention: [
    'Your baby passed the newborn hearing screen but you have concerns about their responsiveness to sounds.',
    'Your baby has risk factors for delayed-onset hearing loss (CMV, family history, prolonged NICU stay).',
    'Your toddler\'s speech seems delayed or they frequently say "what?" or do not respond to their name.',
  ],
  whenToActNow: [
    'Your child has had meningitis and you notice changes in their hearing or responsiveness to sounds.',
    'Your child has lost previously acquired speech or language skills, which could indicate progressive hearing loss or another neurological condition.',
    'Your baby or toddler does not respond to any sounds or has completely stopped babbling or speaking.',
  ],
  relatedMilestones: [
    'language-development',
    'hearing',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: ['not-responding-to-sounds', 'not-babbling-at-9-months', 'regression-in-speech', 'not-saying-mama-dada'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Year 2019 Position Statement: Principles and Guidelines for Early Hearing Detection and Intervention. Pediatrics, 2019.',
      url: 'https://publications.aap.org/pediatrics/article/144/5/e20191831/38474/Year-2019-Position-Statement-Principles-and',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Hearing Loss in Children. CDC.',
      url: 'https://www.cdc.gov/ncbddd/hearingloss/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Hearing Loss in Children. NIDCD.',
      url: 'https://www.nidcd.nih.gov/health/hearing-loss-children',
    },
  ],
};
