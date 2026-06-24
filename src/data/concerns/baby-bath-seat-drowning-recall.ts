import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-bath-seat-drowning-recall',
  title: 'Baby Bath Seat Safety and Drowning Risk',
  category: 'physical',
  searchTerms: [
    'baby bath seat safety',
    'bath seat drowning risk',
    'baby bath seat recall',
    'infant bath seat danger',
    'baby bath ring tip over',
    'bath seat suction cup fail',
    'safe way to bathe baby',
    'baby bath seat vs baby tub',
    'bath seat strangulation risk',
    'baby bath drowning prevention',
  ],
  quickAnswer:
    'Baby bath seats and bath rings have been associated with numerous drowning deaths and the CPSC strongly warns that they are not safety devices. Bath seats can create a false sense of security, leading caregivers to step away briefly, but babies can tip over, slide out, or get trapped in seconds. Drowning can occur in as little as one inch of water. The only safe approach is continuous hands-on supervision during every bath.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Young babies who cannot sit independently should be bathed in a small infant tub or basin, fully supported by your hand and arm at all times. Sponge baths are recommended until the umbilical cord stump falls off. Never place a young baby in a bath seat designed for older babies. Keep the water level low - just enough to keep your baby warm. Your hand should always be on your baby during the entire bath. Have all supplies within arm\'s reach before starting so you never need to turn away.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Even after babies can sit independently, they can lose balance suddenly and go face-first into water. Bath seats with suction cups can detach, and ring-style seats can trap babies if they slide through the leg openings. If you use a bath seat, treat it only as a bathing aid, never as a safety device, and keep one hand on your baby at all times. Never leave the bathroom for any reason - if the phone rings or someone is at the door, wrap your baby in a towel and take them with you.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers are curious and impulsive, which adds to bath drowning risk. They may stand up in the tub, try to climb out, or play with faucets. Continue constant supervision. Avoid bath seats at this age as children can flip them or climb out of them. Non-slip mats in the tub are a safer alternative. Teach basic water safety but never rely on a toddler to keep themselves safe. Always drain the tub immediately after use.',
    },
  ],
  whenNormal: [
    'You always keep one hand on your baby during bath time and never leave them unattended.',
    'Your baby enjoys bath time and you have a safe routine with all supplies prepared in advance.',
    'You use a bath seat as an aid for positioning while maintaining continuous hands-on supervision.',
  ],
  whenToMention: [
    'You are unsure about the safest bathing setup for your baby\'s age and ability level.',
    'Your baby has had a near-miss incident in the bath such as slipping under water briefly.',
    'You want to discuss water safety as your baby grows and becomes more mobile.',
  ],
  whenToActNow: [
    'Your baby has gone under water or inhaled water during a bath - even briefly - and is coughing, having difficulty breathing, or seems lethargic afterward (secondary drowning can occur hours later).',
    'Your baby is unresponsive after a water incident - call 911 and begin infant CPR immediately.',
    'Your baby was found unattended in water of any depth, even if they seem fine - seek medical evaluation for possible aspiration.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'apartment-baby-proofing-small-space',
    'baby-falls-off-bed-when-to-worry',
    'baby-body-temperature-regulation',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bathing Your Baby Safely. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Bathing-Your-Newborn.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Drowning Prevention for Parents.',
      url: 'https://www.cdc.gov/drowning/prevention/index.html',
    },
    {
      org: 'NIH',
      citation:
        'Consumer Product Safety Commission. Bath Seats and Rings: Safety Alert.',
      url: 'https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Bath-Seats',
    },
  ],
};
