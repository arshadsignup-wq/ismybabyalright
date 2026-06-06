import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-circumcision-complications',
  title: 'When Circumcision Is Not Healing Properly',
  category: 'medical',
  searchTerms: ['circumcision not healing', 'circumcision complications baby', 'baby circumcision infection', 'circumcision bleeding', 'baby circumcision swelling', 'circumcision problems newborn', 'circumcision gone wrong', 'baby penis infection circumcision', 'circumcision too much skin', 'circumcision adhesions baby'],
  quickAnswer:
    'While most circumcisions heal without problems, complications can include excessive bleeding, infection, adhesions (skin reattaching), or too much or too little skin removed. Most complications are minor and manageable. Active bleeding that does not stop with pressure, spreading redness, pus, fever, or inability to urinate requires prompt medical attention.',
  byAge: [
    { ageRange: '0-1 month', context: 'Complications of circumcision are uncommon, occurring in about 2-3% of cases, and are usually minor. Bleeding is the most common complication and can usually be managed with gentle pressure. Infection is rare and presents as increasing redness, swelling, warmth, and pus spreading beyond the immediate circumcision site. Other complications include too much or too little skin removed, meatal stenosis (narrowing of the urinary opening), and skin bridges or adhesions. If you notice any of these concerns, contact your pediatrician. Do not attempt to treat complications at home beyond basic care.' },
    { ageRange: '1-3 months', context: 'Penile adhesions (where the shaft skin has readhered to the glans) are the most common delayed complication. Many are mild and resolve with gentle retraction during baths. More significant adhesions may need evaluation. Concealed or buried penis (where the shaft retracts under surrounding fat pad) can sometimes occur and may need monitoring or treatment.' },
    { ageRange: '3-6 months', context: 'Continue monitoring for adhesions and ensuring the circumcision site looks healthy. Your pediatrician checks the penis at well-child visits. Most delayed complications are cosmetic and can be addressed by your pediatrician or a urologist if needed.' },
    { ageRange: '6-12 months', context: 'Persistent adhesions or cosmetic concerns can be discussed with your pediatrician. Meatal stenosis (narrowing of the urinary opening) can occasionally develop months after circumcision and may cause a thin, deflected urine stream. This is treatable.' },
  ],
  whenNormal: ['Mild swelling and redness at the circumcision site for the first few days', 'Small amounts of blood-tinged drainage', 'Yellowish healing crust (granulation tissue) on the glans'],
  whenToMention: ['Skin adhesions forming between the shaft and glans', 'Cosmetic concerns about the circumcision result', 'A thin or deflected urine stream that develops weeks to months later'],
  whenToActNow: ['Active bleeding that does not stop with gentle pressure for 10 minutes', 'Spreading redness, increasing swelling, pus, or foul smell suggesting infection', 'Baby has not urinated within 12 hours of circumcision, develops a fever, or seems unwell'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Circumcision Policy Statement. Pediatrics. 2012;130(3):e756-e785.', url: 'https://publications.aap.org/pediatrics/article/130/3/e756/30225/Male-Circumcision' },
    { org: 'NIH', citation: 'National Library of Medicine. Complications of Neonatal Circumcision. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK459280/' },
  ],
  relatedConcernSlugs: ['newborn-circumcision-healing', 'circumcision-healing-complications'],
};
