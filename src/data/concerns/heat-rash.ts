import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'heat-rash',
  title: 'Baby Heat Rash (Prickly Heat / Miliaria)',
  category: 'skin',
  searchTerms: [
    'baby heat rash',
    'prickly heat baby',
    'baby rash in hot weather',
    'red bumps on baby neck',
    'baby rash in skin folds',
    'miliaria baby',
    'baby rash from sweating',
    'heat rash on baby face',
    'baby rash chest and back',
    'how to treat baby heat rash',
  ],
  quickAnswer:
    'Heat rash happens when sweat gets trapped under your baby\'s skin, causing tiny red bumps or blisters, usually in skin folds or areas covered by clothing. It is harmless and clears up quickly once your baby is cooled down. Dressing your baby in one layer more than you would wear is a good rule of thumb to prevent overheating.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns are especially prone to heat rash because their sweat glands are not fully developed. It often appears on the neck, chest, groin folds, and armpits. Well-meaning parents sometimes overdress newborns, which is a very common cause. A good guide is to dress your baby in one more layer than you are comfortable in.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Heat rash commonly appears in the folds of the neck where drool and sweat collect, and in the creases of chubby arms and legs. In warm weather, choose loose, breathable cotton clothing and keep indoor temperatures comfortable. A lukewarm bath can provide quick relief from a heat rash flare.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become more active and mobile, they generate more body heat. Heat rash may appear after active play, being in a car seat for an extended period, or wearing a carrier. Removing layers, moving to a cooler environment, and allowing air to reach the affected skin usually resolves it within hours.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers are busy and active, making heat rash during warm months fairly common. It is especially likely in the diaper area, behind the knees, and in elbow creases. As your child\'s sweat glands mature, heat rash tends to become less frequent. Keeping them hydrated and dressed in breathable fabrics helps.',
    },
  ],
  whenNormal: [
    'Tiny red bumps in skin folds, on the neck, or under clothing that appear during warm weather or after overdressing',
    'The rash clears up within a few hours to a day once your baby cools down',
    'Small clear or white blisters on the skin surface that do not seem to bother your baby',
    'Rash that comes and goes with temperature and clothing changes',
  ],
  whenToMention: [
    'The heat rash does not improve within 2-3 days even after keeping your baby cool and dry',
    'The bumps seem to be getting larger, more red, or more swollen',
    'Your baby is scratching intensely at the rash or seems unusually fussy',
  ],
  whenToActNow: [
    'The rash develops pus-filled bumps, red streaks, or warm swollen areas, which may indicate a secondary infection',
    'Your baby has a fever along with a rash and seems unwell, as this may indicate a different type of rash that needs evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Heat Rash. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Heat-Rash.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Dressing Your Baby for the Weather. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Dressing-Your-Newborn.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Warning Signs and Symptoms of Heat-Related Illness.',
      url: 'https://www.cdc.gov/heat-health/signs-symptoms/index.html',
    },
  ],
};
