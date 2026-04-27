import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-lactose-intolerance-signs',
  title: 'Baby Lactose Intolerance Signs',
  category: 'digestive',
  searchTerms: ['baby lactose intolerance','baby lactose intolerance signs','baby lactose intolerance vs milk allergy','lactose intolerance in infants','baby gassy after milk','baby diarrhea from milk','lactose intolerance symptoms baby','baby can\'t digest milk','lactose free formula baby','baby bloated after feeding','dairy intolerance baby signs','secondary lactose intolerance baby'],
  quickAnswer: 'True primary lactose intolerance is extremely rare in babies and young children - nearly all babies can digest lactose, which is a key sugar in both breast milk and cow\'s milk formula. What parents often call "lactose intolerance" in babies is usually either cow\'s milk protein allergy (an immune reaction to the protein, not the sugar) or temporary secondary lactose intolerance following a stomach bug. The distinction matters because the treatment is different for each condition.',
  byAge: [
    { ageRange: '0-6 months', context: 'Primary (genetic) lactose intolerance is almost unheard of in infants. Breast milk contains high levels of lactose, and healthy babies produce plenty of the enzyme (lactase) to digest it. If your baby has digestive symptoms like excessive gas, diarrhea, or blood in stool, the most likely cause is cow\'s milk protein allergy (CMPA) passed through breast milk or formula, not lactose intolerance. CMPA affects about 2-3% of infants and is an immune reaction to the protein in cow\'s milk.' },
    { ageRange: '6-12 months', context: 'Secondary lactose intolerance can occur temporarily after a stomach bug (gastroenteritis). The virus damages the lining of the intestine where lactase is produced, causing temporary difficulty digesting lactose. Symptoms include watery diarrhea, bloating, and gas that persist after the illness seems to have resolved. This usually resolves within 2-4 weeks as the intestinal lining heals. Your pediatrician may recommend a lactose-free formula temporarily during recovery.' },
    { ageRange: '12-24 months', context: 'As toddlers transition to cow\'s milk, some may develop digestive symptoms. If your toddler has gas, bloating, or loose stools with cow\'s milk, try reducing the amount or switching to whole-fat yogurt (which is better tolerated because the bacteria pre-digest some lactose). If symptoms are severe or include blood or mucus in stool, test for cow\'s milk protein allergy. A breath hydrogen test or elimination diet can help distinguish lactose intolerance from protein allergy.' },
    { ageRange: '2-5 years', context: 'Primary lactose intolerance becomes more common in certain ethnic groups as children age (most common in East Asian, African, Hispanic, and Native American populations). Symptoms include bloating, gas, cramping, and diarrhea after consuming dairy. Most children with lactose intolerance can tolerate small amounts of dairy, especially cheese and yogurt. A lactose-free milk provides the same nutrition without the symptoms.' },
  ],
  whenNormal: ['Your baby has occasional gas and fussiness that improves with burping and tummy time - this is normal infant digestion','Your baby has looser stools during or after a stomach bug that gradually firm up over 2-4 weeks','Your toddler tolerates yogurt and cheese but gets gassy with large amounts of milk'],
  whenToMention: ['Your baby has persistent diarrhea, excessive gas, and bloating with milk-based formula','Your toddler consistently has digestive symptoms after consuming dairy products','Your baby had a stomach bug and digestive symptoms have not resolved after 4 weeks'],
  whenToActNow: ['Your baby has blood or mucus in stool, which suggests cow\'s milk protein allergy rather than lactose intolerance','Your baby is not gaining weight, is severely dehydrated, or is refusing all feeds','Your baby has projectile vomiting, hives, or difficulty breathing after consuming milk - this suggests an allergic reaction'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['milk-protein-allergy','formula-intolerance-signs','excessive-gas-baby'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Lactose Intolerance in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Lactose-Intolerance-in-Children.aspx' },
    { org: 'NIH', citation: 'National Institute of Diabetes and Digestive and Kidney Diseases. Lactose Intolerance.', url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/lactose-intolerance' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Cow\'s Milk Allergy in Infants. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Cows-Milk-Allergy-in-Infants.aspx' },
  ],
};
