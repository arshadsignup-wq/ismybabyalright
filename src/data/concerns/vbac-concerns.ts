import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'vbac-concerns',
  title: 'Vaginal Birth After Cesarean (VBAC)',
  category: 'maternal',
  searchTerms: ['VBAC', 'vaginal birth after c-section', 'TOLAC', 'trial of labor after cesarean', 'VBAC risks', 'VBAC success rate', 'uterine rupture risk VBAC', 'can I have vaginal birth after cesarean', 'VBAC vs repeat c-section', 'VBAC eligibility'],
  quickAnswer: 'Vaginal birth after cesarean (VBAC) is a safe option for many people, with success rates of 60-80% for those who attempt a trial of labor after cesarean (TOLAC). The main concern is uterine rupture, which occurs in less than 1% of cases. VBAC offers benefits including shorter recovery, lower infection risk, and fewer complications in future pregnancies.',
  byAge: [
    { ageRange: 'First trimester', context: 'Early pregnancy is a good time to discuss VBAC with your provider. Factors that favor VBAC success include: previous vaginal delivery, spontaneous labor, single low-transverse uterine incision, and the reason for the prior cesarean being non-recurring. Your provider can help assess your individual likelihood of success.' },
    { ageRange: 'Third trimester', context: 'If planning VBAC, choose a hospital with surgical capability in case of emergency. Continuous fetal monitoring during labor is recommended. Discuss signs of uterine rupture with your provider. Having a clear plan, including what would lead to a repeat cesarean, helps you feel prepared for any outcome.' },
    { ageRange: 'Labor & delivery', context: 'During a TOLAC, your care team will monitor you and the baby closely. Most VBAC labors progress normally. If labor stalls, if there are signs of fetal distress, or if uterine rupture is suspected, a cesarean will be performed. A successful VBAC typically means a faster recovery than a repeat cesarean.' },
  ],
  whenNormal: ['Having questions about whether VBAC is right for you', 'Feeling nervous about both options (VBAC and repeat cesarean)', 'Wanting to understand the risks and benefits of each option'],
  whenToMention: ['You want to attempt VBAC and need to find a supportive provider and facility', 'You had a previous uterine surgery beyond a standard cesarean', 'You have questions about your specific risk factors'],
  whenToActNow: ['During a TOLAC: sudden severe abdominal pain, heavy bleeding, or fetal heart rate changes', 'Feeling something "give way" or "pop" in your abdomen during labor'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Vaginal Birth After Cesarean Delivery. ACOG Practice Bulletin No. 205, 2019.', url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2019/02/vaginal-birth-after-cesarean-delivery' },
    { org: 'NIH', citation: 'National Institutes of Health. NIH Consensus Development Conference Statement: Vaginal Birth After Cesarean, 2010.', url: 'https://consensus.nih.gov/2010/vbacstatement.htm' },
    { org: 'March of Dimes', citation: 'March of Dimes. Vaginal Birth After Cesarean. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/vaginal-birth-after-cesarean.aspx' },
  ],
  relatedConcernSlugs: ['c-section-recovery', 'c-section-scar-concerns', 'birth-plan-flexibility'],
};
