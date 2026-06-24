import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-needs-motion-to-sleep-swing',
  title: 'My Baby Only Falls Asleep with Motion (Swing, Car, Bouncing)',
  category: 'sleep',
  searchTerms: [
    'baby needs motion to sleep',
    'baby only sleeps in swing',
    'baby needs rocking to sleep',
    'baby only sleeps in car',
    'baby needs bouncing to fall asleep',
    'baby wont sleep without rocking',
    'baby swing sleep safe',
    'transitioning baby from swing to crib',
    'baby sleep associations motion',
    'baby needs to be held and rocked',
  ],
  quickAnswer:
    'Many babies find motion soothing and fall asleep more easily when rocked, bounced, or in a swing or car. While this is a normal preference, it can become a challenging sleep association if the baby cannot fall asleep any other way. For safety, babies should be moved to a firm, flat sleep surface once they fall asleep — sleeping in swings, car seats, bouncers, or strollers increases the risk of positional asphyxia. Gradually reducing motion dependence can help your baby learn to fall asleep independently.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In the "fourth trimester," babies are biologically designed to find motion comforting — it mimics the constant movement they experienced in the womb. Rocking, swaying, and bouncing are completely appropriate soothing strategies at this age. The 5 S\'s technique (swaddling, side/stomach position for calming, shushing, swinging, sucking) developed by Dr. Harvey Karp is evidence-based for soothing young infants. However, once your baby falls asleep, transfer them to a flat, firm sleep surface. Never leave a baby sleeping unsupervised in a swing, bouncer, or car seat — the semi-reclined position can cause the chin to drop to the chest, restricting the airway.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Around 3-4 months, babies begin developing more mature sleep cycles, and this is a good time to start gently encouraging non-motion sleep. Try reducing the intensity of motion gradually: rock until drowsy but not fully asleep, then place in the crib. Use other soothing strategies (white noise, pacifier, gentle patting) alongside decreased motion. Some families use the "pick up, put down" method — picking the baby up when they cry, calming them, and putting them back down drowsy. Expect this transition to take time; consistency over 1-2 weeks typically shows progress.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, motion-dependent sleep can become more entrenched and harder to change. If your baby relies on vigorous rocking, bouncing, or a swing for every sleep, consider a more structured approach to transitioning. Options include gradually reducing the speed/intensity of the swing, moving from swinging to rocking in arms to patting in the crib, or gentle sleep training methods. Some babies need a "cold turkey" approach where the motion stops, though this can involve more protest initially. Ensure the daytime schedule is age-appropriate (2-3 naps with proper wake windows) so your baby is tired enough to sleep without motion.',
    },
  ],
  whenNormal: [
    'Your newborn is soothed by rocking and motion — this is biologically normal in the first few months.',
    'Your baby falls asleep during car rides or stroller walks — this is common and expected.',
    'Your baby needs some gentle rocking to transition to sleep but can be placed down and stay asleep on a flat surface.',
  ],
  whenToMention: [
    'Your baby is over 4 months old and cannot fall asleep at all without vigorous rocking, bouncing, or a swing.',
    'You are exhausted from having to rock or bounce your baby for extended periods to achieve every sleep.',
    'Your baby wakes frequently and needs motion to go back to sleep each time, resulting in poor sleep for the whole family.',
  ],
  whenToActNow: [
    'Your baby is regularly sleeping in a swing, bouncer, car seat, or other inclined device — move them to a flat sleep surface. These products are associated with sleep-related infant deaths.',
    'Your baby has fallen asleep in a car seat and you discover their head has fallen forward, chin to chest, restricting their airway — reposition immediately and monitor closely.',
    'Your baby is having breathing difficulties or color changes while sleeping in any non-flat sleep surface — move them and seek medical care if needed.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-only-sleeps-being-held', 'baby-inclined-sleeper-recall-risk', 'baby-nap-refusal', 'baby-pick-up-put-down-method'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Safe Sleep: Back to Sleep, Tummy to Play',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx',
    },
    {
      org: 'CPSC',
      citation:
        'U.S. Consumer Product Safety Commission — Infant Sleep Products Safety Standard',
      url: 'https://www.cpsc.gov/SafeSleep',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Child Health and Human Development — Safe to Sleep Campaign',
      url: 'https://safetosleep.nichd.nih.gov/',
    },
  ],
};
