import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'laryngeal-cleft-baby-feeding',
  title: 'Laryngeal Cleft (Aspiration During Feeding)',
  category: 'medical',
  searchTerms: [
    'laryngeal cleft baby',
    'baby aspirating during feeds',
    'baby choking every feeding',
    'laryngeal cleft aspiration',
    'baby coughing while drinking milk',
    'recurrent pneumonia baby feeding',
    'laryngotracheoesophageal cleft infant',
    'baby wet breathing after feeding',
    'type 1 laryngeal cleft',
    'baby swallowing problem aspiration',
  ],
  quickAnswer:
    'A laryngeal cleft is a rare congenital abnormality where there is an abnormal opening between the larynx (voice box) and the esophagus (food tube), allowing food and liquid to enter the airway during swallowing. This can cause chronic coughing during feeds, choking, wet or gurgling breathing, and recurrent respiratory infections. Laryngeal clefts are classified into four types based on severity, with Type 1 being the mildest and most common. Diagnosis requires a specialized endoscopic procedure, and treatment ranges from thickening feeds and speech therapy to surgical repair.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'A laryngeal cleft may present in the newborn period with chronic coughing, choking, or color changes during feedings. Babies may have a wet or gurgling voice quality and episodes of desaturation during feeds. Mild clefts (Type 1) can be subtle and easily mistaken for gastroesophageal reflux or a normal swallowing pattern in a newborn. If your baby consistently coughs, chokes, or has breathing difficulty during feeding, your pediatrician may order a modified barium swallow study (MBSS) to check for aspiration.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Ongoing aspiration from a laryngeal cleft can lead to recurrent lower respiratory infections, wheezing, and poor weight gain. If a swallow study shows aspiration, your doctor may recommend thickening breast milk or formula to reduce the risk. A pediatric ENT specialist may perform a microlaryngoscopy and bronchoscopy (MLB) under anesthesia to directly visualize and diagnose the cleft. A probe test during the procedure can confirm the diagnosis, as Type 1 clefts are not always obvious on imaging.',
    },
    {
      ageRange: '6-12 months',
      context:
        'For mild (Type 1) laryngeal clefts, management may include thickened feeds, feeding therapy with a speech-language pathologist, and monitoring for respiratory infections. Some mild clefts improve as the child grows and develops better swallowing coordination. For moderate to severe clefts or those not responding to conservative measures, endoscopic injection laryngoplasty (a minimally invasive surgical repair) may be performed. This procedure has a high success rate for Type 1 clefts.',
    },
    {
      ageRange: '12 months+',
      context:
        'As your child transitions to solid foods, aspiration may become less problematic for mild clefts since solids are easier to control than thin liquids. However, drinking water and thin liquids may continue to cause coughing. Your speech therapist can guide safe feeding practices and textures. For clefts that required surgical repair, follow-up endoscopy ensures the repair is intact. More severe clefts (Types 2-4) require open surgical repair and have a more complex recovery course.',
    },
  ],
  whenNormal: [
    'Baby occasionally coughs during a feeding but quickly recovers and continues eating without distress',
    'Baby has been evaluated with a swallow study showing no aspiration',
    'Your baby is feeding well, gaining weight, and has no recurrent respiratory infections',
  ],
  whenToMention: [
    'Baby consistently coughs, chokes, or gags during every feeding with breast milk, formula, or thin liquids',
    'Baby has a wet or gurgling voice quality after feeds',
    'Baby has had more than one episode of pneumonia or bronchiolitis in a short period',
    'Baby is not gaining weight well despite adequate intake',
  ],
  whenToActNow: [
    'Baby turns blue, becomes limp, or stops breathing during a feeding episode -- call 911',
    'Baby has high fever, rapid breathing, and signs of respiratory distress suggesting pneumonia from aspiration',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['laryngomalacia-floppy-airway', 'tracheomalacia-baby', 'baby-stridor-noisy-breathing'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Evaluation and Management of Aspiration in Infants. Pediatrics in Review.',
      url: 'https://publications.aap.org/pediatricsinreview',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Laryngeal Cleft. StatPearls, NIH.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK544279/',
    },
    {
      org: 'Cincinnati Children\'s',
      citation:
        'Cincinnati Children\'s Hospital. Laryngeal Cleft.',
      url: 'https://www.cincinnatichildrens.org/health/l/laryngeal-cleft',
    },
  ],
};
