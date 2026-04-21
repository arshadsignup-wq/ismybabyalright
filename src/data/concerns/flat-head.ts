import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'flat-head',
  title: 'Flat Head (Positional Plagiocephaly)',
  searchTerms: [
    'baby has flat head',
    'flat spot on baby head',
    'baby head shape uneven',
    'does my baby need a helmet',
    'plagiocephaly in babies',
    'baby flat head when to worry',
    'one side of baby head flat',
    'baby head shape will it fix itself',
    'craniosynostosis vs flat head',
    'how to fix baby flat head',
  ],
  quickAnswer:
    'Flat spots on a baby\'s head are very common and almost always caused by positioning, not a structural problem. Most positional flat spots improve significantly with simple repositioning strategies and supervised tummy time.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Newborn heads are soft and mouldable by design. A slight flattening from sleeping position is extremely common at this age. Alternating which direction your baby faces during sleep can help prevent a flat spot from developing.',
    },
    {
      ageRange: '2-4 months',
      context:
        'This is when positional flattening is often most noticeable, because babies spend a lot of time on their backs (which is the safest sleep position). Increasing supervised tummy time and varying your baby\'s head position during awake periods is the main approach.',
    },
    {
      ageRange: '4-8 months',
      context:
        'As babies gain head control and start rolling, many flat spots begin to improve on their own. If a flat spot is moderate to severe, this is the window when a helmet (cranial orthosis) is most effective, typically starting around 4-6 months.',
    },
    {
      ageRange: '8-12 months',
      context:
        'Most mild to moderate flat spots have improved considerably by now as your baby spends more time upright. Helmet therapy is less effective after about 12 months because skull growth slows. Hair growth also helps conceal any remaining asymmetry.',
    },
    {
      ageRange: '12 months+',
      context:
        'The skull continues to remodel gradually throughout early childhood. Many parents who were worried at 3-4 months find the shape has rounded out significantly by this age. Residual mild asymmetry is common in the general population and rarely causes any issues.',
    },
  ],
  whenNormal: [
    'A mild flat spot on one side of the head, especially if your baby has a preferred sleeping position',
    'The flat area is improving with repositioning and increased tummy time',
    'Your baby\'s ears appear roughly symmetrical and the forehead is not noticeably pushed forward on one side',
    'Your baby moves their head freely in both directions when awake',
    'Your baby was born with some moulding from the birth canal that is gradually resolving',
  ],
  whenToMention: [
    'The flat spot seems to be getting worse despite repositioning efforts',
    'Your baby strongly prefers turning their head to one side and resists turning the other way, which may suggest torticollis',
    'You notice the ear on the flat side appears pushed forward, or the forehead is more prominent on one side',
    'The flat spot is still significant at 4 months and you want to discuss whether a helmet evaluation makes sense',
  ],
  whenToActNow: [
    'You notice a ridge or raised line along the top or side of your baby\'s skull, which could indicate craniosynostosis rather than positional flattening',
    'The head shape appears to be worsening rapidly or is accompanied by other developmental concerns',
  ],
  relatedMilestones: [
    'head-control',
    'tummy-time',
    'rolling',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Prevention and Management of Positional Skull Deformities in Infants. Pediatrics, 2011.',
      url: 'https://publications.aap.org/pediatrics/article/128/6/1236/30542/Prevention-and-Management-of-Positional-Skull',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Facts about Craniosynostosis.',
      url: 'https://www.cdc.gov/birth-defects/about/craniosynostosis.html',
    },
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Flat Head Syndrome (Positional Plagiocephaly) & Torticollis: Parent FAQs.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/Cleft-Craniofacial/Pages/Positional-Skull-Deformities-and-Torticollis.aspx',
    },
  ],
};
