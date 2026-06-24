import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'infant-screen-time-brain-development',
  title: 'Screen Time Effects on Infant and Toddler Brain Development',
  category: 'behavior',
  searchTerms: [
    'screen time baby brain development',
    'baby watching TV effects',
    'screen time under 2 harmful',
    'infant iPad effects',
    'how much screen time baby',
    'TV damaging baby brain',
    'screen time toddler language delay',
    'baby addicted to phone',
    'cocomelon baby brain',
    'AAP screen time recommendations',
    'screens delay speech development',
    'background TV baby effects',
  ],
  quickAnswer:
    'The American Academy of Pediatrics recommends avoiding digital media (except video chatting) for children under 18-24 months. Research consistently shows that excessive screen time in infancy is associated with language delays, reduced attention span, sleep disruption, and decreased parent-child interaction. The developing brain learns best through human interaction, not screens. However, occasional, brief screen exposure is unlikely to cause harm, and video chatting with family members is considered beneficial for social connection.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Babies under 6 months cannot learn from screens. Their brains need face-to-face interaction, being held, hearing live human speech, and sensory experiences with the physical world. Background TV is also a concern: research shows that even when babies are not watching, background television reduces the quantity and quality of parent-child interaction by up to 20%. Screens at this age are a passive experience that displaces the active, responsive interactions babies need for brain development.',
    },
    {
      ageRange: '6-18 months',
      context:
        'The AAP recommends no screen time other than video chatting during this period. Babies this age experience a "video deficit effect," meaning they learn significantly less from watching something on a screen compared to seeing it in person. Fast-paced, flashy children\'s programming may actually overstimulate the developing brain. One study found that each hour of TV watched per day at this age was associated with a 6-point decrease in language skills by age 3. If you choose to introduce any media, co-view with your baby and narrate what is happening.',
    },
    {
      ageRange: '18-36 months',
      context:
        'After 18 months, some educational media (like Sesame Street or Daniel Tiger) can be beneficial when co-viewed with a parent who actively discusses the content. The AAP recommends limiting screen time to 1 hour or less of high-quality programming per day for 2-5 year olds. Prioritize slow-paced, interactive programs over fast-paced, passively consumed content. The key factor is not just the amount of screen time but what it replaces: if screens replace reading, playing, and interacting with caregivers, the impact is more negative.',
    },
  ],
  whenNormal: [
    'Your baby has had occasional brief exposure to screens and is meeting developmental milestones on time.',
    'You use video calling to connect your baby with distant family members.',
    'Your toddler watches a small amount of age-appropriate, educational programming while you co-view and discuss it.',
    'You sometimes use a screen as a last resort during necessary tasks like doctor visits or airplane flights.',
  ],
  whenToMention: [
    'Your baby or toddler seems fixated on screens and becomes extremely upset when they are turned off.',
    'You are concerned that screen time may be contributing to language delays or attention problems.',
    'Your baby\'s sleep is disrupted and screens are used within 1 hour of bedtime.',
    'You feel dependent on screens to keep your child occupied and want strategies for alternatives.',
  ],
  whenToActNow: [
    'Your child is not meeting communication milestones and has significant daily screen exposure that may be displacing interaction.',
    'Your child shows signs of seizure-like activity triggered by flashing lights on screens (photosensitive epilepsy).',
    'Screen use is causing extreme behavioral outbursts that are beyond typical toddler tantrums.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'phone-addiction-parent-baby-bonding',
    'parent-child-reading-mitigate-screen-effects',
    'infant-mental-health-first-1001-days',
    'limited-vocabulary',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics Council on Communications and Media. Media and Young Minds. Pediatrics, 2016.',
      url: 'https://publications.aap.org/pediatrics/article/138/5/e20162591/60503/Media-and-Young-Minds',
    },
    {
      org: 'WHO',
      citation:
        'WHO. Guidelines on Physical Activity, Sedentary Behaviour and Sleep for Children Under 5 Years of Age, 2019.',
      url: 'https://www.who.int/publications/i/item/9789241550536',
    },
    {
      org: 'NIH',
      citation:
        'NIH - Association Between Screen Time and Children\'s Performance on a Developmental Screening Test. JAMA Pediatrics, 2019.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30688984/',
    },
  ],
};
