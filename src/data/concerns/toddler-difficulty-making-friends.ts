import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-difficulty-making-friends',
  title: 'Toddler Difficulty Making Friends',
  category: 'behavior',
  searchTerms: [
    'toddler has no friends',
    'my toddler can\'t make friends',
    'toddler left out at playground',
    'toddler doesn\'t know how to play with others',
    'when should toddler have friends',
    'toddler always plays alone worried',
    'toddler rejected by other kids',
    'helping toddler make friends',
  ],
  quickAnswer:
    'True friendships do not typically develop until age 3-4 at the earliest. Before that, toddlers engage in parallel play (playing alongside but not with others) and are still developing the social-emotional skills needed for friendship — such as empathy, turn-taking, and cooperative play. A toddler who seems to have no friends is almost always developmentally on track. The ability to form friendships builds gradually through social exposure and maturation.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Not applicable. Social development at this stage is focused entirely on the parent-infant bond.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies begin to show social interest by smiling at faces and enjoying interaction, but peer relationships are not relevant yet.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies may show interest in other babies — watching them, reaching toward them, or imitating sounds. These brief interactions are the building blocks of social skills, not friendships. No child this age has friends in the traditional sense.',
    },
    {
      ageRange: '12 months+',
      context:
        'Between 1 and 3 years, children move through solitary play to parallel play. By age 2-3, they may show preferences for certain peers. True mutual friendships with shared activities, preferences, and affection begin around age 3-4. If your toddler is not forming friendships yet, this is completely normal. Provide regular, low-pressure social opportunities to build skills.',
    },
  ],
  whenNormal: [
    'Your toddler under age 3 does not have a "best friend" or consistent playmates',
    'Your child plays near but not directly with other children at playgroups or daycare',
    'Your toddler seems to enjoy watching other children even if they do not join in',
    'Your child has one or two preferred peers but does not engage in sustained cooperative play with them yet',
  ],
  whenToMention: [
    'By age 3-4, your child shows no interest in peers at all and actively avoids all social interaction with children',
    'Your child consistently fails to respond to social overtures from other children despite regular exposure to peers',
    'Your child shows limited social reciprocity — no back-and-forth interaction, limited eye contact, and difficulty with shared attention — with both peers and adults',
  ],
  whenToActNow: [
    'Your child has no interest in social interaction with anyone — peers or adults — and this is accompanied by delayed language, limited eye contact, and repetitive behaviors',
    'Your child previously had social interests and friendships but has suddenly withdrawn from all social contact',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'parallel-play-vs-interactive-play',
    'toddler-social-anxiety-playgroups',
    'only-child-socialization-concerns',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Social Development in Preschoolers. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Social-Development-in-Preschoolers.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Positive Parenting Tips: Toddlers.',
      url: 'https://www.cdc.gov/child-development/positive-parenting-tips/toddlers.html',
    },
  ],
};
