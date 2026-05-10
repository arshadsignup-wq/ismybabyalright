import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'cholestasis-of-pregnancy',
  title: 'Cholestasis of Pregnancy',
  category: 'medical',
  searchTerms: [
    'cholestasis of pregnancy',
    'itchy hands feet pregnancy',
    'intrahepatic cholestasis',
    'ICP pregnancy',
    'severe itching pregnancy third trimester',
    'bile acid levels pregnancy',
    'cholestasis pregnancy risk to baby',
    'itching all over pregnant',
    'obstetric cholestasis',
    'pregnancy liver itching',
  ],
  quickAnswer:
    'Intrahepatic cholestasis of pregnancy (ICP) is a liver condition that causes intense itching, usually in the third trimester, due to a buildup of bile acids in the blood. It affects about 1-2% of pregnancies. While the itching is very uncomfortable, ICP is treatable with medication, and with close monitoring and planned early delivery (usually around 36-37 weeks), outcomes for both mother and baby are generally very good.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Cholestasis of pregnancy rarely develops in the first trimester. Itching at this stage is more likely from hormonal skin changes, dry skin, or stretching. However, if you had ICP in a previous pregnancy, inform your provider early because you have a 60-90% chance of it recurring. Early awareness allows for timely bile acid monitoring later.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'ICP occasionally develops in the late second trimester. The hallmark symptom is intense itching, especially on the palms of the hands and soles of the feet, that typically worsens at night. There is usually no visible rash. If you experience this pattern of itching, your provider will order bile acid and liver function tests. Earlier onset may require more intensive monitoring.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Most cases of ICP develop in the third trimester. Elevated bile acid levels (above 10 micromol/L) confirm the diagnosis. Treatment with ursodeoxycholic acid (UDCA) can reduce itching and lower bile acid levels. Your provider will monitor bile acids regularly and plan for delivery around 36-37 weeks, as ICP is associated with a small but increased risk of stillbirth after 37 weeks if left untreated.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'ICP symptoms typically resolve within days to weeks after delivery as bile acid levels normalize. Your provider may recheck your liver function to confirm resolution. ICP does not cause long-term liver damage. Babies born from ICP pregnancies are usually healthy, especially with managed early delivery, though they may be monitored briefly for any effects of prematurity.',
    },
  ],
  whenNormal: [
    'Mild itching during pregnancy from stretching skin, especially on the belly (this is common and not ICP)',
    'Itching with a visible rash (more likely eczema, PUPPP, or another skin condition rather than ICP)',
    'Your bile acid levels have been tested and are normal',
    'Occasional mild itching on hands or feet that does not worsen progressively',
  ],
  whenToMention: [
    'You have intense itching on your palms, soles, or all over your body without a visible rash, especially if it worsens at night',
    'You had ICP in a previous pregnancy and want to discuss monitoring for this pregnancy',
    'You notice dark urine, pale stools, or mild jaundice (yellowing of eyes or skin) along with itching',
  ],
  whenToActNow: [
    'You have been diagnosed with ICP and notice a sudden decrease or absence of fetal movement',
    'You develop severe jaundice, upper right abdominal pain, nausea, or vomiting alongside intense itching, which may indicate a more serious liver condition',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Intrahepatic Cholestasis of Pregnancy. ACOG Clinical, 2022.',
      url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2021/02/intrahepatic-cholestasis-of-pregnancy',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Cholestasis of pregnancy. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/complications/cholestasis-of-pregnancy.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Cholestasis of pregnancy - Symptoms and causes. Mayo Clinic, 2023.',
      url: 'https://www.mayoclinic.org/diseases-conditions/cholestasis-of-pregnancy/symptoms-causes/syc-20363257',
    },
  ],
};
