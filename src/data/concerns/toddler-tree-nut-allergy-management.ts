import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-tree-nut-allergy-management',
  title: 'Managing My Toddler\'s Tree Nut Allergy',
  category: 'feeding',
  searchTerms: [
    'toddler tree nut allergy',
    'toddler allergic to nuts',
    'tree nut allergy management child',
    'toddler almond allergy',
    'toddler cashew allergy',
    'toddler walnut allergy',
    'tree nut allergy vs peanut allergy',
    'nut allergy toddler symptoms',
    'tree nut free diet toddler',
    'will child outgrow tree nut allergy',
  ],
  quickAnswer:
    'Tree nut allergies affect about 1% of children and are among the most common causes of severe allergic reactions (anaphylaxis) in children. Unlike peanut allergy (peanuts are legumes, not tree nuts), tree nut allergies are less commonly outgrown — only about 9-14% of children outgrow them. Management involves strict avoidance of the specific tree nuts your child is allergic to, carrying two epinephrine auto-injectors at all times, and having an emergency action plan.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Tree nut allergy may be discovered during early food introduction. Current guidelines recommend introducing tree nuts early (around 6 months) in age-appropriate forms — finely ground nut powder or thin nut butter mixed into purees — to potentially reduce allergy risk. If your baby has a reaction, stop the food, treat symptoms, and see an allergist for testing. Your child may be allergic to one tree nut but not others, so testing can help determine which specific nuts to avoid. Never give whole nuts or large pieces to babies due to choking risk.',
    },
    {
      ageRange: '12-24 months',
      context:
        'If your toddler has a confirmed tree nut allergy, strict avoidance is essential. Common tree nuts include almonds, cashews, walnuts, pecans, pistachios, macadamia nuts, Brazil nuts, and hazelnuts. Cross-contamination is a significant concern — many foods are processed in facilities that handle tree nuts. Read all food labels carefully, looking for "may contain tree nuts" or "processed in a facility with tree nuts" warnings. Tree nut allergy does not automatically mean peanut allergy, though about 30-40% of tree nut allergic children are also allergic to peanuts.',
    },
    {
      ageRange: '2-5 years',
      context:
        'As your child enters preschool or daycare, communication with caregivers is critical. Provide a written allergy action plan, train staff on epinephrine auto-injector use, and ensure your child wears a medical alert bracelet. Begin age-appropriate education — teach your child to say "I am allergic to nuts" and to never accept food from others without a parent or caregiver checking first. Your allergist will monitor the allergy over time, though tree nut allergies are less likely to be outgrown than milk or egg allergies.',
    },
  ],
  whenNormal: [
    'Your toddler has been diagnosed with tree nut allergy and is safely managed with avoidance and an action plan',
    'Your toddler is allergic to one type of tree nut but tolerates others — this is common',
    'Your toddler tolerates peanuts despite having a tree nut allergy — these are different allergens',
  ],
  whenToMention: [
    'You are uncertain which specific tree nuts your child needs to avoid and want clarification',
    'Your child has had accidental exposures and you need to review your avoidance strategies',
    'You want to discuss whether oral food challenges or allergy testing updates are appropriate',
  ],
  whenToActNow: [
    'Your toddler shows signs of anaphylaxis after eating tree nuts: difficulty breathing, widespread hives, facial swelling, vomiting, wheezing, or becoming limp — give epinephrine and call 911 immediately',
    'Your toddler is having an allergic reaction and you are unsure about severity — administer epinephrine and call 911; it is always better to give epinephrine unnecessarily than to delay treatment',
    'Your toddler has had anaphylaxis and you do not have a current epinephrine prescription — see your allergist urgently',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-egg-allergy-management',
    'toddler-milk-allergy-alternatives',
    'toddler-soy-allergy-concerns',
    'hives',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Tree Nut Allergy. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Tree-Nut-Allergy.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Food Allergy Guidelines.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/food-allergy-guidelines',
    },
    {
      org: 'ACAAI',
      citation:
        'American College of Allergy, Asthma and Immunology. Tree Nut Allergy.',
      url: 'https://acaai.org/allergies/allergic-conditions/food/tree-nut/',
    },
  ],
};
