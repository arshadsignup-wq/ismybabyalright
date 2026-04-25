import type { ConcernPage, ConcernCategory } from '@/data/concerns/types';

export interface InternalLink {
  label: string;
  href: string;
  icon: 'milestone' | 'food' | 'sleep' | 'skin' | 'triage' | 'teething' | 'poop' | 'doctor' | 'feeding' | 'tummy' | 'growth' | 'tracker' | 'intervention';
}

const categoryLinks: Partial<Record<ConcernCategory, InternalLink[]>> = {
  feeding: [
    { label: 'Food Introduction Guide', href: '/food', icon: 'food' },
    { label: 'Feeding & Pumping Guide', href: '/feeding', icon: 'feeding' },
  ],
  sleep: [
    { label: 'Sleep Guide by Age', href: '/sleep', icon: 'sleep' },
  ],
  skin: [
    { label: 'Baby Skin Conditions Guide', href: '/skin-guide', icon: 'skin' },
  ],
  digestive: [
    { label: 'Poop Color Guide', href: '/poop-guide', icon: 'poop' },
  ],
};

const triageKeywords: Record<string, { label: string; href: string }> = {
  fever: { label: 'Fever Triage', href: '/triage/fever' },
  vomit: { label: 'Vomiting Triage', href: '/triage/vomiting' },
  rash: { label: 'Rash Triage', href: '/triage/rash' },
  breathing: { label: 'Breathing Triage', href: '/triage/breathing-difficulty' },
  cry: { label: 'Crying Triage', href: '/triage/excessive-crying' },
  diarrhea: { label: 'Diarrhea Triage', href: '/triage/diarrhea' },
  constipat: { label: 'Constipation Triage', href: '/triage/constipation' },
  congest: { label: 'Congestion Triage', href: '/triage/congestion' },
  ear: { label: 'Ear Infection Triage', href: '/triage/ear-infection' },
  eye: { label: 'Eye Discharge Triage', href: '/triage/eye-discharge' },
  jaundice: { label: 'Jaundice Triage', href: '/triage/jaundice' },
};

export function getInternalLinks(concern: ConcernPage): InternalLink[] {
  const links: InternalLink[] = [];
  const seen = new Set<string>();

  function add(link: InternalLink) {
    if (!seen.has(link.href)) {
      seen.add(link.href);
      links.push(link);
    }
  }

  // Category-based links
  const catLinks = categoryLinks[concern.category];
  if (catLinks) {
    catLinks.forEach(add);
  }

  // Triage keyword matching against slug + title + searchTerms
  const text = [concern.slug, concern.title, ...concern.searchTerms]
    .join(' ')
    .toLowerCase();

  for (const [keyword, triageLink] of Object.entries(triageKeywords)) {
    if (text.includes(keyword)) {
      add({ ...triageLink, icon: 'triage' });
    }
  }

  // Teething references
  if (text.includes('teeth') || text.includes('teething') || text.includes('gum')) {
    add({ label: 'Teething Guide', href: '/teething', icon: 'teething' });
  }

  // Poop references (non-digestive category)
  if (
    concern.category !== 'digestive' &&
    (text.includes('poop') || text.includes('stool') || text.includes('diaper'))
  ) {
    add({ label: 'Poop Color Guide', href: '/poop-guide', icon: 'poop' });
  }

  // Milestones link if concern has related milestones
  if (concern.relatedMilestones.length > 0) {
    add({ label: 'Milestone Checklists', href: '/milestones', icon: 'milestone' });
  }

  // Doctor visits link for medical concerns
  if (concern.category === 'medical') {
    add({ label: 'Well-Baby Visit Prep', href: '/doctor-visits', icon: 'doctor' });
  }

  // Self-referral means developmental concern
  if (concern.showSelfReferral) {
    add({ label: 'Early Intervention Directory', href: '/resources/early-intervention', icon: 'intervention' });
  }

  // Tummy time for physical development in young babies
  if (
    concern.category === 'physical' &&
    (text.includes('roll') || text.includes('crawl') || text.includes('tummy') || text.includes('head'))
  ) {
    add({ label: 'Tummy Time Guide', href: '/tummy-time', icon: 'tummy' });
  }

  // Growth for size/weight concerns
  if (text.includes('growth') || text.includes('weight') || text.includes('height') || text.includes('size') || text.includes('thrive')) {
    add({ label: 'Growth Spurts Timeline', href: '/growth-spurts', icon: 'growth' });
  }

  // Daily tracker for ongoing monitoring concerns
  if (concern.whenToMention.length > 0) {
    add({ label: 'Baby Tracker', href: '/tracker', icon: 'tracker' });
  }

  return links.slice(0, 6);
}
