import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'free-range-parenting-safety',
  title: 'Free-Range Parenting Safety Balance',
  category: 'behavior',
  searchTerms: [
    'free range parenting toddler safe',
    'letting toddler play independently outside',
    'is free range parenting neglect',
    'age appropriate independence toddler',
    'when can child play outside alone',
    'risky play benefits children',
    'adventure playground toddler',
    'building independence in toddlers safely',
  ],
  quickAnswer:
    'Free-range parenting emphasizes giving children age-appropriate independence to explore, take risks, and build confidence. Research supports the benefits of unstructured play and moderate risk-taking for child development. The challenge is finding the right balance between fostering independence and ensuring safety. For babies and toddlers, "free-range" means allowing exploration within supervised, safe environments — not unsupervised independence, which is not appropriate until children are significantly older.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns require constant supervision and responsive care. Free-range principles do not apply at this age. Focus on building a secure attachment through consistent, nurturing responses.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Allow babies to explore through tummy time, reaching, and mouthing objects in a safe space. Resist the urge to constantly reposition them — let them work through physical challenges on their own timeline.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Baby-proof the environment and then let your baby explore within it. Crawling babies benefit from having safe spaces to roam. Allow them to encounter minor challenges — reaching for objects slightly out of grasp, navigating around furniture — while you supervise at a comfortable distance.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers can begin making simple choices, climbing age-appropriate structures with supervision, and playing in fenced outdoor areas. "Risky play" — climbing, jumping, rough-and-tumble — is beneficial for motor development and confidence. The key is supervising without intervening unless there is genuine danger. Full unsupervised outdoor play is not appropriate for toddlers.',
    },
  ],
  whenNormal: [
    'You allow your baby or toddler to explore within safe, supervised environments without constantly intervening',
    'Your toddler takes minor tumbles during play and you comfort them without overreacting',
    'You balance safety precautions with opportunities for age-appropriate challenges and independence',
    'You are working to find a balance between your own anxiety and your child\'s need for exploration',
  ],
  whenToMention: [
    'You are unsure whether your child\'s environment is adequately safe for the independence you are providing',
    'Family members or caregivers have significantly different philosophies about independence and supervision, causing conflict',
    'You feel pressure to allow more independence than feels safe for your child\'s age and developmental level',
  ],
  whenToActNow: [
    'Your child has been injured in a situation where supervision was inadequate for their developmental stage',
    'Lack of supervision has resulted in a dangerous situation — a toddler accessing a road, pool, or hazardous materials without adult awareness',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'helicopter-parenting-effects',
    'water-safety-drowning-prevention',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Power of Play: A Pediatric Role in Enhancing Development. Pediatrics. 2018.',
      url: 'https://publications.aap.org/pediatrics/article/142/3/e20182058/38649/The-Power-of-Play-A-Pediatric-Role-in-Enhancing',
    },
    {
      org: 'NIH',
      citation:
        'Brussoni, M. et al. What is the Relationship between Risky Outdoor Play and Health in Children? A Systematic Review. International Journal of Environmental Research and Public Health. 2015.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/26062038/',
    },
  ],
};
