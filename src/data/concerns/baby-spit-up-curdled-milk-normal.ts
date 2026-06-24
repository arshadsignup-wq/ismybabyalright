import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-spit-up-curdled-milk-normal',
  title: 'Curdled or Chunky Spit-Up: Is It Normal?',
  category: 'digestive',
  searchTerms: [
    'baby spit up curdled milk',
    'chunky spit up baby',
    'baby spit up looks like cottage cheese',
    'curdled formula spit up',
    'baby spit up white chunks',
    'is curdled spit up normal',
    'baby spit up smells sour',
    'partially digested milk baby',
    'baby thick spit up',
    'baby spit up texture',
  ],
  quickAnswer:
    'Curdled or chunky-looking spit-up is completely normal in babies. When breast milk or formula sits in the stomach even briefly, stomach acid begins to curdle it as part of normal digestion. The spit-up may look like cottage cheese or have small white chunks, and it often has a slightly sour smell. This is simply partially digested milk and is not a sign of illness unless accompanied by other concerning symptoms like projectile vomiting, blood, or green bile.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Spit-up is extremely common in young babies - up to 70% of infants spit up regularly. The appearance depends on how long the milk has been in the stomach before coming back up. Fresh spit-up looks like milk, while milk that has been in the stomach for even a few minutes will look curdled. Both are normal. The sour smell is from stomach acid mixing with the milk. Your baby\'s immature digestive valve (lower esophageal sphincter) allows stomach contents to flow back up easily.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Spit-up peaks around 4 months and the curdled appearance remains normal throughout. If your baby is spitting up frequently but gaining weight well, eating happily, and not in discomfort, they are a "happy spitter" and no treatment is needed. The volume of spit-up often looks like more than it actually is - a tablespoon of milk spread on a burp cloth can look like a lot. If your baby has spit-up that is consistently forceful rather than dribbling, mention it to your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Spit-up typically decreases significantly after 6 months as your baby sits upright more and the digestive system matures. Some curdled spit-up may still occur after meals, especially larger ones. As solids are introduced, spit-up may contain visible food particles, which is normal. Most babies stop spitting up by 12-14 months. If significant spit-up continues beyond 12 months, or if your baby seems to be in pain, discuss it with your pediatrician.',
    },
  ],
  whenNormal: [
    'Spit-up looks curdled or chunky and your baby is happy, growing well, and eating normally.',
    'Spit-up has a slightly sour smell - this is just stomach acid and is expected.',
    'Spit-up occurs after feeds but your baby does not seem uncomfortable or distressed.',
  ],
  whenToMention: [
    'The volume of spit-up seems to be increasing significantly over time.',
    'Your baby arches their back, cries during feeds, or seems in pain with spit-up.',
    'Spit-up is interfering with weight gain despite your baby eating well.',
  ],
  whenToActNow: [
    'Spit-up contains bright red blood or looks like coffee grounds.',
    'Spit-up is green (bile-stained), which could indicate an intestinal obstruction.',
    'Spit-up is projectile (forceful, shooting several inches) and happening after every feed.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-projectile-vomiting-vs-normal-spit-up', 'baby-reflux-formula-thickened', 'baby-vomiting-bile'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Why Babies Spit Up. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Infant-Vomiting.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health - Spitting Up in Babies. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/003068.htm',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic - Spitting Up in Babies: What\'s Normal, What\'s Not.',
      url: 'https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/healthy-baby/art-20044329',
    },
  ],
};
