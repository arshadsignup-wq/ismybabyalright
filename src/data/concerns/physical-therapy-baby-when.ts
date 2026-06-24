import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'physical-therapy-baby-when',
  title: 'When Does Your Baby Need Physical Therapy?',
  category: 'physical',
  searchTerms: [
    'physical therapy baby',
    'baby PT referral when',
    'infant physical therapy',
    'baby not rolling over PT',
    'baby not crawling physical therapy',
    'torticollis physical therapy baby',
    'early intervention physical therapy',
    'baby gross motor delay',
    'pediatric physical therapy what to expect',
    'physical therapy vs occupational therapy baby',
  ],
  quickAnswer:
    'Pediatric physical therapy (PT) helps babies and toddlers develop gross motor skills including rolling, sitting, crawling, standing, and walking. PT may be recommended if your baby has delayed motor milestones, torticollis (tight neck muscles causing head tilt), flat head (plagiocephaly), low or high muscle tone, difficulty with balance or coordination, or orthopedic conditions. Early intervention PT is available free or at low cost through your state\'s early intervention program for children under 3. Research consistently shows that early physical therapy leads to better motor outcomes than waiting to see if a child will "catch up" on their own.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'In the first 4 months, the most common reasons for PT referral are torticollis (a tightness or shortening of neck muscles causing the baby to prefer turning their head one direction), plagiocephaly (flat spot on the head often related to torticollis), and low muscle tone (hypotonia). Signs to watch for include: strong preference for looking one direction, difficulty lifting head during tummy time, very floppy or very stiff body, and asymmetric movement (one side moves more than the other). Early treatment for torticollis, which involves gentle stretching and positioning, is highly effective and can prevent the need for more intensive intervention later.',
    },
    {
      ageRange: '4-9 months',
      context:
        'During this period, PT may be recommended for babies who are not rolling by 6 months, not sitting with support by 6 months or independently by 8-9 months, who show strong asymmetry in movement or strength, or who seem to skip developmental stages. A baby who is not weight-bearing on their legs at all by 6-7 months may also benefit from evaluation. PT for infants is play-based and gentle, involving specific activities, positioning, and exercises that parents learn to incorporate into daily routines. Your pediatrician can refer you, or you can contact your state\'s early intervention program directly.',
    },
    {
      ageRange: '9-18 months',
      context:
        'Common reasons for PT during this period include: not pulling to stand by 12 months, not cruising (walking while holding furniture) by 12 months, not walking independently by 16-18 months, abnormal walking pattern (toe-walking, wide base, excessive falling), and delayed crawling or unusual crawling patterns (army crawling only, bunny hopping). While there is a wide range of normal for walking (9-18 months), persistent motor delays or unusual patterns warrant evaluation. PT can address underlying strength, balance, or coordination issues that may be contributing to the delay.',
    },
    {
      ageRange: '18-36 months',
      context:
        'Toddlers may benefit from PT for persistent balance problems, frequent falls beyond what is age-appropriate, difficulty with stairs, running, or climbing, toe-walking, or a diagnosed condition such as cerebral palsy, Down syndrome, or developmental coordination disorder. PT at this age focuses on functional skills, play-based activities, and building strength and coordination for age-appropriate activities. Your state early intervention program serves children up to age 3; after age 3, services transition to the school district\'s special education program.',
    },
  ],
  whenNormal: [
    'Your baby is meeting gross motor milestones within the expected range, even if not at the earliest end.',
    'Your baby shows a brief preference for one side but can be encouraged to use both sides.',
    'Your toddler is clumsy and falls sometimes while learning to walk and run, which is normal.',
  ],
  whenToMention: [
    'Your baby is not rolling by 6 months or not sitting independently by 9 months.',
    'Your baby has a persistent head tilt or strong preference for looking one direction.',
    'Your baby is not pulling to stand by 12 months or not walking by 18 months.',
    'Your toddler walks on their toes most of the time or has an unusual gait pattern.',
  ],
  whenToActNow: [
    'Your baby shows sudden loss of motor skills they had previously achieved (regression).',
    'Your baby has extremely low muscle tone and difficulty holding up their head by 4 months.',
    'Your baby has asymmetric movements that suggest weakness on one side of the body, which could indicate a neurological issue.',
  ],
  relatedMilestones: [
    'gross-motor',
    'rolling',
    'sitting',
    'walking',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'occupational-therapy-baby-when',
    'not-sitting-up',
    'not-standing',
    'flat-head',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Motor Delays: Early Identification and Evaluation. Pediatrics, 2013.',
      url: 'https://publications.aap.org/pediatrics/article/131/6/e2016/30083/Motor-Delays-Early-Identification-and-Evaluation',
    },
    {
      org: 'APTA',
      citation:
        'American Physical Therapy Association. Pediatric Physical Therapy.',
      url: 'https://www.apta.org/your-practice/practice-models-and-settings/pediatric-physical-therapy',
    },
    {
      org: 'CDC',
      citation:
        'CDC. If You\'re Concerned About Your Child\'s Development: Act Early.',
      url: 'https://www.cdc.gov/ncbddd/actearly/concerned.html',
    },
  ],
};
