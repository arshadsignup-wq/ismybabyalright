import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'childhood-immunization-schedule-2026-changes',
  title: 'Childhood Immunization Schedule: 2026 Updates',
  category: 'medical',
  searchTerms: [
    'childhood vaccine schedule 2026',
    'baby vaccination schedule changes',
    'new vaccines for babies 2026',
    'immunization schedule update',
    'CDC vaccine schedule children',
    'when do babies get vaccines',
    'baby shot schedule',
    'vaccine schedule changes 2026',
    'recommended vaccines infants',
    'childhood immunization changes',
  ],
  quickAnswer:
    'The childhood immunization schedule is reviewed and updated annually by the CDC\'s Advisory Committee on Immunization Practices (ACIP), the AAP, and the American Academy of Family Physicians. The schedule may include changes to timing, new vaccine recommendations, or updates to catch-up schedules. Always consult your pediatrician for the most current recommendations, as the schedule is designed to provide the earliest possible protection during the most vulnerable periods.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'The immunization schedule begins at birth with the hepatitis B vaccine, given before hospital discharge. At 2 months, babies receive their first doses of several vaccines including DTaP, IPV (polio), Hib, PCV15 or PCV20 (pneumococcal), and rotavirus. These early vaccines are critically important because young infants are most vulnerable to serious infections. New additions to the schedule may include updated RSV prevention recommendations with monoclonal antibodies like nirsevimab or clesrovimab for all infants.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Babies receive second and third doses of many vaccines during this period to build robust immunity. The 6-month visit often includes the first influenza vaccine dose (during flu season) and may include COVID-19 vaccination per current recommendations. Following the recommended schedule closely ensures your baby builds immunity before potential exposure. If your baby has missed doses, a catch-up schedule can be arranged with your pediatrician.',
    },
    {
      ageRange: '12-18 months',
      context:
        'This is a busy vaccination period with first doses of MMR, varicella, and hepatitis A, along with booster doses of several earlier vaccines. The 12-15 month visit is also when the first dose of varicella vaccine is given. Changes to the schedule may affect which combination vaccines are recommended or the timing of boosters. Your pediatrician will follow the most current ACIP recommendations and can address questions about any changes.',
    },
    {
      ageRange: '4-6 years',
      context:
        'Before kindergarten, children typically receive booster doses of DTaP, IPV, MMR, varicella, and the second dose of hepatitis A if not already given. This is an important catch-up opportunity for any missed vaccines. Schedule updates may affect the recommended age for certain boosters or introduce new combination vaccine options. Check with your child\'s doctor to ensure they are up to date before school entry.',
    },
  ],
  whenNormal: [
    'Your pediatrician follows the current ACIP-recommended schedule and explains any updates at each visit.',
    'Your child experiences mild side effects after vaccination such as low-grade fever, fussiness, or injection site tenderness.',
    'Your child is slightly behind schedule but your pediatrician has created a catch-up plan.',
  ],
  whenToMention: [
    'You have questions about recent changes to the vaccine schedule or new vaccine recommendations.',
    'Your child has a medical condition that may affect which vaccines are safe or their timing.',
    'You are unsure if your child is up to date on vaccinations, especially if you have changed pediatricians.',
  ],
  whenToActNow: [
    'Your child develops a severe allergic reaction (difficulty breathing, swelling, widespread hives) shortly after receiving a vaccine.',
    'Your child has a very high fever (over 105 degrees F), seizure, or inconsolable crying lasting more than 3 hours after vaccination.',
    'Your unvaccinated child has been exposed to a vaccine-preventable disease like measles or pertussis.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['covid-vaccine-infant-recommendation-changes', 'chickenpox-clusters-children-2025', 'clesrovimab-new-rsv-prevention-infant'],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Recommended Child and Adolescent Immunization Schedule. CDC, 2025.',
      url: 'https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Recommended Childhood and Adolescent Immunization Schedule. Pediatrics, 2025.',
      url: 'https://publications.aap.org/redbook/resources/25379',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. ACIP Vaccine Recommendations and Guidelines. CDC.',
      url: 'https://www.cdc.gov/vaccines/hcp/acip-recs/index.html',
    },
  ],
};
