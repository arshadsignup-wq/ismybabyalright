import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'mucus-in-baby-poop',
  title: "Mucus in Baby's Poop",
  category: 'digestive',
  searchTerms: [
    'mucus in baby poop',
    'slimy stool baby',
    'jelly like mucus in diaper',
    'stringy mucus in baby stool',
    'green mucus poop baby',
    'mucus in breastfed baby poop',
    'mucusy poop normal baby',
    'clear mucus baby diaper',
  ],
  quickAnswer:
    'Small amounts of mucus in baby poop are normal because the intestines produce mucus to help stool move through the digestive tract. It may appear as slimy streaks, clear jelly-like blobs, or a shiny coating on the stool. However, consistently large amounts of mucus, particularly when accompanied by blood, diarrhea, or fussiness, may indicate a food sensitivity, infection, or other digestive issue worth discussing with your pediatrician.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Mucus in newborn stool is very common as the digestive system is still maturing. Breastfed babies in particular may have slimy, mucusy stools from time to time. If you notice significant mucus along with blood streaks in a breastfed baby, it could suggest a cow\'s milk protein sensitivity passed through breast milk. Small amounts of clear or yellowish mucus without blood are usually nothing to worry about.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Increased drooling from early teething means babies swallow a lot of saliva, which can appear as mucus in the diaper. A mild cold or upper respiratory infection can also lead to mucusy stools when babies swallow nasal drainage. These causes are harmless and resolve on their own. If mucus is persistent and accompanied by fussiness or poor feeding, consider discussing food sensitivity with your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Starting solids may temporarily increase mucus in stool as the digestive system adjusts to new foods. If mucus consistently appears after a specific food is introduced, it could signal a sensitivity or intolerance to that food. Viral or bacterial infections, which become more common as babies become mobile and explore with their mouths, can also cause mucusy diarrhea.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Occasional mucus in toddler stool is usually related to a mild viral illness, dietary changes, or excess drooling from molar teething. Persistent mucus combined with other symptoms like chronic diarrhea, poor weight gain, blood in stool, or abdominal pain should be evaluated by your pediatrician to rule out conditions like food allergy, infection, or, rarely, inflammatory bowel disease.',
    },
  ],
  whenNormal: [
    'You see small amounts of clear or slightly yellow mucus in an otherwise normal stool',
    'Your baby is teething heavily and has a bit more mucus in their diaper than usual',
    'Mucusy stools appear during a cold and resolve when the cold clears up',
    'Mucus appears briefly after introducing a new food but resolves as the gut adjusts',
  ],
  whenToMention: [
    'You consistently see large amounts of mucus in your baby\'s stool over more than a few days',
    'Mucus in stool appears reliably after a specific food, suggesting a possible food sensitivity or allergy',
    'Your baby has mucusy stools along with increased fussiness, poor feeding, or worsening gas',
    'Mucus is accompanied by persistent diarrhea or changes in your baby\'s growth pattern',
  ],
  whenToActNow: [
    'There is blood mixed with mucus in the stool, especially in a baby under 6 months',
    'Your baby has mucusy diarrhea with signs of dehydration such as fewer wet diapers, no tears when crying, or a sunken fontanelle',
    'Your baby passes large amounts of red, jelly-like mucus or "currant jelly" stool along with severe pain, vomiting, or lethargy, which could indicate intussusception requiring emergency care',
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
        "American Academy of Pediatrics. Baby's First Bowel Movements. HealthyChildren.org.",
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Babys-First-Bowel-Movements.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Cow\'s Milk Protein Allergy in Infants. National Library of Medicine.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/31083822/',
    },
  ],
};
