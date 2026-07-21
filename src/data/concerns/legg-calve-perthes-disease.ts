import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'legg-calve-perthes-disease',
  title: 'Legg-Calve-Perthes Disease (Hip Avascular Necrosis)',
  category: 'medical',
  searchTerms: [
    'legg calve perthes disease child',
    'perthes disease hip',
    'avascular necrosis hip child',
    'child limping hip pain',
    'femoral head deterioration child',
    'child hip blood supply disruption',
    'perthes disease treatment bracing',
    'child groin pain limping',
    'hip joint necrosis pediatric',
    'child hip stiffness limited motion',
  ],
  quickAnswer:
    'Legg-Calve-Perthes disease occurs when the blood supply to the ball (femoral head) of the hip joint is temporarily disrupted, causing the bone to soften and break down. It most commonly affects children between ages 2 and 12, with a peak between 4 and 8, and is about four times more common in boys. With proper treatment ranging from observation and physical therapy to bracing or surgery, most children recover well over 1-2 years as the bone gradually regrows.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Legg-Calve-Perthes disease does not occur at this age. Hip concerns in newborns are typically related to developmental dysplasia of the hip (DDH). If your newborn has hip instability, asymmetric thigh folds, or limited hip movement, your pediatrician will evaluate for DDH rather than Perthes disease.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Perthes disease is essentially unheard of in infants under 1 year. If your baby shows signs of hip discomfort, limited hip movement, or reluctance to bear weight once standing, other conditions such as hip dysplasia, transient synovitis, or infection are far more likely and should be evaluated by your pediatrician.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Perthes disease can occasionally appear in this age group, though it is more common in older children. Early signs include a painless limp that comes and goes, mild hip or knee pain (referred pain to the knee is common and can be misleading), and stiffness after activity. Children diagnosed younger generally have a better prognosis because the femoral head has more time to remodel during growth. X-rays are the primary diagnostic tool, and early cases may show only subtle changes.',
    },
    {
      ageRange: '3-5 years',
      context:
        'This is within the peak age range for Perthes disease. Your child may develop a painless limp, complain of hip, thigh, groin, or knee pain (especially after activity), or have reduced range of motion in the affected hip, particularly internal rotation and abduction. Diagnosis is confirmed with X-rays, and MRI may be needed to assess the extent of femoral head involvement. Treatment depends on how much of the femoral head is affected and may include activity modification, physical therapy to maintain hip motion, abduction bracing (such as a Petrie cast or Scottish Rite brace), or in more severe cases, surgical osteotomy to keep the femoral head well-contained in the hip socket.',
    },
  ],
  whenNormal: [
    'Your child has been diagnosed with Perthes disease and is being actively monitored by a pediatric orthopedist with regular imaging',
    'Your child has mild involvement affecting less than half the femoral head and is maintaining good hip range of motion with physical therapy',
    'Your child was diagnosed before age 6, which is associated with a more favorable long-term prognosis',
    'Your child\'s pain is manageable and improves with rest, activity modification, and anti-inflammatory medication as directed by your doctor',
  ],
  whenToMention: [
    'Your child has a persistent limp lasting more than a few days, especially without a clear injury',
    'Your child complains of recurring hip, groin, thigh, or knee pain that worsens with activity',
    'You notice your child has limited ability to spread or rotate the affected hip compared to the other side',
  ],
  whenToActNow: [
    'Your child suddenly cannot bear weight on the leg, has severe hip pain, and has a fever, which may indicate a joint infection (septic arthritis) rather than Perthes disease and requires emergency evaluation',
    'Your child with known Perthes disease develops sudden worsening of pain or a dramatic decrease in hip range of motion, which could indicate femoral head collapse requiring urgent orthopedic assessment',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['hip-dysplasia', 'baby-limping'],
  sources: [
    {
      org: 'OrthoInfo',
      citation:
        'American Academy of Orthopaedic Surgeons. Perthes Disease. OrthoInfo, 2022.',
      url: 'https://orthoinfo.aaos.org/en/diseases--conditions/perthes-disease/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Legg-Calve-Perthes Disease. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Legg-Calve-Perthes-Disease.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Legg-Calve-Perthes Disease. MedlinePlus, 2023.',
      url: 'https://medlineplus.gov/ency/article/001264.htm',
    },
  ],
};
