import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-not-engaging-peers', title: 'Toddler Not Interacting with Other Children', category: 'behavior',
  searchTerms: ['toddler not engaging peers', 'toddler ignores other kids', 'toddler not interested in children', 'toddler won\'t play with kids', 'toddler no peer interaction', 'toddler avoids other children', 'toddler doesn\'t notice other kids', 'toddler antisocial with peers', 'toddler no interest in playmates', 'toddler peer interaction delayed'],
  quickAnswer: 'Toddlers under 2 typically engage in parallel play, playing alongside other children rather than with them. Interactive play with peers develops gradually between 2 and 4 years. If your toddler shows no interest in or awareness of other children by age 2 to 2.5, or actively avoids them, this may warrant a developmental screening.',
  byAge: [
    { ageRange: '12-18 months', context: 'Toddlers at this age are primarily interested in adults and may notice other children with curiosity but not engage in interactive play. Parallel play alongside other children is the expected level of social interaction.' },
    { ageRange: '18-24 months', context: 'Interest in peers increases. Toddlers watch other children, imitate them, and may engage in brief exchanges. However, sustained interactive play is not expected. Some toddlers are more interested in peers than others.' },
    { ageRange: '24-36 months', context: 'Interactive play begins to emerge. Children take turns, share briefly, and engage in simple games with peers. If your child shows absolutely no interest in other children at this age, mention it to your pediatrician.' },
    { ageRange: '3-4 years', context: 'Cooperative play develops. Children play together, share ideas, and take on roles in pretend play. A child who consistently prefers to play alone and avoids all peer interaction may benefit from evaluation.' },
    { ageRange: '4-5 years', context: 'Peer interaction is an important part of development. Children form friendships and navigate social dynamics. Persistent avoidance of or disinterest in peers may indicate social communication differences.' },
  ],
  whenNormal: ['Your toddler is under 2 and plays alongside other children without interacting directly', 'Your toddler is interested in watching other children even if not joining in', 'Your toddler plays with one or two familiar children but is shy with new ones', 'Your toddler is slow to warm up but eventually engages with peers'],
  whenToMention: ['Your toddler is over 2.5 and shows no interest in or awareness of other children', 'Your toddler actively avoids other children or becomes distressed around them', 'Your toddler has no peer interaction at daycare or playgroups despite months of exposure'],
  whenToActNow: ['Your toddler is completely unaware of other children and also has limited social engagement with adults', 'Your toddler previously interacted with peers and has withdrawn completely'],
  relatedMilestones: ['social-engagement', 'parallel-play', 'cooperative-play', 'emotional-development'],
  showSelfReferral: true, relatedConcernSlugs: ['not-interested-in-other-children', 'toddler-playing-alone-always', 'toddler-not-cooperating-with-peers'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Social Development in Preschoolers.', url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Social-Development-in-Preschoolers.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Important Milestones: Your Child By 2 Years.', url: 'https://www.cdc.gov/ActEarly/Milestones/milestones-2yr.html' },
    { org: 'Zero to Three', citation: 'Zero to Three. Social Development in Toddlers.', url: 'https://www.zerotothree.org/resource/social-emotional-development-birth-to-3-months/' },
  ],
};
