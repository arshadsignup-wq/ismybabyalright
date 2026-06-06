import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-muscle-tone-fluctuating',
  title: 'My Baby\'s Muscle Tone Varies Between Floppy and Stiff',
  category: 'physical',
  searchTerms: ['baby muscle tone fluctuating', 'baby sometimes floppy sometimes stiff', 'baby variable tone', 'baby tone changes', 'fluctuating muscle tone baby', 'baby goes from stiff to floppy', 'dyskinetic movements baby', 'baby mixed tone', 'baby inconsistent muscle tone', 'varying tone baby'],
  quickAnswer: 'Fluctuating muscle tone, where your baby alternates between being floppy and stiff, should be evaluated by your pediatrician. While normal babies have some variation in tone based on activity level and state (alert vs sleepy), consistent fluctuation between high and low tone may indicate a movement disorder such as dyskinetic cerebral palsy. Early evaluation leads to better outcomes.',
  byAge: [
    { ageRange: '0-3 months', context: 'Newborns naturally have varying tone depending on their state - they may seem floppy when sleepy and stiffer when startled. This is normal. However, extremes of tone or rapid switching between very floppy and very stiff should be discussed with your pediatrician.' },
    { ageRange: '3-6 months', context: 'Muscle tone should be stabilizing. If your baby still has significant fluctuations between floppiness and stiffness, especially during movement, evaluation is recommended. This pattern can indicate dyskinetic cerebral palsy or other neurological conditions.' },
    { ageRange: '6-12 months', context: 'Fluctuating tone at this age warrants thorough evaluation. Your pediatrician may refer to a pediatric neurologist. Conditions causing fluctuating tone often benefit from early physical therapy and medical management.' },
    { ageRange: '12-24 months', context: 'If fluctuating tone has been identified, ongoing therapy and monitoring are important. Early intervention programs can provide comprehensive support. Many children with fluctuating tone make significant progress with appropriate therapy.' },
  ],
  whenNormal: ['Your baby is stiffer when alert and more relaxed when drowsy.', 'Tone variations are mild and do not affect function.', 'Your baby\'s overall development is on track.', 'Tone is appropriate for activity level.'],
  whenToMention: ['Your baby has noticeable swings between very floppy and very stiff.', 'Tone fluctuations seem to affect your baby\'s ability to move or be held.', 'Your baby has involuntary movements alongside tone changes.'],
  whenToActNow: ['Tone fluctuations are worsening or new.', 'Your baby has episodes of extreme stiffness with changes in consciousness.'],
  relatedMilestones: ['gross-motor-head-control', 'gross-motor-sitting'],
  showSelfReferral: true,
  relatedConcernSlugs: ['low-muscle-tone', 'stiff-baby-hypertonia', 'baby-dystonia-movement-patterns'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Cerebral Palsy', url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/Cerebral-Palsy.aspx' },
    { org: 'NIH', citation: 'Sanger TD, et al. Classification and Definition of Disorders Causing Hypertonia in Childhood. Pediatrics. 2003;111(1)', url: 'https://pubmed.ncbi.nlm.nih.gov/12509602/' },
    { org: 'CDC', citation: 'CDC - Learn the Signs. Act Early.', url: 'https://www.cdc.gov/ncbddd/actearly/index.html' },
  ],
};
