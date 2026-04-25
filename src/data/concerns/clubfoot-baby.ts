import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'clubfoot-baby',
  title: 'My Baby Was Born with Clubfoot',
  category: 'medical',
  searchTerms: [
    'baby clubfoot',
    'clubfoot treatment',
    'talipes baby',
    'baby foot turned in',
    'clubfoot casting',
    'ponseti method',
    'clubfoot surgery',
    'clubfoot brace',
    'baby born with twisted foot',
    'clubfoot outcomes',
  ],
  quickAnswer:
    'Clubfoot (talipes equinovarus) is a condition where one or both feet are turned inward and downward at birth. It affects about 1 in 1,000 babies and is very treatable. The Ponseti method, which uses gentle casting and bracing, corrects clubfoot in over 95% of cases without major surgery. Treatment typically starts within the first few weeks of life for best results.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Clubfoot is usually diagnosed at birth or on prenatal ultrasound. Treatment should begin as soon as possible, ideally within the first 1-2 weeks of life. The Ponseti method involves weekly gentle manipulation and casting to gradually move the foot into the correct position. Your baby will see a pediatric orthopedic specialist who will apply a series of casts, typically 5-7 over several weeks.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, most babies have completed the casting phase of treatment. Many require a minor procedure (Achilles tenotomy) to lengthen the Achilles tendon, done in the office with local anesthesia. After the final cast is removed, your baby will wear a special brace (boots and bar) full-time for 2-3 months to maintain the correction.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Your baby will continue wearing the boots and bar brace, usually during naps and nighttime (12-14 hours per day). Consistency with bracing is critical to prevent relapse. Your orthopedic specialist will monitor your baby\'s progress regularly. Most babies reach typical motor milestones - rolling, sitting, and eventually crawling - despite treatment.',
    },
    {
      ageRange: '1-4 years',
      context:
        'Your child will continue wearing the brace during sleep, typically until age 3-4. By this age, most children are walking well and keeping up with peers. About 30% of children experience a relapse requiring additional casting or occasionally surgery, but most maintain excellent correction. Regular follow-ups with orthopedics ensure any issues are caught early.',
    },
    {
      ageRange: '4 years+',
      context:
        'Most children complete bracing by age 4 and have normal or near-normal foot function. Some have a slightly smaller calf or foot on the affected side, but this rarely affects function. Your child can typically participate in all activities and sports. Occasional follow-ups may continue through adolescence to monitor foot development.',
    },
  ],
  whenNormal: [
    'Your baby was diagnosed with clubfoot and is receiving treatment with a pediatric orthopedic specialist',
    'Your baby is progressing through casting and bracing as expected',
    'Your baby is meeting developmental milestones despite wearing casts or braces',
    'You\'re following the bracing schedule and attending all follow-up appointments',
    'Your child\'s foot looks well-positioned and they\'re walking comfortably',
  ],
  whenToMention: [
    'Your baby\'s foot seems to be turning back inward despite bracing',
    'You\'re having difficulty keeping the brace on or maintaining the bracing schedule',
    'Your baby seems uncomfortable or the cast appears too tight or too loose',
    'You have questions about your baby\'s developmental progress',
    'You\'re concerned about the appearance or function of your child\'s foot',
  ],
  whenToActNow: [
    'Your baby\'s toes become blue, very pale, or cold while in a cast',
    'The cast becomes wet, damaged, or develops a foul smell',
    'Your baby has a fever along with an unusual smell from the cast (may indicate infection)',
    'Your baby seems to be in significant pain or is unusually fussy after a new cast',
    'You notice sores, blisters, or skin breakdown from the brace',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Clubfoot. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Clubfoot.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Orthopaedic Surgeons. Clubfoot (Congenital Talipes Equinovarus). OrthoInfo, 2023.',
      url: 'https://orthoinfo.aaos.org/en/diseases--conditions/clubfoot/',
    },
    {
      org: 'AAP',
      citation:
        'Ponseti International Association. The Ponseti Method. Ponseti Method Information, 2024.',
      url: 'https://www.ponseti.info/',
    },
  ],
};
