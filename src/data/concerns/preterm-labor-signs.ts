import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'preterm-labor-signs',
  title: 'Preterm Labor Signs',
  category: 'medical',
  searchTerms: [
    'preterm labor signs',
    'premature labor symptoms',
    'contractions before 37 weeks',
    'preterm birth warning signs',
    'early labor pregnancy',
    'Braxton Hicks vs real contractions',
    'back pain sign of preterm labor',
    'preterm labor risk',
    'water breaking early',
    'premature delivery signs',
  ],
  quickAnswer:
    'Preterm labor is labor that begins before 37 weeks of pregnancy and affects about 10% of pregnancies. Recognizing the signs early is critical because treatment can often delay delivery, giving the baby more time to develop. Signs include regular contractions, lower back pain, pelvic pressure, vaginal discharge changes, and fluid leaking. Contact your provider immediately if you suspect preterm labor.',
  byAge: [
    {
      ageRange: 'Before 24 weeks',
      context:
        'Labor signs before 24 weeks (the threshold of viability) are considered a medical emergency. Warning signs include regular cramping, lower back pain, pelvic pressure, vaginal bleeding, or fluid leaking. If you have risk factors such as prior preterm birth, multiple pregnancy, cervical insufficiency, or uterine abnormalities, your provider may implement preventive measures early in your pregnancy.',
    },
    {
      ageRange: '24-28 weeks',
      context:
        'Between 24-28 weeks, the baby is viable but extremely premature. If preterm labor is suspected, your provider will check your cervix and may perform a fetal fibronectin test. Treatment may include tocolytic medications to slow contractions, corticosteroids to accelerate fetal lung maturity, and magnesium sulfate for neuroprotection. Every additional day in the womb significantly improves outcomes.',
    },
    {
      ageRange: '28-34 weeks',
      context:
        'Preterm labor between 28-34 weeks is managed aggressively to prolong the pregnancy when safe. Corticosteroids are most effective when given at least 24 hours before delivery. Your provider will balance the risks of prematurity against the risks of continuing the pregnancy. Babies born in this window often do well with NICU support but benefit greatly from more time in the womb.',
    },
    {
      ageRange: '34-37 weeks',
      context:
        'Late preterm babies (34-37 weeks) generally do well but may still face challenges with feeding, temperature regulation, and jaundice. Your provider may or may not try to stop labor at this stage depending on the circumstances. Corticosteroids may be given if delivery is expected before 37 weeks. Many late preterm babies go home within a few days of birth.',
    },
  ],
  whenNormal: [
    'Braxton Hicks contractions that are irregular, infrequent, and stop with rest or hydration',
    'Occasional mild lower back discomfort or round ligament pain',
    'Normal increases in vaginal discharge during pregnancy that are not watery or bloody',
    'Mild pelvic pressure that comes and goes without a pattern',
  ],
  whenToMention: [
    'You are experiencing more than 4-6 contractions per hour before 37 weeks, even if they do not seem painful',
    'You have a persistent dull lower backache that is different from your usual pregnancy discomfort',
    'You notice increased vaginal discharge, mucus-like discharge, or slight pink or brown spotting',
  ],
  whenToActNow: [
    'You have regular, painful contractions that are getting closer together and do not stop with rest and hydration before 37 weeks',
    'You have a gush or steady trickle of fluid from your vagina (possible ruptured membranes) before 37 weeks, or vaginal bleeding',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Preterm Labor and Birth. ACOG FAQ, 2021.',
      url: 'https://www.acog.org/womens-health/faqs/preterm-labor-and-birth',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Preterm labor and premature birth. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/complications/preterm-labor-and-premature-birth.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Preterm labor - Symptoms and causes. Mayo Clinic, 2023.',
      url: 'https://www.mayoclinic.org/diseases-conditions/preterm-labor/symptoms-causes/syc-20376842',
    },
  ],
};
