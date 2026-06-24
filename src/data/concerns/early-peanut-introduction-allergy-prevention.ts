import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'early-peanut-introduction-allergy-prevention',
  title: 'Early Peanut Introduction for Allergy Prevention',
  category: 'feeding',
  searchTerms: [
    'peanut allergy prevention baby',
    'when to give peanut butter to baby',
    'LEAP study peanut',
    'early peanut introduction baby',
    'peanut allergy prevention infant',
    'how to introduce peanut baby',
    'peanut butter baby first time',
    'high risk baby peanut allergy',
    'bamba peanut snack baby',
    'peanut powder baby',
  ],
  quickAnswer:
    'The landmark LEAP study demonstrated that introducing peanut-containing foods to babies between 4-11 months reduces the risk of developing peanut allergy by up to 81%. Current NIAID and AAP guidelines recommend early peanut introduction for all babies, with specific guidance based on risk level. High-risk babies (those with severe eczema or egg allergy) should be evaluated by an allergist before introduction. Peanut should be given in age-appropriate forms -- never whole peanuts, which are a choking hazard.',
  byAge: [
    {
      ageRange: '4-6 months',
      context:
        'For high-risk babies (severe eczema and/or egg allergy), the NIAID guidelines recommend peanut introduction as early as 4-6 months, after evaluation that may include skin prick testing or blood testing. If testing is negative, peanut can be introduced at home. If testing shows sensitization, a supervised introduction in a medical setting may be recommended. For moderate-risk babies (mild-moderate eczema), peanut introduction around 6 months is recommended without prior testing. For low-risk babies (no eczema or food allergies), peanut can be introduced along with other solid foods around 6 months.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If you have not yet introduced peanut, this remains an effective window. Age-appropriate forms include: peanut butter thinned with breast milk, formula, or warm water to a smooth consistency; peanut butter mixed into fruit or vegetable puree; peanut powder (like PB2) mixed into puree or oatmeal; or Bamba (an Israeli peanut puff snack that dissolves easily). Start with a small amount (about 1/4 teaspoon of thinned peanut butter) and wait 10 minutes before giving more. Once tolerated, continue offering peanut-containing foods 2-3 times per week.',
    },
    {
      ageRange: '12-36 months',
      context:
        'After successful introduction, the key is regular, continued exposure. Research shows that stopping peanut exposure after introduction can lead to the development of allergy. Continue offering peanut-containing foods at least 2-3 times per week. Peanut butter on toast strips, in smoothies, or in cooking are easy ways to maintain exposure. Continue to avoid whole peanuts and large globs of peanut butter, which remain choking hazards for children under 4. If your child develops a reaction at any point, stop and consult your pediatrician or allergist.',
    },
  ],
  whenNormal: [
    'Your baby tolerated their first peanut exposure with no reaction and you continue to offer it regularly.',
    'Your baby had a small contact rash around the mouth (from the physical contact of food) that resolved quickly -- this is not an allergy.',
    'Your pediatrician guided you through an introduction plan appropriate for your baby\'s risk level.',
  ],
  whenToMention: [
    'Your baby has severe eczema or egg allergy and you want guidance on peanut introduction.',
    'You are nervous about introducing peanut and want to discuss a plan with your pediatrician.',
    'Your baby had a mild reaction (a few hives, slight vomiting) during peanut introduction.',
  ],
  whenToActNow: [
    'Your baby develops signs of anaphylaxis after peanut exposure: widespread hives, facial swelling, vomiting, difficulty breathing, or becoming limp -- call 911.',
    'Your baby has a severe allergic reaction with wheezing or respiratory distress after eating peanut.',
    'Your baby has a known peanut allergy and has accidentally ingested peanut -- administer epinephrine if prescribed and call 911.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['early-allergen-introduction-peanut-egg-safety', 'food-allergy-anaphylaxis-emergency-children', 'cow-milk-protein-allergy-vs-reflux'],
  sources: [
    {
      org: 'NIH',
      citation:
        'Du Toit G, et al. Randomized Trial of Peanut Consumption in Infants at Risk for Peanut Allergy. NEJM, 2015 (LEAP Study).',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1414850',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Addendum Guidelines for the Prevention of Peanut Allergy. NIAID, 2017.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/guidelines-clinicians-and-patients-food-allergy',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Peanut Allergy Prevention: New NIH Guidelines for Parents. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/allergies-asthma/Pages/Peanut-Allergies.aspx',
    },
  ],
};
