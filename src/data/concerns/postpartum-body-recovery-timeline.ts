import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postpartum-body-recovery-timeline',
  title: 'Postpartum Body Recovery - A Realistic Timeline',
  category: 'maternal',
  searchTerms: [
    'postpartum body recovery timeline',
    'body after baby timeline',
    'how long to recover after giving birth',
    'postpartum recovery what to expect',
    'body changes after pregnancy permanent',
    'uterus shrinking after birth',
    'postpartum hair loss timeline',
    'postpartum body changes',
    'when does body go back to normal after baby',
    'postpartum healing timeline',
    'recovery after vaginal delivery',
  ],
  quickAnswer:
    'Full recovery from pregnancy and delivery takes much longer than most women are told. While the uterus returns to near pre-pregnancy size by 6 weeks, musculoskeletal, hormonal, and neurological recovery can take 1-2 years or longer. Research suggests the body needs a minimum of 18-24 months to fully recover from pregnancy. Common experiences include: postpartum hair loss peaking at 3-4 months, core and pelvic floor recovery taking 6-12 months, hormonal fluctuations lasting 12+ months, and permanent body changes (wider ribcage, changed foot size) that are normal.',
  byAge: [
    {
      ageRange: 'Baby 0-6 weeks',
      context:
        'The immediate postpartum period involves uterine involution (the uterus shrinking from the size of a watermelon to a pear), lochia (postpartum bleeding lasting 4-6 weeks), perineal healing (if there were tears or an episiotomy), and initial hormonal shifts. The dramatic drop in estrogen and progesterone after delivery can cause mood swings, night sweats, and hot flashes. C-section incisions take about 6 weeks to heal externally, though internal healing takes longer. Your 6-week postpartum visit should include assessment of your physical and emotional recovery, but it is not a finish line; recovery continues well beyond this point.',
    },
    {
      ageRange: 'Baby 6 weeks - 6 months',
      context:
        'Many women are surprised that they do not feel "back to normal" at 6 weeks. Postpartum hair loss typically begins around 3-4 months and can be alarming but is temporary. Core and pelvic floor muscles take months to rebuild. Many women experience urinary stress incontinence (leaking with coughing, sneezing, or jumping) which usually improves with pelvic floor exercises but should be addressed with physical therapy if persistent. Joint laxity from relaxin hormone may persist for months, increasing susceptibility to injuries. If breastfeeding, hormonal levels remain altered, which can affect mood, libido, vaginal dryness, and metabolism.',
    },
    {
      ageRange: 'Baby 6-24 months and beyond',
      context:
        'Some body changes are permanent and normal: a wider ribcage (ribs expand during pregnancy and may not fully return), changed shoe size (often half a size larger due to ligament changes and weight-bearing), stretch marks that fade but do not disappear, and abdominal skin laxity. Thyroid function may fluctuate for 12+ months postpartum. Hair typically regrows by 12 months. If you are still experiencing significant symptoms (pelvic pain, incontinence, prolapse, fatigue, mood changes) beyond 12 months, seek evaluation rather than accepting them as "just how it is." Many postpartum conditions are treatable but underdiagnosed.',
    },
  ],
  whenNormal: [
    'Your recovery is gradual and steady, even if slower than expected or depicted in media.',
    'You experience postpartum hair loss between 3-6 months that gradually improves.',
    'Your body has some permanent changes (wider hips, stretch marks, changed shoe size) but you are physically functional.',
  ],
  whenToMention: [
    'You are concerned that your recovery is slower than expected or have specific symptoms that are not improving.',
    'You have persistent urinary incontinence, pelvic pressure, or pain during intercourse beyond 3 months postpartum.',
    'You want a referral for pelvic floor physical therapy assessment.',
    'You are experiencing significant hair loss, fatigue, or mood changes and want to rule out thyroid dysfunction.',
  ],
  whenToActNow: [
    'You are having severe postpartum bleeding, fever, or signs of infection at any point in recovery.',
    'You are experiencing symptoms of pelvic organ prolapse (feeling of something falling out, visible bulge at the vaginal opening).',
    'You have symptoms of postpartum thyroiditis or other condition causing rapid weight changes, severe fatigue, or significant mood disturbance.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'postpartum-abdominal-separation-check',
    'postpartum-back-pain-causes',
    'postpartum-bleeding-how-long',
    'losing-baby-weight-safely',
  ],
  sources: [
    {
      org: 'ACOG',
      citation:
        'ACOG Committee Opinion No. 736: Optimizing Postpartum Care, 2018.',
      url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/05/optimizing-postpartum-care',
    },
    {
      org: 'NIH',
      citation:
        'NIH - Recovery After Childbirth: A Comprehensive Review. Obstetrical & Gynecological Survey, 2020.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/33105388/',
    },
    {
      org: 'WHO',
      citation:
        'WHO. Postnatal Care of the Mother and Newborn, 2013.',
      url: 'https://www.who.int/publications/i/item/9789241506649',
    },
  ],
};
