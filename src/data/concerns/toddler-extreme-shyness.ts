import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-extreme-shyness',
  title: 'Toddler Extreme Shyness - When Shyness Is More Than Temperament',
  category: 'behavior',
  searchTerms: ['toddler extreme shyness','toddler very shy','toddler won\'t talk to anyone','toddler hides behind parents','toddler afraid of strangers','toddler selective mutism','toddler social anxiety','toddler cries around new people','toddler won\'t warm up','extremely shy child','shy toddler won\'t participate','when shy is too shy toddler'],
  quickAnswer: 'Shyness and slow-to-warm temperament are normal personality traits found in about 15-20% of children. Shy toddlers need more time to observe before engaging and may cling to parents in new situations. This is not a disorder and usually does not need treatment. However, extreme shyness that prevents your child from functioning - refusing to speak outside the home (selective mutism), extreme distress in all social situations, or inability to separate from parents in any context - may indicate social anxiety and benefit from professional support.',
  byAge: [
    { ageRange: '6-12 months', context: 'Stranger anxiety is a normal developmental milestone that peaks around 8-12 months. Your baby may cry when unfamiliar people approach, cling to you, or bury their face in your chest. This shows healthy attachment - your baby can distinguish familiar people from strangers. Do not force your baby to be held by people they are afraid of. Let them observe from the safety of your arms and warm up at their own pace. Stranger anxiety typically improves by 18-24 months.' },
    { ageRange: '12-24 months', context: 'Many toddlers go through a clingy, shy phase, especially if they are naturally introverted. They may hide behind you, refuse to greet people, or cry in new environments. This is within the range of normal temperament. Help them by: arriving early to events so they can warm up before it gets crowded, staying close while they observe, narrating what they see ("That boy is building blocks. That looks fun"), and never labeling them as "shy" in front of them.' },
    { ageRange: '2-3 years', context: 'Most shy toddlers warm up within 15-30 minutes in new situations. If your child takes longer but eventually engages, this is slow-to-warm temperament - a normal variation. If your child never warms up, cries for the entire duration of social events, or is so fearful that they cannot enjoy activities, this may be beyond typical shyness. Selective mutism (speaking normally at home but not speaking at all in certain settings like daycare) often emerges at this age and responds well to early intervention.' },
    { ageRange: '3-4 years', context: 'By this age, most children can separate from parents for preschool or activities, even if reluctantly. If your child has intense prolonged distress at every separation, refuses to speak outside the home, cannot participate in group activities even after months of exposure, or their shyness is getting worse rather than better, consult your pediatrician. Early intervention for social anxiety and selective mutism is very effective. Cognitive-behavioral therapy adapted for young children and gradual exposure are the most evidence-based approaches.' },
  ],
  whenNormal: ['Your toddler is shy at first but warms up after 15-30 minutes in new situations','Your child is talkative and outgoing at home but quieter in public','Your child has at least one or two friends they are comfortable playing with','Shyness is gradually improving as your child has more social experiences'],
  whenToMention: ['Your child does not warm up even after 30+ minutes in a familiar setting','Your child speaks normally at home but does not speak at all at daycare or school','Shyness is getting worse over time rather than improving','Your child\'s shyness prevents them from participating in age-appropriate activities'],
  whenToActNow: ['Your child has extreme separation anxiety that prevents them from attending daycare or being with any other caregiver','Your child has not spoken a word outside the home for a month or more','Your child seems terrified rather than just uncomfortable in social situations'],
  relatedMilestones: ['social-emotional-regulation'],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-delayed-social-skills','toddler-separation-anxiety-extreme','baby-not-interested-in-people'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Shy Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/gradeschool/Pages/Shyness-in-Children.aspx' },
    { org: 'NIH', citation: 'Kagan J, et al. Temperamental Factors in Human Development. American Psychologist. 1998.', url: 'https://pubmed.ncbi.nlm.nih.gov/9491746/' },
    { org: 'NIH', citation: 'Bergman RL, et al. Prevalence and Description of Selective Mutism in a School-Based Sample. Journal of the American Academy of Child and Adolescent Psychiatry. 2002.', url: 'https://pubmed.ncbi.nlm.nih.gov/12162630/' },
  ],
};
