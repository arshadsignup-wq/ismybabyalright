import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-not-showing-empathy', title: 'Toddler Not Showing Empathy', category: 'behavior',
  searchTerms: ['toddler not showing empathy', 'toddler no empathy', 'toddler doesn\'t care when others cry', 'toddler lack of empathy', 'toddler indifferent to feelings', 'when do toddlers show empathy', 'toddler no compassion', 'empathy development toddler', 'toddler doesn\'t feel for others', 'toddler empathic response absent'],
  quickAnswer: 'Empathy develops gradually. Babies may become distressed when others cry (emotional contagion) as early as 6 months. By 18 to 24 months, toddlers begin showing concern for others and may try to comfort them. Empathy is not fully developed in toddlers, and some children show it later than others. If your child shows no awareness of or response to others\' distress by age 3, mention this to your pediatrician.',
  byAge: [
    { ageRange: '6-12 months', context: 'Babies may cry when they hear another baby cry. This is emotional contagion, a precursor to empathy. True empathy has not yet developed.' },
    { ageRange: '12-18 months', context: 'Toddlers begin to notice others\' distress and may look concerned. They do not yet know how to help but may bring their own comfort object to an upset person.' },
    { ageRange: '18-24 months', context: 'Empathic responses become more visible. Toddlers may pat someone who is crying, bring a blanket, or look sad when others are upset. Not all toddlers show these behaviors at the same age.' },
    { ageRange: '24-36 months', context: 'Children increasingly try to comfort others by offering hugs, saying soothing words, or getting help. If your child seems entirely unaware of others\' emotions by this age, it is worth noting.' },
    { ageRange: '3-5 years', context: 'Empathy becomes more sophisticated. Children understand that others have different feelings and try to respond appropriately. Persistent lack of empathic response may indicate social cognition differences.' },
  ],
  whenNormal: ['Your toddler is under 2 and empathic responses are still developing', 'Your toddler notices others\' distress but does not yet know how to respond', 'Your toddler shows empathy with family but not with less familiar people', 'Your toddler sometimes responds empathically and sometimes does not'],
  whenToMention: ['Your child is over 3 and seems completely unaware when others are upset or in pain', 'Your child never attempts to comfort anyone, even family members', 'Absent empathy is combined with other social communication concerns'],
  whenToActNow: ['Your child actively appears to enjoy others\' distress', 'Your child had empathic responses and has lost them alongside other skill regression'],
  relatedMilestones: ['emotional-development', 'social-engagement', 'perspective-taking'],
  showSelfReferral: true, relatedConcernSlugs: ['toddler-not-understanding-emotions', 'toddler-not-comforting-others', 'baby-not-responding-to-facial-expressions'],
  sources: [
    { org: 'Zero to Three', citation: 'Zero to Three. How to Support Your Child\'s Developing Empathy.', url: 'https://www.zerotothree.org/resource/how-to-support-your-childs-developing-empathy/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Social-Emotional Development. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Social-Development-in-Preschoolers.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Child Development Milestones.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers2.html' },
  ],
};
