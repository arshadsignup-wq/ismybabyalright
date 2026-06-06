import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-biting-when-frustrated', title: 'Toddler Biting: When They Bite Others or Themselves', category: 'behavior',
  searchTerms: ['toddler biting','toddler bites when frustrated','toddler biting at daycare','toddler biting other kids','toddler biting parent','why does toddler bite','toddler biting phase','toddler bites themselves','stop toddler from biting','toddler biting when angry'],
  quickAnswer: 'Biting is one of the most common and alarming toddler behaviors, but it is developmentally normal between ages 1-3. Toddlers bite because they lack the language to express frustration, excitement, or overwhelm. They are not being malicious. Most children outgrow biting by age 3-3.5 as their communication skills develop. In the meantime, respond consistently: remove the child, state the limit calmly, and help them express the underlying need.',
  byAge: [
    { ageRange: '6-12 months', context: 'Babies this age may bite during breastfeeding or teething. This is exploratory, not aggressive. They are learning about cause and effect and exploring with their mouths. Gently remove them and say "No biting" in a calm, firm voice.' },
    { ageRange: '12-24 months', context: 'Biting peaks in this age range. Your toddler bites because they cannot say "I am frustrated" or "Give that back" or "I am overwhelmed." Stay close in group settings, intervene before biting when possible, and immediately remove your child if they bite. Keep your reaction calm but firm.' },
    { ageRange: '2-3 years', context: 'As language develops, biting should decrease. If your child is still biting frequently, focus heavily on teaching alternative expressions: "Use your words. Say: I want that." Some children bite when overstimulated - watch for triggers and intervene early.' },
    { ageRange: '3-5 years', context: 'Biting should be rare by age 3 and essentially absent by age 4. If your child continues to bite past age 3, or bites themselves when frustrated, discuss with your pediatrician. Persistent biting beyond the toddler years may indicate difficulty with emotional regulation.' },
  ],
  whenNormal: ['Biting between ages 1-3 is very common','Biting decreases as language skills improve','Biting occurs during moments of frustration, excitement, or overwhelm','Your child does not seem to plan or enjoy biting'],
  whenToMention: ['Biting continues or increases after age 3','Your child bites themselves hard enough to leave marks','Biting is accompanied by other aggressive behaviors','Biting is happening many times daily despite consistent intervention'],
  whenToActNow: ['Biting causes injury requiring medical attention','Your child bites with intent to harm and shows no remorse or concern'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Biting. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Biting.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Biting: Why It Happens and What to Do.', url: 'https://www.zerotothree.org/resource/biting/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Positive Parenting Tips: Toddlers.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers.html' },
  ],
  relatedConcernSlugs: ['toddler-hitting-when-angry','toddler-scratching-others','toddler-anger-management-skills','toddler-emotional-regulation-skills'],
};
