/**
 * Due date calculator data — Naegele's rule and related calculations.
 * Sources: ACOG, AAP, WHO.
 */

/** Calculate due date from last menstrual period (Naegele's rule) */
export function calculateDueDateFromLMP(lmpDate: Date): Date {
  const due = new Date(lmpDate);
  due.setDate(due.getDate() + 280); // 40 weeks
  return due;
}

/** Calculate due date from conception/ovulation date */
export function calculateDueDateFromConception(conceptionDate: Date): Date {
  const due = new Date(conceptionDate);
  due.setDate(due.getDate() + 266); // 38 weeks
  return due;
}

/** Calculate due date from IVF transfer */
export function calculateDueDateFromIVF(
  transferDate: Date,
  embryoAge: 3 | 5
): Date {
  const due = new Date(transferDate);
  // Day 3 embryo: add 263 days; Day 5 embryo: add 261 days
  due.setDate(due.getDate() + (embryoAge === 3 ? 263 : 261));
  return due;
}

/** Calculate due date from ultrasound */
export function calculateDueDateFromUltrasound(
  ultrasoundDate: Date,
  gestationalWeeks: number,
  gestationalDays: number
): Date {
  const totalDaysPregnant = gestationalWeeks * 7 + gestationalDays;
  const daysRemaining = 280 - totalDaysPregnant;
  const due = new Date(ultrasoundDate);
  due.setDate(due.getDate() + daysRemaining);
  return due;
}

/** Get current gestational age from LMP */
export function getGestationalAge(lmpDate: Date): { weeks: number; days: number } {
  const today = new Date();
  const diffMs = today.getTime() - lmpDate.getTime();
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  return {
    weeks: Math.floor(totalDays / 7),
    days: totalDays % 7,
  };
}

/** Get trimester from gestational weeks */
export function getTrimester(weeks: number): 1 | 2 | 3 {
  if (weeks < 13) return 1;
  if (weeks < 27) return 2;
  return 3;
}

/** Days until due date */
export function getDaysUntilDue(dueDate: Date): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(dueDate);
  due.setHours(0, 0, 0, 0);
  return Math.ceil((due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
}

/** Format date for display */
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export interface PregnancyMilestone {
  week: number;
  title: string;
  description: string;
}

export const PREGNANCY_MILESTONES: PregnancyMilestone[] = [
  { week: 4, title: "Implantation", description: "Embryo implants in the uterine wall. Pregnancy hormone (hCG) begins rising." },
  { week: 6, title: "Heartbeat detectable", description: "A fetal heartbeat can often be seen on ultrasound." },
  { week: 8, title: "First prenatal visit", description: "Typically your first OB appointment with blood work and dating ultrasound." },
  { week: 12, title: "End of first trimester", description: "Risk of miscarriage drops significantly. Many parents share the news." },
  { week: 16, title: "Gender may be visible", description: "Anatomy can sometimes be seen on ultrasound. Quickening may begin." },
  { week: 20, title: "Anatomy scan", description: "Detailed ultrasound checks all major organs. Halfway point!" },
  { week: 24, title: "Viability milestone", description: "Baby has a chance of survival if born early with medical intervention." },
  { week: 28, title: "Third trimester begins", description: "Baby's eyes can open. Kick counts become important." },
  { week: 32, title: "Baby shower time", description: "Baby is practicing breathing. Most babies are head-down by now." },
  { week: 36, title: "Full term approaching", description: "Baby is nearly full size. Weekly doctor visits typically begin." },
  { week: 37, title: "Early term", description: "Baby is considered early term. Lungs are nearly mature." },
  { week: 39, title: "Full term", description: "Baby is full term! Ideal time for delivery if no complications." },
  { week: 40, title: "Due date", description: "Only ~5% of babies arrive on their exact due date." },
];
