import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-tripping-falling-often',
  title: 'My Toddler Trips and Falls Constantly',
  category: 'physical',
  searchTerms: [
    'toddler falls a lot',
    'toddler tripping all the time',
    'toddler falls down constantly',
    'toddler clumsy falling',
    'toddler trips over own feet',
    'toddler falls more than normal',
    'is it normal for toddler to fall so much',
    'toddler unsteady walking',
    'toddler stumbles frequently',
    'how much falling is normal toddler',
  ],
  quickAnswer:
    'Frequent tripping and falling is extremely common in toddlers and is usually a normal part of development. Toddlers are still developing balance, coordination, and spatial awareness while moving at speeds their bodies are not quite ready for. Most toddlers become steadier by age 2-3, though some clumsiness is normal well into the preschool years.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'New walkers fall a lot, and this is completely expected. Studies show that toddlers in this age range may fall 17 or more times per hour when walking. Their balance system is still maturing, and they are learning to navigate different surfaces, obstacles, and speeds. Frequent falls at this age are a sign that your baby is practicing and improving.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Falls become less frequent as walking becomes more coordinated, but toddlers at this age are also starting to run, climb, and move faster, which creates new opportunities for tripping. Some increase in falls during this period is actually normal as your child pushes their physical limits.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 2, walking should be fairly steady, but running and playing can still lead to falls. If your child falls very frequently during simple walking on flat surfaces, or if falls are getting worse rather than better, this is worth discussing with your pediatrician.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Occasional tripping is still normal, but persistent, frequent falling at this age should be evaluated. Your pediatrician may check for vision problems, low muscle tone, joint hypermobility, or coordination difficulties. Physical therapy can be very helpful for children with persistent balance issues.',
    },
  ],
  whenNormal: [
    'Your child is under 2 years old and falls mainly happen during running or on uneven surfaces.',
    'Falls are becoming less frequent over time.',
    'Your child gets up easily after falling and is not hurt.',
    'Falls happen when your child is tired, distracted, or moving fast.',
  ],
  whenToMention: [
    'Your child is over 2 years old and falls frequently on flat surfaces during simple walking.',
    'Falls seem to be getting more frequent rather than less.',
    'Your child trips or falls much more than peers the same age.',
    'Your child seems to have difficulty seeing obstacles or navigating around objects.',
  ],
  whenToActNow: [
    'Your child was previously steady and has suddenly started falling frequently.',
    'Falls are accompanied by confusion, headaches, or changes in alertness.',
    'Your child falls to one side consistently, suggesting a balance or neurological issue.',
  ],
  relatedMilestones: [
    'gross-motor-walking',
    'gross-motor-running',
    'gross-motor-balance',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['frequent-falling', 'toddler-clumsy-coordination', 'poor-balance-toddler'],
  sources: [
    {
      org: 'NIH',
      citation:
        'Adolph KE, et al. How Do You Learn to Walk? Thousands of Steps and Dozens of Falls per Day. Psychological Science. 2012;23(11):1387-1394',
      url: 'https://pubmed.ncbi.nlm.nih.gov/23085640/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Movement: 18 Months to 2 Years',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Movement-18-Months-to-2-Years.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Child By 2 Years',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
    },
  ],
};
