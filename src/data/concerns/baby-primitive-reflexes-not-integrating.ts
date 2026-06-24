import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-primitive-reflexes-not-integrating',
  title: 'Baby\'s Primitive Reflexes Not Integrating',
  category: 'physical',
  searchTerms: [
    'baby primitive reflexes not going away',
    'retained primitive reflexes baby',
    'baby reflexes not integrating',
    'moro reflex still present 6 months',
    'primitive reflexes lasting too long',
    'baby still has newborn reflexes',
    'retained reflexes developmental delay',
    'when should primitive reflexes disappear',
    'baby reflexes not fading',
    'infant reflexes timeline',
  ],
  quickAnswer:
    'Primitive reflexes are automatic movement patterns that babies are born with, such as the Moro (startle), grasp, and rooting reflexes. These normally integrate (fade) during the first year as the brain matures. If primitive reflexes persist well beyond their expected timeline, it may indicate a neurological concern that should be evaluated by your pediatrician.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'All primitive reflexes should be strongly present during this period. The Moro reflex, palmar grasp, rooting reflex, and tonic neck reflex are all expected and healthy signs of normal neurological function. Their absence at this age is actually more concerning than their presence. Your pediatrician will check for these reflexes at well-baby visits.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Some reflexes begin to soften during this window. The rooting reflex typically starts fading around 3-4 months, and the Moro reflex usually begins to diminish by 4-5 months. The palmar grasp evolves as your baby starts reaching voluntarily. If all reflexes are still very strong at 6 months with no signs of voluntary movement developing, mention it to your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By 6 months, most primitive reflexes should be significantly diminished or gone. The Moro reflex typically disappears by 5-6 months, the tonic neck reflex by 6-7 months, and the palmar grasp by 5-6 months. Persistence of these reflexes beyond their expected timeline can interfere with voluntary movement and may warrant developmental evaluation. A still-present Moro reflex at 9-12 months is a reason to consult your doctor.',
    },
    {
      ageRange: '12-36 months',
      context:
        'By 12 months, all primitive reflexes should be fully integrated. If your toddler still shows signs of retained reflexes, such as an exaggerated startle, difficulty with fine motor tasks, or persistent asymmetric tonic neck reflex posturing, a developmental or neurological evaluation is recommended. Early intervention therapies can help support integration and motor development.',
    },
  ],
  whenNormal: [
    'Your baby is under 4 months and has strong primitive reflexes - this is completely expected and healthy.',
    'Reflexes are gradually softening between 4-6 months while voluntary movements are emerging.',
    'Your baby has occasional startle responses but is otherwise meeting motor milestones on time.',
  ],
  whenToMention: [
    'The Moro reflex is still very prominent after 6 months of age.',
    'Your baby still has a strong tonic neck reflex (fencing posture) after 6-7 months.',
    'Your baby seems to have difficulty developing voluntary grasp because the palmar grasp reflex is still strong after 5-6 months.',
  ],
  whenToActNow: [
    'Multiple primitive reflexes are still strongly present after 9-12 months with no signs of voluntary movement replacing them.',
    'Retained reflexes are accompanied by other neurological concerns such as seizures, extreme stiffness, or floppiness.',
    'Your baby is not meeting any motor milestones and primitive reflexes remain dominant.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-startle-reflex-moro-persistent', 'baby-rooting-reflex-absent', 'baby-stepping-reflex-absent', 'floppy-baby-syndrome'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Newborn Reflexes. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Newborn-Reflexes.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health - Infant Reflexes. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/003292.htm',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention - Developmental Milestones.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
    },
  ],
};
