import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-tongue-injury-bleeding',
  title: 'My Baby Bit or Cut Their Tongue',
  category: 'medical',
  searchTerms: [
    'baby bit tongue bleeding',
    'baby tongue cut',
    'baby tongue laceration',
    'baby tongue bleeding won\'t stop',
    'baby fell bit tongue',
    'toddler tongue injury',
    'baby tongue stitches needed',
    'baby tongue cut how to treat',
    'baby bit through tongue',
    'baby tongue wound care',
  ],
  quickAnswer:
    'Tongue injuries are common in babies and toddlers and often look worse than they are because the tongue has an excellent blood supply. Most tongue lacerations heal well without stitches. Apply gentle pressure with a clean cloth for 15 minutes. Small cuts (less than half an inch) on the tip or surface usually heal quickly on their own. Cuts that are deep, gaping, or on the edge of the tongue may need medical evaluation for possible sutures.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Tongue injuries are rare in very young babies. If your newborn has bleeding from the tongue or mouth, apply gentle pressure and contact your pediatrician. Ensure the bleeding is from an injury and not from another cause such as a blood-tinged cough or nasal drainage.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As babies begin teething, they may accidentally bite their own tongue. This usually causes brief bleeding that stops quickly with gentle pressure. Offer cold teething items to soothe the area. Watch for signs of infection over the next few days: increasing swelling, redness, fever, or foul odor.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Falls while learning to stand or walk with objects in the mouth commonly cause tongue bites. Remove the object, control bleeding with gentle pressure, and assess the injury. If the cut is small and the edges come together on their own, it will likely heal without stitches. Offer cool, soft foods. The tongue heals remarkably quickly.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers frequently bite their tongues during falls. The bleeding can look dramatic but usually stops within 15 minutes of steady pressure. After the bleeding stops, examine the wound. The mouth heals faster than almost any other area of the body. Offer cold or soft foods and avoid salty, spicy, or acidic foods for a few days.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Tongue injuries from biting during falls, play, or eating are common. Most heal well on their own. Teach your child not to run with objects in their mouth. A tongue injury that creates a flap, involves the edge of the tongue, or is deep enough that you can see fat or muscle tissue needs medical evaluation for possible sutures.',
    },
  ],
  whenNormal: [
    'Bleeding stops within 15 minutes of applying gentle pressure',
    'A small surface cut that is less than half an inch and the edges come together naturally',
    'The area is sore for a day or two but your baby is eating and drinking',
  ],
  whenToMention: [
    'A tongue cut is larger than half an inch or the edges do not come together',
    'Your baby is avoiding eating or drinking because of tongue pain days after the injury',
    'The wound looks like it is not healing or appears infected after a few days',
  ],
  whenToActNow: [
    'Bleeding from a tongue injury does not stop after 15-20 minutes of consistent firm pressure',
    'The tongue is partially or completely bitten through, there is a large gaping wound, or the injury involves the base of the tongue near the throat',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-lip-laceration-split',
    'baby-dental-trauma-fall',
    'baby-cut-bleeding-wound',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Mouth Injuries. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Mouth-Injuries.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Cuts and scrapes: First aid.',
      url: 'https://www.mayoclinic.org/first-aid/first-aid-cuts/basics/art-20056711',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Oral Wound Management. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK551530/',
    },
  ],
};
