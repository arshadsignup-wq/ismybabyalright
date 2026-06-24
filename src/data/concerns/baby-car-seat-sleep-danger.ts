import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-car-seat-sleep-danger',
  title: 'Is It Dangerous for My Baby to Sleep in a Car Seat?',
  category: 'sleep',
  searchTerms: [
    'baby sleeping in car seat danger',
    'car seat positional asphyxiation',
    'baby fell asleep in car seat',
    'leave baby sleeping in car seat',
    'car seat sleep death risk',
    'newborn car seat safe sleep time',
    'transfer sleeping baby from car seat',
    'car seat overnight sleep danger',
    'how long can baby sit in car seat',
    'car seat nap safe',
  ],
  quickAnswer:
    'Babies should not be left to sleep in car seats outside of the car. Car seat-related deaths are most often caused by positional asphyxia, which occurs when a baby\'s head falls forward, compressing the airway. While car seats are essential and safe for travel, the AAP recommends transferring your sleeping baby to a firm, flat sleep surface as soon as you reach your destination. Never use a car seat as a substitute for a crib or bassinet.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns are at the highest risk for positional asphyxia in car seats because they have poor head control and their airways are easily compromised. Their heavy heads can fall forward, partially blocking the airway, and they may not have the strength to reposition. Limit car seat time to travel only, and check on your baby frequently during car rides. When you arrive at your destination, transfer your sleeping baby to a flat sleep surface immediately, even if it means waking them briefly.',
    },
    {
      ageRange: '3-12 months',
      context:
        'While older babies have better head control, the risk of positional asphyxia in car seats remains. Car seat-related deaths have occurred in babies up to 12 months and beyond. Avoid leaving your baby to complete a nap in the car seat once you are home or at your destination. If your baby consistently falls asleep in the car, try to time travel around their awake windows. Never use after-market accessories like head supports or strap covers that did not come with the car seat, as these can interfere with the harness system.',
    },
    {
      ageRange: '12-36 months',
      context:
        'The risk decreases somewhat as toddlers develop stronger neck muscles and better airway control, but car seats should still only be used for travel. Extended naps in car seats remain a concern, especially if the child slumps forward. For travel systems, never use the car seat on a stroller with the seat in a deep recline position that was not designed for it. If your toddler falls asleep in the car during a long drive, pull over periodically to check their position and ensure the harness is snug.',
    },
  ],
  whenNormal: [
    'Your baby falls asleep during car rides but you transfer them to a crib or bassinet when you arrive at your destination.',
    'You use the car seat only for travel and never as a sleeping device at home.',
    'Your baby wakes up briefly when transferred from the car seat and settles back to sleep in their crib.',
  ],
  whenToMention: [
    'Your baby spends extended periods in a car seat due to long commutes and you need guidance on safe timing.',
    'Your baby seems to only nap well in the car seat and you need strategies for transitioning to a crib.',
    'You are uncertain about proper car seat positioning, recline angle, or harness fit for your baby\'s age.',
  ],
  whenToActNow: [
    'Your baby is found unresponsive, blue, or limp in a car seat - call 911 immediately and begin CPR.',
    'Your baby\'s head is slumped forward in the car seat and they are making unusual breathing sounds or seem to be struggling to breathe.',
    'Your baby has been left sleeping in a car seat for an extended period and is now difficult to wake, lethargic, or seems confused.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-carrier-positional-asphyxia-risk',
    'baby-co-sleeper-bassinet-safety',
    'baby-sleeping-face-down',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Car Seats: Information for Families. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/Car-Safety-Seats-Information-for-Families.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Deaths in Sitting Devices Among Infants. Pediatrics, 2019.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/31138679/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Safe Sleep: Back to Sleep, Tummy to Play. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx',
    },
  ],
};
