import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-gross-motor-delay-signs',
  title: 'Signs of Gross Motor Delay in My Baby',
  category: 'physical',
  searchTerms: [
    'baby gross motor delay signs',
    'baby not reaching motor milestones',
    'baby behind on physical development',
    'baby late to roll sit crawl walk',
    'infant motor delay symptoms',
    'baby physical development delay',
    'baby not moving enough',
    'baby delayed motor skills',
    'baby behind on milestones physical',
    'toddler gross motor delay',
  ],
  quickAnswer:
    'Gross motor delays involve a baby or toddler being significantly behind in developing large-body movements such as rolling, sitting, crawling, pulling to stand, and walking. While there is a wide range of normal for when children reach these milestones, consistently missing multiple milestones or being very late on key ones may indicate an underlying condition. Early evaluation and intervention with physical therapy can significantly improve outcomes.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'Key gross motor milestones in this period include developing head control, lifting the head during tummy time (by 2 months), and pushing up on forearms (by 4 months). Red flags for gross motor delay at this age include: inability to hold the head up at all by 3 months, complete lack of head control when pulled to sitting, no improvement in head lifting during tummy time, persistent head lag, and overall floppy or excessively stiff body tone. Some babies who were premature may reach milestones later — use their corrected age (adjusted for prematurity) when tracking development.',
    },
    {
      ageRange: '4-9 months',
      context:
        'Expected milestones include rolling in both directions (4-6 months), sitting with and then without support (5-7 months), and beginning to bear weight on legs when held standing (6-8 months). Signs of delay include: not rolling by 6 months, inability to sit with support by 7 months, not bearing weight on legs by 8 months, persistent difficulty with tummy time, strong preference for one side of the body, or very stiff or very floppy muscle tone. If you notice these signs, discuss them with your pediatrician — a developmental screening and possible referral to early intervention services may be recommended.',
    },
    {
      ageRange: '9-18 months',
      context:
        'Key milestones include pulling to stand (9-12 months), cruising along furniture (9-13 months), standing independently (11-14 months), and walking independently (12-18 months). While some babies walk as early as 9 months and others as late as 18 months, not walking by 18 months is considered a red flag. Other concerns include: inability to pull to stand by 12 months, not bearing weight on feet by 12 months, only crawling asymmetrically (using one side more), or loss of previously achieved motor skills (regression). Early intervention with a pediatric physical therapist can make a significant difference.',
    },
  ],
  whenNormal: [
    'Your baby reaches milestones within the expected range, even if on the later end — there is wide normal variation.',
    'Your baby was premature and is meeting milestones according to their corrected (adjusted) age.',
    'Your baby skips crawling and goes directly to pulling up and walking — skipping crawling alone is not typically a concern.',
  ],
  whenToMention: [
    'Your baby is consistently at the late end of the range for multiple gross motor milestones.',
    'Your baby seems significantly less active or mobile compared to peers of the same age.',
    'You notice your baby strongly favoring one side of the body for reaching, rolling, or pushing up.',
  ],
  whenToActNow: [
    'Your baby loses previously acquired motor skills — for example, they could sit but now cannot, or they stopped rolling — regression requires urgent evaluation.',
    'Your baby has extremely stiff or extremely floppy muscle tone combined with missed milestones — this may indicate cerebral palsy or a neuromuscular condition.',
    'Your baby is not bearing weight on their legs at all by 12 months, shows no interest in moving, and has multiple missed milestones — seek prompt developmental evaluation.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['not-sitting-up', 'not-standing', 'baby-floppy-when-picked-up', 'not-pulling-up'],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention — Developmental Milestones',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Developmental Delays: What to Look For',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Assessing-Developmental-Delays.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Child Health and Human Development — Motor Development Milestones',
      url: 'https://www.nichd.nih.gov/health/topics/idds/conditioninfo/diagnosis',
    },
  ],
};
