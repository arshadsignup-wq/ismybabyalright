import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-dystonia-movement-patterns',
  title: 'My Baby Has Abnormal Movement Patterns',
  category: 'physical',
  searchTerms: ['baby abnormal movement patterns', 'baby dystonia', 'baby unusual posturing', 'baby twisting movements', 'dystonic movements baby', 'baby abnormal postures', 'baby sustained muscle contractions', 'baby movement disorder', 'baby involuntary posturing', 'dystonic posturing infant'],
  quickAnswer: 'Dystonia involves sustained or intermittent muscle contractions that cause abnormal, sometimes twisting postures. In babies, it may appear as unusual arm or leg positioning during movement. If your baby has repetitive, abnormal posturing of limbs, trunk, or neck, especially during voluntary movement, evaluation by a pediatric neurologist is recommended.',
  byAge: [
    { ageRange: '0-3 months', context: 'Some unusual postures in newborns can be related to positioning in the womb and resolve on their own. However, persistent abnormal posturing, especially twisting or sustained contractions, should be evaluated. Your pediatrician can help determine if the movements need further investigation.' },
    { ageRange: '3-6 months', context: 'If your baby has sustained abnormal postures during reaching, grasping, or movement, discuss this with your pediatrician. Dystonic movements typically worsen during voluntary movement and improve during sleep, which distinguishes them from other movement patterns.' },
    { ageRange: '6-12 months', context: 'Dystonia may become more apparent as your baby attempts more complex movements. A pediatric neurologist can evaluate the movement pattern and determine appropriate treatment, which may include medication and physical therapy.' },
    { ageRange: '12-24 months', context: 'Early identification and treatment of dystonia leads to better functional outcomes. Physical therapy, occupational therapy, and in some cases medication can significantly improve movement quality and daily function.' },
  ],
  whenNormal: ['Brief, occasional unusual postures during transitions.', 'Posturing that resolves quickly and does not affect function.', 'Unusual positions that are clearly related to recent womb positioning in newborns.'],
  whenToMention: ['Your baby has repetitive, sustained abnormal postures.', 'Unusual movements occur during voluntary activity.', 'Abnormal postures affect your baby\'s ability to move or play.'],
  whenToActNow: ['Movement abnormalities are worsening.', 'Your baby is losing motor skills alongside abnormal movements.', 'New involuntary movements are appearing.'],
  relatedMilestones: ['gross-motor-reaching', 'gross-motor-sitting', 'gross-motor-walking'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-involuntary-movements', 'stiff-baby-hypertonia', 'baby-muscle-tone-fluctuating'],
  sources: [
    { org: 'NIH', citation: 'Sanger TD, et al. Definition and Classification of Hyperkinetic Movements in Childhood. Mov Disord. 2010;25(11)', url: 'https://pubmed.ncbi.nlm.nih.gov/20629134/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics - Movement Disorders in Children', url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/default.aspx' },
    { org: 'CDC', citation: 'CDC - Learn the Signs. Act Early.', url: 'https://www.cdc.gov/ncbddd/actearly/index.html' },
  ],
};
