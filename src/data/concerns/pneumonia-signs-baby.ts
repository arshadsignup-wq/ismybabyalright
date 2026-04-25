import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pneumonia-signs-baby',
  title: 'Signs of Pneumonia in Babies',
  category: 'medical',
  searchTerms: [
    'baby pneumonia symptoms',
    'pneumonia in babies',
    'how to tell if baby has pneumonia',
    'baby pneumonia vs cold',
    'baby chest infection',
    'pneumonia emergency signs baby',
    'baby fever and cough pneumonia',
    'pneumonia treatment baby',
    'baby breathing problems pneumonia',
    'walking pneumonia baby',
  ],
  quickAnswer:
    'Pneumonia is an infection of the lungs that can be caused by viruses or bacteria. Signs include fever, fast or difficult breathing, cough, and appearing more unwell than a typical cold. If your baby is breathing fast, has chest retractions, or seems very sick, contact your pediatrician immediately - pneumonia needs medical evaluation and may require antibiotics or hospitalization.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Pneumonia in young babies can be serious and may not present with obvious cough. Look for fast breathing (over 60 breaths per minute), grunting, flaring nostrils, poor feeding, or lethargy. Any fever in a baby under 3 months requires same-day medical evaluation. Newborns with pneumonia often need hospitalization for monitoring and treatment.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies this age with pneumonia typically have fever, cough, and increased breathing rate (over 50 breaths per minute when calm). You may notice chest retractions (ribs pulling in with each breath) or hear grunting sounds. Your baby may feed poorly or seem more tired than usual. Pneumonia at this age requires medical evaluation - your doctor will listen to your baby\'s lungs and may order a chest X-ray.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Warning signs include fever that persists or worsens after 3 days, worsening cough, fast breathing, and increased work of breathing. Bacterial pneumonia often follows a viral cold that seemed to be improving. Your baby may seem sicker than expected for a simple cold. Call your pediatrician if you\'re concerned - pneumonia is diagnosed through physical exam and sometimes X-ray.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers with pneumonia may complain that their chest hurts, especially with coughing or deep breathing. They may breathe faster than normal (over 40 breaths per minute), refuse to eat, or become unusually clingy and lethargic. Fever is common but not always present. Viral pneumonia can improve with supportive care at home, but bacterial pneumonia requires antibiotics.',
    },
    {
      ageRange: '2 years+',
      context:
        'Older toddlers can sometimes tell you they have chest pain or that it hurts to breathe. Look for persistent fever, worsening cough, fast breathing, or general malaise that seems more severe than a typical cold. Some children develop "walking pneumonia" (milder pneumonia) and seem relatively well despite a persistent cough. Your pediatrician can determine if treatment is needed.',
    },
  ],
  whenNormal: [
    'Your child has a cold with cough and mild fever but is breathing comfortably',
    'Your child is eating and drinking reasonably well and making wet diapers',
    'Your child\'s breathing rate is normal when calm (under 40-50 depending on age)',
    'Your child has some energy and can play or interact, even if more tired than usual',
    'Your child\'s cold symptoms are gradually improving over 5-7 days',
  ],
  whenToMention: [
    'Your child has had a fever for more than 3 days',
    'Your child\'s cold symptoms suddenly worsen after starting to improve',
    'Your child has a persistent cough that keeps them up at night',
    'Your child is eating less than half of normal for more than a day',
    'You\'re worried your child\'s breathing seems faster or harder than usual',
  ],
  whenToActNow: [
    'Your baby is breathing very fast (over 60 breaths per minute for young infants, over 50 for older babies when calm)',
    'Your child\'s chest is pulling in with each breath, ribs are very visible, or nostrils are flaring',
    'Your child\'s lips or skin turn blue or very pale',
    'Your child is working very hard to breathe or making grunting sounds',
    'Your child is extremely lethargic, difficult to wake, or not responding normally',
    'Your baby under 3 months has any fever (100.4°F/38°C or higher)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'WHO',
      citation:
        'World Health Organization. Pneumonia in Children. WHO Fact Sheet, 2023.',
      url: 'https://www.who.int/news-room/fact-sheets/detail/pneumonia',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Pneumonia. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Pneumonia.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Pneumonia. CDC, 2024.',
      url: 'https://www.cdc.gov/pneumonia/index.html',
    },
  ],
};
