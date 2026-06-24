import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-not-waving-bye-bye-12-months',
  title: 'My Baby Is Not Waving Bye-Bye at 12 Months',
  category: 'communication',
  searchTerms: [
    'baby not waving bye bye 12 months',
    'baby not waving at 1 year',
    'when should baby wave goodbye',
    'baby not doing social gestures',
    'toddler not waving',
    'not waving bye autism sign',
    'baby not waving clapping pointing',
    'baby gesture development delay',
    'baby not imitating wave',
    'when do babies learn to wave',
  ],
  quickAnswer:
    'Waving bye-bye is a social gesture that typically develops between 9 and 12 months. If your baby is not waving by 12 months, it may be within the normal range if they are showing other social communication skills like pointing, reaching for you, making eye contact, and responding to their name. However, absence of waving combined with other missing social gestures (pointing, showing, clapping) by 12-14 months may be a sign of a communication delay or autism spectrum disorder that should be evaluated.',
  byAge: [
    {
      ageRange: '0-9 months',
      context:
        'Before babies learn to wave, they develop precursor skills: making eye contact, smiling socially, responding to their name, and imitating facial expressions. Around 6-8 months, babies begin imitating simple actions they see, like banging objects or clapping. Waving bye-bye builds on these imitation skills. You can encourage wave development by waving frequently at your baby, waving their hand for them (hand-over-hand guidance), and making it a fun part of your daily routine. Consistent modeling helps babies learn social gestures.',
    },
    {
      ageRange: '9-14 months',
      context:
        'Most babies begin waving between 9-12 months, though some do not wave consistently until 14 months. Some babies develop an unconventional wave initially (rotating their wrist, opening and closing their fist, or waving backward — toward themselves). These are normal developmental variations that typically self-correct. Waving is one of several social gestures that should emerge during this period, along with clapping, raising arms to be picked up, shaking head "no," and pointing. If your baby has some gestures but not all by 12 months, continue modeling and give them a few more months.',
    },
    {
      ageRange: '14-18 months',
      context:
        'By 14-16 months, most children use several communicative gestures regularly. The CDC lists waving bye-bye as a milestone that should be present by 12 months and considers its absence a potential concern. If your child is 14+ months and is not waving, not pointing, not showing you objects, and has limited other gestures, discuss this with your pediatrician. These missing gestures, especially in combination, are among the earliest signs of autism spectrum disorder. Your pediatrician can perform an M-CHAT screening and refer for a comprehensive developmental evaluation if warranted. Early intervention services for communication delays can begin before a formal diagnosis.',
    },
  ],
  whenNormal: [
    'Your baby is 10-12 months and waves inconsistently — they are still learning and practicing.',
    'Your baby waves in an unconventional way (backward, with a fist, or with a delayed response) — this is a normal variation.',
    'Your baby does not wave but does point, clap, reach for you, make eye contact, and show other social communication skills.',
  ],
  whenToMention: [
    'Your baby is 12 months and does not wave or imitate any gestures despite frequent modeling.',
    'Your baby is not waving and is also not pointing, clapping, or using other communicative gestures by 12-14 months.',
    'Your baby does not seem to understand common gestures like waving or reaching out to be picked up.',
  ],
  whenToActNow: [
    'Your child is 15+ months with no gestures (no waving, pointing, showing, or reaching), limited eye contact, and does not respond to their name — request urgent developmental evaluation.',
    'Your child was waving and using gestures but has lost these skills — regression of previously acquired skills requires immediate evaluation.',
    'You have multiple concerns about your child\'s social interaction and communication — contact your pediatrician or early intervention program without waiting.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-not-pointing-at-objects-14-months', 'not-clapping', 'no-joint-attention', 'not-imitating-sounds'],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention — Important Milestones: Your Baby By 12 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-12mo.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Social and Communication Development',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Developmental-Milestones-12-Months.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Child Health and Human Development — Early Signs of Autism',
      url: 'https://www.nichd.nih.gov/health/topics/autism/conditioninfo/signs-symptoms',
    },
  ],
};
