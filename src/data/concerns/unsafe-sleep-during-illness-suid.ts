import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'unsafe-sleep-during-illness-suid',
  title: 'Safe Sleep During Illness: SUID Prevention',
  category: 'sleep',
  searchTerms: [
    'safe sleep during illness baby',
    'sick baby sleep position',
    'baby sleeping upright sick SIDS',
    'SUID prevention sick baby',
    'congested baby sleep safely',
    'baby car seat sleep SIDS risk',
    'baby sleep on incline sick',
    'sick baby sleep guidelines',
    'safe sleep sick infant',
    'SIDS risk when baby is sick',
  ],
  quickAnswer:
    'Safe sleep guidelines remain critically important even when your baby is sick. The AAP recommends that sick babies still sleep on their back, on a firm flat surface, without loose bedding or inclined devices. It is tempting to let a congested baby sleep in a car seat, swing, or inclined sleeper, but these positions significantly increase the risk of Sudden Unexpected Infant Death (SUID). If your baby is congested, use saline drops, a cool-mist humidifier, and elevate the head of the mattress slightly (from underneath, not with pillows).',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'This is the highest-risk period for SUID/SIDS, and safe sleep practices are most critical now. When your newborn is sick with a cold or congestion, continue placing them on their back to sleep in their crib or bassinet. Never let a sick baby sleep in a car seat, bouncer, swing, or on your chest while you sleep. If your baby is congested, use saline nasal drops and a bulb syringe before feeds and sleep. A cool-mist humidifier in the room can help. Contact your pediatrician if your baby under 3 months has a fever of 100.4 F or higher.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Safe sleep rules continue to apply during illness. If your baby has vomiting or reflux during illness, you might worry about them sleeping on their back, but healthy babies have protective reflexes that prevent aspiration. Inclined sleep surfaces (rockers, swings, car seats) have been associated with infant deaths and should never be used for unsupervised sleep, especially when a baby is sick and may have reduced muscle tone. If your baby is too sick to lie flat comfortably, contact your pediatrician rather than improvising sleep positions.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies grow, the risk of SIDS decreases but does not disappear until about age 1. During illness, overtired babies may fall asleep in unsafe positions — in car seats after doctor visits, in parents\' arms during late-night comfort sessions, or in swings. Transfer your baby to their firm, flat sleep surface as soon as possible. If your baby has started rolling independently, they can sleep in the position they find, but always place them on their back initially. Continue keeping the crib free of blankets, pillows, and stuffed animals during illness.',
    },
  ],
  whenNormal: [
    'Your sick baby sleeps more than usual — increased sleep is normal during illness as the body fights infection',
    'Your congested baby is fussy and has difficulty settling for sleep — this is expected and not a reason to use unsafe sleep positions',
    'Your baby wakes more frequently when sick — this is normal and will resolve as they recover',
  ],
  whenToMention: [
    'Your baby is sick and you are unsure how to manage safe sleep with their symptoms',
    'Your baby has been sleeping in an inclined device or car seat during illness and you want guidance on transitioning back to safe sleep',
    'Your baby\'s congestion is severe enough that they seem to struggle breathing while lying flat',
  ],
  whenToActNow: [
    'Your baby has difficulty breathing — nasal flaring, rib retractions, grunting, or turning blue — call 911 immediately',
    'Your baby is under 3 months with a fever of 100.4 F (38 C) or higher — this requires immediate medical evaluation',
    'Your baby is extremely lethargic, difficult to wake, or has a weak cry during illness — seek emergency care',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-sleeping-face-down',
    'weighted-sleep-sack-safety-risk',
    'baby-only-sleeps-being-held',
    'rsv-baby',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Safe Sleep: Updated 2022 Recommendations. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Keep Your Sleeping Baby Safe. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Sudden Unexpected Infant Death and Sudden Infant Death Syndrome.',
      url: 'https://www.cdc.gov/sids/about/index.html',
    },
  ],
};
