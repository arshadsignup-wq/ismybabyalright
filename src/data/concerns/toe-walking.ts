import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toe-walking',
  title: 'My Baby Is Walking on Their Toes',
  category: 'physical',
  searchTerms: [
    'baby walking on toes',
    'toddler toe walking',
    'baby walks on tippy toes',
    'is toe walking normal',
    'baby won\'t put feet flat',
    'when is toe walking a concern',
    'toe walking autism',
    'toddler walks on tiptoes',
    'baby always on toes',
    'idiopathic toe walking',
    'toe walking in toddlers causes',
  ],
  quickAnswer:
    'Toe walking is extremely common when babies are first learning to walk and is usually nothing to worry about. Up to 5% of children toe walk at some point, and most outgrow it by age 2-3. It only becomes a concern if it persists past age 2 or if your child seems unable (rather than unwilling) to put their feet flat.',
  byAge: [
    {
      ageRange: '10-14 months',
      context:
        'Toe walking is very common in new walkers. Babies are experimenting with balance and figuring out how their feet work, and walking on toes is part of that exploration. As long as your baby CAN put their feet flat when standing still, occasional toe walking at this age is completely normal and expected.',
    },
    {
      ageRange: '15-18 months',
      context:
        'Many toddlers still toe walk intermittently at this age, especially when excited, walking on new surfaces, or moving fast. If your child walks flat-footed some of the time and on toes other times, this is typical. If they exclusively toe walk and never seem to walk with flat feet, mention it at your next well visit.',
    },
    {
      ageRange: '19-24 months',
      context:
        'Most toddlers have settled into a heel-toe walking pattern by now. If your child still toe walks most of the time, your pediatrician may want to check their Achilles tendons and ankle range of motion. Many children who persistently toe walk have "idiopathic toe walking"  -  meaning it\'s a habit with no underlying cause  -  and they respond well to stretching exercises or physical therapy.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Persistent toe walking past age 2 should be evaluated. Your pediatrician may refer to a pediatric orthopedist or neurologist to rule out tight heel cords, cerebral palsy, or sensory processing differences. The good news is that most causes are treatable, and early intervention (stretching, serial casting, or physical therapy) is very effective.',
    },
  ],
  whenNormal: [
    'Your baby just started walking and toe walks intermittently  -  this is part of learning to walk for many children.',
    'Your toddler can and does walk flat-footed but sometimes goes up on toes when excited, running, or on cold/unfamiliar surfaces.',
    'Your child toe walks occasionally but has full ankle range of motion  -  they can easily put their feet flat when asked or when standing still.',
    'Your child is under 2 years old and the toe walking is intermittent rather than constant.',
  ],
  whenToMention: [
    'Your child is over 18 months and toe walks the majority of the time.',
    'Your child seems to have difficulty putting their heels down even when trying  -  their ankles seem tight.',
    'Toe walking is getting worse over time rather than improving.',
    'Your child has other motor differences alongside the toe walking, such as stiffness, clumsiness, or frequent falling.',
  ],
  whenToActNow: [
    'Your child was walking with a normal heel-toe pattern and has started toe walking  -  a change in gait pattern warrants evaluation.',
    'Your child toe walks on only one side, or one leg seems stiffer or weaker than the other.',
    'Toe walking is accompanied by leg stiffness, pain, or your child seems to be losing motor skills.',
  ],
  relatedMilestones: [
    'gross-motor-walking',
    'gross-motor-running',
    'gross-motor-climbing',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Toe Walking in Children',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Toe-Walking.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC Milestone Tracker  -  Important Milestones: Your Child By 18 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-18mo.html',
    },
    {
      org: 'AAP',
      citation:
        'Engstrom P, Tedroff K. Idiopathic Toe-Walking: Prevalence and Natural History. Pediatrics. 2018.',
      url: 'https://publications.aap.org/pediatrics/article/142/Supplement_4/S356/37318',
    },
  ],
};
