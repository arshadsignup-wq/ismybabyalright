import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-standing-on-toes-only',
  title: 'My Baby Stands Only on Tiptoes',
  category: 'physical',
  searchTerms: [
    'baby stands on toes only',
    'baby tiptoe standing',
    'baby won\'t put feet flat standing',
    'baby always on toes when standing',
    'baby toe standing normal',
    'baby stands on tiptoes only',
    'baby can\'t flat foot stand',
    'toe standing vs toe walking baby',
    'baby high on toes when held',
    'baby tiptoe weight bearing',
  ],
  quickAnswer:
    'Some toe standing is normal when babies first start pulling up and bearing weight. Many babies stand on their toes for a few weeks before learning to put their feet flat. However, if your baby exclusively stands on tiptoes and cannot put their feet flat, it may indicate tight calf muscles or increased muscle tone that should be evaluated.',
  byAge: [
    {
      ageRange: '7-10 months',
      context:
        'When babies first start pulling to stand, many go up on their toes. This is often normal as they figure out foot positioning and weight distribution. If your baby can also put feet flat sometimes, this is likely just part of learning. Barefoot time on different surfaces can help them learn to feel the ground with their whole foot.',
    },
    {
      ageRange: '10-12 months',
      context:
        'Your baby should be spending more time flat-footed when standing by now. Some toe standing is still normal, especially when excited. If your baby exclusively stands on tiptoes and never seems to get their heels down, mention it to your pediatrician at the next visit.',
    },
    {
      ageRange: '12-15 months',
      context:
        'If your baby or toddler still only stands on tiptoes, evaluation is recommended. Your pediatrician can check ankle range of motion and muscle tone. Persistent toe standing may indicate tight Achilles tendons or hypertonia that can be addressed with stretching or physical therapy.',
    },
    {
      ageRange: '15-18 months',
      context:
        'Exclusive toe standing at this age warrants a thorough evaluation. While some children have idiopathic toe standing that resolves, it is important to rule out underlying causes. Early physical therapy is very effective for most cases.',
    },
  ],
  whenNormal: [
    'Your baby is newly pulling to stand and stands on toes some of the time.',
    'Your baby can and does put their feet flat when standing at a surface.',
    'Toe standing happens mainly when excited or on new surfaces.',
    'Your baby is under 12 months and toe standing is decreasing over time.',
  ],
  whenToMention: [
    'Your baby exclusively stands on tiptoes and never puts heels down.',
    'You cannot gently flex your baby\'s foot to a flat position.',
    'Your baby\'s legs seem stiff when standing.',
    'Toe standing persists beyond 12 months.',
  ],
  whenToActNow: [
    'Your baby has developed toe standing along with increasing leg stiffness.',
    'Your baby has other new neurological symptoms alongside toe standing.',
  ],
  relatedMilestones: [
    'gross-motor-standing',
    'gross-motor-cruising',
    'gross-motor-walking',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['toe-walking', 'stiff-baby-hypertonia', 'baby-legs-stiff-when-held-standing'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics - Toe Walking in Children',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Toe-Walking.aspx',
    },
    {
      org: 'NIH',
      citation: 'Engstrom P, Tedroff K. Idiopathic Toe-Walking. J Bone Joint Surg Am. 2012;94(16)',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
    {
      org: 'CDC',
      citation: 'CDC - Important Milestones: Your Baby at 12 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-12mo.html',
    },
  ],
};
