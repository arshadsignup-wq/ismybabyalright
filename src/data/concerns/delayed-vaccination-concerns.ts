import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'delayed-vaccination-concerns',
  title: 'Delayed Vaccination: Risks and Considerations',
  category: 'medical',
  searchTerms: [
    'delayed vaccine schedule baby',
    'alternative vaccine schedule',
    'spacing out vaccines',
    'risks of delaying vaccines',
    'is it safe to delay vaccines',
    'selective vaccination baby',
    'spreading out immunizations',
    'vaccine schedule too aggressive',
  ],
  quickAnswer:
    'Delaying vaccines leaves your baby unprotected during the period when they are most vulnerable to serious, preventable diseases. The recommended schedule is designed to provide protection at the earliest safe and effective age. While parents sometimes consider alternative schedules, research consistently shows that the standard schedule is safe and that delaying vaccines increases the window of risk without providing any medical benefit.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns have immature immune systems and rely initially on antibodies passed from their mother. These maternal antibodies begin to decline in the first weeks of life, creating a window of vulnerability. Delaying the 2-month vaccines means your baby is unprotected against whooping cough, which is most dangerous and potentially fatal in infants under 3 months of age.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, maternal antibodies have declined significantly. Babies who have not started their vaccine series are at increased risk for diseases like Hib meningitis and pneumococcal disease, which can progress rapidly in young infants. Each month of delay extends this period of vulnerability without any demonstrated benefit to the child.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies who are behind on vaccines and are increasingly mobile and exposed to more people and environments face a growing risk. Studies show that children on delayed schedules are more likely to remain incompletely vaccinated, meaning they may never catch up. Additionally, more clinic visits to spread out vaccines can increase stress for both parent and child.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers entering daycare or group settings without full vaccination are at higher risk for outbreaks of measles, whooping cough, and other preventable diseases. If your child is behind, a catch-up schedule can safely bring them up to date. Your pediatrician can create a plan to get back on track as efficiently as possible.',
    },
  ],
  whenNormal: [
    'You have questions about the vaccine schedule and want to discuss them with your pediatrician before proceeding',
    'Your baby missed a vaccine dose due to illness and you plan to catch up at the next visit',
    'You feel anxious about vaccines but are willing to follow the recommended schedule after discussing your concerns',
  ],
  whenToMention: [
    'You are considering delaying or skipping vaccines and want to understand the specific risks for your child',
    'Your child is behind on the recommended schedule and you want to create a catch-up plan',
    'You have received conflicting information about vaccine timing from non-medical sources and want evidence-based guidance',
    'Your child has a medical condition and you are unsure if the standard schedule is appropriate',
  ],
  whenToActNow: [
    'Your unvaccinated or undervaccinated child has been exposed to a known case of measles, whooping cough, or another vaccine-preventable disease -- contact your pediatrician immediately for post-exposure guidance',
    'Your unvaccinated infant develops a high fever, stiff neck, persistent cough with whooping sound, or a widespread rash, as these could indicate a serious vaccine-preventable illness',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Vaccine Safety: Examine the Evidence. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/immunizations/Pages/Vaccine-Studies-Examine-the-Evidence.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. If You Choose Not to Vaccinate Your Child, Understand the Risks and Responsibilities.',
      url: 'https://www.cdc.gov/vaccines/hcp/conversations/understanding-vacc-concerns.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. On-time Vaccine Receipt in the First Year Does Not Adversely Affect Neuropsychological Outcomes. Pediatrics.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/20566605/',
    },
  ],
};
