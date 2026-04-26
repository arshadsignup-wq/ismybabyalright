import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-bearing-weight-on-arms',
  title: 'Baby Not Bearing Weight on Arms',
  category: 'physical',
  searchTerms: [
    'baby not bearing weight on arms',
    'baby won\'t push up during tummy time',
    'baby not propping on arms',
    'baby can\'t support weight on hands',
    'baby arms weak during tummy time',
    'baby won\'t prop up on forearms',
    'baby collapses on tummy',
    'baby not lifting chest off floor',
    'infant not weight bearing on arms',
    'baby arms give out during tummy time',
  ],
  quickAnswer:
    'Bearing weight on the arms is a gradual skill that develops during the first 6 months. Babies first prop up on their forearms around 2 to 4 months, then progress to pushing up on extended arms by 5 to 6 months. Regular tummy time is the best way to build this strength, even if your baby protests at first.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Very young babies are just beginning to build the upper body strength needed for weight bearing. During tummy time, they may briefly lift their head and turn it to the side, but they are not yet expected to prop up on their arms. Keep tummy time sessions short (3 to 5 minutes) and frequent throughout the day. Chest-to-chest tummy time on a parent counts and can be a gentle way to start.',
    },
    {
      ageRange: '2-4 months',
      context:
        'Most babies begin propping up on their forearms during tummy time, lifting their head and chest off the surface. They may wobble and their arms may slide out to the sides at first. By 4 months, many babies can hold a steady forearm prop and look around. If your baby makes no effort to lift their head or prop on their arms during tummy time by 4 months, discuss this with your pediatrician.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Babies progress from forearm propping to pushing up on extended arms (sometimes called a "mini push-up"). This builds the shoulder and core strength needed for rolling, sitting, and eventually crawling. By 6 months, most babies can push up well on their hands. If your baby is still unable to prop on forearms by 5 months, or seems to have significant difficulty bearing weight through their arms, it is worth getting a professional assessment.',
    },
    {
      ageRange: '6-9 months',
      context:
        'By this age, babies should be comfortable bearing weight through their arms and may be pivoting on their tummy, getting into a hands-and-knees position, or beginning to crawl. If your baby still cannot push up on extended arms or collapses when placed on their tummy, this may indicate low muscle tone or a strength concern that physical therapy could help address.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Weight bearing through the arms is well established in most babies by now and supports activities like crawling, pulling to stand, and playing on all fours. If your baby is significantly delayed in arm weight bearing at this stage, your pediatrician may refer you for an evaluation to determine whether occupational or physical therapy support would be beneficial.',
    },
  ],
  whenNormal: [
    'Your baby is under 3 months and cannot yet prop up on their forearms, as this is a skill that is just beginning to develop.',
    'Your baby props on forearms briefly but gets tired quickly and puts their head down, which is normal as endurance builds over time.',
    'Your baby pushes up well on one arm but seems to favor one side slightly, as mild asymmetry is common in early development.',
    'Your baby protests tummy time and does not spend much time weight bearing on arms simply because they do not enjoy the position.',
  ],
  whenToMention: [
    'Your baby is 4 to 5 months old and cannot prop up on their forearms at all during tummy time.',
    'Your baby seems to have very weak arms and cannot bear any weight through them even briefly.',
    'Your baby avoids tummy time entirely and becomes extremely distressed any time they are placed on their stomach.',
  ],
  whenToActNow: [
    'Your baby was previously pushing up on their arms and has lost this ability, as regression in motor skills requires prompt medical evaluation.',
    'Your baby has no head control and cannot lift their head at all during tummy time by 4 months, especially if combined with overall low muscle tone.',
  ],
  relatedMilestones: [
    'gross-motor-head-control',
    'gross-motor-tummy-time',
    'gross-motor-rolling',
    'gross-motor-crawling',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Back to Sleep, Tummy to Play. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Back-to-Sleep-Tummy-to-Play.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By Four Months.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-4mo.html',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. WHO Motor Development Study: Windows of Achievement for Six Gross Motor Development Milestones. Acta Paediatrica, 2006.',
      url: 'https://www.who.int/publications/i/item/WHO-TRS-2006-450',
    },
  ],
};
