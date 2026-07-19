import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'mottling',
  title: 'Mottled Skin (Cutis Marmorata) in Babies',
  bodySystem: 'skin',
  description: 'Mottling is a lace-like, bluish-purple marbled pattern on the skin caused by blood vessel constriction and dilation. In newborns and young infants, mild mottling when cold or undressed is extremely common and benign (physiologic cutis marmorata). It should resolve when baby is warmed. However, persistent mottling, mottling with illness, or mottling that does not resolve with warming can indicate serious conditions such as sepsis, shock, or heart problems.',
  possibleCauses: [
    { cause: 'Physiologic cutis marmorata (normal response to cold)', likelihood: 'common' },
    { cause: 'Immature autonomic nervous system in newborns', likelihood: 'common' },
    { cause: 'Cold environment or during undressing for bath', likelihood: 'common' },
    { cause: 'Sepsis or serious bacterial infection', likelihood: 'rare' },
    { cause: 'Shock (poor circulatory perfusion)', likelihood: 'rare' },
    { cause: 'Congenital heart disease', likelihood: 'rare' },
    { cause: 'Cutis marmorata telangiectatica congenita (CMTC — persistent vascular malformation)', likelihood: 'rare' },
    { cause: 'Hypothermia', likelihood: 'uncommon' },
    { cause: 'Down syndrome (more prominent mottling)', likelihood: 'uncommon' },
  ],
  byAge: [
    { ageRange: '0-2 months', normalVariation: 'Mottling when cold, undressed, or during bathing is extremely common and normal. Should resolve within minutes of warming. More prominent in premature babies and babies with fair skin.', whenToWorry: 'Mottling that persists after baby is warmed and wrapped. Mottling with fever, lethargy, or poor feeding. Grey or ashen mottling (circulatory concern). Mottling with rapid breathing or grunting. Persistent deep mottling on one side of the body only (CMTC).' },
    { ageRange: '2-6 months', normalVariation: 'Physiologic mottling typically decreases as the autonomic nervous system matures. Brief mottling when cold is still normal but should be less frequent.', whenToWorry: 'Mottling becoming more frequent or prominent (rather than improving). Mottling with illness, fever, or behavioral changes. Mottling at rest in warm environment. Mottling associated with fast breathing or difficulty feeding.' },
    { ageRange: '6-12 months', normalVariation: 'Physiologic mottling should be largely resolved by this age. Very mild, brief mottling when cold may still occur occasionally.', whenToWorry: 'Any significant mottling at this age is less expected and warrants assessment. Mottling with pallor, rapid breathing, or altered behavior. Persistent mottled pattern that never fully resolves.' },
    { ageRange: '1-3 years', normalVariation: 'Mottling is uncommon at this age. Very faint mottling when very cold may occur.', whenToWorry: 'Any noticeable mottling in a toddler should prompt assessment. Mottling with fever or signs of illness is concerning for sepsis/poor perfusion. Cold mottled extremities with warm trunk (poor circulation).' },
  ],
  urgencyLevels: {
    emergency: [
      'Mottling with fever, lethargy, and baby difficult to rouse (sepsis)',
      'Grey/ashen mottling with rapid breathing and poor feeding (shock or heart failure)',
      'Mottling with cold extremities, fast heart rate, and weak pulses',
      'Mottling that persists despite warming in an unwell-appearing baby',
      'Mottling with blue lips or tongue (cyanosis)',
    ],
    urgent: [
      'Mottling with fever in baby under 3 months',
      'Persistent mottling in warm environment without clear cause',
      'Mottling with reduced urine output or poor feeding',
      'New onset persistent mottling pattern not previously present',
    ],
    sameDay: [
      'Mottling that seems more frequent or prominent than expected for age',
      'Persistent unilateral mottling pattern (CMTC evaluation)',
      'Mottling that concerns parent and is not clearly resolving with warming',
    ],
    monitor: [
      'Brief mottling when cold or during undressing that resolves quickly with warming (normal in young infants)',
      'Mild mottling during bath time that resolves immediately after wrapping',
      'Known physiologic mottling in well premature baby',
    ],
  },
  homeRemedies: [
    'Warm the baby: skin-to-skin contact, warm blanket, or warmer room temperature',
    'Keep room temperature comfortable (68-72F / 20-22C) for young infants',
    'Dress baby in appropriate layers for the environment',
    'Check if mottling resolves within a few minutes of warming — if yes, this is reassuring',
    'Monitor for other signs of illness: fever, poor feeding, lethargy, fast breathing',
    'For premature babies: mottling may persist longer and be more prominent — discuss with your pediatrician what is baseline for your baby',
    'If mottling does NOT resolve with warming, this is NOT normal — seek medical attention',
    'Trust your instinct: if your baby looks "off" with mottled skin, seek help even if you cannot pinpoint why',
  ],
  relatedSymptomSlugs: ['pale-skin', 'petechiae', 'bruising'],
  relatedIllnessSlugs: ['sepsis', 'congenital-heart-disease', 'hypothermia'],
  relatedConcernSlugs: ['baby-mottled-skin', 'baby-looks-pale', 'baby-grey-color'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Newborn Skin: Common Conditions. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/default.aspx' },
    { org: 'NICE', citation: 'National Institute for Health and Care Excellence. Fever in under 5s: assessment and initial management (NG143). Mottled skin as traffic light sign.', url: 'https://www.nice.org.uk/guidance/ng143' },
    { org: 'NHS', citation: 'NHS. Sepsis in children — symptoms including mottled skin.', url: 'https://www.nhs.uk/conditions/sepsis/' },
  ],
};
