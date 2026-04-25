import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'tongue-thrust',
  title: 'Baby Tongue Thrust Reflex',
  category: 'feeding',
  searchTerms: [
    'baby tongue thrust',
    'baby pushes food out with tongue',
    'tongue thrust reflex baby',
    'baby sticking tongue out while eating',
    'extrusion reflex baby',
    'when does tongue thrust go away',
    'baby can\'t keep food in mouth',
    'baby spits out all food',
    'tongue thrust and starting solids',
    'baby pushes spoon out with tongue',
  ],
  quickAnswer:
    'The tongue thrust reflex, also called the extrusion reflex, is a normal protective reflex that causes babies to push objects out of their mouth with their tongue. This reflex is present from birth and is designed to prevent choking. It typically fades between 4 and 6 months of age, which is one of the key signs of readiness for solid foods. If your baby is pushing food out, they may simply not be ready for solids yet.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'The tongue thrust reflex is fully active and very strong at this age. This is one of the reasons experts recommend waiting until at least 4 months (and ideally around 6 months) to start solid foods. If food is placed on a young baby\'s tongue, the reflex will push it right back out. This is completely normal and protective, not a sign that anything is wrong.',
    },
    {
      ageRange: '4-6 months',
      context:
        'The tongue thrust reflex gradually diminishes during this window as your baby\'s oral motor skills develop. Your baby\'s tongue begins to learn to move food from the front to the back of the mouth for swallowing. Testing readiness for solids by offering a small amount of thin puree on a spoon can tell you if the reflex has faded enough. If food comes right back out every time, wait a week or two and try again.',
    },
    {
      ageRange: '6-8 months',
      context:
        'Most babies have lost the tongue thrust reflex by 6 months, allowing them to manage purees and soft foods. If your baby is still strongly pushing all food out at 7 or 8 months, it may indicate that their oral motor development is a bit behind. Continue offering tastes and textures. If the reflex persists beyond 8 months, mention it to your pediatrician, as it may warrant a feeding evaluation.',
    },
    {
      ageRange: '8 months+',
      context:
        'A persistent tongue thrust reflex beyond 8 months is uncommon and may indicate oral motor difficulties or a neurological consideration. It does not necessarily mean something serious, but a speech-language pathologist or occupational therapist who specializes in feeding can assess your baby and offer exercises and strategies to help with tongue control and food management.',
    },
  ],
  whenNormal: [
    'Your baby under 6 months pushes food out when you try to introduce solids',
    'Your baby is gradually improving at keeping food in their mouth over several weeks of practice',
    'Your baby pushes out new or unfamiliar textures but manages familiar purees',
    'Your baby shows other signs of readiness like sitting and interest in food even though they still push some food out',
  ],
  whenToMention: [
    'Your baby is over 7 months and still pushing out all food with their tongue despite regular practice',
    'Your baby has difficulty coordinating sucking, swallowing, and breathing during liquid feeds',
    'Your baby seems to have limited tongue movement overall, including during babbling',
  ],
  whenToActNow: [
    'Your baby has difficulty swallowing liquids and shows signs of aspiration such as coughing, choking, or wet-sounding breathing during feeds',
    'Your baby has a persistent tongue thrust combined with difficulty gaining weight and other developmental concerns',
  ],
  relatedMilestones: [
    'feeding',
    'oral-motor',
    'starting-solids',
  ],
  showSelfReferral: false,
  sources: [
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
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Developmental Milestones: 7 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Developmental-Milestones-7-Months.aspx',
    },
  ],
};
