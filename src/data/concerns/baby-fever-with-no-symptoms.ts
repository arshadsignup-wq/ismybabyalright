import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-fever-with-no-symptoms',
  title: 'My Baby Has a Fever but No Other Symptoms',
  category: 'medical',
  searchTerms: [
    'baby fever no other symptoms',
    'baby fever only symptom',
    'baby fever but acting normal',
    'fever of unknown origin baby',
    'baby fever without cold symptoms',
    'baby fever no cough no runny nose',
    'baby has fever but happy',
    'isolated fever baby',
    'baby temperature high no symptoms',
    'unexplained fever baby',
  ],
  quickAnswer:
    'A fever with no other obvious symptoms is very common in babies and is most often caused by a viral infection that has not yet fully developed. Many viral illnesses start with fever alone, and other symptoms like cough, runny nose, or rash may appear 1-2 days later. In babies under 3 months, any fever without a clear source needs immediate medical evaluation.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'An isolated fever in a baby under 3 months is taken very seriously by pediatricians because young infants can have serious bacterial infections (like urinary tract infections or bacteremia) with fever as the only sign. Your baby will likely need evaluation that may include blood tests, urine analysis, and sometimes a lumbar puncture. Do not wait to see if other symptoms develop.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Fever without other symptoms in this age range is often viral and may precede the appearance of a rash (as in roseola) or cold symptoms. However, urinary tract infections are also common at this age and may present with fever alone. If the fever is above 102°F or persists beyond 24 hours without an obvious source, contact your pediatrician for guidance.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Roseola (HHV-6) is a classic cause of isolated high fever in this age group, typically lasting 3-5 days before a characteristic rash appears as the fever breaks. Teething may cause very slight temperature elevation but should not cause a true fever above 100.4°F. Ear infections can also cause fever before ear pain becomes apparent.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers commonly develop fevers at the start of many viral infections before other symptoms appear. Immunizations may also cause isolated fever for 1-2 days. If your toddler has a fever but is drinking, eating reasonably well, and playing, the fever itself is not dangerous. Monitor for 48-72 hours for developing symptoms.',
    },
    {
      ageRange: '2-3 years',
      context:
        'An isolated fever in an older toddler that lasts more than 5 days is called a fever of unknown origin and may warrant further investigation. Common causes include hidden urinary tract infections, early-stage infections, and occasionally vaccine reactions. Your pediatrician may order bloodwork or urinalysis if the fever persists.',
    },
  ],
  whenNormal: [
    'Your baby (over 3 months) has a fever but is still drinking, playing, and sleeping reasonably well',
    'The fever lasts 1-3 days and then resolves or other mild viral symptoms appear',
    'Your baby had a vaccination in the past 48 hours and develops a fever',
    'A characteristic rash appears as the fever breaks, suggesting roseola',
  ],
  whenToMention: [
    'An isolated fever has persisted for more than 3 days without any other symptoms developing',
    'Your baby has had several episodes of isolated fever in recent weeks',
    'You are concerned about a urinary tract infection or other hidden infection',
  ],
  whenToActNow: [
    'Any fever in a baby under 3 months, regardless of how the baby looks or behaves',
    'Fever above 104°F at any age, or an isolated fever lasting more than 5 days, or fever accompanied by lethargy, refusal to drink, or any signs of serious illness',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-fever-recurring-daily',
    'baby-low-grade-fever-persistent',
    'persistent-fever-baby',
    'uti-signs-baby',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fever Without Fear: Information for Parents. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/Fever-Without-Fear.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Fever in children: When to see a doctor.',
      url: 'https://www.mayoclinic.org/diseases-conditions/fever/in-depth/fever/art-20050997',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Fever Without a Source in Children. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK536969/',
    },
  ],
};
