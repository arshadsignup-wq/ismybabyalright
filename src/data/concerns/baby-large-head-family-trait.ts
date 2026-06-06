import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-large-head-family-trait',
  title: 'My Baby Has a Large Head That Runs in the Family',
  category: 'physical',
  searchTerms: ['baby large head family trait', 'familial macrocephaly', 'big head runs in family baby', 'baby big head genetic', 'baby large head normal', 'benign familial macrocephaly', 'big head baby family history', 'hereditary large head baby', 'baby head size family', 'megalencephaly family'],
  quickAnswer: 'Familial (benign) macrocephaly is the most common cause of a large head in babies. If one or both parents have large heads and your baby is developing normally, the large head is almost certainly an inherited trait. Your pediatrician will still monitor head growth to ensure it follows a consistent trajectory.',
  byAge: [
    { ageRange: '0-6 months', context: 'If your baby\'s head is large and one or both parents have large heads, your pediatrician will likely measure parental head circumferences. If the large head is familial and your baby is developing normally, monitoring at well visits is typically all that is needed.' },
    { ageRange: '6-12 months', context: 'Consistent tracking at a high percentile for head circumference with normal development is reassuring. Your pediatrician may order an ultrasound through the fontanelle if there is any concern, which can confirm normal brain structure.' },
    { ageRange: '12-24 months', context: 'If your child continues to develop normally with a consistently large head that matches family pattern, no further evaluation is typically needed. Regular monitoring at well visits continues.' },
    { ageRange: '2-4 years', context: 'Familial macrocephaly is a lifelong trait, not a medical problem. Your child may simply need larger hats. As long as development remains normal, no treatment is needed.' },
  ],
  whenNormal: ['Parent head circumference is also above average.', 'Head is tracking consistently along a high percentile.', 'Development is on track.', 'Fontanelle is soft and flat.'],
  whenToMention: ['Head size is accelerating beyond the family pattern.', 'Head growth is crossing upward percentile lines.', 'Fontanelle seems full or tense.'],
  whenToActNow: ['Rapid head growth with vomiting, lethargy, or irritability.', 'Bulging fontanelle or sunsetting eyes.'],
  relatedMilestones: ['growth-head-circumference'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-head-growth-too-fast', 'baby-disproportionate-head-body'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Macrocephaly in Infants', url: 'https://www.healthychildren.org/English/health-issues/conditions/Glands-Growth-Disorders/Pages/default.aspx' },
    { org: 'NIH', citation: 'Lorber J, Priestley BL. Children with Large Heads. Dev Med Child Neurol. 1981;23(4)', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
    { org: 'CDC', citation: 'CDC - Growth Charts', url: 'https://www.cdc.gov/growthcharts/index.htm' },
  ],
};
