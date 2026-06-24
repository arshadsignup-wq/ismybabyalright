import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-amino-acid-formula-when',
  title: 'When Does My Baby Need Amino Acid Formula?',
  category: 'feeding',
  searchTerms: [
    'amino acid formula baby',
    'elemental formula infant',
    'EleCare formula when to use',
    'Neocate formula baby',
    'severe milk allergy formula',
    'hypoallergenic formula not working',
    'amino acid based formula cost',
    'baby allergic to hydrolyzed formula',
    'CMPA formula options',
    'formula for multiple food allergies baby',
  ],
  quickAnswer:
    'Amino acid-based formulas (also called elemental formulas) are prescribed for babies with severe cow\'s milk protein allergy, multiple food protein intolerances, or conditions like eosinophilic esophagitis who cannot tolerate standard or extensively hydrolyzed formulas. They are the most hypoallergenic formula available because the proteins are broken down into individual amino acids, making allergic reactions virtually impossible.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'If your young baby has blood in their stool, severe eczema, persistent vomiting, or poor weight gain that does not improve with extensively hydrolyzed formula, your pediatrician or pediatric gastroenterologist may recommend an amino acid formula. Brands include EleCare, Neocate, and PurAmino. These formulas taste different from standard formula and some babies may need a gradual transition. They provide complete nutrition and are safe as a sole source of nutrition. Cost can be significant, but many insurance plans cover them with a prescription.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Babies on amino acid formula during this period should be monitored for appropriate growth and development. As you begin introducing solids around 6 months, work closely with your pediatrician and potentially a pediatric allergist to safely introduce foods while managing your baby\'s allergies. Many babies with cow\'s milk protein allergy outgrow it by 12-18 months, so periodic re-evaluation with your doctor is important. The amino acid formula remains the primary nutrition source until solids are well established.',
    },
    {
      ageRange: '12-36 months',
      context:
        'By the toddler years, many children have outgrown their milk protein allergy and may be able to transition back to regular formula or milk under medical supervision through a guided oral food challenge. If your child still requires amino acid formula, it can be used alongside a solid food diet to ensure adequate nutrition. Your allergist may recommend periodic testing or food challenges to determine if tolerance has developed. Continuing with a pediatric dietitian can help ensure nutritional adequacy as your child\'s diet expands.',
    },
  ],
  whenNormal: [
    'Your baby is thriving on amino acid formula - gaining weight, developing normally, and having comfortable digestion.',
    'Your baby initially resisted the taste of amino acid formula but accepted it after a gradual transition period.',
    'Your baby\'s symptoms (blood in stool, eczema, vomiting) resolved after switching to amino acid formula.',
  ],
  whenToMention: [
    'Your baby is on amino acid formula but still having digestive symptoms such as persistent vomiting, diarrhea, or blood in stool.',
    'Your baby is not gaining weight adequately despite being on amino acid formula.',
    'You want to discuss when and how to trial your baby back on regular formula or milk.',
  ],
  whenToActNow: [
    'Your baby develops signs of a severe allergic reaction - hives, facial swelling, difficulty breathing, or vomiting - after any formula change.',
    'Your baby is refusing all formula and showing signs of dehydration - dry mouth, fewer wet diapers, sunken fontanelle.',
    'Your baby has failure to thrive symptoms - falling off their growth curve, extreme lethargy, or refusing feeds consistently.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-failure-to-thrive-signs',
    'baby-european-formula-safety',
    'baby-chronic-diarrhea-no-infection',
    'baby-calcium-needs-dairy-alternatives',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Choosing an Infant Formula. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/Choosing-an-Infant-Formula.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Cow\'s Milk Protein Allergy in Infants: Diagnosis and Management. Nutrients, 2021.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/34444701/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hypoallergenic Infant Formulas. Pediatrics, 2000 (reaffirmed 2019).',
      url: 'https://publications.aap.org/pediatrics/article/106/2/346/63511',
    },
  ],
};
