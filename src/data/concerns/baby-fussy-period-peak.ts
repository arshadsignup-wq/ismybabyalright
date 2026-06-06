import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'baby-fussy-period-peak', title: 'Peak Fussiness: When Does It Get Better?', category: 'behavior',
  searchTerms: ['peak fussiness baby','when does baby fussiness peak','baby most fussy age','PURPLE crying','fussy baby peak weeks','when does crying get better','baby crying peak','worst weeks baby crying','fussy newborn when does it end','baby fussiest age'],
  quickAnswer: 'Baby fussiness and crying typically peak around 6-8 weeks of age and then gradually decrease. By 3-4 months, most babies cry significantly less. This pattern is universal across cultures and is described by the Period of PURPLE Crying framework. Understanding that this is temporary and normal can help you cope during the hardest weeks.',
  byAge: [
    { ageRange: '0-2 weeks', context: 'Newborns in the first two weeks are often relatively calm and sleepy. Fussiness begins to increase around 2-3 weeks as your baby becomes more alert and aware of their environment.' },
    { ageRange: '2-6 weeks', context: 'Crying increases steadily during this period. Your baby may cry for longer stretches and be harder to soothe. This is biologically normal and not caused by something you are doing wrong. It is your baby\'s immature nervous system developing.' },
    { ageRange: '6-8 weeks', context: 'This is typically the peak. Total crying may reach 2-3 hours per day, often concentrated in the evening. Even healthy, well-fed babies cry this much. It is not colic unless it exceeds 3 hours per day, 3 days per week, for 3 weeks.' },
    { ageRange: '8-16 weeks', context: 'Fussiness gradually decreases. By 3-4 months, your baby can better regulate their state, has a more developed circadian rhythm, and can be soothed more easily. The intense crying period is resolving. If it does not improve by 4-5 months, discuss with your pediatrician.' },
  ],
  whenNormal: ['Crying peaks around 6-8 weeks and gradually improves','Evening fussiness is most intense','Baby is otherwise healthy, feeding well, and gaining weight','Crying decreases significantly by 3-4 months'],
  whenToMention: ['Crying does not improve by 4-5 months','You are struggling to cope and need support','Crying seems associated with feeding difficulties or pain','Your baby is not gaining weight or has other concerning symptoms'],
  whenToActNow: ['You feel overwhelmed and worry you might harm your baby - put baby in a safe place and call for help','Baby has signs of illness accompanying the crying','Baby has a sudden change in cry quality (weak, high-pitched)'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'NIH', citation: 'Barr RG. The Normal Crying Curve. Clin Perinatol. 2017;44(3):697-713.', url: 'https://pubmed.ncbi.nlm.nih.gov/28802347/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Coping with Colic. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/Colic.aspx' },
    { org: 'NIH', citation: 'Period of PURPLE Crying. National Center on Shaken Baby Syndrome.', url: 'http://www.purplecrying.info/' },
  ],
  relatedConcernSlugs: ['colic','baby-excessive-crying-evening','baby-inconsolable-crying-causes'],
};
