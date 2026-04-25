import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'colic-vs-gas',
  title: 'Is It Colic or Just Gas?',
  category: 'digestive',
  searchTerms: [
    'colic vs gas in babies',
    'how to tell if baby has colic or gas',
    'difference between colic and gas',
    'is my baby colicky or gassy',
    'colic symptoms vs gas symptoms',
    'baby crying inconsolably',
    'rule of threes colic',
    'when does colic start',
  ],
  quickAnswer: 'Gas causes temporary discomfort that improves when baby passes gas or poops, while colic involves intense, inconsolable crying for 3+ hours at a time, at least 3 days a week, often at the same time each day. Gas is extremely common; true colic affects about 1 in 5 babies and typically starts around 2-3 weeks and resolves by 3-4 months.',
  byAge: [
    {
      ageRange: '0-2 weeks',
      context: 'In the first two weeks, most fussiness is related to gas, hunger, or normal newborn adjustment. True colic typically hasn\'t started yet. If your newborn seems gassy, focus on feeding position, proper latching (if breastfeeding), and burping technique. Some fussiness in the evening is normal for all babies.',
    },
    {
      ageRange: '2-6 weeks',
      context: 'This is when colic typically begins if it\'s going to happen. You\'ll notice a pattern: intense crying episodes that start around the same time each day (often late afternoon or evening), lasting for hours. The "Rule of Threes" helps distinguish colic: crying for 3+ hours, at least 3 days per week. Gas-related fussiness is more sporadic and shorter.',
    },
    {
      ageRange: '6-12 weeks',
      context: 'If it\'s colic, this is often the peak period. The crying can be extremely intense and difficult to soothe. With gas, baby usually calms after passing gas or with comfort measures. Colicky babies may pull legs up, arch their back, clench fists, and have a red face, but these signs can happen with gas too. The duration and intensity are the key differences.',
    },
    {
      ageRange: '3-4 months',
      context: 'Colic typically resolves on its own around this age, often improving suddenly. If "colic" continues past 4 months, it may actually be something else like reflux, food sensitivity, or gas. Talk to your pediatrician about persistent fussiness beyond this age.',
    },
  ],
  whenNormal: [
    'Fussiness that comes and goes, related to gas or hunger',
    'Crying that stops when baby is picked up, fed, or passes gas',
    'Baby is easily comforted with movement, white noise, or pacifier',
    'Fussy periods that vary in timing and duration from day to day',
    'Baby has plenty of calm, happy periods throughout the day',
  ],
  whenToMention: [
    'Crying episodes that follow the "Rule of Threes" pattern',
    'You\'re feeling overwhelmed or exhausted by the crying',
    'Baby seems to have pain that common comfort measures don\'t help',
    'You want to rule out other causes like reflux or food sensitivities',
  ],
  whenToActNow: [
    'Baby has a fever along with inconsolable crying',
    'Crying is accompanied by vomiting, bloody stool, or severe diarrhea',
    'Baby seems weak, lethargic, or won\'t wake to feed',
    'You feel like you might hurt your baby due to frustration or exhaustion',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'American Academy of Pediatrics',
      citation: 'Colic: What Parents Need to Know About Infant Crying (2024)',
      url: 'https://www.aap.org',
    },
    {
      org: 'Mayo Clinic',
      citation: 'Colic: Diagnosis, Symptoms, and When It Ends (2024)',
      url: 'https://www.mayoclinic.org',
    },
    {
      org: 'National Institute of Child Health and Human Development',
      citation: 'Understanding Colic and the Period of PURPLE Crying (2024)',
      url: 'https://www.nichd.nih.gov',
    },
  ],
};
