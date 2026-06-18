import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'paternal-postpartum-depression',
  title: 'Postpartum Depression in Fathers and Partners',
  category: 'maternal',
  searchTerms: [
    'dad postpartum depression',
    'father depression after baby',
    'paternal postpartum depression',
    'new dad depressed',
    'partner depression after birth',
    'dad angry irritable after baby',
    'father PPD symptoms',
    'dad not bonding with baby',
    'new father anxiety depression',
    'dad withdrawing after baby born',
  ],
  quickAnswer:
    'Postpartum depression affects approximately 1 in 10 new fathers, yet it is almost never screened for or discussed. In dads, it often looks different than in mothers — presenting as anger, irritability, withdrawal, overworking, increased alcohol use, or risk-taking behavior rather than sadness. Paternal PPD is a real medical condition with effective treatments. You are not failing as a father — you need and deserve support.',
  byAge: [
    {
      ageRange: '0-3 months postpartum',
      context:
        'The first weeks after your baby arrives can be overwhelming. Testosterone levels naturally decrease during your partner\'s pregnancy and postpartum period, which can affect mood. You may feel invisible to the healthcare system (which focuses on the mother), helpless when you cannot soothe the baby, excluded from the breastfeeding relationship, and exhausted from disrupted sleep. If you are feeling persistently angry, withdrawn, or numb, these may be signs of paternal PPD.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'Paternal PPD often peaks during this period, sometimes triggered by return to work, ongoing sleep deprivation, and relationship strain. Common signs include: working excessive hours to avoid home, increased drinking, irritability or explosive anger at minor things, difficulty concentrating, loss of interest in activities you used to enjoy, and feeling disconnected from your baby or partner.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'If untreated, paternal PPD can persist and worsen. Research shows it is associated with increased suicide risk, negative effects on the partner\'s mental health, and impacts on father-infant bonding. The good news is that treatment works. Talk therapy (especially CBT), medication, peer support groups for fathers, and lifestyle changes (exercise, sleep, social connection) are all effective.',
    },
    {
      ageRange: '12 months+',
      context:
        'Paternal PPD can extend well beyond the first year if not addressed. It is never too late to seek help. If you recognize symptoms in yourself that started around the time of your child\'s birth, talk to your doctor. Many men find it helpful to start with their primary care physician, who can screen for depression and discuss treatment options.',
    },
  ],
  whenNormal: [
    'You feel tired, stressed, and occasionally overwhelmed by new parenthood — the adjustment period is genuinely difficult',
    'You occasionally feel frustrated or helpless when you cannot soothe the baby',
    'You miss aspects of your pre-baby life but are generally coping and engaged with your family',
    'You feel nervous about being a new dad but are learning and growing in the role',
  ],
  whenToMention: [
    'You feel persistently angry, irritable, or emotionally numb and it is not improving with time',
    'You are withdrawing from your partner and baby or dreading going home',
    'You are drinking more, working excessive hours, or engaging in risky behavior as an escape',
    'You are having difficulty concentrating at work or have lost interest in things you used to enjoy',
  ],
  whenToActNow: [
    'You are having thoughts of harming yourself — call 988 (Suicide and Crisis Lifeline) immediately',
    'You are afraid you might hurt your baby or partner — put the baby in a safe place and call the Postpartum Support International helpline at 1-800-944-4773 (press 1 for Spanish, press 2 for fathers)',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'postpartum-rage-anger',
    'relationship-strain-after-baby',
    'sleep-deprivation-effects-parent',
    'bonding-difficulty-with-baby',
  ],
  sources: [
    {
      org: 'PSI',
      citation:
        'Postpartum Support International. Depression in New Fathers.',
      url: 'https://www.postpartum.net/learn-more/depression-in-new-fathers/',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Paternal Postpartum Depression. JAMA Pediatrics, 2018.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/29799929/',
    },
    {
      org: 'MGH',
      citation:
        'Massachusetts General Hospital Center for Women\'s Mental Health. Postpartum Depression in Fathers.',
      url: 'https://womensmentalhealth.org/posts/postpartum-depression-in-fathers-lived-experience/',
    },
  ],
};
