import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'weighted-sleep-sack-safety-risk',
  title: 'Are Weighted Sleep Sacks Safe for My Baby?',
  category: 'sleep',
  searchTerms: [
    'weighted sleep sack safe baby',
    'weighted sleep sack risk',
    'weighted sleep sack SIDS',
    'are weighted swaddles safe',
    'weighted wearable blanket baby',
    'Dreamland baby weighted sleep sack safety',
    'Nested Bean sleep sack safety',
    'weighted sleep sack AAP recommendation',
    'should I use weighted sleep sack',
    'weighted sleep sack suffocation risk',
  ],
  quickAnswer:
    'The AAP does not recommend weighted sleep sacks, swaddles, or wearable blankets for infants. These products have not been adequately studied for safety, and the added weight could potentially restrict a baby\'s movement, affect breathing, or make it harder for a baby to reposition if they roll into an unsafe position. Despite aggressive marketing claims, there is no evidence that weighted sleep products help babies sleep better or more safely. Standard, unweighted sleep sacks are a safe alternative to loose blankets.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'This is the highest-risk period for SIDS/SUID, and safe sleep practices are most critical. The AAP recommends a firm, flat sleep surface with a fitted sheet and nothing else in the sleep space. Unweighted sleep sacks are a safe alternative to blankets. Weighted swaddles and sleep sacks add unnecessary risk during this vulnerable period. If your baby is having difficulty sleeping, other evidence-based strategies include swaddling (unweighted, arms-only after rolling begins), white noise, and establishing a bedtime routine.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As babies begin to roll, safe sleep products become even more critical. A weighted sleep sack could make it harder for a baby who rolls to their stomach to lift their head or reposition to breathe freely. The Consumer Product Safety Commission (CPSC) has been evaluating weighted infant sleep products, and several safety concerns have been raised. Standard unweighted sleep sacks in the correct size for your baby are the safest option. If your baby is going through a sleep regression, this is temporary and does not require a weighted product.',
    },
    {
      ageRange: '6-12 months',
      context:
        'While SIDS risk decreases after 6 months, it does not disappear until age 1. Continue using safe sleep practices. Some parents turn to weighted sleep sacks out of desperation during difficult sleep periods. The marketing for these products can be persuasive, but the claims are not supported by peer-reviewed research. If your baby is struggling with sleep, talk to your pediatrician about evidence-based strategies rather than relying on unproven products. After age 1, the risk profile changes, but the AAP has not endorsed weighted products for any age of infant.',
    },
  ],
  whenNormal: [
    'Your baby sleeps restlessly or wakes frequently — this is normal infant sleep behavior, not a problem that requires a weighted product',
    'Your baby seems to prefer the feel of pressure on their body (many babies do) — consider a snug-fitting standard sleep sack instead',
    'You have received a weighted sleep sack as a gift and are wondering whether to use it — it is best to choose an unweighted alternative',
  ],
  whenToMention: [
    'You have been using a weighted sleep sack and want guidance on transitioning to an unweighted one',
    'You are struggling with your baby\'s sleep and are looking for safe strategies',
    'You are unsure which sleep products are safe and want your pediatrician\'s guidance',
  ],
  whenToActNow: [
    'Your baby has had a breathing difficulty or near-miss event while using any sleep product — seek medical evaluation immediately',
    'Your baby is sleeping in any product not designed for sleep (car seat, swing, bouncer) on a regular basis',
    'Your baby seems to have difficulty breathing, shows nasal flaring, chest retractions, or turns blue during sleep',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'unsafe-sleep-during-illness-suid',
    'baby-sleeping-face-down',
    'baby-only-sleeps-being-held',
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
      org: 'CPSC',
      citation:
        'U.S. Consumer Product Safety Commission. Nursery Products Safety Information.',
      url: 'https://www.cpsc.gov/Safety-Education/Safety-Guides/Kids-and-Babies/Cribs',
    },
  ],
};
