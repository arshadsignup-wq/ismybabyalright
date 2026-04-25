import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'floppy-baby-syndrome',
  title: 'My Baby Seems Floppy (Hypotonia)',
  category: 'physical',
  searchTerms: [
    'floppy baby syndrome',
    'baby feels like a rag doll',
    'my baby is too floppy',
    'baby has no muscle tone',
    'baby slips through my hands',
    'infant hypotonia signs',
    'newborn floppy when picked up',
    'baby feels limp when held',
    'benign congenital hypotonia',
    'baby flops over when sitting',
  ],
  quickAnswer:
    'A "floppy" baby is one whose muscles feel unusually relaxed and who may slip through your hands when you lift them under the arms. Many cases of mild floppiness improve on their own as your baby grows stronger, but it is important to have your pediatrician evaluate your baby to rule out any underlying conditions.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Newborns naturally have lower muscle tone than older babies, and premature infants may feel especially floppy. A baby born at term should show some flexion in their arms and legs when at rest and offer some resistance when you extend their limbs. Significant head lag when gently pulling from lying to sitting is expected at this age, but your baby should still show some effort. If your baby feels completely limp, does not move their limbs much, or has difficulty feeding, let your pediatrician know right away.',
    },
    {
      ageRange: '3-5 months',
      context:
        'By 3 months, most babies have noticeably improved head control and can briefly hold their head steady when held upright. During tummy time, they should be lifting their head and beginning to push up on their forearms. A baby who still feels very floppy at this age, cannot lift their head during tummy time, or slips through your hands when lifted under the arms should be evaluated. Your pediatrician may order blood tests or refer you to a pediatric neurologist.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Babies are typically sitting with support and working toward sitting independently. A baby with significant hypotonia may struggle with sitting, have difficulty bearing weight on their legs when held in a standing position, and may feel like they fold in half when you try to sit them up. Many babies with mild or benign hypotonia are making progress by this point, especially if they are receiving physical therapy. The distinction between a baby who is progressing slowly and one who is not progressing at all is important.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Most babies are pulling to stand, cruising, and preparing to walk. Babies with hypotonia may reach these milestones later, and that is often okay if they are making steady progress. Physical therapy can be very helpful in building strength and confidence. If your baby shows no interest in weight-bearing, seems to be losing skills rather than gaining them, or has additional concerns like feeding difficulties or developmental regression, your pediatrician will want to investigate further.',
    },
  ],
  whenNormal: [
    'Your baby feels a little softer or more relaxed than other babies but is still meeting motor milestones within the expected timeframe.',
    'Your premature baby has lower tone that is gradually improving as they approach their adjusted age milestones.',
    'Your baby is more flexible or "bendy" than average but is gaining strength and progressing through motor skills.',
    'There is a family history of being very flexible or having loose joints, and your baby is otherwise developing well.',
  ],
  whenToMention: [
    'Your baby consistently slips through your hands when you lift them under the arms.',
    'Your baby is significantly delayed in motor milestones like head control, rolling, or sitting, and seems to have difficulty building strength.',
    'Your baby tires very quickly during tummy time or physical play and does not seem to be getting stronger over time.',
  ],
  whenToActNow: [
    'Your baby suddenly becomes much floppier than usual, is less responsive, or has a noticeable change in alertness or feeding ability.',
    'Your baby has significant floppiness combined with difficulty breathing, feeding problems, a weak cry, or failure to gain weight.',
  ],
  relatedMilestones: [
    'gross-motor-head-control',
    'gross-motor-rolling',
    'gross-motor-sitting',
    'gross-motor-pulling-to-stand',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Floppy Infant: Evaluation of Hypotonia. Pediatrics in Review. 2005.',
      url: 'https://publications.aap.org/pediatricsinreview/article/26/5/169/62083/The-Floppy-Infant',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Neurological Disorders and Stroke. Hypotonia Information Page.',
      url: 'https://www.ninds.nih.gov/health-information/disorders/hypotonia',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By Four Months.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-4mo.html',
    },
  ],
};
