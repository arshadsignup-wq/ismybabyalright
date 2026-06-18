import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-monitor-anxiety',
  title: 'My Baby Monitor Is Making My Anxiety Worse',
  category: 'maternal',
  searchTerms: [
    'baby monitor anxiety',
    'Owlet making anxiety worse',
    'baby breathing monitor stress',
    'can\'t stop watching baby monitor',
    'baby monitor false alarm',
    'Nanit monitor anxiety parent',
    'obsessive monitor checking',
    'baby monitor keeping me awake',
    'smart monitor increasing anxiety',
    'should I stop using baby monitor',
  ],
  quickAnswer:
    'Smart baby monitors (Owlet, Snuza, Nanit) are designed to provide peace of mind, but for many anxious parents they do the opposite — creating a cycle of compulsive checking, false alarm panic, and inability to rest. If your monitor is making your anxiety worse rather than better, you are not alone. The AAP does not recommend consumer-grade vital sign monitors for healthy babies, and many pediatricians suggest that following safe sleep practices provides the real protection your baby needs.',
  byAge: [
    {
      ageRange: '0-3 months postpartum',
      context:
        'This is when monitor anxiety tends to be highest. A false alarm on a pulse oximetry sock at 2 AM can trigger a full panic attack even after you confirm your baby is fine. If you find that the monitor is keeping you awake staring at numbers, generating false alerts that spike your adrenaline, or making you check more rather than less, it may be doing more harm than good. The monitor is not preventing SIDS — safe sleep practices are.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'If your reliance on the monitor has not decreased, or you feel unable to let your baby sleep without the monitor even for a short nap, this pattern is worth examining. Some parents find that weaning off the smart monitor gradually (switching to audio-only, then eventually no monitor while in the same room) helps break the anxiety cycle.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'As SIDS risk drops and your baby becomes more robust, monitor dependency should naturally ease. If it has not, consider whether the monitoring behavior has become an anxiety compulsion rather than a safety practice. A therapist experienced in postpartum anxiety or OCD can help you distinguish between proportionate caution and anxiety-driven behavior.',
    },
  ],
  whenNormal: [
    'You use a basic audio monitor to hear your baby and feel reassured by it',
    'You occasionally glance at a video or smart monitor and feel calmer after confirming your baby is fine',
    'You are able to sleep when the baby sleeps, trusting the safe sleep environment you have created',
  ],
  whenToMention: [
    'You cannot sleep because you are staring at the monitor or its data readouts',
    'False alarms from the monitor cause panic attacks or intense fear even after confirming the baby is safe',
    'You feel unable to function without the monitor — even for a supervised nap or a short period when you are right next to the baby',
    'Your partner, family, or friends have commented on the intensity of your monitor-watching',
  ],
  whenToActNow: [
    'Your monitor-related anxiety is so severe that it is interfering with your ability to eat, sleep, care for yourself, or care for your baby — contact your healthcare provider or call the PSI helpline at 1-800-944-4773',
    'You are having persistent intrusive thoughts about your baby dying that the monitor does not relieve',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'sids-anxiety-parental',
    'parenting-anxiety-constant-worry',
    'postpartum-ocd-intrusive-thoughts',
    'sleep-deprivation-effects-parent',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Consumer Infant Monitors Are Not Reliable. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Preventing-SIDS.aspx',
    },
    {
      org: 'PSI',
      citation:
        'Postpartum Support International. Postpartum Anxiety.',
      url: 'https://www.postpartum.net/learn-more/anxiety/',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Use of Consumer Pulse Oximeters and the Risk of False Reassurance. Pediatrics, 2021.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/33875539/',
    },
  ],
};
