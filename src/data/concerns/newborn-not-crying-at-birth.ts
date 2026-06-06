import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-not-crying-at-birth',
  title: 'Baby Not Crying After Delivery',
  category: 'medical',
  searchTerms: [
    'baby not crying at birth',
    'newborn didn\'t cry after delivery',
    'baby silent after birth',
    'newborn delayed cry',
    'baby not crying after cesarean',
    'no first cry newborn',
    'baby not breathing at birth',
    'newborn needed resuscitation',
    'delayed crying after birth concerns',
    'baby not vigorous at delivery',
  ],
  quickAnswer:
    'While a first cry is expected and helps expand the lungs for breathing, not all babies cry immediately at birth, and a brief delay is not always cause for alarm. Some babies breathe and transition normally without a dramatic cry. However, if a baby does not cry or breathe within the first minute, medical intervention including stimulation and resuscitation may be needed.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'The first cry helps expand the lungs and clear fluid from the airways. Most babies cry within the first few seconds to a minute after birth. If your baby did not cry immediately but was breathing, had good color, and had a normal heart rate, this is often not concerning. Some babies simply take their first breath more quietly. If medical intervention was needed (stimulation, suctioning, or resuscitation), the medical team will have assessed your baby thoroughly. If your baby required significant resuscitation, they may be monitored more closely in the hours and days following birth.',
    },
    {
      ageRange: '1-3 months',
      context:
        'If your baby had a delayed cry at birth but subsequent examinations were normal, the long-term outlook is typically excellent. Babies who required brief stimulation at birth usually have no lasting effects. If more significant resuscitation was required, your pediatrician will monitor developmental milestones carefully and may recommend follow-up evaluations.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Your pediatrician continues to monitor developmental milestones. Most babies who had a brief delay in crying at birth develop completely normally. If there were concerns about oxygen deprivation at birth, developmental follow-up will be more closely monitored.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Continued developmental monitoring at well-child visits. Most babies with a delayed first cry who had normal subsequent evaluations meet all milestones on time. Discuss any developmental concerns with your pediatrician.',
    },
  ],
  whenNormal: [
    'Baby took a breath within the first minute even if the cry was quiet or delayed by a few seconds',
    'Baby quickly became pink and active after delivery',
    'Medical team was not concerned and did not require intervention',
    'All subsequent examinations have been normal',
  ],
  whenToMention: [
    'You have questions or anxiety about what happened during your baby\'s delivery',
    'You want to understand your baby\'s Apgar scores and what they mean',
    'You are concerned about potential long-term effects of a delayed start',
  ],
  whenToActNow: [
    'These concerns are relevant at the time of birth; the medical team responds immediately when a baby does not cry or breathe',
    'After discharge, any episode of apnea, unresponsiveness, or color change in your newborn requires emergency evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Neonatal Resuscitation Program (NRP). 8th Edition.',
      url: 'https://www.aap.org/en/learning/neonatal-resuscitation-program/',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Basic Newborn Resuscitation Guidelines.',
      url: 'https://www.who.int/publications/i/item/basic-newborn-resuscitation',
    },
  ],
  relatedConcernSlugs: ['newborn-apgar-score-low', 'newborn-meconium-stained-fluid'],
};
