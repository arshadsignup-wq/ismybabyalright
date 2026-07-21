import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'physiologic-anemia-infancy',
  title: 'Physiologic Anemia of Infancy - Normal Hemoglobin Drop',
  category: 'medical',
  searchTerms: [
    'physiologic anemia of infancy',
    'baby hemoglobin drop normal',
    'baby anemia 6 weeks',
    'baby anemia 8 weeks',
    'newborn hemoglobin decreasing',
    'baby low hemoglobin normal',
    'physiologic nadir hemoglobin',
    'is baby anemia normal',
    'baby pale 2 months',
    'anemia of prematurity',
  ],
  quickAnswer:
    'Physiologic anemia of infancy is a normal, expected drop in hemoglobin levels that occurs in all babies around 6 to 8 weeks of age. After birth, the baby transitions from fetal hemoglobin to adult hemoglobin, and red blood cell production temporarily decreases as the body adjusts to the oxygen-rich environment outside the womb. In full-term babies, hemoglobin typically drops to about 9.5-11 g/dL and then recovers on its own without treatment. In premature babies, the drop can be more pronounced (anemia of prematurity) and may occasionally require intervention.',
  byAge: [
    {
      ageRange: '0-2 weeks',
      context:
        'At birth, babies have high hemoglobin levels (14-20 g/dL) because they needed extra red blood cells to carry oxygen in the lower-oxygen environment of the womb. After birth, the baby is now breathing oxygen-rich air, so the body signals the bone marrow to slow red blood cell production. The hormone erythropoietin drops significantly. This is the beginning of the normal transition. Delayed cord clamping at birth can provide additional iron stores and slightly higher initial hemoglobin levels.',
    },
    {
      ageRange: '2-8 weeks',
      context:
        'During this period, the hemoglobin gradually declines as older fetal red blood cells are broken down and new adult red blood cells are produced at a lower rate. The lowest point (nadir) typically occurs at 6-8 weeks of age in full-term babies, with hemoglobin dropping to approximately 9.5-11 g/dL. This is completely normal and does not require treatment. Your baby should still appear well, feed normally, and gain weight. In premature babies, the nadir occurs earlier (4-6 weeks), drops lower (7-9 g/dL or less), and may cause symptoms, sometimes requiring transfusion.',
    },
    {
      ageRange: '2-4 months',
      context:
        'After the nadir, the bone marrow begins increasing red blood cell production in response to lower oxygen-carrying capacity. Hemoglobin levels gradually rise. If your full-term baby remains mildly pale but is feeding well, active, and gaining weight normally, the physiologic anemia is resolving as expected. However, if hemoglobin drops below 9 g/dL in a full-term baby, or your baby seems excessively tired, pale, or is feeding poorly, additional causes of anemia should be investigated. Iron stores from birth begin to be depleted around 4-6 months, which is why iron supplementation or iron-rich foods become important.',
    },
    {
      ageRange: '4-12 months',
      context:
        'By 4-6 months, hemoglobin levels should be recovering and stabilizing. If anemia persists or worsens beyond this point, it is no longer physiologic and warrants investigation. The most common cause of anemia after 4-6 months is iron deficiency, especially in breastfed infants who are not receiving iron supplementation or iron-fortified foods. The AAP recommends iron supplementation for exclusively breastfed infants starting at 4 months and introduction of iron-rich complementary foods at 6 months. Your pediatrician will screen for anemia around 9-12 months of age.',
    },
  ],
  whenNormal: [
    'Your baby has mild anemia (hemoglobin 9.5-11 g/dL) around 6-8 weeks of age but is feeding well, active, and gaining weight',
    'A slight pallor noticed around 2 months of age that does not worsen and your baby is otherwise thriving',
    'Your premature baby has a slightly lower hemoglobin that your pediatrician is monitoring without immediate concern',
    'Blood work shows a low hemoglobin at the expected nadir age with an appropriate reticulocyte count beginning to rise',
  ],
  whenToMention: [
    'Your baby seems more tired, pale, or is feeding less enthusiastically than usual around 6-8 weeks of age',
    'Your premature baby has hemoglobin levels dropping below 8-9 g/dL and seems lethargic or is not gaining weight well',
    'Anemia that was expected to improve by 3-4 months seems to be persisting or worsening',
  ],
  whenToActNow: [
    'Your baby at any age is very pale, breathing rapidly, has a fast heartbeat, is refusing feeds, or is lethargic, as this could indicate severe anemia requiring urgent evaluation and possible transfusion',
    'Your premature baby develops apnea (pauses in breathing), bradycardia (slow heart rate), or significant feeding difficulties along with worsening anemia',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['pallor-baby', 'iron-deficiency-anemia-baby', 'thalassemia-baby-trait-disease', 'hereditary-spherocytosis-baby', 'diamond-blackfan-anemia-baby'],
  sources: [
    {
      org: 'AAP',
      citation:
        'Baker RD, Greer FR, Committee on Nutrition. Diagnosis and Prevention of Iron Deficiency and Iron-Deficiency Anemia in Infants and Young Children (0-3 Years of Age). Pediatrics. 2010;126(5):1040-1050.',
      url: 'https://publications.aap.org/pediatrics/article/126/5/1040/65342/Diagnosis-and-Prevention-of-Iron-Deficiency-and',
    },
    {
      org: 'AAP',
      citation:
        'Ohls RK. Evaluation and Treatment of Anemia in the Neonate. In: Fetal and Neonatal Physiology. 5th Edition. Elsevier. 2017.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chronic/Pages/Anemia-in-Children-and-Teens.aspx',
    },
    {
      org: 'NIH',
      citation:
        'MedlinePlus. Anemia in the Newborn. National Library of Medicine.',
      url: 'https://medlineplus.gov/ency/article/007618.htm',
    },
  ],
};
