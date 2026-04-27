import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-excessive-crying-no-reason',
  title: 'Baby Crying Excessively for No Apparent Reason',
  category: 'physical',
  searchTerms: ['baby crying for no reason','baby won\'t stop crying','baby cries all day','baby inconsolable crying','baby crying excessively','purple crying','baby cries for hours','newborn won\'t stop crying','baby screaming for no reason','why won\'t my baby stop crying','baby crying too much','period of purple crying baby'],
  quickAnswer: 'All babies cry, and some babies cry a lot more than others. The PURPLE crying period (Peak of Unreasonable Crying) describes normal crying that peaks around 2 months, can last for hours, occurs in the late afternoon/evening, and resists soothing. Excessive crying (more than 3 hours per day, more than 3 days per week, for more than 3 weeks) was historically called "colic." While most excessive crying is a normal developmental phase that resolves by 3-4 months, it is important to rule out medical causes and to protect yourself from caregiver burnout.',
  byAge: [
    { ageRange: '0-2 weeks', context: 'Newborns cry to communicate hunger, discomfort, and need for closeness. Crying that seems constant in the first 2 weeks is often related to feeding challenges, hunger, or difficulty adjusting to life outside the womb. Ensure your baby is feeding well (8-12 times per day for breastfed babies), having adequate wet and dirty diapers, and being held skin-to-skin. If crying is high-pitched, inconsolable, or your baby seems unwell (fever, poor feeding, lethargy between crying episodes), contact your pediatrician.' },
    { ageRange: '2 weeks - 3 months', context: 'The peak of crying. Healthy babies may cry 2-3 hours per day, and some cry even more. The PURPLE crying period is characterized by: a peak pattern, unexpected episodes, resistance to soothing, a pain-like face, long-lasting episodes, and evening clustering. This is not your fault and does not mean something is wrong. The 5 S\'s (swaddle, side/stomach position while held, shush, swing, suck) may help. If you feel overwhelmed, put the baby in a safe place (crib) and take a 5-10 minute break.' },
    { ageRange: '3-6 months', context: 'Excessive crying typically resolves by 3-4 months. If your baby continues to cry excessively beyond 4 months, evaluate for: reflux, food sensitivities (especially cow\'s milk protein in breastfed babies or formula), sleep deprivation, overstimulation, or other medical causes. A "high-needs" baby temperament is also a possibility - some babies are more intense, more sensitive, and need more holding and movement. This is not a disorder but can be exhausting for caregivers.' },
    { ageRange: '6-12 months', context: 'Babies over 6 months who cry excessively should be evaluated for specific causes rather than attributed to "colic." Consider: teething pain, ear infections, constipation, illness, separation anxiety, sleep problems, and overstimulation. If your baby had excessive crying as a younger infant and it resolved, you can feel confident that you weathered one of parenting\'s hardest phases. If excessive crying is new at this age, something is likely causing it.' },
  ],
  whenNormal: ['Your baby under 3 months cries intensely in the evening but is happy, feeding, and growing well at other times','Crying peaks around 2 months and is gradually decreasing','Your baby can be partially soothed with holding, rocking, and white noise even if they don\'t fully stop crying','Crying episodes last 1-3 hours and then resolve, and the baby is fine between episodes'],
  whenToMention: ['Your baby cries more than 3 hours per day, more than 3 days per week, and it has been going on for more than 3 weeks','Crying has not decreased by 4 months','Your baby seems to be in pain during crying - arching, pulling legs up, refusing to eat','You are struggling to cope with the crying and need support'],
  whenToActNow: ['Your baby\'s cry is high-pitched, shrill, or sounds different from normal crying','Your baby has a fever, is vomiting, has a rash, or seems unwell alongside excessive crying','You feel you might shake or harm your baby - put them in a safe place and call for help immediately (1-800-4-A-CHILD or 988)','Your baby is inconsolable AND lethargic, limp, or unresponsive between crying episodes'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-high-pitched-scream','toddler-constant-meltdowns','baby-too-quiet-never-cries'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Colic and Crying. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/default.aspx' },
    { org: 'NIH', citation: 'Barr RG. The Normal Crying Curve: What Do We Really Know? Developmental Medicine and Child Neurology. 1990.', url: 'https://pubmed.ncbi.nlm.nih.gov/2332121/' },
    { org: 'AAP', citation: 'Zeevenhooven J, et al. The New Rome IV Criteria for Functional Gastrointestinal Disorders in Infants and Toddlers. Pediatric Gastroenterology. 2017.', url: 'https://pubmed.ncbi.nlm.nih.gov/28079023/' },
  ],
};
