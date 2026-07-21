import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'congenital-lobar-emphysema-baby',
  title: 'Congenital Lobar Emphysema (Overinflation) in Babies',
  category: 'medical',
  searchTerms: [
    'congenital lobar emphysema baby',
    'congenital lobar overinflation',
    'hyperinflated lung lobe baby',
    'baby wheezing breathing fast one lung',
    'newborn one lung overinflated',
    'congenital lobar emphysema surgery',
    'baby trapped air lung',
    'congenital lobar emphysema symptoms',
    'baby breathing difficulty lung overexpansion',
    'lobectomy baby lung',
  ],
  quickAnswer:
    'Congenital lobar emphysema (also called congenital lobar overinflation) is a condition in which one lobe of the lung becomes progressively hyperinflated, trapping air and compressing the surrounding normal lung tissue. It usually presents in the first 6 months of life with tachypnea (rapid breathing), wheezing, and respiratory distress. The upper lobes are most commonly affected. Mild cases may be observed, while severe cases require surgical removal of the affected lobe (lobectomy).',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Congenital lobar emphysema can present at birth or within the first weeks of life. About half of cases are diagnosed in the neonatal period. The newborn may have tachypnea (rapid breathing), mild to severe respiratory distress, wheezing, or cyanosis. A chest X-ray typically shows hyperinflation of one lobe with compression of adjacent lung tissue and possible mediastinal shift (the heart and structures in the center of the chest being pushed to the opposite side). In severe cases causing significant respiratory distress, emergency surgical lobectomy may be required.',
    },
    {
      ageRange: '1-6 months',
      context:
        'This is the most common window for congenital lobar emphysema to become symptomatic. As the baby grows and becomes more active, the progressive air trapping in the affected lobe may worsen. Parents may notice rapid breathing, wheezing, difficulty feeding, or poor weight gain. The left upper lobe is most commonly affected, followed by the right middle lobe. A CT scan of the chest is typically performed to confirm the diagnosis and plan surgical approach. If symptoms are significant and progressive, surgical lobectomy is recommended.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Some milder cases of congenital lobar emphysema may not become apparent until later infancy. The baby may have recurrent episodes of wheezing or respiratory distress that may initially be attributed to viral infections or asthma. If your baby has persistent wheezing that does not respond to bronchodilators or recurring respiratory problems, a chest X-ray and CT scan should be performed to evaluate for structural causes including congenital lobar emphysema.',
    },
    {
      ageRange: '1 year+',
      context:
        'Rarely, mild congenital lobar emphysema may be diagnosed beyond infancy, either incidentally on imaging or during evaluation for chronic respiratory symptoms. Children who have undergone lobectomy for congenital lobar emphysema generally have excellent outcomes with normal exercise tolerance and lung function, as the remaining lung lobes compensate through growth and expansion. Long-term follow-up with periodic assessments of lung function is recommended. Children with mild, stable disease who are managed conservatively also tend to do well with careful monitoring.',
    },
  ],
  whenNormal: [
    'Your baby had mild transient rapid breathing after birth that resolved within a few hours without intervention',
    'Your baby has occasional wheezing during viral respiratory infections that resolves completely between illnesses',
    'Your child had a lobectomy for congenital lobar emphysema and has recovered with normal breathing and activity',
    'A mild finding on chest imaging was evaluated by a pediatric pulmonologist and deemed stable and not requiring intervention',
  ],
  whenToMention: [
    'Your baby has persistent rapid breathing or mild wheezing that does not seem to be related to a cold or infection',
    'Your baby wheezes frequently and asthma treatments do not seem to help',
    'Your baby seems to tire easily during feeds or is not gaining weight as expected along with respiratory symptoms',
    'A chest X-ray or CT scan showed an overinflated or hyperinflated area in your baby\'s lung and you want to discuss what it means',
  ],
  whenToActNow: [
    'Your baby has sudden onset of severe respiratory distress with rapid breathing, chest retractions (skin pulling in between ribs), nasal flaring, or cyanosis (blue color), as this may indicate acute compression of normal lung tissue and requires emergency evaluation',
    'Your baby with known congenital lobar emphysema has worsening breathing difficulty, is unable to feed, or appears limp and unresponsive',
    'Your baby has a sudden increase in wheezing with labored breathing that does not improve with rest or prescribed treatments',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-breathing-fast', 'wheezing', 'baby-chest-retractions'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Congenital Lung Lesions. NeoReviews, 2019.',
      url: 'https://publications.aap.org/neoreviews/article/20/7/e400/80043/Congenital-Lung-Malformations',
    },
    {
      org: 'ATS',
      citation:
        'American Thoracic Society. Evaluation and Management of Congenital Lung Malformations. Proceedings of the American Thoracic Society, 2006.',
      url: 'https://www.atsjournals.org/doi/full/10.1164/rccm.200607-1005PP',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Congenital Lobar Emphysema. StatPearls, 2024.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK560488/',
    },
  ],
};
