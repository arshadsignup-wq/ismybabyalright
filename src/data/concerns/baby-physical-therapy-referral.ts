import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-physical-therapy-referral',
  title: 'When Does My Baby Need Physical Therapy?',
  category: 'medical',
  searchTerms: [
    'baby physical therapy',
    'baby PT referral',
    'when does baby need physical therapy',
    'pediatric physical therapy baby',
    'baby not meeting gross motor milestones',
    'baby physical therapy what to expect',
    'infant physical therapy',
    'baby PT exercises',
    'physical therapy torticollis baby',
    'baby gross motor delay therapy',
  ],
  quickAnswer:
    'Pediatric physical therapy may be recommended if your baby has delays in gross motor milestones (rolling, sitting, crawling, walking), torticollis, low or high muscle tone, or orthopedic conditions. PT helps babies develop strength, coordination, and movement patterns. Early intervention is key - the sooner therapy starts, the better the outcomes. Your pediatrician can provide a referral based on developmental screening.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Physical therapy at this age is most commonly for torticollis (head preference to one side) or for premature babies who may have low muscle tone. A pediatric PT uses gentle stretches, positioning techniques, and parent education. Sessions often focus on teaching you exercises to do at home daily for the best results.',
    },
    {
      ageRange: '3-6 months',
      context:
        'PT may be recommended if your baby is not meeting rolling milestones, has persistent torticollis, or shows low or high muscle tone that affects movement. Therapy at this age focuses on building core strength, achieving rolling, and preparing for sitting. The therapist will teach you play-based activities to support development at home.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If your baby is not sitting independently by 9 months or not showing interest in crawling or pulling to stand, PT may help. The therapist assesses your baby\'s movement patterns and creates a plan to address specific areas of delay. Sessions are play-based and should feel like fun for your baby.',
    },
    {
      ageRange: '12-24 months',
      context:
        'PT at this age often focuses on walking, balance, and coordination. If your toddler is not walking by 18 months or has an unusual walking pattern, a referral may be warranted. Children with conditions like Down syndrome, cerebral palsy, or other developmental differences benefit greatly from ongoing physical therapy.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Physical therapy for older toddlers may address running, jumping, climbing, and overall coordination. Children who are clumsy, frequently fall, or have difficulty with physical activities compared to peers may benefit from PT. The therapist works on building confidence along with physical skills.',
    },
  ],
  whenNormal: [
    'Your baby is meeting milestones within the normal range (there is a wide range of normal)',
    'Your baby has been referred for PT and is making progress with therapy exercises',
    'Minor variations in development that resolve with simple home activities',
  ],
  whenToMention: [
    'Your baby seems behind peers in physical milestones like sitting, crawling, or walking',
    'Your baby strongly favors one side of the body or has asymmetric movement',
    'You have concerns about your baby\'s muscle tone (too floppy or too stiff)',
  ],
  whenToActNow: [
    'Your baby loses previously acquired motor skills (regression)',
    'Your baby has sudden weakness, inability to move a limb, or extreme stiffness that is new',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-occupational-therapy-referral',
    'baby-speech-therapy-referral',
    'baby-developmental-pediatrician-referral',
    'baby-torticollis-vs-head-tilt',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Motor Delays: Early Identification and Evaluation. Pediatrics, 2013.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/Motor-Delays.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Physical Therapy in Early Intervention. Pediatric Physical Therapy.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/23542189/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Developmental Milestones.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
    },
  ],
};
