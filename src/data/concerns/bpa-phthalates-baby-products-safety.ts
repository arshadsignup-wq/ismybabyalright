import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'bpa-phthalates-baby-products-safety',
  title: 'BPA and Phthalates in Baby Products: What You Need to Know',
  category: 'medical',
  searchTerms: [
    'BPA in baby bottles',
    'phthalates in baby toys',
    'BPA free baby bottles safe',
    'are plastic baby toys safe',
    'endocrine disruptors baby',
    'BPA replacement chemicals safe',
    'phthalates in teethers',
    'BPA free really safe baby',
    'plastic baby products chemicals',
    'how to avoid BPA phthalates baby',
  ],
  quickAnswer:
    'BPA (bisphenol A) and phthalates are endocrine-disrupting chemicals found in many plastic products. BPA was banned from baby bottles and sippy cups by the FDA in 2012, and several types of phthalates were banned from children\'s toys in 2008 under the Consumer Product Safety Improvement Act. However, replacement chemicals (like BPS and BPF) used in "BPA-free" products may carry similar endocrine-disrupting risks. A 2020 study in Current Opinion in Endocrine and Metabolic Research found that BPA substitutes can have comparable estrogenic activity. Phthalates are still found in some soft plastics, vinyl products, fragranced baby lotions, and diaper materials. The AAP Council on Environmental Health recommends: using glass or stainless steel containers for hot foods and liquids, avoiding heating food in plastic, choosing fragrance-free personal care products, and hand-washing before meals to remove phthalate residues from plastic toys. Complete avoidance is impractical, but reducing exposure in high-contact situations (feeding, mouthing) is achievable.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Primary exposure sources at this age include bottles (if plastic), pacifiers, and personal care products (lotions, diaper cream, shampoo). While BPA has been removed from baby bottles, some studies detect BPA substitutes in polycarbonate and polypropylene. To minimize risk: use glass or silicone bottles if feasible, choose silicone pacifiers over PVC, and select fragrance-free baby care products (fragrance often indicates phthalate-containing ingredients). The EWG\'s Skin Deep database can help you evaluate personal care product safety.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies start eating solids and actively mouthing toys, new exposure routes emerge. Avoid storing or heating baby food in plastic containers; use glass or stainless steel instead. Silicone food storage is generally considered safer than plastic. For toys, choose silicone, wood (with non-toxic finishes), or natural rubber over soft PVC plastic. If your baby chews on a toy and you notice a strong plastic smell or taste, discontinue use. Look for toys labeled phthalate-free or that meet ASTM F963 toy safety standards.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers mouth everything, making oral exposure to plastic chemicals significant. Cheap imported plastic toys and costume jewelry may not meet US safety standards. Buy from reputable manufacturers that test for phthalates and heavy metals. Replace cracked, worn, or discolored plastic items. For food storage and reheating, transfer food from plastic containers to glass or ceramic before microwaving. Even "microwave-safe" plastic can leach chemicals at high temperatures, since the label only means the container won\'t melt.',
    },
    {
      ageRange: 'All ages',
      context:
        'The AAP emphasizes that the dose matters: occasional exposure to BPA or phthalates from a plastic cup is not an emergency. The goal is reducing cumulative exposure across all sources. Practical priorities: (1) never microwave food in plastic, (2) use glass/steel for warm liquids, (3) choose fragrance-free products, (4) wash hands before meals, (5) avoid vinyl (PVC) toys for infants who mouth. These five steps address the highest-exposure scenarios without requiring a complete plastic-free household.',
    },
  ],
  whenNormal: [
    'Your baby mouthing a BPA-free plastic toy, and this level of exposure is low risk',
    'Not being able to eliminate all plastic from your baby\'s environment, which is unrealistic and unnecessary',
    'Using BPA-free plastic bottles when glass is impractical (daycare, travel), and the risk is low especially with cold/room temperature liquids',
    'Feeling confused by "BPA-free" marketing, and your skepticism is warranted, and seeking alternatives is reasonable',
  ],
  whenToMention: [
    'You are concerned about your child\'s hormone development and want to discuss environmental chemical exposure',
    'Your child has early signs of puberty or unusual growth patterns and you want to rule out environmental factors',
    'You want guidance on prioritizing which products to replace for maximum exposure reduction',
  ],
  whenToActNow: [
    'Your child ingested a piece of plastic: call Poison Control (1-800-222-1222) for guidance',
    'You notice a recalled product in your home that contains banned chemicals, so stop use and follow CPSC recall instructions',
    'Your child develops an allergic reaction (rash, hives, swelling) from contact with a new plastic product',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-food-heavy-metals-concern',
    'lead-exposure-baby',
    'pfas-forever-chemicals-baby-products',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Food Additives and Child Health. Pediatrics, 142(2).',
      url: 'https://publications.aap.org/pediatrics/article/142/2/e20181408/37579/Food-Additives-and-Child-Health',
    },
    {
      org: 'FDA',
      citation:
        'U.S. Food and Drug Administration. Bisphenol A (BPA): Use in Food Contact Application.',
      url: 'https://www.fda.gov/food/food-additives-petitions/bisphenol-bpa-use-food-contact-application',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Environmental Health Sciences. Endocrine Disruptors.',
      url: 'https://www.niehs.nih.gov/health/topics/agents/endocrine',
    },
  ],
};
