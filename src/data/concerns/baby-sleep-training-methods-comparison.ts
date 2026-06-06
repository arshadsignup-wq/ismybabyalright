import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-sleep-training-methods-comparison',
  title: 'Sleep Training Methods Compared',
  category: 'sleep',
  searchTerms: ['sleep training methods comparison','which sleep training method best','types of sleep training','CIO vs Ferber vs gentle','sleep training options','baby sleep training approaches','graduated extinction vs extinction','pick up put down method','chair method sleep training','sleep training method comparison'],
  quickAnswer: 'There are several evidence-based sleep training approaches, ranging from gradual methods with lots of parental presence to more direct methods with less intervention. No single method is best for all families. Research shows that multiple approaches are effective and safe. The best method is one that you can implement consistently and that aligns with your parenting values.',
  byAge: [
    { ageRange: '0-4 months', context: 'Formal sleep training is not recommended before 4 months. Focus instead on developing healthy sleep habits: a consistent sleep environment, following wake windows, and establishing a bedtime routine. Gentle strategies like shush-pat, swinging, and consistent put-down practices can lay the groundwork.' },
    { ageRange: '4-6 months', context: 'Most experts agree that sleep training can begin around 4-6 months when circadian rhythm is established. Methods include: Full extinction (CIO) - placing baby down and not returning until morning; Graduated extinction (Ferber) - checking at increasing intervals; Chair method - sitting by the crib and gradually moving away; Pick-up-put-down - picking up when crying, putting down when calm. All have research support.' },
    { ageRange: '6-12 months', context: 'This is a common window for sleep training. Your baby has the developmental capacity for independent sleep. Consider your baby\'s temperament: some sensitive babies do better with gradual methods, while some babies are more stimulated by parental check-ins. You may need to try more than one approach. Give each method at least 5-7 consistent nights before deciding it is not working.' },
    { ageRange: '12-24 months', context: 'Sleep training toddlers is possible but can take longer because habits are more ingrained. Verbal toddlers can understand simple rules. Gradual methods often work better at this age because toddlers can protest more intensely. The chair method and gradual retreat tend to be well-tolerated. A clear, predictable plan that you communicate in simple terms helps your toddler understand what to expect.' },
  ],
  whenNormal: ['You feel conflicted about sleep training - this is a normal parental response','One method does not work and you need to try another','Sleep improves but is not perfect - some night wakings may continue','Progress is not linear and there may be setback nights'],
  whenToMention: ['You have tried multiple methods for several weeks with no improvement','You want professional guidance from a pediatrician or certified sleep consultant','Your baby has health conditions that may affect which methods are appropriate'],
  whenToActNow: ['Sleep deprivation is causing you to feel unsafe while caring for your baby','You are falling asleep in unsafe conditions such as on a couch or recliner while holding your baby'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Sleep Training: Is It Safe? HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/default.aspx' },
    { org: 'NIH', citation: 'Mindell JA et al. Behavioral treatment of bedtime problems and night wakings in infants and young children. Sleep. 2006;29(10):1263-1276.', url: 'https://pubmed.ncbi.nlm.nih.gov/17068979/' },
    { org: 'NIH', citation: 'Gradisar M et al. Behavioral interventions for infant sleep problems: a randomized controlled trial. Pediatrics. 2016;137(6):e20151486.', url: 'https://pubmed.ncbi.nlm.nih.gov/27221288/' },
  ],
  relatedConcernSlugs: ['baby-cry-it-out-safety','baby-ferber-method-concerns','baby-gentle-sleep-training','baby-sleep-training-not-working','sleep-training-guilt-methods'],
};
