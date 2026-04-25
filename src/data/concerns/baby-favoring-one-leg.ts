import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-favoring-one-leg',
  title: 'My Baby Favors One Leg',
  category: 'physical',
  searchTerms: [
    'baby favoring one leg',
    'baby kicks one leg more',
    'baby only uses one leg',
    'baby one leg stronger than other',
    'baby drags one leg crawling',
    'baby limping',
    'infant leg asymmetry',
    'baby not using both legs equally',
    'baby one leg weaker',
    'baby uneven leg movement',
  ],
  quickAnswer:
    'Babies should use both legs roughly equally when kicking, crawling, and eventually walking. If your baby consistently favors one leg or seems to avoid using the other, it is worth having your pediatrician take a look. The cause is often something simple and treatable, like a minor hip or muscle issue, but early evaluation helps ensure the best outcome.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'Young babies should kick both legs with roughly equal vigor and frequency. While it is normal for movements to look uncoordinated and asymmetric at times, a baby who consistently kicks one leg while the other stays still or moves much less may have a difference in tone or strength between the two sides. Also watch for uneven skin folds on the thighs, which can be a sign of hip dysplasia. Mention any consistent asymmetry to your pediatrician at your next visit.',
    },
    {
      ageRange: '5-8 months',
      context:
        'As babies start to bear weight on their legs when held in a standing position and begin to push up from their tummies, both legs should participate. A baby who always tucks one leg under or avoids bearing weight on one side may have hip dysplasia, a difference in leg length, or asymmetric tone. Your pediatrician can check hip stability, leg lengths, and muscle tone in both legs and order imaging if needed.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Crawling and pulling to stand should involve both legs working together. A baby who "army crawls" dragging one leg, consistently leads with the same leg when crawling, or refuses to bear weight on one leg when standing may need evaluation. This is the age when hip dysplasia, if not previously detected, may become more apparent through movement asymmetry.',
    },
    {
      ageRange: '12+ months',
      context:
        'Once your baby starts walking, a limp or consistent avoidance of one leg is a clear signal to see your pediatrician. While new walkers normally have an unsteady gait, they should bear weight equally on both legs. A limp that persists, worsens, or is accompanied by pain, swelling, or refusal to walk requires prompt evaluation to rule out infection, fracture, or joint problems.',
    },
  ],
  whenNormal: [
    'Your baby occasionally kicks one leg more than the other but uses both legs actively throughout the day.',
    'Your new walker has a slightly uneven gait that is improving over days to weeks as they gain confidence.',
    'Your baby leads with the same leg when crawling but uses both legs for kicking and weight-bearing.',
    'Your baby had a recent vaccination in one leg and is temporarily favoring the other leg.',
  ],
  whenToMention: [
    'Your baby consistently kicks only one leg or avoids bearing weight on one side.',
    'You notice uneven thigh skin folds or one leg that appears shorter than the other.',
    'Your crawling baby drags one leg or always tucks it under rather than using it to crawl.',
  ],
  whenToActNow: [
    'Your baby or toddler suddenly stops using one leg, refuses to bear weight, or seems to be in pain when moving that leg.',
    'Your baby has leg asymmetry accompanied by swelling, warmth, redness, or fever, which could indicate infection or injury.',
  ],
  relatedMilestones: [
    'gross-motor-crawling',
    'gross-motor-pulling-to-stand',
    'gross-motor-walking',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Limping Child. Pediatrics in Review. 2015.',
      url: 'https://publications.aap.org/pediatricsinreview/article/36/5/184/33786/Evaluation-of-the-Limping-Child',
    },
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Hip Dysplasia.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Hip-Dysplasia.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Limping in Children: Causes.',
      url: 'https://www.mayoclinic.org/symptoms/limping-in-children/basics/causes/sym-20050854',
    },
  ],
};
