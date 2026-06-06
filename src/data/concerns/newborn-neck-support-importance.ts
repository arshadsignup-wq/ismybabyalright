import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-neck-support-importance',
  title: 'Supporting Baby\'s Head and Neck',
  category: 'physical',
  searchTerms: ['supporting baby head', 'newborn neck support', 'baby head flopping', 'when can I stop supporting baby head', 'newborn head control development', 'baby neck support importance', 'head fell back baby', 'forgot to support baby head', 'newborn head support how long', 'baby head wobble'],
  quickAnswer: 'Supporting your newborn\'s head and neck is essential because their neck muscles are too weak to hold up their heavy head. Always support the head when holding, carrying, or moving your baby. Most babies develop good head control by 4 months. If your baby\'s head occasionally flops back briefly, it is very unlikely to cause harm.',
  byAge: [
    { ageRange: '0-1 month', context: 'Your newborn\'s head is the heaviest part of their body relative to their size, and the neck muscles are not yet strong enough to support it. Always cradle the head and neck with your hand or arm when holding your baby. When placing baby in a car seat, bouncer, or swing, ensure the head is well-supported and not slumping forward (which could restrict breathing). If the head accidentally flops back briefly, do not panic. Babies are resilient, and a brief unsupported moment is very unlikely to cause injury.' },
    { ageRange: '1-3 months', context: 'Your baby is building neck strength through tummy time and natural movement. By 1-2 months, many babies can briefly lift their head during tummy time. By 3 months, most can hold their head steady for short periods. Continue supporting the head during handling but expect to see gradual improvement.' },
    { ageRange: '3-6 months', context: 'By 4 months, most babies can hold their head steady when upright. You will need to support the head less frequently but still be mindful during quick movements or transfers. The head should be steady and centered, not flopping to one side or the other.' },
    { ageRange: '6-12 months', context: 'Head control is well-established. Your baby can hold their head up in all positions. Continue to be gentle during play but formal head support is no longer needed.' },
  ],
  whenNormal: ['Needing full head support for the first 3-4 months', 'Gradual improvement in head control over weeks', 'Brief head wobbles even in babies developing normally', 'Occasional head flop that baby recovers from quickly'],
  whenToMention: ['No improvement in head control by 3 months despite regular tummy time', 'Head consistently tilts to one side (possible torticollis)', 'Baby seems unable to lift head at all during tummy time by 2 months'],
  whenToActNow: ['Loss of previously achieved head control, which could indicate a neurological issue', 'After any significant trauma or forceful neck movement, especially if baby seems lethargic or different afterward'],
  relatedMilestones: ['head control', 'tummy time'],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Movement Milestones. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-Birth-to-Three-Months.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Important Milestones.', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
  ],
  relatedConcernSlugs: ['newborn-head-lag-concerns', 'newborn-cradle-hold-safety', 'newborn-tummy-time-too-early'],
};
