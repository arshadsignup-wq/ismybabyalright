import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'milestone-anxiety-obsessive-tracking',
  title: 'Milestone Anxiety: When Tracking Development Becomes Overwhelming',
  category: 'behavior',
  searchTerms: [
    'milestone anxiety parents',
    'obsessing over baby milestones',
    'worried baby not meeting milestones',
    'milestone tracking anxiety',
    'constantly comparing baby development',
    'baby milestone checklist stress',
    'am I checking milestones too much',
    'CDC milestone app anxiety',
    'baby development chart worry',
    'milestone obsession first time mom',
  ],
  quickAnswer:
    'Milestone anxiety, the persistent worry that your baby is not developing on schedule, has become increasingly common in the age of milestone tracking apps, social media, and readily accessible developmental checklists. While awareness of milestones is important for early identification of delays, constant monitoring can become counterproductive, leading to chronic parental anxiety, reduced enjoyment of the baby stage, and unnecessary medical consultations. Pediatric psychologists note that milestone ranges are wide for a reason: the AAP\'s developmental milestones represent the age by which 75% of children have achieved a skill, meaning 25% of typically developing children will reach it later. A 2023 survey by the Motherly State of Motherhood report found that 70% of millennial mothers report anxiety about their child\'s developmental milestones. If checking milestones is causing you more distress than reassurance, it may be time to adjust your approach.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Early milestones (social smile, head lifting, tracking objects) have wide normal ranges. First-time parents are often hypervigilant during this period. Smiling typically appears between 6-12 weeks, so comparing your 5-week-old to a friend\'s 10-week-old who smiles is misleading. Premature babies should be assessed using adjusted age. Limit milestone checking to your pediatrician visits, where standardized screening tools provide accurate assessment rather than app-based checklists.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Rolling, reaching, and laughing emerge during this period, and parents often worry if their baby does one but not another. Development is not linear, and babies may work on one skill area intensely (like social babbling) while temporarily pausing another (like rolling). This is normal. Social media posts showing "early" achievements create unrealistic benchmarks. Remember that parents post their baby\'s best moments, not the hours of non-achievement.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Sitting, crawling, and first words create major anxiety points. About 10% of babies skip crawling entirely and go straight to walking, which is a normal developmental variation, not a red flag. The range for first words is 8-15 months. If you find yourself googling "baby not [skill] at [age] months" multiple times a day, this level of checking is likely increasing your anxiety rather than helping your baby. Your pediatrician\'s standardized assessments (ASQ-3) are more reliable than self-comparison.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Walking (9-17 months is the normal range) and language explosion (or lack thereof) are the two biggest anxiety triggers in this age group. The pressure intensifies as toddlers become more visible in social settings. If your child is evaluated and found to be developing typically, trust that assessment and do not continue searching for problems. If you genuinely cannot stop worrying despite reassurance, this may indicate parental anxiety that deserves its own attention and treatment.',
    },
  ],
  whenNormal: [
    'Checking milestones occasionally, especially before well-child visits',
    'Feeling a brief worry when your baby hasn\'t reached a milestone yet, which resolves with reassurance',
    'Noticing that your baby does things differently from other babies the same age',
    'Your pediatrician saying "let\'s watch and see" about a skill that hasn\'t emerged yet',
  ],
  whenToMention: [
    'You are checking milestone apps or websites multiple times daily and it is affecting your mood',
    'You are unable to enjoy time with your baby because you are constantly evaluating their development',
    'You have been reassured by your pediatrician but cannot stop worrying',
    'Your anxiety about milestones is affecting your sleep, relationships, or daily functioning',
  ],
  whenToActNow: [
    'Your baby has genuinely lost skills they previously had (regression), which always warrants prompt evaluation',
    'Your milestone anxiety is accompanied by intrusive thoughts, panic attacks, or inability to function, which may indicate postpartum anxiety or OCD requiring treatment',
    'You are avoiding social situations with other babies because comparing triggers severe distress',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'comparison-anxiety-social-media',
    'milestone-pressure-parents',
    'baby-autism-screening-concerns',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Developmental Milestones. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/Pages/default.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. CDC Milestone Tracker App.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Tuning In: Parents of Young Children Speak Up About What They Think, Know, and Need.',
      url: 'https://www.zerotothree.org/resource/tuning-in-parents-of-young-children-speak-up-about-what-they-think-know-and-need/',
    },
  ],
};
