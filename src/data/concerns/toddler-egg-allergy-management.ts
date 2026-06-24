import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-egg-allergy-management',
  title: 'Managing My Toddler\'s Egg Allergy',
  category: 'feeding',
  searchTerms: [
    'toddler egg allergy',
    'baby allergic to eggs',
    'egg allergy management toddler',
    'toddler egg allergy symptoms',
    'can toddler outgrow egg allergy',
    'baked egg allergy toddler',
    'egg allergy alternatives toddler',
    'egg allergy rash baby',
    'toddler egg intolerance',
    'egg free diet toddler',
  ],
  quickAnswer:
    'Egg allergy is one of the most common food allergies in children, affecting about 2% of young children. The good news is that approximately 70% of children with egg allergy outgrow it by age 16, and many outgrow it by age 5. Management involves strict avoidance of egg-containing foods, having an emergency action plan, and working with your allergist to determine if your child can tolerate baked egg products, which many egg-allergic children can.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Egg allergy is often first discovered when eggs are introduced as a solid food. Reactions can range from mild hives and vomiting to severe anaphylaxis. Current guidelines actually recommend early introduction of eggs (around 6 months) to potentially prevent allergy development, but once an allergy is confirmed, strict avoidance is necessary. Your pediatrician will likely refer you to a pediatric allergist for skin prick testing or blood work to confirm the diagnosis and develop a management plan.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Managing egg allergy at this age involves learning to read food labels carefully, as egg is found in many unexpected products including some pastas, baked goods, marshmallows, and processed meats. By law, egg must be clearly listed on food labels in the United States. Your allergist may recommend an oral food challenge to determine if your toddler can tolerate baked egg (egg in muffins or cakes), which about 70% of egg-allergic children can. Tolerating baked egg is associated with a higher likelihood of outgrowing the allergy.',
    },
    {
      ageRange: '2-4 years',
      context:
        'Your allergist will typically retest your child periodically to see if the allergy is being outgrown. Declining IgE levels on blood tests are a positive sign. Many children who tolerate baked egg are eventually able to tolerate lightly cooked egg as well. If your child is in daycare or preschool, ensure that the school has an allergy action plan and that staff are trained to recognize and respond to allergic reactions. Always have two epinephrine auto-injectors available.',
    },
  ],
  whenNormal: [
    'Your toddler gets mild hives around the mouth after eating egg — this is a common mild reaction (but still discuss with your doctor)',
    'Your toddler has been diagnosed with egg allergy and tolerates baked egg products without issues',
    'Your toddler\'s allergy blood test levels are declining over time, suggesting they may be outgrowing the allergy',
  ],
  whenToMention: [
    'Your toddler had a reaction to a food and you suspect egg allergy but have not had formal testing',
    'Your toddler\'s reactions seem to be getting more severe with accidental exposures',
    'You are struggling to maintain an egg-free diet and need guidance from a dietitian',
  ],
  whenToActNow: [
    'Your toddler has signs of anaphylaxis after eating egg: difficulty breathing, widespread hives, swelling of face or throat, vomiting, or becoming limp — administer epinephrine and call 911 immediately',
    'Your toddler is having a reaction and you are unsure whether to use the epinephrine auto-injector — when in doubt, use it and call 911',
    'Your toddler has had a severe allergic reaction and you do not have an epinephrine auto-injector — go to the emergency room immediately',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-milk-allergy-alternatives',
    'toddler-soy-allergy-concerns',
    'toddler-tree-nut-allergy-management',
    'hives',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Egg Allergy in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Egg-Allergy-in-Children.aspx',
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
        'American College of Allergy, Asthma and Immunology. Egg Allergy.',
      url: 'https://acaai.org/allergies/allergic-conditions/food/egg/',
    },
  ],
};
