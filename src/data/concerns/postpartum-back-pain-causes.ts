import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postpartum-back-pain-causes',
  title: 'Postpartum Back Pain - Causes and Recovery',
  category: 'maternal',
  searchTerms: [
    'back pain after baby',
    'postpartum back pain causes',
    'lower back pain after pregnancy',
    'back hurts from holding baby',
    'postpartum back pain breastfeeding',
    'epidural back pain after delivery',
    'back pain after c-section',
    'postpartum back pain relief',
    'SI joint pain after pregnancy',
    'upper back pain nursing',
    'back pain after giving birth',
  ],
  quickAnswer:
    'Postpartum back pain is extremely common, affecting up to 67% of women after delivery. Causes include relaxin hormone (which loosens ligaments during pregnancy and takes months to normalize), weakened core and pelvic floor muscles, diastasis recti, poor posture during breastfeeding, repetitive lifting and carrying of the baby, and physical recovery from delivery. Most postpartum back pain resolves within 6-12 months with appropriate treatment. Contrary to popular belief, epidural anesthesia does not cause long-term back pain. If back pain is severe or persistent, pelvic floor physical therapy is the most effective treatment.',
  byAge: [
    {
      ageRange: 'Baby 0-6 weeks',
      context:
        'In the early postpartum period, back pain is very common as your body recovers from pregnancy and delivery. Relaxin hormone, which loosened your joints and ligaments for delivery, remains elevated for several months, making your spine and pelvis less stable. The weakened core muscles provide less support for your back. During this period, focus on gentle movement, proper body mechanics when lifting your baby (bend at the knees, not the waist), and supported positions for breastfeeding. Use pillows to bring your baby to breast level rather than hunching over. Avoid heavy lifting beyond your baby\'s weight.',
    },
    {
      ageRange: 'Baby 6 weeks - 6 months',
      context:
        'As your baby grows heavier, the physical demands increase. Common sources of postpartum back pain during this period include: breastfeeding posture (especially upper back and neck pain from looking down), carrying the baby on one hip, lifting the car seat (which can exceed 25 pounds with the baby), and inadequate core support. A pelvic floor physical therapist can assess your posture, core strength, pelvic alignment, and design a targeted exercise program. Ergonomic adjustments matter: use a supportive chair for nursing, carry the car seat with two hands close to your body, and alternate which hip you carry your baby on.',
    },
    {
      ageRange: 'Baby 6-12 months and beyond',
      context:
        'Most postpartum back pain improves significantly by 6-12 months as hormone levels normalize and core strength rebuilds. If back pain persists beyond 12 months, further evaluation is warranted. Potential causes of persistent postpartum back pain include unresolved diastasis recti, sacroiliac (SI) joint dysfunction, pelvic floor dysfunction, disc issues, and postpartum osteoporosis (rare). Strengthening your core, maintaining good posture, staying active, and addressing underlying issues with physical therapy are the most effective approaches. Pain that radiates down your leg, causes numbness, or is accompanied by bladder or bowel changes needs prompt evaluation.',
    },
  ],
  whenNormal: [
    'You have mild to moderate back pain that is gradually improving in the months after delivery.',
    'Back pain is worse with prolonged sitting or after lifting but improves with movement and rest.',
    'Your back pain is manageable and does not prevent you from caring for your baby.',
  ],
  whenToMention: [
    'Back pain is not improving or is worsening beyond 3 months postpartum.',
    'You want a referral to a pelvic floor physical therapist for assessment and treatment.',
    'Back pain is interfering with your ability to care for your baby, sleep, or function daily.',
    'You had an epidural and are experiencing persistent pain at the injection site (which is rare but possible).',
  ],
  whenToActNow: [
    'You have back pain with radiating leg pain, numbness, tingling, or weakness in your legs, which may indicate a nerve compression issue.',
    'You have back pain with fever, which could indicate an infection (extremely rare after epidural).',
    'You have sudden severe back pain with loss of bladder or bowel control, which is a medical emergency (cauda equina syndrome).',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'postpartum-abdominal-separation-check',
    'postpartum-body-recovery-timeline',
    'losing-baby-weight-safely',
  ],
  sources: [
    {
      org: 'ACOG',
      citation:
        'ACOG. Postpartum Pain Management. Obstetrics & Gynecology, 2021.',
      url: 'https://www.acog.org/womens-health/faqs/postpartum-pain-management',
    },
    {
      org: 'NIH',
      citation:
        'NIH - Postpartum Low Back Pain: A Systematic Review. European Spine Journal, 2019.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30446813/',
    },
    {
      org: 'APTA',
      citation:
        'American Physical Therapy Association. Postpartum Musculoskeletal Conditions.',
      url: 'https://www.apta.org/patient-care/evidence-based-practice-resources/womens-health',
    },
  ],
};
