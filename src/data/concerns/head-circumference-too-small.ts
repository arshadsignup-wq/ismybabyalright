import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'head-circumference-too-small',
  title: 'Head Circumference Too Small',
  category: 'medical',
  searchTerms: [
    'baby head circumference too small',
    'microcephaly baby',
    'small head baby concerns',
    'head circumference below 3rd percentile',
    'baby head not growing fast enough',
    'baby head smaller than normal',
    'baby small head measurement',
    'head growth slowing baby',
  ],
  quickAnswer:
    'A head circumference below the 3rd percentile (microcephaly) or a head growth rate that is slowing and crossing downward through percentile lines deserves medical attention. The head grows in response to brain growth, so a small or slowly growing head may indicate a problem with brain development. However, some babies simply have smaller heads as a familial trait  -  if parents have smaller heads and the baby is developing normally, this may be benign. The trend over time and developmental assessment are critical for determining whether evaluation is needed.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Head circumference is measured at birth and at every well-baby visit. Microcephaly at birth (congenital microcephaly) can be caused by genetic conditions, prenatal infections (such as Zika, CMV, or toxoplasmosis), prenatal alcohol or drug exposure, or other factors affecting brain development. If your baby has a small head at birth, your pediatrician may order imaging (ultrasound or MRI) and genetic testing. If the head is small but growing at a normal rate and development is on track, the outlook may be favorable.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If your baby\'s head growth is decelerating (crossing downward through percentile lines), this is concerning because it suggests the brain may not be growing as expected. This is called acquired microcephaly and can have different causes than congenital microcephaly. Your pediatrician will closely monitor developmental milestones and may refer to a pediatric neurologist. If both parents have smaller heads and the baby is developing normally, monitoring alone may be appropriate.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Developmental milestones become increasingly informative at this age. A baby with a small head who is sitting, babbling, interacting socially, and meeting motor milestones is more reassuring than one who has delays. If microcephaly is confirmed and there are developmental concerns, a brain MRI, genetic testing, and metabolic screening may be recommended. Early intervention services should be initiated for any developmental delays identified.',
    },
    {
      ageRange: '12 months+',
      context:
        'By the toddler years, the clinical picture is usually clearer. Some children with mild microcephaly develop normally or with minimal difficulties. Others may have more significant developmental challenges. The anterior fontanelle typically closes between 12-18 months, and premature closure (craniosynostosis) can also cause a small-appearing head  -  this is a different condition requiring its own evaluation. Continued developmental monitoring and early intervention for any delays are essential.',
    },
  ],
  whenNormal: [
    'Your baby\'s head circumference is below the 3rd percentile but both parents have smaller heads and the baby is developing normally  -  familial small head size is a variation of normal.',
    'Head circumference is at a lower percentile but has been following that curve consistently without dropping further.',
    'Your baby had a slightly smaller head measurement at one visit due to measurement technique, but subsequent measurements returned to the previous percentile.',
    'Your premature baby\'s head circumference is small for chronological age but appropriate for adjusted age.',
  ],
  whenToMention: [
    'Your baby\'s head circumference is dropping through percentile lines over multiple visits.',
    'Your baby has a small head and you notice delays in reaching developmental milestones.',
    'There are no family members with notably small heads, making familial microcephaly less likely.',
  ],
  whenToActNow: [
    'Your baby has a small and rapidly declining head circumference along with developmental regression, seizures, or abnormal neurological signs  -  urgent neurological evaluation is needed.',
    'Your baby was exposed to a known teratogen or infection during pregnancy (such as Zika virus, CMV, or significant alcohol use) and has a small head  -  comprehensive evaluation should be prioritized.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Facts about Microcephaly.',
      url: 'https://www.cdc.gov/birth-defects/about/microcephaly.html',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Child Growth Standards: Head Circumference-for-Age.',
      url: 'https://www.who.int/tools/child-growth-standards/standards/head-circumference-for-age',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Neurological Disorders and Stroke. Microcephaly Information Page.',
      url: 'https://www.ninds.nih.gov/health-information/disorders/microcephaly',
    },
  ],
};
