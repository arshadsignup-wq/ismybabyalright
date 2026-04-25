import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'excessive-drooling',
  title: 'Baby Excessive Drooling',
  category: 'behavior',
  searchTerms: [
    'baby drooling a lot',
    'excessive drooling baby',
    'baby drooling not teething',
    'why is my baby drooling so much',
    'baby drool rash',
    'baby drooling at 2 months',
    'baby drooling at 3 months',
    'baby soaking through bibs',
    'toddler drooling excessively',
    'is drooling normal for babies',
    'baby drooling and chewing hands',
  ],
  quickAnswer:
    'Excessive drooling in babies is very common and almost always completely normal. Babies typically start drooling more between 2-4 months as their salivary glands become more active, but they have not yet learned to swallow saliva efficiently. Drooling often increases further when teething begins. Most babies naturally drool less as they develop better oral motor control by age 18-24 months.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Very young babies generally do not drool much because their salivary glands are not yet fully active. If your newborn is drooling excessively, it could be related to feeding difficulties or, rarely, trouble swallowing. For most babies at this age, some drooling is normal and not a concern.',
    },
    {
      ageRange: '2-4 months',
      context:
        'This is when drooling typically kicks into high gear. Your baby\'s salivary glands are becoming more active, but they have not yet developed the coordination to swallow all that saliva. This coincides with the phase when babies start putting their hands and objects in their mouths. Many parents wonder if their baby is teething this early  -  while possible, the drooling is usually just a normal developmental stage, not necessarily a sign of teeth.',
    },
    {
      ageRange: '4-12 months',
      context:
        'Drooling continues and may increase as teething begins, typically between 4-7 months. Saliva actually serves a helpful purpose during teething  -  it has antibacterial properties that protect irritated gums. You may notice more drooling when specific teeth are coming in. Keep the chin and neck dry when possible to prevent drool rash, and change wet bibs and clothes frequently.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Drooling gradually decreases as your toddler develops better oral motor control and learns to swallow saliva more effectively. Some increased drooling may happen when molars come in. If your toddler is still drooling excessively after 18-24 months, especially if it is not related to teething, mention it to your pediatrician as they may want to check oral motor development.',
    },
    {
      ageRange: '2+ years',
      context:
        'Most children have significantly reduced drooling by age 2. If excessive drooling persists well beyond age 2 and is not related to teething, it is worth discussing with your pediatrician. Persistent drooling can sometimes be related to oral motor tone, enlarged tonsils or adenoids, chronic nasal congestion, or other factors that are all very treatable.',
    },
  ],
  whenNormal: [
    'Your baby is between 2-12 months old and drooling frequently  -  this is the peak drooling age and is completely normal',
    'Drooling increases around 4-7 months when teething typically begins, and your baby is also chewing on things',
    'Your baby is happy, feeding well, and developing normally despite the drooling',
    'You need to change bibs frequently or your baby soaks through shirts  -  some babies simply produce more saliva than others',
    'Drooling comes and goes, often worse during teething episodes or when putting objects in their mouth',
  ],
  whenToMention: [
    'Your child is over 2 years old and still drooling excessively when not teething',
    'Drooling is accompanied by difficulty swallowing, gagging on liquids or solids, or chronic coughing during feeding',
    'Your baby has persistent drool rash that is not improving with gentle skincare, or the rash seems infected',
    'Drooling is accompanied by mouth breathing, snoring, or noisy breathing, which could suggest enlarged tonsils or adenoids',
  ],
  whenToActNow: [
    'Your baby suddenly starts drooling excessively along with difficulty breathing, inability to swallow, or a high fever, which could indicate an infection like epiglottitis or a foreign object',
    'Your baby is drooling excessively and refusing to eat or drink, seems to be in pain when swallowing, or has visible sores in the mouth',
    'Drooling starts suddenly after a possible ingestion of a toxic substance or small object',
  ],
  relatedMilestones: [
    'feeding',
    'oral-motor-development',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Teething: 4 to 7 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Teething-4-to-7-Months.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Drooling. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/mouth-teeth/Pages/Drooling.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By 4 Months.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-4mo.html',
    },
  ],
};
