import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'tracheomalacia-baby',
  title: 'Tracheomalacia in Babies',
  category: 'medical',
  searchTerms: [
    'tracheomalacia baby',
    'floppy trachea infant',
    'baby noisy breathing tracheomalacia',
    'tracheomalacia vs laryngomalacia',
    'baby wheezing tracheomalacia',
    'tracheomalacia symptoms baby',
    'soft trachea baby',
    'tracheomalacia treatment infant',
  ],
  quickAnswer:
    'Tracheomalacia is a condition where the cartilage supporting the trachea (windpipe) is soft and floppy, causing the airway to partially collapse during breathing. This creates noisy breathing, a characteristic "barky" or "honking" cough, and sometimes wheezing. It can be congenital (present from birth) or acquired (often from prolonged intubation in premature babies). Most cases of congenital tracheomalacia improve as the cartilage strengthens with growth, typically by age 2-3.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Tracheomalacia may be present from birth or develop in premature babies who required mechanical ventilation. Symptoms include noisy breathing (often a low-pitched rumbling or rattling sound, different from the high-pitched stridor of laryngomalacia), a barky or seal-like cough, and sometimes feeding difficulties. Symptoms typically worsen with crying, coughing, or respiratory infections. Your pediatrician may refer you to a pediatric pulmonologist or ENT for diagnosis.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Symptoms may seem to worsen as your baby becomes more active and breathes harder. Respiratory infections can significantly worsen tracheomalacia symptoms because inflammation further narrows the already compromised airway. These babies may develop more severe wheezing, respiratory distress, or a "dying spell" (brief episode of difficulty breathing) during viral illnesses. Your medical team should have a plan for managing respiratory illnesses.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby grows, the tracheal cartilage gradually becomes firmer. You may begin to notice improvement in the noisy breathing and cough. However, respiratory infections remain a concern and may trigger more significant symptoms than in babies without tracheomalacia. If your baby has been diagnosed with tracheomalacia and develops a cold, monitor breathing closely and follow your doctor\'s guidance for when to seek care.',
    },
    {
      ageRange: '12 months+',
      context:
        'Most children with congenital tracheomalacia see significant improvement by age 2-3 as the airway grows and the cartilage strengthens. Some children may still have a noisy cough or be prone to more symptoms during respiratory infections. Severe tracheomalacia that does not improve or causes significant breathing difficulty may require surgical intervention (aortopexy or tracheal stenting) in rare cases. Regular follow-up with your pulmonologist is important.',
    },
  ],
  whenNormal: [
    'Baby has a characteristic barky cough and noisy breathing that has been evaluated and diagnosed as tracheomalacia',
    'Symptoms are stable and your baby is feeding, growing, and developing normally',
    'Noisy breathing worsens with crying or activity but resolves when calm',
    'Symptoms are gradually improving as the baby gets older',
  ],
  whenToMention: [
    'Your baby has persistent noisy breathing or an unusual cough that has not been evaluated',
    'Symptoms are worsening rather than improving with age',
    'Your baby has recurrent respiratory infections with significant breathing difficulty',
  ],
  whenToActNow: [
    'Baby has a "dying spell" with significant color change, extreme breathing difficulty, or goes limp -- call 911',
    'Baby with known tracheomalacia develops severe respiratory distress during an illness that is not improving with usual measures',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Tracheomalacia. MedlinePlus, NIH.',
      url: 'https://medlineplus.gov/ency/article/001084.htm',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Tracheomalacia. Diagnosis and Treatment.',
      url: 'https://www.mayoclinic.org/diseases-conditions/tracheomalacia/symptoms-causes/syc-20378564',
    },
  ],
};
