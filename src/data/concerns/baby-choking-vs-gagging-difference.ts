import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-choking-vs-gagging-difference',
  title: 'Baby Choking vs Gagging - How to Tell the Difference',
  category: 'feeding',
  searchTerms: [
    'baby choking vs gagging',
    'baby gagging on food',
    'how to tell if baby is choking',
    'baby gagging when eating solids',
    'infant choking signs',
    'baby gagging reflex normal',
    'is baby gagging or choking',
    'baby led weaning choking risk',
    'baby gagging on purees',
    'baby coughing while eating choking',
    'when to do baby Heimlich',
    'baby turning red while eating',
  ],
  quickAnswer:
    'Gagging is a normal protective reflex that pushes food away from the airway - your baby will cough, sputter, or make retching sounds and will usually be red in the face. Choking is when the airway is partially or fully blocked - your baby may be silent, unable to cry or cough, and may turn blue. Gagging is noisy and resolves on its own. Choking is often silent and requires immediate action. If your baby cannot breathe, cry, or cough, begin infant back blows and chest thrusts immediately.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'Before starting solids, babies can still gag on breast milk or formula if they eat too quickly or have reflux. The gag reflex in young infants is very sensitive and is triggered further forward on the tongue than in adults. This is a protective mechanism. If your baby gags during bottle feeding, try pacing the feed by giving smaller amounts and pausing. If your baby seems to choke frequently during liquid feeds or turns blue, tell your pediatrician as this could indicate a swallowing disorder.',
    },
    {
      ageRange: '4-6 months',
      context:
        'As babies begin exploring objects by mouthing them, the gag reflex helps protect against swallowing non-food items. If starting purees, some gagging is expected as your baby learns to move food from front to back of the mouth. Gagging is loud and your baby can still breathe, while choking involves silence or inability to cough or cry. Resist the urge to sweep the mouth with your finger, as this can push food further back into the throat.',
    },
    {
      ageRange: '6-9 months',
      context:
        'This is when most babies start solids, and gagging becomes very common. Whether you are doing purees or baby-led weaning, your baby is learning an entirely new skill. Gagging is a sign that protective reflexes are working. The gag reflex in babies is triggered much further forward on the tongue than in adults, which means your baby will gag on food that is nowhere near their airway. Avoid high-risk choking foods: whole grapes, hot dogs, raw carrots, whole nuts, popcorn, and large chunks of meat.',
    },
    {
      ageRange: '9-12 months',
      context:
        'As your baby becomes more experienced with solids, gagging should gradually decrease. The gag reflex moves further back on the tongue with practice. If gagging is increasing rather than decreasing, or if your baby seems fearful of food and refuses textures, talk to your pediatrician or a feeding therapist. Always supervise mealtimes and learn infant CPR.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers remain at risk for choking. Children under 4 are the most likely age group to choke on food. Continue cutting food into small pieces - grapes and cherry tomatoes quartered lengthwise, hot dogs cut into thin strips not coins. Toddlers should always eat while seated, not while running or playing. Some gagging on new textures is still normal, but persistent gagging at this age should be discussed with your pediatrician.',
    },
  ],
  whenNormal: [
    'Your baby gags and then coughs or spits out the food - the gag reflex is doing its job',
    'Your baby turns red while gagging but can still breathe, cough, and cry',
    'Gagging is most frequent in the first few weeks of starting solids and gradually decreases',
    'Your baby occasionally gags on new textures but continues eating willingly afterward',
  ],
  whenToMention: [
    'Gagging is not decreasing over time and your baby gags on most foods including familiar ones',
    'Your baby seems fearful of eating or refuses to progress to new textures after several weeks',
    'Your baby frequently gags during liquid feeds, which could suggest a swallowing issue',
  ],
  whenToActNow: [
    'Your baby is silent, cannot cry or cough, is turning blue or pale, or is making no sound while appearing to struggle - this is choking. Begin infant back blows and chest thrusts immediately and call 911',
    'Your baby loses consciousness during a choking episode - call 911 and begin infant CPR',
    'After a gagging episode your baby develops persistent noisy breathing, cough, or drooling that may indicate food stuck in the airway',
  ],
  relatedMilestones: [
    'feeding-solids-introduction',
    'fine-motor-pincer-grasp',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-choking-on-food', 'gagging-on-solids', 'baby-gagging-on-textures'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Choking Prevention. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Choking-Prevention.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Starting Solid Foods. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. When, What, and How to Introduce Solid Foods.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/when-to-introduce-solid-foods.html',
    },
  ],
};
