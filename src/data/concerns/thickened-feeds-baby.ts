import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'thickened-feeds-baby',
  title: 'Should My Baby\'s Feeds Be Thickened?',
  category: 'feeding',
  searchTerms: ['thickened feeds baby', 'thickening formula', 'thickening breast milk', 'rice cereal in bottle', 'oatmeal in bottle', 'gel thickener baby', 'thickened feeds reflux', 'thickened feeds aspiration', 'SimplyThick baby', 'thickening baby milk'],
  quickAnswer: 'Thickened feeds are sometimes recommended for babies with reflux or swallowing difficulties (dysphagia) to reduce spitting up or prevent aspiration. Thickening should only be done under medical guidance, as improper thickening can pose risks. Options include adding rice or oatmeal cereal to bottles or using commercial gel thickeners. Never thicken feeds without your pediatrician\'s recommendation.',
  byAge: [
    { ageRange: '0-3 months', context: 'Thickened feeds may be recommended for young babies with significant reflux or confirmed aspiration risk. Gel-based thickeners are sometimes used but should only be given under strict medical supervision, as some products carry safety concerns for very young infants.' },
    { ageRange: '4-6 months', context: 'If your baby continues to spit up significantly or has a confirmed swallowing disorder, your doctor may recommend adding a small amount of infant oatmeal cereal to bottles. The amount and type of thickener should be specified by your healthcare provider.' },
    { ageRange: '6-9 months', context: 'As solids are introduced, some babies with swallowing difficulties may need thickened liquids alongside their solid foods. A speech-language pathologist can determine the appropriate liquid consistency for safe swallowing.' },
    { ageRange: '9-12 months', context: 'If a swallowing study has shown aspiration with thin liquids, thickened liquids may be prescribed at a specific consistency (nectar-thick, honey-thick). Follow the SLP\'s guidance exactly for the safest feeding.' },
    { ageRange: '12-24 months', context: 'Some toddlers continue to need thickened liquids for safe swallowing. Periodic re-evaluation with swallowing studies helps determine when it is safe to transition back to thin liquids. Many children outgrow the need for thickening.' },
  ],
  whenNormal: ['Baby spits up occasionally but is growing well without thickened feeds', 'Baby manages thin liquids without coughing or choking', 'Baby has mild reflux that is managed with positioning and smaller feeds'],
  whenToMention: ['Baby coughs or chokes frequently during bottle feeds', 'Baby has significant reflux that is not improving with standard measures', 'A swallowing evaluation has been recommended', 'Baby is not gaining weight well despite adequate intake volume'],
  whenToActNow: ['Baby turns blue or stops breathing during feeds', 'Baby has recurrent pneumonia that may be caused by aspiration', 'Baby cannot keep any feeds down and is becoming dehydrated'],
  relatedMilestones: ['feeding'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-aspiration-risk-feeding', 'baby-swallowing-difficulty-dysphagia', 'speech-therapy-feeding-swallowing'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Thickening Feeds for Infant Reflux. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Management of Pediatric Dysphagia: Thickened Liquids and Texture Modification. Dysphagia, 2021.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
