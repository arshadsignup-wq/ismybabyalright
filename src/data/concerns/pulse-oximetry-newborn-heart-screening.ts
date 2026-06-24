import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pulse-oximetry-newborn-heart-screening',
  title: 'Pulse Oximetry Screening: Newborn Heart Defect Detection',
  category: 'medical',
  searchTerms: [
    'pulse oximetry newborn screening',
    'newborn heart screening',
    'pulse ox test baby',
    'CCHD screening',
    'critical congenital heart disease screening',
    'newborn oxygen level test',
    'baby failed pulse ox',
    'low oxygen reading newborn',
    'heart defect screening baby',
    'newborn screening test pulse ox',
  ],
  quickAnswer:
    'Pulse oximetry screening is a simple, painless test performed on all newborns before hospital discharge to detect critical congenital heart defects (CCHD). A small sensor placed on the baby\'s hand and foot measures blood oxygen levels. The test takes only a few minutes and can identify heart conditions that may not be apparent on physical examination. About 7,200 babies are born with CCHD each year in the US, and early detection through this screening can be lifesaving.',
  byAge: [
    {
      ageRange: '24-48 hours after birth',
      context:
        'Pulse oximetry screening is typically performed between 24 and 48 hours of life, or as close to discharge as possible. A small sensor is placed on the baby\'s right hand (preductal) and either foot (postductal). Normal oxygen saturation should be 95% or higher in both locations, with less than a 3% difference between them. The test is painless and takes only a few minutes. If results are abnormal, the test is repeated, and if still abnormal, an echocardiogram (heart ultrasound) is performed to evaluate for heart defects.',
    },
    {
      ageRange: '0-1 month',
      context:
        'If your baby\'s pulse oximetry screening was normal at birth, it does not rule out all heart conditions, as some defects may not be detectable by oxygen levels alone. Continue to watch for signs of heart problems including persistent blue or pale skin color, rapid breathing, poor feeding, excessive sweating during feeds, or failure to gain weight. Some heart defects become apparent in the first weeks of life as the circulatory system transitions from fetal to newborn physiology. Your pediatrician will listen to your baby\'s heart at well-child visits.',
    },
    {
      ageRange: '1-6 months',
      context:
        'Some congenital heart defects present later in infancy as blood flow patterns change. Heart murmurs detected at well-child visits may prompt an echocardiogram for further evaluation. Signs of heart failure in infants include poor weight gain, rapid breathing even at rest, excessive sweating during feeding, and difficulty feeding. Most innocent (harmless) heart murmurs are common in babies and resolve on their own. Your pediatrician can help determine whether a murmur needs further investigation.',
    },
    {
      ageRange: '6+ months',
      context:
        'By this age, most significant congenital heart defects have been identified through screening, physical examination, or symptoms. However, some conditions like small ventricular septal defects may not be detected until later. Continued well-child visits with heart auscultation remain important. If your child was diagnosed with a heart defect, regular cardiology follow-up is essential for monitoring and determining whether and when intervention may be needed.',
    },
  ],
  whenNormal: [
    'Your baby\'s pulse oximetry screening was 95% or higher in both hand and foot with less than 3% difference',
    'Your baby\'s screening was initially borderline but passed on repeat testing',
    'Your pediatrician hears a soft murmur at a well-child visit but the baby is otherwise thriving',
  ],
  whenToMention: [
    'Your baby failed the initial pulse oximetry screening and you have questions about next steps',
    'Your baby seems to breathe faster than expected or tire easily during feeding',
    'You notice a blue tinge around your baby\'s lips or nailbeds, even briefly',
    'Your baby is not gaining weight as expected',
  ],
  whenToActNow: [
    'Your baby turns blue (cyanotic) - this is a medical emergency requiring immediate evaluation',
    'Your baby is having severe difficulty breathing with chest retractions, grunting, or nasal flaring',
    'Your baby becomes suddenly limp, unresponsive, or very pale',
    'Your baby refuses to feed and appears lethargic or in distress',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'cyanosis-baby',
    'baby-breathing-fast',
    'persistent-fever-baby',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Endorsement of HHS Recommendation for Pulse Oximetry Screening. Pediatrics, 2012.',
      url: 'https://publications.aap.org/pediatrics/article/129/1/190/31675/Endorsement-of-Health-and-Human-Services',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Screening for Critical Congenital Heart Defects. CDC, 2024.',
      url: 'https://www.cdc.gov/ncbddd/heartdefects/screening.html',
    },
    {
      org: 'NIH',
      citation:
        'Kemper AR, et al. Strategies for Implementing Screening for Critical Congenital Heart Disease. Pediatrics, 2011.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/21987707/',
    },
  ],
};
