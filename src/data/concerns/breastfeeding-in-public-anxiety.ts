import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'breastfeeding-in-public-anxiety',
  title: 'I Feel Anxious About Breastfeeding in Public',
  category: 'feeding',
  searchTerms: [
    'breastfeeding in public anxiety',
    'nervous nursing in public',
    'embarrassed breastfeeding',
    'breastfeeding cover anxiety',
    'nursing in public tips',
    'breastfeeding public rights',
    'scared to breastfeed outside home',
    'uncomfortable nursing in public',
    'breastfeeding public judgment',
    'nursing in public confidence',
  ],
  quickAnswer:
    'Feeling anxious about breastfeeding in public is extremely common, especially for new mothers. Know that breastfeeding in public is legally protected in all 50 US states. Many mothers find that practicing at home, using nursing-friendly clothing, and finding supportive community spaces helps build confidence. You have every right to feed your baby wherever you are.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Frequent feeding in the newborn period means you will likely need to feed outside the home. Practice at home in front of a mirror to see how little is actually visible. Two-shirt method (one up, one down) provides discreet coverage. Many mothers find their anxiety decreases significantly after the first few public nursing sessions.',
    },
    {
      ageRange: '4-6 months',
      context: 'By this age, you and baby have developed a nursing rhythm. Baby latches more efficiently, making public nursing faster and more discreet. Distracted nursing may start, which can feel more challenging in public. Finding a quieter corner or using a carrier to nurse can help.',
    },
    {
      ageRange: '6-9 months',
      context: 'Older babies may nurse less frequently, which reduces the need for public nursing. However, they also become more easily distracted, sometimes popping on and off the breast. If this causes anxiety, nursing in a quieter area or a baby carrier can provide more privacy.',
    },
    {
      ageRange: '9-12 months',
      context: 'Nursing sessions are often shorter at this age. Many babies nurse quickly and efficiently. If you still feel uncomfortable, some mothers pump and offer a bottle when out, though this is entirely a personal choice.',
    },
    {
      ageRange: '12-24 months',
      context: 'Some mothers feel more self-conscious about nursing a toddler in public. Know that the AAP and WHO support breastfeeding beyond 12 months. Your legal right to breastfeed in public applies regardless of your child\'s age.',
    },
  ],
  whenNormal: [
    'You feel nervous the first few times but grow more comfortable with practice',
    'You prefer using a cover or nursing-friendly clothing and that is your choice',
    'You feel more comfortable in certain environments than others',
  ],
  whenToMention: [
    'Anxiety about public nursing is causing you to avoid leaving the house',
    'You are feeling isolated or depressed because of fears about nursing in public',
    'Anxiety about breastfeeding is affecting your desire to continue nursing',
  ],
  whenToActNow: [
    'You are experiencing severe anxiety or panic attacks related to breastfeeding that affect your daily functioning',
    'You are feeling so isolated from avoiding public nursing that your mental health is significantly impacted',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['painful-breastfeeding', 'breastfeeding-working-mom-schedule', 'breastfeeding-grief-when-stopping'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/',
    },
    {
      org: 'NIH',
      citation: 'National Institutes of Health. Barriers to Breastfeeding in Public. Journal of Human Lactation, 2020.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
