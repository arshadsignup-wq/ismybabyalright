import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-sunscreen-reaction-rash',
  title: 'Reaction to Sunscreen in Baby',
  category: 'skin',
  searchTerms: [
    'baby sunscreen reaction',
    'baby rash from sunscreen',
    'baby allergic to sunscreen',
    'sunscreen rash baby',
    'baby sunscreen irritation',
    'toddler sunscreen allergy',
    'baby face rash after sunscreen',
    'baby sensitive to sunscreen',
    'best sunscreen sensitive baby skin',
    'sunscreen dermatitis baby',
  ],
  quickAnswer:
    'Some babies develop skin irritation or allergic reactions to certain sunscreen ingredients. Mineral (physical) sunscreens containing zinc oxide or titanium dioxide are generally better tolerated than chemical sunscreens. If your baby reacts to sunscreen, switch to a mineral-only formulation designed for sensitive skin and patch-test a small area first.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Sunscreen is generally not recommended for babies under 6 months. Sun protection should rely on shade, protective clothing, and wide-brimmed hats. In situations where sun avoidance is not possible, the AAP says a small amount of sunscreen can be applied to small exposed areas.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If sunscreen must be used, choose a mineral-only (zinc oxide or titanium dioxide) product. Apply a small test patch on the inner arm first and wait 24 hours to check for a reaction before applying widely. If redness or bumps develop, discontinue that product.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Begin using broad-spectrum SPF 30+ sunscreen on exposed skin. If your baby develops a rash after sunscreen application, it may be contact dermatitis from fragrance, preservatives, or chemical UV filters. Switch to a fragrance-free, mineral-only baby sunscreen and reapply every 2 hours when outdoors.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers with eczema-prone skin may be more sensitive to sunscreen ingredients. Look for products labeled for sensitive or eczema-prone skin. If your child consistently reacts to multiple sunscreen brands, discuss alternative sun protection strategies with your pediatrician or dermatologist.',
    },
  ],
  whenNormal: [
    'Mild redness from sunscreen application that resolves after washing it off',
    'A slight white cast from mineral sunscreen, which is cosmetic and not a reaction',
  ],
  whenToMention: [
    'A rash consistently develops after using sunscreen and you need product recommendations',
    'Your baby has eczema and you are unsure which sunscreen is safe to use',
  ],
  whenToActNow: [
    'A severe allergic reaction with widespread hives, swelling, or difficulty breathing after sunscreen application',
    'Sunscreen gets in the eyes causing persistent pain or swelling',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sun Safety for Babies. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/sun-safety/Pages/Sun-Safety.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Sunscreen FAQs.',
      url: 'https://www.aad.org/public/everyday-care/sun-protection/sunscreen-patients/sunscreen-faqs',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Contact Dermatitis from Sunscreens. Dermatitis.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/25581671/',
    },
  ],
  relatedConcernSlugs: ['baby-sunburn-prevention', 'contact-dermatitis-baby', 'baby-sun-rash-polymorphous'],
};
