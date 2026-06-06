import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-dominating-play', title: 'Toddler Must Control All Play', category: 'behavior',
  searchTerms: ['toddler dominating play', 'toddler bossy in play', 'toddler must control play', 'toddler won\'t let others lead', 'toddler dictates all play', 'toddler controlling play', 'toddler bossy with friends', 'toddler inflexible in play', 'toddler my way or highway', 'toddler can\'t follow others in play'],
  quickAnswer: 'Some degree of wanting to control play is normal in toddlers, who are naturally egocentric and developing autonomy. However, a child who absolutely cannot allow any deviation from their plan and becomes extremely distressed when others contribute ideas may have difficulty with flexible thinking. This pattern may be temperamental or may be associated with anxiety or developmental differences.',
  byAge: [
    { ageRange: '18-24 months', context: 'Toddlers are naturally controlling about their play. They are asserting independence and learning about their world through self-directed exploration. This is completely normal.' },
    { ageRange: '24-36 months', context: 'Some bossiness is expected as toddlers have strong preferences and limited ability to compromise. With gentle guidance, they can begin to accept others\' input during play.' },
    { ageRange: '3-4 years', context: 'Children should be developing the ability to negotiate and accept others\' ideas in play. A child who always must be in charge and has extreme reactions when others contribute is worth monitoring.' },
    { ageRange: '4-5 years', context: 'Cooperative play requires flexibility. A child who consistently dominates all play and cannot tolerate any deviation may have difficulty with flexible thinking or social reciprocity. This can affect friendships.' },
    { ageRange: '5-6 years', context: 'By school age, inability to share control in play affects peer relationships. If your child cannot participate in play without being in charge, social skills support may be helpful.' },
  ],
  whenNormal: ['Your toddler is under 3 and wants to control play, which is age-appropriate', 'Your child likes to lead but can follow sometimes with encouragement', 'Your child is bossy with siblings but more flexible with peers', 'Your child has strong preferences but does not melt down when things change'],
  whenToMention: ['Your child is over 4 and cannot participate in play without being in complete control', 'Your child has extreme meltdowns when other children contribute ideas to play', 'Controlling play is combined with rigid routines and inflexible thinking in other areas'],
  whenToActNow: ['Your child\'s need for control has escalated and is causing significant social isolation', 'Controlling behavior is combined with other developmental concerns'],
  relatedMilestones: ['social-engagement', 'flexible-thinking', 'cooperative-play', 'self-regulation'],
  showSelfReferral: true, relatedConcernSlugs: ['toddler-rigid-play-patterns', 'toddler-not-cooperating-with-peers', 'toddler-routine-change-meltdown'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Social Development in Preschoolers.', url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Social-Development-in-Preschoolers.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Positive Parenting Tips.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/preschoolers.html' },
    { org: 'Zero to Three', citation: 'Zero to Three. Social Skills in Young Children.', url: 'https://www.zerotothree.org/resource/play/' },
  ],
};
