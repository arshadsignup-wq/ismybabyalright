import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'helicopter-parenting-effects',
  title: 'Helicopter Parenting Effects',
  category: 'behavior',
  searchTerms: [
    'am I a helicopter parent',
    'overprotective parenting effects on child',
    'helicopter parenting toddler',
    'too protective of my baby',
    'can overparenting harm my child',
    'hovering over toddler at playground',
    'effects of being too cautious parent',
    'overprotective parent anxiety child development',
  ],
  quickAnswer:
    'The instinct to protect your child is natural and important, but excessive hovering can inadvertently limit a child\'s opportunities to develop independence, resilience, and problem-solving skills. Research suggests that children of overly controlling parents may have higher rates of anxiety and lower self-confidence. The goal is finding a balance between safety and allowing age-appropriate risk-taking and independence. Being aware of the tendency is already a positive step.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Close monitoring and responsive care for newborns is not helicopter parenting — it is essential caregiving. Babies this young need immediate, consistent responses to their needs. You cannot "spoil" or "hover too much" over a newborn.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Responsive parenting remains appropriate. As your baby begins reaching and exploring, allowing them to struggle briefly (reaching for a toy just out of grasp, for example) builds motor skills and persistence. You do not need to prevent all frustration.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby becomes mobile, the urge to prevent all falls and frustrations intensifies. While safety is paramount (baby-proofing, supervision), allowing small tumbles during crawling and pulling up helps babies learn body awareness and spatial judgment. Let them explore within safe boundaries.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers need increasing opportunities for age-appropriate independence — climbing short structures, making choices, managing small frustrations, and doing things imperfectly. If you find yourself unable to let your toddler try anything without intervening, or your anxiety about their safety prevents normal activities, consider whether your own anxiety may be driving the over-protection.',
    },
  ],
  whenNormal: [
    'You are cautious about safety while allowing your child to explore within safe boundaries',
    'You sometimes catch yourself hovering and consciously step back to let your child try things independently',
    'You feel anxious about your child getting hurt but can manage that anxiety without preventing all age-appropriate activities',
    'You are able to let other trusted caregivers care for your child',
  ],
  whenToMention: [
    'Your anxiety about your child\'s safety is preventing them from participating in normal age-appropriate activities like playground play, daycare, or being cared for by others',
    'You recognize that your protective behavior is excessive but cannot control it — this may indicate parental anxiety that would benefit from support',
    'Your child is showing signs of anxiety, excessive fearfulness, or difficulty with independence that may be connected to an overly protective environment',
  ],
  whenToActNow: [
    'Your anxiety is so severe that you cannot leave your child with any other caregiver, cannot allow any age-appropriate activity, or are experiencing panic attacks related to your child\'s safety',
    'Your parenting anxiety is part of a broader pattern of anxiety, intrusive thoughts, or compulsive behaviors that affect your daily functioning',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-monitor-anxiety-parent',
    'free-range-parenting-safety',
    'attachment-parenting-burnout',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'Schiffrin, H. et al. Helping or Hovering? The Effects of Helicopter Parenting on College Students\' Well-Being. Journal of Child and Family Studies. 2014.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Building Resilience in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/emotional-wellness/Building-Resilience/Pages/Building-Resilience-in-Children.aspx',
    },
  ],
};
