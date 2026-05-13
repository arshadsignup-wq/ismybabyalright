import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'lactose-overload-vs-allergy',
  title: 'Lactose Overload vs. Milk Allergy',
  category: 'digestive',
  searchTerms: [
    'lactose overload baby',
    'milk allergy vs lactose intolerance baby',
    'baby can\'t tolerate milk',
    'cow milk protein allergy baby',
    'foremilk hindmilk imbalance',
    'lactose intolerance in baby',
    'baby fussy after milk',
    'baby reacting to dairy',
    'CMPA symptoms baby',
    'lactose overload symptoms breastfed',
  ],
  quickAnswer:
    'Lactose overload and cow\'s milk protein allergy (CMPA) are two different conditions that are often confused because they share some symptoms like gas, fussiness, and green stools. Lactose overload is a temporary issue related to an imbalance in milk sugar digestion, often in breastfed babies. CMPA is an immune reaction to the protein in cow\'s milk and can be more serious. Understanding the difference is important because the management is very different for each.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'This is when both conditions most commonly present. Lactose overload in breastfed babies often results from a large milk supply or frequent switching between breasts, leading to a high volume of lactose-rich foremilk. Symptoms include explosive, frothy, green stools, gas, and fussiness, but the baby is otherwise thriving and gaining weight well. CMPA, by contrast, may cause blood or mucus in stool, eczema, persistent vomiting, and poor weight gain. CMPA affects roughly 2-3% of infants.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Lactose overload usually improves by this age as the baby\'s digestive system matures and milk supply regulates. If symptoms persist, a cow\'s milk protein allergy becomes a more likely explanation, particularly if there is blood or mucus in the stool, significant eczema, or poor growth. In breastfed babies with suspected CMPA, the mother may need to eliminate dairy from her diet under medical guidance. In formula-fed babies, a switch to an extensively hydrolyzed or amino acid formula may be recommended.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As solids are introduced, reactions to dairy-containing foods can help clarify the picture. A baby with CMPA may react when exposed to yogurt, cheese, or cow\'s milk-based foods with symptoms like hives, vomiting, worsening eczema, or digestive distress. True lactose intolerance (as opposed to lactose overload) is extremely rare in infants and young children, as it typically does not develop until later childhood or adulthood.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Many children with CMPA outgrow it by age 1-2, with the majority outgrowing it by age 3-5. Your pediatrician or allergist may recommend a supervised reintroduction of dairy at an appropriate time. If your toddler continues to react to cow\'s milk products, ongoing management with appropriate dairy alternatives and nutritional monitoring is important to ensure adequate calcium and vitamin D intake.',
    },
  ],
  whenNormal: [
    'Your breastfed baby has green, frothy stools and excess gas but is gaining weight well and is generally content between feeding episodes',
    'Symptoms of lactose overload improve when you allow your baby to finish one breast more completely before switching',
    'Your baby tolerates breast milk or formula well overall and has only occasional fussiness after feeds',
  ],
  whenToMention: [
    'Your baby has persistent green, mucusy, or bloody stools that are not improving with feeding adjustments',
    'You suspect a cow\'s milk protein allergy and want guidance on whether to try an elimination diet or formula change',
    'Your baby has eczema, persistent reflux, and digestive symptoms that together suggest a possible food allergy',
    'Your baby is fussy after every feeding and you are unsure whether the cause is lactose overload, CMPA, or something else',
  ],
  whenToActNow: [
    'Your baby develops hives, facial swelling, difficulty breathing, or vomiting immediately after consuming dairy, which could indicate a severe IgE-mediated allergic reaction requiring emergency care',
    'Your baby has significant blood in the stool, is losing weight, or is refusing to feed, which requires prompt medical evaluation regardless of the underlying cause',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Milk Allergy in Infants. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/Milk-Allergy-in-Infants.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Cow\'s Milk Protein Allergy in Infants: A Practical Guide. Italian Journal of Pediatrics.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/31083822/',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Infant and Young Child Feeding: Model Chapter for Textbooks.',
      url: 'https://www.who.int/publications/i/item/9789241597494',
    },
  ],
};
