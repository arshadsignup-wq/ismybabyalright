import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'rh-incompatibility-pregnancy',
  title: 'Rh Incompatibility in Pregnancy',
  category: 'medical',
  searchTerms: [
    'Rh incompatibility pregnancy',
    'Rh negative pregnant',
    'RhoGAM shot pregnancy',
    'Rh factor baby risk',
    'Rh sensitization pregnancy',
    'Rh negative mother Rh positive baby',
    'anti-D immunoglobulin pregnancy',
    'Rh disease newborn',
    'Rh antibodies pregnancy',
  ],
  quickAnswer:
    'Rh incompatibility occurs when a mother with Rh-negative blood carries a baby with Rh-positive blood. Without prevention, the mother\'s immune system can produce antibodies that attack the baby\'s red blood cells. The excellent news is that RhoGAM (Rh immunoglobulin) injections given during pregnancy and after delivery are nearly 99% effective at preventing this sensitization, making serious complications very rare.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Your blood type and Rh factor are tested at your first prenatal visit. If you are Rh-negative and the father is Rh-positive or unknown, your provider will plan for RhoGAM injections. If you have any bleeding, miscarriage, ectopic pregnancy, or amniocentesis during the first trimester, you will receive RhoGAM to prevent sensitization from any potential mixing of blood.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'A standard RhoGAM injection is given around 28 weeks to all Rh-negative mothers who have not been sensitized. Your provider will also check for Rh antibodies with a blood test (indirect Coombs test). If antibodies are detected, you will be monitored more closely with serial ultrasounds including middle cerebral artery Doppler studies to check for fetal anemia.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'If you received RhoGAM at 28 weeks and have no antibodies, your pregnancy continues with routine monitoring. If Rh sensitization has occurred, the baby will be monitored closely for signs of anemia through Doppler ultrasound. In severe cases, intrauterine blood transfusion may be needed. Delivery timing depends on the severity of any fetal anemia.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'After delivery, your baby\'s blood type will be tested from cord blood. If the baby is Rh-positive, you will receive another dose of RhoGAM within 72 hours of delivery. Babies affected by Rh disease may need phototherapy for jaundice or, in severe cases, exchange transfusion. With modern prevention, severe Rh disease is rare in developed countries.',
    },
  ],
  whenNormal: [
    'You are Rh-negative but your antibody screen is negative and you are receiving standard RhoGAM injections',
    'You received RhoGAM after a previous pregnancy and your current antibody screen remains negative',
    'Your partner has been tested and is also Rh-negative (the baby will be Rh-negative too, so no risk)',
    'Cell-free fetal DNA testing confirms the baby is Rh-negative',
  ],
  whenToMention: [
    'You are Rh-negative and experienced any bleeding, trauma, or invasive procedure during pregnancy and are unsure if you received RhoGAM',
    'You are unsure of your Rh status or have questions about your RhoGAM schedule',
    'You have a positive antibody screen and want to understand what it means for your baby',
  ],
  whenToActNow: [
    'You are Rh-negative with known antibodies and your baby shows signs of severe anemia on ultrasound (hydrops fetalis)',
    'Your newborn develops rapid jaundice, appears very pale, or becomes lethargic within the first 24 hours of life',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Prevention of Rh D Alloimmunization. ACOG Practice Bulletin No. 181, 2017.',
      url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2017/08/prevention-of-rh-d-alloimmunization',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Rh disease. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/complications/rh-disease.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Rh factor blood test. Mayo Clinic, 2023.',
      url: 'https://www.mayoclinic.org/tests-procedures/rh-factor/about/pac-20394960',
    },
  ],
};
