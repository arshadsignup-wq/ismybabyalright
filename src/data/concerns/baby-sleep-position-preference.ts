import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'baby-sleep-position-preference', title: 'Baby Prefers Sleeping on Side or Tummy', category: 'sleep',
  searchTerms: ['baby prefers tummy sleep','baby side sleeping','baby rolls to stomach sleep','baby wont sleep on back','baby sleep position preference','baby only sleeps on tummy','side sleeping baby safe','tummy sleeping baby','baby hates sleeping on back','back sleeping baby refuses'],
  quickAnswer: 'Always place your baby on their back to sleep. However, once your baby can roll independently in both directions (usually by 5-6 months), they may choose to sleep on their tummy or side, and you do not need to reposition them. The ability to roll demonstrates enough strength and motor control to change position if needed.',
  byAge: [
    { ageRange: '0-4 months', context: 'Always place baby on their back. If your baby seems to dislike back sleeping, try swaddling (until rolling begins), a pacifier, or gently patting them once on their back. Do not use positioners or wedges.' },
    { ageRange: '4-6 months', context: 'When baby begins rolling, stop swaddling immediately. Continue placing them on their back, but if they roll to their tummy during sleep, you do not need to flip them back as long as the sleep surface is firm and bare.' },
    { ageRange: '6-12 months', context: 'Most babies who can roll freely will find their preferred position. Many discover they sleep better on their tummy. This is safe as long as the crib is bare and the mattress is firm.' },
    { ageRange: '12+ months', context: 'Your child will move freely during sleep. Whatever position they choose is fine. The back-to-sleep recommendation is most critical in the first year when SIDS risk is highest.' },
  ],
  whenNormal: ['Baby over 5-6 months rolls to tummy and sleeps well','Baby has a preferred sleep position after learning to roll','Baby moves between positions during the night','You place baby on back but they immediately roll over'],
  whenToMention: ['Baby under 4 months cannot sleep on their back despite consistent effort','You are anxious about baby sleeping on tummy after rolling','Baby seems uncomfortable in all positions'],
  whenToActNow: ['Baby has difficulty breathing in any sleep position','Baby is placed on tummy before they can roll independently'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'Moon RY et al. Sleep-Related Infant Deaths: Updated 2022 Recommendations. Pediatrics. 2022;150(1):e2022057990.', url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/' },
    { org: 'NIH', citation: 'NIH Safe to Sleep Campaign.', url: 'https://safetosleep.nichd.nih.gov/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Back to Sleep, Tummy to Play. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Back-to-Sleep-Tummy-to-Play.aspx' },
  ],
  relatedConcernSlugs: ['baby-sleeping-face-down','rolling-in-sleep','sleep-safe-environment-checklist'],
};
