import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'rsv-prevention-nirsevimab-infant',
  title: 'Nirsevimab (Beyfortus) for RSV Prevention in Infants',
  category: 'medical',
  searchTerms: [
    'nirsevimab baby',
    'Beyfortus RSV',
    'RSV shot for babies',
    'RSV prevention infant',
    'nirsevimab vs palivizumab',
    'RSV antibody baby',
    'Beyfortus side effects',
    'RSV immunization newborn',
    'nirsevimab when to give',
    'RSV monoclonal antibody infant',
    'Beyfortus availability',
  ],
  quickAnswer:
    'Nirsevimab (brand name Beyfortus) is a monoclonal antibody recommended by the CDC and AAP for all infants under 8 months entering their first RSV season, and for certain high-risk children aged 8-19 months entering their second season. Unlike palivizumab (Synagis), which required monthly injections and was limited to high-risk infants, nirsevimab is a single injection that provides protection for an entire RSV season. It is not a vaccine but provides ready-made antibodies that protect against severe RSV disease.',
  byAge: [
    {
      ageRange: '0-8 months (first RSV season)',
      context:
        'All infants under 8 months old entering their first RSV season are recommended to receive nirsevimab. The injection can be given shortly after birth (for babies born during RSV season, typically October through March in most of the US) or before the start of RSV season for babies born earlier. It is a single intramuscular injection that provides approximately 5 months of protection. Nirsevimab can be given alongside routine childhood vaccines. The most common side effect is mild injection site reaction.',
    },
    {
      ageRange: '8-19 months (second RSV season)',
      context:
        'Nirsevimab is recommended for a second season only for children at increased risk of severe RSV, including those born prematurely (before 32 weeks), those with chronic lung disease of prematurity requiring medical treatment in the past 6 months, those with hemodynamically significant congenital heart disease, those who are severely immunocompromised, or children with certain neuromuscular conditions. If your child falls into one of these categories, discuss a second-season dose with your pediatrician.',
    },
    {
      ageRange: 'During RSV season',
      context:
        'RSV season typically runs from October through March in most parts of the United States, though timing varies by region. Nirsevimab should ideally be given just before or at the start of RSV season for maximum protection during peak circulation. If your baby is born during RSV season, they should receive nirsevimab before hospital discharge if possible. The protection lasts approximately five months, which covers the typical RSV season duration. If nirsevimab is unavailable, palivizumab remains an alternative for qualifying high-risk infants.',
    },
  ],
  whenNormal: [
    'Your baby receives nirsevimab and has no reaction or a mild injection site reaction',
    'Your baby receives nirsevimab alongside other routine vaccines without issues',
    'Your baby still gets a mild cold during RSV season despite receiving nirsevimab (it prevents severe disease, not all infection)',
  ],
  whenToMention: [
    'You want to discuss whether your baby qualifies for nirsevimab',
    'Your older infant has risk factors and you want to discuss second-season dosing',
    'You are unsure of your local RSV season timing and want to know the best time for the injection',
    'Your baby had a reaction to the injection that concerns you',
  ],
  whenToActNow: [
    'Your baby has a severe allergic reaction after receiving nirsevimab: hives, facial swelling, difficulty breathing - call 911',
    'Your baby develops signs of severe RSV despite receiving nirsevimab: breathing difficulty, blue skin color, apnea, refusal to feed',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'rsv-baby',
    'rsv-bronchiolitis-when-to-hospitalize',
    'premature-baby-immune-system-fragile',
  ],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Nirsevimab for the Prevention of RSV Disease in Infants and Young Children. CDC, 2024.',
      url: 'https://www.cdc.gov/rsv/clinical/nirsevimab.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Updated Guidance: Use of Nirsevimab for the Prevention of RSV Disease. AAP, 2024.',
      url: 'https://publications.aap.org/pediatrics/article/152/1/e2023061803/192153/Nirsevimab-for-Prevention-of-Respiratory-Syncytial',
    },
    {
      org: 'NIH',
      citation:
        'Hammitt LL, et al. Nirsevimab for Prevention of RSV in Healthy Late-Preterm and Term Infants. New England Journal of Medicine, 2022.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/35235726/',
    },
  ],
};
