import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'polyhydramnios-excess-amniotic-fluid',
  title: 'Polyhydramnios (Excess Amniotic Fluid)',
  category: 'medical',
  searchTerms: [
    'too much amniotic fluid',
    'polyhydramnios',
    'excess amniotic fluid pregnancy',
    'high AFI pregnancy',
    'amniotic fluid too high',
    'polyhydramnios causes',
    'belly too big pregnancy amniotic fluid',
    'measuring big amniotic fluid',
    'polyhydramnios risk to baby',
  ],
  quickAnswer:
    'Polyhydramnios means there is more amniotic fluid than normal around your baby. Mild polyhydramnios is common, affecting about 1-2% of pregnancies, and often resolves on its own or has no identifiable cause. In most mild cases, the baby is perfectly healthy. Moderate to severe cases require closer monitoring to identify any underlying causes and plan for a safe delivery.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Polyhydramnios is almost never diagnosed in the first trimester because amniotic fluid volume is still relatively small. The amount of fluid is not routinely measured at this stage. If you are at higher risk due to gestational diabetes or other conditions, your provider will begin monitoring fluid levels as the pregnancy progresses.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'Excess amniotic fluid may first be noticed during the anatomy scan around 18-22 weeks. At this stage, your provider may investigate potential causes such as fetal swallowing problems, GI tract anomalies, fetal anemia, or twin-to-twin transfusion syndrome in twin pregnancies. Gestational diabetes screening will also be prioritized. Mild polyhydramnios at this stage often stabilizes.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Polyhydramnios is most commonly diagnosed in the third trimester. You may notice rapid uterine growth, shortness of breath, or difficulty getting comfortable. Your provider will monitor you for preterm labor risk, as excessive fluid can overdistend the uterus. In severe cases, amnioreduction (draining some fluid) may be considered. Delivery planning will account for the risk of cord prolapse if the membranes rupture.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'After delivery, your provider will monitor for postpartum hemorrhage, which is slightly more common after polyhydramnios due to uterine overdistension. Your baby will be evaluated for any underlying conditions that may have contributed to the excess fluid, such as GI or swallowing issues. Most babies born after mild polyhydramnios are healthy.',
    },
  ],
  whenNormal: [
    'You have mild polyhydramnios (AFI 25-30 cm) with no identified cause and a healthy-appearing baby',
    'Your gestational diabetes screen is normal and your baby\'s anatomy appears normal on ultrasound',
    'The excess fluid is stable or improving on serial ultrasounds',
    'Your baby is active and has normal growth patterns',
  ],
  whenToMention: [
    'You are measuring significantly larger than expected for your gestational age',
    'You experience sudden rapid abdominal growth, increasing shortness of breath, or difficulty breathing when lying down',
    'You have been diagnosed with polyhydramnios and want to discuss causes and your delivery plan',
  ],
  whenToActNow: [
    'Your water breaks and you feel something in your vagina (possible cord prolapse) - call 911 and get on your hands and knees immediately',
    'You experience severe shortness of breath that prevents you from completing sentences, or contractions that are becoming regular before 37 weeks',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Polyhydramnios. ACOG Practice Bulletin, 2022.',
      url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2022/02/assessment-of-amniotic-fluid-volume',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Polyhydramnios. MedlinePlus, 2023.',
      url: 'https://medlineplus.gov/ency/article/003267.htm',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Polyhydramnios. Mayo Clinic, 2023.',
      url: 'https://www.mayoclinic.org/diseases-conditions/polyhydramnios/symptoms-causes/syc-20368493',
    },
  ],
};
