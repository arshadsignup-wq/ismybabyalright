import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'vulnerable-child-syndrome-post-nicu',
  title: 'I Can\'t Stop Worrying Something Is Wrong After the NICU',
  category: 'maternal',
  searchTerms: [
    'vulnerable child syndrome',
    'hypervigilance after NICU',
    'can\'t stop worrying after NICU discharge',
    'overprotective after NICU',
    'NICU parent anxiety at home',
    'NICU trauma parenting',
    'post NICU anxiety',
    'preemie parent hypervigilance',
    'overprotective parent after hospital stay',
    'can\'t relax after baby came home from NICU',
  ],
  quickAnswer:
    'Vulnerable child syndrome describes a pattern of persistent, excessive worry about a child\'s health that continues long after the child has recovered from a serious illness or NICU stay. Parents may overprotect, make excessive doctor visits, and have difficulty letting their child take age-appropriate risks. This is a normal response to a traumatic experience, but when it significantly impacts daily life and the child\'s development, professional support can help you rebuild trust that your baby is okay.',
  byAge: [
    {
      ageRange: '0-3 months post-discharge',
      context:
        'The transition from NICU to home is one of the most anxiety-inducing experiences a parent can face. You are leaving behind the constant monitoring, the nurses, and the alarms that both terrified and reassured you. It is completely normal to check your baby obsessively, to sleep next to the crib, and to call the pediatrician frequently. Your nervous system was trained by weeks or months of crisis mode. Give yourself grace during this adjustment.',
    },
    {
      ageRange: '3-6 months post-discharge',
      context:
        'If the hypervigilance has not eased — if you still cannot sleep, still rush to the ER for every minor symptom, still cannot let anyone else care for your baby — this may be developing into vulnerable child syndrome. Signs include: taking your baby\'s temperature multiple times daily without cause, avoiding social situations for fear of germs, and being unable to allow your baby to do age-appropriate exploration.',
    },
    {
      ageRange: '6-12 months post-discharge',
      context:
        'As your baby grows stronger and healthier, the gap between actual risk and perceived risk should narrow. If it does not, the overprotection can begin to affect your child\'s development by limiting their opportunities for exploration, social interaction, and building resilience. Therapy — particularly EMDR or CBT for medical trauma — can help you process the NICU experience and calibrate your worry to current reality.',
    },
    {
      ageRange: '1 year+ post-discharge',
      context:
        'If your child is thriving and you still feel unable to believe they are well, or if you are restricting their activities, school, or social life based on fears rooted in their early medical history, professional support is strongly recommended. Vulnerable child syndrome affects the whole family and is very responsive to treatment.',
    },
  ],
  whenNormal: [
    'You feel extra cautious in the first few weeks after coming home from the NICU and this gradually eases',
    'You call the pediatrician more often than other parents but the calls are becoming less frequent over time',
    'You feel protective during RSV season or when your baby is around sick people — this is appropriate for former NICU babies',
  ],
  whenToMention: [
    'Your anxiety about your baby\'s health has not decreased despite your baby being healthy and growing well',
    'You are making more ER or doctor visits than your pediatrician thinks are necessary',
    'You are unable to allow others — even your partner — to care for your baby',
    'You are limiting your baby\'s exploration, social contact, or activities beyond what your pediatrician recommends',
  ],
  whenToActNow: [
    'Your NICU-related anxiety is so severe that you are unable to function or enjoy your baby at all — seek help from a therapist specializing in perinatal or medical trauma',
    'You are having flashbacks, nightmares, or panic attacks related to the NICU experience — this may be PTSD and is highly treatable. Contact the PSI helpline at 1-800-944-4773',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'nicu-parent-mental-health',
    'nicu-parent-trauma',
    'parenting-anxiety-constant-worry',
    'sids-anxiety-parental',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Vulnerable Child Syndrome. Pediatrics in Review, 2003.',
      url: 'https://publications.aap.org/pediatricsinreview/article/24/3/89/62256',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Parental Stress and NICU Discharge. Journal of Perinatology, 2022.',
      url: 'https://www.nature.com/articles/s41372-025-02503-x',
    },
    {
      org: 'PSI',
      citation:
        'Postpartum Support International. NICU Families and Perinatal Mental Health.',
      url: 'https://www.postpartum.net/learn-more/',
    },
  ],
};
