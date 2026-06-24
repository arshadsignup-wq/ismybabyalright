import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-irritable-during-feeding-fussy',
  title: 'My Baby Is Fussy and Irritable During Feedings',
  category: 'feeding',
  searchTerms: [
    'baby fussy during feeding',
    'baby cries while eating',
    'baby irritable while nursing',
    'baby arching back during feeding',
    'baby pulls off breast crying',
    'baby fights bottle',
    'baby uncomfortable during feeding',
    'baby fussy at breast',
    'baby screams during bottle',
    'newborn fussy feeder',
    'baby fusses mid feed',
  ],
  quickAnswer:
    'Fussiness during feeding is very common and can have many causes, most of them manageable. Common reasons include gas, reflux, fast or slow milk flow, overtiredness, overstimulation, ear infections, teething, or food sensitivities. While occasional fussy feeding is normal, persistent distress during every feeding, especially if accompanied by poor weight gain, arching, or refusal to eat, should be evaluated by your pediatrician to rule out conditions like reflux, milk protein allergy, or tongue tie.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns commonly fuss during feedings for several reasons. An overactive letdown (milk coming too fast) can cause gagging, pulling off, and crying at the breast. A slow flow can frustrate a hungry baby. Gas and immature digestion cause discomfort. Tongue tie can make latching painful and inefficient. Reflux can cause pain when acid comes up during or after feeds. Signs to watch for: arching the back during feeds, refusing to latch or take a bottle, excessive spitting up, and poor weight gain. Burping frequently during feeds, trying different feeding positions, and paced bottle feeding can help.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies at this age become more easily distracted during feedings, which can look like fussiness. They may pop on and off the breast or push the bottle away to look around. Feeding in a quiet, dimly lit room can help. This is also a peak age for reflux-related feeding difficulties. If your baby consistently arches, cries, or pulls away during feeds and is not gaining weight well, talk to your pediatrician about reflux management. A cow\'s milk protein allergy (through breast milk or formula) can also cause feeding irritability along with eczema, bloody stools, or excessive gas.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies start solids, some may become less interested in bottle or breast feeding and fuss when offered. Teething can cause significant fussiness during feeding due to gum pain — the sucking motion can aggravate sore gums. Ear infections also cause pain during feeding because swallowing creates pressure changes in the ear. If fussiness is sudden, check for signs of illness (fever, pulling at ears, congestion). A nursing strike (sudden breast refusal) can occur at this age and usually resolves within a few days with patience and skin-to-skin contact.',
    },
  ],
  whenNormal: [
    'Your baby occasionally fusses during feeds when they are overtired, gassy, or distracted but otherwise eats well and gains weight.',
    'Your baby pulls off the breast or pushes away the bottle during let-down but resumes feeding — this often indicates fast milk flow.',
    'Your baby fusses during feeds for a day or two during a cold or mild illness but returns to normal feeding when they feel better.',
  ],
  whenToMention: [
    'Your baby is fussy during most or all feedings and feeding times are consistently stressful.',
    'Your baby arches their back, gags, or seems to be in pain during feeds — this may indicate reflux.',
    'Your baby\'s weight gain has slowed or plateaued and they are not taking in adequate amounts.',
  ],
  whenToActNow: [
    'Your baby completely refuses to eat for more than 8-12 hours, is lethargic, or shows signs of dehydration (dry mouth, no tears, fewer than 6 wet diapers in 24 hours, sunken fontanelle) — seek medical care.',
    'Your baby has projectile vomiting after every feeding, especially if under 3 months old — this could indicate pyloric stenosis and needs urgent evaluation.',
    'Your baby is losing weight, appears very unwell, or has blood in their stool or vomit — seek immediate medical evaluation.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-nursing-strike-refusing-breast', 'bottle-preference', 'baby-gulping-air', 'tongue-tie'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Common Breastfeeding Challenges',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Common-Breastfeeding-Challenges.aspx',
    },
    {
      org: 'La Leche League',
      citation:
        'La Leche League International — Fussy Baby at the Breast',
      url: 'https://www.llli.org/breastfeeding-info/fussy-baby/',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic — Infant Reflux: Symptoms and Causes',
      url: 'https://www.mayoclinic.org/diseases-conditions/infant-acid-reflux/symptoms-causes/syc-20351408',
    },
  ],
};
