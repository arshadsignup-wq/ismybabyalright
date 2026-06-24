import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-hotel-sleep-tips',
  title: 'Tips for Getting My Baby to Sleep in a Hotel',
  category: 'sleep',
  searchTerms: [
    'baby sleep hotel tips',
    'baby wont sleep in hotel',
    'traveling with baby sleep',
    'baby sleep away from home',
    'baby hotel room sleep',
    'baby travel crib hotel',
    'baby sleep regression travel',
    'hotel room baby safe sleep',
    'baby pack and play hotel',
    'baby jet lag hotel sleep',
  ],
  quickAnswer:
    'Sleeping in an unfamiliar hotel environment can be challenging for babies. To help, bring familiar sleep items (sleep sack, white noise machine, crib sheet from home), maintain your baby\'s normal bedtime routine as closely as possible, ensure safe sleep conditions (firm, flat surface with no loose bedding), and allow time for adjustment. Most babies adapt within 1-2 nights. Avoid introducing new sleep habits during travel that you do not want to continue at home.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Young babies are often more adaptable to travel sleep than older babies. Request a hotel crib in advance or bring a portable crib or bassinet that meets current safety standards. Ensure the mattress is firm and flat with a fitted sheet — do not add blankets, bumpers, or stuffed animals. If the crib provided by the hotel has an old or thin mattress, use your own pack-and-play instead. Keep the room dark (use portable blackout curtains or black garbage bags on windows) and maintain a comfortable temperature (68-72 degrees F). White noise can help mask unfamiliar hotel sounds.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Older babies are more aware of their environment and may protest sleeping in an unfamiliar space. Bring their sleep sack, crib sheet, and any consistent sleep cues from home. Run through your normal bedtime routine in the same order (bath, pajamas, book, feeding, song). Position the crib away from your bed if possible — some babies sleep poorly when they can see their parents. If your baby is used to their own room, consider using a bathroom or closet (with the door open for airflow) as a sleeping area. Be prepared for one or two rough nights but try not to start new habits like bed-sharing.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers may be excited or anxious about sleeping somewhere new. Give them time to explore the room before bedtime. Maintain their regular bedtime routine and boundaries. If your toddler is in a crib, ensure the hotel crib is safe and cannot be climbed out of. If they are in a bed, some parents use a travel bed rail or place the mattress on the floor. Be aware of safety hazards in hotel rooms: uncovered outlets, accessible mini-bars, cords from blinds, and balcony access. If traveling across time zones, gradually adjust their schedule — shift bedtime by 30-60 minutes each day.',
    },
  ],
  whenNormal: [
    'Your baby has 1-2 difficult nights in the hotel and then adjusts to the new environment.',
    'Your baby needs more comforting or takes longer to fall asleep in the hotel but eventually sleeps.',
    'Your baby has some temporary disruption in sleep patterns during travel that resolves within a few days of returning home.',
  ],
  whenToMention: [
    'Your baby has persistent sleep disruption that continues for more than 1-2 weeks after returning from travel.',
    'You developed sleep habits during travel (bed-sharing, feeding to sleep) that you want help transitioning away from at home.',
    'Your baby has significant anxiety or distress about sleeping in new environments.',
  ],
  whenToActNow: [
    'You discover the hotel crib is broken, recalled, or does not meet safety standards — do not use it. Request a replacement or use your own travel crib.',
    'Your baby is sleeping in an unsafe arrangement (adult bed, sofa, or with loose bedding) and you cannot provide a safe sleep surface — consider alternative arrangements or contacting the hotel for assistance.',
    'Your baby is ill during travel with fever, difficulty breathing, or other concerning symptoms — seek local medical care rather than attributing symptoms to travel stress.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-nap-refusal', 'baby-only-sleeps-being-held', 'baby-needs-motion-to-sleep-swing'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Safe Sleep: Back to Sleep, Tummy to Play',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Child Health and Human Development — Safe Sleep for Your Baby',
      url: 'https://safetosleep.nichd.nih.gov/',
    },
    {
      org: 'CPSC',
      citation:
        'U.S. Consumer Product Safety Commission — Safe Sleep Environments for Infants',
      url: 'https://www.cpsc.gov/SafeSleep',
    },
  ],
};
