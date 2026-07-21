import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'premature-thelarche-breast-baby',
  title: 'Premature Thelarche - Breast Development in My Baby or Toddler',
  category: 'medical',
  searchTerms: [
    'premature thelarche',
    'breast development baby girl',
    'breast buds toddler girl',
    'breast tissue baby under 2',
    'baby girl breast growing',
    'toddler breast lump',
    'breast development before age 3',
    'is breast tissue normal in baby girl',
    'baby girl one breast bigger',
    'isolated breast development infant',
  ],
  quickAnswer:
    'Premature thelarche is isolated breast development in girls typically under age 3, without other signs of puberty such as pubic hair, growth acceleration, or vaginal bleeding. It is usually a benign, self-limiting condition caused by transient sensitivity to low levels of estrogen. In most cases, the breast tissue waxes and wanes and eventually resolves on its own without treatment. However, your pediatrician should evaluate it to ensure it is not the beginning of true precocious puberty.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Breast tissue in newborns is very common and results from maternal estrogen that crossed the placenta. This neonatal breast tissue typically resolves by 2-3 months but can persist for up to 6 months, especially in breastfed babies. If the breast tissue persists beyond 6 months, it may be classified as premature thelarche. At this age, it is almost always benign, but your pediatrician should be aware so they can monitor for any progression.',
    },
    {
      ageRange: '6 months - 2 years',
      context:
        'This is the most common age for premature thelarche to be diagnosed. You may notice a firm, disc-like nodule under one or both nipples. The breast tissue may fluctuate in size, sometimes waxing and waning over weeks or months. It is often unilateral (one side) or asymmetric. As long as there is no pubic hair, growth acceleration, vaginal discharge or bleeding, or bone age advancement, this is considered benign premature thelarche. Your pediatrician will typically monitor with periodic exams.',
    },
    {
      ageRange: '2-4 years',
      context:
        'Premature thelarche that begins after age 2 should be monitored more closely, as it has a slightly higher chance of progressing to true precocious puberty compared to onset before age 2. Your pediatrician may recommend a bone age X-ray and possibly blood hormone levels (LH, FSH, estradiol) to confirm that the breast development is isolated. In most cases it still resolves spontaneously, but periodic follow-up every 6 months is recommended.',
    },
    {
      ageRange: '4-8 years',
      context:
        'New breast development between ages 4 and 8 is less likely to be simple premature thelarche and more likely to represent early or precocious puberty. A full evaluation by a pediatric endocrinologist is recommended, including blood tests for LH, FSH, and estradiol, a bone age X-ray, and possibly a pelvic ultrasound or brain MRI. If evaluation confirms progressive puberty, treatment with GnRH agonists may be considered.',
    },
  ],
  whenNormal: [
    'Small breast buds in a girl under age 2 with no other signs of puberty such as pubic hair or growth acceleration',
    'The breast tissue waxes and wanes in size or remains stable without progressive enlargement',
    'Breast tissue is unilateral or asymmetric with no skin changes, redness, or tenderness',
    'Your child is growing at a normal rate along their expected growth curve',
    'Blood tests and bone age, if performed, are normal for age',
  ],
  whenToMention: [
    'Breast tissue in a girl under 3 that is persistently enlarging rather than fluctuating or resolving',
    'Breast development appears in a girl between ages 3 and 8 for the first time',
    'You notice any pubic or underarm hair, body odor, or acne along with breast development',
  ],
  whenToActNow: [
    'Your child has breast development along with vaginal bleeding or bloody discharge at any age before expected puberty, which requires urgent endocrine evaluation',
    'Breast tissue is rapidly enlarging along with a dramatic growth spurt, suggesting progressive precocious puberty that may need treatment',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['breast-buds-newborn', 'newborn-breast-tissue-swelling', 'precocious-puberty-signs-child', 'premature-adrenarche-child'],
  sources: [
    {
      org: 'AAP',
      citation:
        'Kaplowitz PB. Clinical Characteristics of 104 Children Referred for Evaluation of Precocious Puberty. Journal of Clinical Endocrinology & Metabolism. 2004;89(8):3644-3650.',
      url: 'https://academic.oup.com/jcem/article/89/8/3644/2844515',
    },
    {
      org: 'Endocrine Society',
      citation:
        'de Vries L, Guz-Mark A, Lazar L, Reber M, Phillip M. Premature Thelarche: Age at Presentation Affects Clinical Course but Not Clinical Characteristics or Risk to Progress to Precocious Puberty. Journal of Pediatrics. 2010;156(3):466-471.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/19914634/',
    },
    {
      org: 'NIH',
      citation:
        'MedlinePlus. Premature Thelarche. National Library of Medicine.',
      url: 'https://medlineplus.gov/ency/article/007455.htm',
    },
  ],
};
