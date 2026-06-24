import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-floppy-when-picked-up',
  title: 'My Baby Feels Floppy When Picked Up',
  category: 'physical',
  searchTerms: [
    'baby floppy when picked up',
    'baby feels limp when I hold them',
    'baby has no muscle tone',
    'baby ragdoll when lifted',
    'newborn floppy baby',
    'baby low muscle tone',
    'baby hypotonia signs',
    'baby doesnt hold head up when lifted',
    'baby slips through hands when picked up',
    'floppy infant syndrome',
  ],
  quickAnswer:
    'A baby who feels unusually floppy or limp when picked up may have low muscle tone (hypotonia). While some babies are naturally more relaxed and flexible, persistent floppiness — especially if your baby has difficulty holding their head up, slips through your hands, or feels like a ragdoll — should be evaluated by a pediatrician. Hypotonia can be benign or may indicate an underlying neurological or muscular condition.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns naturally have limited head control and may seem floppy, but they should still have some resistance when you pick them up. A healthy newborn will slightly flex their arms and legs when lifted rather than dangling completely limp. By 2-3 months, most babies begin to hold their head steadier when held upright. If your newborn consistently feels like they are slipping through your hands, does not flex their limbs at all when picked up, or cannot hold their head up even briefly by 3 months, this warrants medical evaluation.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, babies should have noticeably improved head and neck control and should feel more "solid" when you pick them up. A baby who still cannot hold their head steady by 4 months, who drapes over your arm like a wet noodle, or who does not push up on their arms during tummy time may have significant hypotonia. Your pediatrician can assess muscle tone through specific tests like the pull-to-sit maneuver and ventral suspension (holding the baby face-down over one hand to observe their posture).',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies at this age should feel sturdy when held and should be developing sitting balance and the ability to bear weight on their legs when held standing. Persistent floppiness at this stage — difficulty sitting unsupported, inability to bear weight on legs, or continued poor head control — may indicate conditions such as cerebral palsy, genetic syndromes, muscular dystrophy, or metabolic disorders. Early intervention with physical therapy can be very beneficial regardless of the cause, so prompt evaluation is important.',
    },
  ],
  whenNormal: [
    'Your baby occasionally feels relaxed or floppy when drowsy or sleeping, but has good tone when alert and active.',
    'Your baby is meeting motor milestones on schedule (holding head up, pushing up during tummy time, rolling) even if they seem flexible.',
    'Your baby has some natural looseness in their joints but can still grip your fingers, flex their limbs, and bear weight appropriately for their age.',
  ],
  whenToMention: [
    'Your baby consistently feels floppier than other babies their age and seems to lag behind in motor milestones.',
    'Your baby has difficulty holding their head up during tummy time or when held upright and is older than 3 months.',
    'Your baby seems to slip through your hands when you pick them up under their arms, requiring extra support.',
  ],
  whenToActNow: [
    'Your baby suddenly becomes floppy or limp after previously having normal muscle tone — this could indicate a serious acute illness, infection, or neurological emergency.',
    'Floppiness is accompanied by difficulty breathing, poor feeding, seizures, or decreased responsiveness — seek emergency medical care immediately.',
    'Your newborn is extremely floppy with no movement or response when handled, has a weak or absent cry, or is not feeding — this requires urgent evaluation.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['floppy-baby-syndrome', 'not-sitting-up', 'baby-gross-motor-delay-signs'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Hypotonia (Low Muscle Tone) in Infants',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/head-neck-nervous-system/Pages/Hypotonia.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Neurological Disorders and Stroke — Hypotonia Information Page',
      url: 'https://www.ninds.nih.gov/health-information/disorders/hypotonia',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention — Important Milestones: Your Baby By Two Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2mo.html',
    },
  ],
};
