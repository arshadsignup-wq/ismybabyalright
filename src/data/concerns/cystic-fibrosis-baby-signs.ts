import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'cystic-fibrosis-baby-signs',
  title: 'Cystic Fibrosis Signs in Babies',
  category: 'medical',
  searchTerms: [
    'cystic fibrosis baby signs',
    'baby salty skin',
    'baby not gaining weight despite eating',
    'baby greasy foul smelling stool',
    'CF newborn screening positive',
    'baby chronic cough and poor growth',
    'meconium ileus baby',
    'cystic fibrosis symptoms infant',
    'baby recurrent respiratory infections',
  ],
  quickAnswer:
    'Cystic fibrosis (CF) is an inherited condition that causes thick, sticky mucus to build up in the lungs and digestive system. It affects about 1 in 3,500 births. Newborn screening detects most cases, and early treatment with airway clearance, enzymes, nutrition support, and newer CFTR modulator drugs has dramatically improved life expectancy and quality of life for people with CF.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Some babies with CF present at birth with meconium ileus — a bowel obstruction caused by thick meconium — which requires surgical treatment. Most cases are now detected through newborn screening (elevated immunoreactive trypsinogen) followed by a sweat test for confirmation. Early signs include poor weight gain despite a good appetite, frequent greasy or foul-smelling stools, and a salty taste to the skin when kissed.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies diagnosed with CF are started on pancreatic enzyme replacement to help digest fats and proteins, along with fat-soluble vitamins. Chest physiotherapy or airway clearance techniques begin early to keep lungs clear. Babies may develop their first respiratory infections during this period. Good nutrition and caloric intake are critical — babies with CF often need high-calorie formulas.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby grows, CF management becomes part of daily life. Regular clinic visits (typically every 1-3 months) monitor lung function, weight gain, and overall health. Babies may experience recurrent coughs, wheezing, or respiratory infections. Close attention to growth is important, as maintaining good nutrition directly impacts lung health and overall outcomes.',
    },
    {
      ageRange: '12 months+',
      context:
        'For eligible children, CFTR modulator therapies (such as elexacaftor/tezacaftor/ivacaftor, recently approved for ages as young as 2) have been transformative, significantly improving lung function and reducing complications. Toddlers with CF can be active and developmentally on track with proper management. The care team typically includes pulmonologists, dietitians, respiratory therapists, and social workers.',
    },
  ],
  whenNormal: [
    'Your baby\'s newborn screening and follow-up sweat test were normal',
    'Your baby has occasional loose stools that are not greasy or excessively foul-smelling',
    'Your baby gains weight appropriately and has typical respiratory health',
    'Your baby with CF is on treatment and gaining weight well with stable lung health',
  ],
  whenToMention: [
    'Your baby has persistently greasy, bulky, foul-smelling stools and is not gaining weight despite eating well',
    'Your baby\'s newborn screening showed an elevated IRT (immunoreactive trypsinogen) and you are awaiting confirmatory testing',
    'Your baby has a chronic cough or frequent respiratory infections that seem more severe than typical infant illnesses',
  ],
  whenToActNow: [
    'Your newborn has not passed meconium within 48 hours and has a distended abdomen — this could indicate meconium ileus requiring emergency treatment',
    'Your baby with CF is in respiratory distress with rapid breathing, retractions, or blue lips — seek emergency care immediately',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Heart, Lung, and Blood Institute. Cystic Fibrosis. NHLBI, 2023.',
      url: 'https://www.nhlbi.nih.gov/health/cystic-fibrosis',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Cystic Fibrosis. CDC, 2024.',
      url: 'https://www.cdc.gov/genomics/disease/cystic_fibrosis.htm',
    },
  ],
};
