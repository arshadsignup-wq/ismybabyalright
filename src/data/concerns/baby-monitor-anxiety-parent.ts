import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-monitor-anxiety-parent',
  title: 'Baby Monitor Anxiety',
  category: 'behavior',
  searchTerms: [
    'can\'t stop watching baby monitor',
    'baby monitor making me anxious',
    'obsessively checking baby monitor',
    'baby monitor SIDS anxiety',
    'should I get a breathing monitor for baby',
    'owlet monitor anxiety',
    'wearable baby monitor necessary',
    'baby monitor false alarms stress',
    'new parent monitor obsession',
  ],
  quickAnswer:
    'It is very common for new parents to feel anxious about their baby\'s safety, and baby monitors can both alleviate and amplify that anxiety. While standard audio and video monitors are helpful tools, wearable vital-sign monitors (tracking oxygen levels and heart rate) have been shown in studies to increase parental anxiety without reducing actual risk. The AAP does not recommend consumer vital-sign monitors for healthy infants. If monitor-checking is consuming your thoughts and interfering with sleep or daily functioning, this may be a sign of postpartum anxiety worth discussing with your healthcare provider.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Anxiety about SIDS peaks during this period, which is also the highest-risk window. Safe sleep practices (back sleeping, firm mattress, no loose bedding) are the evidence-based approach to risk reduction. An audio or video monitor is useful for knowing when your baby needs you, but constantly watching it can fuel anxiety. Consumer oxygen monitors have not been shown to prevent SIDS.',
    },
    {
      ageRange: '3-6 months',
      context:
        'SIDS risk remains elevated but begins to decrease. If you find yourself unable to sleep because you are watching the monitor, consider setting it to audio-only or sound alerts. Trust that safe sleep practices are protecting your baby.',
    },
    {
      ageRange: '6-12 months',
      context:
        'SIDS risk decreases significantly after 6 months, especially once the baby can roll independently. Many parents find their monitor anxiety naturally eases during this period. If it does not, and you still feel compelled to check the monitor constantly, consider speaking with your doctor about anxiety.',
    },
    {
      ageRange: '12 months+',
      context:
        'Most parents have significantly reduced monitor anxiety by this age. A monitor can remain useful for hearing your toddler wake up or monitoring room safety. If severe anxiety about your child\'s safety persists beyond the first year and affects your quality of life, professional support is recommended.',
    },
  ],
  whenNormal: [
    'You check the monitor when you hear a sound or periodically during naps and nighttime',
    'You feel some anxiety about your newborn\'s safety — this is a normal parental instinct',
    'Monitor use gives you enough reassurance to sleep and function during the day',
    'Your anxiety about the monitor decreases gradually over the first few months',
  ],
  whenToMention: [
    'You are unable to sleep even when the baby is sleeping because you cannot stop watching the monitor',
    'False alarms from wearable monitors are causing frequent panic and distress',
    'Monitor-related anxiety is significantly interfering with your ability to enjoy parenting, leave the house, or let others care for your baby',
  ],
  whenToActNow: [
    'You are experiencing intrusive thoughts about harm coming to your baby that you cannot control, accompanied by compulsive checking behaviors — this may be postpartum anxiety or OCD and is treatable',
    'Anxiety is so severe that you are unable to function — not sleeping, not eating, or experiencing panic attacks',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'helicopter-parenting-effects',
    'nanny-cam-trust-issues',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. SIDS and Other Sleep-Related Infant Deaths: Updated 2022 Recommendations. Pediatrics. 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022',
    },
    {
      org: 'NIH',
      citation:
        'Bonafide, C. et al. Accuracy of Pulse Oximetry-Based Home Baby Monitors. JAMA. 2018.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/29362787/',
    },
  ],
};
