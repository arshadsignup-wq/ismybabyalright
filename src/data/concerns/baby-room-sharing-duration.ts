import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-room-sharing-duration',
  title: 'How Long Should Baby Share Your Room?',
  category: 'sleep',
  searchTerms: ['how long room share baby','when stop room sharing','baby room sharing duration','AAP room sharing recommendation','room sharing vs own room','baby parents room how long','when move baby own room','room sharing benefits risks','room sharing SIDS','room sharing recommendation'],
  quickAnswer: 'The AAP recommends room-sharing (baby on a separate surface in your room) for at least 6 months, ideally up to 12 months, as it reduces SIDS risk. If room-sharing significantly disrupts everyone\'s sleep after 6 months, transitioning to a separate room is a reasonable and safe choice for many families.',
  byAge: [
    { ageRange: '0-6 months', context: 'Room-sharing is strongly recommended during this period. SIDS risk is highest in the first 6 months. Your baby should sleep on a separate firm surface, not in your bed. A bassinet or mini crib beside your bed is ideal.' },
    { ageRange: '6-9 months', context: 'Many families transition after 6 months. Research shows babies who move to their own room around this time often sleep longer stretches. If room-sharing works for your family, continuing is also fine.' },
    { ageRange: '9-12 months', context: 'The AAP ideal recommendation extends to 12 months. However, if room-sharing causes fragmented sleep for everyone, the benefits of better sleep quality may outweigh the proximity benefit. Use a video monitor for peace of mind.' },
    { ageRange: '12+ months', context: 'After 12 months, SIDS risk drops significantly and the room-sharing recommendation no longer applies. Transition when it makes sense for your family.' },
  ],
  whenNormal: ['You transition around 6-12 months','Room-sharing works well and you continue by choice','Your baby sleeps better after moving to their own room','You use a monitor for reassurance'],
  whenToMention: ['You are severely sleep deprived from room-sharing disruptions','You want to transition but feel anxious about safety','Your family situation makes room-sharing difficult'],
  whenToActNow: ['Your baby has breathing concerns requiring close monitoring','Room-sharing disruptions create unsafe situations'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'Moon RY et al. Sleep-Related Infant Deaths: Updated 2022 Recommendations. Pediatrics. 2022;150(1):e2022057990.', url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/' },
    { org: 'NIH', citation: 'Paul IM et al. Mother-infant room-sharing and sleep outcomes. Pediatrics. 2017;140(1):e20170122.', url: 'https://pubmed.ncbi.nlm.nih.gov/28759407/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Safe Sleep for Babies. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx' },
  ],
  relatedConcernSlugs: ['baby-cosleeping-to-own-room','cosleeping-safety','sleep-safe-environment-checklist'],
};
