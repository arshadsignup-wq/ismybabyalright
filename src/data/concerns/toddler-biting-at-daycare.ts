import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-biting-at-daycare',
  title: 'Toddler Biting at Daycare - Why and How to Stop It',
  category: 'behavior',
  searchTerms: ['toddler biting at daycare','toddler biting other kids','why does my toddler bite','toddler biting phase','how to stop toddler from biting','toddler bites when frustrated','18 month old biting','2 year old biting at school','toddler biting parents','toddler biting when excited','is biting normal toddler','toddler biting problem'],
  quickAnswer: 'Biting is one of the most common behavioral issues in toddlers aged 1-3, especially in group settings like daycare. Toddlers bite because they lack the language and impulse control to express big emotions (frustration, excitement, overwhelm, or a need for space). It is not a sign of aggression, bad parenting, or a future behavioral problem. Most children stop biting by age 3-3.5 as their language and emotional regulation skills develop. Consistent, calm responses from all caregivers are the key to reducing biting.',
  byAge: [
    { ageRange: '6-12 months', context: 'Babies this age may bite during breastfeeding or when mouthing objects, which is normal oral exploration. If your baby bites while nursing, remove them from the breast briefly and say "no biting" in a firm but calm voice, then re-latch. Teething babies bite to relieve gum pain. This is not aggressive behavior - it is developmental. Offering teething toys and redirecting the biting to appropriate objects is the best approach at this age.' },
    { ageRange: '12-18 months', context: 'Biting becomes more intentional at this age but is still driven by limited communication skills. Your toddler may bite when frustrated, when another child takes a toy, when overwhelmed by excitement, or when they want attention. They do not understand that biting causes pain. Respond immediately and consistently: remove the child calmly, say "No biting. Biting hurts." Give attention to the child who was bitten first. Keep interactions brief - long explanations are lost on toddlers this age.' },
    { ageRange: '18-24 months', context: 'This is the peak biting age because toddlers have strong emotions and desires but limited language and zero impulse control. In daycare settings, biting often happens during transitions, crowded play, or when sharing is expected. Help your child with words: "Say move please" or "Say mine." Shadow your child during high-risk times if possible. Biting is most common when children are hungry, tired, or overstimulated - addressing these needs prevents many incidents.' },
    { ageRange: '2-3 years', context: 'Biting should be decreasing as language develops. If your child is still biting frequently at 2.5-3 years, look for patterns: When does it happen? What triggers it? Is the child overwhelmed by the daycare environment? Teaching emotion words, practicing coping strategies (deep breaths, squeezing hands), and role-playing social scenarios can help. If biting persists beyond age 3 or is increasing in frequency, talk to your pediatrician about whether additional support is needed.' },
  ],
  whenNormal: ['Your toddler goes through a brief biting phase lasting a few weeks to months','Biting is triggered by identifiable situations like frustration, excitement, or crowding','Biting frequency decreases as your child\'s language skills improve','Your child responds to consistent intervention and bites less over time'],
  whenToMention: ['Biting is increasing in frequency or intensity despite consistent intervention','Your child is over 3 and still biting regularly','Biting is accompanied by other aggressive behaviors like hitting, kicking, and throwing','Your child seems to bite without any identifiable trigger or seems to enjoy causing pain'],
  whenToActNow: ['Biting is causing serious injury to other children or adults','Your child is at risk of being expelled from daycare due to biting','Biting is accompanied by other concerning behavioral changes or developmental regression'],
  relatedMilestones: ['social-emotional-regulation','language-expressive'],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-aggressive-hitting-kicking','toddler-constant-meltdowns','toddler-delayed-social-skills'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Biting. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Biting.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Biting: Why It Happens and What to Do About It.', url: 'https://www.zerotothree.org/resource/biting/' },
    { org: 'NIH', citation: 'Tremblay RE, et al. Physical Aggression During Early Childhood. Pediatrics. 2004.', url: 'https://pubmed.ncbi.nlm.nih.gov/15286219/' },
  ],
};
