import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'multiple-food-allergies-baby',
  title: 'Multiple Food Allergies in Babies',
  category: 'feeding',
  searchTerms: [
    'multiple food allergies baby',
    'baby allergic to many foods',
    'baby reacting to everything',
    'managing multiple food allergies infant',
    'baby nutrition with food allergies',
    'elimination diet baby multiple allergies',
    'allergist referral baby food allergy',
    'baby allergic to milk eggs and peanuts',
  ],
  quickAnswer:
    'Some babies are allergic to more than one food, which can make feeding challenging. The most common allergens in babies are milk, egg, peanut, tree nuts, soy, wheat, fish, and shellfish. Babies with moderate-to-severe eczema are at higher risk for multiple food allergies. Working with a pediatric allergist and registered dietitian is essential to ensure your baby gets adequate nutrition while safely avoiding trigger foods.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        "Multiple food allergies in young infants most commonly involve cow's milk and soy proteins. If your breastfed baby has symptoms like blood in stool or severe eczema, your pediatrician may recommend eliminating dairy and soy from your diet. For formula-fed babies, extensively hydrolyzed or amino acid-based formulas are the safest options. Keep a detailed symptom diary to help identify triggers.",
    },
    {
      ageRange: '3-6 months',
      context:
        "Before introducing solids, babies at high risk for multiple food allergies (those with severe eczema or a known food allergy) should ideally be evaluated by an allergist. Testing can identify which foods to introduce cautiously versus which to avoid. Current evidence supports early introduction of allergenic foods even in high-risk babies, as avoidance may increase allergy risk.",
    },
    {
      ageRange: '6-12 months',
      context:
        "Introduce new foods one at a time, every 3-5 days, to identify reactions. If your baby has already been diagnosed with one food allergy, work with your allergist on a plan for introducing other common allergens. Continue offering foods that have been tolerated. A registered dietitian can help ensure nutritional adequacy when multiple foods are restricted, especially regarding protein, calcium, and iron.",
    },
    {
      ageRange: '12 months+',
      context:
        "Toddlers with multiple food allergies need careful meal planning to meet nutritional needs. Many children outgrow milk, egg, wheat, and soy allergies by age 3-5, though peanut and tree nut allergies tend to persist longer. Regular follow-up with your allergist for retesting is important. All caregivers, including daycare staff, should be trained on allergen avoidance and emergency action plans.",
    },
  ],
  whenNormal: [
    'Baby tolerates most foods and has only one confirmed food allergy',
    'Baby has mild eczema but no immediate reactions to foods',
    'Baby is a picky eater but does not have hives, vomiting, or other allergic symptoms',
    'Baby has digestive symptoms from a stomach virus, not consistently related to specific foods',
  ],
  whenToMention: [
    'Baby has reacted to more than one food with hives, vomiting, or worsening eczema',
    'Baby has severe eczema and you are concerned about food allergy risk before starting solids',
    'You are struggling to find foods your baby tolerates and are worried about nutrition',
  ],
  whenToActNow: [
    'Baby has anaphylactic symptoms (hives, facial swelling, vomiting, difficulty breathing) after eating -- use epinephrine if prescribed and call 911',
    'Baby is losing weight or becoming dehydrated because of food restrictions',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIAID',
      citation:
        'National Institute of Allergy and Infectious Diseases. Guidelines for the Diagnosis and Management of Food Allergy in the United States. NIH.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/food-allergy',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Food Allergies in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Food-Allergy-Reactions.aspx',
    },
  ],
};
