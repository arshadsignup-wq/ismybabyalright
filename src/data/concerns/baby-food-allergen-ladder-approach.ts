import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-food-allergen-ladder-approach',
  title: 'Using the Allergen Ladder Approach for Baby Food Introduction',
  category: 'feeding',
  searchTerms: [
    'baby allergen ladder',
    'milk ladder baby',
    'egg ladder baby introduction',
    'food allergen ladder approach infant',
    'gradual allergen introduction baby',
    'baked milk challenge baby',
    'CMPA milk ladder',
    'reintroducing allergen baby',
    'allergen ladder for babies',
    'baby food allergy reintroduction steps',
    'how to introduce allergens to baby',
  ],
  quickAnswer:
    'The allergen ladder is a structured, step-by-step approach to reintroducing a food allergen (most commonly cow\'s milk or egg) after a baby has had a confirmed allergy. It starts with the most heavily processed forms of the food (like baked milk in a muffin) and gradually works up to less processed forms (like fresh milk). This should only be done under the guidance of your pediatrician or allergist, as each step must be tolerated before moving to the next.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Allergen ladders are not used at this age because solid foods have not been introduced yet. If your breastfed baby is showing signs of a food allergy (such as blood in stool, severe eczema, or persistent fussiness), your pediatrician may ask you to eliminate certain foods from your diet. For formula-fed babies with confirmed cow\'s milk protein allergy (CMPA), a hypoallergenic or amino acid-based formula will be recommended. The groundwork for future allergen introduction is laid during this period with proper diagnosis.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is when allergen ladders may begin for babies with confirmed allergies who are ready for solids. The milk ladder, for example, starts with well-baked milk in a biscuit or muffin (where the milk protein is broken down by high heat), progressing through pancakes, cheese sauce, yogurt, and eventually fresh milk. Each step is maintained for several days to a week while watching for reactions. Your allergist will provide a specific protocol. For babies without known allergies, current guidelines recommend early introduction of common allergens (peanut, egg, milk) starting around 6 months to reduce allergy risk.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Many children continue working through allergen ladders during this period. Some children who reacted to fresh milk at 12 months may tolerate it by 18-24 months as their immune system matures. Approximately 80% of children with cow\'s milk allergy outgrow it by age 3-5. The ladder approach allows you to safely test tolerance at each stage. Never skip steps or rush the ladder, and always have an emergency action plan and any prescribed epinephrine auto-injectors available during challenges. Regular follow-up with your allergist is essential to track progress.',
    },
  ],
  whenNormal: [
    'Your child tolerates baked forms of the allergen (like baked milk or baked egg) without any symptoms and you are progressing through the ladder under medical guidance.',
    'Your child has mild, transient symptoms (like slight redness around the mouth) that resolve quickly and your allergist has confirmed these are not concerning.',
    'Your child\'s tolerance is gradually improving as you move through the ladder steps over weeks or months.',
  ],
  whenToMention: [
    'Your child develops mild symptoms at a new ladder step, such as a small rash, mild stomach upset, or increased eczema — pause and consult your allergist before continuing.',
    'Your child seems to regress and react to a step they previously tolerated.',
    'You are unsure about the correct ladder protocol or how long to stay at each step.',
  ],
  whenToActNow: [
    'Your child develops signs of anaphylaxis during a ladder challenge: difficulty breathing, swelling of lips/tongue/throat, widespread hives, vomiting, or becoming pale and floppy — administer epinephrine if prescribed and call 911 immediately.',
    'Your child has a severe allergic reaction with multiple body systems involved (skin plus breathing, or skin plus vomiting) — this is a medical emergency.',
    'Your child is wheezing, has a persistent cough, or is struggling to breathe after eating a challenge food — seek emergency care immediately.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-introducing-eggs-safely', 'baby-introducing-dairy-yogurt', 'baby-introducing-nuts-safely', 'baby-hypoallergenic-formula-when'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Cow\'s Milk Allergy in Infants',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Milk-Allergy.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases — Guidelines for the Diagnosis and Management of Food Allergy',
      url: 'https://www.niaid.nih.gov/diseases-conditions/food-allergy-guidelines',
    },
    {
      org: 'BSACI',
      citation:
        'British Society for Allergy and Clinical Immunology — Milk Allergy in Children: The iMAP Guideline',
      url: 'https://www.bsaci.org/guidelines/bsaci-guidelines/',
    },
  ],
};
