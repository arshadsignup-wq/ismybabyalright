import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'velamentous-cord-insertion',
  title: 'Velamentous Cord Insertion',
  category: 'medical',
  searchTerms: [
    'velamentous cord insertion',
    'umbilical cord insertion abnormal',
    'cord attached to membranes not placenta',
    'vasa previa risk',
    'velamentous insertion of umbilical cord',
    'abnormal cord attachment pregnancy',
    'marginal cord insertion',
    'unprotected cord vessels pregnancy',
    'VCI ultrasound finding',
  ],
  quickAnswer:
    'Velamentous cord insertion occurs when the umbilical cord inserts into the fetal membranes rather than directly into the placenta, leaving blood vessels unprotected for a short distance. It occurs in about 1-2% of singleton pregnancies and is more common with twins. With proper monitoring and delivery planning, most pregnancies with velamentous cord insertion have good outcomes.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Velamentous cord insertion is usually not detected in the first trimester. The placenta and cord are still developing, and detailed anatomical assessment occurs later. There is nothing you did or could have done differently to cause this condition - it is a random variation in how the placenta develops.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'This condition is most often identified during the detailed anatomy scan around 18-22 weeks using color Doppler ultrasound. If diagnosed, your provider will check for associated conditions such as vasa previa (where unprotected vessels cross the cervical opening) and may recommend additional monitoring. Many cases of velamentous cord insertion without vasa previa have uncomplicated pregnancies.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'During the third trimester, your provider will continue to monitor fetal growth and well-being. Velamentous cord insertion can sometimes be associated with fetal growth restriction, preterm birth, or abnormal fetal heart rate patterns during labor. If vasa previa is also present, a planned cesarean delivery before labor begins (usually around 34-37 weeks) is typically recommended to avoid life-threatening hemorrhage.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'After delivery, the placenta and membranes will be examined to confirm the diagnosis. Most babies born from pregnancies with velamentous cord insertion are healthy, especially when the condition was monitored during pregnancy. Your baby will receive standard newborn assessments, and in most cases no additional care is needed related to this condition.',
    },
  ],
  whenNormal: [
    'Velamentous cord insertion was identified on ultrasound but there is no vasa previa',
    'Your baby is growing normally on serial ultrasounds',
    'Fetal heart rate tracings are reassuring',
    'You have no signs of vaginal bleeding or preterm labor',
  ],
  whenToMention: [
    'You have been diagnosed with velamentous cord insertion and want to discuss your delivery plan',
    'You are experiencing decreased fetal movement compared to your normal pattern',
    'Your baby is measuring smaller than expected on growth ultrasounds',
  ],
  whenToActNow: [
    'You have any vaginal bleeding, especially painless bright red bleeding, which could indicate vasa previa rupture',
    'You experience sudden severe abdominal pain, significant vaginal bleeding, or your water breaks with blood-tinged fluid',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Vasa Previa. Committee Opinion No. 641, 2015.',
      url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2015/12/vasa-previa',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Velamentous cord insertion and perinatal outcomes. PubMed, 2019.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30932367/',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Umbilical cord conditions. Mayo Clinic, 2023.',
      url: 'https://www.mayoclinic.org/healthy-lifestyle/pregnancy-week-by-week/expert-answers/umbilical-cord/faq-20058319',
    },
  ],
};
