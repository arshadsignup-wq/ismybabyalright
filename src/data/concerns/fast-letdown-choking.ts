import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'fast-letdown-choking',
  title: 'Fast Milk Letdown Causing Baby to Choke',
  category: 'feeding',
  searchTerms: [
    'fast letdown baby choking',
    'forceful letdown',
    'baby gagging while breastfeeding',
    'overactive letdown',
    'baby sputtering at breast',
    'milk coming too fast baby',
    'baby pulling off breast coughing',
    'strong letdown reflex',
    'baby can\'t keep up with milk flow',
  ],
  quickAnswer:
    'An overactive or forceful letdown means milk flows very quickly from the breast, especially at the start of a feeding, causing your baby to choke, gag, or pull off sputtering. This is a common breastfeeding challenge and is not dangerous as long as your baby can clear the milk from their airway. Positioning adjustments and timing strategies can make feedings much more comfortable for both of you.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Forceful letdown is most problematic in the early months when your baby\'s swallowing coordination is still developing and your milk supply tends to be at its highest. Try nursing in a reclined or laid-back position so gravity works against the flow rather than with it. You can also let the initial forceful spray release into a towel before latching your baby. Hand expressing or pumping briefly before feeding can also slow the initial rush.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As your baby grows and their ability to manage flow improves, many families notice that forceful letdown becomes less of an issue. Your baby is now stronger and better at coordinating sucking, swallowing, and breathing. Your supply may also begin to regulate, producing less of a forceful initial spray. Continue using positioning strategies if needed.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, most babies can handle a fast letdown without difficulty. If your baby is still struggling, it may be worth evaluating whether an oversupply issue is contributing to the continued forceful flow. A lactation consultant can help assess whether block feeding or other supply management strategies would be beneficial.',
    },
  ],
  whenNormal: [
    'Your baby coughs or sputters briefly at the beginning of a feeding but then settles into comfortable nursing',
    'The forceful letdown occurs mainly with the first letdown of each feeding session',
    'Your baby gains weight well and seems satisfied after feeds despite the initial sputtering',
    'The choking episodes become less frequent as your baby gets older',
  ],
  whenToMention: [
    'Your baby consistently refuses to nurse or becomes very distressed at the breast due to the fast flow',
    'Your baby is swallowing excessive air during feeds, leading to significant gas, fussiness, or spitting up',
    'You suspect you also have an oversupply problem contributing to the forceful letdown',
    'Positioning strategies have not helped and feedings remain stressful',
  ],
  whenToActNow: [
    'Your baby chokes and turns blue or has difficulty breathing during or after a feeding',
    'Your baby aspirates milk (inhales it into the lungs), causing persistent coughing, wheezing, or respiratory symptoms after feeds',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Breastfeeding-and-the-Use-of-Human-Milk',
    },
    {
      org: 'La Leche League',
      citation:
        'La Leche League International. Forceful Let-Down (Milk Ejection Reflex) and Oversupply.',
      url: 'https://llli.org/breastfeeding-info/oversupply/',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Breastfeeding recommendations.',
      url: 'https://www.who.int/health-topics/breastfeeding',
    },
  ],
};
