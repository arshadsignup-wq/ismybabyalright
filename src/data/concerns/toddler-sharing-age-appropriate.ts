import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-sharing-age-appropriate', title: 'When Should Toddlers Learn to Share?', category: 'behavior',
  searchTerms: ['toddler sharing','when do toddlers share','toddler wont share','toddler refusing to share','teaching toddler to share','toddler selfish wont share','toddler sharing age','normal not sharing toddler','toddler takes toys from others','forced sharing toddler'],
  quickAnswer: 'True sharing - voluntarily giving something to someone else with the understanding they will enjoy it - does not develop until around age 3-4. Before that, toddlers are not developmentally capable of genuine sharing because they lack the cognitive ability to understand another person\'s perspective. Forcing a toddler to share before they are ready can actually backfire. Instead, teach turn-taking, which is a precursor to sharing.',
  byAge: [
    { ageRange: '12-24 months', context: 'Toddlers this age are in the "mine" stage. They are just developing a sense of ownership and self. Expecting sharing at this age is like expecting them to do algebra. Instead, have duplicates of popular toys when possible and narrate turn-taking: "First your turn, then their turn."' },
    { ageRange: '2-3 years', context: 'Parallel play is normal - playing alongside other children without truly sharing. Your child may offer a toy briefly but grab it back. This is normal. Practice turn-taking with timers: "You can use it until the timer rings, then it is their turn." Avoid forcing sharing of comfort objects.' },
    { ageRange: '3-4 years', context: 'True sharing begins to emerge. Your child can start to understand that sharing makes others happy. Model sharing in your own life: "I am sharing my snack with you because I love you." Praise voluntary sharing without demanding it.' },
    { ageRange: '4-5 years', context: 'Most children can share willingly much of the time, though they may still struggle with favorite items. Cooperative play increases. If your child still has significant difficulty sharing at this age, it may be worth discussing social skills development with your pediatrician.' },
  ],
  whenNormal: ['Toddlers under age 3 do not share well - this is developmentally normal','Your child shares sometimes but not always','Turn-taking is easier than true sharing','Your child shares more with familiar people'],
  whenToMention: ['Your child has no interest in other children at all by age 3','Your child is aggressive when asked to share and cannot be redirected','Sharing difficulties are causing major social problems at preschool','Your child shows no awareness of others\' feelings by age 4'],
  whenToActNow: ['Your child is physically aggressive toward other children over sharing','Social interactions are consistently negative and your child has no positive peer relationships'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Social Development in Preschoolers. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Social-Development-in-Preschoolers.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Sharing: How to Teach It.', url: 'https://www.zerotothree.org/resource/sharing/' },
    { org: 'NIH', citation: 'Brownell CA et al. Socialization of early prosocial behavior. Child Dev. 2013;84(4):1236-1251.', url: 'https://pubmed.ncbi.nlm.nih.gov/23406494/' },
  ],
  relatedConcernSlugs: ['toddler-possessiveness-mine-phase','toddler-empathy-development-timeline','toddler-bossy-with-friends','toddler-exclusion-from-play'],
};
