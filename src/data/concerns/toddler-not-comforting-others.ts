import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-not-comforting-others', title: 'Toddler Doesn\'t Try to Comfort Upset People', category: 'behavior',
  searchTerms: ['toddler not comforting others', 'toddler ignores crying', 'toddler doesn\'t help upset people', 'toddler not consoling', 'toddler no comforting behavior', 'toddler indifferent to crying', 'when do toddlers comfort others', 'toddler doesn\'t pat crying', 'prosocial behavior absent toddler', 'toddler helping behavior delayed'],
  quickAnswer: 'Comforting behaviors typically emerge between 18 and 30 months as part of developing empathy and prosocial skills. Young toddlers may bring their own blanket to a crying sibling, while older toddlers may hug or say soothing words. Some children are naturally less demonstrative. If your child seems completely unaware of or indifferent to others\' distress by age 3, discuss it with your pediatrician.',
  byAge: [
    { ageRange: '12-18 months', context: 'Comforting behaviors have not yet developed. Toddlers may notice distress but do not have the skills to respond. They may look concerned or become distressed themselves.' },
    { ageRange: '18-24 months', context: 'Simple comforting behaviors emerge. A toddler may bring their own comfort item to someone who is crying or pat them gently. These early prosocial behaviors are building blocks for later empathy.' },
    { ageRange: '24-36 months', context: 'Comforting behaviors become more targeted. Children may hug someone who is sad, say "it\'s okay," or try to get help from an adult. Not all children show these behaviors equally.' },
    { ageRange: '3-4 years', context: 'Children actively try to make others feel better using words and actions. They may offer specific comfort based on the situation. Persistent inability to comfort or respond to others\' distress should be mentioned.' },
    { ageRange: '4-5 years', context: 'Prosocial behaviors are well-developed. Children show concern, offer help, and adjust their comfort strategies. Complete absence of these behaviors warrants evaluation.' },
  ],
  whenNormal: ['Your toddler is under 2 and notices distress but does not yet know how to comfort', 'Your toddler shows concern through facial expression even if they do not act', 'Your toddler comforts family members but not unfamiliar people', 'Your toddler occasionally comforts others but not consistently'],
  whenToMention: ['Your child is over 3 and never attempts to comfort anyone', 'Your child seems completely unaware when others around them are upset', 'Absent comforting behavior is combined with other social communication differences'],
  whenToActNow: ['Your child had comforting behaviors and has stopped', 'Your child is over 3 with no prosocial behaviors and significant social communication concerns'],
  relatedMilestones: ['emotional-development', 'empathy', 'social-engagement', 'prosocial-behavior'],
  showSelfReferral: true, relatedConcernSlugs: ['toddler-not-showing-empathy', 'toddler-not-understanding-emotions', 'toddler-not-cooperating-with-peers'],
  sources: [
    { org: 'Zero to Three', citation: 'Zero to Three. Empathy Development in Young Children.', url: 'https://www.zerotothree.org/resource/how-to-support-your-childs-developing-empathy/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Social Development. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Social-Development-in-Preschoolers.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Positive Parenting Tips.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers2.html' },
  ],
};
