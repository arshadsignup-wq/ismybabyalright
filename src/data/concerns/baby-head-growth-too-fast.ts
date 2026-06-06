import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-head-growth-too-fast',
  title: 'My Baby\'s Head Is Growing Too Fast',
  category: 'physical',
  searchTerms: ['baby head growing fast', 'baby head circumference increasing rapidly', 'baby macrocephaly', 'baby large head growth', 'baby head percentile rising', 'rapid head growth baby', 'baby head size increasing', 'big head baby concern', 'baby head circumference crossing percentiles', 'baby head growth rate'],
  quickAnswer: 'Head circumference is monitored at every well visit because it reflects brain growth. Crossing upward percentile lines in head growth can indicate benign familial macrocephaly (runs in families) or, rarely, increased intracranial pressure. Your pediatrician will evaluate the pattern, fontanelle, and development to determine if further investigation is needed.',
  byAge: [
    { ageRange: '0-3 months', context: 'Head growth is rapid in the first months, and some variation in growth rate is normal. If head circumference is crossing upward percentile lines, your pediatrician will check the fontanelle (soft spot), look for signs of increased pressure, and may order an ultrasound through the open fontanelle.' },
    { ageRange: '3-6 months', context: 'Head growth should follow a consistent percentile. If crossing upward, your pediatrician may measure both parents\' head circumference (familial macrocephaly is very common and benign). If your baby is developing normally and the fontanelle is normal, monitoring may be all that is needed.' },
    { ageRange: '6-12 months', context: 'Continued rapid head growth crossing percentiles warrants investigation. An MRI or ultrasound may be ordered to evaluate for hydrocephalus or other conditions. However, many babies with large heads simply have familial macrocephaly with normal development.' },
    { ageRange: '12-24 months', context: 'Head growth typically slows after the first year. If head circumference remains disproportionately large but your child is developing normally, this is often benign. Continued monitoring is important.' },
  ],
  whenNormal: ['One or both parents have large heads.', 'Your baby is developing normally.', 'The fontanelle is soft and flat.', 'Head size stabilizes at a high percentile.'],
  whenToMention: ['Head circumference is crossing upward percentile lines.', 'Head size is disproportionate to body size.', 'The fontanelle seems full or bulging.'],
  whenToActNow: ['Rapid head growth with vomiting, irritability, or lethargy.', 'Bulging fontanelle with sunsetting eyes.', 'Head growth acceleration accompanied by developmental regression.'],
  relatedMilestones: ['growth-head-circumference'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-large-head-family-trait', 'baby-disproportionate-head-body'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Head Circumference Monitoring', url: 'https://www.healthychildren.org/English/health-issues/conditions/Glands-Growth-Disorders/Pages/default.aspx' },
    { org: 'NIH', citation: 'Lorber J, Priestley BL. Children with Large Heads: A Practical Approach. Dev Med Child Neurol. 1981;23(4)', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
    { org: 'CDC', citation: 'CDC - Growth Charts: Head Circumference', url: 'https://www.cdc.gov/growthcharts/index.htm' },
  ],
};
