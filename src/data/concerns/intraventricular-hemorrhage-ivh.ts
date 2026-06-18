import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'intraventricular-hemorrhage-ivh',
  title: 'My Baby Has a Brain Bleed (Intraventricular Hemorrhage)',
  category: 'medical',
  searchTerms: [
    'intraventricular hemorrhage IVH',
    'brain bleed premature baby',
    'IVH grade 1 2 3 4',
    'IVH prognosis preemie',
    'brain bleed NICU baby',
    'IVH hydrocephalus baby',
    'grade 3 IVH outcome',
    'grade 4 IVH prognosis',
    'brain bleed newborn',
    'IVH shunt baby',
  ],
  quickAnswer:
    'Intraventricular hemorrhage (IVH) is bleeding into or around the brain\'s ventricles, most common in premature babies born before 32 weeks. It is graded 1 through 4: grades 1-2 are mild and usually resolve without lasting effects, while grades 3-4 are more serious and may lead to hydrocephalus, developmental delays, or cerebral palsy. Hearing that your baby has a brain bleed is terrifying, but it is important to know that even with higher grades, outcomes vary and many children do well with appropriate follow-up and early intervention.',
  byAge: [
    {
      ageRange: 'Diagnosis in NICU (first 3 days of life)',
      context:
        'Most IVH occurs within the first 72 hours of life. It is usually detected on routine head ultrasounds performed on premature babies. Grade 1-2 bleeds are very common in extremely premature infants (occurring in up to 25-30%) and typically resolve on their own. Grade 3-4 bleeds are less common but more concerning. Your NICU team will monitor with serial ultrasounds to track whether the bleed is stable, resolving, or causing complications like hydrocephalus.',
    },
    {
      ageRange: '0-3 months corrected age',
      context:
        'After discharge, babies with grade 1-2 IVH are typically followed with routine developmental monitoring. Those with grade 3-4 IVH need closer follow-up including repeat imaging and neurological assessments. If hydrocephalus develops (fluid buildup in the brain), it may require a shunt or reservoir — your neurosurgeon will explain the options. Signs of hydrocephalus include a rapidly growing head circumference, bulging fontanelle, and increased irritability.',
    },
    {
      ageRange: '3-12 months corrected age',
      context:
        'Developmental outcomes become clearer during this period. Many babies with grade 1-2 IVH develop normally. Those with grade 3-4 IVH may show motor delays, particularly in the legs. Physical therapy, occupational therapy, and speech therapy (if needed) should begin early. Your developmental pediatrician will help coordinate care and set realistic, hopeful goals.',
    },
    {
      ageRange: '12 months+ corrected age',
      context:
        'Long-term outcomes depend heavily on the grade and whether complications like hydrocephalus occurred. Many children with low-grade IVH have no lasting effects. Those with higher-grade bleeds may have motor or learning challenges that benefit from ongoing therapy and educational support. Continued developmental monitoring through school age is recommended.',
    },
  ],
  whenNormal: [
    'Your baby has grade 1-2 IVH and the NICU team is following with serial ultrasounds — this is very common in preemies',
    'Follow-up imaging shows the bleed is stable or resolving',
    'Your baby is meeting developmental milestones with or without early intervention support',
  ],
  whenToMention: [
    'Your baby\'s head circumference is growing faster than expected on the growth chart',
    'Your baby seems excessively irritable, is feeding poorly, or has changes in alertness',
    'You are concerned about motor development — your baby seems stiff, floppy, or prefers one side',
    'You have questions about the long-term implications of your baby\'s IVH grade',
  ],
  whenToActNow: [
    'Your baby has seizures — call 911 or go to the emergency room immediately',
    'Your baby\'s fontanelle is bulging, they are vomiting, or they are unusually difficult to wake — these may be signs of increased pressure and require emergency evaluation',
    'Your baby has a sudden change in consciousness or responsiveness',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'periventricular-leukomalacia-pvl',
    'adjusted-age-milestones-preemie',
    'nicu-parent-trauma',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Intraventricular Hemorrhage of the Newborn. StatPearls, 2024.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK537082/',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Brain Bleeds in Premature Babies.',
      url: 'https://www.marchofdimes.org/find-support/topics/birth/brain-bleeds-premature-babies',
    },
    {
      org: 'Stanford Medicine',
      citation:
        'Stanford Medicine Children\'s Health. Intraventricular Hemorrhage.',
      url: 'https://www.stanfordchildrens.org/en/topic/default?id=intraventricular-hemorrhage-90-P02606',
    },
  ],
};
