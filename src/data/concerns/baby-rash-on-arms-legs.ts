import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-rash-on-arms-legs',
  title: 'Baby Rash on Arms and Legs',
  category: 'skin',
  searchTerms: [
    'baby rash on arms',
    'baby rash on legs',
    'baby bumps on arms and legs',
    'baby red spots arms legs',
    'infant extremity rash',
    'baby rash on limbs',
    'baby rough skin on arms',
    'toddler bumps on legs',
    'baby eczema arms legs',
    'baby keratosis pilaris arms',
  ],
  quickAnswer:
    'Rashes on a baby\'s arms and legs are common and usually caused by dry skin, eczema, keratosis pilaris (small rough bumps), viral rashes, or contact irritation. Most are harmless and respond well to moisturizing and gentle skin care.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns may have dry, peeling skin on their arms and legs, which is perfectly normal, especially in babies born past their due date. Erythema toxicum can appear on the limbs as red blotches. Eczema on the outer arms and legs may begin as early as 2 to 3 months of age. Regular moisturizing with a fragrance-free cream is the best first step.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Eczema commonly appears on the outer surfaces of the arms and legs at this age, presenting as dry, rough, red patches. Heat rash may also appear in elbow and knee creases if the baby is overdressed. Consistent moisturizing and avoiding harsh soaps help manage these rashes effectively.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become more mobile, rashes on the arms and legs may include contact dermatitis from crawling on carpets or grass. Viral rashes from illnesses like hand-foot-and-mouth may cause spots on the arms and legs. Keratosis pilaris, tiny rough bumps on the upper arms, may start becoming visible.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers frequently develop rashes on the arms and legs from eczema, keratosis pilaris, insect bites, and viral illnesses. Eczema tends to shift to the inner creases of elbows and behind the knees at this age. Bumps that look like small, flesh-colored pimples on the upper arms are often keratosis pilaris, which is harmless.',
    },
  ],
  whenNormal: [
    'Small, rough bumps on the upper arms that are not red or itchy, consistent with keratosis pilaris',
    'Mild dry patches on the outer arms or legs that improve with moisturizer',
    'A viral rash on the arms and legs that appears during or after a mild illness',
  ],
  whenToMention: [
    'The rash is intensely itchy, spreading, or causing your baby significant discomfort',
    'Eczema on the arms or legs is not responding to regular moisturizing and gentle care',
    'The rash has an unusual pattern, such as rings, blisters, or a linear streak',
  ],
  whenToActNow: [
    'Non-blanching spots or bruise-like marks appear on the arms or legs without a clear cause',
    'Your baby has a rapidly spreading rash on the limbs along with fever, joint swelling, or difficulty moving',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Eczema in Babies and Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Eczema.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Keratosis Pilaris: Overview.',
      url: 'https://www.aad.org/public/diseases/a-z/keratosis-pilaris-overview',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Keratosis Pilaris: A Common Follicular Hyperkeratosis. Acta Dermato-Venereologica.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/22101869/',
    },
  ],
  relatedConcernSlugs: ['eczema', 'keratosis-pilaris-baby', 'dry-skin', 'viral-rash-baby'],
};
