import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'parallel-play-vs-interactive-play',
  title: 'Parallel Play vs Interactive Play',
  category: 'behavior',
  searchTerms: [
    'toddler playing next to but not with other kids',
    'parallel play normal age',
    'when do toddlers start playing together',
    'my toddler ignores other children when playing',
    'toddler not interacting with peers',
    'when does cooperative play start',
    'toddler plays alone at playground',
    'is parallel play normal for 2 year old',
  ],
  quickAnswer:
    'Parallel play — where children play beside each other but not directly with each other — is a completely normal and important stage of social development. It typically begins around 18-24 months and can continue until age 3 or beyond. Children are observing and learning from each other even when they appear to be playing independently. Truly interactive or cooperative play usually develops between ages 3 and 4.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Babies at this age are focused on bonding with caregivers and are not yet socially aware of peers. Social play milestones are not relevant yet. Focus on responsive interactions with your baby.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies begin to notice other babies and may watch them with interest. This is "onlooker" behavior — the earliest form of social awareness. They may smile at or reach toward other babies but are not capable of play interactions yet.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies may show interest in peers by watching, touching, or imitating. Brief interactions occur but are not sustained play. Solitary play is the dominant mode, and this is completely appropriate for the developmental stage.',
    },
    {
      ageRange: '12 months+',
      context:
        'Parallel play becomes the primary mode of peer interaction between 18 months and 3 years. Your toddler may sit next to another child building blocks without interacting — this is normal and productive. By age 2.5-3, you may see brief episodes of associative play (shared activity without coordination). True cooperative play with rules and shared goals typically emerges between ages 3 and 4.',
    },
  ],
  whenNormal: [
    'Your 18-month to 3-year-old plays next to other children without directly engaging with them',
    'Your toddler watches other children closely even though they do not join in — this is active learning',
    'Your child occasionally imitates what nearby children are doing without directly interacting',
    'Your toddler has brief moments of interaction with peers but quickly returns to independent play',
  ],
  whenToMention: [
    'Your child shows no awareness of or interest in other children at all by age 2, and also has limited social engagement with adults',
    'Your child actively avoids all peers and becomes distressed when other children are nearby beyond age 2-3',
    'By age 4, your child still does not engage in any cooperative or interactive play and prefers to be alone in all settings',
  ],
  whenToActNow: [
    'Your child has no social interest in anyone — peers or adults — and shows additional signs such as no eye contact, not responding to name, or no pointing by 18 months',
    'Your child shows sudden social withdrawal after previously engaging with peers, especially if accompanied by other behavioral changes',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'only-child-socialization-concerns',
    'toddler-difficulty-making-friends',
    'toddler-social-anxiety-playgroups',
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
        'Parten, M. Social Participation Among Pre-School Children. Journal of Abnormal and Social Psychology. 1932.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
