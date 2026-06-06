import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-palmar-grasp-reflex-persistent',
  title: 'My Baby Still Has a Strong Grasp Reflex',
  category: 'physical',
  searchTerms: ['baby palmar grasp reflex persistent', 'baby grasp reflex still strong', 'baby reflexive grasping', 'baby can\'t release grasp reflex', 'palmar grasp not gone', 'when does grasp reflex go away', 'baby automatic grasping', 'persistent grasp reflex', 'baby involuntary grasping', 'palmar reflex not integrating'],
  quickAnswer: 'The palmar grasp reflex (automatic grasping when something touches the palm) should gradually integrate between 4-6 months as voluntary grasping develops. If the reflex persists strongly beyond 6 months, it can interfere with voluntary hand use and should be evaluated.',
  byAge: [
    { ageRange: '0-3 months', context: 'A strong palmar grasp reflex is completely normal. When you place your finger in your baby\'s palm, they should grasp tightly. This reflex is important for early bonding and will gradually transform into voluntary grasping.' },
    { ageRange: '3-5 months', context: 'The grasp reflex should begin to weaken as voluntary grasping emerges. Your baby should start reaching for and grasping objects intentionally. If the reflex is still very strong and your baby cannot release objects voluntarily, mention it to your pediatrician.' },
    { ageRange: '5-7 months', context: 'The palmar grasp reflex should be integrated by 5-6 months. Your baby should be grasping objects voluntarily, releasing them, and transferring between hands. Persistence of the automatic grasp reflex at this age warrants evaluation.' },
    { ageRange: '7-12 months', context: 'If the palmar grasp reflex persists, it can significantly interfere with fine motor development, including pincer grasp, voluntary release, and object manipulation. Physical or occupational therapy can help with reflex integration.' },
  ],
  whenNormal: ['Your baby is under 5 months with normal grasp reflex.', 'Reflex is weakening as voluntary grasping develops.', 'Your baby can sometimes release objects voluntarily.'],
  whenToMention: ['Grasp reflex is still strong beyond 6 months.', 'Your baby has difficulty releasing objects voluntarily.', 'The reflexive grasping interferes with voluntary hand use.'],
  whenToActNow: ['Grasp reflex is getting stronger.', 'Your baby has lost voluntary hand function.'],
  relatedMilestones: ['fine-motor-grasp', 'fine-motor-release'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-primitive-reflex-not-integrating', 'baby-not-releasing-objects', 'baby-clenching-fists-after-3-months'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Newborn Reflexes', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Newborn-Reflexes.aspx' },
    { org: 'NIH', citation: 'Palano GM. Primitive Reflexes in the Neurodevelopmental Examination. Pediatr Neurol. 2004', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
    { org: 'CDC', citation: 'CDC - Important Milestones: Your Baby at 6 Months', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-6mo.html' },
  ],
};
