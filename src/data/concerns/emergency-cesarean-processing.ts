import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'emergency-cesarean-processing',
  title: 'Processing an Emergency C-Section',
  category: 'maternal',
  searchTerms: ['emergency c-section', 'unplanned cesarean', 'emergency cesarean feelings', 'traumatic c-section', 'emergency c-section recovery emotional', 'processing unplanned c-section', 'emergency c-section guilt', 'crash c-section', 'urgent cesarean birth', 'emergency c-section what to expect'],
  quickAnswer: 'An emergency cesarean section can be a frightening and disorienting experience, especially when it happens quickly and without time to prepare emotionally. Feelings of shock, grief, relief, guilt, anger, or numbness afterward are all normal. Processing this experience takes time, and support is available.',
  byAge: [
    { ageRange: 'Labor & delivery', context: 'Emergency cesareans happen when the health of the birthing parent or baby is at risk and vaginal delivery is not safe. The experience can feel chaotic and overwhelming. Everything may happen very fast, and you may feel disconnected from what is happening. Your medical team is focused on keeping you and your baby safe.' },
    { ageRange: 'Postpartum', context: 'After an emergency cesarean, you are healing from both major surgery and a potentially traumatic experience. Physical recovery takes 6-8 weeks or longer. Emotional recovery can take much longer. You may experience flashbacks, difficulty sleeping, anxiety about future pregnancies, or difficulty bonding. All of these responses are normal after a traumatic experience. Ask your provider for a birth debrief to understand what happened and why. Therapy, particularly with a perinatal mental health specialist, can be very helpful.' },
  ],
  whenNormal: ['Feeling shocked, scared, or confused about what happened', 'Grief about the birth experience you expected vs what occurred', 'Relief that you and your baby are safe, mixed with other difficult emotions', 'Needing to hear the story of what happened from your medical team'],
  whenToMention: ['You have questions about why the emergency cesarean was needed', 'You are struggling emotionally with the experience weeks after the birth', 'You are concerned about how this affects future pregnancies or births'],
  whenToActNow: ['You are having flashbacks, nightmares, or severe anxiety that is getting worse (signs of PTSD)', 'You are unable to bond with or care for your baby due to emotional distress', 'You are having thoughts of self-harm or harming your baby'],
  relatedMilestones: [],
  showSelfReferral: true,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Cesarean Birth. ACOG FAQ, 2022.', url: 'https://www.acog.org/womens-health/faqs/cesarean-birth' },
    { org: 'NIH', citation: 'National Library of Medicine. Psychological Impact of Emergency Cesarean Section. BJOG, 2018.', url: 'https://pubmed.ncbi.nlm.nih.gov/29193676/' },
    { org: 'March of Dimes', citation: 'March of Dimes. C-Section. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/c-section.aspx' },
  ],
  relatedConcernSlugs: ['birth-plan-flexibility', 'birth-trauma-emotional', 'c-section-recovery', 'postpartum-ptsd-birth-trauma'],
};
