import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'poor-trunk-control',
  title: 'Poor Trunk Control',
  category: 'physical',
  searchTerms: [
    'baby poor trunk control',
    'baby slumps when sitting',
    'baby can\'t hold body upright',
    'baby weak core muscles',
    'infant poor core strength',
    'baby leans to one side when sitting',
    'toddler poor trunk control',
    'baby folds in half when sitting',
    'baby trunk hypotonia',
    'baby can\'t sit straight',
    'baby weak torso',
  ],
  quickAnswer:
    'Trunk control - the ability to hold the torso upright and stable - develops progressively throughout the first year. It is essential for sitting, crawling, standing, and walking. Babies build trunk control through tummy time, supported sitting, and active play. If your baby seems unusually floppy in the trunk or slumps significantly when sitting, your pediatrician can assess whether their core strength is developing as expected.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Babies at this age have very limited trunk control. When held in a sitting position, they need full trunk support and will slump forward or to the side. During tummy time, they are working on head control, which is the first step before trunk control can develop. This is completely normal, and regular tummy time is the best way to start building the core muscles that support the trunk.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Trunk control begins developing more noticeably. By 4 to 5 months, babies held in a sitting position can hold their trunk more upright with less support. During tummy time, they push up on their arms, which strengthens core muscles. By 6 months, many babies sit with some hand support (tripod sitting), showing emerging trunk control. If your baby still slumps completely when held in a sitting position at 5 to 6 months, mention this to your pediatrician.',
    },
    {
      ageRange: '6-9 months',
      context:
        'This is when trunk control really comes together for sitting. Babies sit independently with good upright posture and can reach for toys without toppling over. They also begin moving in and out of sitting, which requires dynamic trunk control. If your baby cannot sit independently by 9 months and seems to have poor trunk strength (consistently slumps, leans, or folds forward), a motor evaluation is recommended.',
    },
    {
      ageRange: '9-18 months',
      context:
        'Trunk control supports increasingly complex motor skills like pulling to stand, cruising, and walking. Good core strength allows your baby to balance while using their hands and to recover from wobbles without falling. If your child has ongoing poor trunk control at this age, physical therapy can help build the core strength needed to support these higher-level motor activities.',
    },
    {
      ageRange: '18 months - 3 years',
      context:
        'Toddlers with good trunk control can run, climb, jump, and play on playground equipment. Poor trunk control at this age may show up as difficulty sitting still in a chair, needing to lean on the table during meals, fatigue during active play, or difficulty with activities that require core stability. Occupational and physical therapy can help strengthen the trunk muscles through fun, play-based activities.',
    },
  ],
  whenNormal: [
    'Your baby is under 6 months and needs support to sit upright, as trunk control is still developing.',
    'Your baby can sit independently but still wobbles or leans when reaching to the side, as dynamic trunk control is still maturing.',
    'Your baby sits well on flat surfaces but has more difficulty on uneven or soft surfaces.',
    'Your baby has slightly lower tone overall but is meeting motor milestones within expected timeframes.',
  ],
  whenToMention: [
    'Your baby is 6 months or older and consistently slumps forward or to the side when sitting, even with minimal support.',
    'Your baby seems to have much weaker trunk control compared to their head control and limb strength.',
    'Your toddler has difficulty sitting in a highchair or at a table without leaning heavily on the surface for support.',
  ],
  whenToActNow: [
    'Your baby has a sudden loss of trunk control after previously sitting well, as this could indicate a neurological condition requiring urgent evaluation.',
    'Your baby has significant trunk floppiness combined with difficulty breathing, feeding problems, or failure to gain weight.',
  ],
  relatedMilestones: [
    'gross-motor-sitting',
    'gross-motor-core-strength',
    'gross-motor-crawling',
    'gross-motor-walking',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Movement Milestones: Babies 4 to 7 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-4-to-7-Months.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By Nine Months.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-9mo.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Neurological Disorders and Stroke. Hypotonia Information Page.',
      url: 'https://www.ninds.nih.gov/health-information/disorders/hypotonia',
    },
  ],
};
