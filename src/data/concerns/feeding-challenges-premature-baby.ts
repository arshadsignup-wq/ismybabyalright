import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'feeding-challenges-premature-baby',
  title: 'Feeding Challenges in Premature Babies',
  category: 'medical',
  searchTerms: [
    'premature baby feeding problems',
    'preemie won\'t eat',
    'feeding difficulties premature baby',
    'preemie slow feeder',
    'premature baby choking while feeding',
    'preemie breastfeeding challenges',
    'gavage to bottle transition preemie',
    'premature baby spitting up a lot',
    'preemie oral aversion',
  ],
  quickAnswer:
    'Feeding challenges are one of the most common concerns for parents of premature babies, because the coordination of sucking, swallowing, and breathing does not fully mature until around 34-36 weeks gestational age. Preemies may need extra time and specialized support to learn to feed effectively, whether by breast, bottle, or a combination. With patience and appropriate guidance, most premature babies eventually become successful feeders.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In the early weeks, many preemies receive nutrition through a tube (gavage feeding) until they develop the strength and coordination to feed orally. The transition from tube to breast or bottle is a gradual process that the NICU team will guide. Cue-based feeding, where you follow your baby\'s hunger and readiness signals rather than a strict schedule, has been shown to improve feeding outcomes. Skin-to-skin contact and non-nutritive sucking at the breast can help your baby practice oral skills before they are ready for full feeds.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By 3-6 months corrected age, most preemies are feeding orally, but some may still struggle with slow feeding, frequent spit-up, or fatigue during feeds. Gastroesophageal reflux is more common in premature babies and can make feeding uncomfortable. If your baby arches their back, cries during feeds, or refuses the bottle or breast, reflux may be contributing. Smaller, more frequent feeds and keeping your baby upright for 20-30 minutes after feeding can help.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Introducing solids follows your baby\'s corrected age and developmental readiness, not their birth age. Some preemies develop oral aversion from their NICU experience, particularly if they had prolonged tube feeding or respiratory support. Signs of oral aversion include gagging on textures, refusing to let anything near their mouth, or extreme fussiness around mealtimes. A feeding therapist can provide targeted strategies to help your baby accept new textures and foods.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Most premature babies have caught up in their feeding skills by this age, but some may continue to have preferences for certain textures or struggle with chewing. If your child is still highly selective about foods, gags frequently, or is not gaining weight as expected, a feeding evaluation can identify whether there is an ongoing oral motor issue or sensory component that would benefit from therapy.',
    },
  ],
  whenNormal: [
    'Your preemie takes longer to finish feeds than full-term babies, which is expected given their smaller stamina and less mature coordination',
    'Your baby spits up small amounts after feeds but is still gaining weight and seems comfortable overall',
    'Your baby is slow to accept new textures when starting solids, which is common in babies who had extended NICU stays',
    'Feeding patterns are inconsistent, with some feeds going well and others being more challenging',
  ],
  whenToMention: [
    'Your baby is consistently taking less than the expected volume per feed and weight gain is slowing down',
    'Feeds regularly take longer than 30 minutes and your baby seems exhausted or stressed during feeding',
    'Your baby has frequent choking, gagging, or coughing episodes during feeds that concern you',
    'You suspect your baby has developed an oral aversion and is refusing to accept the breast, bottle, or solid foods',
  ],
  whenToActNow: [
    'Your baby turns blue, stops breathing, or becomes limp during a feed, which may indicate aspiration or a swallowing safety issue',
    'Your baby is not gaining weight or is losing weight despite your best feeding efforts',
    'Your baby has projectile vomiting after most feeds, which may indicate a condition like pyloric stenosis that requires medical evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Feeding the Premature Infant. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/preemie/Pages/Feeding-Your-Premature-Baby.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. National Library of Medicine. Feeding Challenges in Premature Infants.',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6478671/',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Optimal Feeding of Low-Birth-Weight Infants.',
      url: 'https://www.who.int/publications/i/item/9789241548602',
    },
  ],
};
