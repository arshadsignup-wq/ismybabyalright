import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'head-circumference-too-large',
  title: 'Head Circumference Too Large',
  category: 'medical',
  searchTerms: [
    'baby head circumference too large',
    'macrocephaly baby',
    'baby big head measurement',
    'head circumference above 97th percentile baby',
    'large head baby concerns',
    'baby head size too big',
    'head measurement high baby',
    'baby head growing too fast percentile',
  ],
  quickAnswer:
    'A head circumference above the 97th percentile (macrocephaly) is found in about 3% of children and is most often benign familial macrocephaly  -  meaning one or both parents simply have larger heads. However, a rapidly increasing head circumference that crosses upward through multiple percentile lines needs evaluation, as it can indicate increased intracranial pressure from conditions like hydrocephalus. The trend over time is more important than any single measurement. Your pediatrician will measure your head and your partner\'s head to check for familial patterns.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Head circumference is measured at every well-baby visit. A single measurement above the 97th percentile is less informative than the trajectory over multiple visits. Newborns may have temporarily increased head measurements from birth-related swelling (caput succedaneum or cephalohematoma). If both parents have larger heads, benign familial macrocephaly is the most likely explanation. Your pediatrician may order an ultrasound through the fontanelle if the trajectory is concerning.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If your baby\'s head circumference has been consistently above the 97th percentile but is following a parallel curve and your baby is developing normally, this is reassuring. Some babies develop benign external hydrocephalus (extra fluid around the brain) during this period, which causes temporary rapid head growth but typically resolves by 18-24 months. If the head circumference is rapidly crossing percentile lines upward, your doctor may order imaging to evaluate.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By now, the pattern of head growth is becoming clear. Consistent tracking along a high percentile is different from a rapidly accelerating curve. Your pediatrician assesses the fontanelle (it should be soft and flat, not bulging), developmental milestones, and overall well-being. If all these are normal with a stable but high head circumference, monitoring alone is typically sufficient. An ultrasound can be performed as long as the anterior fontanelle is still open.',
    },
    {
      ageRange: '12 months+',
      context:
        'The growth pattern should be well established by now. Children with benign familial macrocephaly have large but healthy heads and develop normally. The fontanelle typically closes between 12-18 months, after which ultrasound is no longer an option and CT or MRI would be needed if imaging is required. If your child is developing normally with a stable large head, no further workup is usually needed. Routine monitoring of milestones and head growth continues at well-child visits.',
    },
  ],
  whenNormal: [
    'Your baby\'s head is above the 97th percentile but one or both parents also have large heads  -  benign familial macrocephaly is the most common cause.',
    'Head circumference has been consistently at a high percentile without crossing further upward, and your baby is meeting all developmental milestones.',
    'Your baby\'s head, weight, and length are all at high percentiles  -  proportionally large babies often have proportionally large heads.',
    'Your baby\'s fontanelle is soft and flat, and they are happy, feeding well, and developing normally.',
  ],
  whenToMention: [
    'Your baby\'s head circumference has crossed upward through two or more percentile lines at consecutive visits.',
    'The head appears to be growing disproportionately faster than weight and length.',
    'Neither parent has a particularly large head, making familial macrocephaly less likely.',
  ],
  whenToActNow: [
    'Your baby has rapid head growth along with a bulging or tense fontanelle, persistent vomiting, excessive irritability, sunsetting eyes (eyes appearing to look downward), or seizures  -  these may indicate increased intracranial pressure requiring urgent evaluation.',
    'Your baby has a rapidly enlarging head circumference with developmental regression or loss of previously acquired skills.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Your Baby\'s Head. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Your-Babys-Head.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Child Growth Standards: Head Circumference-for-Age.',
      url: 'https://www.who.int/tools/child-growth-standards/standards/head-circumference-for-age',
    },
  ],
};
