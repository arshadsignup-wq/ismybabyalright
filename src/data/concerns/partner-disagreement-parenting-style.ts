import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'partner-disagreement-parenting-style',
  title: 'Disagreements with Your Partner About Parenting Style',
  category: 'behavior',
  searchTerms: [
    'partner disagree parenting style',
    'parents different discipline styles',
    'co-parenting disagreements',
    'fighting about how to raise baby',
    'partner too strict with baby',
    'partner too lenient with baby',
    'different parenting styles relationship',
    'parenting conflicts with spouse',
    'united front parenting baby',
    'parenting style differences help',
  ],
  quickAnswer:
    'Disagreements about parenting styles are one of the most common sources of relationship conflict for new parents. Research shows that some difference in approach is actually normal and can even benefit children by exposing them to different interaction styles. The problems arise when parents actively undermine each other, argue about parenting in front of the child, or have fundamentally different views on safety-critical topics. What matters most is mutual respect, willingness to communicate, and agreement on core values, even if day-to-day approaches differ somewhat.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Common early disagreements include: how quickly to respond to crying (one partner may worry about "spoiling" the baby), sleep approaches (co-sleeping vs. crib, sleep training readiness), feeding decisions (breast vs. bottle, when to supplement), and how much visitors to allow. In the newborn period, responding promptly to crying is evidence-based and does not create "spoiled" babies. If you and your partner disagree, discuss the research together. Having conversations about your parenting values before or during pregnancy can help, but many disagreements only surface once the baby arrives.',
    },
    {
      ageRange: '6-18 months',
      context:
        'As babies become mobile and begin testing boundaries, discipline style differences become more apparent. One parent may be more protective while the other encourages exploration; one may be more structured while the other is more flexible. Both approaches have value as long as safety is maintained. Where agreement is essential: safety rules (car seats, sleep environment, supervision around water), when to call the doctor, and never shaking or physically punishing a baby. For non-safety disagreements, try a "one week experiment" approach: agree to try one partner\'s approach for a week, then evaluate together.',
    },
    {
      ageRange: '18-36 months',
      context:
        'Toddler discipline is often the peak of parenting style conflict. Topics like screen time limits, sugar and food rules, bedtime routines, and how to handle tantrums frequently cause disagreement. The most important principle: avoid correcting or undermining your partner in front of your child, as this teaches the child to play one parent against the other. Discuss disagreements privately and present a united approach when possible. If you cannot resolve differences on your own, a family therapist or parenting class can provide a neutral framework. Remember that toddlers are adaptable and can learn different expectations with different caregivers.',
    },
  ],
  whenNormal: [
    'You and your partner have different approaches but can discuss them respectfully and reach compromises.',
    'You agree on safety-critical issues even if you differ on style preferences.',
    'Your child seems comfortable and secure with both parents despite slightly different approaches.',
  ],
  whenToMention: [
    'Parenting disagreements are causing significant, ongoing relationship conflict that affects your family atmosphere.',
    'You are concerned that your partner\'s parenting approach may be harmful to your child (excessively harsh discipline, neglect of basic needs).',
    'You feel unable to discuss parenting differences without it escalating into arguments.',
    'Your child seems confused, anxious, or is exhibiting behavioral problems that may be related to inconsistent parenting.',
  ],
  whenToActNow: [
    'Your partner is using physical punishment or verbal aggression that constitutes abuse.',
    'Parenting disagreements have escalated to the point of domestic violence or verbal threats.',
    'You believe your child is unsafe with your partner due to neglect, rage, substance use, or dangerous practices.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'grandparent-boundary-setting-baby',
    'partner-involvement-baby-care-tips',
    'parental-decision-fatigue-conflicting-advice',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Co-Parenting: Building a Strong Partnership. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/Co-Parenting-Tips.aspx',
    },
    {
      org: 'APA',
      citation:
        'American Psychological Association. Parenting Styles and Child Development.',
      url: 'https://www.apa.org/topics/parenting',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. When Parents Disagree: Working Through Parenting Differences.',
      url: 'https://www.zerotothree.org/resource/when-parents-disagree/',
    },
  ],
};
