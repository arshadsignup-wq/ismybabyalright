import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-aggressive-toward-baby', title: 'Toddler Is Aggressive Toward Baby Sibling', category: 'behavior',
  searchTerms: ['toddler aggressive toward baby','toddler hitting baby','toddler hurting baby sibling','toddler jealous of baby','toddler rough with baby','toddler dangerous with baby','toddler pushing baby','toddler mean to new baby','toddler sibling aggression','keeping baby safe from toddler'],
  quickAnswer: 'Aggression toward a new baby sibling is common and does not mean your toddler is a bad child or will always be aggressive. Your toddler is experiencing huge emotions about sharing you - jealousy, confusion, loss of their previous position, and fear of being replaced. They lack the maturity to express this verbally, so it comes out physically. Never leave your toddler unsupervised with the baby, and address the underlying emotions with empathy.',
  byAge: [
    { ageRange: '12-24 months', context: 'A young toddler may not understand the baby is fragile. They may poke, squeeze, or hit the baby out of curiosity or because they have seen you touch the baby. Supervise all interactions, model gentle touch, and guide their hands: "Gentle. Like this. Soft touches for baby."' },
    { ageRange: '2-3 years', context: 'Aggression may be more intentional as your toddler processes jealousy. They understand that you pay attention to the baby and may hit the baby to express frustration. Validate feelings: "It is hard to share mommy. You love mommy so much." Set firm limits on behavior: "I will not let you hurt the baby."' },
    { ageRange: '3-4 years', context: 'Your child can understand more. Talk about what it is like to have a sibling. Create special one-on-one time with your toddler. Involve them in baby care in safe ways (bringing diapers, singing to baby). Praise all gentle interactions enthusiastically.' },
    { ageRange: '4-5 years', context: 'Aggression toward the baby should be decreasing. If it persists, your older child may need more individual attention and support processing their feelings. Consider whether the sibling dynamic involves other issues like parental favoritism (even unintentional) that need addressing.' },
  ],
  whenNormal: ['Some aggression toward a new sibling is very common','Your child is also showing curiosity or affection toward the baby','Aggression decreases with time, attention, and consistent limits','Your child is not aggressive in other settings'],
  whenToMention: ['Aggression toward the baby is increasing over time','Your child seems to target the baby specifically and deliberately','You are unable to keep the baby safe even with supervision','Your toddler shows no positive interest in the baby after several months'],
  whenToActNow: ['Your child has injured the baby','You are afraid to leave your children in the same room for even a moment'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Preparing Your Child for a New Sibling. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/Preparing-Your-Child-for-a-New-Sibling.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. The New Baby: Helping Your Older Child Adjust.', url: 'https://www.zerotothree.org/resource/the-new-baby/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Positive Parenting Tips.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers.html' },
  ],
  relatedConcernSlugs: ['toddler-new-baby-adjustment-timeline','toddler-gentle-hands-teaching','toddler-hitting-when-angry','toddler-regression-behavior-general'],
};
