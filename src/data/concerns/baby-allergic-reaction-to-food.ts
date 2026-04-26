import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-allergic-reaction-to-food',
  title: 'Baby Allergic Reaction to Food',
  category: 'medical',
  searchTerms: [
    'baby food allergy reaction',
    'baby allergic reaction signs',
    'baby hives after eating',
    'baby vomiting after new food',
    'baby swollen lips food',
    'baby allergic reaction what to do',
    'food allergy baby symptoms',
    'baby rash after eating',
    'introducing allergens to baby',
    'baby egg allergy reaction',
    'baby peanut allergy signs',
  ],
  quickAnswer:
    'Food allergic reactions in babies range from mild (hives, rash around the mouth, minor vomiting) to severe (difficulty breathing, widespread swelling, multiple body systems affected). Most reactions are mild and appear within minutes to 2 hours after eating the food. The most common food allergens in babies are milk, eggs, peanuts, tree nuts, soy, wheat, fish, and shellfish. Current AAP guidelines recommend introducing allergenic foods around 6 months, as early introduction can actually help prevent allergies in many cases.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'Babies at this age are typically on breast milk or formula only. Food allergies to breast milk components (most commonly cow\'s milk protein from the mother\'s diet) can cause blood-streaked stool, excessive fussiness, eczema, or poor feeding. Cow\'s milk protein allergy through formula can cause similar symptoms plus vomiting and diarrhea. If you suspect a formula allergy, talk to your pediatrician before switching formulas.',
    },
    {
      ageRange: '4-6 months',
      context:
        'As solids begin, food allergies may first appear. Introduce one new food at a time and wait 2-3 days before introducing another, so you can identify which food caused a reaction. Current research supports introducing common allergens (including peanut products and eggs) around 4-6 months for most babies, especially those with eczema, as early introduction may reduce allergy risk.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is the most active period for introducing new foods. Mild reactions like a red rash around the mouth where food touched the skin are very common and are often irritant reactions, not true allergies. A true allergic reaction typically involves hives (raised, itchy welts) appearing on parts of the body that did not contact the food, vomiting, or swelling. If you suspect a reaction, stop the food and call your pediatrician.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Many children outgrow allergies to milk, eggs, soy, and wheat by ages 3-5. Peanut, tree nut, fish, and shellfish allergies are more likely to be lifelong. If your child has a confirmed food allergy, work with your pediatrician or allergist to develop an action plan, including whether and when to carry epinephrine auto-injectors. Re-evaluation by an allergist every 1-2 years can determine if the allergy has been outgrown.',
    },
  ],
  whenNormal: [
    'A mild rash only around the mouth or chin where the food directly touched the skin, which fades within an hour',
    'Your baby makes a face or seems to dislike a new food but has no physical symptoms',
    'Mild spitting up after trying a new texture, which is a gag reflex rather than an allergic reaction',
    'A small patch of eczema that was already present looks slightly more irritated after eating',
  ],
  whenToMention: [
    'Hives (raised welts) appear anywhere on the body after eating a new food, even if they go away on their own',
    'Your baby vomits within 1-2 hours after eating a specific food on more than one occasion',
    'Your baby has persistent eczema that worsens with certain foods, or has chronic digestive issues you suspect may be food-related',
  ],
  whenToActNow: [
    'Your baby has hives combined with any of the following: vomiting, swelling of the face/lips/tongue, coughing, wheezing, difficulty breathing, or seems limp and unresponsive - call 911 immediately, as this may be anaphylaxis',
    'Your baby has any difficulty breathing, turns blue, becomes limp, or loses consciousness after eating - call 911 and administer epinephrine if prescribed',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Food Allergies in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Food-Allergies-in-Children.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Food Allergies.',
      url: 'https://www.cdc.gov/healthyschools/foodallergies/index.htm',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Guidelines for the Prevention of Peanut Allergy in the United States.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/guidelines-clinicians-and-patients-food-allergy',
    },
  ],
};
