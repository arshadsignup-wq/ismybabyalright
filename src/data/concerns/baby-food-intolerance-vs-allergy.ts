import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-food-intolerance-vs-allergy',
  title: 'Food Intolerance vs Food Allergy in Baby',
  category: 'digestive',
  searchTerms: [
    'baby food intolerance vs allergy',
    'food allergy vs intolerance baby',
    'baby food sensitivity',
    'baby food intolerance symptoms',
    'difference food allergy intolerance baby',
    'baby digestive food reaction',
    'non IgE food allergy baby',
    'baby food reaction not allergy',
    'baby intolerance signs',
    'baby delayed food reaction digestive',
  ],
  quickAnswer:
    'Food allergies involve the immune system and can cause immediate reactions like hives, swelling, and breathing difficulty. Food intolerances involve the digestive system and cause symptoms like gas, bloating, diarrhea, or cramping without immune involvement. Both can be uncomfortable but allergies can be life-threatening while intolerances are not. Some reactions are non-IgE mediated allergies, which fall between the two.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In breastfed babies, cow\'s milk protein allergy (CMPA) can cause fussiness, blood in stool, and eczema. This is a non-IgE mediated allergy transmitted through breast milk. Lactose intolerance in this age group is extremely rare. If your baby has these symptoms, your pediatrician may recommend a maternal dairy elimination trial.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Before solid food introduction, food reactions in breastfed babies are related to maternal diet. Formula-fed babies may react to cow\'s milk or soy proteins. A hypoallergenic formula may be recommended. As solids begin, introduce common allergens one at a time and watch for both immediate and delayed reactions.',
    },
    {
      ageRange: '6-12 months',
      context:
        'When introducing allergenic foods (egg, peanut, dairy, wheat, soy, tree nuts, fish, shellfish), watch for immediate reactions (hives, swelling, vomiting within minutes to 2 hours) indicating allergy, and delayed reactions (diarrhea, eczema flares, reflux within hours to days) suggesting intolerance or non-IgE allergy.',
    },
    {
      ageRange: '12-24 months',
      context:
        'By this age, patterns of food reactions may be clearer. IgE-mediated allergies can be diagnosed with skin prick tests or blood tests. Non-IgE mediated allergies and intolerances are diagnosed clinically with elimination and reintroduction. Many food allergies in young children (particularly egg and milk) are outgrown by school age.',
    },
  ],
  whenNormal: [
    'Mild gas or looser stool when trying a new food that resolves without recurrence',
    'A single episode of vomiting from dislike of a new texture',
  ],
  whenToMention: [
    'A specific food consistently causes digestive symptoms like diarrhea, gas, or reflux',
    'You suspect a food intolerance and want guidance on elimination',
    'Your baby has eczema and you want to discuss the relationship with food',
  ],
  whenToActNow: [
    'Immediate allergic reaction: hives, facial swelling, vomiting, difficulty breathing, or limpness after eating a food',
    'Blood in stool that could indicate an allergic colitis',
    'Failure to thrive with ongoing food reactions',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Food Allergies in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Food-Allergies-in-Children.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Food Allergy.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/food-allergy',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Cow\'s Milk Allergy. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Milk-Allergy.aspx',
    },
  ],
  relatedConcernSlugs: ['baby-gerd-vs-milk-allergy', 'eczema-and-food-allergy-link', 'baby-celiac-disease-signs', 'baby-lactose-intolerance-temporary'],
};
