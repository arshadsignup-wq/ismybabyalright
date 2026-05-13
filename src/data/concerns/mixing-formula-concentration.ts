import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'mixing-formula-concentration',
  title: 'Mixing Formula: Getting the Concentration Right',
  category: 'feeding',
  searchTerms: [
    'mixing formula concentration',
    'too much water in formula',
    'too little water in formula',
    'formula mixing ratio',
    'diluting formula',
    'over concentrated formula',
    'formula scoop ratio',
    'how much water for formula',
    'baby formula mixing mistakes',
  ],
  quickAnswer:
    'Getting the concentration of formula exactly right is essential for your baby\'s safety and nutrition. Adding too much water dilutes the nutrients and can cause dangerous electrolyte imbalances, while adding too little water makes the formula too concentrated and can strain your baby\'s kidneys. Always follow the manufacturer\'s instructions on the label and use the scoop that comes with that specific formula.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young babies are especially vulnerable to the effects of incorrect formula concentration. Over-diluted formula can lead to water intoxication, which causes seizures and brain swelling. Over-concentrated formula puts excessive stress on immature kidneys and can cause dehydration. If your pediatrician has prescribed a specific calorie concentration different from standard mixing, follow their instructions precisely.',
    },
    {
      ageRange: '3-6 months',
      context:
        'At this age, consistent correct mixing remains important. Some parents accidentally use the wrong scoop when switching between formula brands, since scoop sizes are not standardized. Always use the scoop that comes inside the specific formula container you are using. If you are mixing concentrate or liquid formula, follow the dilution instructions on that particular product.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Even as your baby starts solids and drinks small amounts of water, formula should always be mixed at the correct concentration. Do not add extra water to stretch the formula further, even if finances are tight. Programs like WIC can help with formula costs. If your pediatrician has recommended fortified formula at a higher calorie density, use a measuring device for accuracy.',
    },
  ],
  whenNormal: [
    'You follow the manufacturer\'s mixing instructions using the scoop provided with each formula',
    'You add the water first and then the powder to ensure accurate volume',
    'You occasionally notice slight variations in how your baby finishes bottles, which is normal',
  ],
  whenToMention: [
    'You have been mixing formula differently than the label instructions and want to discuss whether it is safe',
    'Your pediatrician has recommended a different concentration and you want to make sure you are mixing it correctly',
    'You are having trouble affording formula and need resources or alternative recommendations',
    'You are unsure about the difference between mixing instructions for powder, concentrate, and ready-to-feed formula',
  ],
  whenToActNow: [
    'Your baby has consumed significantly over-diluted formula and shows symptoms like swelling, irritability, low body temperature, or seizures',
    'Your baby has consumed over-concentrated formula and shows signs of dehydration such as dark urine, extreme fussiness, or lethargy',
    'Your baby is vomiting or has diarrhea and you believe it may be related to incorrect formula preparation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Safely Prepare Formula with Water. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/How-to-Safely-Prepare-Formula-with-Water.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant Formula Preparation and Storage.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/formula-feeding/infant-formula-preparation-and-storage.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Water Intoxication in Infants. NCBI.',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5765681/',
    },
  ],
};
