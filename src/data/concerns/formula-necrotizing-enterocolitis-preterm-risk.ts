import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'formula-necrotizing-enterocolitis-preterm-risk',
  title: 'Formula and Necrotizing Enterocolitis Risk in Preterm Babies',
  category: 'medical',
  searchTerms: [
    'necrotizing enterocolitis formula',
    'NEC preterm baby',
    'formula NEC risk',
    'premature baby formula danger',
    'NEC signs baby',
    'necrotizing enterocolitis symptoms',
    'breast milk NEC prevention',
    'preterm formula risk',
    'NEC premature infant',
    'cow milk formula NEC',
  ],
  quickAnswer:
    'Necrotizing enterocolitis (NEC) is a serious intestinal disease primarily affecting premature infants, where portions of the bowel become inflamed and can die. NEC occurs in approximately 5-10% of very low birth weight infants. Research consistently shows that exclusive human milk feeding (mother\'s own milk or donor human milk) significantly reduces NEC risk compared to cow\'s milk-based formula in preterm infants. NEC is a medical emergency requiring immediate treatment. For full-term babies, NEC is extremely rare and formula feeding does not carry the same risk.',
  byAge: [
    {
      ageRange: 'Preterm (before 37 weeks)',
      context:
        'Premature babies, especially those born before 32 weeks or weighing less than 1,500 grams, are at the highest risk for NEC. The immature gut, altered blood flow, and bacterial colonization patterns in preterm infants contribute to vulnerability. Human milk (especially mother\'s own milk) contains protective factors including immunoglobulins, lactoferrin, and growth factors that strengthen the intestinal barrier and promote healthy gut bacteria. When mother\'s own milk is unavailable, pasteurized donor human milk is recommended over formula for the most premature infants.',
    },
    {
      ageRange: '0-3 months (corrected age)',
      context:
        'NEC most commonly occurs in the first 2-6 weeks of life in preterm infants, often after feeding has been initiated. Warning signs include abdominal distension (swollen belly), feeding intolerance (increased residuals, vomiting), bloody stools, lethargy, and temperature instability. NICU teams closely monitor for these signs when advancing feeds. The transition from human milk to formula, or the introduction of fortifiers, can sometimes be associated with NEC and is done carefully. If your baby is in the NICU, the medical team will guide feeding decisions based on your baby\'s individual risk.',
    },
    {
      ageRange: 'Full-term (37+ weeks)',
      context:
        'NEC in full-term babies is very rare (estimated at 1-3 per 10,000 live births) and is typically associated with specific risk factors such as congenital heart disease, birth asphyxia, or sepsis rather than formula feeding. Parents of full-term, healthy babies should not be fearful of formula based on NEC data from preterm infants, as the risk profile is fundamentally different. If your full-term baby develops symptoms like bloody stools, abdominal distension, and lethargy, seek immediate medical attention regardless of feeding method.',
    },
  ],
  whenNormal: [
    'Your preterm baby is receiving human milk in the NICU and the medical team is advancing feeds according to protocol.',
    'Your full-term baby is formula-feeding without any digestive symptoms.',
    'Your premature baby has been discharged from the NICU and is feeding and growing well.',
  ],
  whenToMention: [
    'Your preterm baby is in the NICU and you have questions about human milk vs. formula for NEC prevention.',
    'You want to discuss donor milk options if you are unable to provide your own breast milk for your preterm infant.',
    'Your premature baby has been discharged and you want guidance on ongoing feeding choices.',
  ],
  whenToActNow: [
    'Your baby (especially if premature) develops abdominal distension, bloody stools, feeding intolerance, and lethargy -- seek emergency care.',
    'Your NICU baby\'s belly appears swollen, red, or tender, and they are not tolerating feeds.',
    'Your baby has bile-stained (green) vomiting with abdominal distension, which could indicate NEC or another surgical emergency.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['formula-cronobacter-contamination-risk', 'blood-in-diaper-newborn', 'baby-vomiting-bile'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Donor Human Milk for the High-Risk Infant. Pediatrics, 2017.',
      url: 'https://publications.aap.org/pediatrics/article/139/1/e20163440/53218/Donor-Human-Milk-for-the-High-Risk-Infant',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Necrotizing Enterocolitis. CDC.',
      url: 'https://www.cdc.gov/breastfeeding/breastfeeding-special-circumstances/premature-infants.html',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Necrotizing Enterocolitis. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/001148.htm',
    },
  ],
};
