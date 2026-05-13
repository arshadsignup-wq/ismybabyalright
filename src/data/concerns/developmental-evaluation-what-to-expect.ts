import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'developmental-evaluation-what-to-expect',
  title: 'What Developmental Evaluations Look Like',
  category: 'medical',
  searchTerms: [
    'what happens at a developmental evaluation',
    'developmental assessment for baby',
    'what to expect at developmental screening',
    'early intervention evaluation process',
    'developmental pediatrician appointment',
    'how do they test baby development',
    'scared of developmental evaluation',
    'preparing for developmental assessment',
  ],
  quickAnswer:
    'A developmental evaluation is a thorough, play-based assessment that looks at how your child communicates, moves, thinks, and interacts. It is not a pass-or-fail test  -  it is a way to understand your child\'s unique strengths and areas where they may benefit from support. The process is gentle, child-led, and designed to help, not to label.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Evaluations at this age focus on reflexes, muscle tone, visual tracking, and early responses to sound and touch. The evaluator will observe how your baby moves, how they respond to your voice, and how they react to being held in different positions. These assessments are typically brief and non-invasive.',
    },
    {
      ageRange: '3-6 months',
      context:
        'At this stage, evaluators look at head control, early reaching and grasping, social smiling, cooing, and how your baby engages with people and objects. They may gently position your baby in different ways to assess muscle tone and symmetry. You will likely be asked questions about your baby\'s daily routines, feeding, and sleep.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Evaluations become more interactive as your baby has more skills to demonstrate. Evaluators observe sitting, crawling, babbling, response to their name, and early problem-solving like reaching for hidden toys. They often use standardized tools like the Bayley Scales or the ASQ (Ages and Stages Questionnaire) alongside clinical observation.',
    },
    {
      ageRange: '12-24 months',
      context:
        'This is a common age for first evaluations. The assessment typically looks at walking, first words, pointing, pretend play, and how your child interacts with you and the evaluator. The session is usually play-based  -  the evaluator engages your child with toys, books, and activities while carefully observing specific skills. You will be asked detailed questions about your child\'s daily life and developmental history.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Evaluations at this age assess language comprehension and expression, fine and gross motor skills, problem-solving, social interaction, and self-help skills like feeding and dressing. The evaluation may involve multiple professionals  -  such as a speech therapist, occupational therapist, and psychologist  -  over one or more sessions. The team will share their findings with you and discuss recommendations.',
    },
  ],
  whenNormal: [
    'Feeling anxious or nervous before your child\'s evaluation  -  this is a completely normal response for any caring parent',
    'Your child does not perform their best during the evaluation  -  evaluators are trained to account for unfamiliar settings and off days',
    'The evaluation takes longer than expected  -  thoroughness is a good sign that the team is being careful',
    'The evaluator asks many detailed questions about your pregnancy, birth, and family history  -  this context helps them understand the full picture',
  ],
  whenToMention: [
    'You have specific concerns or observations you want the team to know about  -  write them down and bring them to the appointment',
    'Your child has had a recent illness, poor sleep, or major disruption that might affect their performance during the evaluation',
    'You disagree with the evaluation findings  -  you have the right to request a re-evaluation or seek a second opinion',
    'You need help understanding the results or what the recommended next steps mean for your child',
  ],
  whenToActNow: [
    'Your child has lost previously acquired skills such as words, motor abilities, or social engagement  -  request an urgent evaluation rather than waiting for a scheduled one',
    'You have been waiting an excessively long time for an evaluation and your child\'s development appears to be falling further behind  -  contact your state\'s early intervention program to self-refer, as you do not need a doctor\'s order',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Developmental Monitoring and Screening. Learn the Signs. Act Early.',
      url: 'https://www.cdc.gov/ncbddd/actearly/screening.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Developmental Screening and Assessment. Pediatrics, 2020.',
      url: 'https://publications.aap.org/pediatrics/article/145/1/e20193449/36917/Identification-Evaluation-and-Management-of',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. What Is Early Intervention?',
      url: 'https://www.zerotothree.org/resource/what-is-early-intervention/',
    },
  ],
};
