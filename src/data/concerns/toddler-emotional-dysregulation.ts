import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-emotional-dysregulation',
  title: 'Toddler Has Extreme Emotional Reactions',
  category: 'behavior',
  searchTerms: ['toddler extreme emotions', 'toddler emotional dysregulation', 'toddler meltdowns', 'toddler can\'t calm down', 'toddler extreme crying', 'toddler overreacting', 'toddler emotional', 'toddler can\'t regulate emotions', 'toddler inconsolable', 'toddler dramatic reactions'],
  quickAnswer: 'Big, intense emotions are a hallmark of the toddler years. Toddlers experience feelings as intensely as adults but lack the brain development needed to regulate those emotions. The prefrontal cortex (the brain\'s emotional regulation center) does not fully mature until the mid-20s, and in toddlers it is just beginning to develop. Meltdowns over seemingly small things (the wrong color cup, a broken cracker) are normal because toddlers cannot yet put their feelings into perspective. Your role is to stay calm, validate their feelings, and help them co-regulate, not to stop the emotions.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies rely completely on their caregivers for emotional regulation (co-regulation). A baby who cries intensely and cannot self-soothe is behaving normally for their age. You cannot "spoil" a baby by responding to their cries. Consistent, responsive caregiving actually helps babies develop better emotional regulation over time. Some babies are temperamentally more intense and reactive than others - this is an inborn trait, not a behavior problem.' },
    { ageRange: '1-3 years', context: 'Intense emotional reactions are at their peak between ages 1-3. Toddlers may scream, cry, throw things, hit, or fall to the floor over what seems like a trivial issue. This is normal and expected. What helps: stay calm yourself, validate their emotion ("You are so upset that the cracker broke"), offer comfort (if they want it), wait for the storm to pass, and then talk about it simply. What does not help: reasoning during the meltdown, punishing emotions, saying "stop crying," or giving in to unreasonable demands to prevent meltdowns. Over time, with your help, your child will develop better emotional regulation skills.' },
  ],
  whenNormal: ['Daily meltdowns in a toddler aged 1-3, especially during transitions, when tired, or when hungry', 'Intense reactions that resolve within 15-20 minutes with comfort and support', 'Emotional intensity that gradually improves as language develops', 'A toddler who recovers from meltdowns and returns to happy play'],
  whenToMention: ['Meltdowns are lasting 30+ minutes regularly', 'Your child is having many more meltdowns per day than seems typical for their age', 'Emotional reactions are consistently interfering with daily activities and family functioning', 'You are feeling overwhelmed, burnt out, or at a loss for how to handle the intensity'],
  whenToActNow: ['Your child is physically hurting themselves during meltdowns (severe head banging, biting self)', 'Emotional dysregulation is accompanied by developmental regression', 'Meltdowns are occurring with no identifiable trigger and your child seems distressed or confused', 'You are worried you might lose your patience and harm your child - call a helpline or step away to a safe place'],
  relatedMilestones: ['social-emotional'],
  showSelfReferral: false,
  relatedConcernSlugs: ['tantrums', 'toddler-hitting-own-head', 'separation-anxiety', 'toddler-regression-after-move'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Temper Tantrums. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Temper-Tantrums.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Positive Parenting Tips.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers.html' },
    { org: 'NIH', citation: 'National Library of Medicine. Emotional Regulation in Early Childhood.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
