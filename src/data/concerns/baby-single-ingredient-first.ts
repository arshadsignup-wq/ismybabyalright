import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-single-ingredient-first',
  title: 'Should I Only Give Single-Ingredient Foods First?',
  category: 'feeding',
  searchTerms: [
    'single ingredient baby food',
    'baby food one ingredient at a time',
    'mixed baby food okay',
    'introducing baby food one at a time',
    'combination baby food when',
    'how long wait between new foods',
    'baby food allergy testing one at a time',
    'single food introduction baby',
    'mixed purees baby when safe',
    'baby food stages explained',
  ],
  quickAnswer:
    'Starting with single-ingredient foods makes it easier to identify any allergic reactions, but there is no strict medical rule requiring it. The AAP recommends introducing one new food at a time and waiting 2-3 days before adding another new food. Once a food has been accepted without reaction, it can be combined with other accepted foods.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Not applicable as babies are not eating solids yet.',
    },
    {
      ageRange: '4-6 months',
      context: 'When starting solids, single-ingredient foods are recommended primarily to identify allergic reactions. Offer a new food for 2-3 days before introducing another. Start with iron-rich options. Once several individual foods have been accepted, you can begin combining them.',
    },
    {
      ageRange: '6-9 months',
      context: 'By this age, baby has likely tried many individual foods. You can now offer combination foods and mixed purees. When introducing a new allergen, still offer it individually first to identify any reaction before mixing it into combination dishes.',
    },
    {
      ageRange: '9-12 months',
      context: 'Mixed dishes and family foods are appropriate. The waiting period between new foods can be shortened since baby has established tolerance to many foods. Still introduce major allergens one at a time.',
    },
    {
      ageRange: '12-24 months',
      context: 'Toddlers eat mixed family meals. The single-ingredient approach is no longer necessary for familiar foods. If introducing a new potential allergen that baby has never had, still offer it alone first.',
    },
  ],
  whenNormal: [
    'You introduce single-ingredient foods when starting solids and wait 2-3 days between new foods',
    'You offer mixed foods after baby has tolerated the individual ingredients',
    'Baby accepts some foods and rejects others',
  ],
  whenToMention: [
    'You are unsure when it is safe to move from single to mixed foods',
    'Baby has a family history of food allergies and you want a personalized introduction plan',
    'Baby has reacted to a food and you are not sure which ingredient caused it',
  ],
  whenToActNow: [
    'Baby has an allergic reaction such as hives, vomiting, swelling, or breathing difficulty after a new food',
    'Baby has symptoms of a serious allergic reaction (anaphylaxis)',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-first-foods-best-choices', 'food-allergy-signs', 'introducing-common-allergens-safely'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. How to Introduce Solid Foods. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx',
    },
    {
      org: 'CDC',
      citation: 'Centers for Disease Control and Prevention. Foods and Drinks to Limit or Avoid. 2023.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/foods-and-drinks-to-limit.html',
    },
  ],
};
