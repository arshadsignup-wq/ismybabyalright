import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'precocious-puberty-signs-child',
  title: 'Signs of Precocious (Early) Puberty in My Child',
  category: 'medical',
  searchTerms: [
    'precocious puberty signs',
    'early puberty child',
    'breast development before age 8',
    'pubic hair before age 8',
    'early puberty in girls',
    'early puberty in boys',
    'child body odor young age',
    'testicular enlargement before 9',
    'growth spurt too early',
    'early puberty treatment',
  ],
  quickAnswer:
    'Precocious puberty refers to puberty that begins before age 8 in girls or before age 9 in boys. Signs include breast development, pubic or underarm hair, body odor, rapid growth spurts, and in boys, testicular enlargement. While some children simply develop on the earlier end of normal, true precocious puberty requires medical evaluation because it can affect final adult height and have underlying causes that need treatment.',
  byAge: [
    {
      ageRange: '0-2 years',
      context:
        'In infancy, breast tissue swelling and even a small amount of vaginal discharge are common due to residual maternal hormones. These typically resolve within the first few months and are not precocious puberty. True puberty signs in this age group are extremely rare and would warrant urgent endocrine evaluation, as they may indicate a serious underlying condition such as a hormone-producing tumor or congenital adrenal hyperplasia.',
    },
    {
      ageRange: '2-5 years',
      context:
        'Puberty signs in this age group are uncommon and should always be evaluated by a pediatric endocrinologist. Isolated breast development without other puberty signs (premature thelarche) is often benign in girls under 3 but needs monitoring. If your child develops pubic hair, body odor, or rapid growth along with breast changes, this suggests true precocious puberty rather than an isolated finding. A bone age X-ray and hormone blood tests are typically the first steps in evaluation.',
    },
    {
      ageRange: '5-8 years (girls) / 5-9 years (boys)',
      context:
        'This is the age range where precocious puberty is most commonly identified. In girls, breast budding (a firm nodule under the nipple) before age 8 is the most common first sign. In boys, testicular enlargement (volume greater than 4 mL or length greater than 2.5 cm) before age 9 is the hallmark. Your pediatrician will likely refer to a pediatric endocrinologist for a bone age X-ray, blood hormone levels (LH, FSH, estradiol or testosterone), and possibly a brain MRI to look for underlying causes.',
    },
    {
      ageRange: '8-10 years (girls) / 9-11 years (boys)',
      context:
        'Puberty starting at age 8 in girls and 9 in boys is considered within the normal range, though it is on the earlier side. Current guidelines recognize that breast development at age 7-8 in white girls and age 6-7 in Black girls may still be a variant of normal, though evaluation is recommended to be safe. If puberty progression is rapid or your child is significantly shorter than peers, an evaluation may still be helpful to assess whether treatment could benefit their final adult height.',
    },
    {
      ageRange: 'After diagnosis',
      context:
        'Treatment for central precocious puberty typically involves GnRH agonist therapy (such as leuprolide injections), which pauses puberty progression and allows the child to grow taller before puberty resumes. Treatment is generally continued until an age-appropriate time for puberty. The goal is to preserve adult height potential and reduce the psychosocial impact of early physical maturation. Peripheral precocious puberty has different treatment depending on the underlying cause.',
    },
  ],
  whenNormal: [
    'Breast tissue swelling in a newborn that resolves within the first few months of life',
    'Mild body odor in a child aged 6 or older without other puberty signs, which may be premature adrenarche',
    'Breast budding beginning at age 8 or older in girls or testicular growth beginning at age 9 or older in boys',
    'A child who is growing steadily along their growth curve without sudden acceleration',
  ],
  whenToMention: [
    'Your daughter develops breast buds, pubic hair, or body odor before age 8',
    'Your son shows testicular enlargement, pubic hair, or significant body odor before age 9',
    'Your child has a sudden growth spurt that moves them significantly higher on the growth chart',
    'You notice mood changes, acne, or oily skin in a young child along with physical changes',
  ],
  whenToActNow: [
    'A child under age 2 develops signs of puberty such as breast growth, pubic hair, or genital changes, as this may indicate a hormone-producing tumor or serious endocrine condition requiring urgent evaluation',
    'Your child develops puberty signs along with severe headaches, vision changes, or neurological symptoms, which could indicate a brain lesion',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['breast-buds-newborn', 'newborn-breast-tissue-swelling', 'premature-adrenarche-child', 'premature-thelarche-breast-baby', 'congenital-adrenal-hyperplasia'],
  sources: [
    {
      org: 'AAP',
      citation:
        'Kaplowitz PB, Bloch CA, Section on Endocrinology. Evaluation and Referral of Children With Signs of Early Puberty. Pediatrics. 2016;137(1):e20153732.',
      url: 'https://publications.aap.org/pediatrics/article/137/1/e20153732/52600/Evaluation-and-Referral-of-Children-With-Signs-of',
    },
    {
      org: 'Endocrine Society',
      citation:
        'Carel JC, Léger J. Precocious Puberty. New England Journal of Medicine. 2008;358(22):2366-2377.',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJMcp0800459',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Child Health and Human Development. Precocious Puberty.',
      url: 'https://www.nichd.nih.gov/health/topics/precocious',
    },
  ],
};
