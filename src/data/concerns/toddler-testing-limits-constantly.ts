import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-testing-limits-constantly', title: 'Toddler Constantly Tests Boundaries and Limits', category: 'behavior',
  searchTerms: ['toddler testing limits','toddler pushing boundaries','toddler tests every rule','toddler defies rules','toddler boundary testing','toddler looks at you and does it anyway','toddler knows rules breaks them','toddler deliberately disobeys','toddler challenging authority','toddler testing parents'],
  quickAnswer: 'Testing limits is one of the most important jobs of a toddler. When your child looks at you and deliberately does the thing you said not to do, they are running an experiment: "Is this rule real? Is it the same every time? Does it apply with all adults?" Consistent, calm enforcement of boundaries actually makes children feel safer. They need to test the fence to know it is sturdy.',
  byAge: [
    { ageRange: '12-24 months', context: 'Young toddlers test limits because they genuinely do not remember rules from moment to moment. Their impulse control is almost nonexistent. They need physical redirection more than verbal warnings. Move them away from the forbidden item and redirect to something they can do.' },
    { ageRange: '2-3 years', context: 'This is peak limit-testing age. Your child will look directly at you while doing the thing you said not to do. This is not defiance - it is a developmental experiment. Stay calm, enforce the boundary without anger, and be consistent. If the rule changes based on your mood, they will keep testing.' },
    { ageRange: '3-4 years', context: 'Children understand rules better but still test them, especially when tired, with new caregivers, or in new environments. Consistency across all settings and caregivers is important. Explain simple reasons for rules: "We do not hit because it hurts."' },
    { ageRange: '4-5 years', context: 'Limit testing decreases significantly when boundaries have been consistent. Your child may negotiate or argue rules but generally respects established boundaries. If limit testing remains intense, evaluate whether boundaries are age-appropriate and consistently enforced.' },
  ],
  whenNormal: ['Your toddler tests limits daily - this is their job','Testing is most intense around ages 2-3','Your child generally responds to consistent enforcement','Limit testing decreases over time with consistent boundaries'],
  whenToMention: ['Your child seems completely unable to follow any rules even with consistency','Limit testing includes dangerous behaviors that put your child at risk','Oppositional behavior is extreme and persistent across all settings','Your child shows no response to any form of discipline or boundary'],
  whenToActNow: ['Your child repeatedly engages in dangerous behavior despite consistent consequences','You feel unable to keep your child safe due to their limit testing'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Disciplining Your Child. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Disciplining-Your-Child.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Setting Limits with Toddlers.', url: 'https://www.zerotothree.org/resource/setting-limits/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Positive Parenting Tips.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers.html' },
  ],
  relatedConcernSlugs: ['defiant-toddler','toddler-power-struggles-daily','toddler-saying-no-to-everything','toddler-ignoring-parents-deliberately'],
};
