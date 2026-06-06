import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-high-arches-feet',
  title: 'My Baby Has High Arched Feet',
  category: 'physical',
  searchTerms: ['baby high arches', 'baby cavus feet', 'baby arched feet', 'pes cavus baby', 'baby high arch concern', 'baby feet high arches', 'toddler high arched feet', 'baby curved foot top', 'high instep baby', 'baby foot arch too high'],
  quickAnswer: 'High arched feet (pes cavus) are less common than flat feet in babies and should be evaluated. While some families have naturally high arches, in children, pes cavus can occasionally be associated with neurological conditions. A pediatric orthopedist can assess whether the high arches are a benign family trait or warrant further investigation.',
  byAge: [
    { ageRange: '0-6 months', context: 'Very high arches in a baby should be mentioned to your pediatrician. They may check family foot structure and assess your baby\'s neurological development. If high arches run in the family, they may be benign.' },
    { ageRange: '6-12 months', context: 'If high arches persist and are accompanied by tight muscles or unusual gait patterns, evaluation by a pediatric orthopedist is recommended. Many children with high arches function perfectly normally.' },
    { ageRange: '12-24 months', context: 'As your child begins walking, observe whether the high arches affect balance or gait. If your child walks comfortably, high arches may simply be their foot structure. If they have difficulty, supportive shoes may help.' },
    { ageRange: '2-4 years', context: 'Persistent high arches that are progressing, painful, or affecting walking should be evaluated by a specialist. Conditions like Charcot-Marie-Tooth disease can present with high arches and deserve early identification.' },
  ],
  whenNormal: ['High arches run in the family.', 'Your child walks and runs comfortably.', 'No pain or balance problems.', 'Both feet are equally affected.'],
  whenToMention: ['High arches are very pronounced.', 'Your child has difficulty with balance or shoe fitting.', 'High arches are worsening over time.'],
  whenToActNow: ['High arches with foot drop or progressive weakness.', 'Pain or significant functional limitation.'],
  relatedMilestones: ['gross-motor-walking'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-flat-feet-normal', 'baby-foot-turned-inward', 'toe-walking'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Foot Problems in Children', url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/default.aspx' },
    { org: 'NIH', citation: 'Schwend RM, Drennan JC. Cavus Foot Deformity in Children. J Am Acad Orthop Surg. 2003;11(3)', url: 'https://pubmed.ncbi.nlm.nih.gov/12828449/' },
    { org: 'CDC', citation: 'CDC - Child Health', url: 'https://www.cdc.gov/ncbddd/childdevelopment/index.html' },
  ],
};
