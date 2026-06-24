import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-pacifier-weaning-methods',
  title: 'How to Wean My Baby Off the Pacifier',
  category: 'behavior',
  searchTerms: [
    'pacifier weaning methods',
    'how to wean baby off pacifier',
    'stop pacifier toddler',
    'pacifier weaning age',
    'pacifier fairy',
    'gradual pacifier weaning',
    'cold turkey pacifier',
    'break pacifier habit toddler',
    'when to stop pacifier',
    'pacifier weaning without tears',
  ],
  quickAnswer:
    'The American Academy of Pediatric Dentistry recommends weaning off the pacifier between ages 2 and 3 to prevent dental problems. Methods include gradual reduction (limiting use to nap and bedtime only, then eliminating), the "pacifier fairy" (leaving pacifiers for a fairy who brings a gift), cold turkey removal, cutting the tip to reduce satisfaction, and trading it for a special toy. The best method depends on your child\'s age, temperament, and attachment level.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'This is the easiest age to wean off the pacifier because attachment is less strong. If you decide to eliminate the pacifier at this age, try gradual reduction: limit use to only nap and bedtime, then remove it from bedtime over several nights. Offer alternative comfort items like a small lovey (a safe, breathable security blanket or stuffed animal — the AAP recommends waiting until 12 months for comfort objects in the crib). Replace the pacifier soothing habit with others like gentle patting, white noise, or soft singing. Many babies this age can transition without much difficulty over 3-5 days.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers may protest more intensely because they have a stronger emotional attachment to their pacifier. Start by restricting use to sleep times and the home environment — no pacifier during play, outings, or in the car. Next, eliminate it from naps, then bedtime. Some parents find it helpful to read books about giving up pacifiers. If your toddler is approaching 18-24 months, consider whether a gradual or abrupt approach suits their personality better. Gradual works well for sensitive children; more easygoing toddlers may do better with a clean break. Expect 2-4 rough nights regardless of method.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By this age, children can understand and participate in the process. The "pacifier fairy" method works well: your child places all pacifiers under their pillow (or in a box), and the fairy takes them and leaves a special gift. Another approach is "trading" the pacifier for a desired toy. Some parents cut the tip of the pacifier to reduce suction satisfaction — the child often decides on their own that the pacifier is "broken." Make it a positive experience rather than a punishment. If dental effects are already visible (open bite, crossbite), discuss with your dentist — most changes reverse within 6-12 months of stopping.',
    },
  ],
  whenNormal: [
    'Your child fusses and has difficulty sleeping for a few nights after pacifier removal — this typically resolves within 3-7 days.',
    'Your child asks for the pacifier for a few weeks after weaning but adjusts over time.',
    'Your child finds a replacement comfort behavior, like holding a stuffed animal or twirling hair — these are healthy self-soothing alternatives.',
  ],
  whenToMention: [
    'Your child is over 3 and still heavily dependent on the pacifier despite your attempts at weaning.',
    'You notice dental changes (front teeth not meeting, changes in bite alignment) from pacifier use.',
    'Your child has significant emotional distress or sleep disruption that does not improve after 2 weeks of weaning.',
  ],
  whenToActNow: [
    'Your child\'s pacifier habit is causing speech delays — if your child keeps the pacifier in their mouth most of the day and is not babbling or talking as expected, discuss with your pediatrician.',
    'Your child has significant dental malocclusion that your dentist recommends addressing — follow through with weaning to prevent worsening.',
    'Your child is choking on a broken pacifier or parts of the pacifier have come off — seek immediate care if any pieces are missing that could have been swallowed or inhaled.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-pacifier-pros-cons', 'baby-pinching-while-falling-asleep', 'defiant-toddler'],
  sources: [
    {
      org: 'AAPD',
      citation:
        'American Academy of Pediatric Dentistry — Policy on Non-Nutritive Sucking Habits',
      url: 'https://www.aapd.org/research/oral-health-policies--recommendations/pacifiers/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Breaking the Pacifier Habit',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/Pacifiers.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic — Pacifiers: Are They Good for Your Baby?',
      url: 'https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/pacifiers/art-20048140',
    },
  ],
};
