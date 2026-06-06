import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'baby-clicking-joints', title: 'My Baby\'s Joints Click and Pop', category: 'physical',
  searchTerms: ['baby joints clicking', 'baby joints popping', 'baby knees clicking', 'baby hips clicking', 'baby crackling joints', 'baby ankles click', 'baby wrists pop', 'baby joint sounds', 'baby crepitus', 'baby noisy joints'],
  quickAnswer: 'Joint clicking and popping in babies is very common and usually harmless. Baby joints are surrounded by developing ligaments and tendons that can create sounds as they move. The most important clicking to report is hip clicking, as it can indicate hip dysplasia. Other joint clicking is almost always benign.',
  byAge: [
    { ageRange: '0-6 months', context: 'Hip clicks are screened for at every well visit because they can indicate developmental hip dysplasia. Knee, ankle, wrist, and other joint clicks are very common and almost always normal in this age group.' },
    { ageRange: '6-12 months', context: 'Joints may continue to click as your baby becomes more mobile. As long as there is no pain, swelling, or limitation of movement, clicking is benign. Report any hip clicking to your pediatrician.' },
    { ageRange: '12-24 months', context: 'Active toddlers may have clicking joints, especially knees and ankles. This is normal. If clicking is accompanied by pain or swelling, evaluation is needed.' },
    { ageRange: '2-4 years', context: 'Joint clicking remains common and harmless in most children. Very flexible (hypermobile) children may have more frequent clicking. If any joint swells, locks, or is painful, see your pediatrician.' },
  ],
  whenNormal: ['Painless clicking in various joints.', 'No swelling or redness around joints.', 'Full, pain-free range of motion.', 'Clicking is intermittent, not constant.'],
  whenToMention: ['Hip clicking, especially in newborns.', 'Clicking with loss of range of motion.', 'Clicking that seems to be increasing.'],
  whenToActNow: ['Joint swelling, warmth, or redness.', 'Joint locking or inability to move a joint.', 'Pain with joint movement.'],
  relatedMilestones: ['gross-motor-crawling', 'gross-motor-walking'], showSelfReferral: false,
  relatedConcernSlugs: ['baby-flexible-joints-hypermobility', 'hip-dysplasia', 'toddler-joint-swelling'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Hip Dysplasia', url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Hip-Dysplasia.aspx' },
    { org: 'NIH', citation: 'Aronsson DD, et al. Developmental Dysplasia of the Hip. Pediatrics. 1994;94(2)', url: 'https://pubmed.ncbi.nlm.nih.gov/8036085/' },
    { org: 'CDC', citation: 'CDC - Child Health', url: 'https://www.cdc.gov/ncbddd/childdevelopment/index.html' },
  ],
};
