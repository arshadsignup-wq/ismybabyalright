import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'milestone-pressure-parents',
  title: 'The Pressure to Hit Milestones',
  category: 'behavior',
  searchTerms: [
    'milestone pressure parents',
    'baby milestone stress',
    'baby behind on milestones',
    'milestone anxiety parents',
    'developmental timeline stress',
    'pressure for baby to hit milestones',
    'milestone charts causing worry',
    'baby not on track milestones',
    'feeling like a failure milestones',
  ],
  quickAnswer:
    'Developmental milestone charts are meant to be helpful guides, not scorecards. The pressure to have your baby reach every milestone on time, or early, can turn a joyful period into a stressful one. It is worth remembering that milestone ranges are wide, that children develop unevenly across different domains, and that most babies who seem "behind" in one area catch up without intervention.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In the earliest months, milestone pressure often comes from well-meaning family members asking whether your baby is smiling, tracking objects, or holding their head up. These early milestones have wide normal ranges. Social smiling, for example, typically appears between six weeks and three months. If your baby is not yet smiling at six weeks, it does not mean something is wrong. Give your baby time and opportunities, not pressure.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is often the most intense period for milestone pressure because motor development is so visible. Sitting, crawling, and standing are observable milestones that everyone comments on. Parents of babies who are slower to sit or who skip crawling entirely may feel intense pressure. In reality, the timeline for these milestones varies enormously, and many variations, including never crawling, are completely normal.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Walking and talking are the milestones most associated with parental anxiety in this period. First steps can come anywhere from 9 to 18 months, and first words from 10 to 18 months. A child who walks at 15 months or says their first word at 14 months is just as normal as one who does these things earlier. Pressure from playgroups, family gatherings, and social media can distort your sense of what is typical.',
    },
    {
      ageRange: '24-36 months',
      context:
        'As children approach preschool age, pressure shifts to social skills, potty training, and more complex language. Every child develops readiness for these at their own pace. Pushing a child before they are developmentally ready, particularly with potty training, can actually backfire and create resistance. Trust your child\'s individual timeline while staying in communication with your pediatrician.',
    },
  ],
  whenNormal: [
    'Your child is progressing in their development even if the pace is different from what you expected',
    'Your baby excels in some developmental areas while being average or slightly slower in others',
    'You feel occasional pressure but can put it in perspective after reading about normal developmental ranges',
    'Your pediatrician has reviewed your child\'s development and is not concerned',
  ],
  whenToMention: [
    'The pressure you feel about milestones is causing significant anxiety, guilt, or feelings of failure as a parent',
    'You are spending excessive time doing "exercises" with your baby to force milestone achievement and it is stressful for both of you',
    'Family pressure about your child\'s development is affecting your relationships or confidence',
    'You want a clear, individualized assessment of your child\'s development to replace the generic charts causing worry',
  ],
  whenToActNow: [
    'Your child has lost previously acquired skills, which is different from simply being slower to reach new ones',
    'Your pediatrician has identified a genuine developmental concern that warrants evaluation, separate from your general anxiety about milestones',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Developmental Milestones: Your Child. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/Pages/default.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Learn the Signs. Act Early.',
      url: 'https://www.cdc.gov/ncbddd/actearly/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Child Development. Eunice Kennedy Shriver National Institute of Child Health and Human Development.',
      url: 'https://www.nichd.nih.gov/health/topics/child-development',
    },
  ],
};
