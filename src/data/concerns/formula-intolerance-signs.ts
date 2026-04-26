import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'formula-intolerance-signs',
  title: 'Formula Intolerance Signs',
  category: 'feeding',
  searchTerms: [
    'formula intolerance signs',
    'baby not tolerating formula',
    'formula making baby sick',
    'baby fussy after formula',
    'formula allergy symptoms baby',
    'baby diarrhea from formula',
    'baby vomiting after formula',
    'formula causing gas and crying',
    'how to tell if formula is wrong for baby',
    'cow milk protein allergy formula',
    'baby rash from formula',
  ],
  quickAnswer:
    'Some fussiness, gas, and occasional spit-up are normal for all babies, whether breastfed or formula-fed. True formula intolerance or allergy involves more persistent symptoms like excessive vomiting, bloody or mucousy stools, a widespread rash, or significant distress during and after feeds. If you suspect your baby is not tolerating their formula, talk to your pediatrician before making any changes, as they can help determine whether a switch is truly needed.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Newborns are adjusting to feeding and digestion for the first time, so some gas, fussiness, and spitting up is expected regardless of what they eat. If your newborn has persistent, forceful vomiting (not just spit-up), watery or bloody stools, a widespread rash, or seems to be in pain during most feeds, these may be signs of a formula intolerance. Cow\'s milk protein allergy is the most common formula-related allergy, affecting about 2 to 3 percent of infants.',
    },
    {
      ageRange: '1-3 months',
      context:
        'This is the age when formula intolerance symptoms tend to become most apparent, as the immune and digestive systems are still immature. Symptoms of cow\'s milk protein allergy can include colic-like crying, eczema, blood in the stool, frequent vomiting, and diarrhea. If your pediatrician suspects a milk protein allergy, they may recommend a hydrolyzed formula where the proteins are broken down into smaller, easier-to-digest pieces, or an amino acid-based formula for more severe cases.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If your baby has been on formula for several months and symptoms have persisted despite trying different standard formulas, your pediatrician may recommend an allergy evaluation. Some babies outgrow cow\'s milk protein allergy by six months. Do not switch to soy formula without guidance, as many babies with cow\'s milk protein allergy also react to soy.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As solid foods are introduced, you may notice reactions to dairy-containing solids if your baby has a cow\'s milk protein allergy. Many children with milk protein allergy outgrow it by 12 months, and your pediatrician may suggest a supervised milk challenge around this age or later. Continue with the recommended specialty formula until your doctor advises otherwise.',
    },
  ],
  whenNormal: [
    'Your baby spits up small amounts after feeds but is otherwise happy and gaining weight well',
    'Your baby has some gas and occasional fussiness but settles with burping, movement, or comfort',
    'Your baby\'s stools vary in color and consistency but are generally soft and without blood or mucus',
    'Your baby has occasional fussy days that alternate with calm, content days',
  ],
  whenToMention: [
    'Your baby vomits frequently and forcefully after most formula feeds',
    'You see blood or mucus in your baby\'s stool, or stools are consistently watery',
    'Your baby has developed persistent eczema, hives, or a rash that coincides with formula feeding',
  ],
  whenToActNow: [
    'Your baby has difficulty breathing, facial swelling, or widespread hives after a feed, which may indicate a severe allergic reaction requiring emergency care',
    'Your baby is losing weight or failing to gain, has bloody stools, and seems to be in significant pain with most feeds',
  ],
  relatedMilestones: [
    'feeding',
    'weight-gain',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Choosing a Formula. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Choosing-a-Formula.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Cow\'s Milk Allergy in Infants. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Milk-Allergy.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant and Toddler Nutrition: Choosing an Infant Formula.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/formula-feeding/choosing-an-infant-formula.html',
    },
  ],
};
