import type { ConcernPage } from '@/data/concerns/types';

/**
 * Generates FAQ Q&A pairs from a ConcernPage data object.
 * Used for both visible FAQSection and FAQ schema (ensuring parity).
 * Targets 8-10 questions per page for comprehensive FAQ coverage.
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

  // 4. "What causes [topic]?" — derive from quickAnswer + whenNormal
  {
    const causeParts: string[] = [];
    causeParts.push(concern.quickAnswer);
    if (concern.whenNormal.length > 1) {
      causeParts.push(`Common explanations include: ${concern.whenNormal.slice(0, 2).join('. ')}.`);
    }
    faqs.push({
      question: `What causes ${topic}?`,
      answer: causeParts.join(' '),
    });
  }

  // 5. "What should I mention to my pediatrician about [topic]?"
  if (concern.whenToMention.length > 0) {
    faqs.push({
      question: `What should I mention to my pediatrician about ${topic}?`,
      answer: `You should mention ${topic} at your next visit if: ${concern.whenToMention.slice(0, 3).join('. ')}.`,
    });
  }

  // 6. Per age: "Is [topic] normal at [ageRange]?" → byAge context (limit to 2)
  concern.byAge.slice(0, 2).forEach((age) => {
    faqs.push({
      question: `Is ${topic} normal at ${age.ageRange}?`,
      answer: age.context,
    });
  });

  // 7. "Should I go to the ER for [topic]?" — derive from whenToActNow emergency items
  if (concern.whenToActNow.length > 0) {
    const emergencyItems = concern.whenToActNow.slice(0, 2).map(
      item => item.charAt(0).toLowerCase() + item.slice(1).replace(/\.$/, '')
    );
    faqs.push({
      question: `Should I go to the ER for ${topic}?`,
      answer: `Seek emergency care if ${emergencyItems.join(', or if ')}. When in doubt, call your pediatrician's after-hours line for guidance.`,
    });
  }

  // 8. "Does [topic] go away on its own?" — derive from whenNormal + byAge
  {
    const resolveParts: string[] = [];
    if (concern.whenNormal.length > 0) {
      resolveParts.push(`In many cases, ${topic} resolves on its own, especially when ${concern.whenNormal[0].charAt(0).toLowerCase()}${concern.whenNormal[0].slice(1).replace(/\.$/, '')}.`);
    }
    if (concern.byAge.length > 2) {
      const later = concern.byAge[concern.byAge.length - 1];
      resolveParts.push(`By ${later.ageRange}, ${later.context.charAt(0).toLowerCase()}${later.context.slice(1)}`);
    }
    if (resolveParts.length > 0) {
      faqs.push({
        question: `Does ${topic} go away on its own?`,
        answer: resolveParts.join(' '),
      });
    }
  }

  return faqs;
}
