import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-sneezing-a-lot',
  title: 'Baby Sneezing a Lot - Is It Normal?',
  category: 'medical',
  searchTerms: ['baby sneezing a lot','newborn sneezing','baby sneezes all the time','baby sneezing normal','baby sneezing no cold','infant frequent sneezing','why does my baby sneeze so much','newborn sneezing a lot','baby sneezing and congested','is baby sneezing a sign of cold','baby sneezing after feeding','baby sneezing 10 times a day'],
  quickAnswer: 'Frequent sneezing in babies, especially newborns, is very common and almost always normal. Babies sneeze to clear their tiny nasal passages of mucus, lint, dust, and milk. Since they are obligate nose breathers (they breathe primarily through their nose), keeping those passages clear is important. Newborns may sneeze 10+ times a day, and this is not a sign of a cold or allergies. Sneezing becomes concerning only when accompanied by other symptoms like fever, thick green mucus, difficulty breathing, or poor feeding.',
  byAge: [
    { ageRange: '0-3 months', context: 'Newborns are champion sneezers. Their nasal passages are tiny (only about 2-3mm in diameter) and are easily irritated by dust, dry air, breast milk that gets into the nose, and lint from blankets. Sneezing is their primary mechanism for clearing the nose. Exposure to bright light can also trigger sneezing (the photic sneeze reflex) in some babies. As long as your baby is feeding well, breathing comfortably between sneezes, and has no fever or thick nasal discharge, frequent sneezing is completely normal.' },
    { ageRange: '3-6 months', context: 'Sneezing continues to be common but may decrease somewhat as nasal passages grow. If your baby starts daycare or has siblings, they may begin catching colds, which add a runny nose to the sneezing. A cold causes clear to slightly cloudy mucus, mild fussiness, and sometimes a low-grade fever. This is different from normal newborn sneezing, which occurs without any runny nose or other symptoms.' },
    { ageRange: '6-12 months', context: 'Babies at this age sneeze less from normal nasal clearing but may sneeze more from environmental exposure. Crawling babies encounter more dust and particles at floor level. Seasonal allergies are uncommon under 2 years but not impossible if there is a strong family history. If sneezing is accompanied by clear watery eyes, rubbing the nose, and occurs primarily outdoors or during certain seasons, allergies may be developing.' },
    { ageRange: '12-36 months', context: 'Toddlers average 8-10 colds per year, each of which involves plenty of sneezing. Between colds, sneezing from environmental irritants (dust, pet dander, strong smells) is common. If your toddler sneezes frequently with a chronically runny nose, dark circles under eyes, and mouth breathing, allergies should be considered. Your pediatrician can help determine whether allergy testing is appropriate.' },
  ],
  whenNormal: ['Your newborn sneezes many times a day but has no runny nose, fever, or difficulty breathing','Sneezing occurs after exposure to dust, cold air, bright light, or during/after feeding','Your baby is feeding well, sleeping normally, and is generally happy between sneezes','Sneezing is dry (no thick colored mucus) and your baby breathes comfortably'],
  whenToMention: ['Sneezing is accompanied by a chronically runny nose, watery eyes, or rubbing of the nose suggesting possible allergies','Your baby sneezes frequently and also has persistent congestion that is not related to colds','You notice your baby sneezes in response to specific environments or exposures'],
  whenToActNow: ['Sneezing is accompanied by difficulty breathing, chest retracting, nasal flaring, or wheezing','Your baby has a fever (100.4F/38C or higher) along with sneezing, especially if under 3 months old','Your baby is unable to feed because of congestion and is showing signs of dehydration'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-cold-when-to-worry','chronic-congestion','baby-mouth-breathing'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Common Cold in Babies. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Children-and-Colds.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Caring for Your Newborn. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Caring-for-Your-Newborn.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Newborn Reflexes. MedlinePlus.', url: 'https://medlineplus.gov/ency/article/003292.htm' },
  ],
};
