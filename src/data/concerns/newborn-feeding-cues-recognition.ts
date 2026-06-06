import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-feeding-cues-recognition',
  title: 'Recognizing Hunger Cues in Newborns',
  category: 'feeding',
  searchTerms: ['baby hunger cues', 'newborn feeding cues', 'how to tell baby hungry', 'baby hunger signs', 'early hunger cues newborn', 'late hunger cues', 'baby rooting hungry', 'newborn hand sucking hungry', 'baby feeding on demand cues', 'recognizing when baby is hungry'],
  quickAnswer: 'Newborns show hunger through a series of cues: early cues include smacking lips, turning head (rooting), and bringing hands to mouth; active cues include fussing, squirming, and faster movements; and late cues include crying. Responding to early cues makes feeding easier and more successful. Crying is actually a late hunger sign.',
  byAge: [
    { ageRange: '0-1 month', context: 'Learning to recognize your baby\'s hunger cues takes practice but becomes easier quickly. Early hunger cues include: stirring from sleep, opening mouth, turning head toward touch on cheek (rooting), smacking or licking lips, and bringing hands to mouth. Active hunger cues include: increased movement, stretching, and fussiness. Late hunger cues include: agitated body movements and crying. Feeding is easiest when you respond to early cues, as a crying baby may need to be calmed before they can latch effectively. Newborns typically feed 8-12 times per day, but feeding should be guided by hunger cues rather than a strict schedule.' },
    { ageRange: '1-3 months', context: 'You will become more adept at reading your baby\'s cues. Hunger cues become more distinct, and you may notice your baby looking at you expectantly or getting excited at the sight of the breast or bottle. Feeding patterns may become slightly more predictable, though on-demand feeding remains recommended.' },
    { ageRange: '3-6 months', context: 'Hunger cues become clearer: reaching for the breast or bottle, opening mouth when food is offered, and becoming fussy at mealtime. As feeding becomes more routine, you will easily recognize when your baby is hungry versus seeking comfort or stimulation.' },
    { ageRange: '6-12 months', context: 'As solid foods are introduced, hunger cues expand to include interest in food, reaching for food, opening mouth when a spoon approaches, and leaning forward. Fullness cues include turning away, closing mouth, and pushing food away.' },
  ],
  whenNormal: ['Baby shows early cues (rooting, lip smacking, hand to mouth) before becoming upset', 'Feeding on demand results in 8-12 feeds per day for newborns', 'Baby calms and feeds well when hunger cues are recognized early', 'Gradual development of more predictable feeding patterns over weeks'],
  whenToMention: ['You have difficulty recognizing when your baby is hungry versus tired or uncomfortable', 'Baby seems to show hunger cues constantly with no relief after feeding', 'You are unsure whether to follow a schedule or feed on demand'],
  whenToActNow: ['Baby never shows hunger cues, is excessively sleepy, and not interested in feeding, which could indicate illness', 'Baby shows constant distress that does not resolve with feeding, which could indicate pain, colic, or other issues'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Feeding Your Baby: Recognizing Hunger Cues. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Signs Your Child is Hungry or Full.', url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/mealtime/signs-your-child-is-hungry-or-full.html' },
  ],
  relatedConcernSlugs: ['newborn-cluster-feeding-normal', 'newborn-feeding-every-hour', 'newborn-not-waking-to-feed'],
};
