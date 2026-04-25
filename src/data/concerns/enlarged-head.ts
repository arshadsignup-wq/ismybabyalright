import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'enlarged-head',
  title: 'Baby Large Head (Macrocephaly)',
  category: 'medical',
  searchTerms: [
    'baby head too big',
    'baby large head',
    'macrocephaly baby',
    'baby head circumference above 95th percentile',
    'baby head growing too fast',
    'big head in babies',
    'baby head size percentile high',
    'is my baby\'s head too big',
    'familial macrocephaly',
    'baby head bigger than normal',
  ],
  quickAnswer:
    'A head circumference above the 95th percentile (macrocephaly) is found in about 5% of all children and is most often a benign familial trait. If one or both parents have larger-than-average heads, the baby is likely just following family genetics. However, your pediatrician will monitor head growth over time to ensure the growth rate is following a consistent curve rather than accelerating.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Head circumference is measured at every well-child visit. In the first few months, a single measurement above the 95th percentile is less informative than the trend over time. If your baby was born with a large head and both parents have larger heads, this is likely benign familial macrocephaly. Your pediatrician may measure your head to help confirm this. The fontanelle (soft spot) should feel normal and the baby should be developing normally.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Your pediatrician is looking at the growth trajectory: is the head circumference following a consistent percentile curve, or is it crossing percentile lines upward? A head that is consistently at the 98th percentile is different from one that jumps from the 50th to the 98th percentile. If the growth curve is stable and your baby is meeting milestones, this is usually reassuring. Some babies with benign external hydrocephalus have a temporarily rapid head growth phase that stabilizes.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If head growth has been consistently following a high but stable percentile and your baby is developing normally, most pediatricians will continue routine monitoring. If the growth rate is accelerating or there are developmental concerns, your doctor may order an ultrasound (if the fontanelle is still open) or refer you for further evaluation. Benign familial macrocephaly requires no treatment.',
    },
    {
      ageRange: '12 months+',
      context:
        'By this age, the pattern of head growth is usually well established. Children with benign familial macrocephaly simply have larger heads and are completely healthy. Head circumference measurements continue at well-child visits but typically become less of a focus as the growth pattern is clear. If there were ever concerns about hydrocephalus or other conditions, they would typically have been evaluated earlier.',
    },
  ],
  whenNormal: [
    'Your baby\'s head circumference is above the 95th percentile but one or both parents also have larger heads (familial macrocephaly)',
    'The head growth is following a consistent percentile curve over time, not crossing upward through multiple percentile lines',
    'Your baby is meeting all developmental milestones on time',
    'The fontanelle feels normal (not bulging or tense) and your baby appears comfortable and well',
    'Your baby is growing proportionally with weight and length also on higher percentiles',
  ],
  whenToMention: [
    'Your baby\'s head circumference has crossed upward through two or more percentile lines on the growth chart',
    'The head appears to be growing faster than expected relative to weight and length',
    'You are concerned about head size and would like your pediatrician to measure your head for comparison',
  ],
  whenToActNow: [
    'Rapidly increasing head size accompanied by a bulging or tense fontanelle, persistent vomiting, excessive irritability, or your baby\'s eyes appearing to look downward (sunsetting sign), as these could indicate increased pressure in the brain requiring urgent evaluation',
    'Your baby has a large head along with developmental delays, seizures, or other neurological symptoms',
  ],
  relatedMilestones: [
    'head-growth',
    'head-circumference',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Your Baby\'s Head.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Your-Babys-Head.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Child Growth Standards: Head Circumference-for-Age.',
      url: 'https://www.who.int/tools/child-growth-standards/standards/head-circumference-for-age',
    },
    {
      org: 'AAP',
      citation:
        'Palmen C, et al. Macrocephaly in Infancy: A Review of Etiology and Approach. Pediatrics in Review, 2020.',
      url: 'https://publications.aap.org/pediatricsinreview/article/41/11/583/35121/Macrocephaly-in-Infancy-and-Early-Childhood',
    },
  ],
};
