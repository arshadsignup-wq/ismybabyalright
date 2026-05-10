import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'oxygen-saturation-baby-normal',
  title: 'Normal Oxygen Saturation in Babies',
  category: 'medical',
  searchTerms: [
    'normal oxygen level baby',
    'baby oxygen saturation',
    'pulse oximeter reading baby',
    'baby SpO2 normal range',
    'low oxygen baby',
    'oxygen level newborn normal',
    'baby pulse ox reading',
    'when to worry about baby oxygen levels',
  ],
  quickAnswer:
    'Normal oxygen saturation (SpO2) in healthy babies and children is 95-100%. Readings below 95% in a baby who was born healthy and at term may indicate a problem and should be evaluated by a medical professional. Pulse oximeters sold for home use can be inaccurate, especially with movement, cold hands/feet, or poor sensor placement. If you are concerned about your baby\'s breathing, focus on clinical signs (color, breathing effort, alertness) rather than relying solely on a home pulse oximeter.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In the first 24 hours of life, oxygen saturation normally transitions from lower levels in the womb to 95% or above. Newborn screening includes a pulse oximetry test to check for critical congenital heart defects. After the initial transition, healthy newborns should maintain SpO2 above 95%. Home pulse oximeters are not recommended for routine newborn monitoring because false readings can cause unnecessary anxiety or, conversely, false reassurance.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Healthy babies at this age should consistently have oxygen levels of 95-100%. During respiratory illnesses like bronchiolitis, oxygen levels may drop, which is one reason doctors check SpO2 in the office or ER. If you have a home pulse oximeter and get a reading below 95% on a baby who appears well, try repositioning the sensor and rechecking when the baby is calm and warm. Persistently low readings warrant a call to your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Normal SpO2 continues to be 95-100%. During sleep, readings may dip slightly (to 93-95% briefly) which can be normal, but sustained levels below 95% are not. If your baby is sick and you are monitoring at home, focus more on how your baby looks and acts than on the number: comfortable breathing, good color, alert when awake, and adequate feeding are reassuring signs regardless of what the number reads.',
    },
    {
      ageRange: '12 months+',
      context:
        'Normal oxygen saturation in toddlers is the same as in older children and adults: 95-100%. If your toddler has a chronic respiratory condition like asthma, your pediatrician may recommend pulse oximetry monitoring during flares. Always use the oximeter as directed, on a warm finger or toe, with the child calm and still. SpO2 readings should be interpreted alongside clinical assessment, not in isolation.',
    },
  ],
  whenNormal: [
    'Pulse oximeter reads 95-100% on a calm, warm baby',
    'Brief dip to 93-94% during movement or repositioning that quickly returns above 95%',
    'Baby has good pink color, is breathing comfortably, and is feeding well',
    'Slightly variable readings on a home pulse oximeter in an otherwise healthy-appearing baby',
  ],
  whenToMention: [
    'Home pulse oximeter consistently reads below 95% even when baby is calm and sensor is well-placed',
    'Your baby seems to have blue or dusky color around the lips or nail beds',
    'Your baby has a respiratory illness and you want guidance on what oxygen levels to monitor',
  ],
  whenToActNow: [
    'Pulse oximeter reads below 90% and your baby has any signs of breathing difficulty -- seek emergency care immediately',
    'Baby\'s lips, tongue, or skin appear blue or very pale regardless of oximeter reading -- call 911',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Newborn Screening: Pulse Oximetry. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Newborn-Screening-Tests.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Heart, Lung, and Blood Institute. Pulse Oximetry. NHLBI, NIH.',
      url: 'https://www.nhlbi.nih.gov/health/pulse-oximetry',
    },
  ],
};
