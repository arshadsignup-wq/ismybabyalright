import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'baby-hand-wringing-repetitive', title: 'My Baby Has Repetitive Hand Wringing Movements', category: 'physical',
  searchTerms: ['baby hand wringing', 'baby repetitive hand movements', 'baby hand washing movements', 'baby squeezing hands together', 'baby hand stereotypies', 'baby clasping hands repetitively', 'baby hand mannerisms', 'baby repetitive midline hand movements', 'baby hand wringing Rett', 'baby washing motion hands'],
  quickAnswer: 'While some repetitive hand movements can be normal self-stimulatory behavior in babies, persistent, stereotypic hand wringing (especially the "hand washing" motion) can be a hallmark sign of Rett syndrome or other neurodevelopmental conditions. If hand wringing is replacing functional hand use, evaluation is important.',
  byAge: [
    { ageRange: '0-6 months', context: 'Babies frequently bring hands together and may clasp or wring their hands briefly. This is normal exploration. Concerning hand wringing is stereotypic, repetitive, and occurs frequently throughout the day.' },
    { ageRange: '6-12 months', context: 'If your baby has developed hand wringing that is replacing purposeful hand use (grasping, reaching), this is concerning. In Rett syndrome, hand wringing typically begins between 6-18 months as purposeful hand skills are lost.' },
    { ageRange: '12-24 months', context: 'Persistent hand wringing alongside loss of hand function and possible developmental regression should be evaluated urgently. Early genetic testing can identify Rett syndrome and other conditions.' },
    { ageRange: '2-4 years', context: 'Hand stereotypies can occur in various neurodevelopmental conditions. An evaluation to determine the cause and appropriate therapy is important.' },
  ],
  whenNormal: ['Brief hand clasping or wringing during excitement.', 'Hands are used purposefully most of the time.', 'Hand movements are varied, not stereotypic.'],
  whenToMention: ['Hand wringing is frequent and stereotypic.', 'Purposeful hand use seems to be decreasing.', 'Hand wringing is accompanied by other developmental changes.'],
  whenToActNow: ['Hand wringing replacing functional hand use.', 'Loss of previously acquired hand skills.', 'Hand wringing with developmental regression.'],
  relatedMilestones: ['fine-motor-grasp', 'fine-motor-manipulation'], showSelfReferral: true,
  relatedConcernSlugs: ['baby-hand-flapping', 'toddler-regression-motor-skills', 'baby-involuntary-movements'],
  sources: [
    { org: 'NIH', citation: 'Neul JL, et al. Rett Syndrome: Revised Diagnostic Criteria and Nomenclature. Ann Neurol. 2010;68(6)', url: 'https://pubmed.ncbi.nlm.nih.gov/21154482/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics - Rett Syndrome', url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/default.aspx' },
    { org: 'CDC', citation: 'CDC - Developmental Monitoring', url: 'https://www.cdc.gov/ncbddd/actearly/index.html' },
  ],
};
