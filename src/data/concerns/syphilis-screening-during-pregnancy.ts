import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'syphilis-screening-during-pregnancy',
  title: 'Syphilis Screening During Pregnancy: Why It Matters',
  category: 'maternal',
  searchTerms: [
    'syphilis screening pregnancy',
    'syphilis test pregnant',
    'congenital syphilis prevention',
    'syphilis pregnancy risk baby',
    'STI testing pregnancy',
    'syphilis rates increasing pregnancy',
    'syphilis blood test pregnant',
    'congenital syphilis rising',
    'syphilis treatment pregnancy',
    'prenatal syphilis screening',
  ],
  quickAnswer:
    'Syphilis screening during pregnancy is critically important because congenital syphilis (transmitted from parent to baby) has increased dramatically in the US, rising over 900% from 2012 to 2022. Untreated syphilis during pregnancy can cause miscarriage, stillbirth, preterm birth, and serious complications in the newborn. The good news is that syphilis is completely treatable with penicillin, and treatment during pregnancy prevents transmission to the baby in almost all cases. All pregnant individuals should be screened, with repeat screening recommended in high-prevalence areas.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'All pregnant individuals should be screened for syphilis at the first prenatal visit, ideally in the first trimester. This is a standard part of prenatal care in the United States. The test is a simple blood draw. If the test is positive, treatment with penicillin should begin immediately. Early treatment (before the third trimester) is most effective at preventing transmission to the baby. If you are at higher risk (live in a high-prevalence area, have a new sexual partner, or have other STI risk factors), your provider may recommend additional screening later in pregnancy.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Many states now require repeat syphilis screening in the third trimester (around 28-32 weeks) and again at delivery, particularly in regions with high syphilis rates. New infections acquired during pregnancy are just as dangerous to the baby as pre-existing infections. If you are diagnosed with syphilis during pregnancy, your baby will need to be evaluated at birth and may require treatment. Treatment during pregnancy with penicillin is safe and highly effective. Partners should also be tested and treated to prevent reinfection.',
    },
    {
      ageRange: 'At delivery',
      context:
        'Some states require syphilis testing at delivery to catch cases that may have been missed or acquired late in pregnancy. If a pregnant person has untreated syphilis at delivery, the baby is at high risk for congenital syphilis, which can affect the bones, liver, skin, brain, and other organs. Newborns born to mothers with syphilis will receive blood tests and physical examination, and may require antibiotic treatment regardless of whether they show symptoms, because some signs of congenital syphilis do not appear until weeks or months later.',
    },
  ],
  whenNormal: [
    'Being screened for syphilis as part of routine prenatal blood work',
    'Being tested again in the third trimester in high-prevalence areas',
    'Your screening test is negative',
  ],
  whenToMention: [
    'You have questions about your syphilis screening results',
    'You have a new sexual partner during pregnancy or think you may have been exposed to an STI',
    'You were not screened for syphilis during prenatal care',
    'You or your partner have been diagnosed with syphilis and you have questions about treatment',
  ],
  whenToActNow: [
    'You have a positive syphilis test during pregnancy and have not yet received treatment',
    'You develop signs of syphilis during pregnancy: painless genital sore, body rash, or flu-like symptoms',
    'Your newborn has signs of congenital syphilis: rash, runny nose (snuffles), enlarged liver or spleen, or poor feeding',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'signs-of-labor-starting',
    'third-trimester-preeclampsia-warning-signs',
    'abnormal-prenatal-screening',
  ],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Congenital Syphilis. CDC, 2024.',
      url: 'https://www.cdc.gov/std/syphilis/stdfact-congenital-syphilis.htm',
    },
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Screening for Sexually Transmitted Infections in Pregnancy. ACOG, 2023.',
      url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2020/09/screening-for-stis',
    },
    {
      org: 'USPSTF',
      citation:
        'US Preventive Services Task Force. Screening for Syphilis Infection in Pregnant Women. JAMA, 2018.',
      url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/syphilis-infection-in-nonpregnant-adults-and-adolescents-screening',
    },
  ],
};
