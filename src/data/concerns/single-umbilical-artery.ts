import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'single-umbilical-artery', title: 'Two-Vessel Cord (Single Umbilical Artery)', category: 'maternal',
  searchTerms: ['single umbilical artery', 'two vessel cord', 'SUA pregnancy', 'one artery umbilical cord', 'two vessel umbilical cord', 'single artery cord baby', 'SUA ultrasound finding'],
  quickAnswer: 'A single umbilical artery (SUA), also called a two-vessel cord, occurs when the umbilical cord has one artery instead of the typical two. It is found in about 1% of pregnancies. An isolated SUA (with no other abnormalities) is usually not a cause for concern, and most babies with an isolated SUA are born healthy.',
  byAge: [
    { ageRange: 'Second trimester', context: 'SUA is typically discovered at the anatomy scan. If no other abnormalities are found (isolated SUA), the outlook is excellent. Your provider may recommend a follow-up growth ultrasound in the third trimester, as there is a small increased risk of the baby being smaller than expected. A detailed anatomy scan may be performed to rule out associated conditions.' },
    { ageRange: 'Third trimester', context: 'Growth monitoring via ultrasound may be recommended. Most babies with isolated SUA grow normally and do not need any special care at delivery. If the SUA is associated with other findings, additional monitoring may be warranted.' },
  ],
  whenNormal: ['Isolated SUA found at anatomy scan with all other structures normal', 'Baby growing appropriately on follow-up ultrasound'],
  whenToMention: ['You want to understand what SUA means for your baby', 'You are worried after hearing about the finding', 'SUA was found alongside other ultrasound findings'],
  whenToActNow: ['Signs of growth restriction or decreased fetal movement', 'Any typical pregnancy emergency signs'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Ultrasound During Pregnancy. ACOG, 2022.', url: 'https://www.acog.org/womens-health/faqs/ultrasound-exams' },
    { org: 'NIH', citation: 'National Library of Medicine. Single Umbilical Artery. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK541107/' },
    { org: 'March of Dimes', citation: 'March of Dimes. Umbilical Cord Conditions. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/complications/umbilical-cord-conditions.aspx' },
  ],
  relatedConcernSlugs: ['soft-markers-ultrasound', 'marginal-cord-insertion', 'anatomy-scan-findings'],
};
