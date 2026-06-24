import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'formula-ingredient-fear-social-media',
  title: 'Formula Ingredient Fears from Social Media',
  category: 'feeding',
  searchTerms: [
    'formula ingredients scary',
    'formula ingredients toxic',
    'formula ingredient fear',
    'corn syrup in formula',
    'formula harmful chemicals',
    'European formula better',
    'is formula safe for baby',
    'formula ingredients social media',
    'formula ingredient TikTok',
    'organic vs regular formula',
    'formula heavy metals',
  ],
  quickAnswer:
    'Social media has amplified fears about infant formula ingredients, often through misleading or context-free claims. All infant formula sold in the US is regulated by the FDA and must meet strict nutritional and safety standards. Common targets of misinformation include corn syrup solids (a safe, easily digestible carbohydrate), soy-based ingredients, and preservatives -- all of which have been extensively studied. European formulas are not inherently safer. If formula is part of your feeding plan, it provides complete and safe nutrition for your baby.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'During the first months, formula may be your baby\'s sole source of nutrition, making ingredient concerns especially anxiety-inducing. Key facts: all US formula must contain specific amounts of protein, fat, carbohydrates, vitamins, and minerals to meet FDA standards. Corn syrup solids and maltodextrin are carbohydrate sources used in many formulas (especially specialized ones) because they are easily digestible -- they are not the same as high-fructose corn syrup. Soy-based formulas are safe for full-term infants. DHA and ARA added to formula are beneficial fatty acids, not harmful chemicals.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby starts solids, formula remains an important nutritional component. Claims that European formulas are significantly better than US formulas are largely unfounded -- both meet rigorous safety standards, just from different regulatory bodies. Importing non-FDA-approved formula carries risks: labeling may not be in English, storage conditions during shipping cannot be verified, and there is no recall infrastructure for imported products. If you have concerns about specific ingredients, discuss them with your pediatrician, who can provide evidence-based context.',
    },
    {
      ageRange: '12+ months',
      context:
        'As babies transition to whole milk and table foods, formula ingredient concerns usually diminish. However, the patterns of fear-based decision-making established through social media can persist into other food choices. It is important to develop media literacy around health claims: look for peer-reviewed evidence, consult your pediatrician, and be wary of claims made by people selling alternative products. Remember that the dose makes the poison -- trace amounts of any substance found in formula have been evaluated for safety at the levels present.',
    },
  ],
  whenNormal: [
    'You have questions about formula ingredients and seek answers from your pediatrician or evidence-based sources.',
    'You choose a formula brand based on your pediatrician\'s recommendation and your baby tolerates it well.',
    'You feel some anxiety about formula ingredients but are able to evaluate claims critically.',
  ],
  whenToMention: [
    'Anxiety about formula ingredients is causing you significant distress or affecting your feeding choices.',
    'You are considering using non-FDA-approved imported formula and want safety guidance.',
    'You want to discuss specific ingredient concerns with your pediatrician to get evidence-based information.',
  ],
  whenToActNow: [
    'You have stopped feeding your baby formula based on social media claims and your baby is not getting adequate nutrition.',
    'You are using a homemade formula recipe found online, which can be nutritionally inadequate and dangerous.',
    'Your baby is showing signs of malnutrition or dehydration because of feeding changes based on ingredient fears.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['breastfeeding-misinformation-social-media', 'breastfeeding-pressure-online-guilt', 'formula-cronobacter-contamination-risk'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Choosing an Infant Formula. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/Choosing-a-Formula.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant Formula Preparation and Storage. CDC.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/formula-feeding/infant-formula-preparation-and-storage.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Infant Formula: Evaluating Safety. FDA.',
      url: 'https://www.fda.gov/food/people-risk-foodborne-illness/questions-answers-consumers-concerning-infant-formula',
    },
  ],
};
