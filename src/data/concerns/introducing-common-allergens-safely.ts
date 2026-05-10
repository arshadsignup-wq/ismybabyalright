import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'introducing-common-allergens-safely',
  title: 'Introducing Common Allergens Safely',
  category: 'feeding',
  searchTerms: [
    'introducing allergens to baby',
    'peanut allergy prevention baby',
    'when to introduce eggs baby',
    'baby food allergy introduction',
    'early allergen introduction',
    'allergic reaction baby food',
    'tree nut introduction infant',
    'dairy allergy introduction baby',
    'shellfish baby safe age',
    'wheat introduction baby',
  ],
  quickAnswer:
    'Current guidelines from the AAP and NIAID recommend introducing common allergenic foods (peanuts, eggs, cow\'s milk products, tree nuts, wheat, soy, fish, shellfish, and sesame) around 4-6 months of age, and not delaying their introduction. The landmark LEAP study showed that early peanut introduction (4-6 months) reduced peanut allergy risk by up to 81% in high-risk infants. Introduce one allergen at a time and wait 3-5 days before adding another to monitor for reactions.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'No allergenic solid foods should be introduced at this age. However, if your baby has severe eczema or an existing egg allergy, discuss early allergen introduction planning with your pediatrician or allergist. The NIAID guidelines recommend that high-risk infants (those with severe eczema and/or egg allergy) begin peanut-containing foods as early as 4-6 months, potentially after allergy testing.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Around 4-6 months, when your baby is showing signs of readiness for solids, is the ideal time to begin introducing allergenic foods. For peanuts, mix smooth peanut butter with breast milk, formula, or warm water to create a thin puree (never give whole peanuts or chunks). For eggs, offer well-cooked scrambled egg or hard-boiled egg yolk mashed smooth. Start with a small amount and observe for 2 hours. If no reaction occurs, continue offering the allergen regularly (2-3 times per week) to maintain tolerance.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Continue introducing and regularly offering allergenic foods. The top allergens to introduce during this window include peanut, egg, cow\'s milk (in foods like yogurt and cheese, not as a drink), tree nuts (as smooth butters), wheat, soy, fish, shellfish, and sesame. Regular exposure is key: studies show that inconsistent or one-time introductions are less effective at building tolerance. Introduce one new allergen every 3-5 days. Signs of an allergic reaction include hives, vomiting, swelling, or difficulty breathing.',
    },
    {
      ageRange: '12 months+',
      context:
        'By this age, most allergens should already have been introduced. Continue offering a variety of allergenic foods regularly as part of the normal diet. If your toddler has been tolerating an allergen, there is no reason to stop offering it. If a food allergy has been confirmed, strictly avoid that allergen and work with your pediatrician or allergist on a management plan. Having epinephrine auto-injectors available if prescribed and knowing how to use them is essential.',
    },
  ],
  whenNormal: [
    'Your baby has mild redness around the mouth after eating a new food, which clears within an hour (this is often contact irritation, not allergy)',
    'Your baby tolerates allergenic foods without any hives, swelling, vomiting, or breathing changes',
    'Your baby spits out or refuses a new food based on taste or texture preference rather than a reaction',
    'You are introducing one new allergen at a time and regularly offering previously tolerated allergens',
  ],
  whenToMention: [
    'Your baby has mild hives (a few welts) after eating a new food that resolve within an hour',
    'Your baby has significant eczema and you want guidance on the safest approach to allergen introduction',
    'Your family has a strong history of food allergies and you are unsure when and how to introduce specific allergens',
  ],
  whenToActNow: [
    'Your baby has hives spreading over the body, facial swelling (especially lips, tongue, or throat), vomiting, or difficulty breathing after eating a new food; administer epinephrine if available and call 911',
    'Your baby becomes suddenly limp, pale, or unresponsive after consuming a potential allergen, which may indicate anaphylaxis',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'Greer FR, Sicherer SH, Burks AW; Committee on Nutrition and Section on Allergy and Immunology. The Effects of Early Nutritional Interventions on the Development of Atopic Disease in Infants and Children. Pediatrics. 2019;144(4):e20190281.',
      url: 'https://publications.aap.org/pediatrics/article/144/4/e20190281/38425/The-Effects-of-Early-Nutritional-Interventions-on',
    },
    {
      org: 'NIH',
      citation:
        'NIAID. Addendum Guidelines for the Prevention of Peanut Allergy in the United States. National Institute of Allergy and Infectious Diseases.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/guidelines-clinicians-and-patients-food-allergy',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Food Allergy Reactions. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Food-Allergy-Reactions.aspx',
    },
  ],
};
