import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-inclined-sleeper-recall-risk',
  title: 'Are Inclined Baby Sleepers Safe?',
  category: 'sleep',
  searchTerms: [
    'inclined sleeper recall baby',
    'Fisher Price Rock n Play recall',
    'inclined sleeper dangerous baby',
    'baby sleeper recall list',
    'are inclined sleepers safe for babies',
    'baby sleep positioner risk',
    'baby inclined sleep SIDS risk',
    'recalled baby sleepers',
    'baby rocker sleep safety',
    'baby swing sleep danger',
    'baby sleep wedge risk',
  ],
  quickAnswer:
    'Inclined sleepers, sleep positioners, and any product that places a baby on an inclined surface for sleep are dangerous and have been linked to dozens of infant deaths. The Fisher-Price Rock \'n Play and many similar products have been recalled. The CPSC, FDA, and AAP all advise that babies should only sleep on a firm, flat surface at no more than a 10-degree angle. Infants can suffocate when they roll or shift position on an inclined surface.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'This is the period of highest risk for sleep-related deaths. The only safe sleep surface for an infant is a firm, flat mattress in a safety-approved crib, bassinet, or play yard with a fitted sheet and nothing else. Inclined sleepers (with angles greater than 10 degrees) are dangerous because young babies can flex their heads forward, compressing their airway (positional asphyxia), or roll to the side and suffocate against the padded sides. The CPSC has banned the manufacture and sale of inclined sleepers since 2022 due to over 100 reported deaths. If you received one as a gift or have one from an older child, do not use it.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As babies gain the ability to roll, the risk from inclined sleepers increases further. Babies who roll onto their stomachs on an inclined or padded surface may not be able to reposition themselves and can suffocate. This also applies to car seat carriers, bouncers, swings, and strollers — while babies may fall asleep in these, they should be moved to a flat sleep surface as soon as possible. The AAP recommends supervising any time a baby is in a device that is not an approved flat sleep surface. Do not use sleep positioners, wedges, or nests regardless of marketing claims.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Continue to use only approved flat sleep surfaces. While the risk of SIDS decreases after 6 months, suffocation risks from unsafe sleep products remain. If your baby has reflux and you have been advised to elevate one end of the crib, speak with your pediatrician — the AAP no longer recommends elevating the head of the crib for reflux management, as there is no evidence it helps and it can cause the baby to slide into an unsafe position. Check all sleep products against the CPSC recall list. When traveling, bring a portable crib rather than relying on hotel-provided products that may be outdated or recalled.',
    },
  ],
  whenNormal: [
    'Your baby sleeps on a firm, flat surface in an approved crib, bassinet, or play yard with nothing but a fitted sheet.',
    'Your baby briefly falls asleep in a car seat during a car ride and you move them to a flat surface when you arrive at your destination.',
    'You supervise your baby during awake time in a bouncer or swing and transfer them to a safe sleep surface when they fall asleep.',
  ],
  whenToMention: [
    'Your baby has reflux and you are wondering about safe ways to manage it without inclined sleep surfaces.',
    'You are unsure whether a specific sleep product you own is safe or has been recalled.',
    'Your baby will only fall asleep in a swing or bouncer and you need strategies for transitioning to a flat sleep surface.',
  ],
  whenToActNow: [
    'Your baby is sleeping on a recalled inclined sleeper — stop using it immediately and switch to an approved flat sleep surface.',
    'Your baby has been found face-down or in an awkward position on an inclined surface and is not responsive or is having difficulty breathing — call 911 immediately.',
    'You discover that a sleep product you are using has a suffocation or entrapment hazard — stop using it immediately and report it to the CPSC.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-sleeping-face-down', 'baby-needs-motion-to-sleep-swing', 'baby-only-sleeps-being-held'],
  sources: [
    {
      org: 'CPSC',
      citation:
        'U.S. Consumer Product Safety Commission — Inclined Sleeper Safety Rule',
      url: 'https://www.cpsc.gov/Newsroom/News-Releases/2022/CPSC-Approves-New-Federal-Safety-Standard-for-Infant-Sleep-Products',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Safe Sleep Recommendations',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx',
    },
    {
      org: 'FDA',
      citation:
        'U.S. Food and Drug Administration — Baby Sleep Positioners: A Safety Risk',
      url: 'https://www.fda.gov/consumers/consumer-updates/do-not-use-infant-sleep-positioners-due-risk-suffocation',
    },
  ],
};
