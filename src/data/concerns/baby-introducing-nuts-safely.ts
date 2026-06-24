import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-introducing-nuts-safely',
  title: 'How to Introduce Nuts and Peanuts Safely to My Baby',
  category: 'feeding',
  searchTerms: [
    'introducing peanuts to baby',
    'baby peanut allergy prevention',
    'when can baby eat peanut butter',
    'tree nut introduction baby',
    'LEAP study peanut introduction',
    'baby nut allergy signs',
    'how to give peanut butter to baby',
    'peanut puff baby first food',
    'baby almond butter when',
    'nut introduction baby eczema',
    'early peanut introduction guidelines',
  ],
  quickAnswer:
    'Current guidelines recommend introducing peanut-containing foods to babies around 4-6 months of age, particularly for high-risk babies (those with severe eczema or egg allergy). The landmark LEAP study showed that early introduction of peanut reduces the risk of developing peanut allergy by approximately 80%. Never give whole nuts or chunks of nut butter to babies — instead, offer thin peanut butter mixed into purees, diluted in breast milk, or peanut puffs that dissolve easily.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'The NIAID (National Institute of Allergy and Infectious Diseases) guidelines stratify babies into risk categories for peanut introduction. High-risk babies (severe eczema and/or egg allergy) may benefit from introduction as early as 4-6 months, potentially with allergy testing (skin prick test or blood test) first. Moderate-risk babies (mild to moderate eczema) should have peanut-containing foods introduced around 6 months. Low-risk babies (no eczema or food allergies) can have peanut introduced freely with other solids around 6 months. Talk to your pediatrician about your baby\'s specific risk level.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Safe ways to introduce peanut to babies include: mixing a small amount of smooth peanut butter with warm water or breast milk to thin it (thick peanut butter is a choking hazard), stirring peanut butter into baby cereal or purees, or offering peanut puffs/snacks that dissolve easily. Start with about half a teaspoon of thinned peanut butter and wait at least 2 hours while watching for signs of allergic reaction. If the first exposure goes well, continue offering peanut-containing foods 2-3 times per week to maintain tolerance. The same approach applies to tree nuts (almond, cashew, walnut) — use nut butters thinned or mixed into foods.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Continue offering peanut and tree nut products regularly. Whole nuts and large pieces of nut butter remain a serious choking hazard until age 4 — always serve thinly spread, mixed into foods, or as nut butter powder. If your child has a confirmed nut allergy, work with an allergist on management. Unlike milk and egg allergies, peanut allergy is less commonly outgrown, though about 20% of children with peanut allergy outgrow it. New treatments like oral immunotherapy (OIT) are available for older children with peanut allergy under allergist supervision.',
    },
  ],
  whenNormal: [
    'Your baby eats peanut butter mixed into purees or thinned with milk without any allergic reaction.',
    'Your baby initially rejects the taste of nut butters but accepts them with repeated exposure.',
    'Your baby tolerates peanut products and you offer them regularly 2-3 times per week.',
  ],
  whenToMention: [
    'Your baby has eczema and you want guidance on the safest approach to peanut introduction.',
    'Your baby had a mild reaction (small rash, brief hives) to a nut product and you are unsure whether it is a true allergy.',
    'There is a family history of severe nut allergies and you want your baby tested before introduction.',
  ],
  whenToActNow: [
    'Your baby develops hives, facial or tongue swelling, difficulty breathing, vomiting, or becomes limp after eating a nut product — this may be anaphylaxis. Call 911 and administer epinephrine if prescribed.',
    'Your baby is choking on thick peanut butter or a piece of nut — follow infant choking first aid (back blows and chest thrusts) and call 911 if the airway is not cleared.',
    'Your baby has a known nut allergy and has accidentally consumed nuts and is showing any allergic symptoms — follow your emergency action plan and seek medical care immediately.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-food-allergen-ladder-approach', 'baby-introducing-eggs-safely', 'baby-introducing-dairy-yogurt'],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases — Addendum Guidelines for the Prevention of Peanut Allergy',
      url: 'https://www.niaid.nih.gov/diseases-conditions/guidelines-clinicians-and-patients-food-allergy',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Peanut Allergies: What You Should Know About the Latest Research',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Peanut-Allergies-What-You-Should-Know.aspx',
    },
    {
      org: 'ACAAI',
      citation:
        'American College of Allergy, Asthma and Immunology — Peanut Allergy',
      url: 'https://acaai.org/allergies/allergic-conditions/food/peanut/',
    },
  ],
};
