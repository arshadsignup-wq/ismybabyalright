import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'tongue-thrust-swallowing-dental',
  title: 'Tongue Thrust and Dental Development',
  category: 'medical',
  searchTerms: [
    'tongue thrust baby teeth',
    'tongue thrust swallowing pattern',
    'baby pushing tongue out teeth',
    'tongue thrust open bite',
    'infant tongue thrust reflex',
    'tongue thrust dental problems',
    'baby tongue pushes food out',
    'reverse swallow baby',
    'tongue thrust orthodontic',
  ],
  quickAnswer:
    'Tongue thrust (also called infantile swallowing pattern or reverse swallow) is a normal reflex in infants where the tongue pushes forward during swallowing. Most children naturally transition to a mature swallowing pattern by age 4-6. If tongue thrust persists beyond this age, it can affect dental alignment, leading to an open bite or protruding front teeth. Persistent tongue thrust may require evaluation by a pediatric dentist and possible myofunctional therapy.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The tongue thrust reflex is completely normal and essential at this age. It helps babies latch during breastfeeding and protects against choking by pushing foreign objects out of the mouth. This reflex is a sign of normal neurological development.',
    },
    {
      ageRange: '3-6 months',
      context:
        'The tongue thrust reflex begins to diminish around 4-6 months, which is one of the signs of readiness for solid foods. If the reflex is still very strong at 6 months and the baby pushes all food out with the tongue, this is normal and simply means they may need a bit more time before starting solids.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, the tongue thrust reflex should be diminishing significantly, allowing the baby to move food to the back of the mouth and swallow it. Some tongue thrusting during eating is still normal as the baby learns to manage solid foods. If the baby cannot keep any solid food in the mouth at all by 9-10 months, discuss this with your pediatrician.',
    },
    {
      ageRange: '12 months+',
      context:
        'Most toddlers transition to a mature swallowing pattern between ages 2 and 4. If a child continues to swallow by pushing the tongue forward against or between the front teeth after age 4, this can cause dental problems including an anterior open bite (front teeth that do not meet) or flared upper teeth. Persistent tongue thrust is often associated with prolonged pacifier use, thumb-sucking, or mouth breathing.',
    },
  ],
  whenNormal: [
    'Your baby under 6 months pushes food or objects out of their mouth with their tongue',
    'Your baby is learning to eat solids and sometimes pushes food forward before swallowing',
    'Your toddler under age 4 still occasionally swallows with a forward tongue pattern',
    'The tongue thrust reflex is diminishing over time and your child is managing solids well',
  ],
  whenToMention: [
    'Your child is over age 4 and still visibly pushes the tongue forward against the teeth when swallowing',
    'You notice your child\'s front teeth are starting to protrude or there is a gap between the upper and lower front teeth when the mouth is closed',
    'Your child has difficulty transitioning from purees to textured foods past 10-12 months',
  ],
  whenToActNow: [
    'Your baby is unable to swallow any solid food and is gagging or choking frequently on age-appropriate textures, which could indicate oral-motor dysfunction needing evaluation',
    'Your child has significant dental misalignment along with speech difficulties, mouth breathing, and difficulty eating, suggesting a comprehensive evaluation is needed',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAPD',
      citation:
        'American Academy of Pediatric Dentistry. Guideline on Management of the Developing Dentition and Occlusion in Pediatric Dentistry.',
      url: 'https://www.aapd.org/research/oral-health-policies--recommendations/management-of-the-developing-dentition/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Tongue Thrust and Swallowing Patterns. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Tongue Thrust and its Effects on Dentition. International Journal of Clinical Pediatric Dentistry.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28377663/',
    },
  ],
};
