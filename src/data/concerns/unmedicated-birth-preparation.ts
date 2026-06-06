import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'unmedicated-birth-preparation',
  title: 'Natural Birth Planning and Preparation',
  category: 'maternal',
  searchTerms: ['natural birth', 'unmedicated birth', 'drug free birth', 'birth without epidural', 'natural birth preparation', 'hypnobirthing', 'lamaze', 'Bradley method', 'coping with labor pain naturally', 'birth plan natural', 'water birth'],
  quickAnswer: 'An unmedicated birth is a valid and achievable choice for many birthing people. Preparation is key and includes learning pain-coping techniques such as breathing exercises, movement, water immersion, massage, and mental preparation methods like hypnobirthing or the Bradley method. Having a supportive birth team, including a doula, can significantly increase your chances of achieving your desired birth experience.',
  byAge: [
    { ageRange: 'Second trimester', context: 'The second trimester is an ideal time to begin preparing for an unmedicated birth. Consider taking childbirth education classes (Lamaze, Bradley, hypnobirthing), hiring a doula, and practicing relaxation and breathing techniques daily. Discuss your preferences with your provider and choose a birth setting that supports unmedicated birth.' },
    { ageRange: 'Third trimester', context: 'Continue practicing coping techniques. Create a birth plan that outlines your preferences while acknowledging that flexibility may be needed. Pack comfort items for labor: a tennis ball for counter-pressure, essential oils, music, comfortable clothes. Discuss with your provider what circumstances might require a change in plan.' },
    { ageRange: 'Labor & delivery', context: 'During labor, use your practiced techniques: movement and position changes, warm water (shower or tub), breathing patterns, vocalization, counter-pressure, and continuous support from your partner or doula. Remember that changing your mind about pain medication during labor is not a failure. The goal is a safe, positive birth experience for you and your baby.' },
  ],
  whenNormal: ['Wanting to explore unmedicated birth options', 'Feeling both excited and nervous about natural birth', 'Practicing coping techniques and feeling more confident over time', 'Having a flexible mindset while hoping for an unmedicated birth'],
  whenToMention: ['You want your provider\'s support in planning an unmedicated birth', 'You have questions about which comfort measures are available at your birth location', 'You want to discuss under what circumstances medical intervention would be recommended'],
  whenToActNow: ['During labor, you are experiencing distress beyond what your coping techniques can manage and want pain relief', 'Medical complications arise that require intervention - trust your medical team\'s guidance'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Approaches to Limit Intervention During Labor and Birth. ACOG Committee Opinion No. 766, 2019.', url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2019/02/approaches-to-limit-intervention-during-labor-and-birth' },
    { org: 'NIH', citation: 'National Library of Medicine. Non-pharmacological Approaches for Pain Management During Labor. Cochrane Review, 2018.', url: 'https://pubmed.ncbi.nlm.nih.gov/29672515/' },
    { org: 'NICE', citation: 'National Institute for Health and Care Excellence. Intrapartum Care for Healthy Women and Babies. NICE CG190, 2023.', url: 'https://www.nice.org.uk/guidance/cg190' },
  ],
  relatedConcernSlugs: ['epidural-concerns', 'birth-plan-flexibility', 'back-labor'],
};
