import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-sucking-blisters',
  title: 'Sucking Blisters on Lips and Hands',
  category: 'skin',
  searchTerms: ['baby sucking blister lip', 'newborn blister on lip', 'baby lip callus', 'sucking callus baby', 'nursing blister newborn', 'baby blister from sucking thumb', 'baby blister upper lip', 'newborn lip blister breastfeeding', 'sucking blister hand baby', 'baby friction blister lip'],
  quickAnswer:
    'Sucking blisters or calluses are common, harmless skin changes caused by the friction of breastfeeding or bottle-feeding. They appear as a thickened, sometimes whitish or blister-like area on the center of the upper lip. Some babies are even born with sucking blisters on their hands or wrists from sucking in the womb. They resolve on their own and do not need treatment.',
  byAge: [
    { ageRange: '0-1 month', context: 'Sucking blisters or calluses typically appear on the center of the upper lip within the first few weeks of life. They look like a thickened, slightly raised, whitish area or a small blister. They are caused by the friction of sucking during feeding and are not a sign of a poor latch or any feeding problem. Some babies are born with sucking blisters on their fingers, hands, or wrists from sucking in utero. These are completely harmless. Do not try to pop or peel the blister. It will resolve on its own.' },
    { ageRange: '1-3 months', context: 'The sucking callus may come and go as it builds up and peels off. It may be more noticeable after longer feeding sessions. This continues to be completely normal and does not indicate feeding problems. The blister is painless for your baby.' },
    { ageRange: '3-6 months', context: 'Sucking blisters typically become less prominent as feeding becomes more established and efficient. They may still be visible in frequent nursers.' },
    { ageRange: '6-12 months', context: 'Sucking calluses usually resolve as feeding patterns change and solid foods are introduced. They have no lasting effects on the lips.' },
  ],
  whenNormal: ['A thickened, whitish area or small blister on the center of the upper lip', 'The callus peels off and reforms cyclically', 'Baby feeds well and is not bothered by the blister', 'A blister on the hand or wrist at birth from in-utero sucking'],
  whenToMention: ['You are unsure whether a blister is from sucking or something else', 'Multiple blisters appear in unusual locations', 'The blister appears to be causing pain during feeding'],
  whenToActNow: ['Blisters that appear red, swollen, oozing, or seem infected', 'Multiple blisters or vesicles on the skin, face, or mouth that could indicate herpes infection, which requires urgent evaluation'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Your Newborn\'s Skin. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Neonatal Skin Conditions. MedlinePlus.', url: 'https://medlineplus.gov/ency/article/002302.htm' },
  ],
  relatedConcernSlugs: ['newborn-dry-peeling-lips', 'baby-blister-on-lip-from-nursing'],
};
