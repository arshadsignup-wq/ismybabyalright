import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-oxygen-saturation-screening',
  title: 'Pulse Oximetry Screening in Newborns',
  category: 'medical',
  searchTerms: ['newborn pulse ox screening', 'baby oxygen saturation test', 'CCHD screening newborn', 'critical congenital heart disease screening', 'newborn pulse oximetry results', 'baby oxygen level test', 'failed pulse ox screen baby', 'low oxygen newborn', 'heart defect screening baby', 'pulse ox screen normal range'],
  quickAnswer: 'Pulse oximetry screening (measuring blood oxygen levels) is done on all newborns before hospital discharge to screen for critical congenital heart disease (CCHD). A normal result is reassuring but does not rule out all heart defects. An abnormal result requires further evaluation but does not necessarily mean there is a problem. Most babies with abnormal results have normal hearts.',
  byAge: [
    { ageRange: '0-1 month', context: 'Pulse oximetry screening is performed at 24-48 hours of age by placing a sensor on the baby\'s right hand and one foot. Normal oxygen saturation is 95% or above with less than a 3% difference between the two sites. A failed screen (oxygen below 95% or a difference above 3%) may indicate a CCHD that reduces oxygen levels. However, false positives occur, and an abnormal screen does not confirm heart disease. Follow-up includes repeat screening, echocardiography, and clinical evaluation. If a CCHD is confirmed, early treatment significantly improves outcomes.' },
    { ageRange: '1-3 months', context: 'If the pulse ox screen was normal and baby is doing well, no further testing is needed. If a heart defect was identified, the pediatric cardiologist will manage ongoing care. Some heart defects present after discharge, so continue to watch for signs like blue/gray skin, rapid breathing, and poor feeding.' },
    { ageRange: '3-6 months', context: 'Continued monitoring if a heart defect was identified. Normal screening does not rule out all heart conditions, so report any new symptoms to your pediatrician.' },
    { ageRange: '6-12 months', context: 'Ongoing follow-up for any identified cardiac condition. Normal screening in the newborn period is reassuring.' },
  ],
  whenNormal: ['Oxygen saturation 95% or above in both right hand and foot with less than 3% difference', 'Baby is pink, feeding well, and breathing comfortably', 'Screening passed on first attempt'],
  whenToMention: ['You have questions about what the screening means or your baby\'s results', 'Family history of congenital heart disease', 'You notice any color changes in your baby after going home'],
  whenToActNow: ['Failed pulse ox screening requires immediate follow-up evaluation', 'Baby appears blue or gray, has rapid or labored breathing, or is feeding poorly after discharge'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Endorsement of Pulse Oximetry Screening. Pediatrics.', url: 'https://publications.aap.org/pediatrics/article/124/2/823/72034/Pulse-Oximetry-Screening-for-Critical-Congenital' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Congenital Heart Defect Screening.', url: 'https://www.cdc.gov/ncbddd/heartdefects/screening.html' },
  ],
  relatedConcernSlugs: ['congenital-heart-defect-signs', 'newborn-heart-murmur-found', 'cyanosis-baby'],
};
