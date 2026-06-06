import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-environmental-allergies-testing',
  title: 'Should My Baby Be Tested for Environmental Allergies?',
  category: 'medical',
  searchTerms: [
    'baby allergy testing environmental',
    'allergy testing baby age',
    'when to test baby allergies',
    'baby allergic to dust mites',
    'baby pet allergy testing',
    'baby mold allergy',
    'environmental allergy test infant',
    'baby allergy panel',
    'allergy testing toddler',
    'when to see allergist baby',
  ],
  quickAnswer:
    'Environmental allergy testing can be performed at any age but is most useful after age 2, when allergen sensitization has had time to develop. Testing may be recommended earlier if your baby has persistent symptoms not explained by infections, family history of allergies, or eczema. Your pediatrician can refer to a pediatric allergist who will determine the most appropriate type of testing.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Allergy testing is rarely indicated in very young babies because they have not had enough environmental exposure to develop true sensitization. Nasal congestion and skin issues at this age are more commonly from other causes. Focus on basic environmental measures like reducing irritants (smoke, strong fragrances) rather than pursuing testing.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Testing is still uncommon at this age. However, if your baby has severe eczema that is not responding to treatment, an allergist may test for common environmental and food allergens to help guide management. Skin prick testing can technically be done at any age.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If your baby has persistent wheezing, chronic congestion, or severe eczema, your pediatrician may consider referral to an allergist. Testing at this age can identify sensitization to dust mites, pet dander, and mold, though results should be interpreted cautiously as some sensitizations detected early may not persist.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Allergy testing becomes more reliable and useful at this age. If your toddler has chronic nasal symptoms, recurrent wheezing, or persistent eczema, testing can help identify specific triggers to avoid. Results help guide environmental modifications and treatment decisions.',
    },
    {
      ageRange: '2-3 years',
      context:
        'This is an ideal age for comprehensive environmental allergy testing if symptoms warrant it. Both skin prick testing and blood testing (specific IgE) can be used. Skin prick testing is generally preferred as it provides immediate results and is more sensitive. Your allergist will test for regionally relevant allergens.',
    },
  ],
  whenNormal: [
    'Your baby has occasional cold-related congestion that resolves in 7-10 days and does not need allergy testing',
    'Your baby has mild symptoms that respond well to environmental modifications',
    'Your pediatrician has not identified a pattern suggesting environmental allergies',
  ],
  whenToMention: [
    'Your baby has chronic nasal congestion, sneezing, or itchy eyes that do not seem related to colds',
    'Your baby has eczema along with respiratory symptoms suggesting allergies',
    'There is a strong family history of allergies and your baby has persistent symptoms',
  ],
  whenToActNow: [
    'Your baby has a severe allergic reaction with swelling, hives, difficulty breathing, or anaphylaxis to any exposure',
    'Your baby has severe asthma symptoms that are poorly controlled despite treatment',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-allergy-testing-skin-vs-blood',
    'baby-allergic-rhinitis-signs',
    'baby-seasonal-allergies',
    'baby-allergic-to-pet-dander',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Allergy Testing in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/allergies-asthma/Pages/Allergy-Testing.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Allergy Testing.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/allergy-testing',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Allergy skin tests.',
      url: 'https://www.mayoclinic.org/tests-procedures/allergy-tests/about/pac-20392895',
    },
  ],
};
