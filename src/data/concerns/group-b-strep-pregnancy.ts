import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'group-b-strep-pregnancy',
  title: 'Group B Strep in Pregnancy',
  category: 'medical',
  searchTerms: [
    'group B strep pregnancy',
    'GBS positive pregnant',
    'group B streptococcus baby risk',
    'GBS test positive what now',
    'strep B pregnancy treatment',
    'GBS antibiotics during labor',
    'group B strep newborn infection',
    'GBS screening pregnancy',
    'strep B colonization pregnant',
  ],
  quickAnswer:
    'Group B Streptococcus (GBS) is a common bacterium found in about 25% of healthy women. Being GBS-positive is not an infection or STI - it simply means the bacteria are present in your body. With standard intravenous antibiotics given during labor, the risk of transmitting GBS to your baby drops from about 1 in 200 to about 1 in 4,000, making outcomes excellent.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'GBS screening is not typically done in the first trimester because colonization status can change throughout pregnancy. If you had a previous baby affected by GBS disease, your provider should be aware early so they can plan prophylactic antibiotics during labor regardless of your screening result later.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'GBS screening is not routinely performed in the second trimester either. However, if GBS is found incidentally in a urine culture at any point during pregnancy (GBS bacteriuria), you will automatically receive antibiotics during labor. GBS in urine indicates heavy colonization and does not need to be re-screened later.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Universal GBS screening is recommended between 36-37 weeks of pregnancy through a simple vaginal and rectal swab. Results are available within a few days. If you test positive, you will receive IV penicillin or an alternative antibiotic during labor, ideally at least 4 hours before delivery. This is the standard of care and is highly effective at preventing early-onset GBS disease in newborns.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'If you received appropriate antibiotics during labor, your baby will be observed for the standard period after birth. If antibiotics were not given or given less than 4 hours before delivery, your baby may be monitored more closely for 24-48 hours for signs of infection such as fever, poor feeding, irritability, or breathing difficulties. Early-onset GBS disease in newborns is treatable with antibiotics.',
    },
  ],
  whenNormal: [
    'You tested GBS-positive at 36-37 weeks - this is a common finding in healthy women',
    'You received antibiotics during labor and your baby shows no signs of infection after delivery',
    'You tested GBS-negative and your provider confirms no prophylaxis is needed',
    'You had GBS in a previous pregnancy but tested negative this time (colonization can vary between pregnancies)',
  ],
  whenToMention: [
    'You tested GBS-positive and are unsure about your labor antibiotic plan, especially if you have a penicillin allergy',
    'Your labor is progressing very quickly and you are concerned about receiving antibiotics in time',
    'You had a previous baby with GBS disease or a previous positive GBS urine culture',
  ],
  whenToActNow: [
    'Your newborn develops fever, poor feeding, extreme sleepiness, difficulty breathing, or irritability in the first week of life',
    'Your water breaks before 37 weeks and you know you are GBS-positive or your status is unknown',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Prevention of Group B Streptococcal Early-Onset Disease in Newborns. ACOG Committee Opinion No. 797, 2020.',
      url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2020/02/prevention-of-group-b-streptococcal-early-onset-disease-in-newborns',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Group B Strep (GBS). CDC, 2023.',
      url: 'https://www.cdc.gov/group-b-strep/about/index.html',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Group B strep infection. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/complications/group-b-strep-infection.aspx',
    },
  ],
};
