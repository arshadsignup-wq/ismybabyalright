import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-spitting-up-hours-after-feeding',
  title: 'Baby Spitting Up Hours After Feeding',
  category: 'digestive',
  searchTerms: [
    'baby spit up hours after feeding',
    'baby spit up long after eating',
    'baby vomiting hours later',
    'baby delayed spit up',
    'baby spit up curdled milk hours',
    'baby spit up 2 hours after feeding',
    'baby spit up between feeds',
    'infant delayed regurgitation',
    'baby spit up old milk curdled',
    'baby curd vomit hours after feed',
  ],
  quickAnswer:
    'Spitting up curdled or chunky milk hours after a feeding is normal and simply means the milk was partially digested in the stomach before coming back up. The curdled appearance occurs because stomach acid has begun to break down the milk proteins. This is typically harmless and does not indicate a stomach problem.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young babies often spit up partially digested milk because their stomach empties slowly. The curdled appearance can be alarming but is completely normal. It simply means time has passed since the feed. As long as your baby is comfortable and gaining weight, delayed spit-up is not a concern.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Delayed spit-up may occur when a baby is moved from lying down to sitting up, during tummy time, or when pressure is placed on the stomach. The stomach can hold a surprising amount and spit-up from a feed 1 to 2 hours ago is normal. It does not mean the baby is not absorbing nutrition.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies eat more solids, you may see a mix of food and milk being spit up. This looks different from pure milk spit-up but is equally normal. As long as the volume is small and your baby is not distressed, it is simply part of their digestive system maturing.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Delayed regurgitation is uncommon in toddlers and should be distinguished from true vomiting. If a toddler regularly brings up food hours after eating, discuss with your pediatrician as this could indicate delayed gastric emptying or another digestive issue.',
    },
  ],
  whenNormal: [
    'Curdled spit-up 1 to 2 hours after a feeding in an otherwise happy baby',
    'Small amounts of partially digested milk coming up during position changes',
    'Spit-up that looks different from fresh milk because of normal digestion',
  ],
  whenToMention: [
    'Delayed spit-up is frequent, large in volume, or seems to bother your baby',
    'Spit-up consistently happens many hours after feeds or contains food from much earlier in the day',
    'You are concerned about whether your baby is absorbing enough nutrition',
  ],
  whenToActNow: [
    'Forceful vomiting hours after feeds, especially in a baby 2 to 8 weeks old (possible pyloric stenosis)',
    'Vomit that contains blood or is green (bilious)',
    'Signs of dehydration alongside frequent delayed vomiting',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Spitting Up in Babies. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Spitting-Up-Reflux.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Acid Reflux in Infants.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-infants',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. When to Call the Pediatrician. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/tips-tools/symptom-checker/Pages/default.aspx',
    },
  ],
  relatedConcernSlugs: ['spitting-up', 'spit-up-vs-vomit', 'reflux', 'pyloric-stenosis'],
};
