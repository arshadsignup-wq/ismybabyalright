import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-group-b-strep-infection',
  title: 'Group B Strep (GBS) Infection in Newborns',
  category: 'medical',
  searchTerms: [
    'group B strep baby',
    'GBS infection newborn',
    'baby group B streptococcus',
    'GBS positive mother baby',
    'newborn GBS sepsis',
    'group B strep meningitis baby',
    'GBS prevention antibiotics labor',
    'baby born to GBS positive mother',
    'late onset GBS baby',
    'group B strep symptoms baby',
  ],
  quickAnswer:
    'Group B Streptococcus (GBS) is a bacterium that some mothers carry and can pass to their baby during delivery. When mothers who test positive receive antibiotics during labor, the risk to the baby is greatly reduced. GBS infection in newborns can be serious, causing sepsis, pneumonia, or meningitis, but with prevention measures and prompt treatment, most babies do well.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Early-onset GBS disease occurs within the first week of life (usually within 24-48 hours) and is acquired during passage through the birth canal. Prevention through maternal antibiotic treatment during labor has dramatically reduced early-onset GBS disease. If your baby was born to a GBS-positive mother who received adequate antibiotics during labor, the risk is very low. Babies born to GBS-positive mothers who did not receive adequate antibiotics, or who show any signs of illness, are monitored closely and may receive empiric antibiotics. Late-onset GBS disease (1 week to 3 months) can occur from maternal or environmental sources.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Late-onset GBS disease can occur during this period. Signs include fever, irritability, poor feeding, and lethargy. Late-onset GBS can cause meningitis, bloodstream infection, or bone/joint infection. Any fever in a baby under 3 months requires emergency evaluation, which includes testing for GBS among other bacterial causes.',
    },
    {
      ageRange: '3-6 months',
      context:
        'GBS infection becomes very rare after 3 months of age. Babies who had GBS infections that were treated promptly typically recover fully. Those who had GBS meningitis may need developmental follow-up.',
    },
    {
      ageRange: '6-12 months',
      context:
        'GBS infection risk is negligible at this age. Babies who recovered from GBS infection in the newborn period should have normal development, though those who had meningitis may need monitoring for hearing and developmental milestones.',
    },
  ],
  whenNormal: [
    'Mother was GBS positive, received adequate antibiotics during labor, and baby has been well since birth',
    'Baby was observed for the recommended period after birth and showed no signs of infection',
    'Baby is feeding well, maintaining normal temperature, and is alert and active',
  ],
  whenToMention: [
    'You were GBS positive and are unsure if you received adequate antibiotics during labor',
    'Your baby seems slightly unwell in the first few days after birth',
    'You have questions about GBS prevention for future pregnancies',
  ],
  whenToActNow: [
    'Any fever, poor feeding, lethargy, rapid breathing, or unusual irritability in a newborn, especially if born to a GBS-positive mother or if maternal antibiotic treatment was incomplete',
    'Signs of infection at any point in the first 3 months of life',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Prevention of Group B Streptococcal Disease in Newborns. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/144/2/e20191881/38284/Management-of-Infants-at-Risk-for-Group-B',
    },
    {
      org: 'CDC',
      citation: 'Centers for Disease Control and Prevention. Group B Strep Prevention.',
      url: 'https://www.cdc.gov/groupbstrep/about/index.html',
    },
  ],
  relatedConcernSlugs: ['newborn-infection-signs-sepsis', 'newborn-fever-under-3-months'],
};
