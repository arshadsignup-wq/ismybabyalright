import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'ectopic-pregnancy-warning-signs',
  title: 'Ectopic Pregnancy Warning Signs',
  category: 'medical',
  searchTerms: [
    'ectopic pregnancy',
    'ectopic pregnancy symptoms',
    'tubal pregnancy',
    'pregnancy outside uterus',
    'one-sided pain early pregnancy',
    'ectopic pregnancy signs',
    'sharp abdominal pain early pregnancy',
    'shoulder pain pregnant sign',
    'hCG not doubling ectopic',
    'ectopic pregnancy bleeding',
  ],
  quickAnswer:
    'An ectopic pregnancy occurs when a fertilized egg implants outside the uterus, most commonly in a fallopian tube. It affects about 1-2% of pregnancies and cannot develop into a viable pregnancy. Early detection is critical because a rupturing ectopic pregnancy can cause life-threatening internal bleeding. With timely diagnosis, treatment with medication or minimally invasive surgery is very effective, and most women go on to have healthy pregnancies afterward.',
  byAge: [
    {
      ageRange: 'Early weeks (4-6 weeks)',
      context:
        'In the earliest weeks of pregnancy, an ectopic pregnancy may not cause any symptoms beyond what feels like a normal early pregnancy. Warning signs to watch for include one-sided pelvic or abdominal pain, vaginal bleeding or spotting that is different from a normal period, and hCG levels that are not doubling appropriately. An ultrasound at 5-6 weeks can usually confirm whether the pregnancy is in the uterus.',
    },
    {
      ageRange: 'Early to mid first trimester (6-10 weeks)',
      context:
        'This is the most common time for ectopic pregnancy symptoms to become apparent. You may experience sharp, stabbing pain on one side of the pelvis or abdomen, vaginal bleeding, pain during intercourse, or dizziness. If an ectopic pregnancy is diagnosed early before rupture, treatment with methotrexate (a medication that stops cell growth) can often resolve it without surgery.',
    },
    {
      ageRange: 'Ruptured ectopic (emergency)',
      context:
        'A ruptured ectopic pregnancy is a medical emergency. Symptoms include sudden severe abdominal pain, shoulder tip pain (from internal bleeding irritating the diaphragm), dizziness, fainting, rapid heartbeat, and signs of shock. This requires emergency surgery. If you have any of these symptoms with a known or suspected pregnancy, call 911 immediately.',
    },
    {
      ageRange: 'After treatment and future pregnancies',
      context:
        'After ectopic pregnancy treatment, you will be monitored until your hCG levels reach zero. Recovery time varies depending on whether you received medication or surgery. Most women can try to conceive again after recovery, typically waiting 3 months after methotrexate or one menstrual cycle after surgery. Your risk of another ectopic pregnancy is slightly increased (about 10-15%), so early monitoring in future pregnancies is recommended.',
    },
  ],
  whenNormal: [
    'Mild cramping and light spotting in early pregnancy with confirmed intrauterine pregnancy on ultrasound',
    'hCG levels are rising appropriately (roughly doubling every 48-72 hours in early pregnancy)',
    'An ultrasound confirms a gestational sac inside the uterus',
    'Round ligament pain or mild stretching sensations with a confirmed normal pregnancy',
  ],
  whenToMention: [
    'You have one-sided pelvic pain that is persistent or worsening in early pregnancy',
    'Your hCG levels are not rising as expected (not doubling every 48-72 hours)',
    'You have risk factors such as prior ectopic pregnancy, history of pelvic inflammatory disease, IVF, or tubal surgery',
  ],
  whenToActNow: [
    'You have severe one-sided abdominal pain with vaginal bleeding and feel dizzy, faint, or lightheaded - call 911 immediately',
    'You experience sudden shoulder tip pain (pain at the very top of your shoulder) with abdominal pain, which can indicate internal bleeding from a ruptured ectopic pregnancy',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Ectopic Pregnancy. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/ectopic-pregnancy',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Ectopic pregnancy. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/complications/ectopic-pregnancy.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Ectopic pregnancy - Symptoms and causes. Mayo Clinic, 2023.',
      url: 'https://www.mayoclinic.org/diseases-conditions/ectopic-pregnancy/symptoms-causes/syc-20372088',
    },
  ],
};
