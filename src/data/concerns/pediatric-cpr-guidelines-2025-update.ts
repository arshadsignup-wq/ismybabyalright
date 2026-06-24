import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pediatric-cpr-guidelines-2025-update',
  title: 'Pediatric CPR Guidelines - What Every Parent Should Know',
  category: 'medical',
  searchTerms: [
    'infant CPR how to',
    'baby CPR steps',
    'pediatric CPR guidelines 2025',
    'infant choking first aid',
    'baby not breathing what to do',
    'CPR baby under 1 year',
    'infant CPR class near me',
    'hands only CPR baby',
    'infant CPR compressions depth',
    'when to do CPR on baby',
    'baby CPR rescue breaths',
  ],
  quickAnswer:
    'Every parent and caregiver should know infant CPR. The American Heart Association recommends starting CPR immediately if a baby is unresponsive and not breathing normally. Key differences between infant and adult CPR: use two fingers (or two-thumb encircling technique) for compressions rather than the heel of the hand, compress about 1.5 inches deep at a rate of 100-120 compressions per minute, and give 2 rescue breaths after every 30 compressions (for single rescuer). Infant CPR includes both compressions and breaths, unlike hands-only CPR for adults. Call 911 after 2 minutes of CPR if you are alone.',
  byAge: [
    {
      ageRange: '0-12 months (infant CPR)',
      context:
        'For infants under 12 months, CPR technique differs from older children. Place the infant on a firm, flat surface. Use two fingers (middle and ring finger) on the breastbone, just below the nipple line. Compress about 1.5 inches deep at 100-120 compressions per minute. After every 30 compressions, tilt the head slightly back (not as far as adults), lift the chin, and give 2 gentle breaths covering both the mouth and nose. If you are alone, perform 2 minutes of CPR before calling 911. If choking: alternate 5 back blows (between shoulder blades with baby face-down on your forearm) and 5 chest thrusts (same location as CPR compressions with baby face-up) until the object is expelled.',
    },
    {
      ageRange: '1-8 years (child CPR)',
      context:
        'For children over 1 year, use the heel of one hand (or two hands for larger children) for compressions on the lower half of the breastbone. Compress about 2 inches deep at 100-120 compressions per minute. Give 2 rescue breaths after every 30 compressions (single rescuer) or every 15 compressions (two rescuers). For choking in a child over 1 year, perform abdominal thrusts (Heimlich maneuver): stand behind the child, make a fist above the navel, and thrust inward and upward. Consider taking an in-person CPR class through the American Heart Association or Red Cross, as hands-on practice is far more effective than reading instructions alone.',
    },
    {
      ageRange: 'Prevention across all ages',
      context:
        'The best approach is prevention. Leading causes of cardiac arrest in children include choking, drowning, SIDS, trauma, and respiratory illness. Choking prevention includes cutting food into small pieces (grapes quartered lengthwise, hot dogs avoided), keeping small objects out of reach, and supervising all eating. Drowning prevention requires constant supervision near any water, including bathtubs. An AED (automated external defibrillator) can be used on infants and children with pediatric pads if available. Refresh your CPR training every 2 years, as guidelines are updated periodically.',
    },
  ],
  whenNormal: [
    'You have completed an infant CPR class and feel prepared to respond in an emergency.',
    'Your baby is breathing normally, has good color, and is responsive.',
    'You experienced a brief choking scare that resolved on its own without intervention.',
  ],
  whenToMention: [
    'You want a referral for an infant CPR and first aid class.',
    'Your baby has a medical condition that increases the risk of a breathing emergency and you want specific guidance.',
    'You had to perform choking rescue on your baby and want to discuss whether follow-up evaluation is needed.',
  ],
  whenToActNow: [
    'Your baby is unresponsive and not breathing normally - begin CPR immediately and call 911 (or have someone else call while you start CPR).',
    'Your baby is choking and cannot cry, cough, or breathe - begin infant choking protocol (back blows and chest thrusts) immediately.',
    'Your baby has turned blue, is limp, or has stopped breathing for any reason - this is a life-threatening emergency.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-choking-on-food',
    'magnet-ingestion-danger-baby',
    'baby-breathing-fast',
  ],
  sources: [
    {
      org: 'AHA',
      citation:
        'American Heart Association. Pediatric Basic Life Support Guidelines, 2020 (updated 2024).',
      url: 'https://cpr.heart.org/en/resources/cpr-facts-and-stats/cpr-statistics',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. CPR Steps: Learn How to Save a Life. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Responding-to-a-Choking-Emergency.aspx',
    },
    {
      org: 'Red Cross',
      citation:
        'American Red Cross. Infant and Child CPR Training.',
      url: 'https://www.redcross.org/take-a-class/cpr/performing-cpr/child-baby-cpr',
    },
  ],
};
