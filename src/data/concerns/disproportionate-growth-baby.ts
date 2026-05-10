import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'disproportionate-growth-baby',
  title: 'Disproportionate Growth',
  category: 'physical',
  searchTerms: [
    'disproportionate growth baby',
    'baby short limbs long body',
    'baby head too big for body',
    'disproportionate body baby',
    'skeletal dysplasia baby signs',
    'baby arms and legs seem short',
    'asymmetric growth baby',
    'baby body proportions abnormal',
  ],
  quickAnswer:
    'Disproportionate growth means that different parts of the body are growing at different rates  -  for example, the limbs may be short relative to the trunk, or the head may be large relative to the body. While some disproportion is normal in babies (babies naturally have larger heads relative to their bodies), significant or progressive disproportion may indicate a skeletal dysplasia, metabolic condition, or other medical cause. Your pediatrician monitors proportions at well-child visits by measuring length, weight, and head circumference and plotting them on growth charts.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'All newborns have relatively large heads and shorter limbs compared to adults  -  this is normal infant proportionality. Some skeletal dysplasias (like achondroplasia) may be apparent at birth with noticeably short limbs relative to the trunk, a larger head, and specific facial features. Others may not become apparent until growth progresses. If your doctor notes disproportionate features at birth, prenatal ultrasound findings may be reviewed, and genetic testing or skeletal surveys (X-rays) may be recommended.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As babies grow, proportional differences become more apparent. If your baby\'s head circumference is consistently crossing upward on the growth chart while length remains low, or if limbs appear notably short, your pediatrician may investigate further. Achondroplasia, the most common skeletal dysplasia, becomes more recognizable during this period. Monitoring growth velocity in all three parameters (weight, length, head circumference) is key.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, growth patterns are better established. If disproportionate growth is noted, your pediatrician may refer to a genetics specialist or pediatric endocrinologist. A skeletal survey (a series of X-rays) can evaluate bone development and help identify specific conditions. Many skeletal dysplasias have characteristic radiographic findings. Some conditions that cause disproportionate growth also affect other body systems, so a comprehensive evaluation may be recommended.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers with disproportionate growth patterns have usually been identified and are under specialist care by now. Management depends on the underlying cause  -  some conditions require monitoring only, while others may benefit from growth hormone therapy or surgical interventions. Children with skeletal dysplasias may need orthopedic care, physical therapy, and monitoring for associated complications. Many children with these conditions lead full, active lives with appropriate support.',
    },
  ],
  whenNormal: [
    'Your baby has a head that appears large relative to the body  -  this is normal infant proportionality and gradually evens out as the body catches up.',
    'Your baby is proportionally small  -  equally low percentiles for weight, length, and head circumference suggest overall small size rather than disproportion.',
    'Your baby\'s limbs seem chubby and short relative to their trunk  -  this is typical of the baby body habitus and not indicative of a problem.',
    'One parent or both parents are short  -  familial short stature can make a baby appear somewhat disproportionate without an underlying condition.',
  ],
  whenToMention: [
    'Your baby\'s limbs appear notably short compared to their trunk, and this seems more pronounced than in other babies.',
    'Your baby\'s head circumference is growing much faster than length, creating an increasingly disproportionate appearance.',
    'You notice your baby\'s body proportions look different from other babies of the same age and this concerns you.',
  ],
  whenToActNow: [
    'Your newborn has obvious limb shortening, an unusually large head, and/or facial features suggestive of a skeletal condition  -  genetic evaluation should be initiated promptly to guide care.',
    'Your baby has disproportionate growth along with other symptoms such as breathing difficulties, joint problems, or neurological concerns  -  a comprehensive evaluation is needed.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Skeletal Dysplasia Overview. GeneReviews.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK1152/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Growth Charts and Growth Patterns. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/Glands-Growth-Disorders/Pages/Growth-Charts-By-the-Numbers.aspx',
    },
  ],
};
