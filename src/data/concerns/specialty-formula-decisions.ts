import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'specialty-formula-decisions',
  title: 'When Your Baby Needs a Specialty Formula',
  category: 'feeding',
  searchTerms: [
    'specialty formula for baby',
    'hypoallergenic formula',
    'amino acid formula baby',
    'soy formula baby',
    'hydrolyzed formula',
    'lactose free formula baby',
    'baby needs special formula',
    'prescription formula baby',
    'elemental formula infant',
  ],
  quickAnswer:
    'Specialty formulas, including soy-based, partially hydrolyzed, extensively hydrolyzed, and amino acid-based formulas, are designed for babies with specific medical needs such as milk protein allergy, lactose intolerance, or malabsorption conditions. These formulas should be chosen with guidance from your pediatrician rather than based on marketing claims alone. The right specialty formula can make a significant difference in your baby\'s comfort and growth.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'If your newborn has blood in their stool, persistent vomiting, severe eczema, or extreme fussiness with feeds, your pediatrician may recommend an extensively hydrolyzed or amino acid-based formula. Soy formula is generally not recommended for babies under 6 months as a first-line alternative, because many babies allergic to cow\'s milk protein are also sensitive to soy protein.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, if standard formula changes have not resolved symptoms, your pediatrician may trial a specialty formula for two to four weeks. It is important to give the new formula adequate time to work before switching again. Extensively hydrolyzed formulas have a distinct taste that some babies resist initially, so patience during the transition is important.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies on specialty formulas should continue them through 12 months unless directed otherwise by their doctor. As solids are introduced, work with your pediatrician or an allergist to understand which foods are safe if your baby has a milk protein allergy. Some babies may begin supervised dairy challenges toward the end of the first year.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Many children outgrow cow\'s milk protein allergy between 12 and 24 months. Your pediatrician or allergist may recommend an oral food challenge to see if your child can tolerate regular dairy. Until then, continue the specialty formula or an appropriate milk alternative to ensure adequate nutrition and calcium intake.',
    },
  ],
  whenNormal: [
    'Your baby\'s symptoms improve significantly within two to four weeks of starting a specialty formula',
    'Your baby initially resists the taste of hydrolyzed formula but accepts it after a few days',
    'Your baby gains weight appropriately and has comfortable digestion on the specialty formula',
  ],
  whenToMention: [
    'Your baby\'s symptoms have not improved after two to four weeks on the specialty formula',
    'You are struggling to afford the specialty formula and need assistance with cost or insurance coverage',
    'You are unsure whether your baby still needs a specialty formula or can transition to standard formula',
    'Your baby is losing weight or not growing well despite being on a specialty formula',
  ],
  whenToActNow: [
    'Your baby has a severe allergic reaction including hives, facial swelling, wheezing, or difficulty breathing after trying a new formula',
    'Your baby has persistent bloody stools, projectile vomiting, or failure to thrive despite being on a specialty formula',
    'Your baby refuses all formula and shows signs of dehydration or malnutrition',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Choosing an Infant Formula. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/Choosing-an-Infant-Formula.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Cow\'s Milk Protein Allergy in Infants. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/106/2/346/63268/Hypoallergenic-Infant-Formulas',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Cow\'s Milk Allergy. National Institute of Allergy and Infectious Diseases.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/food-allergy',
    },
  ],
};
