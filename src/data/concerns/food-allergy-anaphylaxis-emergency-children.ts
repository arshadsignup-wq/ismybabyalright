import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'food-allergy-anaphylaxis-emergency-children',
  title: 'Food Allergy Anaphylaxis Emergency in Children',
  category: 'medical',
  searchTerms: [
    'food allergy anaphylaxis baby',
    'anaphylaxis signs child',
    'food allergy emergency baby',
    'child allergic reaction severe',
    'baby anaphylaxis symptoms',
    'epinephrine auto-injector baby',
    'EpiPen for infant',
    'food allergy reaction what to do',
    'anaphylaxis treatment child',
    'severe allergic reaction baby food',
    'baby swelling after eating',
  ],
  quickAnswer:
    'Anaphylaxis is a severe, potentially life-threatening allergic reaction that can occur within minutes of food exposure. In children, the most common triggers are peanuts, tree nuts, milk, eggs, wheat, soy, fish, and shellfish. Signs include widespread hives, facial swelling, vomiting, difficulty breathing, wheezing, or becoming limp and unresponsive. Anaphylaxis requires immediate treatment with epinephrine (such as an EpiPen Jr) and a call to 911. Do not wait to see if symptoms improve on their own.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Anaphylaxis is rare in very young infants, but allergic reactions to cow\'s milk protein in formula or through breast milk can occur. Signs of a severe reaction in this age group include sudden vomiting, hives, swelling, extreme fussiness, and difficulty breathing. Because babies cannot tell you what they are feeling, any combination of these symptoms after feeding should be treated as a potential emergency. If your baby is diagnosed with a food allergy, your pediatrician may prescribe an epinephrine auto-injector and train you on its use.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As solid foods are introduced, the risk of first allergic reactions increases. The most common triggers for first reactions in this age group are egg, milk, and peanut. Symptoms of anaphylaxis include: rapid-onset hives or skin redness, vomiting, swelling of the face, lips, or tongue, coughing, wheezing, or difficulty breathing, and sudden lethargy or limpness. If you see any combination of these symptoms, administer epinephrine immediately if available and call 911. Always introduce new allergenic foods when you can observe your baby for at least 2 hours afterward.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers with known food allergies are at ongoing risk for accidental exposure and anaphylaxis. Ensure all caregivers (daycare, grandparents, babysitters) know about allergies, can recognize symptoms, and are trained to administer epinephrine. Keep auto-injectors in multiple locations (home, car, daycare). After administering epinephrine, always go to the emergency room, as symptoms can recur (biphasic reaction) hours later. Work with an allergist to develop an Allergy Action Plan and discuss options for oral immunotherapy for certain allergies.',
    },
  ],
  whenNormal: [
    'Your child eats a new food and has no reaction, or develops only a mild contact rash around the mouth that resolves quickly.',
    'Your child has a known food allergy and you have an up-to-date allergy action plan and unexpired epinephrine auto-injectors.',
    'Your child had a mild reaction (a few hives) to a new food, was evaluated by a doctor, and has a plan for follow-up allergy testing.',
  ],
  whenToMention: [
    'Your child has had a mild allergic reaction (limited hives, mild vomiting) and needs allergy evaluation.',
    'You need guidance on introducing allergenic foods to a high-risk baby.',
    'Your child\'s epinephrine auto-injector is expired or you need a refresher on how to use it.',
  ],
  whenToActNow: [
    'Your child has symptoms affecting multiple body systems after food exposure (skin + breathing, or skin + vomiting) -- administer epinephrine and call 911.',
    'Your child is having difficulty breathing, swelling of the tongue or throat, or has become limp and unresponsive after eating.',
    'Your child has a known severe food allergy and has accidentally ingested the allergen -- give epinephrine immediately even if no symptoms have started yet.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['early-allergen-introduction-peanut-egg-safety', 'early-peanut-introduction-allergy-prevention', 'cow-milk-protein-allergy-vs-reflux'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Food Allergy Reactions. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Food-Allergy-Reactions.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Food Allergy. NIAID.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/food-allergy',
    },
    {
      org: 'AAP',
      citation:
        'Sampson HA, et al. Food Allergy: A Practice Parameter Update. Journal of Allergy and Clinical Immunology, 2014.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/25174862/',
    },
  ],
};
