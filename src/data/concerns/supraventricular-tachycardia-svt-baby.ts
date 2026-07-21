import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'supraventricular-tachycardia-svt-baby',
  title: 'Supraventricular Tachycardia (SVT) in Babies',
  category: 'medical',
  searchTerms: [
    'baby heart racing',
    'baby fast heart rate',
    'svt in baby',
    'supraventricular tachycardia infant',
    'baby heart beating too fast',
    'baby heart rate 220',
    'baby pale and irritable',
    'infant tachycardia episodes',
    'baby rapid heartbeat',
    'newborn svt',
  ],
  quickAnswer:
    'Supraventricular tachycardia (SVT) is the most common abnormal heart rhythm in infants and children. During an episode, the heart rate can reach 220-300 beats per minute in infants, compared to a normal rate of 100-160. Babies may become pale, irritable, or lethargic, and may feed poorly. Most episodes can be stopped with vagal maneuvers or medication, and many children outgrow SVT by age 1. If your baby appears pale, fussy, or you feel an extremely fast heartbeat, seek immediate medical attention.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'SVT in newborns and young infants can be difficult to detect because babies cannot describe symptoms. Signs include sudden pallor, irritability, poor feeding, rapid breathing, and lethargy. Some cases of SVT are detected prenatally on fetal echocardiogram. A heart rate above 220 bpm in an infant is characteristic. If SVT goes unrecognized for hours, it can lead to heart failure. Many infants respond well to treatment and about 60% of those diagnosed in the first year will outgrow SVT.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Infants in this age range may have intermittent SVT episodes that parents notice as sudden fussiness, pallor, or lethargy. You may feel an unusually fast heartbeat if you place your hand on your baby\'s chest. Some babies vomit during episodes. Episodes can last minutes to hours. Diagnosis is confirmed with an ECG during an episode. Many infants are placed on daily preventive medication until they outgrow SVT, often by 12 months of age.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers with SVT may be able to point to their chest or say their heart is "bumping." Episodes may cause pallor, sweating, or sudden refusal to play. Some children who had SVT as infants and outgrew it may have recurrence. SVT at this age is managed with medication, and some children may be candidates for monitoring to determine if episodes are decreasing in frequency.',
    },
    {
      ageRange: '3+ years',
      context:
        'Older children can often describe the sensation of a fast or "fluttering" heartbeat. They may complain of chest discomfort, dizziness, or feeling like their heart is "pounding." SVT episodes may be triggered by exercise, excitement, or caffeine. Children who have persistent SVT beyond age 5-7 may be candidates for catheter ablation, a procedure that can permanently correct the abnormal electrical pathway.',
    },
  ],
  whenNormal: [
    'Your baby\'s heart rate increases appropriately with crying, fever, or activity and returns to normal when calm',
    'Your pediatrician checked your baby\'s heart rate and it is within the normal range for their age',
    'Your baby has occasional brief moments of fussiness but the heart rate feels normal and they recover quickly',
    'Your child\'s heart beats faster during exercise and returns to normal within a few minutes of rest',
  ],
  whenToMention: [
    'You occasionally feel your baby\'s heart beating much faster than seems normal, even at rest',
    'Your baby has episodes of unexplained pallor, irritability, or sudden lethargy that resolve on their own',
    'There is a family history of SVT, Wolff-Parkinson-White syndrome, or other heart rhythm disorders',
  ],
  whenToActNow: [
    'Your baby\'s heart is beating extremely fast (you can feel or see a very rapid pulse), they are pale or gray, or they are lethargic or difficult to arouse -- call 911 or go to the emergency room immediately',
    'Your baby has signs of heart failure such as rapid breathing, sweating during feeds, poor feeding for several hours, and a very fast heartbeat',
    'A known SVT episode does not stop on its own within 10-15 minutes or your child loses consciousness during an episode',
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
        'American Academy of Pediatrics. Supraventricular Tachycardia (SVT). HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/heart/Pages/Supraventricular-Tachycardia-SVT.aspx',
    },
    {
      org: 'AHA',
      citation:
        'American Heart Association. Tachycardia: Fast Heart Rate. AHA, 2024.',
      url: 'https://www.heart.org/en/health-topics/arrhythmia/about-arrhythmia/tachycardia--fast-heart-rate',
    },
    {
      org: 'AAP',
      citation:
        'Doniger SJ, Sharieff GQ. Pediatric Dysrhythmias. Pediatric Clinics of North America, 2006;53(1):85-105.',
      url: 'https://publications.aap.org/pediatrics/article/118/6/2536/28630/Management-of-Supraventricular-Tachycardia-in',
    },
  ],
};
