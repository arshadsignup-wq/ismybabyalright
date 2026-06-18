import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'congenital-cmv-hearing-loss',
  title: 'My Baby Has Congenital CMV (Cytomegalovirus)',
  category: 'medical',
  searchTerms: [
    'congenital CMV baby',
    'cytomegalovirus baby hearing loss',
    'CMV infection newborn',
    'congenital CMV treatment',
    'CMV hearing loss baby',
    'CMV during pregnancy effects on baby',
    'congenital CMV symptoms',
    'CMV antiviral treatment baby',
    'congenital CMV prognosis',
    'CMV developmental delay baby',
  ],
  quickAnswer:
    'Congenital cytomegalovirus (CMV) infection occurs when CMV is passed from mother to baby during pregnancy. It is the most common congenital infection, affecting about 1 in 200 babies. Most babies with congenital CMV (about 90%) have no symptoms at birth and do well. However, about 10% are symptomatic at birth and may have hearing loss, vision problems, developmental delays, or other complications. CMV is also the leading non-genetic cause of hearing loss in children. Early identification and antiviral treatment can improve outcomes for symptomatic babies.',
  byAge: [
    {
      ageRange: '0-1 month (diagnosis)',
      context:
        'Congenital CMV must be diagnosed within the first 3 weeks of life (by testing urine or saliva) to distinguish it from CMV acquired after birth. Symptomatic babies may have petechiae (tiny red spots), jaundice, small head size, enlarged liver or spleen, or abnormal brain imaging. If your baby is diagnosed with symptomatic congenital CMV, antiviral treatment (valganciclovir) started within the first month of life has been shown to improve hearing and developmental outcomes.',
    },
    {
      ageRange: '1-6 months',
      context:
        'For symptomatic babies, antiviral treatment typically continues for 6 months. Blood counts and liver function are monitored during treatment, as the medication can cause side effects. Hearing tests should be performed at diagnosis and repeated regularly, because CMV-related hearing loss can fluctuate or worsen over time — even in babies who initially pass their newborn hearing screen.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Both symptomatic and asymptomatic congenital CMV babies need regular hearing monitoring. About 10-15% of babies who had no symptoms at birth will develop hearing loss, often during the first year of life. If hearing loss is detected, early hearing aids or cochlear implants can make a significant difference in speech and language development. Developmental assessments are also recommended.',
    },
    {
      ageRange: '1 year+',
      context:
        'Children with congenital CMV should have hearing monitored through at least age 6, as late-onset hearing loss can occur. Those with hearing loss benefit from early intervention services, hearing aids, or cochlear implants. Many children with congenital CMV, even those who were symptomatic, develop well with appropriate support. Speech therapy and educational support may be needed for children with hearing-related language delays.',
    },
  ],
  whenNormal: [
    'Your baby was diagnosed with congenital CMV but had no symptoms at birth and is developing normally — most asymptomatic babies do well',
    'Your baby is receiving antiviral treatment and is tolerating it well with regular monitoring',
    'Your baby\'s hearing tests have been normal so far and you are continuing regular follow-up',
  ],
  whenToMention: [
    'Your baby seems to not respond to sounds or voices as expected',
    'Your baby is not babbling by 6 months or has concerns about speech development',
    'Your baby had congenital CMV and is not meeting developmental milestones',
    'You are pregnant or planning another pregnancy and have questions about CMV prevention',
  ],
  whenToActNow: [
    'Your baby on antiviral treatment develops a high fever, unusual bruising, or looks pale — these may be medication side effects requiring immediate blood work',
    'Your baby has seizures or sudden developmental regression — seek emergency medical evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'auditory-neuropathy-spectrum-disorder',
    'kernicterus-severe-jaundice',
  ],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Congenital CMV Infection.',
      url: 'https://www.cdc.gov/cmv/congenital-infection.html',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Congenital Cytomegalovirus: Public Health Action Towards Awareness, Prevention, and Treatment. JAMA Pediatrics, 2023.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/36648932/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Congenital Cytomegalovirus. Red Book, 2021.',
      url: 'https://publications.aap.org/redbook/book/347/chapter/5754186',
    },
  ],
};
