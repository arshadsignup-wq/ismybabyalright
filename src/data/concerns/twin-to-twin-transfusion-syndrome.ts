import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'twin-to-twin-transfusion-syndrome',
  title: 'My Twins Were Diagnosed with TTTS (Twin-to-Twin Transfusion Syndrome)',
  category: 'medical',
  searchTerms: [
    'twin to twin transfusion syndrome TTTS',
    'TTTS diagnosis pregnancy',
    'TTTS laser surgery outcome',
    'TTTS survivor outcomes',
    'TTTS brain injury',
    'twin twin transfusion syndrome treatment',
    'TTTS donor twin recipient twin',
    'identical twin complications',
    'TTTS long term effects',
    'TTTS stage Quintero',
  ],
  quickAnswer:
    'Twin-to-twin transfusion syndrome (TTTS) is a serious condition affecting identical twins who share a placenta (monochorionic twins). Abnormal blood vessel connections in the placenta cause unequal blood flow between the twins — one (the donor) gives too much blood, and the other (the recipient) receives too much. TTTS is staged I through V (Quintero staging). Without treatment, severe TTTS can be life-threatening, but fetoscopic laser surgery has dramatically improved outcomes. Many TTTS survivors develop normally, though close follow-up is recommended.',
  byAge: [
    {
      ageRange: 'Prenatal diagnosis and treatment',
      context:
        'TTTS is typically diagnosed during pregnancy via ultrasound showing discrepant amniotic fluid levels — too much around the recipient twin and too little around the donor. Fetoscopic laser ablation of the connecting blood vessels is the primary treatment for stage II and above. The procedure is performed at specialized fetal surgery centers. After treatment, close monitoring continues for the remainder of pregnancy. The emotional toll of a TTTS diagnosis during pregnancy is immense — connecting with TTTS support organizations can help.',
    },
    {
      ageRange: 'NICU and newborn period',
      context:
        'TTTS twins are often born prematurely and may need NICU care. The donor twin may be smaller and anemic, while the recipient twin may have cardiovascular issues from fluid overload. Both twins should be evaluated for complications specific to TTTS, including cardiac function, brain imaging, and kidney function. If laser surgery was performed during pregnancy, outcomes are generally better, but monitoring remains important.',
    },
    {
      ageRange: '0-12 months corrected age',
      context:
        'Both twins should receive developmental follow-up, as TTTS survivors have a somewhat increased risk of neurological complications, particularly if the syndrome was severe or if one twin was lost. Cardiac follow-up for the recipient twin and monitoring for anemia or growth issues in the donor twin may be recommended. Many TTTS survivors develop normally, especially when the condition was treated early.',
    },
    {
      ageRange: '1 year+ corrected age',
      context:
        'Long-term studies show that the majority of TTTS survivors who received laser treatment have normal neurodevelopmental outcomes. However, annual developmental and cardiac screening is recommended through early childhood. If you lost one twin to TTTS, the grief is profound and valid — you are simultaneously mourning one child while celebrating the survivor. Support groups for TTTS families can be invaluable.',
    },
  ],
  whenNormal: [
    'Your TTTS twins received laser treatment and are growing and developing well',
    'There are size differences between your twins but both are following their own growth curves',
    'Your twins are meeting developmental milestones, though one may be slightly ahead of the other',
  ],
  whenToMention: [
    'Either twin is not meeting developmental milestones or seems to be falling behind',
    'The recipient twin has ongoing cardiac concerns or the donor twin has ongoing growth issues',
    'You are struggling emotionally with the TTTS experience, especially if one twin was lost',
    'You have questions about future pregnancy risks or genetic counseling',
  ],
  whenToActNow: [
    'Either twin has seizures, sudden changes in behavior, or signs of neurological problems — seek emergency medical evaluation',
    'The recipient twin shows signs of heart failure (difficulty breathing, poor feeding, excessive sweating with feeds) — contact your pediatric cardiologist urgently',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'nicu-parent-trauma',
    'adjusted-age-milestones-preemie',
    'intraventricular-hemorrhage-ivh',
  ],
  sources: [
    {
      org: 'CHOP',
      citation:
        'Children\'s Hospital of Philadelphia. Twin-to-Twin Transfusion Syndrome.',
      url: 'https://www.chop.edu/conditions-diseases/twin-twin-transfusion-syndrome',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Twin-to-Twin Transfusion Syndrome: Outcomes and Long-Term Follow-Up. Frontiers in Pediatrics, 2022.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/35087780/',
    },
    {
      org: 'TTTS Foundation',
      citation:
        'The Twin to Twin Transfusion Syndrome Foundation. About TTTS.',
      url: 'https://www.tttsfoundation.org/about-ttts/',
    },
  ],
};
