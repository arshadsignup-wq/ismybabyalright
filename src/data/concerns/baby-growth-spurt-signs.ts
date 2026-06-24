import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-growth-spurt-signs',
  title: 'Is My Baby Having a Growth Spurt?',
  category: 'physical',
  searchTerms: [
    'baby growth spurt signs',
    'baby suddenly hungry all the time',
    'baby cluster feeding growth spurt',
    'baby fussy growth spurt',
    'when do babies have growth spurts',
    'baby eating more than usual',
    'baby waking more at night growth spurt',
    'baby growth spurt ages',
    'infant growth spurt symptoms',
    'baby cranky growth spurt',
  ],
  quickAnswer:
    'Growth spurts are periods of rapid growth that commonly occur around 2-3 weeks, 6 weeks, 3 months, 6 months, and 9 months of age, though they can happen at any time. During a growth spurt, your baby may seem hungrier than usual, nurse or bottle-feed more frequently (cluster feeding), be fussier or clingier, and sleep differently — either more or less than usual. Growth spurts typically last 2-3 days but can continue up to a week.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The most noticeable growth spurts often happen during this period, around 2-3 weeks, 6 weeks, and 3 months. You may notice your baby suddenly wanting to nurse every 1-2 hours (cluster feeding) or taking larger bottles than usual. This increased feeding is your baby\'s way of signaling your body to produce more milk or indicating they need more calories. Breastfeeding mothers sometimes worry their supply is dropping, but the increased demand actually boosts supply. Your baby may also be more wakeful at night and seem generally fussier. These spurts typically resolve within 2-3 days.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Growth spurts around 3-4 months and 6 months are common. Your baby may seem insatiable despite taking full feedings. They might wake from naps early or wake more frequently at night to feed. Some babies are also crankier and more difficult to soothe during growth spurts. This is not the same as the 4-month sleep regression (though they can overlap) — growth spurt-related sleep changes are usually shorter in duration. Continue feeding on demand and trust that your baby will return to a more predictable pattern within a few days.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Growth spurts around 6 and 9 months coincide with major developmental leaps — sitting, crawling, and pulling to stand. Your baby may want extra nursing or bottle sessions alongside their solid foods. Do not use a growth spurt as a reason to start solids early (before 4-6 months) or to add cereal to bottles. During these later growth spurts, your baby may also seem to regress in sleep patterns temporarily. Between growth spurts, growth rate naturally slows in the second half of the first year, which is completely normal and not a sign of a problem.',
    },
  ],
  whenNormal: [
    'Your baby has 2-3 days of increased hunger, more frequent feeding, and some fussiness but then returns to their normal pattern.',
    'Your baby sleeps more or less than usual during a growth spurt but resumes their typical sleep patterns within a few days.',
    'Your baby seems hungrier around the common growth spurt ages (2-3 weeks, 6 weeks, 3 months, 6 months, 9 months).',
  ],
  whenToMention: [
    'Your baby\'s increased hunger and fussiness last more than a week with no improvement.',
    'You are concerned that your breastmilk supply is not keeping up with your baby\'s demands during cluster feeding.',
    'Your baby seems hungry all the time but is not gaining weight adequately.',
  ],
  whenToActNow: [
    'Your baby is feeding constantly but showing signs of dehydration: fewer than 6 wet diapers in 24 hours, dry mouth, sunken fontanelle, or lethargy — seek medical evaluation promptly.',
    'Your baby has extreme irritability that does not improve with feeding or comforting and seems to be in pain — this may indicate an illness rather than a growth spurt.',
    'Your baby is losing weight or has not returned to birth weight by 2 weeks of age despite frequent feeding — seek immediate evaluation.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-growth-chart-interpretation', 'baby-irritable-during-feeding-fussy', 'baby-nap-refusal'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Growth Spurts and Your Baby',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Growth-Spurts-and-Baby.aspx',
    },
    {
      org: 'La Leche League',
      citation:
        'La Leche League International — Cluster Feeding and Growth Spurts',
      url: 'https://www.llli.org/breastfeeding-info/frequency-of-feeding/',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization — Child Growth Standards',
      url: 'https://www.who.int/tools/child-growth-standards',
    },
  ],
};
