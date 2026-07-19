import type { EmergencyGuide } from '../types';

export const guide: EmergencyGuide = {
  slug: 'cpr-toddler',
  title: 'CPR for Toddlers and Children (1-8 Years)',
  category: 'medical',
  callNineOneOne: true,
  description: 'Child CPR is used when a child aged 1-8 years is unresponsive and not breathing normally. It involves chest compressions and rescue breaths to maintain circulation and oxygen delivery until emergency help arrives.',
  immediateActions: [
    'Check for responsiveness — tap and shout "Are you okay?"',
    'If unresponsive, call 911 immediately or have someone else call',
    'If alone with the child, give 2 minutes of CPR before calling 911',
    'Begin chest compressions immediately if no pulse or you are unsure',
  ],
  doNotDo: [
    'Do NOT delay CPR to search for a pulse if you are unsure',
    'Do NOT compress over the xiphoid process (bottom tip of breastbone)',
    'Do NOT lean on the chest between compressions — allow full chest recoil',
    'Do NOT interrupt compressions for more than 10 seconds',
    'Do NOT give up — continue CPR until help arrives or child responds',
  ],
  stepByStep: [
    { step: 1, title: 'Check responsiveness', description: 'Tap the child and shout "Are you okay?" Look for normal breathing (not gasps). If unresponsive and not breathing normally, proceed.' },
    { step: 2, title: 'Call 911', description: 'If someone is with you, have them call 911 and get an AED. If alone, perform 2 minutes of CPR first, then call 911.' },
    { step: 3, title: 'Position the child', description: 'Place child on their back on a firm, flat surface. Kneel beside the child\'s chest.' },
    { step: 4, title: 'Begin chest compressions', description: 'Place the heel of one hand on the center of the chest on the lower half of the breastbone. For larger children, use two hands. Compress at least 2 inches deep at a rate of 100-120 per minute.' },
    { step: 5, title: 'Open the airway', description: 'After 30 compressions, tilt the head back and lift the chin to open the airway. Look for visible obstructions.' },
    { step: 6, title: 'Give 2 rescue breaths', description: 'Pinch the nose shut. Create a seal over the child\'s mouth. Give 2 breaths (1 second each). Watch for the chest to rise with each breath.' },
    { step: 7, title: 'Continue CPR cycles', description: 'Continue cycles of 30 compressions and 2 breaths. Push hard and fast. Allow full chest recoil between compressions.' },
    { step: 8, title: 'Use AED when available', description: 'Turn on AED and follow voice prompts. Use pediatric pads if available. If only adult pads are available, use them but do not let pads touch. Resume CPR immediately after shock.' },
  ],
  whenToCall911: [
    'Child is unresponsive',
    'Child is not breathing or only gasping',
    'Child has no pulse',
    'Any situation requiring CPR',
  ],
  whenToCallDoctor: [
    'After any CPR event, the child needs emergency medical evaluation',
    'Child was briefly unresponsive but recovered before EMS arrived',
  ],
  whenToGoToER: [
    'After any CPR event — even if child appears to recover, they need evaluation',
    'Child had a near-drowning event',
    'Child was unresponsive for any period of time',
  ],
  prevention: [
    'Supervise children around water at all times',
    'Keep medications, cleaning products, and small objects out of reach',
    'Ensure safe sleep environments',
    'Learn CPR — take a certified class and refresh training every 2 years',
    'Keep an AED accessible if possible',
    'Childproof the home to prevent falls, choking, and poisoning',
  ],
  byAge: [
    { ageRange: '1-3 years', context: 'Use one hand for compressions. Most common causes of cardiac arrest in this age group are choking, drowning, and respiratory illness. If alone, give 2 minutes of CPR before calling 911.' },
    { ageRange: '3-8 years', context: 'May need two hands for compressions depending on the child\'s size. Drowning, trauma, and poisoning are common causes. Check that compressions achieve at least 2 inches of depth.' },
    { ageRange: '8+ years', context: 'Use adult CPR technique with two hands. Compress at least 2 inches. Consider cardiac causes in older children, especially during sports activities.' },
  ],
  relatedEmergencySlugs: ['cpr-infant', 'choking-toddler', 'unresponsive-baby', 'drowning-near'],
  relatedConcernSlugs: [],
  sources: [
    { org: 'AHA', citation: 'American Heart Association. Pediatric Basic Life Support: 2020 AHA Guidelines for CPR and Emergency Cardiovascular Care.', url: 'https://www.heart.org/en/health-topics/first-aid/first-aid-for-cardiac-arrest/child-baby-cpr' },
    { org: 'Red Cross', citation: 'American Red Cross. Child and Baby CPR.', url: 'https://www.redcross.org/take-a-class/cpr/performing-cpr/child-baby-cpr' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. CPR Steps Everyone Should Know.', url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Responding-to-a-Cardiac-Emergency.aspx' },
  ],
};
