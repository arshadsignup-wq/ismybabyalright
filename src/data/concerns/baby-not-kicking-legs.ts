import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-not-kicking-legs',
  title: 'My Baby Isn\'t Kicking Their Legs',
  category: 'physical',
  searchTerms: [
    'baby not kicking legs',
    'newborn not moving legs',
    'baby legs not moving much',
    'baby doesn\'t kick',
    'infant not kicking',
    'baby legs seem weak',
    'baby not moving legs equally',
    'when do babies start kicking',
    'baby stopped kicking legs',
    'baby legs limp',
  ],
  quickAnswer:
    'Most babies begin kicking their legs actively within the first few weeks of life, and leg kicking becomes more vigorous and coordinated by 2-3 months. If your baby is not kicking their legs or kicks very infrequently, it could be related to muscle tone, prematurity, or other factors. Your pediatrician can help determine if evaluation is needed.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Newborns move their legs in reflexive, somewhat jerky patterns. By 6-8 weeks, most babies are kicking more purposefully, especially when excited or during diaper changes. Premature babies may be less active initially, and this is expected. However, a full-term baby who rarely moves their legs, whose legs feel very floppy or very stiff, or who moves one leg much more than the other should be evaluated. Some newborns are simply calmer and move less, but a complete absence of leg movement is always worth discussing.',
    },
    {
      ageRange: '2-4 months',
      context:
        'By this age, babies typically kick vigorously and joyfully, especially when they see a familiar face or during play. Their leg movements become smoother and more rhythmic. A baby who is still not kicking much by 3-4 months, or whose kicks are very weak, may have low muscle tone (hypotonia) or another neuromuscular condition. Tummy time and supervised play on their back encourage leg movement, but persistent inactivity should be discussed with your pediatrician.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Babies at this age are kicking strongly and beginning to discover their feet. They may grab their toes, push against surfaces with their feet, and kick in patterns. A baby who still shows minimal leg movement at this age needs evaluation. Your pediatrician may check muscle tone, reflexes, and hip stability, and may refer you to a pediatric neurologist or physical therapist.',
    },
    {
      ageRange: '6+ months',
      context:
        'By 6 months, babies use their legs extensively for rolling, beginning to push up on hands and knees, and bearing weight when held upright. If your baby is not using their legs for these activities, early intervention through physical therapy can help build strength and movement patterns. The earlier any underlying issue is identified, the more effective the intervention tends to be.',
    },
  ],
  whenNormal: [
    'Your newborn kicks their legs but less vigorously than other babies you have seen, as there is a wide range of normal activity levels.',
    'Your premature baby is less active with leg movements but is gradually becoming more vigorous as they grow.',
    'Your baby kicks more at certain times of day and is calmer at others, but does kick actively when alert and happy.',
    'Your baby went through a brief phase of reduced kicking during an illness but has returned to normal activity.',
  ],
  whenToMention: [
    'Your baby rarely kicks their legs even when awake, alert, and stimulated.',
    'Your baby\'s leg movements seem weak or they do not resist when you gently hold their legs.',
    'Your baby kicks one leg noticeably more than the other on a consistent basis.',
  ],
  whenToActNow: [
    'Your baby has suddenly stopped moving their legs or has a dramatic decrease in leg movement, which could indicate a neurological or spinal cord issue.',
    'Your baby\'s legs feel completely limp and they show no resistance when you move their legs, combined with other concerns like feeding difficulty or weak cry.',
  ],
  relatedMilestones: [
    'gross-motor-kicking',
    'gross-motor-rolling',
    'gross-motor-crawling',
    'gross-motor-standing',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Movement Milestones: Birth to 3 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-Birth-to-Three-Months.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By Two Months.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2mo.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Neurological Disorders and Stroke. Hypotonia Information Page.',
      url: 'https://www.ninds.nih.gov/health-information/disorders/hypotonia',
    },
  ],
};
