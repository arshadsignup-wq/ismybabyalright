import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'myocarditis-baby',
  title: 'Myocarditis (Heart Muscle Inflammation) in Babies',
  category: 'medical',
  searchTerms: [
    'myocarditis baby',
    'heart inflammation infant',
    'viral myocarditis baby',
    'baby heart failure after virus',
    'baby heart weak after cold',
    'myocarditis symptoms infant',
    'baby rapid breathing heart problem',
    'heart muscle inflammation child',
    'post-viral heart baby',
    'myocarditis toddler',
  ],
  quickAnswer:
    'Myocarditis is inflammation of the heart muscle, most often caused by a viral infection. In babies and young children, it can develop during or after a common viral illness (such as a cold or stomach bug) and may cause the heart to weaken and pump less effectively. Symptoms include rapid breathing, poor feeding, excessive sleepiness, pallor, and sometimes a rapid or irregular heartbeat. Myocarditis can range from mild to life-threatening. If your baby seems unusually ill after a viral infection with signs of breathing difficulty or poor feeding, seek immediate medical attention.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Neonatal myocarditis is rare but can be severe. It is most often caused by enteroviruses (such as coxsackievirus) acquired during or shortly after birth. Symptoms may include poor feeding, lethargy, rapid breathing, grunting, grayish skin color, and a rapid heartbeat. Newborn myocarditis can progress rapidly to heart failure and cardiogenic shock. Any newborn who appears significantly unwell, especially with breathing difficulty and poor perfusion, needs emergency evaluation.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Infants may develop myocarditis after common viral infections. Signs include new-onset rapid breathing, poor feeding or refusal to eat, excessive sweating (especially during feeds), irritability, and unusual sleepiness. The baby may appear pale or grayish. Because these symptoms overlap with many common illnesses, myocarditis can be initially missed. If your baby seems to be recovering from a virus but then worsens or develops breathing difficulty, seek medical evaluation promptly.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers with myocarditis may present with poor appetite, vomiting, abdominal pain, fatigue, and rapid breathing. They may become less active, not want to play, or want to be held constantly. A previously active toddler who suddenly becomes very lethargic or has difficulty breathing should be evaluated. Myocarditis in toddlers is diagnosed with ECG, chest X-ray, echocardiogram, and blood tests (troponin and BNP levels).',
    },
    {
      ageRange: '3+ years',
      context:
        'Older children can describe symptoms such as chest pain, difficulty breathing, and feeling their heart beating fast or irregularly. Myocarditis in older children may follow a respiratory or gastrointestinal illness. Children may report that they feel very tired and cannot keep up with activities. If your child complains of chest pain, has difficulty breathing, or becomes unusually fatigued after a viral illness, medical evaluation is important.',
    },
  ],
  whenNormal: [
    'Your baby has a common cold or viral illness with mild symptoms that are improving day by day',
    'Your baby has a slightly faster heart rate during fever, which returns to normal when the fever resolves',
    'Your child is eating, drinking, and playing normally despite having a mild respiratory illness',
    'Your baby is recovering from a virus and energy levels are gradually returning to normal',
  ],
  whenToMention: [
    'Your baby seems to be taking longer than expected to recover from a viral illness and remains unusually tired',
    'Your baby\'s breathing seems faster than normal even after a fever has resolved',
    'Your child complains of chest discomfort or seems to tire more easily than usual after a recent illness',
  ],
  whenToActNow: [
    'Your baby has rapid or labored breathing, grayish or pale skin, poor feeding, and seems very lethargic -- these are signs of possible heart failure and require emergency evaluation',
    'Your child complains of severe chest pain, has an irregular heartbeat, or becomes faint or unresponsive -- call 911',
    'Your baby or child suddenly worsens after seeming to recover from a viral illness, with new signs of breathing difficulty or inability to feed',
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
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Myocarditis. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/heart/Pages/Myocarditis.aspx',
    },
    {
      org: 'AHA',
      citation:
        'American Heart Association. Myocarditis in Children. Circulation, 2014;129(1):115-128.',
      url: 'https://www.heart.org/en/health-topics/heart-failure/what-is-heart-failure/myocarditis',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Myocarditis: Symptoms and Causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/myocarditis/symptoms-causes/syc-20352539',
    },
  ],
};
