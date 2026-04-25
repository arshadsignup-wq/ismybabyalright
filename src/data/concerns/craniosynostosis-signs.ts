import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'craniosynostosis-signs',
  title: 'I\'m Worried About Craniosynostosis',
  category: 'medical',
  searchTerms: [
    'craniosynostosis baby',
    'baby skull fused early',
    'baby ridge on head',
    'baby suture line hard',
    'baby head not growing right',
    'baby soft spot closed early',
    'craniosynostosis symptoms',
    'baby forehead bulging one side',
    'baby head shape surgery',
    'premature suture closure baby',
  ],
  quickAnswer:
    'Craniosynostosis occurs when one or more of the fibrous joints (sutures) between a baby\'s skull bones close prematurely, affecting head growth and shape. It occurs in about 1 in 2,000-2,500 births. While it requires surgical treatment, outcomes are generally excellent when diagnosed and treated early. Not all abnormal head shapes are craniosynostosis  -  positional plagiocephaly is far more common.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Craniosynostosis may be noticeable at birth or in the first few weeks. Signs include an unusual head shape, a raised bony ridge felt along a suture line, a soft spot (fontanelle) that feels closed or very small, or asymmetric growth of the head. The specific head shape depends on which suture is affected: sagittal (long narrow head), coronal (flat forehead on one or both sides), metopic (triangular forehead with a ridge), or lambdoid (flat on one side of the back). Pediatricians check sutures and head shape at every well-baby visit.',
    },
    {
      ageRange: '2-6 months',
      context:
        'As the baby grows, the head shape abnormality from craniosynostosis typically becomes more pronounced because the skull cannot expand normally in the direction of the fused suture. This is a key difference from positional plagiocephaly, which often improves with repositioning. If craniosynostosis is suspected, your doctor will order imaging, usually a CT scan of the skull, to confirm which sutures are affected. Early referral to a pediatric craniofacial center is important.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Surgery for craniosynostosis is typically performed between 3-12 months of age, depending on the type and severity. The goal of surgery is to release the fused suture, allow normal brain growth, correct the head shape, and prevent increased intracranial pressure. For single-suture craniosynostosis, minimally invasive endoscopic surgery followed by helmet therapy is often possible if done before 6 months. Open surgical repair may be recommended for older babies or more complex cases.',
    },
    {
      ageRange: '12 months+',
      context:
        'After surgical correction, most children have excellent cosmetic and developmental outcomes. Your child will be monitored for proper head growth and development. Rarely, a suture can re-fuse (re-synostosis) and require additional surgery. Children with single-suture craniosynostosis and no associated syndrome typically develop normally. Multi-suture craniosynostosis or syndromic forms may require additional surgeries and closer developmental monitoring.',
    },
  ],
  whenNormal: [
    'Your baby has a slightly asymmetric head shape but the sutures are open, the fontanelles feel normal, and the head is growing on its expected curve',
    'Your baby has positional flattening that improves with repositioning and tummy time, with no raised ridges along suture lines',
    'Your pediatrician has examined the head and confirmed that sutures are open and head growth is normal',
  ],
  whenToMention: [
    'You feel a raised bony ridge along the top, sides, or forehead of your baby\'s skull',
    'Your baby\'s head shape seems to be getting more abnormal rather than improving over time',
    'The soft spot (anterior fontanelle) feels very small, hard to find, or seems to have closed early',
  ],
  whenToActNow: [
    'Your baby has signs of increased intracranial pressure: persistent vomiting, excessive sleepiness, bulging eyes, a bulging fontanelle, or the head circumference is falling off its growth curve, as these require urgent neurosurgical evaluation',
    'Your pediatrician has identified a fused suture and is recommending a craniofacial referral  -  do not delay this evaluation, as timing of surgery matters for outcomes',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Craniosynostosis.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/Cleft-Craniofacial/Pages/Craniosynostosis.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Facts About Craniosynostosis.',
      url: 'https://www.cdc.gov/birth-defects/about/craniosynostosis.html',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Craniosynostosis: Diagnosis and Treatment.',
      url: 'https://www.mayoclinic.org/diseases-conditions/craniosynostosis/symptoms-causes/syc-20354513',
    },
  ],
};
