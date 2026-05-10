import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'daycare-illness-frequency-normal',
  title: 'Normal Illness Frequency at Daycare',
  category: 'behavior',
  searchTerms: [
    'baby always sick from daycare',
    'toddler sick every week daycare',
    'how often do kids get sick at daycare',
    'is it normal for daycare kids to be sick all the time',
    'daycare cold after cold',
    'baby runny nose constantly daycare',
    'frequent illness daycare immune system',
    'daycare germs building immunity',
  ],
  quickAnswer:
    'Children in group childcare get an average of 8-12 infections per year, mostly in the first 1-2 years of attendance. This can feel like your child is constantly sick. However, this is normal immune system development — children who attend daycare early tend to have fewer illnesses once they start school compared to children who were home for the first few years. Most daycare illnesses are mild viral infections (colds, stomach bugs) that resolve on their own.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Very young babies in group care may get sick more frequently because their immune systems are immature. Breastfeeding provides some protective antibodies. Ensure the daycare follows strict hand-washing protocols and illness exclusion policies. Any fever (100.4°F/38°C or higher) in a baby under 3 months requires prompt medical evaluation, regardless of daycare attendance.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Maternal antibodies begin to wane during this period, and babies become more susceptible to infections. Common daycare illnesses include upper respiratory infections, ear infections, and hand-foot-and-mouth disease. Ensure your baby\'s vaccinations are up to date.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is often the peak period for daycare illness as maternal antibodies are largely gone and the baby\'s own immune system is still building. It may feel like one cold blends into the next. As long as your baby is growing well, developing normally, and recovering from illnesses, frequent mild infections are building a stronger immune system.',
    },
    {
      ageRange: '12 months+',
      context:
        'Illness frequency typically begins to decrease in the second year of daycare attendance as the immune system has encountered many common viruses. Toddlers in their second year of group care are generally sick less often than in their first year. Good hand hygiene, adequate sleep, and proper nutrition support immune function.',
    },
  ],
  whenNormal: [
    'Your child has 8-12 colds or mild illnesses per year during the first 1-2 years of daycare',
    'Your child seems to have a runny nose almost constantly during the fall and winter months',
    'Each illness resolves within 7-10 days, even if a new one starts shortly after',
    'Your child is growing well and developing normally despite frequent mild illness',
  ],
  whenToMention: [
    'Your child has recurrent ear infections (4+ in a year) or infections that require antibiotics frequently',
    'Illnesses seem to be getting more severe rather than milder over time',
    'Your child is not growing well or is missing developmental milestones, and you wonder if frequent illness is playing a role',
  ],
  whenToActNow: [
    'Your baby under 3 months has a fever of 100.4°F (38°C) or higher — this requires immediate medical evaluation regardless of other symptoms',
    'Your child has signs of a serious infection — high fever unresponsive to medication, difficulty breathing, persistent vomiting, lethargy, or a rash that does not blanch when pressed',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'daycare-readiness-signs',
    'daycare-separation-crying-duration',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Infections in Child Care or School. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/prevention/Pages/Prevention-In-Child-Care-or-School.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Ball, T. et al. Is There an Infection-Mediated Hygiene Effect? Pediatrics. 2002.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/11986440/',
    },
  ],
};
