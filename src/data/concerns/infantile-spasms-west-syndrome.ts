import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'infantile-spasms-west-syndrome',
  title: 'Infantile Spasms (West Syndrome)',
  category: 'medical',
  searchTerms: [
    'infantile spasms baby',
    'west syndrome baby',
    'baby sudden jerking movements',
    'baby jackknife movements',
    'infantile spasms signs',
    'baby spasms clusters',
    'baby dropping head suddenly',
    'baby startling in clusters',
    'infantile spasms vs startle',
  ],
  quickAnswer:
    'Infantile spasms (West syndrome) are a serious type of epilepsy that typically begins between 3-12 months of age, affecting about 1 in 2,000 to 4,000 babies. Spasms often appear as sudden, brief stiffening or jerking movements that occur in clusters, especially upon waking. Rapid diagnosis and treatment (typically within days) are critical, as early treatment with ACTH or vigabatrin significantly improves developmental outcomes. If you suspect infantile spasms, seek medical evaluation immediately.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Infantile spasms are uncommon before 3 months of age. However, if a baby in this age range has sudden, repetitive jerking or stiffening movements occurring in clusters (groups of 5-20+ movements over several minutes), this warrants urgent evaluation. Very early onset may be associated with structural brain abnormalities or genetic conditions. Do not wait for a routine appointment — video the episodes and contact your pediatrician or go to the ER the same day.',
    },
    {
      ageRange: '3-6 months',
      context:
        'This is the most common age of onset. Spasms typically involve a sudden flexion (jackknife motion) — the baby\'s body bends forward, arms fling out or come together, and legs may pull up. Each spasm lasts only 1-2 seconds, but they occur in clusters of 10-40 or more, often upon waking from sleep. Between clusters, the baby may seem irritable or drowsy. Parents sometimes initially mistake spasms for colic, startle reflexes, or gas. Video the events and seek urgent medical evaluation.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Infantile spasms diagnosed in this range still require urgent treatment. You may also notice developmental regression — your baby may lose skills they had previously learned, such as smiling, babbling, or reaching for objects. The EEG typically shows a chaotic pattern called hypsarrhythmia. First-line treatments include hormonal therapy (ACTH) or vigabatrin. Early, effective treatment that stops the spasms can lead to better developmental outcomes.',
    },
    {
      ageRange: '12 months+',
      context:
        'Infantile spasms typically resolve by age 2-4, but many children go on to develop other seizure types, including Lennox-Gastaut syndrome. Developmental prognosis depends heavily on the underlying cause and how quickly treatment was started. Children with cryptogenic (no identified cause) infantile spasms who respond quickly to treatment have the best developmental outlook. Ongoing neurology follow-up and developmental support through early intervention are essential.',
    },
  ],
  whenNormal: [
    'Your baby has a normal startle reflex (Moro reflex) — a single startle that does not repeat in clusters',
    'Your baby has occasional jerking or twitching during sleep transitions (myoclonic jerks) that don\'t occur in clusters',
    'Your baby has colic with crying episodes but no abnormal stiffening or jerking movements',
    'Your baby had a normal EEG after evaluation for suspicious movements',
  ],
  whenToMention: [
    'Your baby has brief, sudden body stiffening or jerking that seems to repeat in groups',
    'Your baby has lost previously achieved developmental skills (such as stopping smiling or babbling)',
    'You have video of movements that look like sudden head drops, body crunches, or arm flinging that repeat',
  ],
  whenToActNow: [
    'Your baby has clusters of sudden jerking or stiffening movements, especially upon waking — record a video and seek same-day medical evaluation, as every day of delay impacts outcomes',
    'Your baby has developmental regression combined with any type of repetitive abnormal movements — this needs urgent neurological evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute of Neurological Disorders and Stroke. Infantile Spasms. NINDS, 2023.',
      url: 'https://www.ninds.nih.gov/health-information/disorders/infantile-spasms',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Infantile Spasms: A Review and Practical Guide. Pediatrics in Review, 2021.',
      url: 'https://publications.aap.org/pediatricsinreview/article/42/11/600/183279/Infantile-Spasms-A-Review-and-Practical-Guide',
    },
  ],
};
