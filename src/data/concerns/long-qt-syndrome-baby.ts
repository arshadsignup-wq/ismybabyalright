import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'long-qt-syndrome-baby',
  title: 'Long QT Syndrome in Babies',
  category: 'medical',
  searchTerms: [
    'long qt syndrome baby',
    'long qt syndrome infant',
    'baby fainting spells heart',
    'inherited heart rhythm disorder baby',
    'sudden cardiac arrest baby',
    'baby seizure heart problem',
    'family history sudden cardiac death',
    'baby heart rhythm abnormal',
    'LQTS newborn',
    'long qt syndrome SIDS',
  ],
  quickAnswer:
    'Long QT syndrome (LQTS) is an inherited heart rhythm disorder affecting the electrical system of the heart. The "QT interval" on an ECG represents the time it takes for the heart muscle to recharge between beats -- when this interval is prolonged, it can trigger dangerous rapid heart rhythms. In infants, LQTS may present as unexplained fainting, seizure-like episodes, or, in severe cases, cardiac arrest. If there is a family history of LQTS, unexplained fainting, or sudden cardiac death, your baby should be screened with an ECG.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Some forms of LQTS can present in the newborn period. Signs may include an unusually slow heart rate for a newborn, episodes of cyanosis (turning blue), or seizure-like activity that is actually caused by a heart rhythm problem. LQTS has been identified as a potential contributor to some cases of SIDS. Newborn ECG screening is not universally performed but may be recommended if there is a family history. If your newborn has unexplained episodes of color change, limpness, or apparent life-threatening events, an ECG should be part of the evaluation.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Infants with LQTS may have episodes of pallor, sudden limpness, or loss of consciousness that can be mistaken for seizures. These episodes may occur during feeding, crying, or being startled by a loud noise. A standard 12-lead ECG is the primary screening tool. If LQTS is diagnosed, treatment with beta-blocker medications is highly effective at preventing dangerous rhythms. Genetic testing can identify the specific type of LQTS and guide treatment.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers with LQTS may have fainting spells, particularly triggered by excitement, exercise, being startled, or swimming. These episodes can be mistaken for breath-holding spells or seizure disorders. If your toddler has unexplained fainting, especially triggered by physical activity, emotions, or loud sounds, LQTS should be considered. Children diagnosed with LQTS are typically treated with beta-blockers and may need to avoid certain medications and intense physical activities.',
    },
    {
      ageRange: '3+ years',
      context:
        'Older children with LQTS may experience fainting during exercise, swimming, or emotional stress. Some children are diagnosed only after a family member is identified with the condition. Children with LQTS should wear a medical alert bracelet, avoid certain medications (a list is maintained at crediblemeds.org), and may need to modify sports participation. With proper treatment, the risk of cardiac events is greatly reduced.',
    },
  ],
  whenNormal: [
    'Your baby has brief breath-holding spells during crying that resolve on their own with no loss of consciousness',
    'Your child occasionally feels their heart "skip a beat" -- occasional premature beats are common and usually harmless',
    'Your child has been evaluated with an ECG that shows a normal QT interval',
    'Your family has no history of unexplained fainting, drowning, seizures, or sudden cardiac death at a young age',
  ],
  whenToMention: [
    'There is a family history of Long QT syndrome, unexplained fainting, unexplained drowning, or sudden cardiac death before age 40',
    'Your baby has had episodes of unexplained pallor, limpness, or apparent loss of consciousness',
    'Your child has been diagnosed with a seizure disorder but seizure medications are not fully controlling the episodes',
    'A family member has been newly diagnosed with LQTS and your child has not been screened',
  ],
  whenToActNow: [
    'Your baby or child has fainted or lost consciousness, especially during physical activity, swimming, being startled, or emotional stress -- call 911',
    'Your baby has had a sudden episode of going limp, unresponsive, or turning blue without explanation -- this could be a cardiac event and requires emergency evaluation',
    'Your child with known LQTS has a fainting episode or is not responding to you -- call 911 and begin CPR if there is no pulse',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'congenital-heart-defect-signs',
    'baby-heart-murmur',
    'cyanosis-baby',
  ],
  sources: [
    {
      org: 'AHA',
      citation:
        'American Heart Association. Long QT Syndrome. AHA, 2024.',
      url: 'https://www.heart.org/en/health-topics/arrhythmia/about-arrhythmia/long-qt-syndrome',
    },
    {
      org: 'AAP',
      citation:
        'Schwartz PJ, et al. Guidelines for the Interpretation of the Neonatal Electrocardiogram. European Heart Journal, 2002;23:1329-1344.',
      url: 'https://publications.aap.org/pediatrics/article/118/4/e1195/30116/Prolongation-of-the-QTc-in-the-First-Three-Days-of',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Long QT Syndrome: Symptoms and Causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/long-qt-syndrome/symptoms-causes/syc-20352518',
    },
  ],
};
