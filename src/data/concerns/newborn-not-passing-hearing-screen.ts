import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-not-passing-hearing-screen',
  title: 'Failed Newborn Hearing Test Follow-Up',
  category: 'medical',
  searchTerms: ['failed hearing screen baby', 'newborn hearing test failed', 'baby didn\'t pass hearing screen', 'refer result hearing test newborn', 'hearing screen follow-up baby', 'newborn hearing test one ear', 'baby hearing retest', 'OAE ABR test baby', 'failed hearing screen next steps', 'hearing screen refer what does it mean'],
  quickAnswer: 'A "refer" or failed result on a newborn hearing screen does not necessarily mean your baby has hearing loss. About 2-10% of newborns do not pass their initial screen, but most pass on retest. It is important to follow up promptly (within 1 month) with a comprehensive hearing evaluation. If hearing loss is confirmed, early intervention by 6 months leads to the best outcomes.',
  byAge: [
    { ageRange: '0-1 month', context: 'Newborn hearing screening is performed before discharge from the hospital. A "refer" result means the test could not confirm normal hearing in one or both ears. This can happen due to fluid in the ear canal (common in newborns), environmental noise, or actual hearing issues. About 90-95% of babies who fail the initial screen have normal hearing on retest. Follow-up testing should occur within 1 month. If the rescreen is also abnormal, a comprehensive audiologic evaluation (diagnostic ABR) should be done by 3 months of age.' },
    { ageRange: '1-3 months', context: 'If the rescreen was passed, no further action is needed unless you have concerns about hearing later. If the rescreen was also failed, a diagnostic ABR (auditory brainstem response) test should be completed by 3 months to confirm or rule out hearing loss. Early diagnosis is key to optimal outcomes for language development.' },
    { ageRange: '3-6 months', context: 'If hearing loss is confirmed, intervention should begin by 6 months. This may include hearing aids, early intervention services, and speech-language therapy. The AAP and Joint Committee on Infant Hearing recommend the 1-3-6 guidelines: screen by 1 month, diagnose by 3 months, intervene by 6 months.' },
    { ageRange: '6-12 months', context: 'Babies with hearing loss who receive early intervention develop language skills comparable to hearing peers. Even if the initial hearing screen was passed, be alert to signs of hearing loss: not responding to sounds, not babbling by 6-9 months, or not turning toward voices. Report any concerns to your pediatrician.' },
  ],
  whenNormal: ['Baby passed the rescreen after an initial "refer" result', 'Baby responds to sounds and voices appropriately', 'Baby is babbling and developing language on track'],
  whenToMention: ['Your baby failed the initial hearing screen and you haven\'t scheduled the retest yet', 'You have concerns about your baby\'s response to sounds even after passing the screen', 'Family history of hearing loss'],
  whenToActNow: ['Failed hearing screen without follow-up testing scheduled - do not delay the retest', 'Baby does not respond to loud sounds, does not startle, or seems unaware of voices at any age'],
  relatedMilestones: ['babbling', 'responding to name'],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Joint Committee on Infant Hearing. Year 2019 Position Statement.', url: 'https://publications.aap.org/pediatrics/article/143/4/e20183672/37010/Year-2019-Position-Statement-Principles-and' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Hearing Loss in Children.', url: 'https://www.cdc.gov/ncbddd/hearingloss/index.html' },
  ],
  relatedConcernSlugs: ['newborn-hearing-screening-failed', 'congenital-hearing-loss-types', 'hearing-loss-signs-baby'],
};
