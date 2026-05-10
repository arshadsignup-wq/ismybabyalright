import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'only-child-socialization-concerns',
  title: 'Only Child Socialization Concerns',
  category: 'behavior',
  searchTerms: [
    'only child social skills worried',
    'is my only child going to be lonely',
    'only child not learning to share',
    'how to socialize an only child',
    'only child developmental concerns',
    'does an only child need siblings for development',
    'only child behavior problems',
    'single child social development tips',
  ],
  quickAnswer:
    'Research consistently shows that only children develop social skills just as well as children with siblings. Only children often score equally or higher on measures of sociability, self-esteem, and academic achievement. While they may have fewer opportunities for sibling-style conflict resolution at home, regular interaction with peers through playgroups, daycare, or community activities provides ample social practice.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'At this stage, social development is centered on the parent-child bond. Whether a child has siblings is irrelevant — secure attachment with caregivers is the foundation. Focus on responsive caregiving, eye contact, and talking to your baby.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies begin showing social smiles and interest in faces. Only children receive abundant one-on-one interaction from parents, which can actually accelerate early social-emotional development. Introducing your baby to different faces through family visits or parent-baby groups is beneficial but not urgent.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies become more socially aware and may enjoy watching other children. While they do not need structured socialization yet, exposure to other babies and children through informal settings can be enjoyable. There is no developmental disadvantage to being an only child at this age.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers begin parallel play and eventually interactive play. Only children benefit from regular peer exposure through playgroups, library storytime, parks, or part-time daycare. These opportunities help them practice sharing, turn-taking, and navigating social conflicts — skills that children with siblings learn at home.',
    },
  ],
  whenNormal: [
    'Your only child prefers adult company or plays independently — this is common and often reflects their home environment',
    'Your toddler struggles with sharing or turn-taking in groups — this is developmentally normal for all toddlers, not just only children',
    'Your child seems content playing alone and does not always seek out peer interaction',
    'Your only child is advanced in language or cognitive skills — only children often benefit from rich adult conversation at home',
  ],
  whenToMention: [
    'Your child shows persistent avoidance of all peer interaction beyond age 2-3, with significant anxiety or distress around other children',
    'Your child has no interest in other children or faces at all by 12-18 months and also shows limited interest in social interaction with adults',
    'You notice your child has difficulty with basic social reciprocity — no back-and-forth interaction, limited eye contact, or no shared enjoyment — regardless of sibling status',
  ],
  whenToActNow: [
    'Your child shows a complete lack of social interest in both children and adults, avoids eye contact, and does not respond to their name — these may be signs of a developmental concern unrelated to being an only child',
    'Your child has severe anxiety that prevents them from functioning in any social setting despite gentle, gradual exposure',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'parallel-play-vs-interactive-play',
    'toddler-social-anxiety-playgroups',
    'toddler-difficulty-making-friends',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'Falbo, T. & Polit, D. Quantitative Review of the Only Child Literature. Psychological Bulletin. 1986.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/3797558/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Making Friends: How Children Learn Social Skills. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/work-and-child-care/Pages/Making-Friends.aspx',
    },
  ],
};
