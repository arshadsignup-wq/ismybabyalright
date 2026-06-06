import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'tokophobia-fear-of-childbirth',
  title: 'Fear of Giving Birth (Tokophobia)',
  category: 'maternal',
  searchTerms: [
    'tokophobia',
    'fear of childbirth',
    'scared of giving birth',
    'terrified of labor',
    'fear of labor pain',
    'birth phobia',
    'afraid to give birth',
    'childbirth anxiety',
    'fear of tearing during birth',
    'fear of dying in childbirth',
    'dread of delivery',
  ],
  quickAnswer:
    'Tokophobia is an intense, sometimes paralyzing fear of childbirth that affects approximately 6-10% of pregnant people. It goes beyond normal nervousness about labor and can cause severe anxiety, nightmares, and avoidance behavior. It is a recognized condition that can be treated with therapy, education, and supportive care planning.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Fear of birth may emerge immediately upon learning of pregnancy. Primary tokophobia occurs in people who have never given birth, while secondary tokophobia develops after a traumatic birth experience. Speaking to your provider early allows time for therapeutic support, birth education, and careful planning to help you feel more empowered.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'As the pregnancy progresses, fear may intensify or may improve with education and support. Cognitive behavioral therapy (CBT) has strong evidence for helping with birth fear. Prenatal classes that focus on understanding what happens during labor, pain management options, and coping techniques can also help reduce fear.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Working with your provider to create a detailed birth plan that addresses your specific fears can be very empowering. Discuss all pain management options, including epidurals and other interventions. Having a supportive birth partner or doula can also significantly reduce fear and improve the birth experience. Remember: requesting a cesarean due to severe tokophobia is a valid conversation to have with your provider.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'After delivery, processing your birth experience is important, whether it went as planned or not. If the birth was traumatic, early intervention can help prevent secondary tokophobia from affecting future pregnancies. Birth story debriefing with a trained professional can be healing.',
    },
  ],
  whenNormal: [
    'Some nervousness or anxiety about labor and delivery that is manageable',
    'Worries about pain that are eased by learning about pain management options',
    'Mild fear that does not prevent you from attending appointments or preparing for birth',
  ],
  whenToMention: [
    'Fear of birth is causing significant distress or consuming your thoughts',
    'You are avoiding prenatal appointments, birth preparation, or conversations about delivery',
    'Fear is causing you to consider terminating an otherwise wanted pregnancy',
    'You are having nightmares or panic attacks related to childbirth',
  ],
  whenToActNow: [
    'You are so overwhelmed by fear that you cannot function or care for yourself',
    'Fear is causing thoughts of self-harm or harm to others',
    'You are in a crisis and need immediate support - call 988 (Suicide and Crisis Lifeline)',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Mental Health Disorders in Pregnancy. ACOG, 2023.',
      url: 'https://www.acog.org/clinical/clinical-guidance/clinical-practice-guideline/articles/2023/06/screening-and-diagnosis-of-mental-health-conditions-during-pregnancy-and-postpartum',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Tokophobia: A Systematic Review of the Literature. Psychosomatics, 2017.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28366534/',
    },
    {
      org: 'NICE',
      citation:
        'National Institute for Health and Care Excellence. Pregnancy and Complex Social Factors. NICE CG110, 2010.',
      url: 'https://www.nice.org.uk/guidance/cg110',
    },
  ],
  relatedConcernSlugs: ['pregnancy-anxiety', 'birth-trauma-emotional', 'birth-plan-flexibility'],
};
