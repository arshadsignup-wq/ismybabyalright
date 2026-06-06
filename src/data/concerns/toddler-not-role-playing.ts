import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-not-role-playing', title: 'Toddler Not Playing Role-Play Games', category: 'behavior',
  searchTerms: ['toddler not role playing', 'toddler no dramatic play', 'toddler doesn\'t pretend to be characters', 'toddler not playing house', 'toddler not taking on roles', 'toddler doesn\'t act out scenarios', 'role play development child', 'toddler no character play', 'toddler doesn\'t play dress up', 'when do children role play'],
  quickAnswer: 'Role play, where children take on characters and act out scenarios, typically develops between 2.5 and 4 years. Simple role play like being "mommy" or "doctor" comes first, followed by more complex scenarios. If your child shows no interest in role play by age 4 despite other pretend play skills being present, this may reflect developmental differences.',
  byAge: [
    { ageRange: '18-24 months', context: 'Children engage in simple pretend play but are not yet taking on roles or characters. Feeding a doll or pretending to cook is typical. Role play has not yet developed.' },
    { ageRange: '24-36 months', context: 'Simple role play begins to emerge. Children may pretend to be mommy, daddy, or a baby. They assign roles to dolls and stuffed animals. Not all children role play at this age.' },
    { ageRange: '3-4 years', context: 'Role play becomes more common and elaborate. Children play doctor, teacher, firefighter, and other familiar roles. They enjoy dress-up and creating characters. Most children engage in some role play by age 4.' },
    { ageRange: '4-5 years', context: 'Role play is a primary form of play and social interaction. Children negotiate roles with peers and create complex stories. If your child has never engaged in any role play, a developmental evaluation may be helpful.' },
    { ageRange: '5-6 years', context: 'Role play is elaborate and collaborative. Children understand and perform different character perspectives, which builds social cognition and empathy.' },
  ],
  whenNormal: ['Your toddler is under 3 and engaging in simple pretend play but not yet taking on character roles', 'Your child role plays with familiar roles like parent or baby but not fantasy characters', 'Your child prefers constructive play like building but occasionally role plays', 'Your child is shy about role play in groups but does it at home'],
  whenToMention: ['Your child is over 4 and has never pretended to be a character or taken on a role in play', 'Your child has pretend play skills but cannot take another person\'s perspective in play', 'Absent role play is combined with difficulty understanding others\' emotions and social cues'],
  whenToActNow: ['Your child shows no pretend play of any kind including role play by age 3', 'Your child had role play skills and has stopped'],
  relatedMilestones: ['pretend-play', 'social-engagement', 'perspective-taking', 'emotional-development'],
  showSelfReferral: true, relatedConcernSlugs: ['toddler-not-pretend-playing', 'delayed-pretend-play', 'toddler-not-understanding-emotions'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. The Power of Play.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Power-of-Play.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Positive Parenting Tips: Preschoolers.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/preschoolers.html' },
    { org: 'Zero to Three', citation: 'Zero to Three. Pretend Play and Social Development.', url: 'https://www.zerotothree.org/resource/play/' },
  ],
};
