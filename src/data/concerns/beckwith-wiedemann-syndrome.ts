import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'beckwith-wiedemann-syndrome',
  title: 'My Baby Was Diagnosed with Beckwith-Wiedemann Syndrome',
  category: 'medical',
  searchTerms: [
    'Beckwith-Wiedemann syndrome baby',
    'BWS baby',
    'Beckwith-Wiedemann large tongue',
    'macroglossia newborn',
    'omphalocele Beckwith-Wiedemann',
    'BWS tumor screening',
    'Beckwith-Wiedemann Wilms tumor risk',
    'overgrowth syndrome baby',
    'large baby syndrome',
    'Beckwith-Wiedemann hypoglycemia',
  ],
  quickAnswer:
    'Beckwith-Wiedemann syndrome (BWS) is an overgrowth disorder affecting approximately 1 in 10,500 births. It is caused by changes in gene regulation on chromosome 11p15. Common features include macrosomia (large body size), macroglossia (large tongue), abdominal wall defects (omphalocele or umbilical hernia), ear creases or pits, and neonatal hypoglycemia. The most important medical consideration is an increased risk of certain childhood cancers (particularly Wilms tumor and hepatoblastoma), which requires regular screening through early childhood. With appropriate monitoring, the prognosis for children with BWS is generally very good.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'In the newborn period, the primary concerns are neonatal hypoglycemia (low blood sugar) and the management of any abdominal wall defects. Hypoglycemia can be severe and requires close monitoring and sometimes IV glucose. A large tongue may cause feeding difficulties and, in rare cases, airway issues. Your neonatal team will stabilize these issues. Genetic testing (methylation analysis of chromosome 11p15) confirms the diagnosis and helps determine the specific molecular subtype, which guides cancer screening recommendations.',
    },
    {
      ageRange: '1-6 months',
      context:
        'Once acute neonatal issues are managed, cancer screening begins. This typically includes abdominal ultrasound every 3 months and alpha-fetoprotein (AFP) blood tests to screen for hepatoblastoma and Wilms tumor. Feeding may require support if the tongue is large. Some babies need special positioning or feeding strategies. The large tongue often becomes proportionally smaller as the child grows.',
    },
    {
      ageRange: '6 months - 4 years',
      context:
        'Cancer screening continues with abdominal ultrasounds every 3 months until around age 4 (for hepatoblastoma) and then every 3-4 months until age 7 (for Wilms tumor). This screening schedule is evidence-based and catches tumors at early, treatable stages. Growth may be accelerated in early childhood but typically normalizes. If the tongue is causing significant feeding, speech, or airway issues, tongue reduction surgery may be discussed.',
    },
    {
      ageRange: '4 years+',
      context:
        'The risk of hepatoblastoma decreases significantly after age 4, and the risk of Wilms tumor decreases after age 7-8. After the screening period, most children with BWS have no ongoing medical issues beyond normal pediatric care. Growth typically normalizes. Some children may have leg length discrepancy or hemihyperplasia (one side larger than the other) that may benefit from orthopedic monitoring.',
    },
  ],
  whenNormal: [
    'Your baby has BWS and is receiving regular cancer screening on schedule',
    'Your baby\'s blood sugar has stabilized and they are feeding and growing well',
    'Your child is growing rapidly but screening tests remain normal',
  ],
  whenToMention: [
    'You feel a lump or mass in your baby\'s abdomen — report this even if the next screening is not due yet',
    'Your baby is having difficulty feeding because of the large tongue',
    'You notice one limb or side of the body seems significantly larger than the other',
    'You have questions about your child\'s genetic testing results or recurrence risk for future pregnancies',
  ],
  whenToActNow: [
    'Your newborn is jittery, trembling, pale, or excessively sleepy — this may indicate low blood sugar and needs immediate evaluation',
    'You feel a firm mass in your child\'s abdomen — seek urgent medical evaluation',
    'Your baby has difficulty breathing related to the large tongue — seek emergency care',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'noonan-syndrome-baby',
    'vacterl-association',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'MedlinePlus. Beckwith-Wiedemann Syndrome.',
      url: 'https://medlineplus.gov/genetics/condition/beckwith-wiedemann-syndrome/',
    },
    {
      org: 'NORD',
      citation:
        'National Organization for Rare Disorders. Beckwith-Wiedemann Syndrome.',
      url: 'https://rarediseases.org/rare-diseases/beckwith-wiedemann-syndrome/',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Consensus Statement on Beckwith-Wiedemann Syndrome. Nature Reviews Endocrinology, 2018.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/29377010/',
    },
  ],
};
