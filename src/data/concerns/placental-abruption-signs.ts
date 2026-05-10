import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'placental-abruption-signs',
  title: 'Placental Abruption',
  category: 'medical',
  searchTerms: [
    'placental abruption',
    'placenta separating from uterus',
    'bleeding and abdominal pain pregnancy',
    'placental abruption signs',
    'dark blood pregnancy third trimester',
    'uterus feels hard and painful',
    'placental abruption risk factors',
    'abruption of placenta',
    'placenta detaching early',
  ],
  quickAnswer:
    'Placental abruption occurs when the placenta separates from the uterine wall before delivery, which can reduce the baby\'s oxygen and nutrient supply. It affects about 1% of pregnancies and ranges from mild (small separation with little impact) to severe (large separation requiring emergency delivery). Prompt recognition and medical care are critical for the best outcomes.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'True placental abruption is very rare in the first trimester. Bleeding at this stage is more commonly from subchorionic hematomas or other causes. However, risk factors for later abruption include smoking, cocaine use, chronic hypertension, prior abruption, abdominal trauma, and advanced maternal age. Avoiding controllable risk factors early helps reduce risk later.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'Abruption can occur in the second trimester, though it is more common later in pregnancy. Signs include vaginal bleeding (which may be dark or bright red), abdominal pain or tenderness, uterine contractions, and back pain. Even without visible bleeding, the uterus may feel rigid and tender. Any combination of these symptoms warrants immediate medical evaluation.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Most placental abruptions occur in the third trimester or during labor. The severity varies widely. A small or marginal abruption may be managed conservatively with close monitoring and bed rest if the baby is premature and both mother and baby are stable. A severe abruption with significant bleeding or fetal distress typically requires emergency delivery, often by cesarean section.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'After delivery complicated by abruption, the mother may be at higher risk for postpartum hemorrhage and may need additional monitoring. Babies born after significant abruption may need NICU care depending on the severity and gestational age at delivery. In future pregnancies, your risk of abruption is higher, and your provider will monitor you more closely.',
    },
  ],
  whenNormal: [
    'Light spotting after intercourse or a vaginal exam without abdominal pain (often from the cervix, not abruption)',
    'Mild Braxton Hicks contractions without any bleeding or persistent pain',
    'A small subchorionic hematoma identified on ultrasound that your provider is monitoring',
    'Minor round ligament pain or stretching sensations in the abdomen',
  ],
  whenToMention: [
    'You have had a previous placental abruption and want to discuss monitoring for your current pregnancy',
    'You experienced abdominal trauma such as a fall or car accident, even if you feel fine',
    'You notice any new vaginal spotting or bleeding in the second or third trimester',
  ],
  whenToActNow: [
    'You have vaginal bleeding with constant abdominal pain, uterine tenderness, or a rigid-feeling abdomen',
    'You experience heavy vaginal bleeding, feel lightheaded or faint, or notice a sudden decrease in fetal movement',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Placental Abruption. ACOG FAQ, 2021.',
      url: 'https://www.acog.org/womens-health/faqs/bleeding-during-pregnancy',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Placental abruption. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/complications/placental-abruption.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Placental abruption - Symptoms and causes. Mayo Clinic, 2023.',
      url: 'https://www.mayoclinic.org/diseases-conditions/placental-abruption/symptoms-causes/syc-20376757',
    },
  ],
};
