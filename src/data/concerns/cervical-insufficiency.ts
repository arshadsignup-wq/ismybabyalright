import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'cervical-insufficiency',
  title: 'Cervical Insufficiency',
  category: 'medical',
  searchTerms: [
    'cervical insufficiency',
    'incompetent cervix',
    'short cervix pregnancy',
    'cervical cerclage',
    'cervix dilating too early',
    'cervical length short pregnancy',
    'cervix opening second trimester',
    'cervical insufficiency symptoms',
    'cervix funneling pregnancy',
    'preterm cervical dilation',
  ],
  quickAnswer:
    'Cervical insufficiency (previously called incompetent cervix) occurs when the cervix begins to open too early in pregnancy, often without pain or contractions. It is a leading cause of second-trimester pregnancy loss but is treatable. With early detection through cervical length screening and interventions such as cerclage or progesterone, most women with cervical insufficiency carry their pregnancies to a viable gestational age.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Cervical insufficiency is typically not detectable in the first trimester. However, if you have risk factors such as a history of second-trimester loss, prior cervical surgery (LEEP, cone biopsy), or a connective tissue disorder, your provider should be informed early. A history-indicated cerclage may be placed around 12-14 weeks if you have had multiple prior losses due to cervical insufficiency.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'The second trimester is when cervical insufficiency most commonly becomes apparent, typically between 16-24 weeks. Transvaginal ultrasound to measure cervical length is the primary screening tool. A cervix shorter than 25mm before 24 weeks may warrant intervention. Treatments include vaginal progesterone, cervical pessary, or surgical cerclage. You may notice pelvic pressure, increased discharge, or spotting - report these promptly.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'If cervical insufficiency was managed with cerclage, the stitch is typically removed around 36-37 weeks to allow for normal labor. If you are on vaginal progesterone, it is usually discontinued around the same time. By the third trimester, the risk from cervical insufficiency is lower because the baby has reached viability. Your provider will continue to monitor for signs of preterm labor.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'After delivery, discuss your experience with your provider to plan for future pregnancies. If you had cervical insufficiency in one pregnancy, you are at higher risk in subsequent pregnancies. A proactive management plan including early cerclage or serial cervical length screening starting at 16 weeks is typically recommended for future pregnancies.',
    },
  ],
  whenNormal: [
    'Your cervical length is above 25mm on transvaginal ultrasound in the second trimester',
    'You had a LEEP or cone biopsy in the past but your cervix is measuring normally during pregnancy',
    'You have mild pelvic pressure that is intermittent and not worsening',
    'Your provider is monitoring your cervical length and has not recommended intervention',
  ],
  whenToMention: [
    'You have a history of second-trimester pregnancy loss or very preterm birth without a known cause',
    'You notice a significant increase in vaginal discharge, pelvic pressure, or mild spotting before 24 weeks',
    'You have had cervical surgery and want to discuss monitoring during your pregnancy',
  ],
  whenToActNow: [
    'You experience a sensation of something bulging in your vagina, or your membranes rupture before 37 weeks',
    'You have regular contractions, progressive pelvic pressure, or vaginal bleeding in the second trimester',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Cerclage for the Management of Cervical Insufficiency. ACOG Practice Bulletin No. 234, 2021.',
      url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2014/02/cerclage-for-the-management-of-cervical-insufficiency',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Cervical insufficiency and short cervix. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/complications/cervical-insufficiency-and-short-cervix.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Incompetent cervix - Symptoms and causes. Mayo Clinic, 2023.',
      url: 'https://www.mayoclinic.org/diseases-conditions/incompetent-cervix/symptoms-causes/syc-20373836',
    },
  ],
};
