import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'persistent-fever-baby',
  title: 'My Baby Has a Fever That Won\'t Go Away',
  category: 'medical',
  searchTerms: [
    'baby fever won\'t go away',
    'baby fever lasting days',
    'baby persistent fever',
    'baby fever keeps coming back',
    'baby fever more than 3 days',
    'baby fever not responding to medicine',
    'toddler fever lasting a week',
    'baby recurrent fever',
    'when to worry about baby fever',
    'baby fever after antibiotics',
  ],
  quickAnswer:
    'Most fevers in babies and toddlers are caused by viral infections and resolve within 3-5 days. A fever that lasts longer than 3 days, returns after seeming to resolve, or is accompanied by worsening symptoms warrants medical evaluation. The most important thing is how your baby looks and acts  -  a child who is alert and drinking well with a fever is generally less concerning than one who is listless, regardless of the temperature.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Any fever (rectal temperature of 100.4\u00b0F / 38\u00b0C or higher) in a baby under 3 months requires immediate medical evaluation, regardless of how well the baby looks. Young infants have immature immune systems and can develop serious bacterial infections (urinary tract infection, meningitis, bloodstream infection) with minimal symptoms. Your doctor will likely perform blood tests, urine tests, and possibly a lumbar puncture to identify the cause. Do not give fever-reducing medication before seeking evaluation, as it may mask symptoms.',
    },
    {
      ageRange: '3-6 months',
      context:
        'A fever in this age group is commonly caused by viral infections, though bacterial infections still need to be considered. If the fever lasts more than 2-3 days, is above 102\u00b0F (38.9\u00b0C), or your baby appears unwell (poor feeding, excessive fussiness, decreased responsiveness), contact your pediatrician. Roseola, a common viral illness, classically causes 3-5 days of high fever followed by a rash once the fever breaks. UTIs are a common hidden cause of unexplained fever at this age.',
    },
    {
      ageRange: '6-24 months',
      context:
        'Viral infections are the most common cause of fever, and children in daycare may have frequent fevers. A typical viral fever lasts 3-5 days. Post-vaccination fevers usually resolve within 24-48 hours. Fevers lasting more than 5 days, or a fever that resolves then returns, warrant evaluation to look for bacterial complications like ear infections, pneumonia, or urinary tract infections. Teething may cause a very mild temperature elevation but does not cause true fevers above 100.4\u00b0F.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Toddlers can have fevers lasting up to a week with certain viral illnesses like adenovirus, influenza, or hand-foot-and-mouth disease. Focus on how your child is acting: drinking fluids, making urine, and being at least periodically alert and interactive are reassuring signs. A fever lasting more than 5-7 days, or a fever above 104\u00b0F (40\u00b0C) that does not come down with appropriate doses of acetaminophen or ibuprofen, should be evaluated. Persistent high fever lasting 5 or more days may indicate Kawasaki disease, which requires specific treatment.',
    },
  ],
  whenNormal: [
    'A fever lasting 2-3 days during an obvious viral illness (cold, stomach bug) with your child drinking well and having periods of normal activity',
    'A mild fever for 1-2 days after vaccinations',
    'The fever responds to acetaminophen or ibuprofen (in children over 6 months) and your child perks up when the temperature comes down',
    'Your child is producing tears when crying and making wet diapers regularly',
  ],
  whenToMention: [
    'The fever has lasted more than 3-5 days without improvement or a clear cause',
    'The fever resolved for 24 hours then returned, which may indicate a secondary bacterial infection',
    'Your child has a fever along with ear pain, pulling at ears, persistent cough, or painful urination',
  ],
  whenToActNow: [
    'Any fever in a baby under 3 months old requires immediate medical evaluation; a fever above 104\u00b0F (40\u00b0C) in any child, or a fever lasting 5 or more days with rash, red eyes, swollen hands/feet, or red cracked lips (possible Kawasaki disease) needs urgent assessment',
    'Your child has a fever with stiff neck, severe headache, confusion, difficulty breathing, purple spots on the skin, persistent vomiting, or appears extremely ill or unresponsive  -  seek emergency care immediately',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'Sullivan JE, Farrar HC. Fever and Antipyretic Use in Children. Pediatrics, 2011.',
      url: 'https://publications.aap.org/pediatrics/article/127/3/580/65075/Fever-and-Antipyretic-Use-in-Children',
    },
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Fever Without Fear: Information for Parents.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/Fever-Without-Fear.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Fever in Children: When to Seek Medical Attention.',
      url: 'https://www.mayoclinic.org/diseases-conditions/fever/in-depth/fever/art-20050997',
    },
  ],
};
