import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'congenital-adrenal-hyperplasia',
  title: 'My Baby\'s Newborn Screening Flagged Congenital Adrenal Hyperplasia (CAH)',
  category: 'medical',
  searchTerms: [
    'congenital adrenal hyperplasia CAH',
    'CAH newborn screening',
    'CAH baby treatment',
    'adrenal crisis baby',
    'ambiguous genitalia CAH',
    'CAH salt wasting baby',
    '21-hydroxylase deficiency baby',
    'CAH cortisol replacement',
    'newborn screening positive CAH',
    'CAH stress dosing',
  ],
  quickAnswer:
    'Congenital adrenal hyperplasia (CAH) is a group of genetic conditions affecting the adrenal glands\' ability to produce cortisol and sometimes aldosterone. The most common form (21-hydroxylase deficiency) affects about 1 in 15,000 births. In severe (classic) forms, the body cannot make enough cortisol to respond to stress and may not properly regulate salt balance. CAH is detected on newborn screening in most states. With appropriate hormone replacement therapy, children with CAH grow up healthy and active. The key is consistent medication, stress dosing during illness, and regular follow-up with a pediatric endocrinologist.',
  byAge: [
    {
      ageRange: '0-1 month (newborn period)',
      context:
        'If newborn screening flags CAH, confirmatory testing is done immediately. In the salt-wasting form (the most severe), babies can become critically ill within the first 1-2 weeks of life with an adrenal crisis — vomiting, dehydration, dangerous electrolyte imbalances, and shock. This is a medical emergency. Treatment begins with hydrocortisone (cortisol replacement) and fludrocortisone (aldosterone replacement). In baby girls, the classic form can cause virilized (masculinized) genitalia, which may require evaluation but does not affect the baby\'s gender — she is still female.',
    },
    {
      ageRange: '1-6 months',
      context:
        'Once on appropriate medication, most babies stabilize well. Medication doses need regular adjustment based on blood work (17-hydroxyprogesterone, electrolytes, renin). Your endocrinologist will teach you "stress dosing" — giving extra hydrocortisone during illness, fever, or physical stress to prevent adrenal crisis. This is the most critical thing parents of children with CAH learn. Your child should wear a medical alert bracelet.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Growth and development typically proceed normally with appropriate treatment. Medication adjustments continue based on growth and lab work. As your baby begins daycare or encounters more illnesses, knowing when and how to stress dose becomes essential. Make sure all caregivers understand that your baby needs emergency hydrocortisone during severe illness and know how to administer an injectable stress dose.',
    },
    {
      ageRange: '1 year+',
      context:
        'Children with well-managed CAH grow and develop normally. Long-term management involves balancing adequate cortisol replacement (to prevent adrenal crisis and excess androgen production) without over-treatment (which can slow growth). Regular monitoring with a pediatric endocrinologist is essential. During childhood, the condition is primarily managed with daily oral medications and stress dosing when needed.',
    },
  ],
  whenNormal: [
    'Your baby is on appropriate hormone replacement and growing well',
    'Your baby\'s lab values are in acceptable ranges and medication is adjusted regularly',
    'You understand stress dosing and have emergency supplies ready',
  ],
  whenToMention: [
    'Your baby is not gaining weight well or seems unusually tired despite medication',
    'You are unsure whether your baby needs stress dosing during a particular illness',
    'Your baby\'s lab values are not staying in range despite medication adjustments',
    'You have questions about long-term management, growth, or future fertility',
  ],
  whenToActNow: [
    'Your baby is vomiting and cannot keep down medication — this can lead to adrenal crisis. Give the injectable stress dose and go to the emergency room immediately. Tell the ER: "My baby has CAH and needs IV stress dose hydrocortisone"',
    'Your baby is lethargic, pale, or floppy — this may be an adrenal crisis. Give the injectable stress dose and call 911',
    'Your baby has a high fever and is not responding to oral stress dosing — seek emergency care with the injectable dose on hand',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'g6pd-deficiency-baby',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute of Child Health and Human Development. Congenital Adrenal Hyperplasia.',
      url: 'https://www.nichd.nih.gov/health/topics/cah',
    },
    {
      org: 'Endocrine Society',
      citation:
        'Endocrine Society. Clinical Practice Guideline: Congenital Adrenal Hyperplasia Due to 21-Hydroxylase Deficiency. JCEM, 2018.',
      url: 'https://academic.oup.com/jcem/article/103/11/4043/5159521',
    },
    {
      org: 'CARES Foundation',
      citation:
        'CARES Foundation. About CAH.',
      url: 'https://www.caresfoundation.org/what-is-cah/',
    },
  ],
};
