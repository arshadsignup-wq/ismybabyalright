import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-nail-biting-habit', title: 'Toddler Nail Biting Habit', category: 'behavior',
  searchTerms: ['toddler nail biting','child biting nails','toddler chews nails','nail biting habit toddler','stop toddler nail biting','toddler bites fingernails','nail biting anxiety child','toddler nails bitten down','child nail biting cause','toddler nervous nail biting'],
  quickAnswer: 'Nail biting is one of the most common childhood habits, affecting up to 30% of children. It often begins around age 3-4 and can continue through adolescence. Children bite their nails for many reasons: boredom, curiosity, stress relief, habit, or simply because a rough nail edge catches their attention. For most children, nail biting is harmless and they outgrow it. Drawing excessive attention to it usually makes it worse.',
  byAge: [
    { ageRange: '12-24 months', context: 'Nail biting is uncommon at this age. If your baby chews on their fingers, it is usually related to teething or oral exploration rather than a habit. Keep nails trimmed short to prevent accidental injury.' },
    { ageRange: '2-3 years', context: 'Nail biting may emerge as a self-soothing or oral sensory behavior. If you notice it, try not to draw attention to it. Keep nails trimmed and smooth (rough edges are inviting to chew). Provide alternative oral sensory input if your child seems to seek it: crunchy snacks, chewy toys.' },
    { ageRange: '3-5 years', context: 'This is the most common age for nail biting to develop. It often becomes a mindless habit during boredom, watching TV, or riding in the car. Avoid nagging or punishing. Instead, gently offer alternatives: "I notice your fingers are in your mouth. Want to hold this squishy ball instead?"' },
    { ageRange: '5-7 years', context: 'If nail biting persists, your child may be old enough to participate in stopping. Use gentle awareness building, not shame. Nail polish (even clear) can serve as a visual reminder. If nail biting is severe (causing bleeding or infection), consult your pediatrician.' },
  ],
  whenNormal: ['Occasional nail biting that does not cause injury','Nail biting during specific activities like watching TV','Your child can stop when gently reminded','Nails are bitten but not to the point of pain or bleeding'],
  whenToMention: ['Nail biting is severe enough to cause bleeding or infection','Your child cannot stop even when they want to','Nail biting is accompanied by other repetitive behaviors','Your child seems very anxious and nail biting is a coping mechanism'],
  whenToActNow: ['Nails or surrounding skin are infected','Nail biting has caused significant tissue damage'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Habits. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/Habits.aspx' },
    { org: 'NIH', citation: 'Tanaka OM et al. Nail biting, or onychophagia: a special habit. Am J Orthod Dentofacial Orthop. 2008;134(2):305-308.', url: 'https://pubmed.ncbi.nlm.nih.gov/18675214/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Children\'s Mental Health.', url: 'https://www.cdc.gov/childrensmentalhealth/index.html' },
  ],
  relatedConcernSlugs: ['toddler-nose-picking-habit','toddler-anxiety-signs-early','toddler-tic-motor-vocal','toddler-comfort-object-dependency'],
};
