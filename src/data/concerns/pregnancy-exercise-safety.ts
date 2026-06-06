import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'pregnancy-exercise-safety', title: 'Exercise Guidelines During Pregnancy', category: 'maternal',
  searchTerms: ['exercise during pregnancy', 'safe exercise pregnant', 'pregnancy workout', 'running while pregnant', 'lifting weights pregnant', 'exercise restrictions pregnancy', 'prenatal exercise', 'yoga during pregnancy', 'swimming pregnant safe', 'exercise first trimester'],
  quickAnswer: 'Exercise during pregnancy is not only safe for most people but is actively recommended. ACOG recommends at least 150 minutes of moderate-intensity aerobic activity per week during pregnancy. Regular exercise reduces the risk of gestational diabetes, preeclampsia, cesarean delivery, and excessive weight gain while improving mood and energy levels.',
  byAge: [
    { ageRange: 'First trimester', context: 'If you were active before pregnancy, you can generally continue your routine with modifications as needed. If you are starting an exercise program, begin gradually. Safe activities include walking, swimming, stationary cycling, prenatal yoga, and low-impact aerobics. Avoid contact sports, activities with fall risk, and exercising in extreme heat.' },
    { ageRange: 'Second trimester', context: 'Continue regular exercise with modifications as your belly grows. After 20 weeks, avoid exercises flat on your back for extended periods. Listen to your body and modify intensity as needed. You should be able to talk comfortably during exercise (the "talk test"). Stay hydrated and avoid overheating.' },
    { ageRange: 'Third trimester', context: 'Exercise may need more modification as the belly grows. Walking, swimming, and prenatal yoga are excellent options. Reduce impact activities if you experience pelvic pain. Exercise right up until delivery is safe for most people. Stop exercising and contact your provider if you have vaginal bleeding, contractions, dizziness, shortness of breath beyond normal exertion, or chest pain.' },
  ],
  whenNormal: ['Exercising regularly throughout pregnancy with appropriate modifications', 'Feeling energized after moderate exercise', 'Some exercises becoming less comfortable as pregnancy progresses'],
  whenToMention: ['You have a medical condition and want to discuss safe exercise', 'You are unsure which exercises are safe during pregnancy', 'You experience pelvic pain with certain exercises'],
  whenToActNow: ['Vaginal bleeding during or after exercise', 'Regular contractions triggered by exercise before 37 weeks', 'Chest pain, severe shortness of breath, or dizziness during exercise'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Physical Activity and Exercise During Pregnancy and the Postpartum Period. ACOG Committee Opinion No. 804, 2020.', url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2020/04/physical-activity-and-exercise-during-pregnancy-and-the-postpartum-period' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Physical Activity and Pregnancy. CDC, 2023.', url: 'https://www.cdc.gov/physicalactivity/basics/pregnancy/index.htm' },
    { org: 'March of Dimes', citation: 'March of Dimes. Exercise During Pregnancy. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/exercise-during-pregnancy.aspx' },
  ],
  relatedConcernSlugs: ['pregnancy-weight-gain-concerns', 'pregnancy-back-pain'],
};
