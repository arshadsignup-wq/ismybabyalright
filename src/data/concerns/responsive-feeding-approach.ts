import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'responsive-feeding-approach',
  title: 'What Is Responsive Feeding?',
  category: 'feeding',
  searchTerms: ['responsive feeding', 'demand feeding', 'baby-led feeding', 'feeding on cue', 'responsive feeding approach', 'trust baby appetite', 'division of responsibility feeding', 'Ellyn Satter feeding', 'baby knows when full', 'intuitive eating baby'],
  quickAnswer: 'Responsive feeding means watching for and responding to your baby\'s hunger and fullness cues rather than feeding by the clock or pressuring baby to eat a certain amount. Research shows this approach supports healthy weight, reduces picky eating, and builds a positive relationship with food. The parent provides what, when, and where to eat while the child decides how much and whether to eat.',
  byAge: [
    { ageRange: '0-3 months', context: 'Feed on demand when baby shows hunger cues like rooting, fist-to-mouth, or fussing. Stop when baby shows fullness cues like turning away, closing mouth, or falling asleep. Avoid trying to get baby to finish every bottle.' },
    { ageRange: '4-6 months', context: 'When starting solids, let baby set the pace. Offer food but do not force it in. Watch for cues like opening mouth eagerly (hungry) versus turning head away or closing mouth (full).' },
    { ageRange: '6-9 months', context: 'Continue responsive feeding with both milk and solids. Allow baby to self-feed when possible. Avoid airplane spoon games that trick baby into eating when they have signaled they are done.' },
    { ageRange: '9-12 months', context: 'Trust baby\'s appetite. Some meals they will eat a lot and others very little. Do not use praise or rewards for eating. Keep mealtimes pleasant and pressure-free.' },
    { ageRange: '12-24 months', context: 'Apply the division of responsibility: you decide what is offered, when meals happen, and where eating occurs. Your toddler decides how much to eat and whether to eat it. This reduces mealtime battles and promotes healthy eating habits long-term.' },
  ],
  whenNormal: ['Baby eats different amounts at different meals', 'Baby sometimes refuses food you offer', 'Baby and toddler appetites fluctuate from day to day', 'Baby signals when they are done and you respect that signal'],
  whenToMention: ['You are struggling with mealtime battles and want guidance', 'You feel pressure from others to make your child eat more', 'You are unsure how to tell if baby is eating enough without measuring portions'],
  whenToActNow: ['Baby is not growing well despite responsive feeding attempts', 'Baby shows no hunger cues at all and is lethargic'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-hunger-fullness-cues', 'pressure-to-eat-effects', 'baby-eating-schedule-rigidity'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Responsive Feeding and Infant Growth. Pediatrics, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx' },
    { org: 'WHO', citation: 'World Health Organization. Responsive Feeding: Supporting Close Relationships Between Caregivers and Children. 2004.', url: 'https://www.who.int/publications/i/item/9241593431' },
  ],
};
