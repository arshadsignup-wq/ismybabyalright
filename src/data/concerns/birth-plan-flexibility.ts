import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'birth-plan-flexibility',
  title: 'When Birth Does Not Go as Planned',
  category: 'maternal',
  searchTerms: ['birth plan not followed', 'birth didn\'t go as planned', 'birth plan flexibility', 'disappointed with birth', 'unplanned c-section feelings', 'birth expectations vs reality', 'failed birth plan', 'coping with unexpected birth', 'birth plan changes', 'birth regret'],
  quickAnswer: 'It is very common for birth to unfold differently than planned. About 1 in 3 births in the US involve cesarean delivery, and many other births involve unplanned interventions. Feeling disappointed, sad, or even grieving the birth experience you envisioned is completely valid. What matters most is that you and your baby are safe, but your feelings about the experience also matter.',
  byAge: [
    { ageRange: 'Third trimester', context: 'Creating a birth plan is valuable, but framing it as "preferences" rather than a rigid plan can help with flexibility. Discuss possible scenarios with your provider, including what would happen if interventions become necessary. Understanding why certain decisions might be made can help you feel more prepared and in control even if plans change.' },
    { ageRange: 'Labor & delivery', context: 'If your birth is not going as planned, ask your care team to explain what is happening and why changes are being recommended. You have the right to understand your options and participate in decisions. Having a supportive birth partner who knows your preferences can help advocate for you when you are focused on labor.' },
    { ageRange: 'Postpartum', context: 'Processing a birth that did not go as planned takes time. Feelings of disappointment, guilt, anger, or grief are normal and valid. Talking about your birth experience with your partner, a trusted friend, or a therapist can help. Birth story processing or debriefing with a trained professional is available in many areas. Remember: how your baby was born does not define you as a parent.' },
  ],
  whenNormal: ['Feeling disappointed that birth did not go as planned', 'Needing time to process the experience', 'Mixed feelings - grateful for a healthy baby but sad about the birth experience', 'Wanting to talk about what happened and understand why'],
  whenToMention: ['You have lingering negative feelings about your birth experience', 'You want to understand what happened during your birth and why decisions were made', 'Feelings about the birth are affecting your ability to bond with your baby or enjoy new parenthood'],
  whenToActNow: ['You are having flashbacks, nightmares, or severe anxiety related to the birth experience (possible birth trauma/PTSD)', 'Feelings of failure or guilt are overwhelming and persistent', 'You are having thoughts of harming yourself or your baby'],
  relatedMilestones: [],
  showSelfReferral: true,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Approaches to Limit Intervention During Labor and Birth. ACOG Committee Opinion, 2019.', url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2019/02/approaches-to-limit-intervention-during-labor-and-birth' },
    { org: 'NIH', citation: 'National Library of Medicine. Birth Expectations and Experiences. BMC Pregnancy and Childbirth, 2019.', url: 'https://pubmed.ncbi.nlm.nih.gov/30851710/' },
    { org: 'March of Dimes', citation: 'March of Dimes. Your Birth Plan. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/your-birth-plan.aspx' },
  ],
  relatedConcernSlugs: ['birth-trauma-emotional', 'emergency-cesarean-processing', 'postpartum-ptsd-birth-trauma'],
};
