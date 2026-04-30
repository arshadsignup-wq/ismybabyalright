import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-choking-on-liquids',
  title: 'Baby Choking or Coughing on Milk or Liquids',
  category: 'feeding',
  searchTerms: ['baby choking on milk', 'baby coughing while drinking', 'milk coming out baby nose', 'baby sputtering when feeding', 'baby choking on breast milk', 'baby choking on bottle', 'baby gulping and choking', 'newborn choking on milk', 'baby gagging on liquids', 'baby aspirating milk'],
  quickAnswer: 'It is common for babies to occasionally cough, sputter, or have milk come out of their nose during feeding, especially in the early weeks. This usually happens because of a fast milk flow (letdown), an immature swallowing coordination, or feeding in a position that is too reclined. Occasional choking episodes during feeding that resolve quickly are usually not serious. Adjusting feeding position, pacing the feed, and using a slower-flow nipple can help.',
  byAge: [
    { ageRange: '0-3 months', context: 'Newborns are still learning to coordinate sucking, swallowing, and breathing. Occasional choking or sputtering is very common, especially during a strong letdown for breastfed babies or with a fast-flow bottle nipple. Milk coming out of the nose happens because the back of the nose and throat are connected. Hold your baby more upright during feeding, take breaks, and use a slow-flow nipple for bottles.' },
    { ageRange: '3-6 months', context: 'Feeding coordination improves significantly by this age. If your baby is still frequently choking or coughing during feeds, it may indicate a structural issue like laryngomalacia (floppy airway) or dysphagia (swallowing difficulty). Persistent choking, wet or gurgly breathing after feeds, or frequent pneumonia should be evaluated.' },
    { ageRange: '6-12 months', context: 'As babies start drinking from cups, occasional choking on liquids is normal as they learn a new drinking method. Open cup practice with small sips can help develop the skill. If your baby has always had difficulty with liquids and continues to choke frequently, a swallowing evaluation (video fluoroscopic swallow study) may be recommended.' },
  ],
  whenNormal: ['Occasional sputtering during a fast letdown or at the start of a feeding', 'Milk coming out of the nose once in a while during feeding', 'Brief coughing that resolves on its own within seconds', 'Mild choking when learning to drink from a new type of cup'],
  whenToMention: ['Choking or coughing happens at most feeds rather than occasionally', 'Your baby seems to have a wet, gurgly voice or breathing after feeds', 'Your baby is not gaining weight well and also has feeding difficulty', 'Milk frequently comes out of the nose with every feed'],
  whenToActNow: ['Your baby turns blue, goes limp, or stops breathing during a feeding', 'Your baby has recurrent pneumonia or respiratory infections (could indicate aspiration)', 'Your baby chokes and cannot recover - is coughing for more than a minute or having breathing difficulty', 'Your baby has been diagnosed with a swallowing problem and symptoms are worsening'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['aspiration-during-feeding', 'baby-coughing-while-feeding', 'baby-gulping-air', 'paced-bottle-feeding-concerns'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Choking Prevention. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Choking-Prevention.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Breastfeeding and Overactive Letdown.', url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Pediatric Dysphagia.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK559005/' },
  ],
};
