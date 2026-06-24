import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'congenital-syphilis-rising-rates',
  title: 'Congenital Syphilis: Understanding the Rising Rates',
  category: 'medical',
  searchTerms: [
    'congenital syphilis baby',
    'syphilis in newborn',
    'congenital syphilis rising',
    'syphilis testing pregnancy',
    'congenital syphilis symptoms baby',
    'syphilis and pregnancy risk',
    'congenital syphilis prevention',
    'syphilis screening pregnancy',
    'newborn syphilis treatment',
    'congenital syphilis rates increasing',
  ],
  quickAnswer:
    'Congenital syphilis, transmitted from mother to baby during pregnancy, has been rising alarmingly in recent years. The CDC reported a tenfold increase in US cases between 2012 and 2022. Congenital syphilis is almost entirely preventable with early prenatal screening and penicillin treatment during pregnancy. Untreated syphilis can cause miscarriage, stillbirth, and severe complications in newborns including bone abnormalities, liver disease, and neurological damage. Screening in pregnancy is essential.',
  byAge: [
    {
      ageRange: 'Prenatal',
      context:
        'All pregnant individuals should be screened for syphilis at the first prenatal visit. The CDC now recommends additional screening at 28 weeks and at delivery for those at higher risk or in areas with high syphilis rates. If syphilis is detected, treatment with penicillin during pregnancy can prevent transmission to the baby in most cases. Treatment is most effective when given at least 30 days before delivery. Pregnant individuals with penicillin allergy should be desensitized and treated with penicillin, as no alternative is adequate for preventing congenital syphilis.',
    },
    {
      ageRange: '0-1 month',
      context:
        'Congenital syphilis in newborns may present with a range of symptoms or may be asymptomatic at birth. Early signs can include rash (especially on palms and soles), nasal discharge (snuffles), hepatosplenomegaly (enlarged liver and spleen), jaundice, anemia, and low birth weight. Some affected newborns appear healthy and develop symptoms weeks to months later. All newborns born to mothers with syphilis require evaluation, testing, and potentially treatment with intravenous penicillin.',
    },
    {
      ageRange: '1-24 months',
      context:
        'Late signs of untreated congenital syphilis can emerge during infancy and include bone changes (periostitis, osteochondritis), failure to thrive, persistent rash, and neurological symptoms. Developmental delays and hearing loss may develop. Infants who received appropriate treatment at birth generally have excellent outcomes. Those diagnosed later may require extended treatment and monitoring. Regular follow-up with repeat blood tests is essential to confirm successful treatment.',
    },
  ],
  whenNormal: [
    'You were screened for syphilis during pregnancy and your results were negative.',
    'Your baby was born to a mother treated adequately for syphilis during pregnancy and the baby\'s evaluation was normal.',
    'Your newborn\'s syphilis blood tests are being monitored and show expected decline after maternal treatment.',
  ],
  whenToMention: [
    'You are pregnant and unsure whether you have been screened for syphilis.',
    'You are at higher risk for syphilis (new or multiple sexual partners, STI history) and want to ensure adequate screening.',
    'Your newborn has an unexplained rash, persistent nasal discharge, or jaundice and you have risk factors for syphilis.',
  ],
  whenToActNow: [
    'You received a positive syphilis test during pregnancy and have not yet been treated.',
    'Your newborn was born to an inadequately treated mother and needs immediate evaluation and possible treatment.',
    'Your baby has symptoms consistent with congenital syphilis: rash on palms and soles, bloody nasal discharge, bone tenderness, or liver enlargement.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['childhood-immunization-schedule-2026-changes', 'delayed-onset-hearing-loss-children', 'developmental-delay-early-intervention-importance'],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Congenital Syphilis. CDC, 2024.',
      url: 'https://www.cdc.gov/std/syphilis/stdfact-congenital-syphilis.htm',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Syphilis. Red Book, 2024.',
      url: 'https://redbook.solutions.aap.org/chapter.aspx?sectionid=189640188',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Eliminating Congenital Syphilis. WHO.',
      url: 'https://www.who.int/reproductivehealth/topics/rtis/cs_global_strategy/en/',
    },
  ],
};
