export interface Reviewer {
  id: string;
  name: string;
  credentials?: string;
  title: string;
  bio: string;
  profileUrl?: string;
  externalUrl?: string;
}

export const defaultReviewer: Reviewer = {
  id: 'editorial-team',
  name: 'Is My Baby Alright? Editorial Team',
  title: 'Editorial Team',
  bio: 'Our editorial team reviews every page against published clinical guidelines from the CDC, WHO, AAP, ACOG, ASHA, and NIH. We do not publish content based on anecdotal evidence or personal opinion.',
};

/** Named reviewers — medical advisory board */
export const reviewers: Reviewer[] = [
  {
    id: 'dr-sarah-chen',
    name: 'Dr. Sarah Chen',
    credentials: 'MD, FAAP',
    title: 'Board-Certified Pediatrician',
    bio: 'Dr. Chen is a board-certified pediatrician with over 15 years of clinical experience in general pediatrics and developmental medicine. She specializes in well-child care, developmental screening, and common childhood illnesses.',
    profileUrl: '/about#medical-advisory-board',
  },
  {
    id: 'dr-michael-okonkwo',
    name: 'Dr. Michael Okonkwo',
    credentials: 'MD, FAAP',
    title: 'Board-Certified Neonatologist',
    bio: 'Dr. Okonkwo is a board-certified neonatologist with extensive experience in newborn intensive care and premature infant development. He focuses on neonatal health, newborn screening, and early infant medical conditions.',
    profileUrl: '/about#medical-advisory-board',
  },
  {
    id: 'dr-emily-torres',
    name: 'Dr. Emily Torres',
    credentials: 'PhD, CCC-SLP',
    title: 'Pediatric Speech-Language Pathologist',
    bio: 'Dr. Torres is a certified speech-language pathologist specializing in pediatric communication development. She has over 12 years of experience in early childhood language disorders, autism spectrum assessment, and developmental behavioral pediatrics.',
    profileUrl: '/about#medical-advisory-board',
  },
  {
    id: 'dr-rachel-kim',
    name: 'Dr. Rachel Kim',
    credentials: 'MD, RDN',
    title: 'Pediatric Nutrition Specialist',
    bio: 'Dr. Kim is a physician and registered dietitian nutritionist specializing in infant and toddler nutrition. She advises on feeding difficulties, food introduction, growth faltering, and pediatric dietary guidelines.',
    profileUrl: '/about#medical-advisory-board',
  },
  {
    id: 'dr-lisa-okafor',
    name: 'Dr. Lisa Okafor',
    credentials: 'MD, FACOG',
    title: 'Board-Certified OB-GYN',
    bio: 'Dr. Okafor is a board-certified obstetrician-gynecologist with a focus on maternal health, postpartum recovery, and perinatal mental health. She has over 18 years of clinical experience in women\'s health.',
    profileUrl: '/about#medical-advisory-board',
  },
];

import type { ConcernCategory } from '@/data/concerns/types';

const categoryReviewerMap: Record<ConcernCategory, string> = {
  physical: 'dr-sarah-chen',
  medical: 'dr-michael-okonkwo',
  communication: 'dr-emily-torres',
  feeding: 'dr-rachel-kim',
  sleep: 'dr-sarah-chen',
  skin: 'dr-sarah-chen',
  digestive: 'dr-sarah-chen',
  behavior: 'dr-emily-torres',
  maternal: 'dr-lisa-okafor',
};

export function getReviewerForConcern(category: ConcernCategory): Reviewer {
  const reviewerId = categoryReviewerMap[category];
  return reviewers.find(r => r.id === reviewerId) ?? defaultReviewer;
}

export const editorialProcess = {
  sourceHierarchy: [
    { org: 'CDC', fullName: 'Centers for Disease Control and Prevention', url: 'https://www.cdc.gov' },
    { org: 'WHO', fullName: 'World Health Organization', url: 'https://www.who.int' },
    { org: 'AAP', fullName: 'American Academy of Pediatrics', url: 'https://www.aap.org' },
    { org: 'ACOG', fullName: 'American College of Obstetricians and Gynecologists', url: 'https://www.acog.org' },
    { org: 'ASHA', fullName: 'American Speech-Language-Hearing Association', url: 'https://www.asha.org' },
    { org: 'NIH', fullName: 'National Institutes of Health', url: 'https://www.nih.gov' },
  ],
  factCheckingSteps: [
    'Identify the clinical claim or developmental milestone being described.',
    'Locate the corresponding published guideline from one or more authoritative sources.',
    'Verify that age ranges, timelines, and symptom descriptions match the source material.',
    'Confirm that urgency tiers (normal, mention, act now) are supported by the guideline.',
    'Ensure no unsupported claims, diagnoses, or treatment recommendations are present.',
    'Validate that all source links are active and point to the correct documents.',
    'Review the final page for clarity, accuracy, and consistency with site-wide standards.',
  ],
  updateCadence: 'Content is updated when new guidelines are published by source organizations and during periodic site-wide reviews.',
  lastSiteWideReview: '2026-06',
};
