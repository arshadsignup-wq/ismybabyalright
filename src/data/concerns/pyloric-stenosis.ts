import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pyloric-stenosis',
  title: 'Pyloric Stenosis in Babies',
  category: 'medical',
  searchTerms: [
    'baby pyloric stenosis',
    'projectile vomiting baby',
    'pyloric stenosis symptoms',
    'baby vomiting after every feed',
    'pyloric stenosis surgery',
    'forceful vomiting newborn',
    'baby always hungry but vomits',
    'pyloric stenosis diagnosis',
    'pyloric stenosis treatment',
    'baby vomiting milk forcefully',
  ],
  quickAnswer:
    'Pyloric stenosis is a condition where the muscle at the stomach outlet thickens, blocking food from entering the intestines. It causes forceful, projectile vomiting after feeds, usually starting between 2-8 weeks of age. Babies remain hungry and eager to eat despite vomiting. It requires surgical correction, which is safe and highly effective.',
  byAge: [
    {
      ageRange: '0-2 weeks',
      context:
        'Pyloric stenosis is rare in the first two weeks of life. If your newborn is vomiting forcefully, other causes are more likely (overfeeding, reflux, infection, or other digestive issues). Any significant vomiting in a young newborn should be evaluated by a pediatrician to determine the cause and ensure your baby stays hydrated.',
    },
    {
      ageRange: '2-8 weeks',
      context:
        'This is the most common age for pyloric stenosis to develop. Watch for progressively worsening vomiting that becomes forceful or projectile, shooting across the room after feeds. Your baby may seem very hungry and eager to feed again immediately after vomiting. You might notice fewer wet diapers, weight loss, or dehydration. Contact your pediatrician immediately - diagnosis is made by physical exam and/or ultrasound.',
    },
    {
      ageRange: '2-4 months',
      context:
        'While less common, pyloric stenosis can develop up to about 4 months of age. Symptoms are the same: forceful vomiting after feeds, continued hunger, and signs of dehydration. Your doctor will examine your baby\'s belly, possibly feeling the thickened pyloric muscle (described as an "olive" in the abdomen), and may order an ultrasound. Surgery is needed to correct the problem.',
    },
    {
      ageRange: '4 months+',
      context:
        'Pyloric stenosis developing after 4 months is very rare. Forceful vomiting at this age is more likely due to other causes like gastroenteritis, food intolerance, or reflux. However, any persistent vomiting in a baby warrants medical evaluation to determine the cause and prevent dehydration.',
    },
  ],
  whenNormal: [
    'Your baby occasionally spits up small amounts after feeds (normal reflux)',
    'Your baby vomits once or twice due to a stomach bug but is improving',
    'Your baby has been evaluated, diagnosed with reflux, and is being managed appropriately',
    'Vomiting is not forceful or projectile and your baby is gaining weight normally',
  ],
  whenToMention: [
    'Your baby has started vomiting more frequently or forcefully than before',
    'Your baby seems excessively hungry and wants to feed again immediately after vomiting',
    'You\'re concerned about the amount or pattern of vomiting',
    'Your baby has vomited after most feeds for more than a day',
  ],
  whenToActNow: [
    'Your baby has forceful, projectile vomiting after most or all feeds',
    'Your baby has fewer wet diapers than usual (less than 6 per day) or signs of dehydration (sunken soft spot, dry lips, no tears)',
    'Your baby is losing weight or not gaining weight',
    'Your baby seems lethargic, very fussy, or unwell',
    'You notice an olive-sized lump in your baby\'s upper abdomen',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Pyloric Stenosis. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Pyloric-Stenosis.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Vomiting. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Vomiting.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Pediatric Surgical Association. Pyloric Stenosis. APSA, 2023.',
      url: 'https://www.eapsa.org/parents/learn-about-a-condition/p-t/pyloric-stenosis/',
    },
  ],
};
