import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-foot-turned-outward',
  title: 'My Baby\'s Feet Turn Outward (Out-Toeing)',
  category: 'physical',
  searchTerms: ['baby feet turn outward', 'baby out-toeing', 'baby duck feet', 'baby feet point outward', 'toddler feet outward', 'out-toeing baby', 'baby external rotation feet', 'toddler walks feet out', 'baby foot points sideways', 'outward foot rotation baby'],
  quickAnswer: 'Out-toeing (feet pointing outward) is common in babies and toddlers and usually resolves on its own. It is often caused by the position of the legs in the womb. Most children outgrow out-toeing by age 2-3. If it persists, worsens, causes tripping, or affects only one foot, evaluation is recommended.',
  byAge: [
    { ageRange: '0-6 months', context: 'External rotation of the feet and legs is common in babies and often related to womb positioning. As your baby grows and becomes more active, the rotation typically decreases.' },
    { ageRange: '6-12 months', context: 'As your baby starts standing and cruising, you may notice the feet pointing outward. This is common and usually resolves as leg muscles strengthen and the bones gradually rotate inward to their normal adult position.' },
    { ageRange: '12-24 months', context: 'Mild out-toeing when walking is common in new walkers. If it is getting better over time and your child walks comfortably, no treatment is needed. Significant out-toeing that causes tripping should be evaluated.' },
    { ageRange: '2-4 years', context: 'Most out-toeing resolves by age 3. If it persists, especially on one side, or if your child has flat feet, hip pain, or difficulty running, a pediatric orthopedist can evaluate.' },
  ],
  whenNormal: ['Both feet are equally affected.', 'Out-toeing is improving over time.', 'Your child walks comfortably.', 'There is no pain or limping.'],
  whenToMention: ['Out-toeing is only on one side.', 'Out-toeing is worsening.', 'Your child trips frequently due to foot position.'],
  whenToActNow: ['Sudden onset of out-toeing.', 'Pain, limping, or refusal to walk alongside out-toeing.'],
  relatedMilestones: ['gross-motor-walking'],
  showSelfReferral: true,
  relatedConcernSlugs: ['pigeon-toed', 'baby-foot-turned-inward', 'flat-feet'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Common Leg and Foot Problems', url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/default.aspx' },
    { org: 'NIH', citation: 'Staheli LT. Rotational Problems in Children. J Bone Joint Surg Am. 1993;75(6)', url: 'https://pubmed.ncbi.nlm.nih.gov/8509749/' },
    { org: 'CDC', citation: 'CDC - Child Health', url: 'https://www.cdc.gov/ncbddd/childdevelopment/index.html' },
  ],
};
