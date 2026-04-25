import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'mucus-in-stool',
  title: 'Mucus in Baby\'s Poop',
  category: 'digestive',
  searchTerms: [
    'mucus in baby poop',
    'baby poop slimy',
    'slimy poop baby',
    'stringy mucus in baby stool',
    'baby poop jelly like mucus',
    'mucus in infant stool',
    'green mucus baby poop',
    'baby poop mucus normal',
    'mucusy baby poop breastfed',
    'mucus in baby diaper',
  ],
  quickAnswer:
    'Small amounts of mucus in baby poop are quite normal. The intestines naturally produce mucus to help stool pass smoothly. However, consistently large amounts of mucus, especially if accompanied by blood, fussiness, or changes in feeding, can sometimes indicate a food sensitivity, infection, or other digestive issue worth discussing with your pediatrician.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'It is common to see some mucus in newborn stools as their digestive system matures. Breastfed babies in particular may have slimy or mucusy stools from time to time. If you see a lot of mucus along with blood streaks in a breastfed baby, it could suggest a cow\'s milk protein sensitivity passed through breast milk.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Mucus in stool at this age can be related to increased drooling from teething, as babies swallow excess saliva which can show up as mucus in their diaper. A mild cold or upper respiratory infection can also cause mucusy stools when babies swallow nasal mucus. These causes are harmless.',
    },
    {
      ageRange: '6-12 months',
      context:
        'When starting solids, some foods may temporarily increase mucus in the stool as the digestive system adjusts. If mucus appears consistently after a particular food, it may indicate a sensitivity to that food. Infections from viruses or bacteria can also cause mucusy diarrhea.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Occasional mucus in toddler stool is usually harmless and often related to a mild viral illness or dietary changes. Persistent mucus along with other symptoms like diarrhea, poor weight gain, or blood should be evaluated to rule out conditions like inflammatory bowel disease or persistent infection, though these are uncommon.',
    },
  ],
  whenNormal: [
    'You see a small amount of clear or slightly yellow mucus in an otherwise normal stool',
    'Your baby is teething and has a bit more mucus in their diaper than usual',
    'Your baby has a cold and you notice mucusy stools for a few days',
    'Mucus appears once or twice but your baby is otherwise happy, feeding well, and growing normally',
  ],
  whenToMention: [
    'You consistently see large amounts of mucus in your baby\'s stool over several days',
    'Mucus in stool appears after introducing a specific new food, suggesting possible food sensitivity',
    'Your baby has mucusy stools along with increased fussiness, gas, or poor feeding',
  ],
  whenToActNow: [
    'There is blood mixed with mucus in the stool, especially in a young baby',
    'Your baby has mucusy diarrhea with signs of dehydration such as fewer wet diapers, no tears, or a sunken fontanelle',
    'Your baby has large amounts of red, jelly-like mucus in stool along with severe pain or vomiting, which could indicate intussusception',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Many Colors of Poop. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/The-Many-Colors-of-Poop.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Baby\'s First Bowel Movements. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Babys-First-Bowel-Movements.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant and Toddler Nutrition.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/index.html',
    },
  ],
};
