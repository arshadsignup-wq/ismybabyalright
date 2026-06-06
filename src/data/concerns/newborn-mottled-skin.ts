import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-mottled-skin',
  title: 'Mottled or Marbled Skin in Newborns (Cutis Marmorata)',
  category: 'medical',
  searchTerms: [
    'newborn mottled skin',
    'baby marbled skin',
    'newborn skin looks blotchy',
    'cutis marmorata baby',
    'baby skin lace pattern',
    'newborn skin purple patches',
    'baby mottled when cold',
    'newborn skin looks marbled',
    'baby reticulated skin pattern',
    'mottling in infants',
  ],
  quickAnswer:
    'Mottled or marbled-looking skin (cutis marmorata) is very common in newborns and young babies. It appears as a lacy, bluish-red pattern on the skin and typically occurs when your baby is cold or during temperature changes. It is almost always a normal, harmless finding that resolves as your baby grows.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Mottling is very common in newborns because their blood vessels and temperature regulation are still immature. You may notice a lace-like, marbled pattern on the skin, especially on the trunk and extremities, when your baby is undressed, cold, or during a bath. The pattern typically fades quickly when your baby is warmed. This is a normal physiological response and does not indicate illness in an otherwise well-appearing newborn.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Mottling may continue but usually becomes less pronounced as your baby\'s circulatory system matures. You may still see it during baths, diaper changes, or when moving from a warm to a cooler environment. If the mottling resolves with warming and your baby is feeding and behaving normally, it is not a cause for concern.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, mottling should be much less frequent. Occasional mottling during temperature changes is still normal, but persistent or worsening mottling at this age should be mentioned to your pediatrician, especially if your baby also seems unwell.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Mottling should be rare at this age. Persistent cutis marmorata beyond 6 months may sometimes be associated with other conditions and should be discussed with your doctor. Brief episodes related to cold exposure remain normal.',
    },
  ],
  whenNormal: [
    'Lacy, marbled skin pattern that appears when baby is cold or undressed and resolves with warming',
    'Mottling that comes and goes, especially during baths or temperature changes',
    'Baby is otherwise well, feeding normally, and has good energy',
    'The pattern fades quickly when baby is bundled or warmed',
  ],
  whenToMention: [
    'Mottling seems to be getting more frequent or persistent over time',
    'The mottled pattern does not resolve when baby is warmed',
    'Mottling is present on one side of the body only or in a fixed pattern',
  ],
  whenToActNow: [
    'Persistent mottling along with lethargy, poor feeding, fever, or other signs of illness, which could indicate infection or circulatory problems',
    'Widespread mottling that does not improve with warming along with rapid breathing, grunting, or color changes of the lips and tongue',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Common Skin Conditions in Newborns. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Cutis Marmorata. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK549774/',
    },
  ],
  relatedConcernSlugs: ['newborn-acrocyanosis-blue-hands-feet', 'cyanosis-baby', 'newborn-room-temperature-ideal'],
};
