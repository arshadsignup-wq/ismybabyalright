import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-dizziness-fainting',
  title: 'Dizziness and Fainting in Pregnancy',
  category: 'maternal',
  searchTerms: [
    'dizziness pregnancy',
    'feeling faint pregnant',
    'lightheaded pregnancy',
    'fainting pregnant',
    'dizzy spells pregnancy',
    'vertigo pregnant',
    'seeing stars pregnant',
    'almost passing out pregnant',
    'low blood pressure pregnancy dizziness',
    'standing up dizzy pregnant',
  ],
  quickAnswer:
    'Dizziness is common during pregnancy, affecting many pregnant people at various stages. It can be caused by low blood pressure, blood pooling in the legs, low blood sugar, anemia, dehydration, or the growing uterus compressing major blood vessels. While usually benign, fainting should always be reported to your provider.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Dizziness in early pregnancy is often caused by rapidly expanding blood vessels and hormonal changes that lower blood pressure. Standing up slowly, staying hydrated, eating small frequent meals, and avoiding prolonged standing can help. If you feel faint, sit or lie down immediately.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'As the uterus grows, it can press on blood vessels, particularly when lying flat on your back. This is called supine hypotensive syndrome. Try to sleep on your left side to improve blood flow. Dizziness when standing quickly (orthostatic hypotension) is also common. Rise slowly from sitting or lying positions.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Dizziness may worsen in the third trimester as the uterus is largest and blood volume demands are highest. Avoid lying flat on your back for extended periods. If dizziness is accompanied by headache, vision changes, or swelling, report it promptly as it could be related to blood pressure issues.',
    },
  ],
  whenNormal: [
    'Brief lightheadedness when standing up quickly that resolves in seconds',
    'Feeling dizzy in hot environments, crowded spaces, or after standing too long',
    'Dizziness that improves with sitting, lying down, eating, or drinking water',
    'Mild lightheadedness without loss of consciousness',
  ],
  whenToMention: [
    'Frequent episodes of dizziness or near-fainting',
    'Dizziness is accompanied by persistent rapid heartbeat or palpitations',
    'You actually fainted, even if briefly',
  ],
  whenToActNow: [
    'Fainting or dizziness accompanied by vaginal bleeding, severe abdominal pain, or severe headache',
    'Dizziness with chest pain, severe shortness of breath, or blurred vision',
    'You fainted and hit your head or belly',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Dizziness During Pregnancy. ACOG, 2022.',
      url: 'https://www.acog.org/womens-health/faqs',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Syncope in Pregnancy. StatPearls, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK526089/',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Common Discomforts of Pregnancy. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/pregnancy/common-discomforts-of-pregnancy.aspx',
    },
  ],
  relatedConcernSlugs: ['pregnancy-blood-pressure-low', 'pregnancy-anemia'],
};
