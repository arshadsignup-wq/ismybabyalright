import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-flat-feet-normal',
  title: 'My Baby Has Flat Feet - Is This Normal?',
  category: 'physical',
  searchTerms: ['baby flat feet normal', 'baby no arch feet', 'flat feet baby', 'toddler flat feet', 'baby feet flat', 'when do arches develop feet', 'baby flat footed walking', 'flexible flat feet baby', 'toddler flat feet normal', 'baby foot arch development'],
  quickAnswer: 'Flat feet are completely normal in babies and toddlers. Nearly all babies are born with flat feet because a fat pad fills the arch area. Arches typically develop between ages 3-6 as the fat pad decreases and foot muscles strengthen. Most children with flat feet have no symptoms and need no treatment.',
  byAge: [
    { ageRange: '0-12 months', context: 'All babies have flat feet. The arch area is filled with a fat pad that provides cushioning. Flat feet at this age are completely normal and expected.' },
    { ageRange: '12-24 months', context: 'Flat feet are still normal as your toddler begins walking. The fat pad is still present. Walking barefoot on various surfaces helps strengthen foot muscles that will eventually form the arch.' },
    { ageRange: '2-3 years', context: 'Arches may begin to develop, though many children still appear flat-footed. Flexible flat feet (the arch appears when standing on tiptoes) are almost always normal and do not need treatment.' },
    { ageRange: '3-6 years', context: 'Arches continue to develop. By age 6, most children have visible arches. If flat feet persist, are rigid, or cause pain, a pediatric orthopedist can evaluate. Most cases of persistent flat feet in childhood are flexible and painless.' },
  ],
  whenNormal: ['Your baby or toddler has flat feet - this is universal at this age.', 'Flat feet are flexible (arch appears on tiptoes).', 'No pain or difficulty with walking or running.', 'Both feet are equally affected.'],
  whenToMention: ['Flat feet are rigid (arch never appears, even on tiptoes).', 'Your child has foot pain or tires easily when walking.', 'Only one foot is flat while the other has an arch.'],
  whenToActNow: ['Sudden change in foot shape.', 'Foot pain or swelling.'],
  relatedMilestones: ['gross-motor-walking', 'gross-motor-running'],
  showSelfReferral: false,
  relatedConcernSlugs: ['flat-feet', 'baby-high-arches-feet', 'baby-foot-turned-outward'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Flat Feet and Fallen Arches', url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Flat-Feet-Fallen-Arches.aspx' },
    { org: 'NIH', citation: 'Halabchi F, et al. Pediatric Flexible Flatfoot: Clinical Aspects and Algorithmic Approach. Iran J Pediatr. 2013;23(3)', url: 'https://pubmed.ncbi.nlm.nih.gov/23795246/' },
    { org: 'CDC', citation: 'CDC - Child Health', url: 'https://www.cdc.gov/ncbddd/childdevelopment/index.html' },
  ],
};
