import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-anemia-signs',
  title: 'Anemia in Newborns',
  category: 'medical',
  searchTerms: [
    'newborn anemia',
    'baby anemia signs',
    'newborn pale baby',
    'baby low hemoglobin',
    'infant anemia symptoms',
    'newborn anemia causes',
    'baby pale skin anemia',
    'anemia of infancy',
    'physiologic anemia baby',
    'newborn anemia treatment',
  ],
  quickAnswer:
    'Anemia in newborns means the baby has fewer red blood cells or lower hemoglobin than normal. Causes include blood type incompatibility, blood loss, prematurity, and infections. Mild physiologic anemia is normal around 6-8 weeks as birth red blood cells are replaced. Signs of significant anemia include pallor, lethargy, poor feeding, and rapid breathing.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Anemia in the first weeks can be caused by blood type incompatibility (ABO or Rh), blood loss during delivery, frequent blood draws (especially in the NICU), infections, or inherited conditions. Signs include pallor (pale skin), rapid heart rate, poor feeding, lethargy, and rapid breathing. Your baby\'s hemoglobin level was checked at birth. If anemia is significant, treatment may include iron supplementation, erythropoietin, or in severe cases, a blood transfusion.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Physiologic anemia of infancy is a normal drop in hemoglobin that occurs around 6-8 weeks as the red blood cells made before birth are broken down faster than new ones are produced. In full-term babies, this is usually mild and self-correcting. Premature babies experience a more significant drop (anemia of prematurity) and may need monitoring and treatment. Iron stores from birth begin to deplete during this period.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As your baby\'s bone marrow becomes more efficient at producing red blood cells, hemoglobin levels recover from physiologic anemia. Breastfed babies may begin iron supplementation at 4 months if not already started, as recommended by the AAP, since breast milk has limited iron content.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Iron-deficiency anemia becomes the most common form of anemia as iron stores from birth are depleted and iron needs increase with growth. Introduction of iron-rich solid foods and continued iron supplementation if breastfeeding help prevent iron-deficiency anemia. Your pediatrician may screen for anemia around 12 months.',
    },
  ],
  whenNormal: [
    'Mild physiologic anemia around 6-8 weeks in a full-term baby who is feeding and growing well',
    'Baby has good energy and is alert despite slightly lower hemoglobin levels',
    'Recovery of hemoglobin levels by 3-4 months',
  ],
  whenToMention: [
    'Your baby appears paler than usual',
    'You notice your baby seems more tired than normal or feeds poorly',
    'Your baby was premature and may be at higher risk for anemia',
  ],
  whenToActNow: [
    'Significant pallor, rapid breathing, poor feeding, or lethargy, which could indicate severe anemia requiring urgent evaluation',
    'Baby appears very pale and has a rapid heart rate or seems to tire easily during feeds',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Iron Supplementation for Infants. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/126/5/1040/65564/Diagnosis-and-Prevention-of-Iron-Deficiency-and',
    },
    {
      org: 'NIH',
      citation: 'National Library of Medicine. Neonatal Anemia. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK537329/',
    },
  ],
  relatedConcernSlugs: ['newborn-blood-type-incompatibility', 'pallor-baby', 'newborn-polycythemia'],
};
