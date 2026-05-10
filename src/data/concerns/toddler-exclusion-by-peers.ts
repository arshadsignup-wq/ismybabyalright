import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-exclusion-by-peers',
  title: 'Toddler Exclusion by Peers',
  category: 'behavior',
  searchTerms: [
    'toddler being excluded by other kids',
    'other children won\'t play with my toddler',
    'toddler left out at daycare',
    'my child is being excluded at preschool',
    'toddler rejected by playgroup',
    'why do other kids avoid my toddler',
    'toddler social rejection signs',
    'child being left out at playground',
  ],
  quickAnswer:
    'Peer exclusion in toddlers and young preschoolers is often a normal part of early social development rather than true bullying. Children ages 2-4 are still learning social skills and may exclude others unintentionally as they form early play partnerships. Some exclusion is also related to developmental differences in play style — a child who is still in parallel play may seem excluded from more interactive peers. Persistent, targeted exclusion warrants attention, but occasional exclusion is part of learning social navigation.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Not applicable. Babies are not yet in peer social situations.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Not applicable. Social development is focused on caregiver bonds.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies in group childcare may be drawn to certain peers and not others, but this is based on proximity and temperament, not exclusion. There is no intentional social exclusion at this age.',
    },
    {
      ageRange: '12 months+',
      context:
        'Between 2 and 4 years, children begin forming play preferences. A child may say "You can\'t play with us" — which is hurtful but developmentally normal boundary-testing behavior. Help your child develop social skills, practice joining play scenarios, and talk to teachers or caregivers about facilitating inclusion. By age 4-5, most children develop a broader social circle with adult support.',
    },
  ],
  whenNormal: [
    'Your toddler is occasionally left out of play at daycare or playgroups but is included at other times',
    'Your child is younger or has different play interests than the group, leading to natural separation',
    'Your toddler is still in the parallel play stage while peers have moved to interactive play',
    'Exclusion happens in specific contexts but your child has positive social interactions in other settings',
  ],
  whenToMention: [
    'Your child is consistently and deliberately excluded by peers in all social settings, and this pattern persists over weeks',
    'Your child is showing signs of distress — reluctance to go to daycare, changes in mood, increased clinginess — related to peer rejection',
    'Teachers or caregivers report that your child is frequently isolated and struggling to join group activities despite adult facilitation',
  ],
  whenToActNow: [
    'Your child is being physically targeted or verbally taunted by peers, and adults in the environment are unable or unwilling to intervene effectively',
    'Peer exclusion is causing significant emotional distress, such as persistent sadness, anxiety, behavioral regression, or refusal to attend daycare or preschool',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-difficulty-making-friends',
    'toddler-social-anxiety-playgroups',
    'toddler-bullied-at-daycare',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Social Development in Preschoolers. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Social-Development-in-Preschoolers.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Hay, D. et al. Peer Relations in Childhood. Journal of Child Psychology and Psychiatry. National Library of Medicine.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/15016466/',
    },
  ],
};
