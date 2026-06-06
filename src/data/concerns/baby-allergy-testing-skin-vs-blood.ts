import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-allergy-testing-skin-vs-blood',
  title: 'Skin Prick vs Blood Test for Allergies - Which Is Better for My Baby?',
  category: 'medical',
  searchTerms: [
    'skin prick test vs blood test baby allergies',
    'which allergy test baby',
    'allergy blood test baby',
    'skin prick test infant',
    'RAST test baby',
    'specific IgE test baby',
    'allergy testing accuracy baby',
    'baby allergy test comparison',
    'best allergy test for toddler',
    'allergy testing options baby',
  ],
  quickAnswer:
    'Skin prick testing is generally preferred because it provides results within 15-20 minutes, is more sensitive, and costs less. Blood testing (specific IgE) is used when skin testing is not practical, such as when the baby has severe eczema covering test sites, takes antihistamines that cannot be stopped, or has had a severe allergic reaction. Both tests measure allergic sensitization, not clinical allergy, so results must be interpreted alongside symptoms.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Allergy testing is rarely performed at this age. If testing is needed, blood testing may be preferred since skin testing in very young infants can produce smaller reactions that are harder to interpret. However, skin testing can be done if clinically indicated.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If allergy testing is recommended, your allergist will choose the most appropriate method based on your baby\'s situation. Skin prick testing may produce smaller wheals in young infants but is still informative. Blood testing requires a blood draw, which can be distressing for both baby and parent.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Both testing methods are increasingly reliable at this age. Skin prick testing is well-tolerated by most babies and provides immediate results during the appointment. Your allergist may test for food and environmental allergens simultaneously. The test feels like tiny scratches and is not deeply painful.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Skin prick testing is very reliable at this age. The test involves placing drops of allergen extract on the skin (usually the back or forearm) and gently scratching the surface. Results appear as small raised bumps within 15-20 minutes. Positive results indicate sensitization, which your allergist will interpret in context of your child\'s actual symptoms.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Both testing methods work well. Skin prick testing remains first-line. Component-resolved diagnostics (a specialized blood test) can help distinguish between true allergy and cross-reactivity in some cases. Your allergist will explain which testing approach is best and what the results mean for your specific child.',
    },
  ],
  whenNormal: [
    'Your allergist recommends one testing method over the other based on your child\'s specific situation',
    'A few positive skin prick results in a child without symptoms to those allergens (sensitization without clinical allergy)',
    'Your allergist recommends monitoring rather than complete avoidance for mild sensitizations',
  ],
  whenToMention: [
    'You have questions about which testing method is best for your child',
    'You want to understand what the test results mean for your baby\'s daily life',
    'You are concerned about the accuracy or safety of allergy testing',
  ],
  whenToActNow: [
    'Your baby has a reaction during or after allergy testing such as widespread hives, swelling, difficulty breathing, or vomiting (extremely rare but possible)',
    'Your baby has had a severe allergic reaction and needs urgent evaluation and testing',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-environmental-allergies-testing',
    'baby-food-allergy-outgrowing',
    'baby-anaphylaxis-emergency-plan',
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
        'National Institute of Allergy and Infectious Diseases. Guidelines for Allergy Testing.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/allergy-testing',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Allergy skin tests vs blood tests.',
      url: 'https://www.mayoclinic.org/tests-procedures/allergy-tests/about/pac-20392895',
    },
  ],
};
