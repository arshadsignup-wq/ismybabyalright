import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-kicking-when-upset', title: 'Toddler Kicks When Upset or During Tantrums', category: 'behavior',
  searchTerms: ['toddler kicking','toddler kicks when angry','toddler kicks during tantrum','toddler kicks parents','toddler kicking other children','toddler kicks while being held','toddler kicks at diaper change','toddler aggressive kicking','stop toddler kicking','toddler lashes out kicking'],
  quickAnswer: 'Kicking is a common physical expression of big emotions in toddlers. Like hitting and biting, it stems from the gap between intense feelings and limited ability to express them verbally. Kicking often occurs during tantrums, diaper changes, or when being physically restrained. The approach is the same as for other physical aggression: stay calm, ensure safety, name the emotion, and teach alternatives consistently.',
  byAge: [
    { ageRange: '12-24 months', context: 'Kicking at this age often happens during diaper changes or when a toddler is being held against their will. It is usually not targeted at a person but is a full-body expression of frustration. Keep yourself safe, stay calm, and get through the necessary task. Name the feeling: "You do not want your diaper changed. I understand."' },
    { ageRange: '2-3 years', context: 'Kicking becomes more directed during tantrums. Your child may kick you, furniture, or other children. Create a safe space for your child to have big feelings. If they are kicking you, move out of range while staying present. "I am going to keep us both safe. I will stay right here but I will move back so you cannot kick me."' },
    { ageRange: '3-4 years', context: 'Teach specific alternatives: "If your body needs to kick, you can kick a pillow or stamp your feet on the floor." Practice these alternatives during calm moments. When kicking occurs, calmly redirect: "Remember, kick the pillow, not people."' },
    { ageRange: '4-5 years', context: 'Kicking should be rare by this age. If it persists, your child may need additional support with emotional regulation. Some children benefit from physical outlets like running, jumping on a trampoline, or other gross motor activities to channel physical energy from big emotions.' },
  ],
  whenNormal: ['Kicking during tantrums in toddlers aged 1-3','Kicking that decreases as your child develops better coping skills','Kicking that occurs impulsively, not with planning or intent','Your child can be redirected after calming down'],
  whenToMention: ['Kicking is frequent and targeted at other children','Your child kicks hard enough to injure others','Kicking increases rather than decreases with age','Kicking is part of a broader pattern of physical aggression'],
  whenToActNow: ['Your child injures others by kicking','Aggressive behaviors are escalating and you cannot keep others safe'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'Zero to Three', citation: 'Zero to Three. Aggressive Behavior in Toddlers.', url: 'https://www.zerotothree.org/resource/aggressive-behavior-in-toddlers/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Aggressive Behavior. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Aggressive-Behavior.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Positive Parenting Tips.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers.html' },
  ],
  relatedConcernSlugs: ['toddler-hitting-when-angry','toddler-biting-when-frustrated','toddler-anger-management-skills','tantrums'],
};
