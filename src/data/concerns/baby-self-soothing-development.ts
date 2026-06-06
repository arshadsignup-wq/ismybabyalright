import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-self-soothing-development',
  title: 'When Do Babies Learn to Self-Soothe?',
  category: 'sleep',
  searchTerms: [
    'baby self soothing',
    'when can baby self soothe',
    'teaching baby to self soothe',
    'baby can\'t self soothe',
    'self soothing development',
    'baby self settling',
    'when do babies learn to fall asleep alone',
    'independent sleep baby',
    'baby needs help falling asleep',
    'self soothing skills baby',
  ],
  quickAnswer:
    'Self-soothing is a developmental skill that emerges gradually, not something that can be taught to a newborn. Most babies begin showing the ability to self-soothe around 3-4 months, but full independent sleep skills develop over the first year. Every baby develops on their own timeline, and needing help falling asleep is not a failure on your part.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns cannot self-soothe in any meaningful way. They depend entirely on their caregivers for regulation. When your newborn needs to be rocked, held, fed, or shushed to sleep, they are not being manipulative - their nervous system genuinely needs your help to transition from wakefulness to sleep. Some babies may discover their hands to suck on, which is an early self-soothing behavior, but do not expect independent sleep at this stage.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Early self-soothing behaviors begin to emerge. You may notice your baby sucking on fingers, rubbing their face on the mattress, or stroking a comfort object. Some babies begin to fall asleep with less help - perhaps just a hand on their chest instead of full rocking. These are encouraging signs, but many babies at this age still need significant assistance and that is completely fine.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Many babies become more capable of settling themselves, though the degree varies widely. Babies who have been gradually given opportunities to practice falling asleep with less intervention may show more independence, but temperament plays a huge role. A baby with a more easygoing temperament may self-soothe earlier than a baby with a more sensitive or intense temperament - neither is better or worse.',
    },
    {
      ageRange: '9-18 months',
      context:
        'By this age, most babies have the developmental capacity to learn to fall asleep more independently, though some will still prefer parental presence. Self-soothing looks different for different babies: some suck their thumb, others hold a lovey (safe after 12 months), some talk or sing to themselves, and others simply close their eyes and drift off. If your baby still needs help and you are happy to provide it, there is no deadline to change.',
    },
  ],
  whenNormal: [
    'Your newborn needs full assistance falling asleep every time - this is completely age-appropriate',
    'Your baby has inconsistent self-soothing: sometimes they settle alone and sometimes they need help',
    'Your baby uses thumb sucking, a pacifier, or comfort object as part of their self-soothing repertoire',
    'Self-soothing skills seem to disappear during illness, teething, or developmental leaps and then return',
  ],
  whenToMention: [
    'Your baby over 9 months has never shown any ability to calm themselves even briefly, and this is combined with extreme difficulty sleeping',
    'You are struggling with severe sleep deprivation and want to discuss options for encouraging more independent sleep',
    'Your baby seems excessively distressed at any attempt to sleep, even with full support from you',
  ],
  whenToActNow: [
    'You are so exhausted that you worry about safely caring for your baby, especially during night feeds',
    'Your baby\'s inability to settle is accompanied by unusual symptoms like arching, screaming in pain, or breathing difficulties',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sleeping Through the Night. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Sleeping-Through-the-Night.aspx',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Helping Your Child Learn to Self-Soothe.',
      url: 'https://www.zerotothree.org/resource/helping-your-child-learn-to-self-soothe/',
    },
    {
      org: 'NIH',
      citation:
        'Mindell JA et al. Behavioral treatment of bedtime problems and night wakings in infants and young children. Sleep. 2006;29(10):1263-1276.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/17068979/',
    },
  ],
  relatedConcernSlugs: ['baby-drowsy-but-awake-impossible', 'baby-sleep-associations', 'baby-sleep-crutch-dependency', 'sleep-training-guilt-methods'],
};
