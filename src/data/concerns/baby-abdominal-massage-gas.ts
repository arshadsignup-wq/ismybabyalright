import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-abdominal-massage-gas',
  title: 'Tummy Massage for Baby Gas',
  category: 'digestive',
  searchTerms: [
    'baby tummy massage gas',
    'baby abdominal massage',
    'infant massage for gas',
    'baby stomach massage technique',
    'baby massage gas relief',
    'how to massage baby belly gas',
    'baby I love you massage',
    'baby clockwise belly massage',
    'colic massage baby',
    'baby gas massage positions',
  ],
  quickAnswer:
    'Gentle abdominal massage can help relieve gas and discomfort in babies by encouraging gas to move through the intestines. The technique involves gentle clockwise circular motions on the belly (following the direction of the digestive tract), the "I Love U" stroke pattern, and gentle knee-to-tummy movements. Massage also provides comforting touch that can soothe a fussy baby.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Wait until the umbilical cord stump has fallen off before massaging the belly. Use gentle pressure with your fingertips in a clockwise direction around the belly button. The "I Love U" technique traces the letters on the abdomen to follow the large intestine path. Do tummy massage between feeds, not immediately after.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Tummy massage can be incorporated into a daily routine. Many parents find it helpful before bedtime. Combine with bicycle leg movements for additional gas relief. Use a small amount of natural oil (coconut or olive) to reduce friction. Your baby may pass gas during the massage, which means it is working.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become more active, they may squirm during massage. Try shorter sessions when the baby is calm and receptive. The increased physical activity of crawling and moving naturally helps with gas, so tummy massage may be less necessary than in younger months.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers with tummy aches may still benefit from gentle abdominal massage. Clockwise strokes and gentle pressure can help with constipation and gas. Making it a comforting routine during discomfort can also provide emotional reassurance.',
    },
  ],
  whenNormal: [
    'Baby passes gas during or after abdominal massage',
    'Mild fussiness that settles with massage and positioning',
  ],
  whenToMention: [
    'Massage does not seem to help and your baby remains very uncomfortable with gas',
    'Your baby seems to have pain with gentle abdominal pressure',
    'Gas discomfort is frequent and significantly disrupting daily life',
  ],
  whenToActNow: [
    'Your baby\'s abdomen is hard, distended, and tender, and they refuse to eat',
    'Massage causes significant pain reaction (not just fussiness from disliking the position)',
    'Persistent inconsolable crying with a distended belly and vomiting',
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
        'National Library of Medicine. Infant Massage for Colic. Cochrane Database of Systematic Reviews.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30618093/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Infant Massage. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/The-Benefits-of-Baby-Massage.aspx',
    },
  ],
  relatedConcernSlugs: ['excessive-gas-baby', 'baby-bicycle-legs-gas-relief', 'baby-trapped-gas-signs'],
};
