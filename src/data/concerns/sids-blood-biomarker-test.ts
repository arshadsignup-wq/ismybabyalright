import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'sids-blood-biomarker-test',
  title: 'SIDS Blood Biomarker Research: What We Know',
  category: 'medical',
  searchTerms: [
    'SIDS blood test',
    'SIDS biomarker',
    'SIDS blood marker',
    'butyrylcholinesterase SIDS',
    'BChE SIDS test',
    'SIDS prediction test',
    'SIDS screening blood',
    'can SIDS be detected',
    'SIDS cause found',
    'SIDS research breakthrough',
  ],
  quickAnswer:
    'In 2022, Australian researchers published a study identifying lower levels of butyrylcholinesterase (BChE) in dried blood spots of babies who later died of SIDS compared to controls. While this research generated enormous interest and hope, it is still in very early stages and no validated screening test currently exists. The findings need replication in larger studies before any clinical test could be developed. The best current protection remains following AAP safe sleep guidelines: back to sleep, firm flat surface, room-sharing without bed-sharing.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'This is the highest-risk period for SIDS, with peak incidence between 2 and 4 months. The BChE biomarker research suggests that some SIDS cases may involve an underlying biological vulnerability in arousal mechanisms. However, no blood test can currently predict or prevent SIDS. While researchers work toward a potential screening tool, the most protective actions you can take right now are following safe sleep guidelines rigorously: always place your baby on their back, use a firm flat mattress with no loose bedding, room-share without bed-sharing, offer a pacifier at sleep time, and avoid overheating.',
    },
    {
      ageRange: '6-12 months',
      context:
        'SIDS risk decreases after 6 months but does not disappear entirely. Continue safe sleep practices through the first birthday. The biomarker research is part of a broader scientific effort to understand why some babies have impaired arousal responses during sleep. Other research has examined serotonin system abnormalities and brainstem differences in SIDS victims. Understanding the biological mechanisms may eventually lead to screening tests, but currently the science is not there yet. Be cautious of products marketed as SIDS prevention devices, as none have been proven effective.',
    },
    {
      ageRange: 'Research timeline',
      context:
        'Turning a promising biomarker finding into a validated clinical test is a long process that typically takes many years. The original BChE study was relatively small and needs replication in diverse, larger populations. Even if confirmed, developing a reliable screening test, establishing clinical cutoff values, and determining appropriate interventions would all need to be addressed. In the meantime, the most effective SIDS prevention strategies remain behavioral: safe sleep positioning, smoke-free environment, breastfeeding, immunizations, and room-sharing. These measures have already reduced SIDS rates by over 50% since 1994.',
    },
  ],
  whenNormal: [
    'Feeling anxious about SIDS and wanting to learn about the latest research',
    'Following safe sleep guidelines and taking appropriate precautions',
    'Being curious about whether a predictive test exists yet',
  ],
  whenToMention: [
    'You have significant anxiety about SIDS that is affecting your sleep or functioning',
    'You want to discuss your baby\'s individual risk factors for SIDS',
    'You want to review your sleep setup with your pediatrician to ensure it meets safe sleep guidelines',
    'You have a family history of SIDS and want to discuss any additional precautions',
  ],
  whenToActNow: [
    'You find your baby unresponsive, not breathing, or blue - call 911 immediately and begin infant CPR',
    'Your baby has an apparent life-threatening event (ALTE) or brief resolved unexplained event (BRUE): sudden change in breathing, color, or tone',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'sids-genetic-link-hadha-gene',
    'sudden-unexpected-infant-death-prevention',
    'safe-sleep-social-media-misinformation',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'Harrington CT, et al. Butyrylcholinesterase Is a Potential Biomarker for Sudden Infant Death Syndrome. eBioMedicine, 2022.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/35605426/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sleep-Related Infant Deaths: Updated 2022 Recommendations. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Child Health and Human Development. SIDS Research. NICHD, 2024.',
      url: 'https://safetosleep.nichd.nih.gov/research',
    },
  ],
};
