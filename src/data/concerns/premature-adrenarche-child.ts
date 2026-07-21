import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'premature-adrenarche-child',
  title: 'Premature Adrenarche - Early Body Odor or Pubic Hair in My Child',
  category: 'medical',
  searchTerms: [
    'premature adrenarche',
    'early body odor child',
    'child body odor age 4',
    'child body odor age 5',
    'pubic hair before age 8',
    'child smells like body odor young',
    'early pubic hair child',
    'adrenal androgens early',
    'child underarm odor young',
    'is early body odor normal child',
  ],
  quickAnswer:
    'Premature adrenarche is the early activation of the adrenal glands, producing mild levels of androgens (hormones) that can cause body odor, oily skin, mild acne, and sometimes sparse pubic or underarm hair in children as young as 4 to 8 years old. It is usually a benign variant of normal development and does not represent true puberty. However, it should be evaluated by your pediatrician to rule out other conditions such as congenital adrenal hyperplasia or precocious puberty.',
  byAge: [
    {
      ageRange: '0-3 years',
      context:
        'Body odor and pubic hair development in children under age 3 is not typical of premature adrenarche and should be evaluated promptly. In very young children, these signs may indicate congenital adrenal hyperplasia (CAH), an adrenal tumor, or another endocrine disorder. Your pediatrician will likely order blood tests including 17-hydroxyprogesterone and DHEA-S levels and refer to a pediatric endocrinologist.',
    },
    {
      ageRange: '4-6 years',
      context:
        'This is the younger end of the typical premature adrenarche range. Children may develop a noticeable body odor, particularly from the underarms, that smells like adult sweat. Some children develop fine, sparse pubic or underarm hair, mild acne, or oily skin. If these are the only signs and the child is not having a rapid growth spurt, breast development (in girls), or testicular enlargement (in boys), premature adrenarche is the most likely explanation. A bone age X-ray and DHEA-S blood test can help confirm the diagnosis.',
    },
    {
      ageRange: '6-8 years',
      context:
        'Premature adrenarche is most commonly diagnosed in this age range. The adrenal glands begin producing small amounts of androgens (particularly DHEA-S), causing body odor and sometimes light pubic or underarm hair. This is considered a normal variant and does not require treatment. However, your pediatrician should evaluate the child to ensure there are no signs of true precocious puberty (breast development in girls before 8 or testicular enlargement in boys before 9) and to rule out non-classic congenital adrenal hyperplasia.',
    },
    {
      ageRange: '8+ years',
      context:
        'After age 8 in girls and 9 in boys, adrenarche is considered a normal part of development and is no longer labeled premature. Body odor, pubic hair, and mild acne are expected signs that the adrenal glands are maturing, typically preceding gonadal puberty by 1-2 years. This is the normal timeline and does not require medical evaluation unless other concerning signs are present.',
    },
  ],
  whenNormal: [
    'Your child has mild body odor or oily skin without breast development, testicular enlargement, or rapid growth spurts',
    'Fine, sparse pubic or underarm hair appears between ages 6 and 8 without other signs of puberty',
    'Your child is growing at a normal rate and their height is following their expected growth curve',
    'Blood tests show mildly elevated DHEA-S levels consistent with premature adrenarche',
  ],
  whenToMention: [
    'Your child develops body odor, pubic hair, or acne before age 6',
    'Body odor or hair growth is accompanied by a noticeable growth spurt or the child appears tall for their age compared to peers',
    'Your child shows signs of pubic hair or body odor along with breast development (girls) or testicular enlargement (boys)',
  ],
  whenToActNow: [
    'A child under age 3 develops body odor, pubic hair, or genital enlargement, as this may indicate congenital adrenal hyperplasia or an adrenal tumor requiring urgent evaluation',
    'Rapid virilization (deepening voice, significant muscle development, clitoral or penile enlargement) occurs at any age, which may indicate a hormone-producing tumor',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['precocious-puberty-signs-child', 'congenital-adrenal-hyperplasia', 'premature-thelarche-breast-baby', 'breast-buds-newborn'],
  sources: [
    {
      org: 'AAP',
      citation:
        'Kaplowitz PB. Premature Adrenarche. HealthyChildren.org, American Academy of Pediatrics.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/Glands-Growth-Disorders/Pages/Premature-Adrenarche.aspx',
    },
    {
      org: 'Endocrine Society',
      citation:
        'Utriainen P, Laakso S, Liimatta J, Jääskeläinen J, Voutilainen R. Premature Adrenarche - A Common Condition with Variable Presentation. Hormone Research in Paediatrics. 2015;83(4):221-231.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/25764994/',
    },
    {
      org: 'NIH',
      citation:
        'MedlinePlus. Premature Adrenarche. National Library of Medicine.',
      url: 'https://medlineplus.gov/ency/article/007456.htm',
    },
  ],
};
