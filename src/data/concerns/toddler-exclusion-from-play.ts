import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-exclusion-from-play', title: 'Toddler Is Excluded from Play by Other Children', category: 'behavior',
  searchTerms: ['toddler excluded from play','toddler left out','toddler no friends','toddler rejected by peers','preschooler excluded','toddler plays alone at daycare','toddler not included','child left out of play','toddler social rejection','toddler has no friends'],
  quickAnswer: 'Seeing your child excluded from play is heartbreaking. Some exclusion is a normal part of learning social dynamics - children are still developing the skills to include everyone. However, if your child is consistently excluded, it is worth investigating why and helping them develop social skills. Children who are excluded may need coaching on how to enter play, how to be flexible, or may have social communication differences worth exploring.',
  byAge: [
    { ageRange: '12-24 months', context: 'True social exclusion does not really happen at this age because children play in parallel rather than cooperatively. If your child is not playing near others, it may simply be their temperament or they may need more opportunities for peer exposure.' },
    { ageRange: '2-3 years', context: 'Children begin to show preferences for play partners. Some exclusion is normal as children figure out friendships. If your child consistently plays alone, consider whether they need help learning to approach others. Coach them: "Go say: Can I play too?"' },
    { ageRange: '3-4 years', context: 'Social groups form and exclusion can become more intentional. If your child is being consistently left out, talk to their teacher. Consider whether your child needs support with social skills like flexibility, sharing, or understanding social cues. Arrange one-on-one playdates to build individual friendships.' },
    { ageRange: '4-5 years', context: 'Social dynamics become more complex. Some exclusion is normal, but consistent rejection is concerning. Work with teachers to understand the dynamic. Your child may benefit from social skills coaching or playdates in structured settings where an adult can facilitate interaction.' },
  ],
  whenNormal: ['Occasional exclusion as children figure out social dynamics','Your child has at least one or two friends even if not part of the main group','Your child can enter play successfully sometimes','Exclusion is situational, not constant'],
  whenToMention: ['Your child is consistently excluded across different settings','Your child seems unaware of social cues or cannot read them','Exclusion is causing significant distress to your child','Your child has no successful peer relationships by age 3-4'],
  whenToActNow: ['Your child is being bullied or targeted by peers','Exclusion is causing your child to refuse to go to school or daycare'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Making Friends. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/gradeschool/Pages/Making-Friends.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Making Friends: How Children Build Relationships.', url: 'https://www.zerotothree.org/resource/making-friends/' },
    { org: 'NIH', citation: 'Rubin KH et al. Peer interactions, relationships, and groups. In: Handbook of Child Psychology. 2006.', url: 'https://pubmed.ncbi.nlm.nih.gov/17154753/' },
  ],
  relatedConcernSlugs: ['toddler-shyness-vs-social-anxiety','toddler-sharing-age-appropriate','toddler-bossy-with-friends','toddler-empathy-development-timeline'],
};
