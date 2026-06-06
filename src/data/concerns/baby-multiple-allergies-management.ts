import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-multiple-allergies-management',
  title: 'Managing Multiple Allergies in My Baby',
  category: 'medical',
  searchTerms: [
    'baby multiple allergies',
    'managing many allergies baby',
    'baby allergic to multiple foods',
    'multiple food allergies infant',
    'baby several allergies nutrition',
    'baby allergy diet restrictions',
    'multiple allergy management children',
    'baby allergic to many things',
    'nutrition with multiple food allergies',
    'baby allergy dietitian',
  ],
  quickAnswer:
    'Managing multiple allergies can feel overwhelming, but with proper planning and support, your baby can thrive. Key strategies include working with a pediatric allergist and dietitian, reading all food labels carefully, creating safe meal plans, educating all caregivers, and monitoring for nutritional deficiencies. Regular follow-up ensures allergies are being managed optimally and any outgrown allergies are identified.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'If your young baby is diagnosed with multiple allergies (often milk and soy through breast milk or formula), your pediatrician and allergist will guide dietary modifications. If breastfeeding, you may need to eliminate multiple allergens from your own diet. Specialized hypoallergenic or amino acid-based formulas may be recommended. Ensure you are meeting your own nutritional needs.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Continue strict avoidance of identified allergens. A referral to a pediatric dietitian is especially important when multiple foods are restricted to ensure adequate nutrition. Begin planning for solid food introduction with your allergist - having multiple allergies does not mean all new foods are dangerous, but introduction should be strategic.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Introducing solids with multiple allergies requires careful planning. Your allergist may recommend introducing one new food every 3-5 days and starting with lower-risk foods. Safe foods become the foundation of your baby\'s diet. Keeping a food diary helps track reactions and identify patterns. Consider introducing new allergens in the allergist\'s office if risk is high.',
    },
    {
      ageRange: '12-24 months',
      context:
        'As your toddler\'s diet expands, label reading becomes essential. Learn the different names allergens go by on food labels. Prepare most meals at home when possible. A pediatric dietitian can help plan nutritious meals within restrictions. Monitor growth closely, as multiple food restrictions can impact caloric intake and key nutrients.',
    },
    {
      ageRange: '2-3 years',
      context:
        'As your child enters social settings, managing multiple allergies becomes more complex. Develop clear communication strategies with caregivers, preschools, and party hosts. Pack safe snacks and meals when eating outside the home. Regularly re-evaluate allergies with your allergist, as some may be outgrown, which can expand the diet.',
    },
  ],
  whenNormal: [
    'Your baby is growing well and meeting developmental milestones despite dietary restrictions',
    'You have a clear management plan from your allergist and dietitian',
    'Your baby tolerates a varied diet within the allowed foods',
  ],
  whenToMention: [
    'You are struggling to meet your baby\'s nutritional needs within the dietary restrictions',
    'Your baby does not seem to be growing well or has signs of nutritional deficiency',
    'You feel overwhelmed managing multiple allergies and need additional support or resources',
  ],
  whenToActNow: [
    'Your baby has an allergic reaction despite avoidance efforts - administer epinephrine if signs of anaphylaxis are present and call 911',
    'Your baby shows signs of significant nutritional deficiency such as failure to thrive, excessive fatigue, or developmental delays',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-food-allergy-outgrowing',
    'baby-anaphylaxis-emergency-plan',
    'baby-epipen-when-to-use',
    'baby-allergy-testing-skin-vs-blood',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Food Allergies: What You Need to Know. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/allergies-asthma/Pages/Food-Allergies-in-Children.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Food Allergy: Management and Treatment.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/food-allergy-treatments',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Food allergy: Living with food allergies.',
      url: 'https://www.mayoclinic.org/diseases-conditions/food-allergy/diagnosis-treatment/drc-20355101',
    },
  ],
};
