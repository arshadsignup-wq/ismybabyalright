import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-introducing-eggs-safely',
  title: 'How to Introduce Eggs Safely to My Baby',
  category: 'feeding',
  searchTerms: [
    'introducing eggs to baby',
    'when can baby eat eggs',
    'baby egg allergy signs',
    'how to give egg to baby first time',
    'scrambled eggs baby age',
    'baby egg yolk first',
    'egg allergy baby symptoms',
    'baby allergic to eggs',
    'cooked egg for baby 6 months',
    'introducing eggs to baby with eczema',
  ],
  quickAnswer:
    'Eggs can be introduced to babies starting around 6 months of age, and current evidence supports early introduction to reduce the risk of egg allergy. Offer well-cooked egg (scrambled, hard-boiled, or as part of baked goods) — never give raw or undercooked egg to a baby. Start with a small amount and watch for allergic reactions for at least 2 hours. Babies with severe eczema or existing food allergies may benefit from evaluation by an allergist before introduction.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Eggs should not be introduced before your baby is ready for solid foods. The landmark LEAP and EAT studies showed that early introduction of allergenic foods (around 4-6 months) may reduce the risk of developing food allergies. If your baby has severe eczema (which is a risk factor for food allergies), discuss with your pediatrician whether early introduction of egg and other allergens before 6 months may be beneficial. Your pediatrician may recommend allergy testing before introduction if eczema is severe.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Offer well-cooked egg in age-appropriate forms. For younger babies (6-8 months), scrambled egg, mashed hard-boiled egg yolk, or egg mixed into purees work well. Ensure eggs are cooked through — no runny yolks or soft-cooked eggs for babies. Start with about half a teaspoon and wait at least 2 hours before offering more, watching for signs of allergic reaction: hives, swelling (especially lips, eyes, face), vomiting, coughing or wheezing, or a widespread rash. If the first exposure goes well, continue offering egg regularly (at least 2-3 times per week) to maintain tolerance.',
    },
    {
      ageRange: '12-36 months',
      context:
        'By this age, eggs can be a regular part of your toddler\'s diet. Eggs are an excellent source of protein, choline (important for brain development), vitamin D, and iron. Continue cooking eggs thoroughly for young children to reduce the risk of Salmonella infection. If your child had a previous egg reaction, work with an allergist on an egg ladder (starting with baked egg in a muffin, which is less allergenic, and gradually working up to scrambled or fried egg). Approximately 70% of children with egg allergy tolerate baked egg, and regular exposure to baked egg may accelerate outgrowing the allergy.',
    },
  ],
  whenNormal: [
    'Your baby eats well-cooked egg without any signs of allergic reaction and enjoys the texture.',
    'Your baby has a small red area around the mouth from egg contact that fades within 30 minutes — this is likely a contact reaction, not a true allergy.',
    'Your baby initially gags on the texture of scrambled egg but accepts it with practice — this is a normal texture learning process.',
  ],
  whenToMention: [
    'Your baby has eczema and you want guidance on the safest way to introduce egg.',
    'Your baby had a mild reaction (small rash or brief vomiting) to egg and you are unsure whether to continue offering it.',
    'There is a strong family history of egg allergy and you want your baby tested before introduction.',
  ],
  whenToActNow: [
    'Your baby develops hives, facial swelling, difficulty breathing, repeated vomiting, or becomes pale and limp after eating egg — this is a possible anaphylactic reaction. Call 911 and administer epinephrine if prescribed.',
    'Your baby has widespread hives and is having coughing or wheezing within minutes to hours of eating egg — seek emergency medical care.',
    'Your baby has a known egg allergy and has accidentally consumed egg and is showing any allergic symptoms — follow your emergency action plan and seek medical care.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-food-allergen-ladder-approach', 'baby-introducing-nuts-safely', 'baby-introducing-dairy-yogurt'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Egg Allergy in Children',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Egg-Allergy-in-Children.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases — Addendum Guidelines for Peanut Allergy Prevention (Including Early Allergen Introduction)',
      url: 'https://www.niaid.nih.gov/diseases-conditions/guidelines-clinicians-and-patients-food-allergy',
    },
    {
      org: 'ACAAI',
      citation:
        'American College of Allergy, Asthma and Immunology — Egg Allergy',
      url: 'https://acaai.org/allergies/allergic-conditions/food/egg/',
    },
  ],
};
