import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-verruca-foot-wart',
  title: 'Plantar Warts (Verruca) in Toddlers',
  category: 'skin',
  searchTerms: ['toddler plantar wart', 'baby verruca', 'child wart on foot', 'toddler foot wart', 'plantar wart toddler treatment', 'verruca child foot', 'toddler painful foot bump', 'wart sole of foot toddler', 'toddler walking on wart', 'verruca plantaris child'],
  quickAnswer: 'Plantar warts (verrucae) are warts on the soles of the feet caused by HPV. They are less common in toddlers than in older children but can occur, especially in children who walk barefoot in moist communal areas. They may cause discomfort when walking. Most plantar warts resolve on their own, though treatment can speed resolution.',
  byAge: [
    { ageRange: '0-3 months', context: 'Plantar warts are essentially unheard of in young infants who are not yet walking. Any unusual bump on a newborn\'s foot is more likely a different condition and should be evaluated.' },
    { ageRange: '3-6 months', context: 'Plantar warts are not expected at this age. If you notice a bump on the sole of your baby\'s foot, it is likely a callus, blister, or another benign finding. Have your pediatrician evaluate it.' },
    { ageRange: '6-12 months', context: 'As babies begin standing and cruising, exposure to the HPV virus through floors becomes possible but plantar warts remain uncommon. If a rough, flat bump appears on the sole of the foot, your pediatrician can determine whether it is a wart or another condition.' },
    { ageRange: '12-24 months', context: 'Toddlers who walk barefoot at pools, gyms, or daycare may develop plantar warts. They appear as rough, flat growths on the sole, sometimes with tiny black dots (clotted blood vessels). If the wart causes pain with walking, treatment with over-the-counter salicylic acid patches or professional treatment may be recommended.' },
  ],
  whenNormal: ['A small plantar wart that is not causing pain or difficulty walking', 'A wart that is stable in size and not spreading'],
  whenToMention: ['A plantar wart is causing pain when your toddler walks', 'Multiple plantar warts are developing', 'You want to discuss treatment to speed resolution'],
  whenToActNow: ['A foot lesion in a young infant that looks unusual and is not a typical wart', 'A plantar wart becomes severely painful, bleeds heavily, or shows signs of infection', 'A rapidly growing or deeply embedded lesion on the foot that does not look like a typical wart'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAD', citation: 'American Academy of Dermatology. Warts: Diagnosis and Treatment.', url: 'https://www.aad.org/public/diseases/a-z/warts-treatment' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Warts. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Warts.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Plantar Warts. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK431047/' },
  ],
  relatedConcernSlugs: ['baby-wart-toddler', 'molluscum'],
};
