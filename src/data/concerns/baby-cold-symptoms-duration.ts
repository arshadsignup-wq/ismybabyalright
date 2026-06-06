import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-cold-symptoms-duration',
  title: 'How Long Will My Baby\'s Cold Last?',
  category: 'medical',
  searchTerms: [
    'how long does baby cold last',
    'baby cold duration',
    'baby cold still sick after a week',
    'baby cold how many days',
    'how long cold symptoms baby',
    'baby cold timeline',
    'baby cold getting worse before better',
    'cold lingering baby',
    'baby runny nose how long',
    'baby congestion how long normal',
  ],
  quickAnswer:
    'Most common colds in babies last 7-10 days, with symptoms typically peaking around day 3-5 before gradually improving. The runny nose may linger for up to 2 weeks. Babies in their first year may get 6-8 colds, and those in daycare may get even more. A cold that worsens after initial improvement or lasts beyond 2 weeks may have developed a secondary infection.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Colds in very young babies can be more troublesome because newborns are obligate nose breathers and even mild congestion can interfere with feeding and sleep. A typical cold progresses from initial fussiness and sneezing to peak congestion around day 3-5, then gradual improvement. If your young baby has a cold lasting more than 10 days or develops fever, difficulty breathing, or refuses to feed, seek medical advice promptly.',
    },
    {
      ageRange: '3-6 months',
      context:
        'At this age, babies start losing maternal antibodies and become more susceptible to viruses. A typical cold follows a predictable pattern: days 1-3 bring increasing congestion and possibly fever, days 3-5 are usually the worst, and days 5-10 show gradual improvement. Mucus may change from clear to yellow or green during the cold, which is a normal part of the immune response.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies in this age range who attend daycare may seem to always have a cold. This is normal as they are building their immune system. Each individual cold should follow the typical 7-10 day pattern. If symptoms persist beyond 10-14 days or worsen after initially improving, the cold may have progressed to a sinus or ear infection.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddler colds follow the same timeline but may include more coughing as their cough reflex is more developed. A post-nasal drip cough can persist for 2-3 weeks after other symptoms have resolved, which is annoying but typically harmless. If coughing persists beyond 3 weeks, consult your pediatrician.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By this age, children have built up immunity to many common viruses and may get fewer colds. Each cold still follows the 7-10 day course. Older toddlers can help blow their nose and communicate their symptoms, making management easier. If colds seem to last unusually long or always progress to ear infections, discuss this pattern with your pediatrician.',
    },
  ],
  whenNormal: [
    'Cold symptoms peak around days 3-5 and gradually improve by day 7-10',
    'Mucus changes from clear to yellow or green during the course of the cold',
    'A mild cough lingers for 1-2 weeks after other symptoms resolve',
    'Your baby gets 6-8 colds per year, especially during fall and winter months',
  ],
  whenToMention: [
    'Cold symptoms have not improved at all after 10 days',
    'Your baby seems to recover briefly and then gets worse again (possible secondary infection)',
    'A cough persists for more than 3 weeks after a cold',
  ],
  whenToActNow: [
    'Your baby under 3 months develops cold symptoms with fever above 100.4°F, or at any age develops difficulty breathing, wheezing, high fever, or refuses to feed',
    'Your baby shows signs of dehydration, has labored breathing with rib retractions, appears blue around the lips, or becomes extremely lethargic during a cold',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-cold-green-mucus-meaning',
    'baby-nasal-congestion-relief-methods',
    'common-cold-duration-babies',
    'baby-cold-when-to-worry',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Children and Colds. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Children-and-Colds.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Common cold in babies.',
      url: 'https://www.mayoclinic.org/diseases-conditions/common-cold-in-babies/symptoms-causes/syc-20351651',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Common Cold.',
      url: 'https://www.cdc.gov/common-cold/about/index.html',
    },
  ],
};
