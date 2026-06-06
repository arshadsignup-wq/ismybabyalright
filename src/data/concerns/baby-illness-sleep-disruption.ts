import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-illness-sleep-disruption',
  title: 'How Illness Affects Baby Sleep',
  category: 'sleep',
  searchTerms: ['sick baby sleep','baby illness sleep','baby not sleeping sick','cold affecting baby sleep','fever affecting sleep','baby congested cant sleep','baby sleep during illness','sick baby waking more','baby sleep worse ill','how illness changes sleep'],
  quickAnswer: 'It is normal for sleep to be disrupted during illness. Provide comfort, keep baby hydrated, and use safe symptom management. Sleep patterns typically return to normal within days of recovery - resume your normal routine as soon as baby feels better.',
  byAge: [
    { ageRange: '0-6 months', context: 'Young babies with colds may struggle to breathe through their nose while feeding. Use saline drops and gentle suction before feeds and sleep. Keep the room humidified. Always follow pediatrician guidance on fever management for babies under 3 months.' },
    { ageRange: '6-12 months', context: 'Illness commonly disrupts the schedule. Offer extra comfort. If congested, slightly elevate the crib mattress head by placing a towel under the mattress, not under the baby. Continue bedtime routine even if baby falls asleep earlier.' },
    { ageRange: '12-24 months', context: 'Toddlers may be clingier at night. Provide comfort generously while sick. Once recovered, gently return to normal routine. Most readjust within a few nights. Avoid creating new sleep associations during illness that are hard to break.' },
    { ageRange: '2-3 years', context: 'Older toddlers can verbalize discomfort. Offer comfort and medication as advised. After recovery, return to normal expectations. A brief regression is normal and resolves quickly.' },
  ],
  whenNormal: ['Baby sleeps more or less during illness','Night wakings increase during acute illness','Baby wants more comfort while sick','Sleep returns to normal within days of recovery'],
  whenToMention: ['Sleep disruption persists 1-2 weeks after illness resolves','Baby gets sick very frequently with chronic sleep disruption','Post-illness sleep worsens rather than improves'],
  whenToActNow: ['Baby under 3 months has fever of 100.4F or higher','Baby has difficulty breathing, refuses fluids, shows dehydration, or is unusually lethargic'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Caring for Your Child\'s Cold or Flu. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Caring-for-Your-Childs-Cold-or-Flu.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Fever and Your Baby. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/default.aspx' },
    { org: 'NSF', citation: 'National Sleep Foundation. Sleep and the Immune System. SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/physical-health/how-sleep-affects-immunity' },
  ],
  relatedConcernSlugs: ['baby-teething-disrupting-sleep','baby-vaccination-sleep-changes','frequent-night-wakings'],
};
