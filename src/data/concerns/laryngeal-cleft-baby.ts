import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'laryngeal-cleft-baby',
  title: 'Laryngeal Cleft in My Baby',
  category: 'medical',
  searchTerms: [
    'laryngeal cleft baby',
    'baby choking every feed',
    'baby aspirating milk',
    'laryngeal cleft infant',
    'baby food going into airway',
    'laryngotracheoesophageal cleft',
    'baby recurrent aspiration pneumonia',
    'baby coughing choking every bottle',
    'cleft between larynx esophagus baby',
    'type 1 laryngeal cleft',
  ],
  quickAnswer:
    'A laryngeal cleft is a rare congenital gap between the larynx (voice box) and esophagus (food pipe) that allows food and liquid to pass into the airway during swallowing. Symptoms include chronic coughing or choking during feeds, wet or gurgly breathing after eating, and recurrent pneumonia from aspiration. Laryngeal clefts are graded Type 1 through Type 4 by severity. Diagnosis requires microlaryngoscopy under anesthesia. Treatment ranges from feeding modifications and injection laryngoplasty for mild cases to open surgical repair for more severe types.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Laryngeal clefts may present in the newborn period with chronic coughing, choking, or color changes during feeds. Some babies have a wet, gurgly sound to their breathing after eating. Mild (Type 1) clefts are often not diagnosed immediately because symptoms overlap with reflux or normal newborn feeding difficulties. If your baby chokes with every feed, has recurrent respiratory infections, or is not gaining weight, a swallow study followed by microlaryngoscopy may be recommended.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies with undiagnosed laryngeal clefts may have ongoing feeding difficulties, frequent "chest colds," or persistent wet-sounding breathing. A modified barium swallow study may show aspiration of thin liquids. If aspiration is confirmed, thickening feeds can help while further evaluation is pursued. Your pediatrician may refer you to a pediatric ENT and a feeding specialist for comprehensive assessment.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby starts solid foods, symptoms may change. Some babies with mild clefts do better with thicker consistencies but still struggle with thin liquids. Recurrent pneumonia or chronic cough that does not respond to usual treatments should raise suspicion for a laryngeal cleft. Diagnosis at this age requires microlaryngoscopy and bronchoscopy under general anesthesia, which allows the ENT to directly visualize and palpate the area between the larynx and esophagus.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Some mild Type 1 laryngeal clefts are not diagnosed until toddlerhood, especially if symptoms were attributed to reflux or allergies. Persistent aspiration despite thickened feeds, recurrent lower respiratory infections, or chronic cough during meals warrant evaluation. Type 1 clefts can often be repaired with injection laryngoplasty (a minimally invasive procedure), while Types 2-4 require open surgical repair. After repair, many children show significant improvement in feeding and respiratory health.',
    },
  ],
  whenNormal: [
    'Your baby occasionally coughs during feeds but is gaining weight well and has no respiratory infections.',
    'Your baby had a mild choking episode once but feeds normally otherwise.',
    'Your baby has been evaluated with a swallow study and shows no aspiration.',
    'Your baby has a diagnosed Type 1 cleft that was repaired and is feeding well post-procedure.',
  ],
  whenToMention: [
    'Your baby coughs or chokes with most feeds, especially with thin liquids.',
    'Your baby has a wet, gurgly voice or breathing sound after eating.',
    'Your baby has had more than one episode of pneumonia or bronchitis in their first year.',
    'Your baby is not gaining weight despite adequate intake and you suspect feeding-related problems.',
  ],
  whenToActNow: [
    'Your baby turns blue or stops breathing during a feeding episode -- call 911.',
    'Your baby has signs of pneumonia: fever, rapid breathing, retractions, and persistent cough -- seek immediate medical care.',
    'Your baby is in severe respiratory distress with labored breathing and poor oxygen levels.',
    'Your baby is unable to feed at all due to choking and is becoming dehydrated.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-aspiration-during-feeding',
    'baby-coughing-while-feeding',
    'baby-choking-on-liquids',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Laryngeal Cleft: Diagnosis and Management. Pediatrics, 2019.',
      url: 'https://publications.aap.org/pediatrics/article/143/Supplement_1/S4/76827/Laryngeal-Cleft',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Laryngeal Cleft. Genetic and Rare Diseases Information Center, 2023.',
      url: 'https://rarediseases.info.nih.gov/diseases/10704/laryngeal-cleft',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Aspiration in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Aspiration.aspx',
    },
  ],
};
