import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-food-preparation-hygiene',
  title: 'Baby Food Preparation and Hygiene Safety',
  category: 'feeding',
  searchTerms: [
    'baby food hygiene',
    'baby food preparation safety',
    'how to prepare baby food safely',
    'baby food storage safety',
    'homemade baby food hygiene',
    'baby food contamination risk',
    'sanitize baby food equipment',
    'baby food bacteria prevention',
    'safe baby food handling',
    'baby puree storage time',
  ],
  quickAnswer:
    'Proper hygiene during baby food preparation is essential because infants have immature immune systems that make them more vulnerable to foodborne illness. Always wash your hands thoroughly before preparing food, use clean utensils and surfaces, cook foods to safe temperatures, store prepared foods promptly in the refrigerator or freezer, and discard any leftover food that has been in contact with your baby\'s saliva.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Before starting solids, hygiene focuses on bottle and breastfeeding equipment. Sterilize bottles, nipples, and pump parts before first use, and wash thoroughly with hot soapy water after each use. The CDC recommends sterilizing feeding items at least once daily for babies under 3 months, premature babies, or immunocompromised infants. Formula should be prepared with water that has been boiled and cooled, following manufacturer instructions exactly. Prepared formula should be used within 2 hours at room temperature or stored in the refrigerator for up to 24 hours.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As you introduce solids, food safety becomes crucial. Wash all fruits and vegetables thoroughly before preparing them. Cook meats, eggs, and fish to safe internal temperatures (poultry to 165 degrees F, ground meats to 160 degrees F). Homemade purees can be stored in the refrigerator for up to 48 hours or frozen in ice cube trays for up to 3 months. Never refreeze thawed baby food. Discard any food your baby has eaten from directly, as saliva introduces bacteria. Use separate cutting boards for raw meats and produce, and sanitize highchair trays before each meal.',
    },
    {
      ageRange: '12-36 months',
      context:
        'As your toddler eats more table foods, continue following safe food handling practices. Avoid giving young children foods with high contamination risk such as raw or undercooked eggs, unpasteurized dairy products, raw sprouts, honey (safe after 12 months), and deli meats unless heated until steaming. Teach early handwashing habits before meals. Check food temperatures carefully — microwaved foods can have hot spots. Cut foods into age-appropriate pieces to reduce choking risk. When dining out or traveling, bring your own utensils and be cautious about food handling standards at restaurants.',
    },
  ],
  whenNormal: [
    'You follow basic handwashing and clean surface practices before preparing your baby\'s food.',
    'You store homemade baby food in the refrigerator for up to 48 hours or freeze it promptly.',
    'You discard leftover food from your baby\'s bowl after a feeding rather than saving it for later.',
  ],
  whenToMention: [
    'Your baby has recurring episodes of vomiting or diarrhea that may be related to food preparation practices.',
    'You are unsure about safe storage times for specific homemade baby foods.',
    'You want guidance on safe preparation methods for specific allergen foods or meats.',
  ],
  whenToActNow: [
    'Your baby shows signs of food poisoning: persistent vomiting, bloody diarrhea, high fever, or signs of dehydration (no wet diapers for 6+ hours, sunken fontanelle, no tears when crying) — seek medical care immediately.',
    'Your baby has consumed raw or undercooked meat, eggs, or unpasteurized dairy and develops symptoms — contact your pediatrician or seek emergency care.',
    'Your baby has signs of botulism after eating honey or improperly canned foods: constipation, weak cry, poor feeding, floppy movements — seek emergency care immediately.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-formula-preparation-safety', 'baby-formula-storage-guidelines', 'baby-microwave-heating-danger'],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention — Foods That Can Cause Food Poisoning: People with a Higher Risk',
      url: 'https://www.cdc.gov/foodsafety/people-at-risk-food-poisoning.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Safe Food Handling for Babies',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Food-Safety-Tips.aspx',
    },
    {
      org: 'USDA',
      citation:
        'United States Department of Agriculture — Keeping Baby Food Safe',
      url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/keeping-baby-food-safe',
    },
  ],
};
