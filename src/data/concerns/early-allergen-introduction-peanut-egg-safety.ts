import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'early-allergen-introduction-peanut-egg-safety',
  title: 'Early Introduction of Peanut and Egg: Allergy Prevention',
  category: 'feeding',
  searchTerms: [
    'early allergen introduction baby',
    'when to introduce peanuts baby',
    'egg allergy prevention baby',
    'peanut butter for baby',
    'allergen introduction schedule',
    'early peanut introduction',
    'egg introduction baby',
    'food allergy prevention infant',
    'how to introduce allergens baby',
    'allergen introduction 4 months',
    'mixed allergen powder baby',
  ],
  quickAnswer:
    'Current guidelines recommend introducing allergenic foods, particularly peanut and cooked egg, early (around 4-6 months) rather than delaying them, as early introduction has been shown to significantly reduce the risk of developing food allergies. The landmark LEAP study showed that early peanut introduction reduced peanut allergy risk by up to 80% in high-risk infants. Start with small amounts in age-appropriate forms (peanut butter thinned with breast milk or puree, well-cooked egg). Babies with severe eczema or existing food allergies should be evaluated before introduction.',
  byAge: [
    {
      ageRange: '4-6 months',
      context:
        'This is the optimal window for introducing allergenic foods. Current AAP and NIAID guidelines recommend that peanut-containing foods be introduced around 4-6 months, especially for high-risk babies (those with severe eczema and/or egg allergy). For high-risk infants, your pediatrician may recommend allergy testing (skin prick or blood test) before introduction. For all babies, start with age-appropriate forms: thin peanut butter mixed into puree or breast milk (never whole peanuts), and well-cooked scrambled egg. Offer a small amount and wait 10-15 minutes before giving more.',
    },
    {
      ageRange: '6-9 months',
      context:
        'If you have not yet introduced allergenic foods, this is still an effective time to do so. Along with peanut and egg, other common allergens to introduce include tree nuts (as nut butters), milk (in cooking or yogurt, not as a drink before 12 months), wheat, soy, fish, and shellfish. Introduce one new allergen at a time, waiting 2-3 days between new foods to monitor for reactions. Signs of an allergic reaction include hives, vomiting, facial swelling, or difficulty breathing. Mild eczema flares after a new food may or may not indicate allergy.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Continue to offer allergenic foods regularly (at least three times per week) after successful introduction. Research shows that continued regular exposure is key to maintaining tolerance. If your baby tolerated peanut and egg initially, keep them in the regular rotation. Stopping exposure after introduction could allow sensitization to develop. By this age, your baby can eat more textured versions of allergenic foods, such as pieces of scrambled egg, toast with nut butter, or foods cooked with these ingredients.',
    },
  ],
  whenNormal: [
    'Your baby tries peanut butter or cooked egg for the first time and has no reaction or only a mild rash around the mouth (contact rash, not allergy).',
    'You introduce one allergenic food at a time and monitor for 2-3 days between new introductions.',
    'Your baby has mild eczema and your pediatrician advises early introduction of allergens at home.',
  ],
  whenToMention: [
    'Your baby has moderate to severe eczema and you want guidance on allergen introduction.',
    'Your baby has a known food allergy and you want to introduce other common allergens safely.',
    'Your baby had a mild reaction (rash, mild vomiting) to an allergenic food and you are unsure whether to continue.',
  ],
  whenToActNow: [
    'Your baby develops hives, facial swelling, vomiting, difficulty breathing, or becomes limp and unresponsive after eating an allergenic food (anaphylaxis) -- call 911 immediately.',
    'Your baby develops widespread hives and is wheezing or coughing severely after food exposure.',
    'Your baby has a known severe food allergy and has accidentally ingested the allergen.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['early-peanut-introduction-allergy-prevention', 'food-allergy-anaphylaxis-emergency-children', 'cow-milk-protein-allergy-vs-reflux'],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Addendum Guidelines for the Prevention of Peanut Allergy. NIAID, 2017.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/guidelines-clinicians-and-patients-food-allergy',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Early Introduction of Allergenic Foods. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Food-Allergy-Reactions.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Du Toit G, et al. Randomized Trial of Peanut Consumption in Infants at Risk for Peanut Allergy (LEAP Study). NEJM, 2015.',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1414850',
    },
  ],
};
