import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'critical-congenital-heart-defect-new-algorithm',
  title: 'Critical Congenital Heart Defects: Screening and Detection',
  category: 'medical',
  searchTerms: [
    'critical congenital heart defect baby',
    'CCHD screening newborn',
    'pulse oximetry screening baby',
    'congenital heart defect detection',
    'baby heart defect signs',
    'newborn heart screening',
    'blue baby heart defect',
    'congenital heart disease newborn',
    'failed pulse ox screening baby',
    'baby heart murmur serious',
    'CCHD algorithm',
  ],
  quickAnswer:
    'Critical congenital heart defects (CCHDs) are serious heart conditions present at birth that require surgery or intervention within the first year of life. They affect approximately 1 in 500-600 newborns. Universal newborn screening with pulse oximetry has significantly improved early detection. A failed or borderline pulse oximetry screen does not necessarily mean your baby has a heart defect, but it does require prompt follow-up with echocardiography to rule out serious conditions.',
  byAge: [
    {
      ageRange: '0-48 hours (newborn)',
      context:
        'All newborns should receive pulse oximetry screening for CCHDs, typically performed between 24-48 hours of life (or before discharge if earlier). The screen measures oxygen levels in the right hand (pre-ductal) and a foot (post-ductal). A difference greater than 3% between the two sites, or any reading below 95%, warrants repeat testing and potentially an echocardiogram. Some CCHDs may also be detected by prenatal ultrasound. If your baby fails the pulse ox screen, try to remain calm -- many failed screens are false positives, but all require follow-up.',
    },
    {
      ageRange: '0-1 month',
      context:
        'Some CCHDs present in the first days to weeks of life as a fetal heart structure called the ductus arteriosus naturally closes. Warning signs include persistent blue or gray skin color (cyanosis), fast or labored breathing, poor feeding, excessive sleepiness, weak pulses, or failure to gain weight. Some heart defects that were not detected prenatally or at newborn screening may become apparent during this period. Report any of these symptoms to your pediatrician immediately.',
    },
    {
      ageRange: '1-6 months',
      context:
        'Some congenital heart defects become symptomatic gradually as blood flow patterns change with growth. Signs to watch for include difficulty feeding (sweating, tiring quickly, or breathing heavily during feeds), poor weight gain, rapid breathing, and recurrent respiratory infections. A heart murmur detected at a checkup may prompt an echocardiogram referral. Not all murmurs indicate a heart defect -- innocent murmurs are very common in healthy infants -- but evaluation ensures nothing is missed.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, most critical heart defects will have been detected. However, some less critical defects like VSDs (ventricular septal defects) or ASDs (atrial septal defects) may continue to be monitored, as some close on their own. If your baby has been diagnosed with a heart defect, follow up with your pediatric cardiologist as recommended. Advances in surgical techniques and monitoring algorithms have significantly improved outcomes for babies with CCHDs, with many going on to lead full, active lives.',
    },
  ],
  whenNormal: [
    'Your newborn passed their pulse oximetry CCHD screening before hospital discharge.',
    'Your baby was diagnosed with an innocent heart murmur that your pediatrician or cardiologist has confirmed is benign.',
    'Your baby has a small VSD or ASD that is being monitored and is not causing symptoms.',
  ],
  whenToMention: [
    'Your baby failed or had a borderline pulse oximetry screening result and you have questions about follow-up.',
    'Your baby has a heart murmur that has not yet been evaluated with an echocardiogram.',
    'Your baby tires easily during feedings, sweats during nursing, or is gaining weight slowly.',
  ],
  whenToActNow: [
    'Your baby has blue or gray skin, lips, or nail beds (cyanosis), especially if persistent or worsening.',
    'Your baby has rapid or labored breathing, chest retractions, or grunting, especially at rest.',
    'Your baby is unresponsive, extremely lethargic, or has very weak pulses and feels cold to the touch.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['cyanosis-baby', 'baby-breathing-fast', 'baby-vomiting-bile'],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Screening for Critical Congenital Heart Defects. CDC, 2024.',
      url: 'https://www.cdc.gov/ncbddd/heartdefects/screening.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Endorsement of Health and Human Services Recommendation for Pulse Oximetry Screening. Pediatrics, 2012.',
      url: 'https://publications.aap.org/pediatrics/article/129/1/190/31638/Endorsement-of-Health-and-Human-Services',
    },
    {
      org: 'NIH',
      citation:
        'National Heart, Lung, and Blood Institute. Congenital Heart Defects. NHLBI.',
      url: 'https://www.nhlbi.nih.gov/health/congenital-heart-defects',
    },
  ],
};
