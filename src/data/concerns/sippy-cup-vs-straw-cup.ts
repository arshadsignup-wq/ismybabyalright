import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'sippy-cup-vs-straw-cup',
  title: 'Sippy Cup vs Straw Cup: Which Is Better?',
  category: 'feeding',
  searchTerms: ['sippy cup vs straw cup', 'which cup type baby', 'straw cup better than sippy', 'best cup for baby', 'sippy cup bad for teeth', 'straw cup benefits', '360 cup vs straw cup', 'cup type baby toddler', 'speech development cup', 'sippy cup problems'],
  quickAnswer: 'Speech therapists and pediatric dentists generally recommend straw cups and open cups over traditional spout sippy cups. Sippy cups require a sucking motion similar to a bottle, while straw cups develop more mature oral motor patterns important for speech. Open cups help develop lip and jaw control. If you use a sippy cup, consider it a transitional tool rather than a long-term solution.',
  byAge: [
    { ageRange: '0-3 months', context: 'Cups are not appropriate at this age. Breast or bottle feeding only.' },
    { ageRange: '4-6 months', context: 'Around 6 months, you can introduce an open cup (held by you) for small sips of water. This builds the best oral motor patterns from the start.' },
    { ageRange: '6-9 months', context: 'Offer a straw cup or open cup for practice. A weighted straw cup can be easier for baby to manage. If using a sippy cup, it is fine for transition but plan to move to a straw or open cup.' },
    { ageRange: '9-12 months', context: 'Baby should be getting comfortable with a cup type. Straw cups encourage a more mature swallowing pattern than sippy cups. Try a short straw or use the straw-dipping technique to teach straw drinking.' },
    { ageRange: '12-24 months', context: 'Aim to move past traditional sippy cups. Straw cups and open cups (with some spillage) are the best options. 360 cups are a popular choice but some speech therapists note they still require a sucking pattern. Open cups with handles are great for mealtimes.' },
  ],
  whenNormal: ['Baby prefers one cup type over another', 'Baby takes time to learn any new cup type', 'Baby uses a sippy cup as a transition before learning straw or open cup'],
  whenToMention: ['Baby is over 15 months and cannot drink from anything other than a bottle or sippy cup', 'You are concerned about your child\'s oral motor development', 'Baby has difficulty with cup drinking despite regular practice'],
  whenToActNow: ['Baby cannot drink from any vessel and is not getting adequate fluids', 'Baby has difficulty swallowing from any cup type'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-wont-drink-from-cup', 'straw-cup-training-difficulty', 'bottle-to-cup-transition-timing'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Cup Choices for Toddlers. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Cup Drinking and Oral Motor Development. American Journal of Speech-Language Pathology, 2020.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
