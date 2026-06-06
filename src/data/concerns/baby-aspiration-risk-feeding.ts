import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-aspiration-risk-feeding',
  title: 'Could My Baby Be Aspirating During Feeding?',
  category: 'feeding',
  searchTerms: ['baby aspiration feeding', 'baby food into lungs', 'aspiration risk baby', 'baby inhaling food', 'baby choking aspirating', 'silent aspiration baby', 'food in baby airway', 'aspiration pneumonia baby', 'baby wet voice after eating', 'baby coughing during every feed'],
  quickAnswer: 'Aspiration occurs when food or liquid enters the airway instead of the esophagus. Signs include coughing or choking during every feed, a wet or gurgly voice after eating, recurrent chest infections, and breathing changes during meals. Silent aspiration can occur without obvious coughing. If you suspect aspiration, contact your pediatrician as a swallowing study can diagnose it.',
  byAge: [
    { ageRange: '0-3 months', context: 'Aspiration risk is higher in premature babies and those with neurological conditions. Signs include coughing, choking, or color changes during bottle or breast feeds. If baby frequently struggles during feeds, discuss with your pediatrician.' },
    { ageRange: '4-6 months', context: 'If baby coughs or chokes on thin liquids consistently, mention it. Some babies need thickened feeds to prevent aspiration. An SLP or pediatric GI specialist can evaluate.' },
    { ageRange: '6-9 months', context: 'As textures are introduced, occasional gagging is normal but consistent coughing, wet voice, or breathing changes during meals are not. These warrant evaluation.' },
    { ageRange: '9-12 months', context: 'If baby coughs during every meal with both liquids and solids, aspirates visibly, or has recurrent respiratory infections, a modified barium swallow study may be recommended.' },
    { ageRange: '12-24 months', context: 'Ongoing aspiration risk requires management by a feeding team. Texture modifications, positioning changes, and sometimes thickened liquids are used to keep feeding safe.' },
  ],
  whenNormal: ['Baby occasionally coughs during a feed but clears it easily', 'Baby gags on new textures but then swallows successfully', 'Baby has rare isolated choking episodes with specific foods'],
  whenToMention: ['Baby coughs or chokes during most feeds', 'Baby has a wet or gurgly voice after eating or drinking', 'Baby has had recurrent chest infections or pneumonia', 'Baby seems to avoid drinking or eating due to coughing'],
  whenToActNow: ['Baby is turning blue or cannot breathe during feeding', 'Baby has a severe choking episode requiring emergency intervention', 'Baby has fever and respiratory distress that may indicate aspiration pneumonia'],
  relatedMilestones: ['feeding'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-swallowing-difficulty-dysphagia', 'speech-therapy-feeding-swallowing', 'thickened-feeds-baby'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Swallowing Problems in Children. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Pediatric Aspiration and Swallowing Disorders. Pediatric Pulmonology, 2020.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
