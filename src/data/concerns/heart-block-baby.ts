import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'heart-block-baby',
  title: 'Heart Block in Babies',
  category: 'medical',
  searchTerms: [
    'heart block baby',
    'heart block infant',
    'baby slow heart rate',
    'complete heart block baby',
    'congenital heart block',
    'baby bradycardia',
    'neonatal lupus heart block',
    'baby needs pacemaker',
    'av block baby',
    'baby heart rate too slow',
  ],
  quickAnswer:
    'Heart block is a condition where the electrical signals that coordinate the heartbeat are delayed or blocked between the upper chambers (atria) and lower chambers (ventricles) of the heart. In babies, congenital complete heart block (third-degree) is the most significant form, causing a very slow heart rate (often 50-80 bpm in newborns compared to a normal 120-160 bpm). The most common cause is maternal autoantibodies in mothers with lupus or Sjogren syndrome, which cross the placenta and damage the baby\'s conduction system. Many babies with complete heart block will need a pacemaker, either at birth or during infancy.',
  byAge: [
    {
      ageRange: 'Prenatal',
      context:
        'Congenital heart block is often detected prenatally when fetal bradycardia (slow heart rate) is identified during routine monitoring or ultrasound. Fetal heart rates below 100 bpm warrant urgent evaluation with fetal echocardiography. The most common cause is anti-SSA/Ro and anti-SSB/La antibodies from the mother, even in mothers who have no symptoms of autoimmune disease. If detected, the pregnancy is closely monitored by maternal-fetal medicine and pediatric cardiology. Some cases may warrant maternal treatment with dexamethasone.',
    },
    {
      ageRange: '0-3 months',
      context:
        'Newborns with congenital complete heart block have a ventricular rate typically between 50-80 bpm. Some babies tolerate this well initially, while others show signs of heart failure including poor feeding, lethargy, and breathing difficulty. An ECG confirms the diagnosis, showing atrial and ventricular rhythms that are independent of each other. Babies with heart rates below 55 bpm, signs of heart failure, or associated structural heart defects typically need pacemaker implantation in the first days to weeks of life.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Infants with complete heart block who were stable at birth may be monitored closely with regular ECGs, Holter monitors, and echocardiograms. If the ventricular rate remains adequate and the baby is feeding well and growing, pacemaker implantation may be deferred. However, if the heart rate drops further, the baby shows signs of exercise intolerance (tiring during feeds), or the heart begins to enlarge, a pacemaker becomes necessary. In small infants, the pacemaker leads are typically placed on the outside of the heart (epicardial) rather than through the veins.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers with pacemakers generally lead active, normal lives with some precautions. The pacemaker generator is typically placed in the abdomen in young children. Parents learn to check the pulse and recognize signs that the pacemaker may need adjustment. Children with pacemakers need to avoid strong magnets and certain medical equipment (MRI may require special protocols). Regular pacemaker checks (in-office or remote monitoring) are essential.',
    },
    {
      ageRange: '3+ years',
      context:
        'Older children with pacemakers can participate in most activities, though contact sports may need modification to protect the pacemaker generator. The pacemaker battery will eventually need replacement (typically every 5-10 years depending on use). As children grow, lead revisions or conversions from epicardial to transvenous systems may be needed. Long-term outcomes for children with congenital heart block and pacemakers are generally excellent.',
    },
  ],
  whenNormal: [
    'Your baby has a heart rate that is appropriate for their age (normal resting heart rate for newborns is 120-160 bpm, decreasing gradually through childhood)',
    'Your baby has first-degree heart block (a minor prolongation of conduction time) that the pediatrician or cardiologist says is benign',
    'Your child with a pacemaker is growing well, active, and meeting developmental milestones',
  ],
  whenToMention: [
    'You have lupus, Sjogren syndrome, or are known to carry anti-SSA/Ro or anti-SSB/La antibodies and are pregnant or planning pregnancy',
    'Your baby\'s heart rate seems consistently slower than expected during well-baby visits',
    'Your child with a pacemaker seems less active than usual or is having more fatigue',
    'Your child with known heart block has not had a cardiology follow-up or pacemaker check in over 6 months',
  ],
  whenToActNow: [
    'Your newborn has a very slow heart rate (below 80 bpm) with poor feeding, lethargy, or difficulty breathing -- seek emergency care immediately',
    'Your baby or child with a pacemaker becomes suddenly lethargic, has a very slow pulse, faints, or appears pale or gray -- the pacemaker may be malfunctioning, call 911',
    'Your baby has episodes of prolonged pauses in heartbeat, unresponsiveness, or seizure-like activity -- call 911',
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
        'American Heart Association. Conduction Disorders in Children. AHA, 2024.',
      url: 'https://www.heart.org/en/health-topics/arrhythmia/about-arrhythmia/conduction-disorders',
    },
    {
      org: 'AAP',
      citation:
        'Friedman DM, et al. Congenital Heart Block. Pediatrics in Review, 2019;40(8):388-398.',
      url: 'https://publications.aap.org/pediatricsinreview/article/40/8/388/35277/Congenital-Heart-Block',
    },
    {
      org: 'NIH',
      citation:
        'National Heart, Lung, and Blood Institute. Heart Block.',
      url: 'https://www.nhlbi.nih.gov/health/heart-block',
    },
  ],
};
