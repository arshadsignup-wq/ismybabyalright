import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'sids-genetic-link-hadha-gene',
  title: 'SIDS and Genetics: The HADHA Gene Research',
  category: 'medical',
  searchTerms: [
    'SIDS genetic link',
    'HADHA gene SIDS',
    'SIDS hereditary',
    'genetic cause SIDS',
    'SIDS runs in families',
    'fatty acid oxidation SIDS',
    'MCAD deficiency SIDS',
    'SIDS metabolic cause',
    'genetic testing SIDS prevention',
    'SIDS gene research',
  ],
  quickAnswer:
    'Research has identified links between certain genetic variants and increased SIDS risk, including variants in the HADHA gene (involved in fatty acid oxidation) and genes related to cardiac ion channels, serotonin signaling, and immune function. Fatty acid oxidation disorders, detectable through newborn screening, account for a small percentage of previously unexplained infant deaths. However, SIDS is likely multifactorial, involving a vulnerable infant, a critical developmental period, and an external stressor. Genetic factors may increase vulnerability but are rarely the sole cause.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'The triple risk model for SIDS proposes that deaths occur when three factors converge: an underlying vulnerability (which may include genetic predisposition), a critical developmental period (peak SIDS risk is 2-4 months), and an external stressor (unsafe sleep environment, overheating, respiratory infection). Research on the HADHA gene and other fatty acid oxidation genes has shown that defects in mitochondrial fatty acid metabolism can impair the body\'s ability to respond to metabolic stress during sleep. Newborn metabolic screening (done at birth in all US states) can detect many of these disorders.',
    },
    {
      ageRange: 'Genetic research context',
      context:
        'Multiple genetic pathways have been implicated in SIDS vulnerability. Cardiac channelopathies (variants in SCN5A, KCNQ1, KCNH2 genes) may cause fatal heart rhythm abnormalities during sleep. Serotonin system variants may impair the brainstem\'s ability to arouse a baby from sleep when oxygen levels drop. Immune response genes may increase vulnerability to infections that trigger SIDS. However, carrying a genetic variant associated with SIDS risk does not mean a baby will die. Environmental factors and safe sleep practices remain the most modifiable risk factors.',
    },
    {
      ageRange: 'Family implications',
      context:
        'If a family has experienced a SIDS loss, the recurrence risk for subsequent siblings is slightly elevated but still very low (approximately 5-6 times the general population risk, which translates to roughly 1 in 1,000 to 1 in 2,000). Genetic counseling may be offered, and some families pursue molecular autopsy or genetic testing. For subsequent babies, providers may recommend home apnea monitoring (though its ability to prevent SIDS is unproven), strict safe sleep practices, and closer medical follow-up. Support organizations like First Candle can provide both emotional support and practical guidance.',
    },
  ],
  whenNormal: [
    'Wanting to understand the latest SIDS research and genetic findings',
    'Your newborn\'s metabolic screening (heel prick test) was normal',
    'Having general anxiety about SIDS as a new parent',
  ],
  whenToMention: [
    'You have a family history of SIDS or unexplained infant death',
    'Your baby\'s newborn screening flagged a metabolic disorder',
    'You want to discuss whether genetic testing is appropriate for your family',
    'You have significant anxiety about SIDS that is affecting your daily functioning',
  ],
  whenToActNow: [
    'You find your baby unresponsive, not breathing, or blue - call 911 and begin infant CPR',
    'Your baby has a sudden episode of going limp, turning blue, or stopping breathing',
    'Your newborn screening results indicate a fatty acid oxidation disorder - follow up with your pediatrician immediately',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'sids-blood-biomarker-test',
    'sudden-unexpected-infant-death-prevention',
    'safe-sleep-social-media-misinformation',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'Opdal SH, Rognum TO. Gene Variants Predisposing to SIDS: Current Knowledge and Future Directions. Acta Paediatrica, 2011.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/21284718/',
    },
    {
      org: 'NIH',
      citation:
        'Filiano JJ, Kinney HC. A Perspective on Neuropathologic Findings in Victims of SIDS: The Triple-Risk Model. Biology of the Neonate, 1994.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/7619987/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sleep-Related Infant Deaths: Updated 2022 Recommendations. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022',
    },
  ],
};
