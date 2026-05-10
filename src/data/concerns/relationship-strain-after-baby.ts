import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'relationship-strain-after-baby',
  title: 'Relationship Strain After Baby',
  category: 'behavior',
  searchTerms: [
    'relationship problems after baby',
    'fighting with partner after baby',
    'marriage problems after baby',
    'resent my partner since baby',
    'no intimacy after baby',
    'disconnected from partner after baby',
    'division of labor resentment baby',
    'want to leave partner after baby',
  ],
  quickAnswer:
    'Research consistently shows that relationship satisfaction drops for the majority of couples (up to 67%) after the arrival of a baby. Sleep deprivation, unequal division of labor, shifting identities, reduced intimacy, and the sheer intensity of newborn care create a perfect storm for conflict. This is incredibly common and does not mean your relationship is broken — but it does mean both partners need to prioritize the relationship alongside the baby.',
  byAge: [
    {
      ageRange: '0-3 months postpartum',
      context:
        'The newborn period is often called "survival mode" for a reason. Communication breaks down, resentment builds over who is doing more, physical intimacy disappears, and both partners feel unappreciated. The birthing parent may feel they are carrying the majority of the invisible labor while the other partner feels shut out or helpless. Both experiences are valid.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'By now, patterns have often solidified. If one partner has become the "default parent" — the one who knows the routines, schedules doctor appointments, and manages the mental load — resentment can deepen. Meanwhile, the other partner may feel criticized and withdraw. Breaking these patterns requires honest conversation and intentional changes, not just more effort from one person.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'As the baby becomes more interactive and routines stabilize, there is an opportunity to rebuild the relationship. However, many couples have accumulated months of unspoken resentment by this point. If you find yourselves in a pattern of contempt, criticism, or emotional withdrawal, couples therapy can help reset the dynamic before it becomes entrenched.',
    },
    {
      ageRange: '12 months+',
      context:
        'Some couples find that the relationship improves as their child becomes more independent. Others find that the divide has widened to a point that feels insurmountable. Whether you stay together or separate, getting support — for yourself, your partner, and your co-parenting relationship — benefits everyone, especially your child.',
    },
  ],
  whenNormal: [
    'Reduced quality time and intimacy in the first months — your bandwidth is genuinely limited',
    'Occasional arguments about housework, sleep, or parenting approaches',
    'Feeling temporarily disconnected from your partner during the most intense caregiving periods',
    'Needing to renegotiate roles and responsibilities — this is a normal part of the transition',
  ],
  whenToMention: [
    'Communication has broken down and you are unable to discuss concerns without escalating into arguments or shutting down',
    'Resentment feels constant and pervasive — you are keeping score and nothing your partner does feels like enough',
    'Emotional or physical intimacy has disappeared entirely and neither partner is working to restore it',
  ],
  whenToActNow: [
    'You or your partner are experiencing domestic violence — emotional, verbal, or physical abuse. Call the National Domestic Violence Hotline at 1-800-799-7233',
    'Relationship strain is contributing to thoughts of self-harm or harming your partner — call 988 (Suicide and Crisis Lifeline) immediately',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'postpartum-depression-in-partners',
    'identity-loss-after-baby',
    'sleep-deprivation-effects-parent',
  ],
  sources: [
    {
      org: 'APA',
      citation:
        'American Psychological Association. Relationships and the Transition to Parenthood.',
      url: 'https://www.apa.org/topics/parenting/transition',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Building a Strong Family. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/default.aspx',
    },
    {
      org: 'Postpartum Support International',
      citation:
        'Postpartum Support International. Postpartum Depression.',
      url: 'https://www.postpartum.net/learn-more/postpartum-depression/',
    },
  ],
};
