import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-spit-up-vs-vomit',
  title: 'Distinguishing Spit-Up From Vomiting in Newborns',
  category: 'digestive',
  searchTerms: ['spit up vs vomit baby', 'baby spitting up a lot', 'newborn spit up normal', 'how to tell spit up from vomiting', 'baby vomiting or spitting up', 'newborn reflux spit up', 'happy spitter baby', 'baby spit up after every feed', 'newborn vomit vs reflux', 'when is spit up too much'],
  quickAnswer: 'Spit-up is a gentle, effortless flow of stomach contents (usually a small amount) that is very common in newborns. Vomiting is a forceful expulsion of stomach contents. Most spit-up is normal and does not bother the baby ("happy spitter"). Vomiting, especially if forceful, persistent, green-colored, or associated with poor weight gain, needs medical evaluation.',
  byAge: [
    { ageRange: '0-1 month', context: 'Spit-up is extremely common in newborns because the muscle between the esophagus and stomach (lower esophageal sphincter) is still immature. Spit-up typically looks like milk or slightly curdled milk and flows out easily, often during or after a feed. It may come out the nose as well. Up to 50% of babies spit up regularly. A "happy spitter" is a baby who spits up but is gaining weight well and is not distressed. Strategies to reduce spit-up include: frequent burping, keeping baby upright after feeds, not overfeeding, and avoiding tight diapers around the waist.' },
    { ageRange: '1-3 months', context: 'Spit-up may peak around 2-4 months. Continue comfort measures. Vomiting that is forceful (projectile), frequent, contains green/bile color, or is associated with poor weight gain should be evaluated. Projectile vomiting in particular may indicate pyloric stenosis, a condition that requires surgical treatment.' },
    { ageRange: '3-6 months', context: 'Spit-up typically begins to improve as the lower esophageal sphincter matures and baby starts sitting upright more.' },
    { ageRange: '6-12 months', context: 'Most spit-up resolves by 12 months. If it persists or worsens, further evaluation may be needed.' },
  ],
  whenNormal: ['Small amounts of milk flowing out effortlessly during or after feeds', 'Baby is comfortable, not distressed, and not in pain during spit-up', 'Good weight gain despite spitting up ("happy spitter")', 'Spit-up looks like milk or slightly curdled milk'],
  whenToMention: ['Spit-up seems to be increasing in volume or frequency', 'Baby arches back, cries during feeds, or seems uncomfortable (possible GERD)', 'You are concerned about whether baby is keeping enough milk down'],
  whenToActNow: ['Forceful/projectile vomiting that shoots across the room (possible pyloric stenosis)', 'Green or bile-colored vomit, which could indicate bowel obstruction', 'Vomiting with poor weight gain, blood, or a distended abdomen'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Spitting Up in Babies. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Infant-Reflux.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Gastroesophageal Reflux in Infants. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK441938/' },
  ],
  relatedConcernSlugs: ['spit-up-vs-vomit', 'posseting-baby', 'pyloric-stenosis-signs', 'newborn-projectile-vomiting-early'],
};
