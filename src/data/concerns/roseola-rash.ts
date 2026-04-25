import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'roseola-rash',
  title: 'My Baby Has Roseola (Sixth Disease)',
  category: 'skin',
  searchTerms: [
    'baby roseola',
    'roseola rash baby',
    'sixth disease baby',
    'baby rash after high fever',
    'HHV-6 baby',
    'roseola infantum',
    'baby fever then rash',
    'exanthem subitum baby',
    'roseola contagious',
    'how long does roseola last',
  ],
  quickAnswer:
    'Roseola is one of the most common childhood illnesses, caused by human herpesvirus 6 (HHV-6). It follows a very predictable pattern: 3-5 days of high fever (often 103-105 degrees F) followed by a pink rash that appears as the fever breaks. By the time the rash appears, your baby is actually getting better, and the rash itself is harmless and fades within 1-3 days.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Roseola is less common before 6 months of age because babies are often still protected by maternal antibodies. However, it can occur, particularly in babies who were not breastfed or whose mothers never had the infection. A high fever in a baby under 3 months always warrants immediate medical evaluation regardless of the suspected cause. For babies 3-6 months with fever, follow your pediatrician\'s guidance on when to call.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is the peak age for roseola. Almost all children are infected with HHV-6 by age 2. The illness begins suddenly with a high fever, often 103-105 degrees F, which can last 3-5 days. Your baby may be fussy but often looks surprisingly well between fever spikes. After the fever breaks, a pink, lacy or spotty rash appears on the trunk and may spread to the face, arms, and legs. The rash does not itch and needs no treatment. Once the rash appears, the illness is essentially over.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Roseola remains common in this age group. The high fever phase can be concerning for parents, and febrile seizures (convulsions triggered by rapid temperature changes) occur in about 10-15% of roseola cases. While febrile seizures are frightening to witness, they are almost always harmless and do not cause brain damage. Manage fever with appropriate doses of acetaminophen or ibuprofen and keep your child hydrated.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By this age, most children have already had roseola, but it can still occur in those who were not previously exposed. Older toddlers sometimes have milder cases with less dramatic fever. A second episode is rare but possible because there is a closely related virus (HHV-7) that can cause a nearly identical illness. After recovery, the virus remains dormant in the body and does not cause future problems in healthy children.',
    },
  ],
  whenNormal: [
    'A high fever lasting 3-5 days followed by a pink rash that appears as the fever resolves',
    'Your baby being fussy during the fever phase but looking well between fever spikes and playing normally',
    'A pink, flat or slightly raised rash on the trunk that fades within 1-3 days and does not itch',
    'Mild nasal congestion, swollen eyelids, or mild diarrhea alongside the fever, which are common with roseola',
  ],
  whenToMention: [
    'The fever lasts longer than 5 days or the rash persists for more than a week',
    'Your baby seems unusually lethargic or is not drinking well even when the fever is controlled with medication',
    'You are unsure whether your baby\'s illness follows the typical roseola pattern',
  ],
  whenToActNow: [
    'Your baby has a febrile seizure (sudden stiffening, jerking, or unresponsiveness during a fever spike). While usually harmless, the first febrile seizure should be evaluated promptly by a doctor.',
    'A baby under 3 months has a fever of 100.4 degrees F or higher, which requires immediate medical evaluation regardless of the suspected cause',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Roseola Infantum. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Roseola-Infantum.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Roseola. Symptoms & Causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/roseola/symptoms-causes/syc-20377283',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Human Herpesvirus 6 (HHV-6).',
      url: 'https://www.cdc.gov/herpes/hhv-6/index.html',
    },
  ],
};
