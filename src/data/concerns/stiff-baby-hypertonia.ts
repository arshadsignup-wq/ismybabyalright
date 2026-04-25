import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'stiff-baby-hypertonia',
  title: 'My Baby Seems Too Stiff (Hypertonia)',
  category: 'physical',
  searchTerms: [
    'baby feels stiff',
    'baby hypertonia',
    'baby muscles too tight',
    'baby arches back stiff',
    'infant stiffness',
    'baby legs always straight',
    'baby arms stiff and hard to bend',
    'baby rigid when picked up',
    'high muscle tone in babies',
    'baby won\'t relax muscles',
  ],
  quickAnswer:
    'Hypertonia means your baby\'s muscles feel unusually tight or stiff, making it hard to bend or move their limbs. While some stiffness can be normal during certain movements (like when a baby is startled or upset), persistent stiffness at rest warrants evaluation. Early identification and physical therapy can make a significant difference.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns naturally have some degree of flexor tone, meaning their arms and legs tend to curl inward. This is different from hypertonia, where the limbs feel rigid and resist being moved. Signs to watch for include a baby who feels like a board when you pick them up, whose legs scissor or cross when held upright, or who arches their back strongly and frequently. Some stiffness during crying or startling is normal, but stiffness at rest is not.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As normal newborn flexor tone decreases, you should be able to gently extend your baby\'s arms and legs without much resistance. A baby with hypertonia may still have tightly fisted hands past 3 months, resist having their arms or legs straightened, or arch their back when you try to hold them in a seated position. These babies may have difficulty with tummy time because they cannot relax enough to push up comfortably.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies with hypertonia may have difficulty reaching motor milestones like sitting, crawling, and grasping objects. Their movements may look stiff or jerky rather than smooth. You might notice that their legs feel very tight when you try to open them for a diaper change, or that they consistently point their toes. Physical therapy at this stage focuses on stretching, positioning, and encouraging relaxed movement patterns.',
    },
    {
      ageRange: '12+ months',
      context:
        'Persistent hypertonia affects walking and other gross motor skills. A toddler with high muscle tone may walk stiffly, have difficulty with balance, or walk on their toes. Ongoing physical therapy is important, and your pediatrician may refer you to a pediatric neurologist to determine the underlying cause. Many children with mild hypertonia respond very well to therapy and make excellent progress.',
    },
  ],
  whenNormal: [
    'Your baby stiffens briefly when startled, excited, or upset, but relaxes at rest.',
    'Your baby has some normal newborn flexor tone but you can gently extend their limbs without significant resistance.',
    'Your baby occasionally arches their back during fussiness or gas but is otherwise relaxed and moves freely.',
    'Your baby feels strong and firm but is meeting motor milestones on time.',
  ],
  whenToMention: [
    'Your baby\'s limbs feel consistently stiff and resist gentle bending, even when your baby is calm and relaxed.',
    'Your baby\'s hands are tightly fisted past 3-4 months of age and they have difficulty opening them to grasp objects.',
    'Your baby arches their back frequently during feeding or when held, and this seems involuntary.',
  ],
  whenToActNow: [
    'Your baby\'s whole body stiffens and their legs scissor when held upright, or they feel like a rigid board when picked up.',
    'Your baby has stiffness accompanied by difficulty feeding, breathing problems, or seizure-like episodes.',
  ],
  relatedMilestones: [
    'gross-motor-head-control',
    'gross-motor-rolling',
    'gross-motor-sitting',
    'fine-motor-grasping',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Movement Milestones: Birth to 3 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-Birth-to-Three-Months.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Neurological Disorders and Stroke. Hypertonia Information Page.',
      url: 'https://www.ninds.nih.gov/health-information/disorders/hypertonia',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Cerebral Palsy: Symptoms and Causes  -  Muscle Tone Changes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/cerebral-palsy/symptoms-causes/syc-20353999',
    },
  ],
};
