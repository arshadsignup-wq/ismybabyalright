import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-lateral-lisp',
  title: 'Toddler Has a Slushy S Sound (Lateral Lisp)',
  category: 'communication',
  searchTerms: [
    'toddler lateral lisp',
    'toddler slushy s sound',
    'toddler wet sounding s',
    'toddler s sounds messy',
    'lateral lisp child',
    'slushy speech toddler',
    'toddler air coming out sides mouth',
    'toddler sloppy s sound',
    'lateral lisp vs frontal lisp',
    'toddler lisp not normal',
  ],
  quickAnswer:
    'A lateral lisp produces a "slushy" or wet-sounding S and Z, caused by air escaping over the sides of the tongue rather than through the center. Unlike a frontal lisp (tongue between the teeth), a lateral lisp is not considered a normal developmental pattern and typically requires speech therapy to correct. If you notice this sound quality in your child, a speech-language evaluation is recommended.',
  byAge: [
    {
      ageRange: '18-24 months',
      context:
        'Most toddlers are not yet producing S sounds consistently. It is difficult to identify a lateral lisp at this age because S production is still developing. Focus on overall speech development rather than specific sound quality.',
    },
    {
      ageRange: '24-36 months',
      context:
        'S sounds begin to emerge but are often produced with errors. A frontal lisp (tongue between the teeth) is a common and normal developmental pattern. A lateral lisp sounds distinctly different, more slushy or wet. If you notice this quality, mention it to your pediatrician.',
    },
    {
      ageRange: '3-4 years',
      context:
        'As S production becomes more established, a lateral lisp becomes more identifiable. Unlike a frontal lisp which often resolves on its own, a lateral lisp typically requires speech therapy. Early intervention can be very effective.',
    },
    {
      ageRange: '4-5 years',
      context:
        'A lateral lisp should be addressed through speech therapy at this age. Without treatment, lateral lisps rarely resolve on their own. A speech-language pathologist can teach your child to direct airflow correctly.',
    },
    {
      ageRange: '5-7 years',
      context:
        'If untreated, a lateral lisp may become more habituated and harder to correct. Treatment before or during early elementary school years produces good outcomes. Do not wait for your child to outgrow this pattern.',
    },
  ],
  whenNormal: [
    'Your toddler is under 3 and S sounds are not yet fully developed',
    'Your child has a frontal lisp where the tongue pokes between the teeth for S, which is a normal developmental pattern',
    'Your child is still developing overall speech clarity and S sounds are just emerging',
  ],
  whenToMention: [
    'Your child\'s S and Z sounds have a distinctly slushy, wet quality at any age',
    'Your child is over 3 and their S sound sounds different from a typical frontal lisp',
    'Your child\'s slushy S has not improved as their other speech sounds have developed',
  ],
  whenToActNow: [
    'Your child had clear S sounds and they have changed to a slushy quality',
    'Your child is school-age with a lateral lisp that is affecting their confidence or social interactions',
  ],
  relatedMilestones: ['speech-clarity', 'consonant-sounds', 'oral-motor-development'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-lisp', 'toddler-interdental-lisp', 'toddler-s-sound-difficulty'],
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Speech Sound Disorders: Articulation and Phonology.',
      url: 'https://www.asha.org/practice-portal/clinical-topics/articulation-and-phonology/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Speech and Language Development. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};
