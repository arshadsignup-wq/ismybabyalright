import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-cranial-osteopathy-evidence',
  title: 'Is Cranial Osteopathy Effective for Babies?',
  category: 'medical',
  searchTerms: [
    'cranial osteopathy baby',
    'craniosacral therapy baby',
    'cranial osteopathy evidence baby',
    'cranial osteopathy safe baby',
    'cranial osteopathy colic',
    'cranial osteopathy flat head baby',
    'craniosacral therapy infant evidence',
    'baby osteopath',
    'cranial osteopathy torticollis',
    'is craniosacral therapy safe for babies',
  ],
  quickAnswer:
    'Cranial osteopathy (craniosacral therapy) involves very gentle manipulation of the skull and body. While some parents report improvements in colic, sleep, and feeding, the scientific evidence supporting its effectiveness for babies is limited. High-quality clinical trials have not consistently demonstrated benefit beyond placebo. It is generally considered safe when performed by a qualified practitioner, but it should not replace evidence-based treatments for diagnosed medical conditions.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Cranial osteopathy is often sought for newborn complaints like colic, feeding difficulties, and fussiness attributed to birth trauma. While the treatment is gentle, current evidence does not strongly support specific craniosacral mechanisms. If you are considering it, ensure it complements rather than replaces medical care.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Some parents seek cranial osteopathy for torticollis or plagiocephaly. While the gentle techniques are unlikely to cause harm, evidence-based treatment for torticollis (physical therapy with specific stretching exercises) has much stronger evidence. Use it alongside, not instead of, recommended physical therapy.',
    },
    {
      ageRange: '6-12 months',
      context:
        'At this age, cranial osteopathy may be sought for sleep issues, recurrent ear infections, or developmental concerns. For ear infections, proven medical treatments should be the foundation of care. For developmental concerns, early intervention services have strong evidence and should be prioritized.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Some families use cranial osteopathy as part of a complementary wellness approach. If you find it helpful, there is no strong evidence of harm from gentle techniques. However, avoid practitioners who make unrealistic claims or discourage evidence-based medical care.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Cranial osteopathy for toddlers lacks robust scientific support for specific conditions. If you choose to pursue it, ensure the practitioner is properly qualified and communicate openly with your pediatrician about all treatments your child receives.',
    },
  ],
  whenNormal: [
    'You are using cranial osteopathy as a complement to evidence-based medical care',
    'Your baby seems comfortable during and after sessions',
    'You maintain all recommended well-child visits and medical treatments alongside the therapy',
  ],
  whenToMention: [
    'You are considering cranial osteopathy and want your pediatrician\'s perspective',
    'A practitioner has made recommendations that differ from your pediatrician\'s advice',
    'You want to ensure the treatments are not interfering with your baby\'s medical care',
  ],
  whenToActNow: [
    'A practitioner advises against vaccination, medication, or other proven medical treatment',
    'Your baby seems to be in pain or distress during or after treatment, or you notice any new symptoms',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-chiropractic-safety-evidence',
    'baby-plagiocephaly-helmet-therapy',
    'baby-torticollis-vs-head-tilt',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Center for Complementary and Integrative Health. Craniosacral Therapy.',
      url: 'https://www.nccih.nih.gov/health/craniosacral-therapy',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Complementary and Integrative Medicine. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/treatments/Pages/Complementary-and-Integrative-Medicine.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Craniosacral therapy.',
      url: 'https://www.mayoclinic.org/tests-procedures/massage-therapy/expert-answers/craniosacral-therapy/faq-20058260',
    },
  ],
};
