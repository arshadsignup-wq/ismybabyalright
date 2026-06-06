import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'teen-pregnancy-concerns',
  title: 'Teenage Pregnancy Support',
  category: 'maternal',
  searchTerms: ['teen pregnancy', 'teenage pregnancy', 'pregnant teenager', 'young pregnant', 'pregnant in high school', 'teen pregnancy support', 'teen pregnancy risks', 'adolescent pregnancy', 'teen mom resources', 'pregnant under 18'],
  quickAnswer: 'Teenage pregnancy carries some additional health risks, but with proper prenatal care and support, most teen parents and their babies do well. The most important thing is to start prenatal care as early as possible and build a support system. You deserve compassionate, non-judgmental medical care regardless of your age.',
  byAge: [
    { ageRange: 'First trimester', context: 'Starting prenatal care early is the single most important step. If you are unsure where to go, community health centers, Planned Parenthood, and your school nurse can help connect you with care. Prenatal vitamins (especially folic acid) are important. Your provider will screen for conditions that are slightly more common in teen pregnancies, including anemia and preeclampsia.' },
    { ageRange: 'Second trimester', context: 'Good nutrition is especially important for teens who are still growing themselves. You need about 2,400 calories and adequate calcium, iron, and protein. WIC (Women, Infants, and Children program) can help with nutrition. Stay in school if possible - many schools have programs to support pregnant students. Building a support network of trusted adults is important.' },
    { ageRange: 'Third trimester', context: 'Prepare for delivery and after. Take childbirth education classes if available. Plan for childcare, school continuation, and financial support. Programs exist specifically for teen parents. The risk of preterm birth and low birth weight is slightly higher in teens, so attending all prenatal appointments is important.' },
  ],
  whenNormal: ['Feeling scared, overwhelmed, or unsure - these feelings are valid', 'Having mixed emotions about the pregnancy', 'Needing help navigating healthcare, school, and family dynamics'],
  whenToMention: ['You need help accessing prenatal care or resources', 'You are feeling depressed, anxious, or isolated', 'You are in an unsafe living situation or relationship', 'You need information about your options'],
  whenToActNow: ['Any pregnancy warning signs (bleeding, severe pain, decreased movement)', 'You feel unsafe at home or in a relationship', 'You are having thoughts of harming yourself - call 988 (Suicide and Crisis Lifeline)'],
  relatedMilestones: [],
  showSelfReferral: true,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Adolescent Pregnancy. ACOG, 2022.', url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/05/adolescent-pregnancy-contraception-and-sexual-activity' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Teen Pregnancy. CDC, 2023.', url: 'https://www.cdc.gov/teenpregnancy/index.htm' },
    { org: 'March of Dimes', citation: 'March of Dimes. Teenage Pregnancy. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/teenage-pregnancy.aspx' },
  ],
  relatedConcernSlugs: ['unplanned-pregnancy-emotions', 'prenatal-depression', 'pregnancy-anxiety'],
};
