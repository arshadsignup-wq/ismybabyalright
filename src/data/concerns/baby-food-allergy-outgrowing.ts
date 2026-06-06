import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-food-allergy-outgrowing',
  title: 'Will My Baby Outgrow Their Food Allergy?',
  category: 'medical',
  searchTerms: [
    'baby outgrow food allergy',
    'will baby outgrow milk allergy',
    'outgrow egg allergy baby',
    'food allergy resolution children',
    'baby allergy go away',
    'when do kids outgrow food allergies',
    'peanut allergy outgrow',
    'food allergy tolerance baby',
    'oral food challenge baby',
    'reintroducing allergen baby',
  ],
  quickAnswer:
    'Many children outgrow certain food allergies. About 80% outgrow milk allergy by age 5, and about 70% outgrow egg allergy by age 5. Wheat and soy allergies are also commonly outgrown. However, peanut, tree nut, fish, and shellfish allergies are more likely to persist. Your allergist monitors your baby\'s allergy levels over time and can perform a supervised oral food challenge when appropriate to determine if the allergy has been outgrown.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Allergies diagnosed very early (such as cow\'s milk protein allergy presenting as bloody stools or severe eczema) have a good chance of being outgrown. Your pediatrician or allergist will monitor and plan for eventual reintroduction under medical supervision, usually not before 9-12 months of age.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If your baby was diagnosed with a food allergy, strict avoidance is the current standard while the immune system matures. Your allergist may repeat allergy testing (blood IgE levels) every 6-12 months to track whether levels are decreasing, which is a positive sign that the allergy may be resolving.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Some babies who reacted to foods early on may show decreasing allergy levels. However, do not reintroduce any allergen without your allergist\'s guidance. Your allergist may recommend a supervised oral food challenge in their office if blood tests suggest the allergy may be resolving.',
    },
    {
      ageRange: '12-24 months',
      context:
        'This is a common time for allergists to consider oral food challenges for allergies to milk, egg, wheat, or soy if testing suggests improvement. An oral food challenge involves eating gradually increasing amounts of the food under medical supervision over several hours. This is the gold standard for confirming whether an allergy has been outgrown.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 2-3, many milk and egg allergies have resolved. If your child tolerates baked forms (baked milk in muffins, baked egg in cake), this is a positive sign that full tolerance may develop. Peanut and tree nut allergies are less likely to be outgrown, but about 20% of children do outgrow peanut allergy.',
    },
  ],
  whenNormal: [
    'Your baby\'s allergy test levels are gradually decreasing over time',
    'Your baby tolerates baked forms of an allergen (like baked milk or egg) even if still reactive to the uncooked form',
    'Your allergist is optimistic about the trajectory and is planning an oral food challenge',
  ],
  whenToMention: [
    'You want to know if your baby\'s specific allergy is likely to be outgrown',
    'You are interested in the timeline for re-evaluation and possible oral food challenge',
    'You have heard about oral immunotherapy and want to know if it is appropriate for your child',
  ],
  whenToActNow: [
    'Your baby has accidentally been exposed to their allergen and is showing any symptoms beyond mild localized hives',
    'You attempted to reintroduce an allergen at home without medical supervision and your baby is having a reaction',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-multiple-allergies-management',
    'baby-anaphylaxis-emergency-plan',
    'baby-epipen-when-to-use',
    'baby-allergy-testing-skin-vs-blood',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Food Allergies in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/allergies-asthma/Pages/Food-Allergies-in-Children.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Guidelines for the Diagnosis and Management of Food Allergy.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/guidelines-clinicians-and-patients-food-allergy',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Food allergy in children.',
      url: 'https://www.mayoclinic.org/diseases-conditions/food-allergy/symptoms-causes/syc-20355095',
    },
  ],
};
