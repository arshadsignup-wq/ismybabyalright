import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-pacifier-pros-cons',
  title: 'Pacifier Pros and Cons for My Baby',
  category: 'behavior',
  searchTerms: [
    'pacifier pros and cons baby',
    'should I give my baby a pacifier',
    'pacifier benefits baby',
    'pacifier risks teeth baby',
    'pacifier SIDS reduction',
    'pacifier breastfeeding interference',
    'when to introduce pacifier baby',
    'pacifier good or bad for baby',
    'dummy for baby pros cons',
    'pacifier effects on teeth',
  ],
  quickAnswer:
    'Pacifiers have both benefits and drawbacks. Benefits include: reduced risk of SIDS (Sudden Infant Death Syndrome) when used during sleep, effective self-soothing tool, and pain relief during procedures. Drawbacks include: potential breastfeeding interference if introduced too early, increased ear infection risk with prolonged use, and dental effects if used beyond age 2-3. The AAP recommends offering a pacifier at nap and bedtime once breastfeeding is well established (usually around 3-4 weeks).',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'The AAP recommends introducing a pacifier at nap time and bedtime once breastfeeding is well established (typically by 3-4 weeks of age), as pacifier use during sleep has been shown to reduce the risk of SIDS by up to 90% in some studies. The mechanism is not fully understood but may involve keeping the airway more open and promoting lighter sleep. If the pacifier falls out after the baby is asleep, there is no need to replace it. For breastfed babies, wait until breastfeeding is going well before introducing a pacifier to avoid nipple confusion, though recent research suggests pacifiers may not actually interfere with breastfeeding for most babies.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Pacifiers continue to provide a SIDS protective effect during the first year. However, studies show that pacifier use beyond 6 months is associated with a slightly increased risk of ear infections (otitis media), likely because sucking affects the pressure in the eustachian tubes. If your baby is prone to ear infections, your pediatrician may recommend limiting pacifier use to sleep times only. This is a good age to begin setting boundaries around pacifier use — limiting it to naps and bedtime rather than all-day use. Cleaning pacifiers regularly (dishwasher or boiling water) is important; do not "clean" a pacifier by putting it in your mouth.',
    },
    {
      ageRange: '12-36 months',
      context:
        'The American Academy of Pediatric Dentistry recommends weaning off the pacifier by age 2-3 to prevent dental problems. Prolonged pacifier use can cause an open bite (front teeth do not touch when the mouth is closed), crossbite, or narrowing of the palate. These dental changes are often reversible if the pacifier is stopped before age 3-4, but become more permanent with longer use. Strategies for weaning include gradual reduction, the "pacifier fairy," and trading the pacifier for a special toy. Abrupt removal works for some families. Do not dip pacifiers in honey, sugar, or anything sweet.',
    },
  ],
  whenNormal: [
    'Your baby uses a pacifier at nap and bedtime and it helps them fall asleep — this is recommended by the AAP.',
    'Your baby sometimes refuses the pacifier — never force it.',
    'Your baby naturally loses interest in the pacifier and self-weans, often around 6-12 months.',
  ],
  whenToMention: [
    'Your baby seems dependent on the pacifier and wakes frequently when it falls out, causing sleep disruption.',
    'You are concerned about the timing of introducing a pacifier relative to breastfeeding.',
    'Your toddler is 2+ years old and you want strategies for weaning off the pacifier.',
  ],
  whenToActNow: [
    'Your baby\'s pacifier has cracked, torn, or has pieces coming off — discard it immediately as loose pieces are a choking hazard.',
    'Your baby has a pacifier with a cord, ribbon, or clip attached near the face during sleep — remove it immediately, as strings and clips pose strangulation and suffocation risks.',
    'Your dentist has identified dental changes from pacifier use and recommends discontinuing — follow up with a weaning plan.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-pacifier-weaning-methods', 'wont-sleep-without-nursing', 'baby-pinching-while-falling-asleep'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Pacifiers and SIDS Reduction',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Pacifiers-and-SIDS.aspx',
    },
    {
      org: 'AAPD',
      citation:
        'American Academy of Pediatric Dentistry — Policy on Pacifier Use',
      url: 'https://www.aapd.org/research/oral-health-policies--recommendations/pacifiers/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention — Infant Safe Sleep Practices',
      url: 'https://www.cdc.gov/reproductivehealth/features/baby-safe-sleep/index.html',
    },
  ],
};
