import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'omphalocele-baby',
  title: 'My Baby Has an Omphalocele',
  category: 'medical',
  searchTerms: [
    'baby omphalocele',
    'omphalocele diagnosis',
    'omphalocele vs gastroschisis',
    'organs in umbilical cord baby',
    'omphalocele surgery',
    'omphalocele prenatal ultrasound',
    'abdominal wall defect newborn',
    'omphalocele treatment',
    'omphalocele outcomes',
    'giant omphalocele',
  ],
  quickAnswer:
    'An omphalocele is a birth defect where abdominal organs (intestines, liver, or other organs) protrude into the base of the umbilical cord, covered by a thin membrane. It differs from gastroschisis in that the organs are covered by a protective sac and the defect is located at the umbilicus. Omphalocele is associated with chromosomal abnormalities and cardiac defects in up to 50% of cases, so thorough genetic testing and cardiac evaluation are recommended. Small omphaloceles are repaired surgically soon after birth, while giant omphaloceles may require staged repair.',
  byAge: [
    {
      ageRange: 'Prenatal',
      context:
        'Omphalocele is typically detected on prenatal ultrasound during the anatomy scan at 18-20 weeks. Because of the strong association with chromosomal abnormalities (such as trisomy 13, 18, or 21) and Beckwith-Wiedemann syndrome, amniocentesis or other genetic testing is usually recommended. A fetal echocardiogram is performed to evaluate for associated cardiac defects. Delivery is planned at a facility with NICU and pediatric surgery capabilities. Cesarean section may be recommended for giant omphaloceles to avoid rupturing the sac.',
    },
    {
      ageRange: '0-1 week',
      context:
        'After birth, the omphalocele sac is kept moist and protected. The baby is evaluated for associated anomalies, including heart defects, kidney problems, and genetic conditions. For small omphaloceles, primary surgical closure (pushing the organs back in and closing the abdominal wall) may be performed within the first days of life. For giant omphaloceles (containing liver), staged repair is often needed. One approach is "paint and wait" - applying topical agents to the sac to allow skin to grow over it gradually.',
    },
    {
      ageRange: '1-4 weeks',
      context:
        'If primary closure was done, recovery follows a similar timeline to gastroschisis - the bowel gradually starts functioning and feeds are introduced slowly. For babies with the paint-and-wait approach, the sac is treated daily and monitored closely. Any associated conditions such as cardiac defects may require their own management or surgical intervention during this period. Your baby will remain in the NICU for close monitoring.',
    },
    {
      ageRange: '1-12 months',
      context:
        'Babies with small omphaloceles and no major associated conditions often do well after repair. Those with giant omphaloceles or significant associated anomalies may need additional surgeries and longer hospital stays. A ventral hernia (weakness at the repair site) is possible and may need future repair. Your baby will be followed by pediatric surgery, cardiology (if heart defects are present), genetics, and pediatrics. Growth and feeding are monitored closely.',
    },
    {
      ageRange: '1 year+',
      context:
        'Long-term outcomes depend largely on the size of the omphalocele and associated conditions. Isolated small omphaloceles have excellent outcomes. Children with associated chromosomal conditions will need ongoing developmental support. Those with Beckwith-Wiedemann syndrome require monitoring for overgrowth and tumor risk. Many children go on to lead healthy lives. Abdominal wall repair may continue to be refined as the child grows.',
    },
  ],
  whenNormal: [
    'The omphalocele was diagnosed prenatally and you are being monitored by a maternal-fetal medicine specialist and pediatric surgeon',
    'Your baby has had successful surgical closure and is recovering in the NICU',
    'Genetic testing and cardiac evaluation have been completed and results have been discussed with your team',
    'Your baby is feeding well and growing after discharge',
  ],
  whenToMention: [
    'You have questions about genetic testing results or what they mean for your baby',
    'Your baby seems to have feeding difficulties or is not gaining weight well after discharge',
    'You notice a bulge at the surgical repair site, which may indicate a ventral hernia',
    'You are concerned about your baby meeting developmental milestones',
  ],
  whenToActNow: [
    'Your baby has bilious (green) vomiting, which could indicate a bowel obstruction',
    'Your baby has signs of infection at the surgical site or the omphalocele sac: redness, warmth, drainage, or fever',
    'Your baby develops breathing difficulty, especially if associated heart defects are present',
    'The omphalocele membrane ruptures or appears to be breaking down, exposing organs',
    'Your baby has a distended abdomen with vomiting and stops passing stool',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['gastroschisis-baby', 'anatomy-scan-findings'],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Facts about Omphalocele. Birth Defects, 2024.',
      url: 'https://www.cdc.gov/birth-defects/facts-about-omphalocele.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Omphalocele. Genetic and Rare Diseases Information Center (GARD), 2024.',
      url: 'https://rarediseases.info.nih.gov/diseases/7283/omphalocele',
    },
    {
      org: "Children's Hospital",
      citation:
        "Cincinnati Children's Hospital. Omphalocele: Diagnosis and Treatment.",
      url: 'https://www.cincinnatichildrens.org/health/o/omphalocele',
    },
  ],
};
