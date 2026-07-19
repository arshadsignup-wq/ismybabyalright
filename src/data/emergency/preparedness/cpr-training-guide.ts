import type { EmergencyGuide } from '../types';

export const guide: EmergencyGuide = {
  slug: 'cpr-training-guide',
  title: 'CPR Training Guide for Parents',
  category: 'preparedness',
  callNineOneOne: false,
  description: 'Learning CPR is one of the most important things a parent or caregiver can do. Infant and child CPR techniques differ from adult CPR. This guide covers what to learn, how to train, and how to stay current. Hands-on training from a certified instructor is strongly recommended.',
  immediateActions: [
    'Sign up for a certified infant/child CPR class (AHA or Red Cross)',
    'Watch instructional videos as a supplement (not replacement) to hands-on training',
    'Ensure all regular caregivers are CPR trained',
    'Review technique at least once per year and recertify every 2 years',
  ],
  doNotDo: [
    'Do NOT rely solely on reading or video learning — hands-on practice is essential',
    'Do NOT assume CPR for adults is the same as for infants or children',
    'Do NOT let your certification lapse without refreshing skills',
    'Do NOT hesitate in a real emergency because you feel uncertain — imperfect CPR is far better than no CPR',
    'Do NOT skip the infant portion if you have a baby — infant technique is different from child technique',
  ],
  stepByStep: [
    { step: 1, title: 'Choose a CPR course', description: 'AHA Heartsaver Pediatric First Aid CPR AED or Red Cross Child and Baby First Aid/CPR are the main options. Choose in-person classes with manikin practice. Online-only courses are less effective.' },
    { step: 2, title: 'Learn infant CPR (under 1 year)', description: 'Key differences from adult: use 2 fingers for compressions (not hands), compress 1.5 inches deep, cover both mouth and nose for breaths, give 2 minutes of CPR before calling 911 if alone.' },
    { step: 3, title: 'Learn child CPR (1-8 years)', description: 'Key differences: use 1 hand (or 2 for larger children) for compressions, compress at least 2 inches, pinch nose and seal mouth for breaths, give 2 minutes of CPR before calling 911 if alone.' },
    { step: 4, title: 'Learn choking response', description: 'Infant: 5 back blows + 5 chest thrusts. Child (1+ year): abdominal thrusts (Heimlich maneuver). Know when to intervene vs. let them cough.' },
    { step: 5, title: 'Learn AED use', description: 'Automated External Defibrillators are in many public places. Learn to use pediatric pads for children under 8. If only adult pads are available, use them (do not let pads touch each other on small children).' },
    { step: 6, title: 'Practice regularly', description: 'Review techniques every few months. Use online refresher videos. Practice on a pillow or stuffed animal to maintain muscle memory. Discuss scenarios with your partner.' },
    { step: 7, title: 'Recertify on schedule', description: 'CPR certification expires every 2 years. Skills deteriorate without practice. Take a refresher course annually if possible, and a full recertification class every 2 years.' },
    { step: 8, title: 'Train all caregivers', description: 'Grandparents, babysitters, nannies, and older siblings should all be trained. Many organizations offer group classes that can be hosted at your home.' },
  ],
  whenToCall911: [
    'Any time CPR is needed — call 911 (or have someone call) before or during CPR',
    'For infants and children: if alone, give 2 minutes of CPR, then call 911, then resume CPR',
    'If you witness a sudden collapse, call 911 first, then begin CPR',
  ],
  whenToCallDoctor: [
    'After any event requiring CPR — the child needs medical evaluation even if they recover',
    'To get referrals for CPR training classes in your area',
  ],
  whenToGoToER: [
    'After any CPR event, the child must be evaluated at an emergency room',
    'Even if the child recovers and seems fine, internal damage may have occurred',
  ],
  prevention: [
    'Being CPR-trained IS prevention — you are preparing to save a life',
    'Prevent cardiac emergencies: safe sleep practices, choking prevention, water safety, medication safety',
    'Keep AED location in mind at public places (malls, airports, gyms, schools)',
    'Maintain current certifications for all caregivers',
    'Post CPR quick-reference cards in your home (not as replacement for training)',
    'Consider a personal CPR manikin for home practice (available for ~$30-50)',
  ],
  byAge: [
    { ageRange: '0-1 year', context: 'Infant CPR: 2 fingers for compressions at nipple line, 1.5 inches deep, 30:2 ratio, cover mouth AND nose for breaths. Most common causes: SIDS, choking, suffocation, illness. Train BEFORE baby arrives if possible.' },
    { ageRange: '1-8 years', context: 'Child CPR: 1 hand (or 2) for compressions at center of chest, at least 2 inches deep, 30:2 ratio, pinch nose for breaths. Common causes: drowning, choking, trauma, poisoning. Use AED with pediatric pads if available.' },
    { ageRange: '8+ years', context: 'Use adult CPR technique: 2 hands, at least 2 inches deep, 30:2 ratio. AED with adult pads. Consider cardiac causes (especially during sports). Compression-only CPR is acceptable if you cannot give breaths.' },
  ],
  relatedEmergencySlugs: ['cpr-infant', 'cpr-toddler', 'choking-infant', 'choking-toddler', 'unresponsive-baby', 'emergency-plan'],
  relatedConcernSlugs: [],
  sources: [
    { org: 'AHA', citation: 'American Heart Association. CPR and First Aid Training.', url: 'https://www.heart.org/en/cpr' },
    { org: 'Red Cross', citation: 'American Red Cross. Child and Baby CPR Classes.', url: 'https://www.redcross.org/take-a-class/cpr/child-and-baby-cpr' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. CPR: How to Save a Life.', url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Responding-to-a-Cardiac-Emergency.aspx' },
  ],
};
