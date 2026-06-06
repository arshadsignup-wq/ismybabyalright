import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'labor-induction-concerns',
  title: 'Questions About Labor Induction',
  category: 'maternal',
  searchTerms: ['labor induction', 'induced labor', 'pitocin induction', 'cervical ripening', 'membrane sweep', 'labor induction methods', 'induction risks', 'elective induction', 'why induce labor', 'induction at 39 weeks', 'foley bulb induction'],
  quickAnswer: 'Labor induction is the process of starting labor artificially before it begins on its own. It may be recommended for medical reasons (such as post-dates, preeclampsia, or gestational diabetes) or may be offered electively at 39 weeks or later. Modern induction methods are safe and effective, though the process may take longer than spontaneous labor.',
  byAge: [
    { ageRange: 'Third trimester', context: 'If induction is being discussed, your provider will explain the reason, the methods available, and what to expect. Common methods include cervical ripening agents (prostaglandins or a Foley balloon catheter), membrane sweeping, breaking the water (amniotomy), and Pitocin (synthetic oxytocin). The specific approach depends on how ready your cervix is (assessed by Bishop score).' },
    { ageRange: 'Labor & delivery', context: 'Induction may take 12-24 hours or longer, especially if the cervix is not yet favorable. The process starts gradually and is closely monitored. You can still use pain management options including epidurals. The ARRIVE trial showed that elective induction at 39 weeks in low-risk first pregnancies was associated with lower cesarean rates, though this is a personal decision to discuss with your provider.' },
  ],
  whenNormal: ['Having questions and concerns about induction is completely normal', 'Wanting to understand all your options before agreeing to induction', 'Feeling nervous about the process or disappointed that labor did not start on its own'],
  whenToMention: ['You have questions about why induction is being recommended', 'You want to discuss the risks and benefits of induction vs waiting', 'You want to understand all the methods available to you', 'You have preferences about the induction process you want to discuss'],
  whenToActNow: ['You were scheduled for induction due to a medical condition and are having symptoms (contractions, water breaking, bleeding) before your induction date', 'You are feeling pressured into an induction you are not comfortable with - you have the right to ask questions and understand the recommendation'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Induction of Labor. ACOG Practice Bulletin No. 107, 2009 (Reaffirmed 2021).', url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2009/08/induction-of-labor' },
    { org: 'NIH', citation: 'National Library of Medicine. Labor Induction. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK470543/' },
    { org: 'NICE', citation: 'National Institute for Health and Care Excellence. Inducing Labour. NICE CG70, 2021.', url: 'https://www.nice.org.uk/guidance/ng207' },
  ],
  relatedConcernSlugs: ['overdue-pregnancy', 'birth-plan-flexibility', 'epidural-concerns'],
};
