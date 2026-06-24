import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'premature-baby-feeding-difficulties-home',
  title: 'Feeding Difficulties in Premature Babies at Home',
  category: 'feeding',
  searchTerms: [
    'premature baby feeding difficulties',
    'preemie feeding problems',
    'premature baby not eating enough',
    'preemie bottle feeding struggles',
    'premature baby slow feeding',
    'preemie feeding schedule',
    'premature baby choking while feeding',
    'preemie breast feeding hard',
    'premature baby reflux feeding',
    'preemie feeding after NICU',
  ],
  quickAnswer:
    'Feeding difficulties are among the most common challenges parents of premature babies face after NICU discharge. Preemies often have immature suck-swallow-breathe coordination, tire easily during feeds, and may take smaller volumes more frequently than full-term babies. These difficulties typically improve as your baby matures, but it is important to work closely with your pediatrician and possibly a feeding therapist to ensure your baby is gaining weight appropriately.',
  byAge: [
    {
      ageRange: '0-3 months adjusted age',
      context:
        'Use your baby\'s adjusted age (corrected for prematurity) when thinking about feeding milestones. Many preemies are discharged from the NICU on a specific feeding schedule with measured volumes. Follow these closely and do not pressure your baby to finish a bottle if they show signs of being done (turning away, falling asleep, closing mouth). Feeds may take 20-30 minutes, and that is normal for preemies. Watch for signs of aspiration like coughing, choking, or color changes during feeds, and report these to your pediatrician.',
    },
    {
      ageRange: '3-6 months adjusted age',
      context:
        'Feeding efficiency gradually improves as your baby\'s suck-swallow-breathe coordination matures. You may notice feeds become faster and your baby takes larger volumes. If your baby was on a slow-flow nipple in the NICU, continue with it until your feeding therapist or pediatrician recommends advancing. Reflux is very common in preemies and may worsen before it improves. Keeping your baby upright for 20-30 minutes after feeds, offering smaller but more frequent feeds, and thickening formula if recommended can help.',
    },
    {
      ageRange: '6-12 months adjusted age',
      context:
        'The introduction of solid foods follows the same developmental readiness signs as full-term babies but should be based on adjusted age. Your baby should be able to sit with support, show interest in food, and have good head control. Some preemies have oral sensory aversions from NICU experiences (tubes, taping) that can make the transition to solids more challenging. A feeding therapist who specializes in pediatrics can help with desensitization and oral motor development if needed.',
    },
    {
      ageRange: '12+ months adjusted age',
      context:
        'Most preemies catch up to their peers in feeding skills by 12-24 months adjusted age. Ongoing feeding difficulties at this stage may benefit from a comprehensive feeding evaluation. Some preemies develop food texture aversions or continue to have difficulty with more complex feeding skills like chewing. Occupational therapy or speech-language pathology services can be very helpful. Weight gain and growth should be plotted on growth charts appropriate for your baby\'s adjusted age.',
    },
  ],
  whenNormal: [
    'Your preemie takes longer to feed than a full-term baby (20-30 minutes per feed)',
    'Your baby needs smaller, more frequent feedings than full-term peers',
    'Gradual improvement in feeding efficiency over weeks and months',
    'Some spitting up or mild reflux, which is common in preemies',
  ],
  whenToMention: [
    'Your baby is consistently not meeting the feeding volumes recommended by your NICU team or pediatrician',
    'Feeds regularly take more than 30-40 minutes and your baby falls asleep before finishing',
    'Your baby coughs, chokes, or turns pale or dusky during feeds',
    'Weight gain has plateaued or your baby is losing weight',
  ],
  whenToActNow: [
    'Your baby turns blue, becomes limp, or stops breathing during a feed',
    'Your baby is refusing all feeds and has had no wet diapers for more than 8-12 hours',
    'Your baby is vomiting forcefully (projectile vomiting) with every feed',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'premature-baby-immune-system-fragile',
    'premature-baby-adjusted-age-milestones',
    'preterm-birth-long-term-health-effects',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Caring for Your Premature Baby. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/preemie/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Jadcherla SR. Neonatal Oral Feeding Difficulties Due to Aerodigestive Disorders. Clinics in Perinatology, 2019.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/31345539/',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Feeding Your Premature Baby. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/baby/feeding-your-premature-baby.aspx',
    },
  ],
};
