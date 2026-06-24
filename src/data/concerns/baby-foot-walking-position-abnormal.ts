import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-foot-walking-position-abnormal',
  title: 'My Baby\'s Feet Turn In or Out When Walking',
  category: 'physical',
  searchTerms: [
    'baby feet turn inward walking',
    'baby pigeon toed',
    'toddler feet point outward',
    'baby in-toeing',
    'baby out-toeing',
    'baby walking on side of foot',
    'toddler feet turned in',
    'baby metatarsus adductus',
    'toddler tibial torsion',
    'baby foot position abnormal',
    'baby walking feet wrong way',
  ],
  quickAnswer:
    'It is very common for babies and toddlers to walk with their feet turning inward (in-toeing or "pigeon-toed") or outward (out-toeing). In the vast majority of cases, these foot positions are normal developmental variations that correct on their own as the child grows. In-toeing is the most common and usually resolves by age 8. However, if the foot position is rigid, only affects one side, causes pain, or worsens over time, evaluation by a pediatrician or orthopedist is recommended.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Newborn feet often appear curved inward due to their position in the womb. Metatarsus adductus — where the front part of the foot curves inward — is the most common foot deformity in newborns and affects about 1 in 1,000 babies. Most cases are flexible (the foot can be gently straightened) and resolve without treatment by 6-12 months. Rigid metatarsus adductus that cannot be straightened may need serial casting. Clubfoot (talipes equinovarus), where the foot is turned sharply inward and downward, is a different condition that requires early treatment and is typically identified at birth or on prenatal ultrasound.',
    },
    {
      ageRange: '6-18 months',
      context:
        'As babies begin pulling to stand and cruising, you may notice their feet point outward — this is very common and provides a wider base of support for new walkers. Mild out-toeing in early walkers typically resolves within 6-12 months of walking. Internal tibial torsion (inward twist of the shinbone) may become apparent as babies start walking, causing in-toeing. This is one of the most common causes of in-toeing in this age group and almost always self-corrects. There is no evidence that special shoes, braces, or orthotics help with normal rotational variations.',
    },
    {
      ageRange: '18-36 months',
      context:
        'Femoral anteversion — an inward twist of the thighbone — is the most common cause of in-toeing in children ages 2 and older. Children with this may prefer W-sitting and may trip more often. This condition typically peaks around ages 3-6 and improves through late childhood. Out-toeing that persists beyond age 2 or worsens should be evaluated. If your child has pain, limping, stiffness, or if only one foot is affected, see your pediatrician to rule out conditions like hip dysplasia or other orthopedic problems.',
    },
  ],
  whenNormal: [
    'Both feet turn in or out symmetrically and the position is flexible — the foot can be gently moved to a normal position.',
    'Your early walker has mild out-toeing that provides stability while learning to walk.',
    'Your toddler is in-toeing but walks and runs without pain, limping, or frequent falling.',
  ],
  whenToMention: [
    'The foot position seems to be getting worse rather than better over time.',
    'Your child trips or falls significantly more than peers or avoids walking and running.',
    'Only one foot is affected, or the two feet have very different positions.',
  ],
  whenToActNow: [
    'Your newborn has a foot that is rigidly turned inward and downward and cannot be gently straightened — this may be clubfoot and needs prompt orthopedic evaluation.',
    'Your child has sudden onset of foot or leg pain, limping, or refusal to walk — seek same-day medical evaluation.',
    'Your child\'s foot position is associated with leg length discrepancy, hip pain, or back pain — see your pediatrician promptly.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['flat-feet', 'not-standing', 'baby-gross-motor-delay-signs'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Pigeon Toes (Intoeing)',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Pigeon-Toes-Intoeing.aspx',
    },
    {
      org: 'OrthoInfo (AAOS)',
      citation:
        'American Academy of Orthopaedic Surgeons — Intoeing in Children',
      url: 'https://orthoinfo.aaos.org/en/diseases--conditions/intoeing/',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine — Metatarsus Adductus',
      url: 'https://medlineplus.gov/ency/article/001601.htm',
    },
  ],
};
