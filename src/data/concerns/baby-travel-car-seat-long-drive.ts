import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-travel-car-seat-long-drive',
  title: 'Long Car Trips with Baby: Car Seat Safety',
  category: 'medical',
  searchTerms: [
    'long car drive baby',
    'baby car seat long trip',
    'how long can baby be in car seat',
    'road trip with baby',
    'baby car seat time limit',
    'newborn car seat 2 hours',
    'baby car seat breaks how often',
    'car seat positional asphyxia',
    'long drive with infant',
    'baby road trip tips safety',
  ],
  quickAnswer:
    'Babies should not spend more than 2 hours at a time in a car seat without a break, and newborns should ideally be limited to 30-minute intervals initially. The semi-reclined position can cause positional asphyxia, where the baby\'s chin drops to their chest and restricts breathing. During long trips, stop every 1.5-2 hours to take your baby out of the car seat, feed them, change their diaper, and let them stretch. Never leave a baby sleeping in a car seat outside of the car.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young babies are at highest risk for positional asphyxia in car seats because of poor head control. Many car seat manufacturers and pediatric organizations recommend limiting car seat time to 30 minutes for newborns and working up to 2 hours for babies under 3 months. Plan long trips with frequent stops. Have an adult sit in the back seat to monitor the baby during the drive. Ensure the car seat is installed at the correct angle (usually 30-45 degrees) to keep the airway open. Do not use extra padding, inserts not included with the seat, or aftermarket accessories.',
    },
    {
      ageRange: '3-6 months',
      context:
        'While head control is improving, the 2-hour guideline remains important. Plan your route with rest stops every 1.5-2 hours. During stops, take the baby completely out of the car seat for feeding and stretching. Try to time drives around nap schedules so your baby sleeps part of the way. Do not drape blankets over the car seat handle to create shade, as this restricts airflow. A window shade on the car window is a safer option for sun protection.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Continue following the 2-hour maximum car seat guideline. Rear-facing car seats should be used until at least age 2 (and ideally as long as the seat allows). Older babies may become more restless during long drives. Plan stops where your baby can crawl or move around safely. Bring familiar toys and snacks (age-appropriate) for entertainment. Never leave your child alone in a car, even for a moment - heatstroke can occur in minutes. Keep the car seat properly installed and adjust the harness as your baby grows.',
    },
  ],
  whenNormal: [
    'You take breaks every 1.5-2 hours to let your baby out of the car seat during long drives.',
    'Your baby is fussy during the drive but is comfortable when taken out of the car seat.',
    'You use the car seat only for vehicle travel and transfer your baby to a flat surface for sleep.',
  ],
  whenToMention: [
    'You need to make a very long drive and are concerned about car seat time limits for your specific baby.',
    'Your baby has breathing or airway concerns and you are unsure about car seat safety.',
    'You are unsure if your car seat is installed at the correct angle for your baby.',
  ],
  whenToActNow: [
    'Your baby\'s head has dropped forward with chin on chest and they are difficult to rouse.',
    'Your baby has turned blue, stopped breathing, or become limp while in the car seat.',
    'Your baby has been in the car seat for an extended period in a hot car and shows signs of heat exhaustion.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-stroller-nap-safety', 'baby-safe-sleep-position-back', 'baby-travel-airplane-tips'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Car Seats: Information for Families. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/Car-Safety-Seats-Information-for-Families.aspx',
    },
    {
      org: 'NHTSA',
      citation:
        'National Highway Traffic Safety Administration - Car Seat Safety.',
      url: 'https://www.nhtsa.gov/equipment/car-seats-and-booster-seats',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Road Trip Safety for Families. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/Road-Trip-Safety-Tips.aspx',
    },
  ],
};
