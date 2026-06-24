import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pfas-baby-products-stroller-car-seat',
  title: 'PFAS "Forever Chemicals" in Baby Products',
  category: 'medical',
  searchTerms: [
    'PFAS baby products',
    'forever chemicals baby',
    'PFAS car seat baby',
    'PFAS stroller baby',
    'PFAS bib baby',
    'toxic chemicals baby products',
    'PFAS in breast milk',
    'PFAS drinking water baby',
    'forever chemicals children health',
    'PFAS free baby products',
    'PFAS baby clothing',
  ],
  quickAnswer:
    'PFAS (per- and polyfluoroalkyl substances), often called "forever chemicals," are a group of over 12,000 synthetic chemicals used in water-resistant, stain-resistant, and non-stick products. They have been found in car seats, strollers, bibs, clothing, food packaging, and drinking water. PFAS are called "forever chemicals" because they do not break down in the environment or the body. Research links PFAS exposure to immune system effects, thyroid disruption, developmental delays, and increased cancer risk. While completely avoiding PFAS is difficult, parents can take practical steps to reduce exposure.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Infants may be exposed to PFAS through breast milk (PFAS accumulate in the mother\'s body and are excreted in milk), formula mixed with contaminated water, and direct contact with treated products. Despite PFAS in breast milk, health organizations including the AAP and WHO still recommend breastfeeding because the benefits outweigh the risks. To reduce exposure: test your drinking water for PFAS (contact your local water utility or use a certified testing service), use a water filter certified to remove PFAS (reverse osmosis or activated carbon filters with NSF/ANSI 53 certification) for formula preparation, and choose untreated cotton clothing and bibs when possible.',
    },
    {
      ageRange: '6-18 months',
      context:
        'As babies become mobile and spend time in car seats and strollers, PFAS in fabric treatments become more relevant. Studies have found PFAS in the fabric of some car seats, strollers, and highchairs, particularly those marketed as water-resistant or stain-resistant. Babies mouth everything, including car seat straps and stroller fabrics. Practical steps: choose products without stain-resistant or water-repellent marketing, consider placing a cotton cover over car seat straps (check car seat manufacturer guidelines for safety compliance), and avoid microwave-popping popcorn bags and fast food packaging, which often contain PFAS.',
    },
    {
      ageRange: '18-36 months',
      context:
        'Toddlers face PFAS exposure through food (especially from food packaging), water, household dust, and consumer products. Studies have found PFAS in many children\'s products including waterproof clothing, shoes, carpeting, and upholstered furniture. While the science is still evolving and regulation is increasing, practical risk reduction includes: using PFAS-free alternatives when available (look for OEKO-TEX or PFAS-free certifications), filtering drinking water, reducing consumption of food from PFAS-treated packaging, and vacuuming regularly with a HEPA filter to reduce household dust (a significant source of PFAS exposure).',
    },
  ],
  whenNormal: [
    'You are taking reasonable precautions to reduce PFAS exposure such as filtering water and choosing PFAS-free products when available.',
    'Your child is developing normally and you are incorporating PFAS reduction into your routine without excessive anxiety.',
    'You understand that some PFAS exposure is unavoidable in modern life and you are focusing on practical, actionable steps.',
  ],
  whenToMention: [
    'You live in an area with known PFAS water contamination and want guidance on protecting your family.',
    'You are concerned about cumulative chemical exposures and want to discuss evidence-based risk reduction.',
    'You want to discuss whether PFAS blood testing is appropriate for your family.',
  ],
  whenToActNow: [
    'Your drinking water has been found to contain PFAS levels above EPA limits and you are using it for infant formula preparation - switch to filtered or bottled water immediately.',
    'You are concerned about acute chemical exposure from a product your child has been mouthing or ingesting.',
    'Your child has unexplained health issues and you live in an area with significant PFAS contamination.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'lead-exposure-children-prevention',
    'infant-formula-safety-contamination-concerns',
    'nursing-pillow-suffocation-recall-risk',
  ],
  sources: [
    {
      org: 'EPA',
      citation:
        'EPA. PFAS Strategic Roadmap: EPA\'s Commitments to Action.',
      url: 'https://www.epa.gov/pfas',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics Council on Environmental Health. PFAS Exposure in Children. Pediatrics, 2024.',
      url: 'https://publications.aap.org/pediatrics/article/153/2/e2023064567/196583/PFAS-Exposure-in-Children',
    },
    {
      org: 'NIH',
      citation:
        'NIH - PFAS and Health Effects: Current Understanding. Environmental Health Perspectives, 2022.',
      url: 'https://ehp.niehs.nih.gov/doi/10.1289/EHP10092',
    },
  ],
};
