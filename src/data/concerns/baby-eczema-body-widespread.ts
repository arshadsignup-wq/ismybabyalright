import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-eczema-body-widespread',
  title: 'Widespread Body Eczema in Baby',
  category: 'skin',
  searchTerms: [
    'baby eczema all over body',
    'baby widespread eczema',
    'baby eczema everywhere',
    'infant eczema whole body',
    'severe eczema baby body',
    'baby eczema covering large area',
    'baby generalized eczema',
    'baby eczema trunk arms legs',
    'baby atopic dermatitis widespread',
    'baby eczema not just face',
  ],
  quickAnswer:
    'When eczema spreads across large areas of your baby\'s body, it can feel overwhelming, but widespread eczema is still very manageable. A consistent "soak and seal" routine (lukewarm baths followed immediately by thick moisturizer), along with prescription treatments if needed, can bring significant relief. Working closely with your pediatrician or a dermatologist is important for widespread eczema.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In young infants, eczema typically starts on the face and may spread to the trunk, arms, and legs. Widespread eczema at this early age may indicate a stronger genetic predisposition, especially if there is a family history of eczema, asthma, or allergies. Frequent moisturizing with a thick cream or ointment is the cornerstone of treatment.',
    },
    {
      ageRange: '3-6 months',
      context:
        'This is a common age for eczema to spread from the face to the body. The trunk, outer arms, and legs may all be affected. A daily "soak and seal" routine is highly effective: bathe in lukewarm water for 5 to 10 minutes, pat skin damp, and immediately apply thick moisturizer. Your pediatrician may prescribe topical steroids for flares.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Widespread eczema may worsen at this age due to increased mobility, sweating, and new food exposures. Identifying and avoiding triggers such as certain fabrics, soaps, or foods can help. If eczema is affecting large areas and not responding to over-the-counter care, prescription treatments and possibly referral to a specialist are appropriate.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers with widespread eczema often need a comprehensive management plan including daily moisturizing, trigger avoidance, and stepped prescription treatment. Many children with widespread eczema begin to improve between ages 2 and 5. In the meantime, working with your healthcare team to find the best treatment combination is key to keeping your child comfortable.',
    },
  ],
  whenNormal: [
    'Mild eczema patches on the cheeks and outer arms that are manageable with moisturizer',
    'Seasonal worsening of eczema that spreads during dry winter months but improves in summer',
  ],
  whenToMention: [
    'Eczema is covering large areas of the body and not controlled with over-the-counter moisturizers',
    'Your baby is intensely itchy and the eczema is disrupting sleep',
    'You want to discuss a comprehensive treatment plan or referral to a dermatologist',
    'You suspect food allergies may be contributing to widespread flares',
  ],
  whenToActNow: [
    'Widespread eczema suddenly worsens with painful blisters or punched-out sores, which could indicate eczema herpeticum',
    'Large areas of eczema become infected with yellow crusting, oozing, warmth, or fever',
    'Your baby has widespread eczema with poor weight gain or failure to thrive',
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
        'American Academy of Dermatology. Eczema: How to Help Your Child Feel Better.',
      url: 'https://www.aad.org/public/diseases/eczema/childhood/treating',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Eczema (Atopic Dermatitis).',
      url: 'https://www.niaid.nih.gov/diseases-conditions/eczema-atopic-dermatitis',
    },
  ],
  relatedConcernSlugs: ['eczema', 'baby-persistent-eczema', 'baby-eczema-face-severe', 'eczema-and-food-allergy-link'],
};
