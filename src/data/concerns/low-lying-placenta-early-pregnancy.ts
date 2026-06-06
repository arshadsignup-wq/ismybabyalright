import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'low-lying-placenta-early-pregnancy',
  title: 'Low-Lying Placenta (Not Previa)',
  category: 'maternal',
  searchTerms: ['low lying placenta', 'placenta near cervix', 'low placenta pregnancy', 'marginal placenta', 'placenta migration', 'placenta will it move up', 'low placenta 20 weeks', 'placenta close to cervix ultrasound'],
  quickAnswer: 'A low-lying placenta found on the 18-22 week anatomy scan is very common and usually not a cause for concern. As the uterus grows, the placenta appears to "migrate" upward in over 90% of cases, resolving by the third trimester. Your provider will recheck the placenta position later in pregnancy.',
  byAge: [
    { ageRange: 'Second trimester', context: 'At the anatomy scan, if the placenta is noted to be low-lying (within 2 cm of the cervix) or covering the cervix, a follow-up ultrasound will be scheduled around 32-36 weeks. In the vast majority of cases, the placenta moves away from the cervix as the lower uterine segment stretches and grows. Activity restrictions are usually not needed at this stage unless you are having bleeding.' },
    { ageRange: 'Third trimester', context: 'A repeat ultrasound will confirm whether the placenta has moved. If the placenta remains low-lying or is covering the cervix (placenta previa) at 32-36 weeks, your provider will discuss delivery planning. A cesarean delivery is needed if the placenta covers the cervix at the time of delivery. Avoid intercourse if advised and report any bleeding immediately.' },
  ],
  whenNormal: ['Low-lying placenta identified at the 20-week scan - this is very common', 'No bleeding or symptoms', 'Follow-up scan shows the placenta has moved away from the cervix'],
  whenToMention: ['You want to understand what a low-lying placenta means for your pregnancy', 'You are experiencing any spotting or light bleeding', 'You want to know about any activity restrictions'],
  whenToActNow: ['Any vaginal bleeding, especially painless bright red bleeding in the second or third trimester', 'Heavy bleeding with or without pain'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Placenta Previa. ACOG, 2022.', url: 'https://www.acog.org/womens-health/faqs/placenta-previa' },
    { org: 'NIH', citation: 'National Library of Medicine. Placenta Previa. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK539818/' },
    { org: 'NICE', citation: 'National Institute for Health and Care Excellence. Antenatal Care. NICE, 2021.', url: 'https://www.nice.org.uk/guidance/ng201' },
  ],
  relatedConcernSlugs: ['placenta-previa-diagnosis', 'anterior-vs-posterior-placenta'],
};
