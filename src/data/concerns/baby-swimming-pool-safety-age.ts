import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-swimming-pool-safety-age',
  title: 'Baby Swimming and Pool Safety by Age',
  category: 'medical',
  searchTerms: [
    'baby swimming pool safety',
    'when can baby go in pool',
    'baby pool age',
    'infant swimming lessons',
    'baby pool chlorine safe',
    'newborn swimming pool',
    'baby drowning prevention',
    'swim lessons baby age',
    'pool safety infant',
    'baby water safety',
    'baby pool temperature',
  ],
  quickAnswer:
    'Babies can be introduced to water as early as 1-2 months in a warm, clean pool under close supervision, though the AAP recommends formal swim lessons starting at age 1. The water should be at least 84F (29C) for young babies. Drowning is the leading cause of death in children ages 1-4, making water safety critical. No child should ever be in or near water without direct, arms-reach adult supervision. Infant "survival swim" programs are not a substitute for active supervision.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'While there is no strict minimum age for pool introduction, most pediatricians recommend waiting until at least 2 months and ensuring immunizations are up to date. Young babies cannot regulate body temperature well, so pool water should be at least 84-86F (29-30C) and sessions should be brief (10-15 minutes). Keep your baby\'s head well above water at all times. Do not submerge a baby underwater, despite myths about "natural dive reflexes." Chlorinated pools are generally safe, but rinse your baby with fresh water afterward to prevent skin irritation.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies this age can enjoy slightly longer pool sessions (15-20 minutes) in warm water. The AAP recommends starting swim lessons at age 1, though some organizations offer parent-child water comfort classes earlier. These classes focus on water acclimation, not swimming skills. Always maintain arms-reach supervision. Swim diapers are required in public pools but do not contain all fecal matter - change them promptly. Never leave a baby unattended near any water source, including bathtubs, buckets, and kiddie pools.',
    },
    {
      ageRange: '12-36 months',
      context:
        'The AAP recommends formal swim lessons starting at age 1, as studies show they can reduce drowning risk. However, swim lessons do not make children "drown-proof." Constant adult supervision within arms reach is essential. Install pool fencing with self-closing, self-latching gates on all four sides. Learn infant/child CPR - it saves lives. Water wings and inflatable toys are not safety devices. Teach basic water safety: no running near pools, always ask an adult before going near water. Drowning is silent - it rarely looks like what you see in movies.',
    },
  ],
  whenNormal: [
    'Your baby enjoys water play in a warm pool with constant arms-reach adult supervision.',
    'Your baby cries or seems unsure the first few times in a pool - gradual introduction is fine.',
    'Your toddler is taking swim lessons appropriate for their developmental level.',
  ],
  whenToMention: [
    'You are planning pool or beach activities and want age-appropriate safety guidance.',
    'Your baby has ear tubes and you are unsure about swimming precautions.',
    'Your baby had a near-drowning experience and inhaled some water.',
  ],
  whenToActNow: [
    'Your baby is pulled from water unresponsive or not breathing - begin CPR immediately and call 911.',
    'Your baby inhaled water and develops coughing, difficulty breathing, or lethargy in the hours following.',
    'Your baby or toddler is found near or in an unsupervised body of water.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-sunburn-under-six-months', 'baby-sunburn-treatment', 'baby-recurring-ear-infections'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Swim Lessons: When to Start and What Parents Should Know. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-play/Pages/Swim-Lessons.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention - Water Safety and Young Children.',
      url: 'https://www.cdc.gov/drowning/prevention/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Prevention of Drowning. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/148/2/e2021052227/179776/Prevention-of-Drowning',
    },
  ],
};
