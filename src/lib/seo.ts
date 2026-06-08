import type { ConcernPage } from '@/data/concerns/types';

const SITE_URL = 'https://www.ismybabyalright.com';
const SITE_NAME = 'Is My Baby Alright?';

export function getCanonicalUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

const titleTemplates: Record<string, (title: string) => string> = {
  physical: (t) => `${t} - Normal Development or Cause for Concern?`,
  communication: (t) => `${t} - Speech & Language Milestones Guide`,
  feeding: (t) => `${t} - Pediatrician-Backed Feeding Advice`,
  sleep: (t) => `${t} - Is This Normal? Sleep Guide for Parents`,
  skin: (t) => `${t} - Causes, Treatment & When to See a Doctor`,
  digestive: (t) => `${t} - What's Normal & When to Call Your Pediatrician`,
  behavior: (t) => `${t} - Age-by-Age Behavior Guide for Parents`,
  medical: (t) => `${t} - Symptoms, Causes & When to Seek Care`,
  maternal: (t) => `${t} - Evidence-Based Guide for New Mothers`,
};

export function getConcernMeta(concern: ConcernPage) {
  const titleFn = titleTemplates[concern.category];
  const title = titleFn ? titleFn(concern.title) : `${concern.title} - When to Worry & What to Do`;
  return {
    title,
    description: truncate(
      `${concern.quickAnswer} Learn when it's normal, when to mention it to your pediatrician, and when to act now.`,
      160
    ),
  };
}

export function getFAQSchema(concern: ConcernPage) {
  const qaPairs: { question: string; answer: string }[] = [
    { question: concern.title, answer: concern.quickAnswer },
  ];

  concern.byAge.forEach((age) => {
    qaPairs.push({
      question: `Is it normal at ${age.ageRange}?`,
      answer: age.context,
    });
  });

  if (concern.whenNormal.length > 0) {
    qaPairs.push({
      question: `When is ${concern.title.toLowerCase().replace(/^my baby /, '').replace(/\?$/, '')} normal?`,
      answer: concern.whenNormal.join(' '),
    });
  }

  if (concern.whenToActNow.length > 0) {
    qaPairs.push({
      question: `When should I call the doctor?`,
      answer: concern.whenToActNow.join(' '),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qaPairs.map((qa) => ({
      '@type': 'Question',
      name: qa.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: qa.answer,
      },
    })),
  };
}

export function getMedicalWebPageSchema(concern: ConcernPage, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: concern.title,
    description: concern.quickAnswer,
    url: getCanonicalUrl(path),
    about: {
      '@type': 'MedicalCondition',
      name: concern.title,
    },
    audience: {
      '@type': 'PeopleAudience',
      audienceType: 'Parents',
    },
    lastReviewed: '2026-06-01',
    reviewedBy: {
      '@type': 'Organization',
      name: 'Is My Baby Alright? Editorial Team',
      url: SITE_URL,
    },
    medicalAudience: {
      '@type': 'MedicalAudience',
      audienceType: 'Patient',
    },
    mainContentOfPage: {
      '@type': 'WebPageElement',
      cssSelector: '.concern-content',
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.quick-answer', 'h1'],
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: getCanonicalUrl(item.url) } : {}),
    })),
  };
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      'Free, evidence-based baby developmental milestone tracker and parenting resource. Based on CDC, WHO, and AAP guidelines.',
    sameAs: [],
  };
}

function truncate(str: string, maxLen: number): string {
  if (str.length <= maxLen) return str;
  return str.slice(0, maxLen - 1).replace(/\s+\S*$/, '') + '…';
}
