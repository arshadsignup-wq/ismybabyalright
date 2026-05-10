import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'travel-vaccinations-baby',
  title: 'Travel Vaccinations for Babies',
  category: 'medical',
  searchTerms: [
    'baby travel vaccines what shots needed',
    'vaccinations for traveling with infant',
    'can baby travel internationally without all vaccines',
    'travel immunization baby schedule',
    'yellow fever vaccine baby age',
    'malaria prevention baby travel',
    'when can baby get travel vaccines',
    'international travel with unvaccinated baby',
  ],
  quickAnswer:
    'Travel with babies may require additional vaccinations depending on the destination. Some travel vaccines have minimum age requirements — for example, yellow fever vaccine is not given before 9 months, and typhoid vaccine before 2 years. The CDC recommends consulting a travel medicine specialist at least 4-6 weeks before international travel with an infant. Some destinations may not be advisable for young babies due to disease risks that cannot be fully mitigated by vaccination.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Very young babies have incomplete routine immunizations and cannot receive most travel-specific vaccines. International travel to areas with endemic diseases carries higher risk. If travel is necessary, discuss specific risks with your pediatrician. Some countries require specific vaccinations for entry regardless of age.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Routine vaccinations are ongoing. Some travel vaccines can be given earlier than the standard schedule if travel is planned (such as measles vaccine as early as 6 months for high-risk travel, though this dose does not count toward the regular series). Plan travel vaccination at least 4-6 weeks before departure to allow time for immune response.',
    },
    {
      ageRange: '6-12 months',
      context:
        'More vaccines become available at this age, but several travel-specific vaccines still have minimum ages. Hepatitis A vaccine can be given from 6 months for travel purposes. Yellow fever vaccine is recommended from 9 months. Malaria prevention for babies involves nets, protective clothing, and sometimes prophylactic medication — discuss with a travel medicine provider.',
    },
    {
      ageRange: '12 months+',
      context:
        'More travel vaccines become available after the first birthday. Hepatitis A (routine at 12 months), MMR (12 months), and varicella (12 months) provide protection for many destinations. Typhoid vaccine is available from age 2. Always bring your child\'s vaccination records when traveling internationally.',
    },
  ],
  whenNormal: [
    'Your baby is up to date on routine vaccinations and you are consulting with your pediatrician about additional travel vaccines',
    'Some travel vaccines are not available for your baby due to age requirements — this is expected and your provider will discuss alternative protective measures',
    'Your baby has mild side effects (low-grade fever, fussiness) after travel vaccinations',
    'You are planning travel to low-risk destinations and your baby\'s routine vaccinations provide adequate protection',
  ],
  whenToMention: [
    'You are traveling to a region with endemic diseases (malaria, yellow fever, typhoid) and your baby is too young for the recommended vaccines',
    'Your baby had a reaction to a previous vaccine and you are unsure about additional travel vaccinations',
    'You are traveling within 4 weeks and need expedited vaccination advice',
  ],
  whenToActNow: [
    'Your baby develops high fever, rash, severe lethargy, or allergic reaction after receiving a travel vaccine — seek medical care immediately',
    'Your baby becomes ill during or after travel to a region with endemic diseases — symptoms like high fever, rash, severe diarrhea, or jaundice need urgent evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'flying-with-baby-ear-pressure',
    'insect-repellent-safety-baby',
  ],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Travel with Infants and Children. CDC Yellow Book.',
      url: 'https://wwwnc.cdc.gov/travel/yellowbook/2024/travelers-with-additional-considerations/travel-and-breastfeeding',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Immunizations: When to Travel with Your Child. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/immunizations/Pages/Traveling-with-Your-Immunization-Record.aspx',
    },
  ],
};
