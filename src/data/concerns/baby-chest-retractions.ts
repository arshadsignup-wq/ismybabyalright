import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-chest-retractions',
  title: 'Baby Chest Retractions',
  category: 'medical',
  searchTerms: [
    'baby chest retractions',
    'baby ribs showing when breathing',
    'baby breathing hard ribs pulling in',
    'chest retractions infant',
    'baby labored breathing',
    'baby stomach going in and out breathing',
    'intercostal retractions baby',
    'baby breathing difficulty signs',
    'baby using belly to breathe',
  ],
  quickAnswer:
    'Chest retractions occur when the skin between or below the ribs pulls inward with each breath, indicating that your baby is working harder than normal to breathe. This is a sign of respiratory distress that should always be taken seriously. Retractions can be caused by bronchiolitis, croup, asthma, pneumonia, or other respiratory conditions. If you can see your baby\'s ribs clearly pulling in with each breath, contact your pediatrician or seek emergency care.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young infants have very flexible ribcages, so mild subcostal (below the ribs) retractions can occasionally be seen even with normal breathing. However, visible intercostal retractions (between ribs), suprasternal retractions (above the collarbones), or substernal retractions (below the breastbone) are always abnormal and indicate significant breathing difficulty. In newborns, retractions along with grunting and nasal flaring form the classic triad of respiratory distress.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Retractions at this age are most commonly caused by viral respiratory infections like RSV bronchiolitis. The small airways of babies can become blocked by mucus and inflammation, forcing them to work harder to breathe. If your baby has retractions along with wheezing, rapid breathing, poor feeding, or fever, they need medical evaluation. Mild retractions may be monitored at home if feeding is adequate, but worsening retractions require urgent care.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Retractions during a respiratory illness indicate that the illness is more than a simple cold. Common causes include bronchiolitis, croup, and reactive airway disease. Look at your baby while they are calm and the shirt is off -- visible retractions during quiet breathing are more concerning than retractions only during crying. If retractions are present when your baby is calm, or are accompanied by very fast breathing, seek medical attention promptly.',
    },
    {
      ageRange: '12 months+',
      context:
        'In toddlers, retractions can occur with croup, asthma exacerbations, pneumonia, or foreign body aspiration. If your toddler suddenly develops breathing difficulty with retractions without a preceding illness, consider the possibility that they may have inhaled a small object. Any new-onset severe retractions with or without choking history warrant immediate medical evaluation.',
    },
  ],
  whenNormal: [
    'Very mild movement below the ribs in a newborn during calm breathing that does not worsen',
    'Baby breathes comfortably with normal rate and no visible rib pulling during feeds or sleep',
    'Temporary mild retractions during hard crying that resolve when baby calms down',
    'Ribs are slightly visible in a thin baby without actual pulling-in motion during breathing',
  ],
  whenToMention: [
    'You notice mild retractions during a respiratory illness but baby is still feeding and alert',
    'Baby has occasional retractions that come and go with a cold',
    'You are unsure if what you are seeing is retractions or normal rib visibility',
  ],
  whenToActNow: [
    'Baby has clear, persistent chest retractions visible between or below the ribs during calm breathing -- seek immediate medical care',
    'Baby has retractions along with grunting, nasal flaring, very rapid breathing, or color changes (blue or pale) -- call 911',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Signs of Respiratory Distress in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Signs-of-Respiratory-Distress.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Intercostal Retractions. MedlinePlus, NIH.',
      url: 'https://medlineplus.gov/ency/article/003322.htm',
    },
  ],
};
