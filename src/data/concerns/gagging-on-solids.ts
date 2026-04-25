import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'gagging-on-solids',
  title: 'Baby Gagging on Solid Food',
  category: 'feeding',
  searchTerms: [
    'baby gagging on food',
    'baby gagging on solids',
    'baby gags every time eating',
    'gagging vs choking baby',
    'baby gags on lumpy food',
    'baby gags on purees',
    'baby led weaning gagging',
    'baby gagging and throwing up food',
    'is gagging normal baby',
    'baby gag reflex food',
  ],
  quickAnswer:
    'Gagging when starting solids is a completely normal and important protective reflex. In young babies, the gag reflex is triggered much further forward on the tongue than in adults, which means they gag more easily as they learn to move food around their mouth. Gagging is different from choking: a gagging baby is noisy, may cough or sputter, and resolves on their own. It typically decreases as your baby practices eating over several weeks.',
  byAge: [
    {
      ageRange: '4-6 months',
      context:
        'Babies at this age have a very sensitive gag reflex that sits on the middle to front part of the tongue, which is actually a safety mechanism. If you are introducing first tastes of purees, gagging is extremely common and does not mean your baby cannot handle solids. Give them time to work through it without intervening, and their gag reflex will gradually move toward the back of the tongue.',
    },
    {
      ageRange: '6-8 months',
      context:
        'This is the peak period for gagging as babies encounter new textures for the first time. Whether you are doing traditional purees or baby-led weaning, some gagging is expected and healthy. Your baby is learning an entirely new motor skill. Stay calm, as your reaction matters. Babies who see a parent panic may develop anxiety around eating.',
    },
    {
      ageRange: '8-10 months',
      context:
        'Gagging usually decreases significantly as babies become more experienced with food textures. If your baby is still gagging intensely on every texture beyond thin purees, it may be worth discussing with your pediatrician or an occupational therapist who specializes in feeding. Some babies need a little extra help with oral motor development.',
    },
    {
      ageRange: '10-12 months',
      context:
        'By this age, most babies have largely desensitized their gag reflex through practice. Occasional gagging on new or challenging textures is still normal. If gagging is persistent, causes vomiting at most meals, or your baby is avoiding textures they should be managing, a feeding evaluation can help identify any underlying oral motor issues.',
    },
  ],
  whenNormal: [
    'Your baby gags when trying a new texture for the first time but continues eating willingly',
    'Your baby gags, coughs briefly, and then swallows or spits out the food on their own',
    'Gagging happens less frequently over time as your baby gets more practice with solids',
    'Your baby gags on larger pieces but handles smaller pieces or mashed food well',
    'Your baby is still interested in food and mealtimes despite occasional gagging',
  ],
  whenToMention: [
    'Your baby gags and vomits at most meals even after several weeks of practicing solids',
    'Your baby has become fearful of eating and cries when placed in the high chair',
    'Gagging is not improving after a month or more of regular solid food exposure',
  ],
  whenToActNow: [
    'Your baby is choking, which means silent, unable to cough or cry, and turning blue, and needs immediate intervention with infant choking first aid',
    'Your baby has had a choking episode that required back blows or the Heimlich maneuver and you need guidance on safe food preparation',
    'Your baby has persistent difficulty swallowing and drools excessively when eating, which could indicate a swallowing disorder',
  ],
  relatedMilestones: [
    'fine-motor',
    'feeding',
    'oral-motor',
  ],
  showSelfReferral: false,
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
