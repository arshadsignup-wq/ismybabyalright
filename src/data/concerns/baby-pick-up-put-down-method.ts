import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-pick-up-put-down-method',
  title: 'The Pick Up Put Down Sleep Method',
  category: 'sleep',
  searchTerms: [
    'pick up put down sleep method',
    'PUPD sleep training',
    'baby sleep method pick up put down',
    'Tracy Hogg pick up put down',
    'gentle sleep training PUPD',
    'pick up put down how to do it',
    'pick up put down method age',
    'PUPD sleep method review',
    'does pick up put down work',
    'baby sleep training without crying',
  ],
  quickAnswer:
    'The Pick Up Put Down (PUPD) method, popularized by Tracy Hogg in "The Baby Whisperer," is a gentle sleep training approach where you place your baby in the crib awake, pick them up when they cry (to provide reassurance), calm them, and put them back down as soon as they stop crying. This cycle is repeated until the baby falls asleep. PUPD works best for babies aged 4-8 months. It can be time-consuming (sessions may last 30-60+ minutes initially) but allows parents to maintain physical contact throughout the process.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'PUPD is not recommended before 4 months. During this period, babies are not developmentally ready for structured sleep training. Instead, focus on building healthy sleep foundations: a consistent bedtime routine, appropriate sleep environment, and learning your baby\'s drowsy cues. You can begin placing your baby in the crib drowsy but awake occasionally to let them practice settling, but do not expect consistency. At this age, responding promptly to cries and providing comfort through holding, rocking, and feeding to sleep are all appropriate. The PUPD method becomes most effective after 4 months when babies develop more predictable sleep cycles.',
    },
    {
      ageRange: '4-8 months',
      context:
        'This is the ideal age range for PUPD. The method works as follows: complete your bedtime routine, place your baby in the crib awake but drowsy, and leave the room or stand nearby. When your baby cries (not just fusses), pick them up and hold them calmly until they stop crying. As soon as they are calm (not asleep), put them back down. If they cry again, pick up again. Repeat. This can take 30-60+ repetitions the first few nights but typically decreases over 5-14 days. The key is consistency and not picking up for fussing or whining — only for actual crying. Some babies become more stimulated by the repeated picking up; if this happens, a gentler "in-crib" approach (patting, shushing) may work better.',
    },
    {
      ageRange: '8-12 months',
      context:
        'PUPD can become less effective with older, heavier babies who may find the repeated picking up and putting down stimulating rather than calming. If PUPD is not working for your older baby, modifications include: picking up less frequently (waiting a moment before each pickup to see if the baby can self-settle), using in-crib comforting (patting, shushing, gentle hand pressure) instead of picking up, or transitioning to the gradual retreat (chair) method where you sit by the crib offering verbal reassurance. Whatever method you choose, consistency is the most important factor. Most methods show significant improvement within 7-14 days if applied consistently.',
    },
  ],
  whenNormal: [
    'The first few nights involve many repetitions (30-60+) and sessions lasting 45-90 minutes — this is expected and improves over time.',
    'Your baby protests and cries during the process but calms when picked up and gradually starts self-settling with fewer pickups over several nights.',
    'Progress is not perfectly linear — your baby may have good nights followed by harder nights, but the overall trend should be improvement.',
  ],
  whenToMention: [
    'You have been consistently using PUPD for 2+ weeks with no improvement.',
    'Your baby seems more agitated and escalated by the repeated picking up and putting down.',
    'Sleep training is affecting your mental health and you feel you cannot continue.',
  ],
  whenToActNow: [
    'Your baby\'s crying during sleep training is accompanied by fever, pain, vomiting, or other signs of illness — stop the method and address the illness first.',
    'You are so exhausted that you are at risk of accidentally falling asleep while holding your baby in an unsafe location (couch, recliner) — these situations are associated with infant sleep deaths. Seek help immediately.',
    'You are experiencing overwhelming frustration, anger, or thoughts of harming yourself or your baby — put your baby safely in the crib and step away. Call the Postpartum Support International helpline (1-800-944-4773) or 988.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-no-cry-sleep-solution', 'baby-needs-motion-to-sleep-swing', 'baby-nap-refusal'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Behavioral Interventions for Infant Sleep',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Getting-Your-Baby-to-Sleep.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine — Behavioral Interventions for Infant Sleep Problems',
      url: 'https://pubmed.ncbi.nlm.nih.gov/27707587/',
    },
    {
      org: 'Sleep Foundation',
      citation:
        'National Sleep Foundation — How to Sleep Train Your Baby',
      url: 'https://www.sleepfoundation.org/baby-sleep/sleep-training',
    },
  ],
};
