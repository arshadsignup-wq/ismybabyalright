import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-too-dependent-on-one-friend',
  title: 'Toddler Too Dependent on One Friend',
  category: 'behavior',
  searchTerms: [
    'toddler only plays with one friend',
    'preschooler obsessed with one friend',
    'toddler won\'t play with anyone else',
    'child too attached to one friend',
    'toddler cries if best friend is not at daycare',
    'exclusive friendship toddler normal',
    'toddler dependent on one peer',
    'preschooler codependent friendship',
  ],
  quickAnswer:
    'It is common for toddlers and preschoolers to form intense, exclusive attachments to one friend. This is often their first experience of choosing a peer relationship, and the intensity reflects how meaningful it is to them. While the closeness is a positive sign of social development, gently encouraging broader social connections helps build resilience and flexibility. Most exclusive friendships naturally broaden as children mature and enter larger social settings.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Not applicable. Peer relationships do not exist at this age.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Not applicable. Babies are forming primary attachments with caregivers.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies in group care may show recognition of and preference for specific peers, but these are not yet friendships. A baby who lights up when a particular child arrives is showing early social memory.',
    },
    {
      ageRange: '12 months+',
      context:
        'Between ages 2 and 5, intense best-friend attachments are common. Your child may refuse to play with others, become upset if their friend is absent, or try to control the friendship. This intensity is part of learning about relationships. Encourage playdates with other children, praise positive interactions with different peers, and avoid criticizing the friendship itself.',
    },
  ],
  whenNormal: [
    'Your toddler has a strong preference for one friend but can still engage with other children when that friend is unavailable',
    'The friendship is mutual and both children seem happy in the relationship',
    'Your child talks about their friend constantly and wants to see them — this shows healthy social attachment',
    'Your child occasionally plays with others but always gravitates back to their preferred friend',
  ],
  whenToMention: [
    'Your child becomes extremely distressed and unable to function when their one friend is absent — refusing to participate in activities, crying for extended periods, or having meltdowns',
    'The friendship is one-sided — your child is intensely attached but the other child does not seem equally interested, leading to frequent rejection',
    'Your child\'s exclusive attachment is preventing them from developing any other social connections and they become anxious or aggressive when others try to join their play',
  ],
  whenToActNow: [
    'Your child\'s social dependency is part of a broader pattern of extreme anxiety, rigidity, or difficulty with any change or transition',
    'The friendship dynamic is unhealthy — one child is consistently controlling, aggressive, or manipulative toward the other',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-difficulty-making-friends',
    'toddler-social-anxiety-playgroups',
    'toddler-bossiness-control',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Making Friends: How Children Learn Social Skills. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/work-and-child-care/Pages/Making-Friends.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Howes, C. Peer Interaction of Young Children. Monographs of the Society for Research in Child Development. 1988.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/3226117/',
    },
  ],
};
