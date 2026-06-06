import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-fontanelle-closing-early',
  title: 'My Baby\'s Soft Spot Is Closing Early',
  category: 'physical',
  searchTerms: ['baby fontanelle closing early', 'baby soft spot closing too soon', 'craniosynostosis baby', 'baby fontanelle small', 'baby soft spot gone early', 'premature fontanelle closure', 'early fontanelle closure concern', 'baby anterior fontanelle closing', 'when should soft spot close', 'baby skull fusing early'],
  quickAnswer: 'The anterior fontanelle (soft spot) typically closes between 9 and 18 months, though some babies\' fontanelles close as early as 3 months without any problem. Early closure is only concerning if it restricts brain growth (craniosynostosis). Your pediatrician monitors head growth and fontanelle size at every visit.',
  byAge: [
    { ageRange: '0-3 months', context: 'The fontanelle should be open and soft. If it seems small or firm this early, your pediatrician will monitor head growth closely. A small fontanelle does not always mean early closure - some babies naturally have smaller soft spots.' },
    { ageRange: '3-6 months', context: 'Some fontanelles begin to feel smaller by this age, which can be normal. The key indicator is head growth. If head circumference continues to grow normally along its percentile, the brain has adequate room to grow.' },
    { ageRange: '6-9 months', context: 'If the fontanelle has closed and head growth is normal, this is likely benign. If head growth is slowing or the skull has an unusual shape, your pediatrician may order imaging to evaluate for craniosynostosis.' },
    { ageRange: '9-18 months', context: 'Normal closure range. Most fontanelles close between 9 and 18 months. Closure in this range is typical and not concerning if head growth is normal.' },
  ],
  whenNormal: ['Head circumference continues to grow normally.', 'Your baby is developing normally.', 'The fontanelle feels smaller but head shape is normal.', 'Your pediatrician is not concerned about head growth.'],
  whenToMention: ['The fontanelle seems to have closed before 6 months.', 'You notice a ridge along skull suture lines.', 'Head growth is slowing.'],
  whenToActNow: ['Head growth has stopped or is decelerating rapidly.', 'Abnormal head shape is developing alongside fontanelle closure.'],
  relatedMilestones: ['growth-head-circumference'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-head-growth-too-slow', 'baby-fontanelle-closing-late'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Your Baby\'s Head', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Your-Babys-Head.aspx' },
    { org: 'NIH', citation: 'Vu HL, et al. The Timing of Physiologic Closure of the Metopic Suture. J Craniofac Surg. 2001;12(6)', url: 'https://pubmed.ncbi.nlm.nih.gov/11711818/' },
    { org: 'CDC', citation: 'CDC - Facts about Craniosynostosis', url: 'https://www.cdc.gov/ncbddd/birthdefects/craniosynostosis.html' },
  ],
};
