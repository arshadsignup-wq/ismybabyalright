import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'subgaleal-hemorrhage-newborn',
  title: 'Subgaleal Hemorrhage',
  category: 'medical',
  searchTerms: [
    'subgaleal hemorrhage newborn',
    'subgaleal hematoma baby',
    'newborn head swelling spreading',
    'baby head getting bigger after birth',
    'vacuum delivery head bleeding',
    'fluctuant scalp swelling newborn',
    'newborn scalp hemorrhage',
    'baby head swelling not going down',
  ],
  quickAnswer:
    'Subgaleal hemorrhage is a rare but serious condition where blood collects in the potential space between the scalp\'s connective tissue layer (galea aponeurotica) and the periosteum of the skull. Unlike caput succedaneum or cephalohematoma, subgaleal hemorrhage can cross suture lines, increase rapidly in size, and cause significant blood loss. It is a medical emergency that requires immediate hospital monitoring and treatment.',
  byAge: [
    {
      ageRange: '0-12 hours',
      context:
        'Subgaleal hemorrhage most often occurs after instrumental delivery, particularly vacuum extraction. It can also occur after forceps delivery or, rarely, spontaneously in babies with bleeding disorders. The swelling typically develops in the hours after birth and is notable because it increases in size, feels fluctuant (fluid-like), and crosses suture lines and fontanelles. The swelling may shift to the dependent part of the head when the baby is repositioned. The medical team monitors for signs of blood loss including pallor, tachycardia (fast heart rate), and low blood pressure.',
    },
    {
      ageRange: '12-48 hours',
      context:
        'This is a critical monitoring period. The subgaleal space can hold a very large volume of blood (up to 260 mL), meaning a significant portion of a newborn\'s total blood volume can accumulate here. The baby will be in the NICU with close monitoring of vital signs, head circumference measurements, hemoglobin levels, and coagulation studies. Treatment may include IV fluids, blood transfusions, correction of coagulopathy with fresh frozen plasma or vitamin K, and in severe cases, vasopressor support. Serial head measurements are essential to track whether bleeding is ongoing.',
    },
    {
      ageRange: '2-7 days',
      context:
        'If the hemorrhage has been recognized and treated promptly, the swelling should stabilize and begin to decrease. The breakdown of the collected blood will contribute to jaundice, and phototherapy may be needed. Hemoglobin levels and bilirubin will be monitored closely. The baby may need supplemental feeds or IV nutrition if they were too unwell to feed normally. Most babies who receive timely treatment recover well, though the hospital stay may be prolonged.',
    },
    {
      ageRange: '1-4 weeks',
      context:
        'As the hemorrhage resolves, the swelling gradually decreases. Follow-up will include monitoring for anemia and ensuring adequate feeding and weight gain. A cranial ultrasound or MRI may be performed to ensure there is no underlying intracranial pathology. Long-term outcomes are generally good when the condition is recognized and treated early. Developmental follow-up is recommended, particularly for babies who experienced significant hemodynamic instability. Most babies make a full recovery.',
    },
  ],
  whenNormal: [
    'The baby had a subgaleal hemorrhage that was treated in the hospital, has stabilized, and the swelling is decreasing',
    'The baby has been discharged from the hospital with a clear follow-up plan after successful treatment',
    'Follow-up blood counts and bilirubin levels are trending in the right direction',
    'The baby is feeding well and gaining weight after hospital discharge',
  ],
  whenToMention: [
    'Your baby had a vacuum-assisted or forceps delivery and you notice scalp swelling that seems to be growing',
    'Your baby had a treated subgaleal hemorrhage and you notice new swelling or pallor after discharge',
    'You have questions about long-term developmental monitoring after a subgaleal hemorrhage',
  ],
  whenToActNow: [
    'Your newborn has a rapidly expanding, fluctuant scalp swelling that crosses suture lines, especially after an instrumental delivery, as this is a medical emergency requiring immediate intervention to prevent life-threatening blood loss',
    'Your baby appears pale, is excessively sleepy, has a bulging fontanelle, or is showing signs of shock (cold extremities, rapid breathing, weak cry), as these are signs of significant hemorrhage requiring emergency care',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Subgaleal Hemorrhage in the Neonate. NeoReviews.',
      url: 'https://publications.aap.org/neoreviews/article/8/9/e369/54996/Neonatal-Birth-Injuries',
    },
    {
      org: 'NIH',
      citation:
        'Chadwick LM, Pemberton PJ, Kurinczuk JJ. Neonatal subgaleal haematoma: associated risk factors, complications and outcome. J Paediatr Child Health. 1996;32(3):228-232.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/8827540/',
    },
  ],
};
