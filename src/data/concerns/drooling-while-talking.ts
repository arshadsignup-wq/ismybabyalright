import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'drooling-while-talking',
  title: 'My Toddler Drools While Talking',
  category: 'communication',
  searchTerms: [
    'toddler drools while talking',
    'excessive drooling talking',
    'drooling during speech',
    'toddler can\'t control drool',
    'drooling at 3 years old',
    'why does my toddler drool when talking',
    'drooling speech problem',
    'oral motor delay drooling',
    'drooling and speech delay',
    'toddler drools constantly',
  ],
  quickAnswer:
    'Most babies drool heavily during teething and when learning to control saliva, and this typically resolves by age 2-3. If your toddler is still drooling frequently while talking after age 3, it could indicate weak oral motor skills, tongue thrust, or difficulty coordinating swallowing with speaking. Speech therapy or occupational therapy can help improve oral control.',
  byAge: [
    {
      ageRange: '6-18 months',
      context:
        'Drooling is completely normal at this age, especially during teething. Babies are learning to manage saliva and don\'t yet have full control over their mouth muscles. They may drool more when concentrating, playing, or babbling. As long as your baby is developing other skills normally, heavy drooling isn\'t a concern before 18 months.',
    },
    {
      ageRange: '18 months-2 years',
      context:
        'By 18-24 months, most toddlers have better control over drooling, though it may still happen during teething (molars come in around this time) or when they\'re focused on a task. Some drooling while talking is normal as toddlers are learning to coordinate speech with swallowing. If your child is drooling constantly or soaking through bibs and shirts multiple times a day, mention it to your pediatrician.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Most children stop drooling by age 2-3, though occasional drooling during sleep or concentration is still common. If your toddler is drooling heavily during speech, it may indicate weak lip closure, tongue thrust, or difficulty swallowing. This is worth evaluating, especially if your child also has speech delays or unclear speech. A speech-language pathologist or occupational therapist can assess oral motor skills.',
    },
    {
      ageRange: '3+ years',
      context:
        'Persistent drooling after age 3, especially during talking, is not typical and should be evaluated. Possible causes include weak oral muscles, sensory issues, enlarged tonsils or adenoids, or a tongue tie. Treatment may include oral motor exercises, speech therapy, or addressing underlying medical issues. Early intervention can improve both drooling and speech clarity.',
    },
  ],
  whenNormal: [
    'Your baby is under 2 years old and drooling during teething  -  this is expected and temporary.',
    'Your toddler drools occasionally when concentrating hard on a task or during sleep.',
    'Your toddler is 2-3 years old and drools a bit while learning new, complex words or sounds.',
    'Your child\'s drooling is decreasing over time and isn\'t interfering with daily activities.',
  ],
  whenToMention: [
    'Your child is over 3 years old and still drools frequently, especially while talking.',
    'Your child\'s drooling is constant and requires multiple bib or clothing changes per day.',
    'Your child has drooling along with speech that\'s hard to understand or sounds "slushy."',
    'Your child seems to have trouble closing their lips or keeping their tongue inside their mouth.',
    'Your child\'s drooling is affecting their willingness to talk or interact with peers.',
  ],
  whenToActNow: [
    'Your child is over 4 years old with heavy, persistent drooling that isn\'t improving.',
    'Your child suddenly started drooling excessively after previously having good control  -  this could indicate a neurological issue.',
    'Your child is choking or gagging frequently, has trouble swallowing, or is drooling along with difficulty eating.',
  ],
  relatedMilestones: [
    'oral-motor-lip-closure',
    'oral-motor-swallowing-coordination',
    'language-clear-speech',
    'oral-motor-tongue-control',
    'self-care-independence',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association  -  Oral Motor and Feeding Disorders',
      url: 'https://www.asha.org/practice-portal/clinical-topics/pediatric-feeding-and-swallowing/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Drooling in Children',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Drooling-and-Your-Baby.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC  -  Developmental Milestones: Oral Motor Skills',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
    },
  ],
};
