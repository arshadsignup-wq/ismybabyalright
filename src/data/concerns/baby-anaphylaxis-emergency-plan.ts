import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-anaphylaxis-emergency-plan',
  title: 'Creating an Anaphylaxis Emergency Plan for My Baby',
  category: 'medical',
  searchTerms: [
    'anaphylaxis plan baby',
    'baby anaphylaxis emergency',
    'anaphylaxis action plan infant',
    'baby severe allergic reaction plan',
    'allergy emergency plan baby',
    'anaphylaxis signs baby',
    'baby allergy emergency what to do',
    'anaphylaxis protocol children',
    'allergy action plan daycare',
    'managing anaphylaxis risk baby',
  ],
  quickAnswer:
    'An anaphylaxis emergency plan is essential for any baby diagnosed with a severe allergy. It should include how to recognize anaphylaxis (hives, swelling, difficulty breathing, vomiting, lethargy), when and how to use epinephrine (EpiPen Jr), and instructions to call 911 immediately. All caregivers, family members, and childcare providers should have copies of the plan and be trained to use the epinephrine auto-injector.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Anaphylaxis is very rare in very young babies but can occur with cow\'s milk protein allergy or medication reactions. If your baby has been prescribed an epinephrine auto-injector, keep it with the baby at all times. Learn to administer it into the outer thigh, through clothing if necessary. Even in young infants, epinephrine is the first-line life-saving treatment.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As allergen introduction begins (foods, medications), the risk of discovering a severe allergy increases. Know the early signs of anaphylaxis: widespread hives, facial or tongue swelling, vomiting, difficulty breathing, and sudden lethargy. If you see two or more body systems involved (skin plus breathing, skin plus GI), use epinephrine and call 911.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is the peak age for discovering food allergies as new foods are introduced. Your anaphylaxis plan should include: the allergen(s), how to avoid exposure, signs to watch for, when to use epinephrine, emergency contact numbers, and hospital preference. Keep two epinephrine auto-injectors available at all times.',
    },
    {
      ageRange: '12-24 months',
      context:
        'As your toddler eats more varied foods and interacts with more people, ensure all caregivers are trained. Practice with the trainer device regularly. The plan should be posted visibly at home and copies provided to daycare, grandparents, and babysitters. Review the plan with your allergist annually.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Begin age-appropriate education about allergen avoidance. Teach your toddler to say "no" to offered foods and to tell an adult if something feels wrong. Update the emergency plan as your child\'s allergies are reassessed. Some allergies may be outgrown, while others persist - regular follow-up with your allergist is important.',
    },
  ],
  whenNormal: [
    'You have a written plan, trained caregivers, and unexpired epinephrine auto-injectors available',
    'Your baby has had a mild allergic reaction (localized hives) that responded to antihistamine',
    'You are proactively preparing a plan after an allergy diagnosis, even before a severe reaction has occurred',
  ],
  whenToMention: [
    'You need help creating or updating your baby\'s anaphylaxis emergency plan',
    'You want a demonstration of how to use the epinephrine auto-injector',
    'Your baby\'s epinephrine auto-injector is approaching its expiration date',
  ],
  whenToActNow: [
    'Your baby shows ANY signs of anaphylaxis: widespread hives with swelling, difficulty breathing, vomiting, or becoming limp or unresponsive - give epinephrine immediately and call 911',
    'You have used epinephrine on your baby - always go to the emergency room even if symptoms improve, as anaphylaxis can have a second wave (biphasic reaction)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-epipen-when-to-use',
    'baby-allergic-reaction-medicine',
    'baby-food-allergy-outgrowing',
    'baby-multiple-allergies-management',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Anaphylaxis. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/allergies-asthma/Pages/Anaphylaxis.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Guidelines for Anaphylaxis Management.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/guidelines-clinicians-and-patients-food-allergy',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Voluntary Guidelines for Managing Food Allergies in Schools.',
      url: 'https://www.cdc.gov/healthy-schools/food-allergies/index.html',
    },
  ],
};
