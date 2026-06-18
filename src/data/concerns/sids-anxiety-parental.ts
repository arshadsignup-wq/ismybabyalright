import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'sids-anxiety-parental',
  title: 'I Can\'t Stop Worrying About SIDS',
  category: 'maternal',
  searchTerms: [
    'SIDS anxiety parent',
    'can\'t stop checking baby breathing',
    'terrified of SIDS',
    'obsessive checking baby breathing at night',
    'SIDS fear keeping me awake',
    'can\'t sleep worried baby will die',
    'SIDS obsession new parent',
    'hypervigilance baby sleep safety',
    'afraid baby will stop breathing',
    'SIDS anxiety postpartum',
  ],
  quickAnswer:
    'Some worry about SIDS is a normal part of being a new parent. But when the fear becomes constant, keeps you from sleeping even when the baby is asleep, drives compulsive checking behaviors, or significantly impacts your quality of life, it may have crossed from normal concern into an anxiety disorder that deserves treatment. Following safe sleep guidelines reduces SIDS risk significantly, and effective help exists for the anxiety itself.',
  byAge: [
    {
      ageRange: '0-4 months postpartum',
      context:
        'This is when SIDS anxiety is most intense for many parents, because SIDS risk peaks between 1-4 months. You may find yourself checking your baby\'s breathing dozens of times a night, unable to sleep even when the baby is sleeping, or panicking each time your baby sleeps deeply or quietly. Following safe sleep practices — back sleeping, firm flat surface, no loose bedding — meaningfully reduces risk. If you are following these guidelines, you are doing the most important thing you can do.',
    },
    {
      ageRange: '4-6 months postpartum',
      context:
        'When your baby starts rolling, a new wave of anxiety often hits. The good news: once a baby can roll both ways, the risk of SIDS decreases, and you do not need to flip them back. If your anxiety about sleep has not eased at all despite your baby getting older and stronger, this may be a sign that the anxiety is taking on a life of its own beyond the actual risk level.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'SIDS risk drops substantially after 6 months. If your anxiety remains as intense as it was in the early weeks — if you still cannot sleep, are still checking compulsively, or still feel gripped by dread at every naptime — please talk to a healthcare provider. Postpartum anxiety is highly treatable with therapy and/or medication, and you do not need to white-knuckle through this.',
    },
    {
      ageRange: '12 months+',
      context:
        'SIDS risk is extremely low after 12 months. If significant sleep-related anxiety persists at this point, it is very likely a treatable anxiety disorder rather than a proportionate response to risk. Cognitive behavioral therapy (CBT) is particularly effective for this type of anxiety. You deserve to sleep when your baby sleeps.',
    },
  ],
  whenNormal: [
    'You feel some anxiety about SIDS but it does not prevent you from sleeping when the baby sleeps',
    'You check on your baby occasionally at night and feel reassured after doing so',
    'You follow safe sleep guidelines and feel reasonably confident in your baby\'s sleep environment',
    'Your worry about SIDS decreases as your baby gets older',
  ],
  whenToMention: [
    'You are unable to sleep even when the baby is safely asleep because you are too worried',
    'You check on your baby so frequently that it disrupts your own rest and daily functioning',
    'A single SIDS-related news story or social media post spirals into days or weeks of heightened fear',
    'Your partner or family members have expressed concern about the intensity of your worry',
  ],
  whenToActNow: [
    'Your SIDS anxiety is so severe that you are unable to function, care for yourself, or care for your baby during the day',
    'You are having intrusive, unwanted thoughts about your baby dying that you cannot control — this may be a symptom of postpartum OCD, which is treatable. Call your OB, midwife, or the PSI helpline at 1-800-944-4773',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'sids-risk-factors',
    'parenting-anxiety-constant-worry',
    'postpartum-ocd-intrusive-thoughts',
    'sleep-deprivation-effects-parent',
  ],
  sources: [
    {
      org: 'PSI',
      citation:
        'Postpartum Support International. Postpartum Anxiety.',
      url: 'https://www.postpartum.net/learn-more/anxiety/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Safe Sleep for Babies. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx',
    },
    {
      org: 'NIMH',
      citation:
        'National Institute of Mental Health. Perinatal Depression.',
      url: 'https://www.nimh.nih.gov/health/publications/perinatal-depression',
    },
  ],
};
