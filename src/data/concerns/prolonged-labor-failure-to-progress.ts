import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'prolonged-labor-failure-to-progress',
  title: 'Stalled Labor (Failure to Progress)',
  category: 'maternal',
  searchTerms: ['stalled labor', 'failure to progress labor', 'labor not progressing', 'slow labor', 'prolonged labor', 'labor dystocia', 'stuck at centimeters dilated', 'cervix not dilating', 'labor taking too long', 'augmentation labor'],
  quickAnswer: 'Prolonged labor or "failure to progress" occurs when labor stalls or progresses more slowly than expected. It is one of the most common reasons for cesarean delivery, but many stalled labors can be successfully managed with position changes, movement, Pitocin augmentation, amniotomy, or time. Every labor has its own timeline.',
  byAge: [
    { ageRange: 'Labor & delivery', context: 'Labor progress is measured by cervical dilation, effacement, and the baby\'s descent. Current guidelines recognize that active labor may not begin until 6 cm dilation (previously thought to be 4 cm). First-time labors are often longer. If labor stalls, your provider may recommend walking, position changes, Pitocin to strengthen contractions, breaking the water, or rest. A cesarean is considered when these measures do not lead to progress and there are concerns about safety.' },
    { ageRange: 'Postpartum', context: 'If prolonged labor led to a cesarean or assisted delivery, processing the experience is important. You may feel disappointed, exhausted, or relieved. All these feelings are valid. Prolonged labor does not mean your body failed - babies can be in difficult positions, and many factors influence labor progress.' },
  ],
  whenNormal: ['Labor that is progressing slowly but steadily is not necessarily a problem', 'First labors can take 12-20+ hours', 'Cervical dilation is not always linear - it is normal to have periods of slower progress'],
  whenToMention: ['You feel your labor has stalled and want to discuss options', 'You have been pushing for a long time without progress', 'You are exhausted and need to discuss your options'],
  whenToActNow: ['Signs of fetal distress during a prolonged labor (your care team will be monitoring this)', 'Fever during labor suggesting possible infection', 'You are unable to cope and need immediate support'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Safe Prevention of the Primary Cesarean Delivery. ACOG/SMFM Obstetric Care Consensus No. 1, 2014 (Reaffirmed 2021).', url: 'https://www.acog.org/clinical/clinical-guidance/obstetric-care-consensus/articles/2014/03/safe-prevention-of-the-primary-cesarean-delivery' },
    { org: 'NIH', citation: 'National Library of Medicine. Abnormal Labor. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK532924/' },
    { org: 'NICE', citation: 'National Institute for Health and Care Excellence. Intrapartum Care. NICE CG190, 2023.', url: 'https://www.nice.org.uk/guidance/cg190' },
  ],
  relatedConcernSlugs: ['labor-induction-concerns', 'birth-plan-flexibility', 'emergency-cesarean-processing'],
};
