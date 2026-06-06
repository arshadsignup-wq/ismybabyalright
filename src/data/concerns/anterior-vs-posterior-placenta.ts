import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'anterior-vs-posterior-placenta',
  title: 'Placenta Position Concerns',
  category: 'maternal',
  searchTerms: ['anterior placenta', 'posterior placenta', 'placenta position', 'placenta on front wall', 'anterior placenta feel baby', 'placenta location ultrasound', 'anterior placenta kicks', 'placenta fundal', 'where is my placenta'],
  quickAnswer: 'The placenta can attach anywhere on the uterine wall - anterior (front), posterior (back), fundal (top), or lateral (sides). All positions are normal. An anterior placenta may cushion the baby\'s movements, making kicks feel less intense or take longer to notice. The only concern is when the placenta is low-lying or covering the cervix (placenta previa).',
  byAge: [
    { ageRange: 'Second trimester', context: 'Your placenta position is identified at the anatomy scan (around 18-22 weeks). An anterior placenta is very common and not a problem. You may feel baby movements later (closer to 22-24 weeks instead of 18-20) because the placenta acts as a cushion between the baby and your belly wall. This is normal.' },
    { ageRange: 'Third trimester', context: 'With an anterior placenta, you may feel movements more on the sides and lower belly rather than the front. You should still feel regular movement patterns. Kick counts are still important. An anterior placenta does not affect delivery method or outcomes in most cases. If you need an amniocentesis, the provider will work around the placenta location.' },
  ],
  whenNormal: ['Anterior, posterior, fundal, or lateral placenta position - all are normal', 'Feeling kicks later than expected with an anterior placenta', 'Kicks felt mainly on the sides or lower belly with anterior placenta'],
  whenToMention: ['You are not feeling regular movements by 24 weeks', 'You notice a decrease in normal movement patterns', 'Your placenta was noted to be low-lying at your anatomy scan'],
  whenToActNow: ['Significant vaginal bleeding, especially if you know you have a low-lying placenta', 'Sudden decrease in fetal movement at any stage'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Placenta Previa. ACOG, 2022.', url: 'https://www.acog.org/womens-health/faqs/placenta-previa' },
    { org: 'NIH', citation: 'National Library of Medicine. Placenta Anatomy. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK557467/' },
    { org: 'March of Dimes', citation: 'March of Dimes. Placenta. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/placenta.aspx' },
  ],
  relatedConcernSlugs: ['low-lying-placenta-early-pregnancy', 'placenta-previa-diagnosis', 'anterior-placenta-reduced-movement'],
};
