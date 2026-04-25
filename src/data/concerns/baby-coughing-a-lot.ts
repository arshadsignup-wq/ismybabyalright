import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-coughing-a-lot',
  title: 'My Baby Coughs a Lot',
  category: 'medical',
  searchTerms: [
    'baby coughing a lot',
    'baby persistent cough',
    'baby cough won\'t go away',
    'baby dry cough',
    'baby wet cough',
    'baby cough causes',
    'baby barking cough',
    'baby cough and cold',
    'baby cough no fever',
    'how long should baby cough last',
  ],
  quickAnswer:
    'Coughing is a natural reflex that helps clear the airways. In babies, the most common cause of coughing is a viral upper respiratory infection (common cold), which can cause a cough lasting 1-3 weeks. While most coughs are not serious, certain types of cough (barking, whooping, or persistent) or coughs accompanied by breathing difficulty warrant medical evaluation.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young babies under 3 months who develop a cough should always be evaluated by a pediatrician, as they are more vulnerable to respiratory infections. The most common cause is a cold virus, but at this age, coughs can also indicate RSV bronchiolitis, pertussis (whooping cough), or pneumonia. Babies this young cannot effectively clear mucus, so nasal saline and gentle suctioning can help. If the cough is accompanied by fever, rapid breathing, poor feeding, or any breathing difficulty, seek medical care promptly.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Viral coughs are very common at this age, especially for babies in daycare or with older siblings. A typical cold cough may last 10-14 days and is often worst in the first 3-5 days. Post-nasal drip from congestion is a frequent cough trigger. A barking cough that sounds like a seal, especially at night, may indicate croup. A cough with wheezing may suggest bronchiolitis or early reactive airway disease. Honey should not be given to babies under 12 months for cough due to botulism risk.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Toddlers may have 6-8 colds per year, each lasting up to 2 weeks, so it can feel like they are always coughing. A cough that persists beyond 3-4 weeks, or a cough that is getting worse rather than better, should be evaluated. At this age, foreign body aspiration becomes a concern  -  a sudden onset of coughing or choking without preceding illness warrants immediate evaluation. After 12 months, a small amount of honey (half to one teaspoon) can help soothe a cough.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Persistent coughs in toddlers may be due to recurrent viral infections, asthma, allergies, enlarged adenoids, or postnasal drip. A cough that occurs primarily with exercise or cold air exposure may suggest asthma. Chronic wet cough (lasting more than 4 weeks) could indicate protracted bacterial bronchitis, which responds to antibiotics. Your pediatrician may recommend a trial of asthma medication or allergy treatment depending on the pattern.',
    },
  ],
  whenNormal: [
    'A cough during a cold that is gradually improving after the first week and resolves within 2-3 weeks',
    'Occasional coughing to clear mucus during or after a cold, especially after lying down',
    'Your baby is feeding well, breathing comfortably between coughing episodes, and has no fever',
    'A mild cough that comes and goes without any other concerning symptoms',
  ],
  whenToMention: [
    'The cough has lasted longer than 2-3 weeks or is not improving',
    'The cough is accompanied by wheezing, a persistent runny nose, or seems triggered by specific environments (dust, pets, smoke)',
    'Your baby coughs so much they vomit, especially after feeds',
  ],
  whenToActNow: [
    'Your baby under 3 months develops a cough with fever, or any baby has a cough with rapid breathing, chest retractions (ribs or belly pulling in), nasal flaring, or blue lips  -  seek emergency care',
    'A sudden onset of severe coughing or choking without illness, which may indicate a foreign body in the airway  -  call 911 if the baby cannot breathe, cry, or cough effectively',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Coughs and Colds: Medicines or Home Remedies?',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Coughs-and-Colds-Medicines-or-Home-Remedies.aspx',
    },
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. When to Keep Your Child Home from Child Care.',
      url: 'https://www.healthychildren.org/English/family-life/work-and-child-care/Pages/When-to-Keep-Your-Child-Home-from-Child-Care.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Croup: Symptoms and Causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/croup/symptoms-causes/syc-20350348',
    },
  ],
};
