import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'hotel-baby-proofing-tips',
  title: 'Hotel Baby-Proofing Tips',
  category: 'behavior',
  searchTerms: [
    'baby proofing hotel room',
    'traveling with baby hotel safety',
    'hotel room hazards for baby',
    'portable baby proofing travel',
    'toddler safe hotel room',
    'hotel room baby safety checklist',
    'Airbnb baby proofing tips',
    'vacation rental child safety',
  ],
  quickAnswer:
    'Hotels and vacation rentals are not designed with baby safety in mind. Common hazards include uncovered outlets, accessible cords (blinds, lamps, curtains), unsecured furniture, balconies, mini-bar contents, small objects, and bathroom hazards. A quick room scan upon arrival and a small travel baby-proofing kit (outlet covers, cord wraps, rubber bands for cabinet handles, door stoppers) can significantly reduce risks. Never leave a mobile baby or toddler unsupervised in an unfamiliar room.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Non-mobile babies have fewer room hazards but safe sleep is the priority. Hotels may provide cribs that do not meet current safety standards. Consider bringing your own portable crib or bassinet. Avoid placing the baby on hotel beds for sleep — the soft bedding is a suffocation risk. Check for cords within reach of the sleeping area.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies beginning to roll and reach need a safe sleeping space away from hazards. Check for cords, small objects, and sharp edges at baby\'s level. If using a hotel crib, ensure it has no gaps larger than the width of your finger between mattress and sides.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Mobile babies require the most vigilance. Upon arrival, get on hands and knees and look at the room from your baby\'s perspective. Cover outlets, move cords out of reach, check for small objects under furniture, secure any tippy furniture, and block access to bathrooms and balconies.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers can open drawers, cabinets, and doors — check for accessible cleaning supplies, mini-bar items, and medication. Secure balcony doors and window locks. Move furniture away from windows. Consider a portable door handle cover to prevent your toddler from leaving the room. Request a room on a lower floor if possible.',
    },
  ],
  whenNormal: [
    'You do a quick safety check upon arrival and make basic adjustments to the room',
    'You bring a small travel kit with outlet covers, cord wraps, and a portable crib or sleep space',
    'You supervise your mobile baby or toddler closely in the unfamiliar environment',
    'Your child is curious about the new space — this is normal exploratory behavior',
  ],
  whenToMention: [
    'Your child has had a minor injury in a hotel or rental that you want to discuss with your pediatrician',
    'You are traveling with a child who has specific medical needs and want to plan for safe accommodations',
    'Travel anxiety about your child\'s safety is preventing you from taking family trips',
  ],
  whenToActNow: [
    'Your child has ingested something from the hotel room (cleaning products, mini-bar items, medications) — call Poison Control (1-800-222-1222) immediately',
    'Your child has fallen from hotel furniture, a window, or a balcony and shows any injury — seek emergency care',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'water-safety-drowning-prevention',
    'free-range-parenting-safety',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Childproofing Your Home. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Childproofing-Your-Home.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Injury Prevention & Control: Child Safety.',
      url: 'https://www.cdc.gov/injury/index.html',
    },
  ],
};
