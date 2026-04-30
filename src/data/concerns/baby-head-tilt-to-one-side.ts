import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-head-tilt-to-one-side',
  title: 'Baby Tilting Head to One Side',
  category: 'physical',
  searchTerms: [
    'baby tilting head to one side',
    'baby head tilt',
    'baby always turning head one way',
    'baby neck tilt',
    'baby head leaning to side',
    'baby favoring one side head',
    'baby crooked head',
    'baby head tilt ear to shoulder',
    'why does baby tilt head',
    'baby head tilt when sitting',
  ],
  quickAnswer:
    'A baby who consistently tilts their head to one side most commonly has muscular torticollis, a tightness in one of the neck muscles. This affects about 1 in 250 babies and is very treatable with stretching exercises and physical therapy. Less commonly, head tilting can be related to vision issues, ear problems, or skeletal differences. Early treatment produces the best results, so mention a persistent head tilt to your pediatrician.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'A head tilt noticed in the early weeks is most often congenital muscular torticollis. You may notice that your baby always looks in one direction, has difficulty turning their head the other way, or tilts their ear toward one shoulder. A small, firm lump in the neck muscle may be felt. Starting stretching exercises early (ideally by 1-2 months) leads to full resolution in most cases.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If torticollis has not been addressed, you may notice your baby developing a flat spot on the side they always lie on, or a preference for looking in only one direction. Physical therapy is highly effective at this age. Your pediatrician may also check your baby\'s eyes, as some babies tilt their head to compensate for a vision imbalance.',
    },
    {
      ageRange: '6 months - 3 years',
      context:
        'A new head tilt in an older baby or toddler who previously held their head straight has different causes than congenital torticollis. It could be related to an ear infection (tilting toward the painful ear), a vision problem, cervical spine issue, or rarely a posterior fossa brain tumor. A new or sudden head tilt in a previously normal child should be evaluated promptly.',
    },
  ],
  whenNormal: [
    'A mild head turn preference in the first few weeks that resolves with repositioning',
    'Brief head tilting when your baby is tired or sleepy',
    'Occasional head tilting while trying to focus on something interesting',
  ],
  whenToMention: [
    'Your baby consistently tilts their head to the same side',
    'Your baby has difficulty turning their head in one direction',
    'You notice a flat spot developing on one side of the head',
    'Your baby seems to only look in one direction during tummy time',
  ],
  whenToActNow: [
    'A new head tilt appears suddenly in a baby or toddler who previously held their head straight',
    'Head tilting is accompanied by vomiting, irritability, or changes in balance or coordination',
    'Your baby has a head tilt with eye deviation or abnormal eye movements',
    'Head tilt is associated with fever or signs of ear or neck pain',
  ],
  relatedMilestones: ['1-month', '3-months', '6-months'],
  showSelfReferral: false,
  relatedConcernSlugs: ['torticollis', 'flat-head', 'crossed-eyes', 'ear-infections'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Torticollis. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Torticollis.aspx',
    },
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Congenital Muscular Torticollis. Pediatrics in Review.',
      url: 'https://publications.aap.org/pediatricsinreview',
    },
    {
      org: 'NIH',
      citation: 'National Library of Medicine. Torticollis in Infants. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK549778/',
    },
  ],
};
