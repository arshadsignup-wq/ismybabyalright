import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-mole-new-growing',
  title: 'New or Growing Moles on Baby',
  category: 'skin',
  searchTerms: ['baby new mole', 'baby mole growing', 'baby mole getting bigger', 'infant new mole appeared', 'baby brown spot growing', 'toddler new mole', 'baby mole changing', 'should I worry about baby mole', 'congenital mole baby growing', 'baby dark mole appeared'],
  quickAnswer: 'It is normal for babies and young children to develop new moles, and existing moles may grow proportionally as the child grows. Most childhood moles are benign. Congenital moles (present at birth) that are very large do need monitoring. Skin cancer from moles is extremely rare in young children, but any mole that changes rapidly, looks unusual, or bleeds should be checked.',
  byAge: [
    { ageRange: '0-3 months', context: 'Moles present at birth are called congenital melanocytic nevi. Small ones (under 1.5 cm) are common and usually benign. Medium and large congenital moles need monitoring by a dermatologist. It is normal for a congenital mole to grow proportionally with your baby\'s body.' },
    { ageRange: '3-6 months', context: 'New moles may begin to appear in the first year of life. This is normal and is part of the natural development of skin pigmentation. Moles in babies tend to be evenly colored and smooth. Note the size and appearance of any moles so you can track changes over time.' },
    { ageRange: '6-12 months', context: 'It is common for a few new moles to appear. They may be flat or slightly raised and are usually evenly brown. Sun-exposed skin may develop moles earlier, which is one reason sun protection is important from infancy. Point out any new moles to your pediatrician at routine visits.' },
    { ageRange: '12-24 months', context: 'Children continue to develop new moles throughout childhood, peaking in the teenage years. Moles that are growing proportionally with the child, remain evenly colored, and have smooth borders are typically normal. Irregular moles that are multicolored, asymmetric, or changing rapidly should be evaluated.' },
  ],
  whenNormal: ['A few small, evenly colored moles that appear gradually during infancy and early childhood', 'A congenital mole that grows proportionally with your child\'s body', 'Flat or slightly raised moles with smooth, regular borders'],
  whenToMention: ['A new mole appears and you want your pediatrician to assess it at the next visit', 'An existing mole seems to be changing in color, shape, or size disproportionately', 'A mole is in a location that gets frequently irritated, such as the diaper area or waistline'],
  whenToActNow: ['A mole starts bleeding, oozing, or becomes painful without injury', 'A mole develops multiple colors, irregular borders, or rapid asymmetric growth', 'A large congenital mole (greater than 20 cm) has not been evaluated by a dermatologist'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAD', citation: 'American Academy of Dermatology. Moles: Overview.', url: 'https://www.aad.org/public/diseases/a-z/moles-overview' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Moles. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Moles.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Congenital Melanocytic Nevi. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK538181/' },
  ],
  relatedConcernSlugs: ['birthmarks', 'baby-mole-irregular-shape', 'cafe-au-lait-spots'],
};
