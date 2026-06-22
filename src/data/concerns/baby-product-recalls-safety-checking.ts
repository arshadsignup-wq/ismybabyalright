import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-product-recalls-safety-checking',
  title: 'Baby Product Recalls: How to Check and Stay Informed',
  category: 'medical',
  searchTerms: [
    'baby product recall check',
    'how to check if baby product is recalled',
    'CPSC baby product recall',
    'is my baby product safe',
    'recalled baby products list',
    'baby crib recall check',
    'recalled car seats list',
    'how to find product recalls baby',
    'baby product safety registration',
    'inclined sleeper recall baby',
  ],
  quickAnswer:
    'The U.S. Consumer Product Safety Commission (CPSC) issues an average of 300+ product recalls annually, with nursery products, toys, and children\'s clothing among the most frequently recalled categories. High-profile recalls have included inclined sleepers (Fisher-Price Rock \'n Play, linked to over 90 infant deaths before the 2019 recall), crib mattresses, baby carriers, and strollers. To check if your products are recalled: visit cpsc.gov/recalls, download the CPSC Recalls app, or sign up for email alerts. Register your baby products with the manufacturer (using the registration card or online) so you are directly notified of recalls. You can also report unsafe products to CPSC at SaferProducts.gov. Never sell or give away recalled products. If a product is recalled, stop using it immediately and follow the recall instructions for a repair, replacement, or refund.',
  byAge: [
    {
      ageRange: 'Before birth',
      context:
        'When setting up the nursery and purchasing baby gear, check CPSC.gov for current recalls before buying, especially for secondhand items. Cribs manufactured before June 2011 do not meet current federal safety standards (drop-side cribs are banned). Car seats have expiration dates (typically 6-10 years), so check the date stamped on the seat. If accepting hand-me-down items, look up the specific model and serial number on cpsc.gov. Register all new products with manufacturers using the included registration cards or online portals.',
    },
    {
      ageRange: '0-6 months',
      context:
        'Key products to verify for this age: crib and crib mattress, bassinet, baby monitor, swaddles, baby swing, bouncer, and car seat. After the Fisher-Price Rock \'n Play recall, the CPSC issued new rules banning inclined sleep products (more than 10 degrees) for infants. Any sleep surface should be flat, firm, and bare. If you receive baby shower gifts, check each product against the CPSC database before use. Bookmark cpsc.gov/recalls and check monthly.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As baby becomes mobile, additional product categories become relevant: baby gates, high chairs, playpens/play yards, walkers (the AAP recommends against baby walkers due to injury risk), and toys. Check that high chairs have a 5-point harness and stable base. Baby gates should be hardware-mounted at the top of stairs (pressure-mounted gates can be pushed out). Verify that toys are age-appropriate and check for small-parts recalls.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddler-relevant recalls include: strollers (hinge mechanisms can catch fingers), toddler beds, sippy cups, toys with magnets (high-powered magnets are extremely dangerous if swallowed, as they can connect through intestinal walls requiring emergency surgery), and children\'s clothing with drawstrings (strangulation hazard). The CPSC Recalls app sends push notifications for new recalls, which is the easiest way to stay current. Check recall status before any garage sale or consignment store purchase.',
    },
  ],
  whenNormal: [
    'Feeling overwhelmed by the number of potential safety concerns (focusing on sleep products and car seats covers the highest-risk categories)',
    'Using products that are not recalled even if they are older, since age alone does not make a product unsafe if it meets current standards',
    'Not being aware of every recall, since signing up for CPSC alerts automates this process',
  ],
  whenToMention: [
    'You discovered you have been using a recalled product and want to know if your child may have been affected',
    'You are unsure whether a specific hand-me-down product is safe to use',
    'Your child was injured by a product and you want guidance on reporting',
  ],
  whenToActNow: [
    'Your child was injured by a baby product: seek medical attention first, then report to CPSC at SaferProducts.gov',
    'You learn your child has been sleeping in a recalled inclined sleeper or other banned sleep product. Stop use immediately and contact the manufacturer for a refund',
    'Your child swallowed magnets or button batteries from a toy. This is a medical emergency requiring immediate ER evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'sunscreen-for-babies-under-6-months',
    'fluoride-toothpaste-baby-safety',
    'lead-exposure-baby',
  ],
  sources: [
    {
      org: 'CPSC',
      citation:
        'U.S. Consumer Product Safety Commission. Recalls.',
      url: 'https://www.cpsc.gov/Recalls',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Product Safety and Recalls. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Product-Recalls.aspx',
    },
    {
      org: 'CPSC',
      citation:
        'U.S. Consumer Product Safety Commission. SaferProducts.gov - Report an Unsafe Product.',
      url: 'https://www.saferproducts.gov/',
    },
  ],
};
