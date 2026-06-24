import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-weak-suck-reflex-feeding',
  title: 'Weak Suck Reflex and Feeding Difficulties',
  category: 'feeding',
  searchTerms: [
    'baby weak suck reflex',
    'baby can\'t suck properly',
    'poor suck baby',
    'baby weak latch',
    'newborn difficulty feeding sucking',
    'baby not sucking strongly',
    'weak suck premature baby',
    'baby suck swallow coordination',
    'baby tires quickly feeding',
    'baby ineffective sucking',
  ],
  quickAnswer:
    'A weak suck reflex can make breastfeeding and bottle feeding challenging for your baby. Causes include prematurity (the suck reflex fully develops around 36 weeks gestation), tongue tie, neurological conditions, low muscle tone, and birth-related issues. If your baby has difficulty latching, tires quickly during feeds, or is not gaining weight adequately, early evaluation is important. A lactation consultant, pediatrician, or feeding therapist can assess the suck and develop a management plan.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'The suck-swallow-breathe coordination is one of the most complex neurological tasks for newborns. A weak or disorganized suck in the early days may improve as your baby matures, especially if born slightly early (34-37 weeks). Signs of a weak suck include: difficulty latching, falling asleep quickly at the breast/bottle, very long feeding sessions (over 30-40 minutes), clicking sounds during feeding, milk leaking from the mouth, and poor weight gain. A lactation consultant can evaluate the suck and help with positioning. Tongue tie should be ruled out as a cause.',
    },
    {
      ageRange: '1-3 months',
      context:
        'By 1-2 months, most healthy babies have a strong, effective suck. If your baby still has a weak suck, further evaluation may be needed. Possible causes include low muscle tone (hypotonia), neurological conditions, cleft palate (including submucous cleft not visible externally), and oral motor dysfunction. Your pediatrician may refer to a speech-language pathologist or occupational therapist specializing in infant feeding. In the meantime, strategies like paced bottle feeding, specialty bottles (Pigeon, Dr. Brown\'s), and supplemental nursing systems can help ensure adequate intake.',
    },
    {
      ageRange: '3-12 months',
      context:
        'If a weak suck has been identified and your baby is receiving feeding therapy, progress should be monitored regularly. Some babies with weak suck improve significantly as their nervous system matures, while others may have underlying conditions that require ongoing support. As solids are introduced around 6 months, some babies with weak suck may have an easier time with purees and soft foods. Continue working with your feeding therapy team to ensure adequate nutrition and calorie intake throughout the transition to solid foods.',
    },
  ],
  whenNormal: [
    'Your newborn (first few days) is still learning to latch and suck effectively - a brief learning period is normal.',
    'Your premature baby has a weak suck that is gradually strengthening as they mature.',
    'Your baby occasionally pauses during feeds to catch their breath - this coordination develops over time.',
  ],
  whenToMention: [
    'Your baby consistently takes more than 30-40 minutes to complete a feed and seems exhausted.',
    'Your baby is not gaining weight adequately or is losing weight after the initial post-birth drop.',
    'You hear clicking or see milk leaking from the corners of your baby\'s mouth during feeds.',
  ],
  whenToActNow: [
    'Your baby is unable to feed at all and is showing signs of dehydration: fewer than 4 wet diapers in 24 hours, dry mouth, sunken fontanelle.',
    'Your baby chokes, turns blue, or stops breathing during feeds.',
    'Your newborn is extremely sleepy and cannot be roused to feed, missing multiple feeding opportunities.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['tongue-tie', 'baby-rooting-reflex-absent', 'floppy-baby-syndrome', 'baby-refusing-bottle'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Breastfeeding and the Use of Human Milk. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Breastfeeding-and-the-Use-of-Human-Milk',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health - Feeding Difficulties in Infants. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/001942.htm',
    },
    {
      org: 'La Leche League',
      citation:
        'La Leche League International - Slow Weight Gain in the Breastfed Baby.',
      url: 'https://www.llli.org/breastfeeding-info/slow-weight-gain/',
    },
  ],
};
