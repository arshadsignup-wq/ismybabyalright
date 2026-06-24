import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'formula-cronobacter-contamination-risk',
  title: 'Cronobacter Contamination Risk in Infant Formula',
  category: 'feeding',
  searchTerms: [
    'cronobacter formula baby',
    'formula contamination risk',
    'cronobacter sakazakii infant formula',
    'formula bacteria contamination',
    'powdered formula safety',
    'formula preparation safety',
    'how to safely prepare formula',
    'formula recall contamination',
    'cronobacter baby infection',
    'formula sterilization',
  ],
  quickAnswer:
    'Cronobacter sakazakii is a rare but serious bacterium that can contaminate powdered infant formula. While infections are uncommon (affecting an estimated 1 in 100,000 infants), they can be devastating, with mortality rates of 40-80% in affected newborns. The CDC and AAP recommend specific formula preparation practices to minimize risk: wash hands thoroughly, use properly cleaned bottles, prepare formula with water heated to at least 158 degrees F (70 degrees C) for high-risk infants, and use prepared formula within 2 hours or refrigerate immediately.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Newborns, especially those born prematurely or with weakened immune systems, are at the highest risk for severe Cronobacter infection. Symptoms can include fever, poor feeding, excessive crying, lethargy, seizures, and can progress to meningitis or sepsis. For high-risk infants, the WHO recommends preparing powdered formula with water heated to at least 158 degrees F (70 degrees C) to kill potential Cronobacter organisms, then cooling to feeding temperature. Ready-to-feed liquid formula is commercially sterile and carries no Cronobacter risk -- it may be preferred for the highest-risk babies.',
    },
    {
      ageRange: '2-12 months',
      context:
        'While the risk decreases somewhat with age, safe formula preparation practices should be maintained throughout infancy. Key practices include: wash hands and bottle components thoroughly before each preparation; use clean, safe water; prepare only the amount needed for one feeding when possible; if batching, refrigerate immediately and use within 24 hours; never feed leftover formula that has been at room temperature for more than 2 hours; and do not heat formula in the microwave (creates hot spots). Stay aware of formula recalls through the FDA website.',
    },
    {
      ageRange: '12+ months',
      context:
        'Children over 12 months who are transitioning to whole milk are no longer at significant risk for Cronobacter from formula. However, if your toddler still receives powdered formula or a specialty medical formula, continue safe preparation practices. Once your child transitions to table foods and regular milk, the primary food safety concerns shift to general food handling and storage practices. Children with immune system conditions may remain at elevated risk for any foodborne infection.',
    },
  ],
  whenNormal: [
    'You prepare formula according to package directions using clean equipment, safe water, and proper hygiene.',
    'You use prepared formula within 2 hours or refrigerate immediately and use within 24 hours.',
    'You use ready-to-feed formula for very young or high-risk infants.',
  ],
  whenToMention: [
    'You are unsure about proper formula preparation techniques and want guidance.',
    'Your baby\'s formula has been recalled and you need to switch products.',
    'You have questions about water safety for formula preparation in your area.',
  ],
  whenToActNow: [
    'Your infant has symptoms of possible infection: fever, lethargy, poor feeding, seizures, or unusual irritability, especially if under 2 months old.',
    'You believe your baby consumed contaminated or recalled formula and is showing any symptoms.',
    'Your baby has meningitis symptoms: high-pitched cry, bulging fontanelle, stiff neck, and fever.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['formula-ingredient-fear-social-media', 'formula-necrotizing-enterocolitis-preterm-risk', 'persistent-fever-baby'],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Cronobacter Infection and Infants. CDC, 2024.',
      url: 'https://www.cdc.gov/cronobacter/prevention.html',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Safe Preparation, Storage and Handling of Powdered Infant Formula. WHO, 2007.',
      url: 'https://www.who.int/publications/i/item/9789241595414',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Safely Prepare Formula with Water. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/How-to-Safely-Prepare-Formula-with-Water.aspx',
    },
  ],
};
