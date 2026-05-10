import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'subchorionic-hematoma',
  title: 'Subchorionic Hematoma',
  category: 'medical',
  searchTerms: [
    'subchorionic hematoma',
    'subchorionic hemorrhage pregnancy',
    'bleeding behind placenta',
    'blood clot near placenta',
    'SCH pregnancy',
    'first trimester bleeding ultrasound',
    'subchorionic hematoma resolve',
    'bleeding early pregnancy clot ultrasound',
    'subchorionic bleed pregnancy safe',
  ],
  quickAnswer:
    'A subchorionic hematoma (SCH) is a collection of blood between the uterine wall and the chorion (the outer membrane surrounding the embryo). It is the most common cause of first-trimester bleeding and is found in about 1-3% of pregnancies. Most subchorionic hematomas are small, cause no problems, and resolve on their own. The majority of pregnancies with SCH result in healthy babies.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'This is when subchorionic hematomas are most commonly discovered, often incidentally on ultrasound or after an episode of vaginal bleeding. The bleeding can range from brown spotting (old blood being reabsorbed) to bright red bleeding. Your provider will confirm the pregnancy is viable with a heartbeat and monitor the size of the hematoma. Most small SCHs resolve by the end of the first trimester.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'Many subchorionic hematomas discovered in the first trimester have resolved by the second trimester. If one persists or is large, your provider may recommend activity modification and follow-up ultrasounds. A persistent large hematoma (especially one larger than the gestational sac) may be associated with a slightly increased risk of miscarriage, preterm delivery, or placental abruption, so closer monitoring is warranted.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'It is uncommon for a subchorionic hematoma to persist into the third trimester. If it does, your provider will monitor for any impact on placental function and fetal growth. Most women whose SCH resolves earlier have no ongoing complications. Persistent bleeding in the third trimester should be evaluated to rule out other causes such as placenta previa or placental abruption.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'Subchorionic hematomas do not typically affect postpartum recovery. If the hematoma resolved during pregnancy, no additional monitoring is needed. If it was large or associated with complications, your provider may examine the placenta after delivery to better understand what happened. A history of SCH does not significantly increase risk in future pregnancies.',
    },
  ],
  whenNormal: [
    'A small subchorionic hematoma found incidentally on ultrasound with no bleeding or only light spotting',
    'Brown vaginal discharge (indicating old blood being reabsorbed) with a healthy heartbeat on ultrasound',
    'Your provider reports the hematoma is shrinking or stable on follow-up ultrasound',
    'A brief episode of bleeding that stops, with normal ultrasound findings',
  ],
  whenToMention: [
    'You are having recurring episodes of vaginal bleeding, even if they are light',
    'Your subchorionic hematoma is described as large or growing on follow-up ultrasound',
    'You are experiencing cramping along with vaginal bleeding',
  ],
  whenToActNow: [
    'You are soaking through a pad in an hour with bright red blood, passing large clots, or experiencing severe cramping',
    'You feel lightheaded, dizzy, or faint along with vaginal bleeding',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Bleeding During Pregnancy. ACOG FAQ, 2021.',
      url: 'https://www.acog.org/womens-health/faqs/bleeding-during-pregnancy',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Subchorionic hematoma and pregnancy outcomes. PubMed, 2020.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/31960449/',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Bleeding during pregnancy. Mayo Clinic, 2023.',
      url: 'https://www.mayoclinic.org/symptoms/vaginal-bleeding/basics/causes/sym-20050756',
    },
  ],
};
