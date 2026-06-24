import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postpartum-period-breastfeeding-return',
  title: 'When Will My Period Return While Breastfeeding',
  category: 'maternal',
  searchTerms: [
    'period return breastfeeding',
    'when will period come back breastfeeding',
    'first period after baby breastfeeding',
    'no period while breastfeeding',
    'period returned while breastfeeding',
    'breastfeeding and menstruation',
    'spotting while breastfeeding',
    'period affect milk supply',
    'does period reduce breast milk',
    'breastfeeding delay period how long',
  ],
  quickAnswer:
    'Breastfeeding can delay the return of your period for months or even over a year, depending on how frequently you nurse. Exclusive, on-demand breastfeeding suppresses ovulation through elevated prolactin levels. Most breastfeeding parents see their period return between six and eighteen months postpartum, often around the time solids are introduced or night feeds decrease. When your period does return, it may temporarily affect milk supply, but this is usually minor and short-lived.',
  byAge: [
    {
      ageRange: '0-6 months postpartum',
      context:
        'If you are exclusively breastfeeding on demand, including nighttime feeds, it is very common to have no period during this time. The frequent suckling stimulates prolactin production, which suppresses the hormonal signals for ovulation. Some people do get their period back even while exclusively breastfeeding, and this is also normal. Any bleeding in the first six to eight weeks should be evaluated to determine whether it is postpartum lochia or a true menstrual period.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'Many breastfeeding parents notice their period returning during this window, particularly as their baby starts eating solid foods, sleeping longer at night, or nursing less frequently. The first period may come with little warning and may be different from your pre-pregnancy periods. Some people notice a slight dip in milk supply around their period due to hormonal fluctuations. Calcium and magnesium supplements taken in the days before your period may help mitigate this supply dip.',
    },
    {
      ageRange: '12-18 months postpartum',
      context:
        'If you are still breastfeeding frequently, it is normal for your period to remain absent. However, if you have significantly reduced breastfeeding and your period has not returned, consider checking in with your provider. Once periods do return, they may be irregular for the first few cycles as your body adjusts. Your milk supply may fluctuate slightly with your cycle but should remain adequate for your baby\'s needs, especially if they are also eating solid foods.',
    },
    {
      ageRange: '18+ months postpartum',
      context:
        'Some individuals who continue to breastfeed frequently do not get their period back until they fully wean. This is a normal variation. However, if your period has not returned within three months of significantly reducing breastfeeding or weaning, consult your provider to rule out other causes such as thyroid dysfunction, elevated prolactin from other causes, or pregnancy. When your period does return after a long absence, the first cycle may be anovulatory.',
    },
  ],
  whenNormal: [
    'No period for many months while exclusively breastfeeding',
    'Period returning around the time you reduce breastfeeding frequency or introduce solids',
    'First few periods being irregular, heavier, or lighter than pre-pregnancy',
    'Slight temporary decrease in milk supply around your period',
  ],
  whenToMention: [
    'Your period has not returned within three months of weaning from breastfeeding',
    'You experience very heavy periods that soak through a pad every one to two hours',
    'You have spotting or bleeding between periods',
    'You notice a significant and persistent drop in milk supply around your period',
  ],
  whenToActNow: [
    'You have sudden very heavy bleeding with clots and feel dizzy or faint',
    'You suspect you may be pregnant (missed period after cycles had already returned) and experience severe abdominal pain',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'postpartum-menstruation-return-irregular',
    'postpartum-fertility-return-breastfeeding',
    'postpartum-thyroiditis-symptoms',
  ],
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Postpartum Birth Control. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/postpartum-birth-control',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Breastfeeding-and-the-Use-of-Human-Milk',
    },
    {
      org: 'NIH',
      citation:
        'Chao S. The Effect of Lactation on Ovulation and Fertility. Clinics in Perinatology, 1987.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/3100640/',
    },
  ],
};
