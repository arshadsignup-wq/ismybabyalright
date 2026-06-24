import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-stopped-babbling-suddenly',
  title: 'Baby Stopped Babbling Suddenly',
  category: 'communication',
  searchTerms: [
    'baby stopped babbling',
    'baby was babbling now stopped',
    'baby lost babbling',
    'baby speech regression',
    'baby went quiet suddenly',
    'baby used to coo now silent',
    'baby stopped making sounds',
    'babbling regression baby',
    'baby lost vocalization',
    'baby was talking now stopped',
  ],
  quickAnswer:
    'A baby who suddenly stops babbling can be concerning for parents. Brief pauses in babbling are normal, especially when babies are focused on developing other skills like crawling or walking. However, a sustained loss of previously acquired babbling or vocalizations lasting more than a few weeks should be evaluated, as it could indicate hearing loss, an ear infection, a neurological concern, or in rare cases, a sign of autism spectrum disorder. Contact your pediatrician if the silence persists.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Early vocalizations (cooing, gurgling, vowel sounds) emerge around 2-3 months and gradually develop into more complex sounds. Babies naturally go through quieter and more vocal periods as they develop. A brief pause in vocalization is usually not concerning if your baby is otherwise alert, engaged, and responsive to sounds. If your baby was cooing regularly and has gone completely silent for more than 2 weeks, or if they do not startle to loud sounds, contact your pediatrician to evaluate hearing.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Canonical babbling (combining consonants and vowels like "babababa" or "mamama") typically emerges between 6-10 months. Some babies temporarily reduce babbling when they are focused on mastering a new physical skill like sitting, crawling, or pulling up. This "developmental trade-off" usually resolves within a few weeks. However, if babbling disappears for more than 2-3 weeks or your baby also stops responding to their name or making eye contact, seek evaluation promptly. Sudden hearing loss from ear infections can also cause babbling to decrease.',
    },
    {
      ageRange: '12-24 months',
      context:
        'By 12 months, babies should have babbling patterns that sound like conversation (variegated babbling with different syllable combinations) and may have a few real words. Loss of words or babbling at this age is called regression and should always be evaluated. Speech regression occurs in about 25-30% of children later diagnosed with autism spectrum disorder, usually between 15-24 months. However, regression can also be caused by hearing loss, seizure disorders, or emotional stress. A prompt evaluation by your pediatrician and possibly a developmental specialist is recommended.',
    },
  ],
  whenNormal: [
    'Your baby is babbling less for a few days while working on a new physical skill like crawling.',
    'Your baby is quieter at certain times of day but still vocalizes at other times.',
    'Your baby temporarily reduces babbling during or after an illness like an ear infection, but resumes after recovery.',
  ],
  whenToMention: [
    'Your baby has been noticeably quieter for more than 2 weeks without a clear reason.',
    'Your baby stopped babbling and also seems less responsive to sounds or voices.',
    'Your baby had words and has lost them, even if the loss is gradual.',
  ],
  whenToActNow: [
    'Your baby over 12 months has lost previously acquired words and is also losing social engagement (eye contact, responding to name).',
    'Your baby suddenly goes silent and also becomes lethargic, has seizures, or shows other neurological changes.',
    'Your baby has no babbling at all by 9 months and has never had canonical babbling (ba-ba, da-da sounds).',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['not-babbling-at-9-months', 'regression-in-speech', 'not-responding-to-sounds', 'baby-recurring-ear-infections'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Language Development: 8 to 12 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Language-Development-8-to-12-Months.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention - Developmental Milestones.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders - Speech and Language Developmental Milestones.',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};
