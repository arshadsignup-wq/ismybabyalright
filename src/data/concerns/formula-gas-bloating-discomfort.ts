import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'formula-gas-bloating-discomfort',
  title: 'Gas, Bloating, and Discomfort in Formula-Fed Babies',
  category: 'digestive',
  searchTerms: [
    'formula gas baby',
    'formula fed baby gassy',
    'baby bloated formula',
    'gas drops for formula baby',
    'formula causing gas pain',
    'gassy baby formula change',
    'which formula least gas',
    'baby uncomfortable after formula',
    'formula fed baby tummy pain',
    'reduce gas formula baby',
  ],
  quickAnswer:
    'Gas and mild bloating are very common in formula-fed babies and are usually caused by swallowing air during feeding rather than the formula itself. All babies produce gas as their immature digestive systems process food. While gas can cause temporary discomfort and fussiness, it is rarely a sign of a serious problem. Strategies to reduce gas include proper bottle positioning, paced feeding, frequent burping, and ensuring the correct bottle nipple flow rate. Switching formula is usually not necessary unless other symptoms suggest an intolerance.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Gas is most bothersome during the newborn period because the digestive system is immature. Babies swallow air during feeding, which contributes significantly to gas. To minimize air intake: hold the bottle at a 45-degree angle so the nipple stays full of formula, use a slow-flow nipple appropriate for your baby\'s age, try paced bottle feeding (holding the bottle more horizontally and allowing pauses), and burp your baby every 2-3 oz. Tummy time and bicycle leg exercises can also help move gas through. Simethicone gas drops (like Mylicon) are safe and may help some babies, though research on effectiveness is mixed.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Gas symptoms often improve around 3-4 months as the digestive system matures. If gas and discomfort persist and are accompanied by other symptoms (excessive spitting up, blood or mucus in stool, eczema, poor weight gain), cow\'s milk protein intolerance should be considered. Your pediatrician may recommend a trial of partially hydrolyzed, extensively hydrolyzed, or amino acid-based formula. Do not switch formulas frequently without medical guidance, as each switch requires 1-2 weeks to assess effectiveness.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As solids are introduced, new foods can temporarily increase gas production as the gut microbiome adapts. Vegetables like broccoli, beans, and peas may increase gas initially. This is normal and does not mean these healthy foods should be avoided -- just introduce them gradually. If gas and bloating seem severe after starting solids, ensure you are introducing foods one at a time and watching for signs of food intolerance. Most babies\' digestive comfort improves significantly during this period.',
    },
  ],
  whenNormal: [
    'Your baby passes gas frequently but is otherwise happy, feeding well, and gaining weight.',
    'Your baby is fussy for short periods after feeding but can be consoled with burping, bicycle legs, or tummy time.',
    'Your baby has occasional gassy days but no consistent pattern of severe distress.',
  ],
  whenToMention: [
    'Your baby seems in significant pain with gas: arching back, drawing up legs, screaming inconsolably for extended periods.',
    'Gas and discomfort are accompanied by changes in stool (blood, mucus, very watery, or very hard).',
    'You are considering switching formula and want guidance on which type might help.',
  ],
  whenToActNow: [
    'Your baby has a distended, hard, and tender abdomen with vomiting, which could indicate a bowel obstruction.',
    'Your baby is refusing all feeds and has not had a wet diaper in 6+ hours along with abdominal distension.',
    'Your baby is projectile vomiting after every feed with persistent abdominal discomfort.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['excessive-gas-baby', 'formula-constipation-hard-stools', 'cow-milk-protein-allergy-vs-reflux', 'baby-gulping-air'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breaking Up Gas. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Breaking-Up-Gas.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Choosing a Formula. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/Choosing-a-Formula.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Infantile Colic and Gas. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/000978.htm',
    },
  ],
};
