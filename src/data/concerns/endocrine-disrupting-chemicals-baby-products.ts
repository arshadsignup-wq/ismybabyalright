import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'endocrine-disrupting-chemicals-baby-products',
  title: 'Endocrine-Disrupting Chemicals in Baby Products',
  category: 'medical',
  searchTerms: [
    'endocrine disruptors baby',
    'chemicals in baby products',
    'BPA baby bottles',
    'phthalates baby products',
    'toxic chemicals baby',
    'safe baby products chemicals',
    'baby product safety chemicals',
    'endocrine disrupting chemicals children',
    'PFAS baby products',
    'parabens baby products safe',
    'plastic baby bottles safe',
  ],
  quickAnswer:
    'Endocrine-disrupting chemicals (EDCs) are substances that can interfere with hormone systems. Common EDCs found in some baby products include BPA, phthalates, parabens, and PFAS. While the dose makes the poison and regulatory limits exist, the AAP recommends reducing unnecessary exposures, particularly for developing infants whose hormone systems are most vulnerable. Practical steps include avoiding heating plastic containers, choosing fragrance-free products, and washing hands before handling food. Complete elimination is neither possible nor necessary.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Infants are particularly vulnerable to EDCs because of their rapid development, small body size (resulting in higher relative exposure), and immature detoxification systems. For feeding: use glass or stainless steel bottles when possible; if using plastic, ensure bottles are BPA-free and never microwave them. For skincare: choose fragrance-free, dye-free products with simple ingredients. Limit the use of baby lotions and creams to what is medically necessary. Breast milk is naturally free of most synthetic chemicals, though some environmental contaminants can be present in small amounts.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies start solids, additional exposure routes emerge through food and food packaging. The AAP recommends: avoiding microwaving food or liquids in plastic containers, not putting plastics in the dishwasher (high heat increases chemical leaching), using glass or stainless steel food storage when possible, and choosing fresh or frozen foods over canned when feasible (some can linings contain BPA or substitutes). Wash produce to reduce pesticide residue. Avoid giving babies processed food in packaging that may contain PFAS.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers\' exploratory behavior (mouthing objects, touching surfaces) increases potential exposure. Choose toys made from materials free of phthalates and lead (look for ASTM F963 safety standards). Use stainless steel or glass cups instead of plastic sippy cups. Wash hands frequently, especially before eating, as EDCs in dust can be ingested. Avoid heavily fragranced cleaning products and air fresheners. When possible, choose organic produce for the items on the Environmental Working Group\'s "Dirty Dozen" list, which have higher pesticide residues.',
    },
  ],
  whenNormal: [
    'You take reasonable precautions like using BPA-free bottles, fragrance-free products, and avoiding microwaving plastic.',
    'You focus on practical, achievable steps rather than trying to eliminate every possible chemical exposure.',
    'Your pediatrician has reassured you that your baby\'s development and growth are normal.',
  ],
  whenToMention: [
    'You are concerned about specific products you are using on or around your baby.',
    'Your child has unexplained symptoms like early puberty signs, persistent skin reactions, or hormonal concerns.',
    'You want evidence-based guidance on which exposures to prioritize reducing.',
  ],
  whenToActNow: [
    'Your child has ingested a household chemical, cleaning product, or toxic substance -- call Poison Control (1-800-222-1222) immediately.',
    'Your child is showing signs of chemical exposure: skin burns, difficulty breathing, or persistent vomiting after contact with a product.',
    'You suspect lead exposure from paint, water, or imported products -- request blood lead testing.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['essential-oils-baby-toxic-danger', 'crunchy-parenting-baby-safety-risks', 'formula-ingredient-fear-social-media'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Food Additives and Child Health. Pediatrics, 2018.',
      url: 'https://publications.aap.org/pediatrics/article/142/2/e20181408/37579/Food-Additives-and-Child-Health',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Environmental Health Sciences. Endocrine Disruptors. NIEHS.',
      url: 'https://www.niehs.nih.gov/health/topics/agents/endocrine/index.cfm',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Endocrine Disrupting Chemicals (EDCs). WHO.',
      url: 'https://www.who.int/news-room/fact-sheets/detail/endocrine-disrupting-chemicals-(edcs)',
    },
  ],
};
