import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'lying-fibbing-in-toddlers',
  title: 'Lying and Fibbing in Toddlers',
  category: 'behavior',
  searchTerms: [
    'toddler lying',
    'toddler fibbing normal',
    'my toddler lies to me',
    'when do kids start lying',
    'toddler denies doing something',
    'child lying developmental',
    'toddler makes up stories',
    'toddler blames sibling',
  ],
  quickAnswer:
    'When a toddler tells a fib, such as denying they took a cookie or blaming a sibling, it is actually a sign of advanced cognitive development. Lying requires understanding that other people have different knowledge than you do, which is a sophisticated brain skill called "theory of mind." Most children begin experimenting with lying around ages 2-3, and this is a normal and even healthy milestone.',
  byAge: [
    {
      ageRange: '12-24 months',
      context:
        'Children under 2 do not truly lie because they lack the cognitive ability to understand that others have different thoughts and knowledge. What may look like lying at this age is usually a child saying what they wish were true, not understanding the question, or parroting a response. If your 18-month-old says "no" when asked if they took the toy, they may simply be using their favorite word rather than deliberately deceiving.',
    },
    {
      ageRange: '24-36 months',
      context:
        'This is when genuine first fibs emerge. Around age 2-3, children begin to understand that you did not see what they did, and they experiment with saying things that are not true, usually to avoid getting in trouble. These lies are transparent and clumsy, which is endearing and normal. Research shows that children who lie earlier tend to have stronger cognitive and social skills. Responding with gentle honesty rather than harsh punishment encourages truthfulness over time.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Lying becomes more frequent and more skilled around ages 3-4 as theory of mind develops further. Children may tell elaborate stories, deny obvious transgressions, or blame imaginary friends. The best approach is to avoid setting "traps" by asking questions you already know the answer to, model honesty, and praise truthfulness when you see it. Occasional lying at this age is not a character flaw; it is a cognitive exercise.',
    },
  ],
  whenNormal: [
    'Your toddler denies something obvious, like having chocolate on their face while denying they ate the chocolate',
    'Your child makes up fantastical stories that blend imagination and reality, which is creativity rather than deception',
    'Lying is occasional and primarily motivated by avoiding trouble or getting something they want',
    'Your child is otherwise honest in many interactions and the lying is not constant or calculated',
  ],
  whenToMention: [
    'Your child lies constantly and compulsively about things that have no benefit, going well beyond normal developmental fibbing',
    'Lying is paired with other persistent behavioral concerns such as extreme aggression, cruelty to animals, or fire-setting in an older child',
    'Your child seems genuinely unable to distinguish between reality and fantasy by age 4, even when gently guided',
  ],
  whenToActNow: [
    'Your child is fabricating stories about being hurt or abused, which should always be taken seriously and evaluated by a professional regardless of whether you believe it is true',
    'Lying is accompanied by significant behavioral changes, withdrawal, fearfulness, or signs that something may have happened to your child',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Why Children Lie and What Parents Can Do About It. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Why-Children-Lie.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. The Development of Lying in Young Children. Developmental Psychology.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/23477603/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Positive Parenting Tips: Preschoolers (3-5 years).',
      url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/preschoolers.html',
    },
  ],
};
