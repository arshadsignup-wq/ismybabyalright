import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'guilt-returning-to-work',
  title: 'Guilt About Returning to Work',
  category: 'behavior',
  searchTerms: [
    'guilt going back to work after baby',
    'feel bad leaving baby for work',
    'working mom guilt',
    'crying about going back to work',
    'baby too young for daycare',
    'leaving baby with someone else',
    'torn between work and baby',
    'maternity leave ending anxiety',
  ],
  quickAnswer:
    'The guilt of returning to work after having a baby is one of the most common and painful experiences new parents face. Whether you are returning by choice, financial necessity, or both, the transition is genuinely hard. Research consistently shows that children thrive in quality care settings AND with working parents. You can be a wonderful parent and a dedicated professional — these are not mutually exclusive.',
  byAge: [
    {
      ageRange: '0-3 months postpartum',
      context:
        'For parents returning to work at 6-12 weeks (common in the United States), the transition can feel impossibly early. You may still be physically recovering, establishing breastfeeding, and in the thick of newborn bonding. The guilt of leaving a tiny baby can feel crushing. These feelings are valid — the U.S. has among the shortest parental leave policies in the developed world, and the system is failing you, not the other way around.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'Returning around 3-6 months often means leaving a baby who has just started smiling, laughing, and becoming more interactive. The fear of missing milestones is real. Separation anxiety works both ways — you may cry at daycare drop-off just as much as your baby does. Most babies adjust well within two to three weeks, and your bond will not be diminished by time apart.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'If you have been home for an extended leave, the transition back can bring a mix of relief (returning to an adult identity) and guilt (feeling like you should want to stay home). You may compare yourself to parents who stay home, or feel that you are not fully present at work because your mind is on your baby. Both the guilt and the mixed emotions are entirely normal.',
    },
    {
      ageRange: '12 months+',
      context:
        'Some parents find that work-life guilt intensifies as toddlers become more verbal and expressive (hearing "don\'t go, Mama" is heartbreaking). Others find that the guilt eases as they see their child thriving in care. If the guilt is persistent and causing significant distress, it may be intertwined with anxiety or depression that would benefit from professional support.',
    },
  ],
  whenNormal: [
    'Crying before, during, or after the first days and weeks back at work',
    'Feeling distracted at work because you miss your baby',
    'Questioning whether you are making the right decision — repeatedly',
    'Feeling envious of parents who have a different arrangement (whether they stay home or return to work)',
  ],
  whenToMention: [
    'Guilt is so intense that you cannot focus at work or enjoy your time with your baby — it dominates every moment',
    'You are experiencing symptoms of depression or anxiety (persistent sadness, panic attacks, insomnia) related to the transition',
    'You are making significant life decisions (quitting your job impulsively, taking on unsustainable debt to avoid returning) driven by guilt rather than careful consideration',
  ],
  whenToActNow: [
    'You are having thoughts of harming yourself because of the intensity of the guilt and distress — call 988 (Suicide and Crisis Lifeline) immediately',
    'You feel completely unable to cope with the transition and are in crisis — call the Postpartum Support International helpline at 1-800-944-4773',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'identity-loss-after-baby',
    'parenting-anxiety-constant-worry',
    'comparison-anxiety-social-media',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Returning to Work After Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/work-and-child-care/Pages/Working-Parents.aspx',
    },
    {
      org: 'APA',
      citation:
        'American Psychological Association. Working Moms: How Much Working Is Too Much?',
      url: 'https://www.apa.org/topics/women-girls/working-mothers',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Maternal Employment and Child Development. National Library of Medicine.',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3855679/',
    },
  ],
};
