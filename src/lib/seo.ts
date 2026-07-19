import type { ConcernPage } from '@/data/concerns/types';
import type { Reviewer } from '@/data/editorial';
import { generateConcernFAQ } from '@/lib/concern-faq';

const SITE_URL = 'https://www.ismybabyalright.com';
const SITE_NAME = 'Is My Baby Alright?';

export function getCanonicalUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

// Layout adds " | Is My Baby Alright?" (22 chars), so page title must stay under ~38 chars
// to hit the 60-char SERP limit. The concern title itself carries the keyword value.
export function getConcernMeta(concern: ConcernPage) {
  return {
    title: concern.title,
    description: truncateSentence(
      `${concern.quickAnswer} Learn when it's normal, when to mention it to your pediatrician, and when to act now.`,
      160
    ),
  };
}

export function getFAQSchema(concern: ConcernPage) {
  const qaPairs = generateConcernFAQ(concern);
  return getFAQPageSchema(qaPairs);
}

export function getPersonSchema(reviewer: Reviewer) {
  return {
    '@type': 'Person',
    name: reviewer.name,
    ...(reviewer.credentials ? { honorificSuffix: reviewer.credentials } : {}),
    ...(reviewer.title ? { jobTitle: reviewer.title } : {}),
    ...(reviewer.externalUrl ? { url: reviewer.externalUrl } : {}),
    worksFor: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function getMedicalWebPageSchema(
  concern: ConcernPage,
  path: string,
  lastModified?: string,
  reviewer?: Reviewer
) {
  const reviewedByValue = reviewer
    ? getPersonSchema(reviewer)
    : {
        '@type': 'Organization',
        name: 'Is My Baby Alright? Editorial Team',
        url: SITE_URL,
        description:
          'Content reviewed against published guidelines from the CDC, WHO, AAP, ACOG, ASHA, and NIH.',
      };

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
    ...(lastModified ? { lastReviewed: lastModified, dateModified: lastModified } : {}),
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    reviewedBy: reviewedByValue,
    isBasedOn: [
      { '@type': 'MedicalGuideline', name: 'CDC Developmental Milestones', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
      { '@type': 'MedicalGuideline', name: 'AAP Clinical Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
      { '@type': 'MedicalGuideline', name: 'WHO Child Growth Standards', url: 'https://www.who.int/tools/child-growth-standards' },
    ],
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
      ...(item.url ? { url: getCanonicalUrl(item.url) } : {}),
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
    foundingDate: '2026',
    publishingPrinciples: `${SITE_URL}/editorial-policy`,
    ethicsPolicy: `${SITE_URL}/editorial-policy`,
    correctionsPolicy: `${SITE_URL}/editorial-policy`,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      url: `${SITE_URL}/contact`,
    },
    knowsAbout: [
      'Baby developmental milestones',
      'Infant health',
      'Pediatric care guidelines',
      'Postpartum mental health',
      'Baby nutrition and feeding',
    ],
  };
}

export function getEditorialPolicySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Editorial Policy',
    description:
      'All content is reviewed against published guidelines from the CDC, WHO, AAP, ACOG, ASHA, and NIH. Content follows a three-tier action guidance structure and is updated when new guidelines are published.',
    url: `${SITE_URL}/editorial-policy`,
    datePublished: '2026-04-01',
    dateModified: '2026-07-01',
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function getContentPageSchema({
  name,
  description,
  path,
  lastModified,
  medicalGuidelines,
  speakableCssSelector = ['.key-takeaways', 'h1'],
}: {
  name: string;
  description: string;
  path: string;
  lastModified?: string;
  medicalGuidelines?: { name: string; url: string }[];
  speakableCssSelector?: string[];
}) {
  const guidelines = medicalGuidelines ?? [
    { name: 'AAP Clinical Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
    { name: 'CDC Developmental Milestones', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
    { name: 'WHO Child Growth Standards', url: 'https://www.who.int/tools/child-growth-standards' },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name,
    description,
    url: getCanonicalUrl(path),
    audience: {
      '@type': 'PeopleAudience',
      audienceType: 'Parents',
    },
    ...(lastModified ? { lastReviewed: lastModified, dateModified: lastModified } : {}),
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    reviewedBy: {
      '@type': 'Organization',
      name: 'Is My Baby Alright? Editorial Team',
      url: SITE_URL,
      description:
        'Content reviewed against published guidelines from the CDC, WHO, AAP, ACOG, ASHA, and NIH.',
    },
    isBasedOn: guidelines.map((g) => ({
      '@type': 'MedicalGuideline',
      name: g.name,
      url: g.url,
    })),
    medicalAudience: {
      '@type': 'MedicalAudience',
      audienceType: 'Patient',
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: speakableCssSelector,
    },
  };
}

export function getFAQPageSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((qa) => ({
      '@type': 'Question',
      name: qa.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: qa.answer,
      },
    })),
  };
}

export function getHowToSchema(
  name: string,
  description: string,
  steps: { name: string; text: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function getWebApplicationSchema({
  name,
  description,
  path,
  applicationCategory = 'HealthApplication',
}: {
  name: string;
  description: string;
  path: string;
  applicationCategory?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    url: getCanonicalUrl(path),
    applicationCategory,
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function getAboutPageSchema({
  name,
  description,
  path,
  lastModified,
}: {
  name: string;
  description: string;
  path: string;
  lastModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name,
    description,
    url: getCanonicalUrl(path),
    ...(lastModified ? { dateModified: lastModified } : {}),
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function getContactPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name,
    description,
    url: getCanonicalUrl(path),
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function getWebPageSchema({
  name,
  description,
  path,
  lastModified,
}: {
  name: string;
  description: string;
  path: string;
  lastModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: getCanonicalUrl(path),
    ...(lastModified ? { dateModified: lastModified } : {}),
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function getCollectionPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url: getCanonicalUrl(path),
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function getMedicalSignOrSymptomSchema({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return {
    '@type': 'MedicalSignOrSymptom',
    name,
    description,
  };
}

export function getArticleSchema({
  headline,
  description,
  path,
  datePublished,
  dateModified,
}: {
  headline: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url: getCanonicalUrl(path),
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
  };
}

function truncateSentence(str: string, maxLen: number): string {
  if (str.length <= maxLen) return str;
  // Try to truncate at the last sentence boundary within the limit
  const trimmed = str.slice(0, maxLen);
  const lastSentenceEnd = Math.max(
    trimmed.lastIndexOf('. '),
    trimmed.lastIndexOf('? '),
    trimmed.lastIndexOf('! ')
  );
  if (lastSentenceEnd > maxLen * 0.4) {
    return trimmed.slice(0, lastSentenceEnd + 1);
  }
  // Fall back to word boundary
  return trimmed.replace(/\s+\S*$/, '') + '…';
}
