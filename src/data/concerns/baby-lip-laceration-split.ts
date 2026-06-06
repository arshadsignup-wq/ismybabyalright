import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-lip-laceration-split',
  title: 'My Baby Has a Split or Cut Lip',
  category: 'medical',
  searchTerms: [
    'baby split lip',
    'baby cut lip',
    'baby lip laceration',
    'baby lip bleeding fall',
    'baby busted lip',
    'toddler split lip stitches',
    'baby lip wound care',
    'baby lip cut how to treat',
    'baby lip swollen after fall',
    'baby fat lip injury',
  ],
  quickAnswer:
    'Split lips from falls are very common in babies and toddlers. The lip area bleeds heavily because of its rich blood supply, so injuries often look worse than they are. Apply firm pressure with a clean cloth for 15 minutes. Small cuts that do not cross the border between the lip skin and facial skin (the vermilion border) usually heal well on their own. Cuts that cross this border, are deep, gaping, or very long may need stitches for the best cosmetic result.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Lip injuries are rare in young babies. If your newborn has a lip cut, apply gentle pressure and contact your pediatrician. Ensure it is from an identifiable cause. Lip bruises in young babies without a clear cause should always be evaluated.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As babies put everything in their mouths and begin to move more, minor lip injuries can occur. A split lip from bumping against a toy or surface will bleed and swell but usually heals quickly. Apply pressure, then apply a cold compress wrapped in cloth to reduce swelling. Continue breastfeeding or bottle feeding as normal.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Falls while pulling up or cruising are a common cause of split lips. After controlling bleeding, examine the cut. If it is inside the lip only and less than half an inch, it will likely heal without stitches. The inside of the mouth heals remarkably fast. Offer cool foods and keep the area clean.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddler lip injuries are extremely common. Swelling from a lip injury may make the lip look alarmingly large. Ice wrapped in cloth applied for 10-15 minutes helps reduce swelling. If the cut crosses the vermilion border (the line where lip meets face skin), it may need stitches for cosmetic alignment. See your doctor within 6-8 hours for best results.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Active play leads to frequent lip bumps and cuts. Teach your child to run with their mouth closed. After a lip injury, watch for signs of infection over the next few days: increasing redness, warmth, swelling, or pus. Also check the teeth for looseness or damage after any fall that affects the mouth area.',
    },
  ],
  whenNormal: [
    'Bleeding from a small lip cut stops within 15 minutes of firm pressure',
    'The lip is swollen but the cut is small and the edges come together on their own',
    'Your baby is eating and drinking normally within a few hours of the injury',
  ],
  whenToMention: [
    'A lip cut is larger than half an inch or seems deep',
    'The cut crosses the vermilion border (lip line) and you want to know if stitches are needed',
    'The lip remains significantly swollen after 48 hours',
  ],
  whenToActNow: [
    'Bleeding does not stop after 15-20 minutes of steady, firm pressure',
    'A large or deep laceration goes all the way through the lip, or the cut crosses the lip border and needs alignment for proper healing - seek medical care within 6-8 hours',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-tongue-injury-bleeding',
    'baby-dental-trauma-fall',
    'baby-cut-bleeding-wound',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Mouth and Dental Injuries. HealthyChildren.org.',
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
        'National Library of Medicine. Lip Laceration Repair. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK549867/',
    },
  ],
};
