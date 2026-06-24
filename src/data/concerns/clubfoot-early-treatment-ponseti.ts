import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'clubfoot-early-treatment-ponseti',
  title: 'Clubfoot: Early Treatment with the Ponseti Method',
  category: 'physical',
  searchTerms: [
    'clubfoot treatment baby',
    'ponseti method clubfoot',
    'baby born with clubfoot',
    'clubfoot casting',
    'talipes equinovarus treatment',
    'clubfoot brace baby',
    'ponseti casting newborn',
    'clubfoot surgery vs casting',
    'how long does clubfoot treatment take',
    'clubfoot correction baby',
    'denis browne bar clubfoot',
  ],
  quickAnswer:
    'Clubfoot (talipes equinovarus) is one of the most common congenital musculoskeletal conditions, affecting about 1 in 1,000 births. The Ponseti method, involving gentle serial casting followed by bracing, is now the gold standard treatment with success rates exceeding 95%. Treatment ideally begins within the first 1-2 weeks of life. Most babies achieve excellent functional outcomes without major surgery when the Ponseti protocol is followed consistently.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Treatment should begin as soon as possible after birth, ideally within the first 1-2 weeks. The Ponseti method involves a series of weekly gentle manipulations and long-leg plaster casts that gradually stretch and reposition the foot. Most babies require 5-7 casts over 5-7 weeks. The process is not painful for the baby, as newborn ligaments and tendons are very flexible. After the final cast, most babies (about 80%) need a minor procedure called an Achilles tenotomy (a small cut of the Achilles tendon under local anesthesia) to achieve full correction.',
    },
    {
      ageRange: '2-4 months',
      context:
        'After casting and tenotomy are complete, the baby transitions to a foot abduction brace (Denis Browne bar or similar). The brace is worn full-time (23 hours per day) for 2-3 months, then during naps and nighttime until age 4-5 years. Consistent brace wear is the most critical factor in preventing relapse. Many parents find the brace challenging at first, but babies typically adjust within a few days. Proper brace use reduces relapse rates from over 50% to under 10%.',
    },
    {
      ageRange: '6-24 months',
      context:
        'During the bracing phase, your child will continue to develop normally. Most children with corrected clubfoot walk at the same age as their peers. Watch for signs of relapse, which include the foot turning inward again or walking on the outside of the foot. If relapse occurs, additional casting or, less commonly, a more extensive surgical procedure called a tibialis anterior tendon transfer (after age 2) may be needed. Regular follow-up with your orthopedic specialist is essential during this period.',
    },
    {
      ageRange: '2-5 years',
      context:
        'Nighttime bracing typically continues until age 4-5 years. Annual or bi-annual follow-up with a pediatric orthopedist helps ensure the correction is maintained. Most children with successfully treated clubfoot can participate in all physical activities without limitation. The corrected foot may be slightly smaller (half to one full shoe size) and the calf muscles slightly thinner than the unaffected side, which is cosmetic and rarely functionally significant.',
    },
  ],
  whenNormal: [
    'Your baby is progressing through Ponseti casting on schedule and the foot is gradually correcting.',
    'Your baby adjusts to the brace within a few days and sleeps and feeds normally while wearing it.',
    'Your child is meeting motor milestones (rolling, crawling, walking) on schedule after clubfoot correction.',
  ],
  whenToMention: [
    'You notice your child\'s foot seems to be turning inward again despite brace use.',
    'Your child is resisting the brace and brace wear has dropped below the recommended hours.',
    'Your child is not meeting expected motor milestones such as pulling to stand by 12 months.',
  ],
  whenToActNow: [
    'The cast is causing skin breakdown, circulation problems (blue or white toes), or your baby is in significant pain.',
    'You notice a sudden change in your child\'s foot position or walking pattern that suggests relapse.',
    'The brace is causing open sores or wounds that are not healing.',
  ],
  relatedMilestones: [
    'crawling',
    'standing',
    'walking',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: ['not-standing', 'flat-feet', 'not-pulling-up'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Clubfoot. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Clubfoot.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Clubfoot: Ponseti Method. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/001228.htm',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Clubfoot: Ponseti Method Training Manual. WHO, 2009.',
      url: 'https://www.who.int/publications/i/item/9789241547666',
    },
  ],
};
