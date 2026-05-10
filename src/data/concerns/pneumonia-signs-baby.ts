import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pneumonia-signs-baby',
  title: 'Pneumonia Signs in Babies',
  category: 'medical',
  searchTerms: [
    'pneumonia signs baby',
    'baby pneumonia symptoms',
    'pneumonia in infants',
    'how to tell if baby has pneumonia',
    'baby pneumonia vs cold',
    'baby chest infection signs',
    'pneumonia emergency signs baby',
    'baby fever and cough pneumonia',
    'baby breathing problems pneumonia',
  ],
  quickAnswer:
    'Pneumonia is an infection of the lungs that can be caused by viruses or bacteria. Signs in babies include fever, fast or labored breathing, persistent cough, chest retractions, nasal flaring, grunting, poor feeding, and appearing more unwell than with a typical cold. If your baby is breathing fast, has visible chest retractions, or seems very sick, contact your pediatrician immediately -- pneumonia needs medical evaluation and may require antibiotics or hospitalization.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Pneumonia in young babies can be serious and may not present with an obvious cough. Key signs include fast breathing (over 60 breaths per minute), grunting with each breath, flaring nostrils, poor feeding, and lethargy. Any fever (100.4 F or higher) in a baby under 3 months requires same-day medical evaluation. Newborns with pneumonia often need hospitalization for monitoring, IV fluids, and antibiotics.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies this age with pneumonia typically have fever, cough, and an increased breathing rate (over 50 breaths per minute when calm). You may notice chest retractions (ribs pulling in with each breath) or hear grunting sounds. Your baby may feed poorly or seem more tired than usual. Pneumonia at this age requires medical evaluation -- your doctor will listen to the lungs and may order a chest X-ray to confirm the diagnosis.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Warning signs of pneumonia include fever that persists or worsens after 3 days, a worsening cough, fast breathing, and increased work of breathing. Bacterial pneumonia often follows a viral cold that seemed to be improving, then suddenly worsens. Your baby may seem sicker than expected for a simple cold. Call your pediatrician if you are concerned -- pneumonia is diagnosed through physical exam and sometimes a chest X-ray.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers with pneumonia may have chest pain, especially with coughing or deep breathing. They may breathe faster than normal (over 40 breaths per minute), refuse to eat, or become unusually clingy and lethargic. Fever is common but not always present. Viral pneumonia may improve with supportive care, while bacterial pneumonia requires antibiotics. Some children develop "walking pneumonia" with a persistent cough but relatively mild illness.',
    },
  ],
  whenNormal: [
    'Child has a cold with cough and mild fever but is breathing comfortably and eating reasonably well',
    'Child is making wet diapers and has some energy to play or interact',
    'Child\'s breathing rate is normal for age when calm (under 40-50 depending on age)',
    'Cold symptoms are gradually improving over 7-10 days',
  ],
  whenToMention: [
    'Child has had a fever for more than 3 days or cold symptoms suddenly worsen after improvement',
    'Child has a persistent cough that keeps them up at night or causes vomiting',
    'Child is eating less than half of normal for more than a day',
  ],
  whenToActNow: [
    'Baby is breathing very fast (over 60 for young infants, over 50 for older babies when calm) with chest retractions or nasal flaring',
    'Child\'s lips or skin turn blue or very pale, or child is extremely lethargic or difficult to wake -- call 911',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Pneumonia in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Pneumonia.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Pneumonia. CDC.',
      url: 'https://www.cdc.gov/pneumonia/index.html',
    },
  ],
};
