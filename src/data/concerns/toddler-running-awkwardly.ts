import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-running-awkwardly',
  title: 'Toddler Running Awkwardly',
  category: 'physical',
  searchTerms: [
    'toddler running awkwardly',
    'toddler runs funny',
    'toddler clumsy when running',
    'toddler running with arms out',
    'toddler wobbly when running',
    'child runs with stiff legs',
    'toddler awkward gait running',
    'toddler falls when running',
    'toddler running with arms up',
    'toddler doesn\'t run smoothly',
  ],
  quickAnswer:
    'Toddlers are naturally awkward runners. Running typically develops between 18 and 24 months, and it takes many more months for the running pattern to look smooth and coordinated. Young runners often hold their arms out or up for balance, take short choppy steps, and fall frequently. This improves gradually as balance, coordination, and confidence develop. Truly smooth running usually does not appear until age 3 to 4.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Most children at this age are still mastering walking, and running is not yet expected. Some early walkers may begin a fast, unsteady walk that looks like a shuffle or jog. Their base of support is wide, their arms are held high for balance, and they topple over frequently. This is all normal early locomotion development.',
    },
    {
      ageRange: '18-24 months',
      context:
        'This is when most toddlers develop a true running gait, though it looks very different from adult running. They run with a wide base, stiff legs, flat feet, and arms held out to the sides or up by their head for balance. Falls are frequent, especially when turning or stopping. This "toddler run" is completely typical and not a sign of a coordination problem.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Running becomes smoother and more controlled. Children begin running with their arms swinging at their sides rather than held out for balance, and they can stop and change direction more easily. However, some awkwardness is still normal at this age. If your child\'s running seems significantly more awkward than their peers, or if they run with a persistent limp, stiffness on one side, or pain, discuss this with your pediatrician.',
    },
    {
      ageRange: '3+ years',
      context:
        'By age 3 to 4, most children have a fairly mature running pattern. They run with their arms swinging, can navigate around obstacles, and stop on command. If your child is still running with significant awkwardness at this age - such as consistently stumbling, running with stiff or asymmetric legs, or avoiding running altogether - a gross motor evaluation can help identify any underlying issues like muscle weakness, coordination difficulties, or joint problems.',
    },
  ],
  whenNormal: [
    'Your toddler is under 2.5 years and runs with arms out, wide legs, and frequent falls, which is the typical early running pattern.',
    'Your toddler runs awkwardly on uneven surfaces but moves more smoothly on flat ground.',
    'Your toddler sometimes trips when running because they are moving faster than their coordination can handle.',
    'Your toddler runs well most of the time but becomes clumsy when tired, excited, or distracted.',
  ],
  whenToMention: [
    'Your child is over 3 years old and their running is still significantly more awkward than other children their age.',
    'Your child runs with a consistent limp, favors one leg, or seems to have stiffness or weakness on one side.',
    'Your child avoids running entirely or complains of pain when they try to run.',
  ],
  whenToActNow: [
    'Your child suddenly develops an awkward gait or limp after previously running normally, as this could indicate an injury, infection, or neurological concern.',
    'Your child\'s running has been getting progressively worse rather than better, or they are losing motor skills they previously had.',
  ],
  relatedMilestones: [
    'gross-motor-walking',
    'gross-motor-running',
    'gross-motor-balance',
    'gross-motor-coordination',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Movement Milestones: Children Ages 2 to 3. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Movement-2-to-3-Years.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By Two Years.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
    },
  ],
};
