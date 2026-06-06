import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-growing-pains-legs',
  title: 'My Toddler Has Leg Pains at Night',
  category: 'physical',
  searchTerms: ['toddler growing pains', 'toddler leg pain night', 'toddler legs hurt bedtime', 'growing pains toddler', 'toddler leg aches', 'toddler wakes up leg pain', 'toddler cries legs hurt', 'toddler thigh pain night', 'growing pains age start', 'toddler shin pain night'],
  quickAnswer: 'Growing pains are common, affecting up to 40% of children, and typically begin between ages 2-4. They cause aching pain in the legs, usually in the evening or at night, and do not cause limping or joint swelling. Massage, warm compresses, and gentle stretching usually help. If your child limps, has joint swelling, or has daytime pain, other causes should be evaluated.',
  byAge: [
    { ageRange: '18-24 months', context: 'Growing pains can start as early as age 2. They typically cause bilateral (both legs) aching in the thighs, calves, or behind the knees. The pain comes and goes, usually in the evening, and resolves by morning. If your toddler is too young to describe pain, they may be fussy or wake at night.' },
    { ageRange: '2-3 years', context: 'This is a common age for growing pains to begin. The pattern is classic: bilateral leg pain in the evening or night that resolves completely by morning. Your child should walk normally during the day with no pain. Massage and warmth are effective treatments.' },
    { ageRange: '3-4 years', context: 'Growing pains may continue and are still normal. Episodes may occur several times a week or month and then resolve for periods. As long as the pattern is consistent (night, bilateral, no limping, no swelling), growing pains are the most likely cause.' },
    { ageRange: '4-6 years', context: 'Growing pains can persist into the school years and typically resolve by mid-childhood. If pain becomes more severe, persistent, or one-sided, evaluation for other causes is recommended.' },
  ],
  whenNormal: ['Pain occurs in the evening or night and is gone by morning.', 'Pain is in both legs, not just one.', 'Your child walks and plays normally during the day.', 'Massage or warmth relieves the pain.'],
  whenToMention: ['Pain is persistent during the day.', 'Pain is always in the same location.', 'Pain is worsening over time.'],
  whenToActNow: ['Your child limps or refuses to walk.', 'Joint swelling, redness, or warmth is present.', 'Pain is accompanied by fever or weight loss.'],
  relatedMilestones: ['growth-length'],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-limping-after-nap', 'toddler-refusing-to-walk-pain'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Growing Pains', url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Growing-Pains-Are-Normal-Most-of-the-Time.aspx' },
    { org: 'NIH', citation: 'Evans AM. Growing Pains: Contemporary Knowledge and Recommended Practice. J Foot Ankle Res. 2008;1(1):4', url: 'https://pubmed.ncbi.nlm.nih.gov/18822152/' },
    { org: 'CDC', citation: 'CDC - Child Health', url: 'https://www.cdc.gov/ncbddd/childdevelopment/index.html' },
  ],
};
