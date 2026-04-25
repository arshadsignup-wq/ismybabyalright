import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-breathing-fast',
  title: 'My Baby Is Breathing Fast',
  category: 'medical',
  searchTerms: [
    'baby breathing fast',
    'baby rapid breathing',
    'baby tachypnea',
    'baby breathing rate high',
    'baby breathing 60 breaths per minute',
    'newborn breathing fast',
    'baby panting',
    'baby breathing hard',
    'baby respiratory rate',
    'baby breathing fast while sleeping',
  ],
  quickAnswer:
    'Babies normally breathe faster than adults. A normal respiratory rate for a newborn is 30-60 breaths per minute, slowing to 20-40 by age 1. Brief episodes of faster breathing during excitement, crying, or feeding are normal. However, persistently rapid breathing (tachypnea) at rest, especially with other signs of respiratory distress, may indicate a lung or heart problem that needs prompt evaluation.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Newborns have naturally faster and more irregular breathing than older babies. A normal rate is 30-60 breaths per minute. Periodic breathing (alternating fast and slow breaths with brief pauses) is normal. Transient tachypnea of the newborn (TTN) can occur in the first hours after birth, especially after cesarean delivery, and usually resolves within 24-72 hours. Persistent tachypnea (consistently over 60 breaths per minute at rest) in a newborn may indicate respiratory distress syndrome, pneumonia, congenital heart disease, or metabolic problems and requires immediate medical evaluation.',
    },
    {
      ageRange: '1-6 months',
      context:
        'Normal respiratory rate at this age is about 25-45 breaths per minute. A baby may breathe faster temporarily when excited, during feeding, after crying, or with a stuffy nose. Bronchiolitis (commonly caused by RSV) is a frequent cause of rapid breathing in infants during fall and winter. It typically starts with cold symptoms, then progresses to fast breathing and wheezing. Count your baby\'s breaths for a full 60 seconds when they are calm and resting to get an accurate rate.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Normal respiratory rate slows to about 20-40 breaths per minute. Fast breathing at this age is most commonly caused by viral respiratory infections. Pneumonia can cause persistently rapid breathing along with fever, cough, and decreased feeding. Reactive airway disease (pre-asthma) may cause episodic fast breathing with wheezing during colds. If your baby is consistently breathing faster than 50 breaths per minute at rest, or you see any signs of labored breathing, contact your pediatrician.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Normal respiratory rate is 20-30 breaths per minute. Toddlers with croup, asthma, pneumonia, or other respiratory infections may breathe faster than normal. High fever itself can increase the breathing rate. The key things to watch for are not just the rate but the effort: nasal flaring, belly breathing (the stomach moves more than the chest), retractions (pulling in at the ribs, neck, or belly), and grunting all indicate significant respiratory work.',
    },
  ],
  whenNormal: [
    'Breathing rate is within the normal range for age (30-60 for newborns, 25-45 for young infants, 20-40 for older infants)',
    'Brief episodes of faster breathing during feeding, excitement, or after crying that return to normal at rest',
    'Your baby appears comfortable, is feeding well, and the skin color is normal',
    'Periodic breathing in a newborn (alternating fast and slow breaths with short pauses) with no color changes',
  ],
  whenToMention: [
    'Your baby seems to breathe faster than usual consistently, even at rest, and you are not sure if it is within normal range',
    'Fast breathing occurs during every cold and is accompanied by wheezing or a whistling sound',
    'Your baby\'s breathing rate is at the upper limit of normal and they seem to tire easily during feeds',
  ],
  whenToActNow: [
    'Your baby is breathing more than 60 breaths per minute at rest (for any age), has nasal flaring, chest or belly retractions, grunting with each breath, or head bobbing  -  these are signs of significant respiratory distress requiring emergency care',
    'Fast breathing is accompanied by blue or gray skin color, extreme lethargy, inability to feed, or your baby is struggling to breathe  -  call 911 immediately',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Breathing Problems in Babies.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Breathing-Problems.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Pocket Book of Hospital Care for Children: Tachypnea Thresholds.',
      url: 'https://www.who.int/publications/i/item/978-92-4-154837-3',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Bronchiolitis: Symptoms and Causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/bronchiolitis/symptoms-causes/syc-20351565',
    },
  ],
};
