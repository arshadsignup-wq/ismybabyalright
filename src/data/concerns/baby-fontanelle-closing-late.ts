import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-fontanelle-closing-late',
  title: 'My Baby\'s Soft Spot Is Still Open',
  category: 'physical',
  searchTerms: ['baby fontanelle still open', 'baby soft spot not closed', 'late fontanelle closure', 'baby soft spot open 18 months', 'when should fontanelle close', 'baby large fontanelle', 'delayed fontanelle closure', 'baby soft spot open 2 years', 'open fontanelle toddler', 'baby fontanelle not closing'],
  quickAnswer: 'The anterior fontanelle normally closes between 9 and 18 months, but some healthy babies\' fontanelles remain open until 24 months. A fontanelle that is still open beyond 18 months should be evaluated, as it can sometimes indicate conditions like rickets, hypothyroidism, or other causes. However, many late-closing fontanelles are simply a normal variant.',
  byAge: [
    { ageRange: '9-12 months', context: 'Some fontanelles are beginning to close, but many are still open. This is within normal range. Your pediatrician will check the fontanelle at every visit and is monitoring for normal closure.' },
    { ageRange: '12-15 months', context: 'The fontanelle may be getting smaller or may still be clearly open. Both are within the normal range. Your pediatrician will check if it is getting smaller over time.' },
    { ageRange: '15-18 months', context: 'If the fontanelle is still open, your pediatrician may monitor more closely. It may still close normally, but if it is large, blood tests to check vitamin D levels, thyroid function, and calcium may be ordered.' },
    { ageRange: '18-24 months', context: 'An open fontanelle at this age warrants evaluation. Common treatable causes include vitamin D deficiency/rickets and hypothyroidism. If your child is otherwise developing normally, the cause is often easily correctable.' },
  ],
  whenNormal: ['The fontanelle is getting progressively smaller.', 'Your baby is developing normally.', 'Head growth is normal.', 'Your baby is under 18 months.'],
  whenToMention: ['The fontanelle is still open after 18 months.', 'The fontanelle seems to be getting larger.', 'The fontanelle is bulging or tense.'],
  whenToActNow: ['Bulging fontanelle with vomiting, fever, or lethargy.', 'Fontanelle with signs of increased intracranial pressure.'],
  relatedMilestones: ['growth-head-circumference'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-fontanelle-closing-early', 'baby-head-growth-too-fast'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Your Baby\'s Head', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Your-Babys-Head.aspx' },
    { org: 'NIH', citation: 'Kiesler J, Ricer R. The Abnormal Fontanel. Am Fam Physician. 2003;67(12):2547-2552', url: 'https://pubmed.ncbi.nlm.nih.gov/12825844/' },
    { org: 'CDC', citation: 'CDC - Child Health', url: 'https://www.cdc.gov/ncbddd/childdevelopment/index.html' },
  ],
};
