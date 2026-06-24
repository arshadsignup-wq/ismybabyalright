import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-introducing-dairy-yogurt',
  title: 'How to Introduce Dairy and Yogurt to My Baby',
  category: 'feeding',
  searchTerms: [
    'when to introduce yogurt to baby',
    'baby first yogurt age',
    'introducing dairy to baby',
    'baby yogurt vs adult yogurt',
    'baby cheese introduction',
    'dairy allergy baby introduction',
    'best yogurt for baby',
    'plain yogurt baby 6 months',
    'baby dairy products when',
    'introducing cow milk products baby',
  ],
  quickAnswer:
    'Yogurt and cheese can be introduced to babies starting around 6 months of age as part of complementary feeding, even though whole cow\'s milk as a drink is not recommended until 12 months. Choose plain, whole-milk (full-fat) yogurt without added sugar or honey. Yogurt is an excellent source of protein, calcium, and probiotics. Start with a small amount and watch for signs of allergy, especially if there is a family history of dairy allergy.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Dairy products should not be introduced before your baby is ready for solid foods, which is typically around 6 months (some babies may be ready as early as 4 months with pediatrician guidance). Before starting solids, breast milk or formula provides all the nutrition your baby needs. If you are breastfeeding and your baby shows signs of reacting to dairy in your diet (blood in stool, severe eczema, excessive fussiness), your pediatrician may recommend you eliminate dairy from your own diet temporarily to see if symptoms improve.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Starting around 6 months, you can offer plain, whole-milk yogurt. Full-fat varieties are important because babies need dietary fat for brain development. Avoid yogurts with added sugar, honey (risk of botulism before age 1), or artificial sweeteners. Greek yogurt is a good option as it is higher in protein. Start with 1-2 tablespoons and increase gradually. Soft cheeses like ricotta or cottage cheese can also be introduced. Note: while yogurt and cheese are fine at 6 months, cow\'s milk as a primary drink should wait until 12 months because it does not have the right balance of nutrients for young infants and can cause iron deficiency.',
    },
    {
      ageRange: '12-36 months',
      context:
        'After 12 months, whole cow\'s milk can be introduced as a beverage (16-24 ounces per day is recommended — more than 24 ounces can lead to iron deficiency). Continue offering a variety of dairy products including yogurt, cheese, and milk as part of a balanced diet. If your child has been avoiding dairy due to a suspected allergy, work with your pediatrician or allergist on a reintroduction plan (such as the milk ladder approach). Some toddlers prefer flavored yogurt — try mixing plain yogurt with mashed fruit rather than buying pre-sweetened varieties.',
    },
  ],
  whenNormal: [
    'Your baby eats yogurt and cheese without any signs of allergic reaction and enjoys the taste and texture.',
    'Your baby has mild changes in stool consistency when starting yogurt — this is a normal adjustment.',
    'Your baby refuses yogurt initially but accepts it after several offerings — repeated exposure helps acceptance.',
  ],
  whenToMention: [
    'Your baby develops mild eczema or a small rash around the mouth after eating dairy — discuss whether this is a contact reaction or true allergy.',
    'Your baby consistently refuses all dairy products and you are concerned about calcium and protein intake.',
    'There is a family history of cow\'s milk protein allergy and you want guidance on safe introduction.',
  ],
  whenToActNow: [
    'Your baby develops hives, facial swelling, vomiting, difficulty breathing, or becomes pale and floppy after eating yogurt or cheese — this may be anaphylaxis. Call 911 and administer epinephrine if prescribed.',
    'Your baby has bloody stools after introducing dairy products — stop dairy and contact your pediatrician.',
    'Your baby has a severe allergic reaction involving multiple body systems (skin plus breathing difficulties, or skin plus vomiting) — seek emergency medical care.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-food-allergen-ladder-approach', 'baby-hypoallergenic-formula-when', 'baby-introducing-eggs-safely'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Starting Solid Foods',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention — Foods and Drinks for 6-24 Month Olds',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/foods-and-drinks-6-to-24-months.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases — Food Allergy Guidelines',
      url: 'https://www.niaid.nih.gov/diseases-conditions/food-allergy-guidelines',
    },
  ],
};
