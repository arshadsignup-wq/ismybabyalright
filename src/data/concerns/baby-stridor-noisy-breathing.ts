import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-stridor-noisy-breathing',
  title: 'Stridor (Noisy Breathing) in Babies',
  category: 'medical',
  searchTerms: [
    'baby stridor',
    'baby noisy breathing',
    'baby high pitched breathing sound',
    'baby squeaky breathing',
    'stridor infant',
    'baby breathing noise when inhaling',
    'baby whistling sound breathing',
    'inspiratory stridor baby',
  ],
  quickAnswer:
    'Stridor is a high-pitched, squeaky or whistling sound heard when a baby breathes in (and sometimes out). It is caused by narrowing or obstruction of the upper airway. The most common cause in infants is laryngomalacia (a floppy voice box), which is usually harmless and outgrown. However, stridor can also be caused by croup, vocal cord problems, airway malformations, or foreign body aspiration. New-onset stridor or stridor with breathing difficulty always needs medical evaluation.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Stridor that is present from birth or develops in the first weeks of life is most commonly caused by laryngomalacia, where the tissue above the vocal cords is floppy and collapses inward during breathing. This is usually worse when the baby is on their back, crying, feeding, or congested. Laryngomalacia is typically diagnosed clinically and resolves by 12-18 months. Rarely, stridor from birth may indicate a more serious airway abnormality requiring further evaluation.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Stridor from laryngomalacia often peaks in severity around 4-8 months of age. If your baby\'s stridor is getting louder, this is often part of the natural course as the baby breathes harder and faster during growth spurts and increased activity. However, if stridor is accompanied by poor feeding, choking episodes, poor weight gain, apnea, or color changes, an ENT evaluation with flexible laryngoscopy may be recommended.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Laryngomalacia should begin improving around this age. If stridor persists or worsens beyond 8-9 months, or if your baby has significant feeding difficulties or failure to thrive, further investigation may be needed. Other causes of stridor at this age include subglottic stenosis (narrowing below the vocal cords), hemangiomas of the airway, or vocal cord paralysis. Croup can also cause acute stridor with its characteristic barky cough.',
    },
    {
      ageRange: '12 months+',
      context:
        'Most laryngomalacia resolves by 12-18 months. New stridor in a toddler is more likely to be caused by croup (viral laryngotracheitis), which presents with a barky cough and worsens at night. Sudden onset of stridor without illness in a toddler should raise concern for foreign body aspiration. If your toddler suddenly develops stridor while eating or playing with small objects, seek emergency care immediately.',
    },
  ],
  whenNormal: [
    'Baby has mild inspiratory stridor that is worse when lying down or congested and has been present since birth (likely laryngomalacia)',
    'Stridor improves when baby is placed on their stomach or in an upright position',
    'Baby is feeding well, gaining weight, and having no color changes despite the noisy breathing',
    'Stridor has been gradually improving as the baby gets older',
  ],
  whenToMention: [
    'Baby has persistent stridor that has not been evaluated by a doctor',
    'Stridor is getting louder or more frequent over weeks',
    'Baby is having feeding difficulties, choking, or slow weight gain along with stridor',
  ],
  whenToActNow: [
    'Baby suddenly develops stridor with significant breathing difficulty, chest retractions, or color changes -- call 911',
    'Toddler develops sudden stridor while eating or playing (possible foreign body aspiration) -- call 911 immediately',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Noisy Breathing in Infants. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Noisy-Breathing-in-Infants.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Stridor. MedlinePlus, NIH.',
      url: 'https://medlineplus.gov/ency/article/003074.htm',
    },
  ],
};
