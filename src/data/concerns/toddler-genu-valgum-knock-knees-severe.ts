import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-genu-valgum-knock-knees-severe',
  title: 'My Toddler Has Severe Knock Knees',
  category: 'physical',
  searchTerms: ['toddler severe knock knees', 'toddler genu valgum', 'toddler knees touch severely', 'pathological knock knees', 'knock knees getting worse toddler', 'toddler knees bent inward', 'severe genu valgum child', 'toddler knock knees concern', 'toddler knees touch ankles apart', 'knock knees treatment toddler'],
  quickAnswer: 'Mild knock knees are a normal developmental phase that peaks around age 3-4 and typically resolves by age 7-8. However, severe knock knees (where the distance between ankles is greater than 8-10cm when knees touch), asymmetric knock knees, or knock knees that worsen after age 4 should be evaluated by a pediatric orthopedist.',
  byAge: [
    { ageRange: '12-24 months', context: 'As bowed legs straighten, they often overcorrect into mild knock knees. This is a normal progression. Mild knock knees at this age are not concerning.' },
    { ageRange: '2-4 years', context: 'Knock knees typically peak at age 3-4. Some degree of knocking is completely normal. If the distance between ankles when knees are touching is very large, or if it is much worse on one side, mention it to your pediatrician.' },
    { ageRange: '4-6 years', context: 'Knock knees should be improving by age 4-5. If they are worsening, severe, or causing your child difficulty with walking or running, evaluation is recommended.' },
    { ageRange: '6-8 years', context: 'Most physiological knock knees resolve by age 7-8. If significant knock knees persist, a pediatric orthopedist can evaluate for underlying causes and discuss treatment options if needed.' },
  ],
  whenNormal: ['Knock knees are symmetric and mild.', 'Your child is between 2-5 years old.', 'Knock knees are improving over time.', 'Your child runs and plays without difficulty.'],
  whenToMention: ['Knock knees are severe (large gap between ankles when knees touch).', 'Knock knees are much worse on one side.', 'Knock knees are getting worse after age 4.'],
  whenToActNow: ['Sudden worsening of knock knees.', 'Pain or difficulty walking due to knee alignment.'],
  relatedMilestones: ['gross-motor-walking', 'gross-motor-running'],
  showSelfReferral: true,
  relatedConcernSlugs: ['knock-knees', 'baby-genu-varum-bowed-legs-persistent'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Bowlegs and Knock-Knees', url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Bowlegs-and-Knock-Knees.aspx' },
    { org: 'NIH', citation: 'Stevens PM. Guided Growth for Angular Correction. J Pediatr Orthop. 2007;27(3)', url: 'https://pubmed.ncbi.nlm.nih.gov/17414009/' },
    { org: 'CDC', citation: 'CDC - Child Health', url: 'https://www.cdc.gov/ncbddd/childdevelopment/index.html' },
  ],
};
