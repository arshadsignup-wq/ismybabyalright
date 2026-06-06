import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-teething-disrupting-sleep',
  title: 'Teething and Sleep Disruption',
  category: 'sleep',
  searchTerms: ['teething disrupting sleep','baby teething not sleeping','teething night wakings','teething pain night','baby sleep worse teething','teething sleep problems','does teething affect sleep','how long teething affects sleep','teething sleep regression','baby awake teething'],
  quickAnswer: 'Teething can temporarily disrupt sleep for a few days around each tooth eruption. The discomfort is often worst at night. However, teething is frequently blamed for sleep disruptions that have other causes. True teething disruption is brief, usually limited to the days just before and after a tooth breaks through.',
  byAge: [
    { ageRange: '4-8 months', context: 'First teeth typically appear around 6 months. Sleep may be disrupted for 2-4 days around eruption. Offer a cold teething toy before bed and ask about appropriate pain relief. Avoid blaming all disruptions on teething - the 4-month regression is more common.' },
    { ageRange: '8-12 months', context: 'Multiple teeth may emerge quickly. If your baby was sleeping well and suddenly has rough nights with visible gum swelling, teething is a likely cause. Sleep should return to normal within a day or two of the tooth coming through.' },
    { ageRange: '12-18 months', context: 'Molars around 12-18 months can be especially painful due to their size, causing more significant sleep disruption. Appropriate pain relief before bed can help. If disruption persists beyond a week after the molar erupts, look for other causes.' },
    { ageRange: '18-30 months', context: 'Canines and second molars arrive during this period. Disruption is brief (2-5 days) and coincides with visible gum changes. If sleep has been disrupted for weeks, other factors are more likely the cause.' },
  ],
  whenNormal: ['Sleep disruption lasts 2-5 days around tooth eruption','Your baby is fussier with visible gum swelling','Sleep returns to normal once the tooth breaks through','Your baby is otherwise healthy and eating well'],
  whenToMention: ['Disruption persists more than 1-2 weeks without improvement','Your baby has fever over 101°F which is unlikely from teething alone','Teething symptoms include diarrhea or rash that concerns you'],
  whenToActNow: ['Your baby has high fever, refuses to eat or drink, or seems unusually ill','Gums appear infected with significant swelling, pus, or bleeding'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Teething: 4 to 7 Months. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Teething-4-to-7-Months.aspx' },
    { org: 'NIH', citation: 'Massignan C et al. Signs and symptoms of primary tooth eruption: a meta-analysis. Pediatrics. 2016;137(3):e20153501.', url: 'https://pubmed.ncbi.nlm.nih.gov/26908659/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Teething Pain Relief. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/default.aspx' },
  ],
  relatedConcernSlugs: ['baby-teeth-grinding-sleep','frequent-night-wakings','baby-illness-sleep-disruption'],
};
