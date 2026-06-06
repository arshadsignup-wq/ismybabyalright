import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-tummy-time-too-early',
  title: 'When to Start Tummy Time',
  category: 'physical',
  searchTerms: ['when to start tummy time', 'tummy time newborn too early', 'tummy time from birth', 'baby hates tummy time', 'tummy time first week', 'newborn tummy time safe', 'how much tummy time newborn', 'tummy time on chest', 'baby too young for tummy time', 'tummy time and cord stump'],
  quickAnswer: 'Tummy time can and should start from day one. The AAP recommends supervised tummy time from the first day home. For newborns, this can be as simple as placing baby on your chest while you recline, or brief sessions on a firm surface for 1-3 minutes several times a day. Tummy time is essential for developing head control, strengthening muscles, and preventing flat spots.',
  byAge: [
    { ageRange: '0-1 month', context: 'Tummy time can begin right away, even with the umbilical cord stump still attached. For newborns, the easiest tummy time is chest-to-chest with a parent while reclined (which also promotes bonding and skin-to-skin contact). You can also place baby on a firm, flat surface for brief periods (1-3 minutes) several times per day while awake and supervised. Most newborns initially dislike tummy time because it is hard work for them. Keep sessions short and frequent. Getting down to eye level and talking to your baby can help.' },
    { ageRange: '1-3 months', context: 'Gradually increase tummy time to 10-15 minutes several times per day, aiming for a total of about 30-60 minutes daily by 3 months. Your baby should be lifting their head briefly and turning it from side to side. Using colorful toys, mirrors, and your face as motivation helps keep baby engaged.' },
    { ageRange: '3-6 months', context: 'Your baby should be able to hold their head up well during tummy time and may start pushing up on forearms (mini push-ups). Longer sessions are tolerated, and many babies begin to enjoy tummy time as they gain strength.' },
    { ageRange: '6-12 months', context: 'Tummy time transitions into floor play, rolling, crawling preparation, and eventually crawling itself. The strength built during tummy time is foundational for all gross motor milestones.' },
  ],
  whenNormal: ['Baby fusses during tummy time but tolerates brief sessions', 'Gradual increase in tolerance and ability over weeks', 'Baby can lift head briefly by 1-2 months', 'Head control improves with regular practice'],
  whenToMention: ['Baby absolutely refuses tummy time and cries intensely every time', 'No head lifting during tummy time by 2 months', 'You need ideas to make tummy time more tolerable'],
  whenToActNow: ['Baby cannot lift head at all during tummy time by 3-4 months', 'Baby seems extremely floppy or stiff during tummy time'],
  relatedMilestones: ['head control', 'tummy time', 'rolling'],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Back to Sleep, Tummy to Play. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Back-to-Sleep-Tummy-to-Play.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Prone Positioning and Infant Development. Pediatrics.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
  relatedConcernSlugs: ['newborn-head-lag-concerns', 'newborn-neck-support-importance', 'newborn-flat-spot-prevention'],
};
