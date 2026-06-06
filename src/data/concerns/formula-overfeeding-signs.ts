import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'formula-overfeeding-signs',
  title: 'Am I Overfeeding My Baby with Formula?',
  category: 'feeding',
  searchTerms: ['overfeeding formula baby', 'too much formula baby', 'formula overfeeding signs', 'baby spitting up too much formula', 'baby drinking too much formula', 'formula fed baby eating too much', 'overfeeding bottle', 'signs of overfeeding infant', 'overfeeding newborn formula', 'baby gaining too much weight formula'],
  quickAnswer: 'Overfeeding is more common with bottle feeding than breastfeeding because it is easier to see how much baby drinks and there may be pressure to finish the bottle. Signs include frequent large spit-ups, gassiness, rapid weight gain, and fussiness after feeds. Paced bottle feeding, watching for fullness cues, and not pressuring baby to finish every bottle can help prevent overfeeding.',
  byAge: [
    { ageRange: '0-3 months', context: 'Newborns may seem to want to eat constantly, but part of this is the sucking reflex. Use a pacifier between feeds if baby seems to want to suck but is not hungry. Follow hunger cues like rooting and fussing rather than offering a bottle on a schedule. Use slow-flow nipples.' },
    { ageRange: '4-6 months', context: 'If baby consistently drinks more than 32 ounces per day and is gaining weight rapidly, discuss with your pediatrician. Practice paced bottle feeding by holding the bottle more horizontally and pausing during the feed.' },
    { ageRange: '6-9 months', context: 'With the introduction of solids, total formula intake should not increase. If baby drinks a lot of formula and also eats solids enthusiastically, the combined intake may be excessive. Follow baby\'s fullness cues.' },
    { ageRange: '9-12 months', context: 'As solids increase, formula should gradually decrease. If baby still takes large volumes of formula and large amounts of food, their weight gain pattern will help your pediatrician assess whether this is appropriate.' },
    { ageRange: '12-24 months', context: 'After transitioning to whole milk, limit to 16-20 ounces per day to ensure toddler has appetite for solid foods and adequate iron intake.' },
  ],
  whenNormal: ['Baby occasionally spits up after a larger feed', 'Baby\'s weight follows a consistent growth curve even if it is a higher percentile', 'Baby has some fussy periods that improve with burping'],
  whenToMention: ['Baby consistently drinks more than age-appropriate amounts and is gaining weight very rapidly', 'Baby vomits (not just spit-up) after most feeds', 'You are struggling with knowing when baby is full'],
  whenToActNow: ['Baby is vomiting forcefully after every feed', 'Baby has significant abdominal distension and appears in pain'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-eating-too-much', 'formula-amount-by-age', 'paced-bottle-feeding-concerns'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Responsive Feeding in Bottle-Fed Infants. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Signs Your Child is Hungry or Full. 2023.', url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/mealtime/signs-your-child-is-hungry-or-full.html' },
  ],
};
