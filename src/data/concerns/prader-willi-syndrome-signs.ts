import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'prader-willi-syndrome-signs',
  title: 'Prader-Willi Syndrome Signs in Babies',
  category: 'medical',
  searchTerms: [
    'prader willi syndrome baby',
    'baby floppy weak cry poor suck',
    'prader willi infant signs',
    'baby not feeding well floppy',
    'baby hypotonia failure to thrive',
    'prader willi newborn',
    'baby extremely low muscle tone',
    'baby weak suck and sleepy',
  ],
  quickAnswer:
    'Prader-Willi syndrome (PWS) is a rare genetic condition affecting about 1 in 10,000 to 30,000 people, caused by the loss of function of genes on chromosome 15. In infancy, it causes severe low muscle tone (hypotonia), weak cry, and feeding difficulties. Later in childhood, it shifts to insatiable appetite and obesity risk. With early intervention, growth hormone therapy, and dietary management, children with PWS can have improved outcomes.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The earliest signs of Prader-Willi syndrome are often apparent at birth: severe hypotonia (floppy baby), a weak or absent cry, poor suck reflex, and difficulty feeding. Many newborns with PWS require tube feeding because they cannot breastfeed or bottle-feed effectively. Babies may also have a distinctive appearance with almond-shaped eyes, a narrow forehead, and small hands and feet. Males may have undescended testes. Genetic testing (methylation analysis) confirms the diagnosis.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Feeding remains the primary challenge. Muscle tone gradually improves but remains low. Babies typically need high-calorie formulas or supplemental tube feeding to gain weight. Growth hormone therapy may be started as early as a few months of age, which helps improve muscle tone, growth, and body composition. Physical therapy and early intervention are essential components of care.',
    },
    {
      ageRange: '6-12 months',
      context:
        'With supportive care and therapy, babies with PWS begin to make developmental progress, though milestones are significantly delayed. Sitting independently may not occur until after 12 months. Feeding difficulties typically begin to improve during this period. The transition from poor feeding to the later characteristic excessive appetite has not yet occurred. Physical, occupational, and speech therapy all play important roles.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers with PWS continue to make developmental progress at their own pace. Walking typically occurs between 24 and 48 months. The shift toward increased appetite and food-seeking behavior usually begins between ages 2 and 8. Before this shift occurs, the focus remains on developmental support, growth hormone therapy, and building a strong early intervention team. Setting up structured eating habits early helps prepare for the later phases of the condition.',
    },
  ],
  whenNormal: [
    'Your baby with PWS is making gradual developmental progress with therapy support',
    'Your baby\'s feeding is slowly improving and weight gain is on track with nutritional support',
    'Your baby is on growth hormone therapy and showing improvements in muscle tone and growth',
    'Your baby is engaged socially and responsive to interaction despite motor delays',
  ],
  whenToMention: [
    'Your newborn has severe low muscle tone, a weak cry, and is unable to feed effectively',
    'Your baby has been diagnosed with PWS and you want to discuss growth hormone therapy timing',
    'Your baby with PWS is not making any developmental progress despite early intervention',
  ],
  whenToActNow: [
    'Your baby is unable to feed and is becoming dehydrated — this is especially urgent in the newborn period',
    'Your baby on growth hormone therapy develops symptoms of sleep apnea (pauses in breathing, snoring, gasping) — sleep studies should be performed before and during GH treatment',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Prader-Willi Syndrome. MedlinePlus Genetics, 2023.',
      url: 'https://medlineplus.gov/genetics/condition/prader-willi-syndrome/',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Prader-Willi Syndrome — Symptoms and Causes. Mayo Foundation for Medical Education and Research, 2023.',
      url: 'https://www.mayoclinic.org/diseases-conditions/prader-willi-syndrome/symptoms-causes/syc-20355997',
    },
  ],
};
