import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'sleep-safe-environment-checklist',
  title: 'Safe Sleep Environment for Baby',
  category: 'sleep',
  searchTerms: ['safe sleep baby', 'SIDS prevention', 'baby safe sleep guidelines', 'crib safety', 'baby sleep position', 'back to sleep', 'baby sleep environment', 'safe crib setup', 'baby sleep safety', 'SIDS risk factors'],
  quickAnswer: 'The ABCs of safe sleep are: Alone (no bed-sharing), on their Back, and in a Crib (or bassinet) with a firm, flat mattress and no loose items. These guidelines, recommended by the AAP, significantly reduce the risk of SIDS (Sudden Infant Death Syndrome) and other sleep-related deaths. The sleep environment should have no blankets, pillows, bumpers, stuffed animals, or positioners. Room-sharing (baby sleeping in your room but on their own sleep surface) is recommended for the first 6-12 months.',
  byAge: [
    { ageRange: '0-12 months', context: 'Safe sleep guidelines are most critical during the first year, when the risk of SIDS and sleep-related deaths is highest. Key rules: always place baby on their back to sleep (for every sleep, including naps), use a firm, flat mattress in a safety-approved crib or bassinet, keep the sleep surface bare (no blankets, pillows, bumpers, wedges, positioners, or toys), dress baby in a sleep sack instead of loose blankets, room-share without bed-sharing for at least the first 6 months, use a pacifier at sleep time (this reduces SIDS risk), avoid overheating (keep room at 68-72 degrees F), do not use inclined sleepers or dock-a-tots for unsupervised sleep.' },
    { ageRange: '1-3 years', context: 'After age 1, the risk of SIDS drops significantly, and you can begin introducing a thin blanket and a small pillow if desired (though many toddlers do fine without them). Continue using a crib until your child is climbing out or reaches 35 inches tall, then transition to a toddler bed with guardrails. Keep the sleep area free of cords, curtains, and heavy objects that could fall. Ensure furniture is anchored to the wall. The room should be childproofed since toddlers may get out of bed independently.' },
  ],
  whenNormal: ['Your baby startles or makes noise during sleep but continues sleeping safely on their back', 'Your baby rolls onto their stomach during sleep after learning to roll both ways (this is safe - do not reposition)', 'Your toddler moves all around the crib during sleep'],
  whenToMention: ['You are struggling to follow safe sleep guidelines and need support or alternatives', 'Your baby will only sleep in a position or location that does not meet safe sleep guidelines', 'You have questions about when to transition from crib to bed', 'You are co-sleeping and want to discuss ways to reduce risk'],
  whenToActNow: ['You find your baby face-down on a soft surface and they are not responsive or appear to have difficulty breathing', 'Your baby is sleeping in an inclined sleeper, car seat, swing, or bouncer for extended periods (fall and positional asphyxia risks)', 'Someone has placed loose blankets, pillows, or bumpers in the crib with a young baby'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-sleeping-on-incline', 'baby-rolling-in-sleep', 'bassinet-vs-crib-safety', 'sids-risk-factors'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Safe Sleep Recommendations. Pediatrics.', url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. How to Keep Your Sleeping Baby Safe. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Safe to Sleep Campaign.', url: 'https://safetosleep.nichd.nih.gov/' },
  ],
};
