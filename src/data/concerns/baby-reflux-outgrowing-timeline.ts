import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-reflux-outgrowing-timeline',
  title: 'When Does Baby Reflux Resolve?',
  category: 'digestive',
  searchTerms: [
    'when does baby reflux stop',
    'baby outgrow reflux when',
    'how long does baby reflux last',
    'baby reflux timeline',
    'when does spitting up end',
    'baby reflux go away age',
    'reflux peak age baby',
    'baby reflux improve when',
    'infant reflux duration',
    'when does baby stop spitting up',
  ],
  quickAnswer:
    'Most baby reflux peaks around 4 months and significantly improves by 6 to 7 months as babies start sitting up and eating solids. By 12 to 18 months, the vast majority of babies have completely outgrown reflux. If reflux persists beyond 18 months, further evaluation may be needed.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Reflux typically begins in the first few weeks of life and gradually increases. It is caused by an immature lower esophageal sphincter, a liquid-only diet, and the baby spending much of the time lying down. This is a normal phase that virtually all babies go through.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Reflux usually peaks around 4 months of age. Many parents feel the worst is between 3 and 5 months. Starting around 5 to 6 months, as the digestive system matures and babies begin sitting upright more, most families notice improvement. The introduction of solid foods also helps.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Significant improvement is expected during this period. Sitting up, eating thicker foods, and spending less time lying flat all contribute to reducing reflux. By 12 months, approximately 95% of babies have stopped spitting up regularly.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Only a small percentage of toddlers continue to have significant reflux. If your child still has reflux symptoms beyond 18 months, discuss with your pediatrician. Persistent symptoms may warrant evaluation for GERD, food allergies, or anatomical issues.',
    },
  ],
  whenNormal: [
    'Reflux that follows the typical pattern of peaking around 4 months and improving by 6 to 7 months',
    'Gradual reduction in spit-up volume and frequency over the first year',
    'Complete resolution by 12 to 18 months',
  ],
  whenToMention: [
    'Reflux is not improving as expected around 6 to 7 months',
    'Reflux symptoms seem to be getting worse rather than better after 4 months',
    'You are looking for reassurance about the timeline',
  ],
  whenToActNow: [
    'Reflux worsens suddenly after a period of improvement',
    'New symptoms like bilious (green) vomiting or blood in vomit develop',
    'Your baby is not gaining weight along with persistent reflux',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Spitting Up in Babies. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Spitting-Up-Reflux.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. GER & GERD in Infants.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-infants',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Pediatric GER Clinical Practice Guidelines. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/doi/10.1542/peds.2018-1061/37422/',
    },
  ],
  relatedConcernSlugs: ['reflux', 'spitting-up', 'baby-reflux-vs-gerd-difference'],
};
