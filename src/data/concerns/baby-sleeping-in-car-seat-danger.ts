import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-sleeping-in-car-seat-danger',
  title: 'Baby Sleeping in Car Seat - Positional Asphyxiation Risk',
  category: 'sleep',
  searchTerms: ['baby sleeping in car seat danger','baby car seat positional asphyxiation','baby fell asleep in car seat','is it safe for baby to sleep in car seat','baby car seat head drop','car seat sleep risk','baby sleeping upright dangerous','car seat nap safety','how long can baby sleep in car seat','baby head slump car seat','infant car seat sleep death','car seat outside car danger'],
  quickAnswer: 'Babies should not sleep in car seats outside of the car or for extended periods. When a car seat is placed on a flat surface (like the floor or a stroller), the angle changes and a baby\'s heavy head can fall forward, compressing the airway - this is called positional asphyxiation. Studies have found that nearly 3% of infant sleep-related deaths occurred in sitting devices, with car seats being the most common. Always transfer your sleeping baby to a firm, flat surface as soon as you arrive at your destination.',
  byAge: [
    { ageRange: '0-3 months', context: 'Newborns are at the highest risk for positional asphyxiation because they have poor head control and their heads are proportionally heavy. In a car seat on a non-flat surface, the head can drop forward and block the airway in minutes. Never leave a newborn sleeping in a car seat outside of the car. Limit car seat time to necessary travel. After arriving at your destination, move your baby to a firm, flat sleep surface. The AAP recommends that car seats should be used only for travel.' },
    { ageRange: '3-6 months', context: 'Even as head control improves, babies this age are still at risk because they may not be strong enough to reposition themselves if their airway becomes compromised. Do not use the car seat as a substitute for a crib or bassinet. If your baby falls asleep in the car, transfer them when you arrive. It is fine for a baby to sleep during a car ride while the car seat is properly installed in the car at the correct angle - the risk is when the car seat is removed and placed on a flat surface.' },
    { ageRange: '6-12 months', context: 'The risk decreases as babies develop better head and neck control, but positional asphyxiation can still occur. Babies in this age range sometimes fall asleep on longer car trips. Keep trips as short as possible for young babies, and check on your baby regularly if they fall asleep. The car seat should always be installed at the manufacturer\'s recommended angle. Never add aftermarket inserts, head supports, or padding that was not included with the car seat.' },
    { ageRange: '12-24 months', context: 'Toddlers in rear-facing car seats may still slump forward when sleeping. Continue to monitor your child during car rides and transfer them to a bed when you arrive. The same principles apply to other inclined seating devices like bouncers, swings, and strollers - these are not safe sleep surfaces. If your toddler falls asleep in a swing or bouncer, move them to their crib.' },
  ],
  whenNormal: ['Your baby falls asleep during a car ride in a properly installed car seat - this is fine during travel','You transfer your sleeping baby from the car seat to a crib or firm flat surface when you arrive','Your baby is in the car seat for travel durations of under 2 hours with periodic checks'],
  whenToMention: ['Your baby routinely sleeps in the car seat outside of the car because it is the only way they will sleep','You are unsure about the correct angle for your car seat installation','Your baby seems to have difficulty breathing or makes unusual sounds when in the car seat','You need guidance on safe sleep alternatives for a baby who will not sleep flat'],
  whenToActNow: ['Your baby is unresponsive, blue, or not breathing after sleeping in a car seat or other inclined device - call 911 immediately','Your baby\'s head is slumped forward with chin on chest and they are difficult to rouse','You find your baby limp, very pale, or struggling to breathe in any sitting device'],
  relatedMilestones: ['sleep-consolidation'],
  showSelfReferral: false,
  relatedConcernSlugs: ['sids-risk-factors','cosleeping-safety','baby-cries-when-put-down-to-sleep'],
  sources: [
    { org: 'AAP', citation: 'Liaw P, et al. Infant Deaths in Sitting Devices. Pediatrics. 2019.', url: 'https://pubmed.ncbi.nlm.nih.gov/31182552/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Car Seats: Information for Families. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/Car-Safety-Seats-Information-for-Families.aspx' },
    { org: 'AAP', citation: 'Moon RY, et al. Sleep-Related Infant Deaths: Updated 2022 Recommendations. Pediatrics. 2022.', url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022' },
  ],
};
