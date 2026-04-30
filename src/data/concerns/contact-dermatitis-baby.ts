import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'contact-dermatitis-baby',
  title: 'Contact Dermatitis in Babies and Toddlers',
  category: 'skin',
  searchTerms: [
    'contact dermatitis baby',
    'baby rash from soap',
    'baby rash from detergent',
    'baby allergic reaction skin',
    'baby rash where clothes touch',
    'irritant dermatitis baby',
    'baby rash from wipes',
    'baby rash from new product',
    'baby nickel allergy rash',
    'baby skin reaction lotion',
    'contact allergy baby',
    'baby rash from sunscreen',
  ],
  quickAnswer:
    'Contact dermatitis is a skin reaction that occurs when your baby\'s skin comes into direct contact with an irritating substance or an allergen. It shows up as a red, itchy rash in the exact area where the substance touched the skin. Common culprits include fragranced soaps, new laundry detergents, wet wipes with alcohol, sunscreen, metals (like nickel snaps on clothing), and certain fabrics. Removing the irritant and using gentle skin care usually resolves it within 1-2 weeks.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Young babies have thinner, more sensitive skin that reacts more easily to irritants. The most common causes at this age are fragranced baby products, certain brands of wet wipes, laundry detergent residue on clothing, and adhesives from medical tape or monitoring pads. The rash appears exactly where the irritant contacted the skin. Switching to fragrance-free, dye-free products usually resolves the issue.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies start eating solids and exploring, they encounter more potential irritants. Drool rash around the mouth is a form of irritant contact dermatitis. Food residue on the skin (especially acidic fruits and tomatoes) can cause redness. Sunscreen, new lotions, and grass can also trigger reactions. Applying a barrier cream like petroleum jelly before meals can protect the chin and cheeks.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers are exposed to more potential allergens through play and new products. Allergic contact dermatitis (a true allergy to a substance) becomes more common at this age. Nickel in jean snaps, belt buckles, or costume jewelry is a frequent cause. Poison ivy and poison oak reactions begin appearing as toddlers play outdoors. The rash appears 12-72 hours after contact and can last 2-3 weeks.',
    },
  ],
  whenNormal: [
    'A rash that appears only where a specific product touched the skin and resolves after removing the product',
    'Mild redness around the mouth from drool or food that improves with barrier cream',
    'A small area of redness under a snap, tag, or elastic band on clothing',
    'Rash that improves within a few days of switching to a fragrance-free product',
  ],
  whenToMention: [
    'A rash persists despite removing suspected irritants',
    'You cannot identify what is causing the contact rash',
    'The rash keeps recurring in the same area',
    'The rash is causing significant discomfort and over-the-counter hydrocortisone is not helping',
  ],
  whenToActNow: [
    'The rash is accompanied by difficulty breathing, facial swelling, or hives spreading beyond the contact area, which could indicate a systemic allergic reaction',
    'The affected skin develops blistering, oozing, or signs of infection (increased redness, warmth, pus)',
    'A widespread blistering rash appears after contact with a plant or chemical',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['eczema', 'diaper-rash', 'hives', 'baby-rash-wont-go-away', 'baby-chin-rash-from-drool'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Contact Dermatitis. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Contact-Dermatitis.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Rashes and Skin Conditions. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Arthritis and Musculoskeletal and Skin Diseases. Contact Dermatitis.',
      url: 'https://www.niams.nih.gov/health-topics/contact-dermatitis',
    },
  ],
};
