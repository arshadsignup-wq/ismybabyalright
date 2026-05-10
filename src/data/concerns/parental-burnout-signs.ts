import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'parental-burnout-signs',
  title: 'Parental Burnout Signs',
  category: 'behavior',
  searchTerms: [
    'parental burnout',
    'burned out as a parent',
    'exhausted from parenting',
    'cannot do this anymore parent',
    'mom burnout',
    'dad burnout',
    'overwhelmed as a parent',
    'parenting feels impossible',
  ],
  quickAnswer:
    'Parental burnout is a state of physical, emotional, and mental exhaustion caused by the chronic stress of parenting. It goes beyond normal tiredness — it involves feeling emotionally drained, detached from your children, and doubting your ability as a parent. Research shows it affects roughly 5-20% of parents and is a recognized condition, not a personal failure. Recovery requires real support, not just more willpower.',
  byAge: [
    {
      ageRange: '0-3 months postpartum',
      context:
        'The relentless cycle of feeding, soothing, and sleep deprivation in the newborn period can bring any parent to the edge. Burnout at this stage often looks like crying along with the baby, dreading each night, or feeling unable to get through another day. This is your body and mind telling you that you need more support — not that you are failing.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'By this point, the initial wave of help from friends and family has often faded, parental leave may be ending, and the reality of sustained caregiving sets in. Many parents feel pressure to have things "figured out" by now, which adds guilt to the exhaustion. Burnout may manifest as emotional withdrawal, going through the motions, or irritability that feels unlike you.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'The cumulative toll of months of caregiving — especially without adequate breaks, shared responsibilities, or emotional support — can lead to full burnout. Parents may feel resentful, fantasize about escape, or experience a loss of joy in activities they used to love. These are warning signs that your needs have been neglected for too long.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlerhood introduces new demands — constant supervision, tantrums, power struggles — layered on top of existing exhaustion. Burnout at this stage can look like emotional numbness toward your child, snapping frequently, or feeling like you are failing despite doing everything. Therapy, respite care, and honest conversations with your support network can help you recover.',
    },
  ],
  whenNormal: [
    'Feeling tired after a particularly difficult day or week with your child',
    'Needing a break from parenting and looking forward to time alone',
    'Occasionally feeling frustrated or overwhelmed by the demands of child-rearing',
    'Missing your pre-parent identity or freedom from time to time',
  ],
  whenToMention: [
    'Exhaustion that does not improve with rest — you feel depleted even after sleeping or taking a break',
    'Emotional distance from your child — you love them but feel nothing when interacting with them',
    'A persistent feeling that you are a bad parent despite objective evidence to the contrary',
  ],
  whenToActNow: [
    'You are having thoughts of harming yourself or feel that your family would be better off without you — call 988 (Suicide and Crisis Lifeline) immediately',
    'You are having urges to harm or abandon your child — put the child in a safe place and call the Postpartum Support International helpline at 1-800-944-4773 or text HOME to 741741 (Crisis Text Line)',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'postpartum-rage-anger',
    'sleep-deprivation-effects-parent',
    'single-parent-overwhelm',
  ],
  sources: [
    {
      org: 'APA',
      citation:
        'American Psychological Association. Parental Burnout: What It Is and How to Manage It.',
      url: 'https://www.apa.org/monitor/2022/01/special-parental-burnout',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Working Parents: Tips for Managing Stress. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/work-and-child-care/Pages/Working-Parents.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Parenting for Lifelong Health.',
      url: 'https://www.who.int/teams/social-determinants-of-health/parenting-for-lifelong-health',
    },
  ],
};
