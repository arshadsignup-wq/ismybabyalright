import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'gastroschisis-baby',
  title: 'My Baby Has Gastroschisis',
  category: 'medical',
  searchTerms: [
    'baby gastroschisis',
    'gastroschisis diagnosis',
    'intestines outside baby belly',
    'abdominal wall defect baby',
    'gastroschisis surgery',
    'gastroschisis prenatal diagnosis',
    'gastroschisis vs omphalocele',
    'baby born with intestines out',
    'gastroschisis outcomes',
    'gastroschisis NICU',
  ],
  quickAnswer:
    'Gastroschisis is a birth defect where the baby\'s intestines (and sometimes other organs) extend outside the body through a hole in the abdominal wall, usually to the right of the umbilical cord. Unlike omphalocele, there is no protective membrane covering the organs. It is typically detected on prenatal ultrasound around 18-20 weeks. Surgical repair is performed within hours of birth, and the majority of babies do very well after treatment.',
  byAge: [
    {
      ageRange: 'Prenatal',
      context:
        'Gastroschisis is usually diagnosed on a routine anatomy scan ultrasound at 18-20 weeks. You will be referred to a maternal-fetal medicine specialist and a pediatric surgeon for counseling. Delivery is planned at a center with a neonatal intensive care unit and pediatric surgery. Serial ultrasounds monitor bowel dilation and growth. Vaginal delivery is often possible. The incidence has been rising, particularly among younger mothers, though the exact cause remains unknown.',
    },
    {
      ageRange: '0-1 week',
      context:
        'Immediately after birth, the exposed intestines are covered with a sterile, moist dressing to prevent heat and fluid loss. If all the bowel fits back in the abdomen, primary closure surgery is performed within hours. If the abdominal cavity is too small, a silo (a temporary pouch) is placed over the intestines, and the bowel is gradually reduced back into the abdomen over several days before final closure. Your baby will be in the NICU during this time.',
    },
    {
      ageRange: '1-4 weeks',
      context:
        'After surgical closure, the bowel needs time to "wake up" and begin functioning. This period of intestinal dysmotility is common. Your baby will be fed intravenously (TPN) until the intestines start working. Feedings are introduced very slowly, starting with small amounts of breast milk or formula. Some babies take days, others take weeks, to tolerate full feeds. Patience is key during this phase.',
    },
    {
      ageRange: '1-6 months',
      context:
        'Most babies with simple gastroschisis are feeding well and growing by this point. Some babies with complex gastroschisis (where the bowel was damaged, twisted, or had areas of atresia) may take longer to achieve full feeds. Rarely, short bowel syndrome can result if significant bowel was lost. Follow-up with your pediatric surgeon and pediatrician will monitor feeding, growth, and any complications.',
    },
    {
      ageRange: '6 months+',
      context:
        'Long-term outcomes for gastroschisis are excellent for the majority of children. Most achieve normal growth, development, and bowel function. The surgical scar fades over time. Some children may have an increased risk of adhesive bowel obstruction later in life. Regular pediatric follow-up is important, but most children lead completely normal lives with no lasting effects.',
    },
  ],
  whenNormal: [
    'Gastroschisis was detected on prenatal ultrasound and you are being followed by a maternal-fetal medicine specialist and pediatric surgeon',
    'Your baby had successful surgical repair and is gradually tolerating feeds in the NICU',
    'Your baby is gaining weight and feeding well after discharge',
    'Your baby is meeting developmental milestones at expected ages',
    'The surgical scar is healing normally',
  ],
  whenToMention: [
    'Your baby seems to have feeding difficulties or is not gaining weight as expected after discharge',
    'You notice abdominal distension or your baby seems uncomfortable after feeding',
    'You have questions about follow-up care or future surgical risks',
    'You are concerned about the appearance of the surgical scar',
  ],
  whenToActNow: [
    'Your baby has bilious (green) vomiting, which could indicate a bowel obstruction',
    'Your baby has a distended, firm, or tender abdomen with irritability',
    'Your baby stops stooling and develops vomiting, which may indicate an adhesive obstruction',
    'Your baby has signs of infection at the surgical site: redness, swelling, drainage, or fever',
    'Your baby develops feeding intolerance with significant vomiting after previously feeding well',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['omphalocele-baby', 'anatomy-scan-findings'],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Facts about Gastroschisis. Birth Defects, 2024.',
      url: 'https://www.cdc.gov/birth-defects/facts-about-gastroschisis.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Gastroschisis. Genetic and Rare Diseases Information Center (GARD), 2024.',
      url: 'https://rarediseases.info.nih.gov/diseases/6480/gastroschisis',
    },
    {
      org: "Children's Hospital",
      citation:
        "Boston Children's Hospital. Gastroschisis: Symptoms, Diagnosis, and Treatment.",
      url: 'https://www.childrenshospital.org/conditions/gastroschisis',
    },
  ],
};
