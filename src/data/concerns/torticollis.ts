import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'torticollis',
  title: 'Baby Torticollis (Head Tilt)',
  category: 'medical',
  searchTerms: [
    'baby head tilts to one side',
    'baby torticollis',
    'baby always looks one direction',
    'baby neck tight one side',
    'baby head tilt',
    'infant torticollis treatment',
    'baby prefers one side',
    'baby won\'t turn head both ways',
    'torticollis and flat head',
    'baby physical therapy for neck',
    'congenital muscular torticollis',
  ],
  quickAnswer:
    'Torticollis is a condition where tightness in one of the neck muscles causes your baby to tilt their head to one side and often prefer looking in one direction. It affects about 1 in 250 infants and is very treatable. Early physical therapy with stretching exercises is highly effective, and most babies recover fully within a few months of consistent treatment.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Congenital muscular torticollis is often noticed in the first few weeks when parents observe that their baby consistently tilts their head to one side or has difficulty turning to look the other way. It is caused by tightness in the sternocleidomastoid (SCM) muscle, sometimes from positioning in the womb. Early identification is important because it allows treatment to begin promptly. You may also feel a small, firm lump in the neck muscle, which is a thickened area that typically resolves with stretching.',
    },
    {
      ageRange: '2-4 months',
      context:
        'This is an ideal time to begin physical therapy if torticollis is identified. A pediatric physical therapist will teach you gentle stretching exercises to do at home several times a day. Repositioning strategies, such as placing toys on the non-preferred side, encouraging your baby to look both ways during feeding, and alternating which arm you carry them on, are also very effective. Early treatment helps prevent or improve associated flat head (positional plagiocephaly).',
    },
    {
      ageRange: '4-8 months',
      context:
        'With consistent stretching and repositioning, most babies show significant improvement by this age. As your baby gains head control and starts spending more time upright, the torticollis often improves more rapidly. If a flat spot has developed on the preferred side, it may also begin to improve. Your physical therapist will adjust the exercise program as your baby develops new movement skills.',
    },
    {
      ageRange: '8-12 months',
      context:
        'The majority of babies with torticollis treated with physical therapy achieve full range of motion by 12 months. If torticollis has not resolved with several months of physical therapy, your doctor may refer you to a specialist for further evaluation. Rarely, in cases that do not respond to therapy, a minor surgical procedure to release the tight muscle may be considered after age 1.',
    },
  ],
  whenNormal: [
    'Your baby has a mild head tilt that is improving with stretching exercises and repositioning',
    'Your baby\'s range of motion is increasing with physical therapy and they are turning their head more freely in both directions',
    'A small, firm lump in the neck muscle that is getting smaller over time with treatment',
    'Slight residual preference for one side that does not restrict movement',
  ],
  whenToMention: [
    'Your baby consistently tilts their head to one side or strongly prefers looking in one direction',
    'You notice a flat spot developing on the side of the head your baby prefers to lie on',
    'Your baby seems unable to turn their head fully to one side, or resists being turned',
    'The torticollis does not seem to be improving after several weeks of prescribed exercises',
  ],
  whenToActNow: [
    'Your baby develops a sudden head tilt that was not present before, especially if accompanied by vomiting, irritability, or other neurological symptoms, as this could indicate a different underlying cause than muscular torticollis',
    'Your baby has a head tilt along with abnormal eye movements, difficulty swallowing, or other signs that seem unrelated to simple muscle tightness',
  ],
  relatedMilestones: [
    'head-control',
    'tummy-time',
    'rolling',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Congenital Muscular Torticollis Clinical Practice Guideline. Pediatrics, 2013.',
      url: 'https://publications.aap.org/pediatrics/article/132/6/e1710/31674/Congenital-Muscular-Torticollis-in-Infants',
    },
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Flat Head Syndrome (Positional Plagiocephaly) & Torticollis: Parent FAQs.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/Cleft-Craniofacial/Pages/Positional-Skull-Deformities-and-Torticollis.aspx',
    },
    {
      org: 'AAP',
      citation:
        'Kaplan SL, et al. Physical Therapy Management of Congenital Muscular Torticollis: A 2018 Evidence-Based Clinical Practice Guideline. Pediatric Physical Therapy, 2018.',
      url: 'https://journals.lww.com/pedpt/fulltext/2018/10000/physical_therapy_management_of_congenital_muscular.2.aspx',
    },
  ],
};
