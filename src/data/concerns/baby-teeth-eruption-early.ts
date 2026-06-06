import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-teeth-eruption-early',
  title: 'My Baby Got Teeth Very Early',
  category: 'physical',
  searchTerms: ['baby teeth early', 'baby teeth 3 months', 'baby teeth 4 months', 'early teething baby', 'natal teeth baby', 'neonatal teeth', 'baby born with teeth', 'early tooth eruption', 'premature teething baby', 'baby first tooth early'],
  quickAnswer: 'While most babies get their first tooth around 6 months, some babies teethe as early as 3-4 months, and rarely, babies are born with teeth (natal teeth). Early teething is usually a normal variation and not a medical concern. Natal teeth present at birth may need evaluation as they can be loose and pose a choking risk.',
  byAge: [
    { ageRange: '0-2 months', context: 'Teeth present at birth (natal teeth) or appearing in the first month (neonatal teeth) occur in about 1 in 2,000-3,000 births. Your pediatrician or dentist should evaluate them, as loose natal teeth may need removal to prevent choking. Firmly attached natal teeth are typically left in place.' },
    { ageRange: '3-4 months', context: 'Getting teeth at 3-4 months is early but within the normal range. Your baby may drool more, chew on things, and be fussier. Early teeth are not harmful and do not indicate any medical problem. Begin gentle tooth cleaning with a soft cloth once teeth appear.' },
    { ageRange: '4-6 months', context: 'Teething in this range is common. The lower central incisors usually come in first. Early teething means earlier dental care - schedule your baby\'s first dental visit by age 1 or within 6 months of the first tooth.' },
    { ageRange: '6-12 months', context: 'This is the most typical teething window. Regardless of when teeth started, ongoing dental hygiene is important. Clean teeth with a soft baby toothbrush and a tiny smear of fluoride toothpaste.' },
  ],
  whenNormal: ['Teeth appear between 3-12 months.', 'Teeth are firm and well-attached.', 'Your baby is otherwise developing normally.', 'Early teething runs in the family.'],
  whenToMention: ['Baby was born with teeth (natal teeth).', 'A tooth seems very loose and could be a choking risk.', 'Teeth appear discolored or unusual.'],
  whenToActNow: ['A loose natal tooth that could be aspirated.', 'Teeth accompanied by gum infection or significant bleeding.'],
  relatedMilestones: ['dental-first-tooth'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-teeth-eruption-very-late', 'baby-teeth-eruption-out-of-order'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Baby\'s First Tooth', url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Babys-First-Tooth-Facts-Parents-Should-Know.aspx' },
    { org: 'NIH', citation: 'Cunha RF, et al. Natal and Neonatal Teeth: Review of the Literature. Pediatr Dent. 2001;23(2)', url: 'https://pubmed.ncbi.nlm.nih.gov/11340730/' },
    { org: 'CDC', citation: 'CDC - Oral Health for Children', url: 'https://www.cdc.gov/oralhealth/basics/childrens-oral-health/index.html' },
  ],
};
