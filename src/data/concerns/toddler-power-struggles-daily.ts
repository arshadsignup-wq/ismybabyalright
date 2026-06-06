import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-power-struggles-daily', title: 'Daily Power Struggles with Your Toddler', category: 'behavior',
  searchTerms: ['toddler power struggles','toddler fights everything','power struggle toddler','toddler battle of wills','toddler oppositional daily','toddler argues everything','toddler defiant daily routine','toddler refuses cooperate','toddler stubborn daily tasks','toddler control battles'],
  quickAnswer: 'Power struggles are common when toddlers develop a strong sense of self and independence (around 18 months to 4 years). Your child is not trying to make your life difficult - they are practicing autonomy, which is a critical developmental task. The key is to offer choices within boundaries, pick your battles wisely, and avoid getting into a win-lose dynamic with your child.',
  byAge: [
    { ageRange: '18-24 months', context: 'The desire for autonomy emerges strongly. Your toddler wants to do everything themselves and resists help. Offer two acceptable choices whenever possible: "Do you want the red cup or the blue cup?" This gives them a sense of control within your boundaries.' },
    { ageRange: '2-3 years', context: 'Peak power struggle age. Everything can become a battle - getting dressed, eating, bath time, leaving the park. Pick your battles: focus on safety and health, be flexible on everything else. Use "when-then" language: "When you put on your shoes, then we can go outside."' },
    { ageRange: '3-4 years', context: 'Your child wants even more control. Involve them in decisions when possible. Let them choose their clothes, help prepare food, and set up their own activities. The more genuine autonomy they have, the fewer power struggles over non-negotiable items.' },
    { ageRange: '4-5 years', context: 'Power struggles should decrease as your child gains more independence and learns that cooperation has benefits. If daily battles persist despite consistent approaches, consider whether your child may need more autonomy in certain areas or whether there are underlying issues.' },
  ],
  whenNormal: ['Some power struggles daily during the toddler years','Your child cooperates sometimes and pushes back other times','Power struggles are worst when your child is tired or hungry','The number of battles decreases over time with consistent approaches'],
  whenToMention: ['Every interaction becomes a power struggle','Your child is oppositional with everyone, not just parents','Power struggles are intensifying rather than decreasing with age','You feel like you are losing control of the parent-child dynamic'],
  whenToActNow: ['Power struggles escalate to physical aggression frequently','You feel unable to manage your own responses during conflicts'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. How to Shape and Manage Your Child\'s Behavior. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/How-to-Shape-Manage-Young-Child-Behavior.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Toddlers and Challenging Behavior.', url: 'https://www.zerotothree.org/resource/challenging-behaviors/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Positive Parenting Tips: Toddlers.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers.html' },
  ],
  relatedConcernSlugs: ['toddler-saying-no-to-everything','toddler-testing-limits-constantly','defiant-toddler','toddler-ignoring-parents-deliberately'],
};
