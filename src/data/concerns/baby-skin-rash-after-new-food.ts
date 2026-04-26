import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-skin-rash-after-new-food',
  title: 'Baby Skin Rash After New Food',
  category: 'skin',
  searchTerms: [
    'baby rash after new food',
    'baby hives after eating',
    'food allergy rash baby',
    'baby red cheeks after food',
    'baby skin reaction to food',
    'baby rash around mouth after eating',
    'baby allergic reaction rash',
    'baby bumps after trying new food',
    'contact rash from food baby',
    'baby eczema flare after food',
  ],
  quickAnswer:
    'A rash after trying a new food can be either a contact irritation (very common and harmless) or a true food allergy (less common but important to recognize). Contact rashes appear only where food touched the skin and fade quickly. Allergic reactions tend to be more widespread (hives on the body) and may include other symptoms. Knowing the difference helps you respond appropriately.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Before solids begin, rashes related to food are typically caused by proteins passing through breast milk. If your breastfed baby develops eczema or a rash that seems connected to your diet, discuss it with your pediatrician before eliminating foods. True food allergies through breast milk are uncommon but possible.',
    },
    {
      ageRange: '6-9 months',
      context:
        'This is when most babies start solids, and contact rashes are very common. Acidic foods like tomatoes, citrus, and berries often cause redness around the mouth that looks alarming but is just irritation, not an allergy. Apply a barrier of petroleum jelly around the mouth before meals to protect skin. If you see hives on the body (raised welts away from where food touched), that is more likely a true allergic reaction.',
    },
    {
      ageRange: '9-12 months',
      context:
        'As your baby tries more foods, you may notice certain ones consistently cause skin irritation. Keep introducing new foods one at a time and wait 2-3 days between new allergens. Common allergenic foods (peanut, egg, milk, wheat, soy, tree nuts, fish, shellfish, sesame) should actually be introduced early and regularly, as this reduces allergy risk according to current guidelines.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers with eczema are at higher risk for food allergies. If certain foods consistently trigger eczema flares or hives, discuss allergy testing with your pediatrician. Do not restrict foods without medical guidance, as unnecessary restrictions can affect nutrition and may not help. Many children outgrow food allergies to milk, egg, wheat, and soy.',
    },
  ],
  whenNormal: [
    'Redness only where food touched the skin (around mouth, chin, cheeks) that fades within an hour',
    'Mild rash from acidic foods like tomato, citrus, or strawberries',
    'A small area of irritation that does not bother your baby',
    'Temporary redness that does not recur with the same food on later tries',
  ],
  whenToMention: [
    'Hives (raised welts) appear on parts of the body that did not contact the food',
    'The same food consistently causes a rash or eczema flare, and you want to discuss allergy testing',
    'Your baby has eczema and you are unsure how to approach allergen introduction',
  ],
  whenToActNow: [
    'Hives are accompanied by vomiting, swelling of the lips or face, coughing, wheezing, or difficulty breathing - this is anaphylaxis and requires immediate emergency care (call 911)',
    'Your baby becomes suddenly pale, limp, or unresponsive after eating a new food',
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
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Starting Solid Foods. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx',
    },
  ],
};
