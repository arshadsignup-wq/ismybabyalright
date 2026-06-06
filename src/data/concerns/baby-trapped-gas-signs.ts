import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-trapped-gas-signs',
  title: 'Signs of Trapped Gas in Baby',
  category: 'digestive',
  searchTerms: [
    'baby trapped gas signs',
    'how to tell baby has gas',
    'baby gas symptoms',
    'baby gassy signs',
    'infant gas signs',
    'baby gas pain symptoms',
    'baby uncomfortable gas',
    'baby drawing legs up gas',
    'baby arching back gas',
    'baby fussing from gas',
  ],
  quickAnswer:
    'Common signs of trapped gas in babies include drawing the legs up toward the belly, arching the back, clenching fists, a hard or bloated-feeling tummy, squirming and fussing (especially after feeds), and excessive crying that seems to ease after passing gas or a bowel movement. Gas discomfort is very common and usually harmless but can make your baby quite uncomfortable.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young infants commonly struggle with gas because their digestive systems are immature. Signs include legs pulled up, a red face with straining, crying that peaks in the late afternoon or evening, squirming during or after feeds, and audible gurgling in the belly. These signs typically improve dramatically by 3 to 4 months.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Gas discomfort often improves as the digestive system matures. If your baby is still showing frequent gas signs, consider whether bottle flow rate, latch, or swallowed air during feeds could be contributing. Burping well during and after feeds and keeping baby upright can help.',
    },
    {
      ageRange: '6-12 months',
      context:
        'New foods can introduce gas-causing sugars to the digestive system. Signs of gas from food include bloating, squirming, and flatulence after specific foods. Common gas-producing foods include beans, broccoli, and high-fiber cereals. This is normal and does not mean the food should be permanently avoided.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers may be able to tell you their tummy hurts. Complaints of a tummy ache after meals, visible bloating, or increased flatulence suggest dietary gas. This is usually normal and harmless. Ensuring adequate water intake and regular physical activity helps the digestive system process gas.',
    },
  ],
  whenNormal: [
    'Periodic fussiness with legs drawn up that resolves after passing gas or a bowel movement',
    'Some squirming and grunting after feeds that improves with burping',
    'Increased gas after trying new foods that settles over days',
  ],
  whenToMention: [
    'Gas seems to cause significant distress for much of the day',
    'Gas symptoms are accompanied by poor feeding or spitting up',
    'You want help determining whether the symptoms are gas or something else',
  ],
  whenToActNow: [
    'A hard, distended, tender abdomen with vomiting, which could indicate obstruction',
    'Inconsolable screaming with a rigid belly that does not improve with gas relief measures',
    'Gas-like symptoms with bloody stool, fever, or bilious vomiting',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breaking Up Gas. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Breaking-Up-Gas.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Infant Colic and Intestinal Gas. Journal of Pediatric Gastroenterology and Nutrition.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/25714681/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Why Babies Are Fussy. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/Colic.aspx',
    },
  ],
  relatedConcernSlugs: ['excessive-gas-baby', 'baby-gas-pain-vs-colic', 'baby-bicycle-legs-gas-relief', 'baby-abdominal-massage-gas'],
};
