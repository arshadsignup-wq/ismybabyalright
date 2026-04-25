import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'uneven-leg-length',
  title: 'My Baby\'s Legs Seem Different Lengths',
  category: 'physical',
  searchTerms: [
    'baby legs different lengths',
    'baby one leg shorter',
    'infant leg length discrepancy',
    'baby uneven leg creases',
    'baby legs not the same length',
    'unequal leg length baby',
    'baby limb length difference',
    'baby one leg looks longer',
    'leg length discrepancy infant',
    'baby asymmetric leg folds',
  ],
  quickAnswer:
    'A perceived difference in leg length is a common parent concern. In many cases, the appearance of unequal legs is caused by the baby\'s positioning, asymmetric skin folds, or a mild hip difference rather than an actual bone length difference. True leg length discrepancy is uncommon in infants. Your pediatrician checks the hips and legs at every well visit and can determine whether further evaluation is needed.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns naturally curl into asymmetric positions, and one leg may appear shorter simply because of how the baby is lying. Asymmetric thigh skin folds are very common and are not always a sign of a problem, though they can be associated with hip dysplasia. Your pediatrician performs hip checks (Ortolani and Barlow maneuvers) at birth and at every well visit. If there is a family history of hip dysplasia, a breech presentation, or any concern on exam, a hip ultrasound will be ordered.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As your baby becomes more active and stretches out, you may get a clearer picture of leg symmetry. When your baby lies flat with both legs gently straightened, the knees should be at roughly the same height (the Galeazzi test). If one knee is noticeably lower than the other, this may indicate hip dysplasia or a true leg length difference. This is a simple test your pediatrician performs at well visits. A hip ultrasound or X-ray can confirm or rule out any structural issue.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies start to bear weight, stand, and eventually walk, a true leg length difference may become more apparent. You might notice that your baby seems to lean to one side when standing, or that one foot is flat on the ground while the other is on tiptoe. Small differences (less than 1 centimeter) are common and usually do not cause problems. Larger differences may need monitoring and occasionally treatment.',
    },
    {
      ageRange: '12+ months',
      context:
        'Once your child is walking, a leg length discrepancy may present as a limp or uneven gait. Most mild differences are monitored as the child grows, since legs can grow at slightly different rates and may even out. If the discrepancy is significant, your pediatrician may refer you to a pediatric orthopedist. Treatment options range from a shoe lift to, in rare cases, surgical procedures for larger discrepancies that are unlikely to resolve on their own.',
    },
  ],
  whenNormal: [
    'Your baby\'s legs appear slightly different lengths when lying in certain positions but look equal when gently straightened side by side.',
    'Your baby has asymmetric thigh skin folds but has had a normal hip exam and hip ultrasound.',
    'Your pediatrician has measured leg lengths and found them to be equal or within normal variation.',
    'A very small difference (a few millimeters) was noted but your pediatrician is monitoring it and it has not changed.',
  ],
  whenToMention: [
    'You consistently notice that one leg appears shorter than the other, even when your baby is lying flat.',
    'Your baby has markedly asymmetric thigh or groin skin folds that have not been evaluated.',
    'Your baby seems to bear weight unevenly when standing, consistently leaning to one side.',
  ],
  whenToActNow: [
    'Your baby has a visible leg length difference combined with limited hip movement, hip clicking, or difficulty spreading the legs for diaper changes, which may indicate hip dysplasia.',
    'Your walking child has a sudden limp or refusal to bear weight on one leg, accompanied by pain, swelling, or fever.',
  ],
  relatedMilestones: [
    'gross-motor-standing',
    'gross-motor-walking',
    'gross-motor-crawling',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hip Dysplasia. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Hip-Dysplasia.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Clinical Practice Guideline: Early Detection of Developmental Dysplasia of the Hip. Pediatrics. 2000.',
      url: 'https://publications.aap.org/pediatrics/article/105/4/896/64588/Clinical-Practice-Guideline-Early-Detection-of',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Leg Length Discrepancy.',
      url: 'https://www.mayoclinic.org/diseases-conditions/leg-length-discrepancy/symptoms-causes/syc-20364451',
    },
  ],
};
