import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-orthopedic-referral-signs',
  title: 'Does My Baby Need to See an Orthopedist?',
  category: 'physical',
  searchTerms: ['baby orthopedic referral', 'baby needs orthopedist', 'pediatric orthopedic signs', 'baby bone problem signs', 'baby joint problem signs', 'toddler orthopedic concerns', 'baby leg alignment concern', 'baby hip click orthopedist', 'baby foot problem specialist', 'when to see pediatric orthopedist'],
  quickAnswer: 'A pediatric orthopedist specializes in bone, joint, and muscle conditions in children. Your pediatrician may recommend an orthopedic referral if your baby or toddler has a hip click or asymmetry, persistent foot deformity, abnormal leg alignment, limping, joint swelling, or a bone/skeletal concern. Many childhood orthopedic conditions are normal variations that resolve on their own, but some require treatment that works best when started early.',
  byAge: [
    { ageRange: '0-6 months', context: 'Common reasons for orthopedic referral at this age include hip dysplasia (detected by hip click or ultrasound), clubfoot, metatarsus adductus (curved foot), and torticollis with associated skull asymmetry. Early treatment for these conditions is highly effective.' },
    { ageRange: '6-12 months', context: 'Referral may be needed for hip asymmetry (uneven leg creases or limited movement), persistent foot turning, or unusual posture when sitting or standing. If your baby is not bearing weight appropriately, an orthopedic evaluation can help determine whether there is a structural cause.' },
    { ageRange: '12-24 months', context: 'Common referral reasons include persistent toe walking, significant bowed legs beyond 18 months, leg length discrepancy, limping, or refusal to walk due to pain. Mild bow legs are normal in early walkers but should be improving by this age.' },
    { ageRange: '2-4 years', context: 'Referral may be appropriate for severe knock knees, flat feet with pain, in-toeing that causes frequent tripping, limping, or joint swelling. Most alignment issues in this age group are normal variations, but an orthopedist can confirm this and provide reassurance.' },
  ],
  whenNormal: ['Mild bow legs in a child under 2 years.', 'Flat feet in a toddler who just started walking.', 'Occasional in-toeing that does not cause functional problems.', 'Flexible feet that can be gently moved to a normal position.'],
  whenToMention: ['One leg looks different from the other.', 'Your child\'s leg alignment is not improving with age.', 'Persistent foot turning in or out.', 'Your child complains of bone or joint pain.'],
  whenToActNow: ['Your baby has a hip click or leg length difference.', 'Joint swelling, redness, or warmth.', 'Your child limps or refuses to bear weight.', 'Progressive deformity of legs, feet, or spine.'],
  relatedMilestones: ['gross-motor-walking', 'gross-motor-standing'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-physical-therapy-when-needed', 'baby-foot-turned-inward', 'baby-genu-varum-bowed-legs-persistent', 'toddler-limping-after-nap'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Orthopedic Conditions', url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/default.aspx' },
    { org: 'NIH', citation: 'Staheli LT. Practice of Pediatric Orthopedics. 2nd ed. Lippincott Williams & Wilkins; 2006', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
    { org: 'CDC', citation: 'CDC - Child Health', url: 'https://www.cdc.gov/ncbddd/childdevelopment/index.html' },
  ],
};
