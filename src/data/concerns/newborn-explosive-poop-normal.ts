import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-explosive-poop-normal',
  title: 'Forceful (Explosive) Bowel Movements in Newborns',
  category: 'digestive',
  searchTerms: ['explosive poop newborn', 'baby forceful bowel movement', 'newborn blowout diaper', 'baby loud poop', 'newborn forceful pooping', 'baby projectile poop', 'explosive breastfed baby poop', 'newborn diaper blowouts', 'baby loud farting pooping', 'is explosive poop normal baby'],
  quickAnswer: 'Explosive or forceful bowel movements are very common and usually normal in newborns, especially breastfed babies. The loose, watery nature of breastfed stools combined with immature sphincter control often results in loud, forceful pooping. As long as your baby is gaining weight and comfortable, explosive stools are not a cause for concern.',
  byAge: [
    { ageRange: '0-1 month', context: 'Newborns, particularly breastfed babies, often have impressively loud and forceful bowel movements. This is because breastfed stools are naturally loose and watery, and the gastrocolic reflex (which stimulates bowel activity during or after feeding) is very active in newborns. The sound effects can be surprising, but this is completely normal. Diaper blowouts are common. Ensuring a proper diaper fit and sizing up if needed can help contain messes.' },
    { ageRange: '1-3 months', context: 'Explosive stools may continue, particularly in breastfed babies. This is still normal. If stools become truly watery (like water with no substance) or much more frequent than usual, it could indicate diarrhea, which should be monitored.' },
    { ageRange: '3-6 months', context: 'Stool patterns often become more predictable. Explosive stools may decrease in frequency as the digestive system matures.' },
    { ageRange: '6-12 months', context: 'With solid foods, stools become more formed. Explosive stools are less common at this age.' },
  ],
  whenNormal: ['Forceful, loud bowel movements in a newborn, especially breastfed', 'Stools that are yellow, seedy, and loose but not watery', 'Baby is comfortable before, during, and after bowel movements', 'Good weight gain and adequate wet diapers'],
  whenToMention: ['Stools become truly watery (no substance, like water) or much more frequent than usual', 'Blood or mucus appears in the stool', 'Baby seems in pain with each bowel movement'],
  whenToActNow: ['Watery diarrhea with signs of dehydration (fewer wet diapers, sunken fontanelle, lethargy)', 'Blood in stool combined with a distended or tender abdomen'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Baby Poop: What\'s Normal. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Normal Infant Stool Patterns. MedlinePlus.', url: 'https://medlineplus.gov/ency/article/003300.htm' },
  ],
  relatedConcernSlugs: ['newborn-watery-stools-breastfed', 'newborn-transitional-stools', 'newborn-gas-pain-signs'],
};
