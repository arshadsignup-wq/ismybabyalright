import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-projectile-vomiting-vs-normal-spit-up',
  title: 'Projectile Vomiting vs Normal Spit-Up in Babies',
  category: 'digestive',
  searchTerms: [
    'baby projectile vomiting',
    'projectile vomiting vs spit up',
    'baby vomiting forcefully',
    'newborn projectile vomit',
    'baby spit up shoots out',
    'pyloric stenosis symptoms',
    'baby vomiting across room',
    'forceful vomiting infant',
    'baby spit up normal amount',
    'when is baby vomiting serious',
    'baby vomiting after every feed',
  ],
  quickAnswer:
    'Normal spit-up is a gentle, dribbling flow of milk that happens during or after feedings and is very common in the first year. Projectile vomiting is forceful, shooting several inches or even across the room, and can be a sign of a condition called pyloric stenosis, especially in babies 2-8 weeks old. Projectile vomiting that happens repeatedly always warrants a call to your pediatrician.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Spit-up is extremely common in newborns and usually involves small amounts of milk flowing out gently. Projectile vomiting at this age is concerning and may indicate pyloric stenosis, a condition where the muscle at the stomach\'s exit thickens and blocks food from passing. Pyloric stenosis typically presents between 2-8 weeks with progressively forceful vomiting, hunger right after vomiting, and weight loss. This is a medical emergency requiring surgical correction.',
    },
    {
      ageRange: '2-6 months',
      context:
        'Most babies spit up regularly at this age and it peaks around 4 months. Normal spit-up does not bother the baby, happens with burps or when lying down, and involves small volumes. Projectile vomiting at this age could still indicate pyloric stenosis (if not previously diagnosed) or other conditions like a stomach virus, food intolerance, or intestinal obstruction. One-time forceful vomiting during illness is different from repeated projectile episodes.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Spit-up typically decreases significantly after 6 months as the digestive system matures and babies sit upright more. Occasional vomiting from stomach bugs is normal at this age. Repeated projectile vomiting, especially with bile (green color), fever, or lethargy, needs medical evaluation. Watch for signs of dehydration like fewer wet diapers and dry lips.',
    },
  ],
  whenNormal: [
    'Your baby spits up small amounts of milk that dribble out gently during or after feeds.',
    'Spit-up happens occasionally and your baby seems comfortable and is gaining weight well.',
    'Your baby has a single episode of forceful vomiting during an illness but otherwise keeps fluids down.',
  ],
  whenToMention: [
    'Spit-up seems to be increasing in frequency or volume over time.',
    'Your baby seems uncomfortable during or after feeds and arches their back.',
    'Your baby has occasional forceful vomiting but is still gaining weight.',
  ],
  whenToActNow: [
    'Your baby (especially 2-8 weeks old) has repeated projectile vomiting after feeds and seems hungry immediately after.',
    'Vomit contains blood or bright green bile.',
    'Your baby is losing weight or has significantly fewer wet diapers than normal.',
    'Projectile vomiting is accompanied by a distended abdomen, fever, or lethargy.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['pyloric-stenosis', 'baby-spit-up-curdled-milk-normal', 'baby-vomiting-bile', 'baby-reflux-formula-thickened'],
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
        'National Institutes of Health - Pyloric Stenosis. MedlinePlus.',
      url: 'https://medlineplus.gov/pyloricstenosis.html',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic - Spitting Up in Babies: What\'s Normal and What\'s Not.',
      url: 'https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/healthy-baby/art-20044329',
    },
  ],
};
