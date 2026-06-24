import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-hypoallergenic-formula-when',
  title: 'When Does My Baby Need Hypoallergenic Formula?',
  category: 'feeding',
  searchTerms: [
    'hypoallergenic formula when to use',
    'baby needs hypoallergenic formula',
    'hydrolyzed formula baby',
    'extensively hydrolyzed formula',
    'amino acid formula baby',
    'baby milk protein allergy formula',
    'CMPA formula options',
    'hypoallergenic formula vs regular',
    'baby allergic to regular formula',
    'soy formula vs hypoallergenic',
    'nutramigen alimentum baby',
  ],
  quickAnswer:
    'Hypoallergenic formulas (extensively hydrolyzed or amino acid-based) are recommended for babies with confirmed or strongly suspected cow\'s milk protein allergy (CMPA). Symptoms of CMPA include blood or mucus in stool, persistent vomiting, severe eczema, hives, or failure to thrive. Your pediatrician should guide the switch to hypoallergenic formula. Partially hydrolyzed formulas (like "gentle" formulas) are not truly hypoallergenic and are not appropriate for babies with confirmed milk allergy.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'CMPA symptoms often emerge in the first few months when cow\'s milk-based formula is introduced, or through breast milk in breastfed babies whose mothers consume dairy. If your baby has bloody stools, severe reflux, persistent skin rashes, or extreme fussiness and your pediatrician suspects CMPA, they may recommend an extensively hydrolyzed formula (such as Nutramigen or Alimentum) where the milk proteins are broken down into very small pieces. About 90% of babies with CMPA tolerate extensively hydrolyzed formulas. For the remaining 10% who still react, amino acid-based formulas (such as EleCare or Neocate) are recommended.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If your baby was switched to hypoallergenic formula, symptoms typically improve within 2-4 weeks. If symptoms persist after 2-4 weeks on extensively hydrolyzed formula, your pediatrician may try an amino acid-based formula. Soy formula is not recommended as a first alternative for babies under 6 months with CMPA because up to 50% of babies allergic to cow\'s milk also react to soy protein. Partially hydrolyzed ("gentle" or "comfort") formulas still contain large enough protein fragments to trigger reactions in allergic babies and should not be used for confirmed CMPA.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Most babies with CMPA continue on hypoallergenic formula until at least 12 months. As solids are introduced, work with your pediatrician or allergist to ensure your baby avoids cow\'s milk protein in solid foods as well. Many children outgrow CMPA — approximately 50% by age 1 and 80-90% by age 3-5. Your allergist may use a milk ladder approach to gradually reintroduce dairy. Do not attempt reintroduction on your own without medical guidance, as reactions can be unpredictable. Hypoallergenic formulas are more expensive than standard formulas, but some insurance plans cover them with a prescription.',
    },
  ],
  whenNormal: [
    'Your baby is on hypoallergenic formula prescribed by your pediatrician and symptoms have resolved or significantly improved.',
    'Your baby tolerates extensively hydrolyzed formula well and is gaining weight appropriately.',
    'Your pediatrician or allergist has confirmed the need for hypoallergenic formula through proper evaluation.',
  ],
  whenToMention: [
    'Your baby has persistent fussiness, eczema, reflux, or loose stools on standard formula and you are wondering if CMPA could be the cause.',
    'Your baby is on hypoallergenic formula but symptoms have not improved after 2-4 weeks.',
    'You want to know when it might be safe to try reintroducing regular formula or dairy.',
  ],
  whenToActNow: [
    'Your baby has an immediate allergic reaction after formula exposure: hives, facial swelling, difficulty breathing, vomiting, or becoming pale and floppy — this may be anaphylaxis. Call 911 and administer epinephrine if prescribed.',
    'Your baby has bloody stools, refuses to eat, and is losing weight or failing to thrive — seek urgent medical evaluation.',
    'Your baby has severe vomiting with dehydration (no wet diapers, sunken fontanelle, lethargy) possibly related to formula intolerance — seek emergency care.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-food-allergen-ladder-approach', 'baby-goat-milk-formula-safety', 'baby-organic-formula-vs-regular', 'baby-introducing-dairy-yogurt'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Choosing a Hypoallergenic Formula',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/Hypoallergenic-Formulas.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases — Food Allergy Guidelines',
      url: 'https://www.niaid.nih.gov/diseases-conditions/food-allergy-guidelines',
    },
    {
      org: 'WHO',
      citation:
        'World Allergy Organization — Cow\'s Milk Allergy in Children',
      url: 'https://www.worldallergy.org/education-and-programs/education/allergic-disease-resource-center/professionals/cow-milk-allergy',
    },
  ],
};
