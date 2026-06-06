import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-refusing-to-walk-pain', title: 'My Toddler Won\'t Walk and Seems in Pain', category: 'physical',
  searchTerms: ['toddler refuses to walk pain', 'toddler won\'t walk hurts', 'toddler crying when walking', 'toddler stopped walking', 'toddler won\'t stand up', 'toddler leg pain can\'t walk', 'toddler refuses weight bear', 'toddler sudden limp pain', 'toddler walk refusal', 'toddler can\'t walk suddenly'],
  quickAnswer: 'A previously walking toddler who suddenly refuses to walk or bear weight needs prompt evaluation. Common causes include a toddler fracture (hairline break in the shin bone), transient synovitis (temporary hip inflammation), septic arthritis, or a foreign body in the foot. This is not an emergency unless accompanied by fever, but same-day evaluation is recommended.',
  byAge: [
    { ageRange: '12-18 months', context: 'The most common cause of refusal to walk at this age is a toddler fracture, a hairline crack in the tibia that can happen from a minor fall or twist. X-rays may initially look normal. Other causes include septic arthritis (joint infection), which requires urgent treatment if fever is present.' },
    { ageRange: '18-24 months', context: 'Same causes apply. Transient synovitis (temporary hip inflammation, often following a viral illness) is also common at this age. Your child may limp or refuse to bear weight. This resolves on its own but needs to be distinguished from septic arthritis.' },
    { ageRange: '2-3 years', context: 'Additional causes include nursemaid\'s elbow (if arm is affected), foreign body in the foot, splinters, and insect bites. Carefully examine feet and legs for any visible cause. If none is found, seek medical evaluation.' },
    { ageRange: '3-5 years', context: 'At this age, your child can usually point to or describe where it hurts. Legg-Calve-Perthes disease and other hip conditions may present with walking refusal. Persistent or recurrent walking refusal warrants imaging.' },
  ],
  whenNormal: ['Brief refusal after a witnessed minor fall, resolving within hours.', 'Your child is limping but still weight-bearing.'],
  whenToMention: ['Your child refuses to walk for more than a few hours.', 'Limping or refusal to walk after a fall.', 'No obvious cause for walking refusal.'],
  whenToActNow: ['Refusal to walk with fever (possible joint infection - urgent).', 'Complete inability to bear any weight.', 'Significant swelling or deformity.'],
  relatedMilestones: ['gross-motor-walking'], showSelfReferral: true,
  relatedConcernSlugs: ['toddler-limping-after-nap', 'toddler-joint-swelling', 'baby-limping'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Limping Child', url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/default.aspx' },
    { org: 'NIH', citation: 'Fischer SU, Beattie TF. The Limping Child: Epidemiology, Assessment and Outcome. J Bone Joint Surg Br. 1999;81(6)', url: 'https://pubmed.ncbi.nlm.nih.gov/10615996/' },
    { org: 'CDC', citation: 'CDC - Child Health', url: 'https://www.cdc.gov/ncbddd/childdevelopment/index.html' },
  ],
};
