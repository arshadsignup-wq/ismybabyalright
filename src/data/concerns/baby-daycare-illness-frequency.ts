import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-daycare-illness-frequency',
  title: 'Why Does My Baby Keep Getting Sick at Daycare?',
  category: 'medical',
  searchTerms: ['baby sick from daycare', 'toddler always sick daycare', 'baby daycare illness', 'toddler keeps getting colds', 'baby sick every week daycare', 'daycare germs baby', 'toddler daycare infections', 'baby immune system daycare', 'baby constantly sick daycare', 'toddler sick all the time'],
  quickAnswer: 'It is completely normal for babies and toddlers in daycare to get 8-12 viral illnesses per year, and it can feel like they are sick constantly. This happens because young children have immature immune systems and are being exposed to many viruses for the first time. Each cold builds immunity, and studies show that children who attend daycare early have fewer illnesses when they start school (the illness burden shifts - you get them at daycare age or school age, but either way the total exposure is similar). While the frequency of illness is normal, it can be exhausting for families.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies in daycare may start getting sick frequently around 6 months, when maternal antibodies begin to wane. A baby getting a cold every 2-3 weeks with brief recoveries in between is typical for daycare-attending infants. Each cold lasts 7-10 days, and with a new virus every 2-3 weeks, it can feel like your baby is always sick. This is not a sign of immune deficiency - it is a normal immune system encountering viruses for the first time. Breastfeeding (if possible) provides some additional immune protection. Ensure your baby is up to date on vaccines.' },
    { ageRange: '1-3 years', context: 'Toddlers in daycare are typically at their peak for frequency of illness. Common daycare illnesses include: upper respiratory infections (colds), ear infections, stomach bugs, hand foot and mouth disease, pink eye, and croup. Most resolve within 7-14 days. The good news: research shows this early immune exposure means fewer illnesses in kindergarten and elementary school. To reduce (but not eliminate) illness: teach hand washing, ensure vaccines are current, keep your child home when actively febrile, ensure adequate sleep, and maintain good nutrition. If your child has more than 8 ear infections per year or 2+ pneumonias, discuss with your pediatrician.' },
  ],
  whenNormal: ['8-12 colds per year in a daycare-attending child', 'A new cold starting before the last one fully resolved', 'Runny nose that seems to last all winter', 'Occasional ear infections or stomach bugs from daycare'],
  whenToMention: ['Your child is getting more than 12 illnesses per year', 'Illnesses seem more severe than typical colds (high fevers, hospitalizations)', 'Your child has had more than 4 ear infections in 6 months or 8 in a year', 'Recurring pneumonia (2 or more times)', 'You are exhausted and need support managing the illness cycle'],
  whenToActNow: ['Your child has a fever and appears seriously ill (not just the usual cold fussiness)', 'You notice your child is not recovering between illnesses and is losing weight', 'Signs of a more serious infection: difficulty breathing, persistent high fever, lethargy', 'Concern about an immune deficiency: frequent serious infections, poor growth, delayed healing'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-first-cold', 'baby-hand-foot-mouth-contagious-period', 'baby-regression-after-starting-daycare', 'ear-infection'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Germs in Daycare. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/work-and-child-care/Pages/Germs-in-the-Daycare-Setting.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Frequent Infections in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Daycare Attendance and Respiratory Infections.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
