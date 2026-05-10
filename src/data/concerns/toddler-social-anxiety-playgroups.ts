import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-social-anxiety-playgroups',
  title: 'Social Anxiety at Playgroups',
  category: 'behavior',
  searchTerms: [
    'toddler scared of other kids at playgroup',
    'toddler cries at playgroups',
    'toddler clingy at social events',
    'toddler shy around other children',
    'toddler hides behind me at playground',
    'social anxiety in toddlers signs',
    'toddler refuses to join group activities',
    'my toddler is terrified of other kids',
    'baby afraid of other children',
  ],
  quickAnswer:
    'Many toddlers feel anxious in group settings, especially if they are not regularly around other children. Shyness and wariness around unfamiliar people is a normal temperamental trait and a healthy sign of stranger awareness. Most socially cautious toddlers warm up with time and gentle exposure. True social anxiety disorder is rare in toddlers, but persistent, severe avoidance that interferes with daily activities may warrant discussion with your pediatrician.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Not applicable. Babies this young do not show social anxiety. They may startle at loud noises in group settings, which is a normal reflex.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies begin to distinguish familiar faces from unfamiliar ones. Some may become fussy when held by strangers. This early wariness is the beginning of healthy attachment, not anxiety.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Stranger anxiety peaks around 8-10 months and is completely normal. Your baby may cry when approached by unfamiliar adults or children. This is actually a sign of healthy cognitive development — they can distinguish familiar from unfamiliar. Allow them to observe from your arms until they feel safe.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers vary enormously in social comfort. Some are bold and outgoing while others are cautious and slow to warm up. A toddler who clings to you at playgroups, watches from the sidelines, or takes 20-30 minutes to join in is within the normal range. Gradual, repeated exposure without pressure is the best approach. Avoid labeling your child as "shy" in front of them.',
    },
  ],
  whenNormal: [
    'Your toddler clings to you when arriving at playgroups but eventually starts exploring or playing',
    'Your child watches other children from a distance before slowly joining in',
    'Your toddler is comfortable with familiar peers but cautious around new children',
    'Social wariness improves with repeated exposure to the same group or setting',
  ],
  whenToMention: [
    'Your child over age 2 remains extremely distressed in all social settings and never warms up, even after repeated gentle exposure over several weeks',
    'Social anxiety is significantly limiting your child\'s ability to participate in age-appropriate activities and your family\'s daily life',
    'Your child shows anxiety symptoms beyond social settings — such as excessive worry, sleep disruption, or somatic complaints like stomachaches',
  ],
  whenToActNow: [
    'Your child shows signs of severe anxiety such as panic attacks, persistent vomiting before social events, or complete inability to separate from you in any setting',
    'Social avoidance is accompanied by a loss of previously acquired skills, loss of interest in all activities, or signs of depression',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'only-child-socialization-concerns',
    'toddler-difficulty-making-friends',
    'parallel-play-vs-interactive-play',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Shyness in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/gradeschool/Pages/Shyness-in-Children.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Mental Health. Anxiety Disorders in Children.',
      url: 'https://www.nimh.nih.gov/health/topics/anxiety-disorders',
    },
  ],
};
