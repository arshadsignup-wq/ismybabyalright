import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-rsv-vaccine-antibody-prevention',
  title: 'RSV Prevention: Vaccines and Antibody Treatments for Babies',
  category: 'medical',
  searchTerms: [
    'RSV vaccine baby',
    'nirsevimab baby',
    'Beyfortus RSV',
    'RSV prevention infant',
    'RSV antibody shot baby',
    'Abrysvo pregnancy RSV',
    'RSV immunization newborn',
    'RSV shot for babies',
    'when to get RSV vaccine baby',
    'RSV monoclonal antibody infant',
    'palivizumab Synagis baby',
  ],
  quickAnswer:
    'RSV prevention for babies has advanced significantly with two key options: nirsevimab (Beyfortus), a monoclonal antibody given to babies to provide direct protection, and a maternal RSV vaccine (Abrysvo) given during pregnancy to pass protective antibodies to the baby. The AAP and CDC recommend that all infants entering their first RSV season receive nirsevimab. Previously, only high-risk premature infants received RSV protection through palivizumab (Synagis).',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Young infants are at highest risk for severe RSV illness. Nirsevimab (Beyfortus) is recommended for all infants under 8 months entering their first RSV season. It is given as a single injection and provides approximately 5 months of protection. If the mother received the Abrysvo vaccine during pregnancy (given at 32-36 weeks gestation), the baby may not need nirsevimab, though your pediatrician will help decide based on timing. These are not traditional vaccines but monoclonal antibodies that give immediate passive protection.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies 8-19 months old who are at increased risk for severe RSV (due to prematurity, chronic lung disease, congenital heart disease, or immunocompromise) may receive nirsevimab before their second RSV season. For most healthy babies over 8 months, additional RSV prevention is not routinely needed as their immune systems are more mature. Continue standard precautions during RSV season: frequent handwashing, avoiding sick contacts, and keeping your baby away from crowded indoor spaces when possible.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Most toddlers do not need RSV-specific prevention unless they have underlying health conditions that put them at high risk. Children with chronic lung disease, significant congenital heart disease, or severe immunodeficiency may qualify for continued protection. Talk to your pediatrician about whether your toddler needs additional RSV prevention. By this age, most children have already been infected with RSV at least once and have developed some natural immunity, though reinfection is possible.',
    },
  ],
  whenNormal: [
    'Your baby received nirsevimab and is healthy - mild injection site reactions like redness or soreness are normal.',
    'Your baby did not receive RSV prevention and is healthy with no underlying conditions during their second RSV season.',
    'You received the Abrysvo vaccine during pregnancy and your pediatrician confirms your baby has adequate protection.',
  ],
  whenToMention: [
    'You are unsure whether your baby should receive nirsevimab and want to discuss eligibility.',
    'You are pregnant and want to discuss whether the maternal RSV vaccine is right for you.',
    'Your baby has a chronic health condition and you want to understand RSV prevention options.',
  ],
  whenToActNow: [
    'Your baby develops signs of RSV illness regardless of immunization status: fast breathing, wheezing, difficulty feeding, or chest retractions.',
    'Your baby has an allergic reaction after receiving nirsevimab: hives, facial swelling, difficulty breathing.',
    'Your premature or high-risk infant is exposed to RSV and has not received any preventive treatment.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['rsv-baby', 'baby-vaccination-schedule-delayed-catching-up', 'baby-vaccination-hesitancy-social-media'],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention - RSV Immunizations.',
      url: 'https://www.cdc.gov/rsv/vaccines/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Updated Guidance: Use of Nirsevimab for the Prevention of RSV Disease in Infants and Young Children. Pediatrics, 2023.',
      url: 'https://publications.aap.org/pediatrics/article/152/1/e2023061803/192153/Nirsevimab-for-Prevention-of-RSV-in-Healthy',
    },
    {
      org: 'FDA',
      citation:
        'U.S. Food and Drug Administration - FDA Approves New Drug to Prevent RSV in Babies and Toddlers.',
      url: 'https://www.fda.gov/news-events/press-announcements/fda-approves-new-drug-prevent-rsv-babies-and-toddlers',
    },
  ],
};
