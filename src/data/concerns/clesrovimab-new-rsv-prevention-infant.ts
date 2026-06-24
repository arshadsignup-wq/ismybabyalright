import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'clesrovimab-new-rsv-prevention-infant',
  title: 'Clesrovimab: New RSV Prevention for Infants',
  category: 'medical',
  searchTerms: [
    'clesrovimab RSV',
    'new RSV prevention baby',
    'clesrovimab infant',
    'RSV antibody shot baby',
    'RSV immunization infant 2025',
    'clesrovimab vs nirsevimab',
    'RSV monoclonal antibody baby',
    'RSV prevention shot newborn',
    'beyfortus alternative',
    'new RSV treatment infant',
  ],
  quickAnswer:
    'Clesrovimab is a long-acting monoclonal antibody being developed for the prevention of RSV (respiratory syncytial virus) lower respiratory tract disease in infants. Similar to nirsevimab (Beyfortus), it provides passive immunity against RSV by giving babies ready-made antibodies. This approach is especially important because RSV remains a leading cause of infant hospitalization, and infants under 6 months are too young for active vaccination. Consult your pediatrician about the latest RSV prevention options for your baby.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns and young infants are at highest risk for severe RSV disease. RSV monoclonal antibodies like clesrovimab are designed to be given as a single injection, typically before or during the RSV season, to provide protection for approximately 5 months. For babies born during RSV season (typically October through March in the Northern Hemisphere), the injection would ideally be given shortly after birth. This is particularly important for this age group, as they cannot receive active RSV vaccines.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies in this age range remain at significant risk for severe RSV. If your baby did not receive RSV immunoprophylaxis at birth, they may still be eligible for a dose before or during RSV season. The protection from monoclonal antibodies like clesrovimab provides coverage during the highest-risk period. Talk to your pediatrician about whether your baby should receive RSV prophylaxis, especially if they are entering their first RSV season.',
    },
    {
      ageRange: '6-24 months',
      context:
        'While RSV risk decreases somewhat with age, children in their first two years are still vulnerable, especially those born prematurely, with chronic lung disease, or with congenital heart disease. RSV immunoprophylaxis recommendations may extend to older high-risk infants. As new products become available, the recommendations may evolve. Your pediatrician can advise whether RSV prophylaxis is recommended for your child based on their risk factors and the current season.',
    },
  ],
  whenNormal: [
    'Your baby received RSV prophylaxis (nirsevimab or clesrovimab) and has no adverse effects beyond mild injection site reactions.',
    'Your baby goes through RSV season without developing significant respiratory illness after receiving prophylaxis.',
    'Your pediatrician discusses RSV prevention options and recommends the best available option for your baby.',
  ],
  whenToMention: [
    'You are unsure whether your baby has received RSV prophylaxis and RSV season is approaching.',
    'Your baby has risk factors for severe RSV (prematurity, chronic lung disease, congenital heart disease) and you want to discuss prevention options.',
    'You have questions about the difference between available RSV prevention products.',
  ],
  whenToActNow: [
    'Your baby shows signs of RSV infection (wheezing, fast breathing, nasal flaring, poor feeding) regardless of whether they received prophylaxis.',
    'Your baby develops a severe allergic reaction after receiving any RSV prophylaxis (difficulty breathing, facial swelling, widespread hives).',
    'Your infant under 3 months develops any respiratory illness with breathing difficulty during RSV season.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['rsv-baby', 'bronchiolitis-baby-signs', 'childhood-immunization-schedule-2026-changes'],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. RSV Immunization for Infants and Young Children. CDC, 2024.',
      url: 'https://www.cdc.gov/rsv/vaccines/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Updated Guidance for Palivizumab Prophylaxis and RSV Immunoprophylaxis. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/152/1/e2023061803/192153/Updated-Guidance-for-Palivizumab-Prophylaxis',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Monoclonal Antibodies for RSV Prevention in Infants. ClinicalTrials.gov.',
      url: 'https://clinicaltrials.gov/ct2/show/NCT04767373',
    },
  ],
};
