import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-legs-stiff-when-held-standing',
  title: 'My Baby\'s Legs Are Stiff When Held Standing',
  category: 'physical',
  searchTerms: [
    'baby stiff legs standing',
    'baby rigid legs when held up',
    'baby legs locked straight',
    'baby legs won\'t bend standing',
    'baby legs hard as board standing',
    'stiff legs when bouncing baby',
    'baby legs rigid held upright',
    'baby locks knees standing',
    'baby leg stiffness',
    'hypertonia legs baby standing',
  ],
  quickAnswer:
    'While some babies stiffen their legs momentarily when excited about standing, persistently stiff legs that resist bending may indicate increased muscle tone (hypertonia). It is important to distinguish between a baby happily stiffening their legs to bear weight (normal) and legs that are rigid and difficult to bend (warrants evaluation).',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns have variable muscle tone, and some leg stiffness can be normal. However, legs that are constantly rigid, resist bending, or seem to lock straight should be mentioned to your pediatrician. They can assess whether the tone is within normal range or warrants further evaluation.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Some babies love to bear weight on their legs and will stiffen them excitedly when held in standing. This is different from pathological stiffness. Normal stiffness comes and goes. Concerning stiffness is persistent and the legs resist passive bending. If you are unsure, ask your pediatrician to check.',
    },
    {
      ageRange: '6-9 months',
      context:
        'By this age, your baby should be able to bounce and bend their knees when held in standing. If their legs remain rigidly straight and resist bending, evaluation is important. Stiff legs can interfere with the development of standing, cruising, and walking.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Persistent leg stiffness at this age needs evaluation. Your baby should be able to squat, bounce, and flex their knees. If they cannot, your pediatrician may refer for physical therapy or neurological assessment. Early intervention for hypertonia is very effective.',
    },
  ],
  whenNormal: [
    'Your baby stiffens their legs excitedly but can also bend them easily.',
    'Stiffness is intermittent and happens during playful weight bearing.',
    'You can easily bend your baby\'s legs when they are relaxed.',
    'Your baby bounces and bends knees when held in standing.',
  ],
  whenToMention: [
    'Your baby\'s legs are consistently stiff and resist passive bending.',
    'Your baby cannot bounce or bend their knees when held standing.',
    'Stiffness is present even when your baby is relaxed or sleeping.',
    'Stiffness affects diaper changing or dressing.',
  ],
  whenToActNow: [
    'Leg stiffness is increasing over time.',
    'Your baby has developed new stiffness along with other neurological changes.',
  ],
  relatedMilestones: [
    'gross-motor-standing',
    'gross-motor-weight-bearing',
    'gross-motor-cruising',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['stiff-baby-hypertonia', 'baby-spasticity-signs', 'baby-standing-legs-crossed'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics - Hypertonia in Children',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation: 'Sanger TD, et al. Classification and Definition of Disorders Causing Hypertonia in Childhood. Pediatrics. 2003;111(1)',
      url: 'https://pubmed.ncbi.nlm.nih.gov/12509602/',
    },
    {
      org: 'CDC',
      citation: 'CDC - Learn the Signs. Act Early.',
      url: 'https://www.cdc.gov/ncbddd/actearly/index.html',
    },
  ],
};
