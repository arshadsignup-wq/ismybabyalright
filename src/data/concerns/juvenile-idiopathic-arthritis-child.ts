import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'juvenile-idiopathic-arthritis-child',
  title: 'Juvenile Idiopathic Arthritis (JIA) in Children',
  category: 'medical',
  searchTerms: [
    'juvenile idiopathic arthritis child',
    'JIA child',
    'juvenile arthritis symptoms',
    'child joint stiffness morning',
    'toddler limping morning stiffness',
    'child swollen knee arthritis',
    'oligoarticular arthritis child',
    'polyarticular arthritis child',
    'systemic juvenile arthritis',
    'child joint inflammation six weeks',
  ],
  quickAnswer:
    'Juvenile idiopathic arthritis (JIA) is the most common chronic rheumatic disease of childhood, affecting about 1 in 1,000 children. It is defined as joint inflammation (arthritis) lasting at least 6 weeks in a child under 16 years with no other identifiable cause. JIA is an autoimmune condition — the immune system mistakenly attacks the joint lining (synovium). Symptoms include joint swelling, stiffness (especially in the morning or after rest), pain, and sometimes limping. There are several subtypes, with oligoarticular (4 or fewer joints) being the most common. With modern treatments, most children with JIA can achieve remission and live active, normal lives.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'JIA is very rare in infants under 6 months. Joint swelling in a baby this young requires urgent evaluation to rule out septic arthritis (joint infection), which is a medical emergency. Other causes of infant joint swelling include birth injury or congenital conditions. If you notice swelling, warmth, or reduced movement in any of your baby\'s joints, contact your pediatrician right away.',
    },
    {
      ageRange: '6-12 months',
      context:
        'While uncommon, JIA can begin in late infancy. Parents may notice a baby is not using one arm normally, is reluctant to crawl, or has a swollen knee or ankle without a known injury. The swelling is often painless in young children — they may simply avoid using the affected limb. If joint swelling persists for more than a few days without explanation, your pediatrician should evaluate and may refer to a pediatric rheumatologist.',
    },
    {
      ageRange: '1-3 years',
      context:
        'This is a peak age for the onset of oligoarticular JIA, particularly in girls. The most commonly affected joints are the knee, ankle, and wrist. Parents often notice a limp, particularly in the morning or after naps, that improves with activity. Morning stiffness lasting more than 15-30 minutes is a hallmark. Children may not complain of pain but instead stop doing activities they used to enjoy. Uveitis (eye inflammation) is a serious silent complication — children with JIA, especially oligoarticular JIA with positive ANA, need regular eye exams by an ophthalmologist.',
    },
    {
      ageRange: '3+ years',
      context:
        'JIA can present at any age in childhood. Polyarticular JIA (affecting 5 or more joints) and systemic JIA (with daily spiking fevers and rash) are also seen. Systemic JIA presents with high, quotidian fevers (spiking once or twice daily and returning to normal), a salmon-colored evanescent rash, and joint involvement. Modern treatment with disease-modifying medications (methotrexate) and biologics (etanercept, adalimumab, tocilizumab) has transformed outcomes. Early aggressive treatment prevents joint damage and disability. Physical therapy is an essential part of care.',
    },
  ],
  whenNormal: [
    'Your child has brief joint pain after intense physical activity that resolves with rest — growing pains typically occur at night and affect both legs',
    'Your child has occasional joint popping or cracking without swelling or pain, which is normal',
    'Your child\'s joints are flexible and mobile without swelling, warmth, or stiffness',
    'Your child had a brief episode of joint pain during a viral illness that resolved completely',
  ],
  whenToMention: [
    'Your child has joint swelling lasting more than 2 weeks without a known injury',
    'Your child has morning stiffness lasting more than 15 minutes or limps after waking or napping',
    'Your child is avoiding activities they used to enjoy, refusing to run, climb, or use a limb normally',
    'Your child has persistent joint swelling with a family history of autoimmune disease',
  ],
  whenToActNow: [
    'Your child has a hot, red, swollen joint with fever — this needs urgent evaluation to rule out septic arthritis (joint infection), which requires emergency treatment',
    'Your child with JIA develops eye pain, redness, or vision changes — uveitis can cause permanent vision loss if not treated promptly',
    'Your child with systemic JIA has persistent high fevers, severe fatigue, and enlarged liver or spleen — macrophage activation syndrome (MAS) is a life-threatening complication requiring emergency care',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'toddler-joint-swelling',
    'baby-autoimmune-condition-signs',
    'reactive-arthritis-child',
    'pediatric-lupus-signs-child',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Juvenile Idiopathic Arthritis. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/default.aspx',
    },
    {
      org: 'ACR',
      citation:
        'American College of Rheumatology. 2019 ACR/Arthritis Foundation Guideline for the Treatment of Juvenile Idiopathic Arthritis. Arthritis Care & Research, 2019.',
      url: 'https://www.rheumatology.org/Practice-Quality/Clinical-Support/Clinical-Practice-Guidelines/JIA',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Arthritis and Musculoskeletal and Skin Diseases. Juvenile Arthritis. NIAMS, 2023.',
      url: 'https://www.niams.nih.gov/health-topics/juvenile-arthritis',
    },
  ],
};
