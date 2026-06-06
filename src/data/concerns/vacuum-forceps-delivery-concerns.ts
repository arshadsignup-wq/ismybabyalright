import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'vacuum-forceps-delivery-concerns',
  title: 'Assisted Delivery (Vacuum or Forceps) Concerns',
  category: 'maternal',
  searchTerms: ['vacuum delivery', 'forceps delivery', 'assisted delivery', 'vacuum extraction birth', 'forceps birth', 'operative vaginal delivery', 'ventouse delivery', 'vacuum baby head shape', 'forceps marks baby', 'assisted delivery risks'],
  quickAnswer: 'Assisted delivery using vacuum or forceps is sometimes needed to help guide the baby out when pushing alone is not sufficient. These tools are used by experienced providers and can help avoid a cesarean section. Temporary marks or swelling on the baby\'s head are common but resolve quickly. Both methods have a strong safety record when performed by skilled providers.',
  byAge: [
    { ageRange: 'Labor & delivery', context: 'Assisted delivery may be recommended if pushing has been prolonged, if you are exhausted, if the baby shows signs of distress, or if a medical condition limits your ability to push effectively. Your provider should explain why assistance is needed and which method they recommend. Vacuum extraction uses a soft cup placed on the baby\'s head with gentle suction, while forceps are smooth metal instruments that cradle the baby\'s head.' },
    { ageRange: 'Postpartum', context: 'After an assisted delivery, you may have more perineal soreness or a higher-degree tear than after an unassisted birth. Your baby may have temporary bruising, swelling (caput or cephalohematoma), or marks from the instruments. These typically resolve within days to weeks. Processing the experience emotionally is important, especially if it was unexpected.' },
  ],
  whenNormal: ['Temporary cone-shaped swelling (caput succedaneum) on baby\'s head after vacuum delivery', 'Mild bruising or marks on baby\'s cheeks from forceps that fade within days', 'Perineal soreness that improves with standard postpartum care'],
  whenToMention: ['You have questions about why an assisted delivery was needed', 'Perineal pain seems more severe than expected', 'Baby\'s head swelling is not improving after a few days'],
  whenToActNow: ['Signs of infection at any tear or episiotomy site', 'Baby appears jaundiced (yellowing of skin), very sleepy, or is not feeding well after assisted delivery', 'Severe or worsening swelling on baby\'s head'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Operative Vaginal Birth. ACOG Practice Bulletin No. 219, 2020.', url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/04/operative-vaginal-birth' },
    { org: 'NIH', citation: 'National Library of Medicine. Operative Vaginal Delivery. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK470241/' },
    { org: 'NICE', citation: 'National Institute for Health and Care Excellence. Intrapartum Care. NICE CG190, 2023.', url: 'https://www.nice.org.uk/guidance/cg190' },
  ],
  relatedConcernSlugs: ['episiotomy-concerns', 'birth-plan-flexibility', 'birth-trauma-emotional'],
};
