import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'congenital-pulmonary-airway-malformation',
  title: 'Congenital Pulmonary Airway Malformation (CPAM)',
  category: 'medical',
  searchTerms: [
    'congenital pulmonary airway malformation',
    'CPAM baby',
    'lung cyst baby',
    'cystic lung malformation newborn',
    'CCAM baby lung',
    'prenatal lung mass baby',
    'lung mass found on ultrasound baby',
    'congenital lung malformation surgery',
    'baby lung cyst surgery',
    'CPAM treatment baby',
  ],
  quickAnswer:
    'Congenital pulmonary airway malformation (CPAM, formerly called CCAM) is an abnormal mass of lung tissue that forms during fetal development. It can be cystic (fluid-filled) or solid. Many are found on prenatal ultrasound. Some cause respiratory distress at birth, while others are asymptomatic. Surgical removal is usually recommended even for asymptomatic cases due to the risk of recurrent infections and a small risk of malignancy.',
  byAge: [
    {
      ageRange: 'Prenatal',
      context:
        'CPAMs are most commonly discovered on routine prenatal ultrasound, typically during the second trimester. The lesion may appear as a cystic or solid mass in the fetal lung. Many CPAMs grow during the second trimester and then stabilize or even shrink before birth. Large lesions that cause fetal hydrops (fluid accumulation) may require prenatal intervention such as thoracoamniotic shunting or fetal surgery in specialized centers. Serial ultrasounds monitor the size and any complications. Most babies with prenatally diagnosed CPAM do well after birth.',
    },
    {
      ageRange: '0-1 month',
      context:
        'Babies with large CPAMs may develop respiratory distress shortly after birth with rapid breathing, grunting, or cyanosis, and may require immediate surgical intervention. Smaller lesions may cause no symptoms at birth. All newborns with a prenatally diagnosed CPAM should have a chest CT scan (typically performed around 1-3 months of age) to fully characterize the lesion and plan management, even if the baby appears well. A postnatal chest X-ray may show the lesion, though some smaller CPAMs are not visible on plain X-ray.',
    },
    {
      ageRange: '1-12 months',
      context:
        'Many pediatric surgeons recommend elective surgical removal of CPAM during infancy, often between 3-6 months of age, even if the baby is asymptomatic. This is because leaving the lesion in place carries a risk of recurrent infections within the abnormal tissue and a small but real risk of malignancy (pleuropulmonary blastoma). Surgery typically involves removing the affected lobe of the lung (lobectomy) and is generally well tolerated in infants, with the remaining lung compensating well.',
    },
    {
      ageRange: '1 year+',
      context:
        'If surgical removal was not performed in infancy, children may present later with recurrent pneumonia in the same location or with an incidentally discovered lung mass on imaging. Some centers offer observation with serial imaging for small, asymptomatic lesions, though this approach requires careful follow-up. After surgical removal, children typically have excellent lung function and can participate in normal activities. Long-term follow-up with periodic chest imaging may be recommended.',
    },
  ],
  whenNormal: [
    'A small CPAM was found on prenatal ultrasound and your doctor is monitoring it with serial imaging and it is stable or shrinking',
    'Your baby had a CPAM surgically removed and has recovered well with normal breathing and growth',
    'A prenatal lung finding was evaluated after birth and was determined to be benign or to have resolved on its own',
  ],
  whenToMention: [
    'A lung mass or cyst was found on your baby\'s prenatal ultrasound and you want to discuss what it means and the plan for after birth',
    'Your baby has a known CPAM and you want to discuss the timing and approach for surgical removal',
    'Your child had CPAM surgery and you have questions about follow-up care, activity restrictions, or long-term outlook',
    'Your child has had more than one episode of pneumonia in the same area of the lung, which could suggest an undiagnosed lung malformation',
  ],
  whenToActNow: [
    'Your newborn with a known lung mass is having difficulty breathing, breathing rapidly, grunting, or appearing blue, as this may require urgent surgical intervention',
    'Your baby or child with a known CPAM develops sudden onset of fever, cough, and breathing difficulty, which could indicate an infection within the malformation',
    'Your child develops sudden chest pain, difficulty breathing, or coughs up blood, which could indicate a complication of the CPAM such as hemorrhage or infection',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-breathing-fast', 'newborn-noisy-breathing-normal'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Congenital Lung Malformations. NeoReviews, 2019.',
      url: 'https://publications.aap.org/neoreviews/article/20/7/e400/80043/Congenital-Lung-Malformations',
    },
    {
      org: 'ATS',
      citation:
        'Bush A. Congenital Lung Disease: A Plea for Clear Thinking and Clear Nomenclature. Pediatric Pulmonology, 2019.',
      url: 'https://www.atsjournals.org/doi/full/10.1164/rccm.200607-1005PP',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Congenital Pulmonary Airway Malformation. MedlinePlus, 2024.',
      url: 'https://medlineplus.gov/genetics/condition/congenital-pulmonary-airway-malformation/',
    },
  ],
};
