import type { ConcernPage } from '@/data/concerns/types';

/**
 * Generates FAQ Q&A pairs from a ConcernPage data object.
 * Used for both visible FAQSection and FAQ schema (ensuring parity).
 */
export function generateConcernFAQ(
  concern: ConcernPage
): { question: string; answer: string }[] {
  const faqs: { question: string; answer: string }[] = [];

  // Simplify the title for natural-sounding questions
  const topic = concern.title
    .toLowerCase()
    .replace(/^my baby('s)?\s+/i, '')
    .replace(/\?$/, '');

  // 1. "Is [topic] normal?" → quickAnswer
  faqs.push({
    question: `Is ${topic} normal?`,
    answer: concern.quickAnswer,
  });

  // 2. "When should I call the doctor about [topic]?" → first 2-3 whenToActNow items
  if (concern.whenToActNow.length > 0) {
    faqs.push({
      question: `When should I call the doctor about ${topic}?`,
      answer: concern.whenToActNow.slice(0, 3).join(' '),
    });
  }

  // 3. "When is [topic] normal?" → first 2-3 whenNormal items
  if (concern.whenNormal.length > 0) {
    faqs.push({
      question: `When is ${topic} normal?`,
      answer: concern.whenNormal.slice(0, 3).join(' '),
    });
  }

  // 4. Per age: "Is [topic] normal at [ageRange]?" → byAge context (limit to 2-3)
  concern.byAge.slice(0, 3).forEach((age) => {
    faqs.push({
      question: `Is ${topic} normal at ${age.ageRange}?`,
      answer: age.context,
    });
  });

  return faqs;
}
