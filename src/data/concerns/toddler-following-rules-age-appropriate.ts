import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-following-rules-age-appropriate', title: 'What Rules Can Toddlers Be Expected to Follow?', category: 'behavior',
  searchTerms: ['toddler following rules','age appropriate rules toddler','what rules toddler can follow','toddler rule following ability','toddler understand rules','reasonable expectations toddler rules','toddler cant follow rules','when can children follow rules','discipline expectations age','toddler compliance age appropriate'],
  quickAnswer: 'Toddlers can understand simple rules but cannot consistently follow them. Research shows that children under 3 can remember rules but lack the impulse control to follow them reliably, even when they want to. By age 3-4, children follow familiar rules about 60-70% of the time. Full rule compliance is not expected until much later. Having realistic expectations reduces frustration for both you and your child.',
  byAge: [
    { ageRange: '12-18 months', context: 'Your child can begin to understand "no" and simple limits but cannot be expected to follow them consistently. They need physical redirection much more than verbal rules. Keep rules to basic safety: no touching the stove, no going in the street. Expect to repeat and redirect hundreds of times.' },
    { ageRange: '18-30 months', context: 'Your child can understand 3-5 simple rules but will break them regularly due to immature impulse control. Keep rules simple, positive, and few: "Walking feet inside. Gentle hands. Food stays on the table." Enforce with calm, consistent redirection, not punishment.' },
    { ageRange: '2.5-4 years', context: 'Children can follow more rules and begin to understand reasons behind them. Use simple explanations: "We hold hands in the parking lot because cars cannot see you." Visual reminders (picture charts) help. Expect compliance about 60-70% of the time.' },
    { ageRange: '4-5 years', context: 'Children can follow complex rules and begin to internalize them. They can follow rules even when not being watched, though not always. If your child consistently cannot follow basic rules despite understanding them, discuss with your pediatrician whether there may be attention or impulse control issues.' },
  ],
  whenNormal: ['Toddlers break rules regularly despite knowing them','Your child follows rules better when calm, rested, and not distracted','Rule-following improves gradually with age','Your child needs reminders - they are not choosing to disobey'],
  whenToMention: ['Your child seems unable to follow any rules even with consistent support','Rule-breaking is significantly worse than same-age peers','Your child does not seem to understand rules despite age-appropriate cognitive development','Inability to follow rules is affecting daycare or preschool participation'],
  whenToActNow: ['Your child consistently breaks safety rules putting themselves in danger','You are unable to keep your child safe due to inability to follow basic safety rules'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Disciplining Your Child. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Disciplining-Your-Child.aspx' },
    { org: 'NIH', citation: 'Kochanska G, Aksan N. Children\'s conscience and self-regulation. J Pers. 2006;74(6):1587-1617.', url: 'https://pubmed.ncbi.nlm.nih.gov/17083660/' },
    { org: 'Zero to Three', citation: 'Zero to Three. Setting Limits with Toddlers.', url: 'https://www.zerotothree.org/resource/setting-limits/' },
  ],
  relatedConcernSlugs: ['toddler-not-listening-developmental','toddler-impulse-control-development','toddler-testing-limits-constantly','toddler-self-regulation-timeline'],
};
