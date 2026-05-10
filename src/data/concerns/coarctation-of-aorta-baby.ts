import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'coarctation-of-aorta-baby',
  title: 'Coarctation of the Aorta in Babies',
  category: 'medical',
  searchTerms: [
    'coarctation of aorta baby',
    'baby weak pulse in legs',
    'aortic coarctation infant',
    'baby high blood pressure arms',
    'coarctation diagnosis baby',
    'baby blood pressure difference arms legs',
    'aorta narrowing baby',
    'coarctation of aorta newborn signs',
  ],
  quickAnswer:
    'Coarctation of the aorta is a narrowing of the body\'s main artery (the aorta) that reduces blood flow to the lower body. It accounts for about 5-8% of all congenital heart defects. It can present in newborns as a critical emergency or be diagnosed later in childhood through high blood pressure or a heart murmur. Surgical repair or catheter-based intervention is very effective, with most children leading normal lives afterward.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Critical coarctation typically presents in the first 1-2 weeks of life as the ductus arteriosus (a fetal blood vessel that was bypassing the narrowing) closes. When this happens, blood flow to the lower body is severely restricted, and babies can become extremely ill very quickly — with poor feeding, rapid breathing, gray color, weak or absent pulses in the legs, and shock. This is a surgical emergency. Some cases are detected prenatally or by the newborn pulse oximetry screen.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Milder coarctation may present more gradually with signs of heart failure — difficulty feeding, sweating during feeds, poor weight gain, and irritability. A blood pressure difference between the arms and legs, and weaker pulses in the legs compared to the arms, are characteristic findings. Babies diagnosed at this stage still require repair, typically through surgery.',
    },
    {
      ageRange: '6-12 months',
      context:
        'After successful repair, babies typically show dramatic improvement in feeding and growth. Follow-up monitoring with blood pressure checks and echocardiograms is important, as re-coarctation (re-narrowing at the repair site) occurs in some cases. Blood pressure in the arms should be checked regularly. Many babies do well developmentally after repair.',
    },
    {
      ageRange: '12 months+',
      context:
        'Long-term follow-up is essential even after successful repair. Some children develop high blood pressure later in life and may need medication. Re-coarctation can occur years after repair and may be treated with balloon angioplasty. Most children with repaired coarctation can participate in normal activities, though some high-intensity competitive sports may require cardiologist clearance. Lifelong cardiac follow-up is recommended.',
    },
  ],
  whenNormal: [
    'Your baby had a successful coarctation repair and has equal blood pressures in arms and legs',
    'Your baby is feeding well, gaining weight, and has strong pulses in all four limbs',
    'Your baby\'s follow-up echocardiogram shows no significant re-narrowing',
    'Your baby is meeting developmental milestones after surgery',
  ],
  whenToMention: [
    'Your baby has weak or difficult-to-feel pulses in the legs compared to the arms',
    'Your baby seems to tire easily during feeding and is not gaining weight as expected',
    'Your child with repaired coarctation has blood pressure readings that are consistently high',
  ],
  whenToActNow: [
    'Your newborn is suddenly pale or gray, has rapid breathing, poor feeding, and weak or absent leg pulses — this is a critical emergency, call 911',
    'Your baby appears to be in shock (limp, cold, mottled skin, unresponsive) — immediate emergency care is needed',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Facts about Coarctation of the Aorta. CDC, 2024.',
      url: 'https://www.cdc.gov/ncbddd/heartdefects/coarctationofaorta.html',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Coarctation of the Aorta — Symptoms and Causes. Mayo Foundation for Medical Education and Research, 2023.',
      url: 'https://www.mayoclinic.org/diseases-conditions/coarctation-of-the-aorta/symptoms-causes/syc-20352529',
    },
  ],
};
