import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pfas-forever-chemicals-baby-products',
  title: 'PFAS (Forever Chemicals) in Baby Products: What Parents Should Know',
  category: 'medical',
  searchTerms: [
    'PFAS in baby products',
    'forever chemicals baby clothes',
    'PFAS in baby bibs',
    'forever chemicals in baby items',
    'PFAS free baby products',
    'are baby products safe from chemicals',
    'PFAS in stain resistant baby clothes',
    'waterproof baby products chemicals',
    'forever chemicals baby mattress',
    'how to avoid PFAS baby products',
  ],
  quickAnswer:
    'PFAS (per- and polyfluoroalkyl substances), often called "forever chemicals" because they persist in the environment and the human body for years, have been detected in a range of baby products including waterproof bibs, stain-resistant clothing, crib mattress covers, nursing pillows, and food packaging. A 2021 study in Environmental Science & Technology Letters found PFAS indicators in 65% of stain- and water-resistant textile products tested. The EPA classifies certain PFAS compounds (PFOA and PFOS) as having "no safe level" in drinking water. While the long-term effects of PFAS exposure in infants are still being researched, studies have linked PFAS exposure to immune system effects, thyroid disruption, and developmental concerns. To reduce exposure: choose untreated cotton or organic fabrics, avoid marketing terms like "waterproof," "stain-resistant," or "water-repellent" on soft goods, wash new baby clothes before first use, and use PFAS-free alternatives when available.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Newborns have the highest vulnerability to chemical exposures due to their small body size, developing organ systems, and frequent hand-to-mouth behavior. Common PFAS exposure sources at this age include waterproof mattress protectors, nursing pillows with stain-resistant covers, and waterproof changing pad covers. Choose untreated cotton or wool mattress protectors. Wash all new clothing, bedding, and fabric items before use. Breastfeeding mothers should know that PFAS can be present in breast milk — however, the AAP still recommends breastfeeding as the benefits far outweigh this exposure risk.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies begin eating solids and become more mobile, exposure sources expand to include waterproof bibs, food-contact materials, and stain-resistant high chair covers. A 2022 Mamavation investigation found PFAS indicators in many popular baby bibs marketed as "waterproof." Choose silicone bibs, untreated cotton bibs, or PFAS-free certified options. Avoid microwaving food in packaging that may contain PFAS (fast food wrappers, microwave popcorn bags). Use glass or stainless steel for food storage.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers who explore the environment extensively may encounter PFAS through treated carpets, upholstered furniture, and outdoor clothing. Water-repellent jackets, snow pants, and stain-resistant play mats frequently contain PFAS. Where possible, choose untreated natural fabrics. For outerwear, look for brands that have committed to PFAS-free production. Regular hand washing before meals reduces oral exposure from contaminated surfaces.',
    },
    {
      ageRange: 'All ages',
      context:
        'PFAS are also found in some drinking water supplies. The EPA set enforceable limits for six PFAS compounds in drinking water in 2024 (4 parts per trillion for PFOA and PFOS). Check your local water quality report at ewg.org/tapwater or contact your water utility. If your water has elevated PFAS, a reverse osmosis or activated carbon filter can reduce levels. Do not boil water to remove PFAS — boiling concentrates them. The situation is evolving as more states pass PFAS bans on children\'s products.',
    },
  ],
  whenNormal: [
    'Feeling overwhelmed by chemical safety information — the landscape is complex and evolving',
    'Not being able to replace all baby products at once — prioritize items that contact food or skin for extended periods',
    'Using some products that may contain PFAS while taking steps to reduce overall exposure',
    'Finding it difficult to identify PFAS-free products — labeling is not yet standardized',
  ],
  whenToMention: [
    'You live in an area with known PFAS water contamination and want to discuss testing or filtration',
    'Your child has unexplained thyroid issues, immune system problems, or developmental concerns and you suspect environmental exposures',
    'You want guidance on prioritizing which products to replace first',
  ],
  whenToActNow: [
    'You discover your drinking water has PFAS levels above EPA limits — switch to filtered water or bottled water for formula preparation immediately',
    'Your child has ingested a product containing PFAS (such as chewing on a waterproof bib) and is showing symptoms like vomiting or rash',
    'You have been notified of a PFAS contamination event in your area affecting drinking water',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-food-heavy-metals-concern',
    'lead-exposure-baby',
    'air-quality-pollution-baby-health',
  ],
  sources: [
    {
      org: 'EPA',
      citation:
        'U.S. Environmental Protection Agency. PFAS Strategic Roadmap: EPA\'s Commitments to Action 2021-2024.',
      url: 'https://www.epa.gov/pfas',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Environmental Health Sciences. Perfluoroalkyl and Polyfluoroalkyl Substances (PFAS).',
      url: 'https://www.niehs.nih.gov/health/topics/agents/pfc',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Food Additives and Child Health. Pediatrics, 142(2).',
      url: 'https://publications.aap.org/pediatrics/article/142/2/e20181408/37579/Food-Additives-and-Child-Health',
    },
  ],
};
